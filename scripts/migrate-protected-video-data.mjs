import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

const applyChanges = process.argv.includes('--apply');
const projectId = process.env.FIREBASE_PROJECT_ID;
const firestoreEmulatorHost = process.env.FIRESTORE_EMULATOR_HOST;
const authEmulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;

if (!projectId) {
  throw new Error('Set FIREBASE_PROJECT_ID explicitly before running this migration.');
}
if ((firestoreEmulatorHost || authEmulatorHost) && !(firestoreEmulatorHost && authEmulatorHost)) {
  throw new Error('Set both Firestore and Auth emulator hosts, or neither, to avoid a mixed migration target.');
}

const app = initializeApp({ credential: applicationDefault(), projectId });
const db = getFirestore(app);
const ops = [];
const stats = {
  courses: 0,
  courseVideos: 0,
  liveSessions: 0,
  replayVideos: 0,
  liveSettings: 0,
  storageEntitlements: 0,
  orphanedLegacyGrants: 0,
};

function extractYoutubeId(value) {
  const text = String(value || '').trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  try {
    const url = new URL(text);
    const hostname = url.hostname.toLowerCase();
    if (hostname === 'youtu.be') {
      const id = url.pathname.slice(1);
      return /^[\w-]{11}$/.test(id) ? id : '';
    }
    if (!['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(hostname)) {
      return '';
    }
    const id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
    return id && /^[\w-]{11}$/.test(id) ? id : '';
  } catch {
    return '';
  }
}

function sensitiveFields(data, names) {
  return Object.fromEntries(names
    .filter(name => Object.prototype.hasOwnProperty.call(data, name))
    .map(name => [name, FieldValue.delete()]));
}

function sourceVideo(data, names, context) {
  const rawSources = names
    .map(name => data[name])
    .filter(value => value !== undefined && value !== null && value !== '');
  if (rawSources.some(value => typeof value !== 'string')) {
    throw new Error(`Unexpected video field type in ${context}; review this document manually.`);
  }
  const sources = rawSources.map(value => value.trim()).filter(Boolean);
  const idValues = [data.youtubeVideoId, data.videoId]
    .filter(value => value !== undefined && value !== null && value !== '');
  if (idValues.some(value => typeof value !== 'string')) {
    throw new Error(`Unexpected video ID type in ${context}; review this document manually.`);
  }
  const ids = idValues.map(value => value.trim()).filter(Boolean);
  if (ids.some(value => !extractYoutubeId(value))) {
    throw new Error(`Invalid YouTube video ID in ${context}; review this document manually.`);
  }
  const candidates = [...sources, ...ids];
  const identities = new Set(candidates.map(value => {
    const id = extractYoutubeId(value);
    return id ? `youtube:${id}` : `url:${value}`;
  }));
  if (identities.size > 1) {
    throw new Error(`Conflicting video fields in ${context}; review this document manually.`);
  }
  const url = sources[0] || '';
  const youtubeVideoId = extractYoutubeId(ids[0] || url);
  const normalizedUrl = /^[\w-]{11}$/.test(url)
    ? `https://www.youtube.com/watch?v=${url}`
    : url;
  return {
    url: normalizedUrl || (youtubeVideoId ? `https://www.youtube.com/watch?v=${youtubeVideoId}` : ''),
    youtubeVideoId,
  };
}

function queueSet(ref, data, merge = true) {
  ops.push({ kind: 'set', ref, data, merge });
}

function queueUpdate(ref, data) {
  ops.push({ kind: 'update', ref, data });
}

function queueDelete(ref) {
  ops.push({ kind: 'delete', ref });
}

async function readAll(query) {
  const documents = [];
  for await (const snapshot of query.stream()) documents.push(snapshot);
  return documents;
}

const userDocs = await readAll(db.collection('users'));
const usersByEmail = new Map();
const blockedByUid = new Map();
for (const snapshot of userDocs) {
  const user = snapshot.data();
  blockedByUid.set(snapshot.id, user.blocked === true);
  if (typeof user.email === 'string') usersByEmail.set(user.email.trim().toLowerCase(), snapshot.id);
}
let authPageToken;
do {
  const page = await getAuth(app).listUsers(1000, authPageToken);
  for (const user of page.users) {
    if (user.email && !usersByEmail.has(user.email.trim().toLowerCase())) {
      usersByEmail.set(user.email.trim().toLowerCase(), user.uid);
      if (!blockedByUid.has(user.uid)) blockedByUid.set(user.uid, false);
    }
  }
  authPageToken = page.pageToken;
} while (authPageToken);

const courseDocs = await readAll(db.collection('courses'));
for (const snapshot of courseDocs) {
  const data = snapshot.data();
  const video = sourceVideo(data, ['videoUrl', 'youtubeUrl'], `courses/${snapshot.id}`);
  const remove = sensitiveFields(data, ['videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId']);
  if (video.url) {
    queueSet(db.doc(`courseVideos/${snapshot.id}`), { videoUrl: video.url });
    stats.courseVideos += 1;
  }
  if (Object.keys(remove).length) {
    queueUpdate(snapshot.ref, remove);
    stats.courses += 1;
  }
}

const liveDocs = await readAll(db.collection('liveSessions'));
for (const snapshot of liveDocs) {
  const data = snapshot.data();
  const video = sourceVideo(data, ['videoUrl', 'youtubeUrl', 'url'], `liveSessions/${snapshot.id}`);
  const remove = sensitiveFields(data, ['videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId', 'url']);
  if (video.url) {
    queueSet(db.doc(`liveSessionVideos/${snapshot.id}`), {
      url: video.url,
      ...(video.youtubeVideoId ? { youtubeVideoId: video.youtubeVideoId } : {}),
    });
    stats.replayVideos += 1;
  }
  if (Object.keys(remove).length) {
    queueUpdate(snapshot.ref, remove);
    stats.liveSessions += 1;
  }
}

const liveSettingsRef = db.doc('settings/liveStream');
const liveSettingsSnap = await liveSettingsRef.get();
if (liveSettingsSnap.exists) {
  const data = liveSettingsSnap.data();
  const video = sourceVideo(data, ['url', 'videoUrl', 'youtubeUrl'], 'settings/liveStream');
  const remove = sensitiveFields(data, ['url', 'videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId']);
  if (video.url) {
    queueSet(db.doc('liveStreamSecrets/current'), { url: video.url });
    stats.liveSettings += 1;
  }
  if (Object.keys(remove).length) queueUpdate(liveSettingsRef, remove);
}

const accessParents = new Map();
const effectiveCourseAccess = new Map();
function parentFor(uid) {
  if (!accessParents.has(uid)) {
    accessParents.set(uid, {
      blocked: blockedByUid.get(uid) === true,
      allCourses: false,
    });
  }
  return accessParents.get(uid);
}

function setCourseAccess(uid, courseId, status) {
  if (!uid || !courseId) return;
  const key = `${uid}\u0000${courseId}`;
  const existing = effectiveCourseAccess.get(key);
  if (existing === 'revoked') return;
  effectiveCourseAccess.set(key, status);
}

const enrollmentDocs = await readAll(db.collection('enrollments'));
for (const snapshot of enrollmentDocs) {
  const enrollment = snapshot.data();
  if (!enrollment.userId || !enrollment.courseId) continue;
  parentFor(enrollment.userId);
  if (enrollment.status === 'approved' || enrollment.status === 'revoked') {
    setCourseAccess(enrollment.userId, enrollment.courseId, enrollment.status);
  }
}

const legacyGrantDocs = await readAll(db.collection('authorized_users'));
for (const snapshot of legacyGrantDocs) {
  const access = snapshot.data();
  if (access.access !== 'granted') continue;
  const uid = usersByEmail.get(snapshot.id.trim().toLowerCase());
  if (!uid) {
    stats.orphanedLegacyGrants += 1;
    continue;
  }
  const parent = parentFor(uid);
  if (!Object.prototype.hasOwnProperty.call(access, 'courseIds')) {
    parent.allCourses = true;
  } else if (Array.isArray(access.courseIds)) {
    access.courseIds.forEach(courseId => setCourseAccess(uid, courseId, 'approved'));
  }
}

const existingAccessParents = await readAll(db.collection('courseAccess'));
for (const snapshot of existingAccessParents) {
  parentFor(snapshot.id);
  const childDocs = await readAll(snapshot.ref.collection('courses'));
  for (const child of childDocs) {
    const key = `${snapshot.id}\u0000${child.id}`;
    if (!effectiveCourseAccess.has(key)) queueDelete(child.ref);
  }
}

for (const [uid, data] of accessParents) {
  queueSet(db.doc(`courseAccess/${uid}`), data);
  stats.storageEntitlements += 1;
}
for (const [key, status] of effectiveCourseAccess) {
  const [uid, courseId] = key.split('\u0000');
  queueSet(db.doc(`courseAccess/${uid}/courses/${courseId}`), { status });
  stats.storageEntitlements += 1;
}

console.log(`${applyChanges ? 'Applying' : 'Dry run'} for Firebase project ${projectId}`);
console.log(JSON.stringify({ ...stats, writesPlanned: ops.length }, null, 2));
if (!applyChanges) {
  console.log('No data was changed. Re-run with --apply only after reviewing the plan and backing up the project.');
} else {
  if (stats.orphanedLegacyGrants > 0) {
    throw new Error('Legacy grants without a Firebase Auth user cannot be mirrored safely. Resolve them before applying.');
  }
  for (let start = 0; start < ops.length; start += 400) {
    const batch = db.batch();
    for (const operation of ops.slice(start, start + 400)) {
      if (operation.kind === 'set') batch.set(operation.ref, operation.data, { merge: operation.merge });
      else if (operation.kind === 'update') batch.update(operation.ref, operation.data);
      else batch.delete(operation.ref);
    }
    await batch.commit();
  }
  console.log('Migration completed. Verify the public catalog, live archive, enrollments, and Storage access before deploying rules.');
}

await app.delete();

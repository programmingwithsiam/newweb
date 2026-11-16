import { readFile } from 'node:fs/promises';
import { after, before, beforeEach, test } from 'node:test';
import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getBytes, ref, uploadBytes } from 'firebase/storage';

const projectId = 'demo-codewithsiam';
const adminEmail = 'mdsiamahmmedloselovestroy@gmail.com';
let testEnv;

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId,
    firestore: { rules: await readFile(new URL('../firestore.rules', import.meta.url), 'utf8') },
    storage: { rules: await readFile(new URL('../storage.rules', import.meta.url), 'utf8') },
  });
});

after(async () => {
  await testEnv?.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
  await testEnv.clearStorage();
});

function context(uid, email = `${uid}@example.com`, emailVerified = true) {
  return testEnv.authenticatedContext(uid, {
    email,
    email_verified: emailVerified,
  });
}

async function seedDocuments(entries) {
  await testEnv.withSecurityRulesDisabled(async (adminContext) => {
    const firestore = adminContext.firestore();
    await Promise.all(entries.map(([path, data]) => setDoc(doc(firestore, path), data)));
  });
}

test('public catalog stays public while protected course videos require access', async () => {
  await seedDocuments([
    ['courses/public', { title: 'Public course' }],
    ['courses/legacy', { title: 'Legacy course', videoUrl: 'https://example.test/video' }],
    ['courseVideos/courseA', { videoUrl: 'https://example.test/video' }],
    ['enrollments/enrolled_courseA', { userId: 'enrolled', status: 'approved' }],
    ['users/blocked', { uid: 'blocked', blocked: true }],
  ]);

  await assertSucceeds(getDoc(doc(testEnv.unauthenticatedContext().firestore(), 'courses/public')));
  await assertFails(getDoc(doc(testEnv.unauthenticatedContext().firestore(), 'courses/legacy')));
  await assertFails(getDoc(doc(testEnv.unauthenticatedContext().firestore(), 'courseVideos/courseA')));
  await assertSucceeds(getDoc(doc(context('enrolled').firestore(), 'courseVideos/courseA')));
  await assertFails(getDoc(doc(context('unverified', undefined, false).firestore(), 'courseVideos/courseA')));
  await assertFails(getDoc(doc(context('blocked').firestore(), 'courseVideos/courseA')));
  await assertSucceeds(getDoc(doc(context('admin', adminEmail).firestore(), 'courseVideos/courseA')));
});

test('legacy grants are course-scoped and revoked enrollment takes precedence', async () => {
  await seedDocuments([
    ['authorized_users/revoked@example.com', { access: 'granted' }],
    ['authorized_users/scoped@example.com', { access: 'granted', courseIds: ['courseA'] }],
    ['enrollments/revoked_courseA', { userId: 'revoked', status: 'revoked' }],
    ['courseVideos/courseA', { videoUrl: 'https://example.test/a' }],
    ['courseVideos/courseB', { videoUrl: 'https://example.test/b' }],
  ]);

  await assertFails(getDoc(doc(context('revoked', 'revoked@example.com').firestore(), 'courseVideos/courseA')));
  await assertSucceeds(getDoc(doc(context('revoked', 'revoked@example.com').firestore(), 'courseVideos/courseB')));
  await assertSucceeds(getDoc(doc(context('scoped', 'scoped@example.com').firestore(), 'courseVideos/courseA')));
  await assertFails(getDoc(doc(context('scoped', 'scoped@example.com').firestore(), 'courseVideos/courseB')));
});

test('blocked users cannot use previews or undo their blocked profile', async () => {
  await seedDocuments([
    ['users/blocked', { uid: 'blocked', blocked: true }],
    ['courses/courseA/modules/moduleA', { order: 0 }],
    ['courses/courseA/modules/moduleA/lessons/preview', { isFreePreview: true, order: 0 }],
    ['courses/courseA/modules/moduleA/lessons/locked', { isFreePreview: false, order: 2 }],
  ]);

  const anonymousDb = testEnv.unauthenticatedContext().firestore();
  const blockedDb = context('blocked').firestore();
  await assertSucceeds(getDoc(doc(anonymousDb, 'courses/courseA/modules/moduleA/lessons/preview')));
  await assertFails(getDoc(doc(blockedDb, 'courses/courseA/modules/moduleA/lessons/preview')));
  await assertFails(getDoc(doc(anonymousDb, 'courses/courseA/modules/moduleA/lessons/locked')));
  await assertFails(updateDoc(doc(blockedDb, 'users/blocked'), { blocked: false }));
  await assertFails(deleteDoc(doc(blockedDb, 'users/blocked')));
});

test('live metadata is public only when it contains no protected video fields', async () => {
  await seedDocuments([
    ['settings/liveStream', { enabled: true, title: 'Live' }],
    ['settings/unsafe', { enabled: true, url: 'https://example.test/private' }],
    ['liveSessions/public', { title: 'Replay' }],
    ['liveSessions/unsafe', { title: 'Replay', videoId: 'private-id' }],
    ['liveSessionVideos/sessionA', { videoUrl: 'https://example.test/replay' }],
    ['liveStreamSecrets/sessionA', { url: 'https://example.test/live' }],
    ['users/blocked', { uid: 'blocked', blocked: true }],
  ]);

  const anonymousDb = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(anonymousDb, 'settings/liveStream')));
  await assertFails(getDoc(doc(anonymousDb, 'settings/unsafe')));
  await assertSucceeds(getDoc(doc(anonymousDb, 'liveSessions/public')));
  await assertFails(getDoc(doc(anonymousDb, 'liveSessions/unsafe')));
  await assertFails(getDoc(doc(anonymousDb, 'liveSessionVideos/sessionA')));
  await assertSucceeds(getDoc(doc(context('member').firestore(), 'liveStreamSecrets/sessionA')));
  await assertFails(getDoc(doc(context('unverified', undefined, false).firestore(), 'liveSessionVideos/sessionA')));
  await assertSucceeds(getDoc(doc(context('member').firestore(), 'liveSessionVideos/sessionA')));
  await assertFails(getDoc(doc(context('blocked').firestore(), 'liveSessionVideos/sessionA')));
});

test('Storage lesson access honors enrollment, legacy grants, revocation, and blocking', async () => {
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const pathA = `lessons/courseA/moduleA/lesson-${suffix}.mp4`;
  const pathB = `lessons/courseB/moduleA/lesson-${suffix}.mp4`;
  await seedDocuments([
    ['courseAccess/enrolled', { blocked: false }],
    ['courseAccess/enrolled/courses/courseA', { status: 'approved' }],
    ['courseAccess/legacyAll', { blocked: false, allCourses: true }],
    ['courseAccess/scoped', { blocked: false, allCourses: false }],
    ['courseAccess/scoped/courses/courseA', { status: 'approved' }],
    ['courseAccess/revoked', { blocked: false, allCourses: true }],
    ['courseAccess/revoked/courses/courseA', { status: 'revoked' }],
    ['courseAccess/blocked', { blocked: true, allCourses: true }],
    ['courseAccess/blocked/courses/courseA', { status: 'approved' }],
    ['courseAccess/unverified', { blocked: false, allCourses: true }],
  ]);

  const adminStorage = context('admin', adminEmail).storage();
  await assertSucceeds(uploadBytes(ref(adminStorage, pathA), new Uint8Array([1, 2, 3]), {
    contentType: 'video/mp4',
  }));
  await assertSucceeds(uploadBytes(ref(adminStorage, pathB), new Uint8Array([4, 5, 6]), {
    contentType: 'video/mp4',
  }));

  await assertSucceeds(getBytes(ref(context('enrolled').storage(), pathA)));
  await assertSucceeds(getBytes(ref(context('legacyAll').storage(), pathA)));
  await assertSucceeds(getBytes(ref(context('scoped').storage(), pathA)));
  await assertFails(getBytes(ref(context('scoped').storage(), pathB)));
  await assertFails(getBytes(ref(context('revoked').storage(), pathA)));
  await assertFails(getBytes(ref(context('blocked').storage(), pathA)));
  await assertFails(getBytes(ref(context('unverified', undefined, false).storage(), pathA)));
  await assertFails(getBytes(ref(context('noAccess').storage(), pathA)));
  await assertSucceeds(getBytes(ref(adminStorage, pathA)));
});

test('users can create only their approved course access mirror entries', async () => {
  await seedDocuments([
    ['users/mirrorUser', { uid: 'mirrorUser', blocked: false }],
    ['enrollments/mirrorUser_courseA', { userId: 'mirrorUser', status: 'approved' }],
  ]);
  const firestore = context('mirrorUser').firestore();

  await assertSucceeds(setDoc(doc(firestore, 'courseAccess/mirrorUser'), { blocked: false }));
  await assertSucceeds(setDoc(doc(firestore, 'courseAccess/mirrorUser/courses/courseA'), { status: 'approved' }));
  await assertFails(setDoc(doc(firestore, 'courseAccess/mirrorUser/courses/courseB'), { status: 'approved' }));
  await assertFails(updateDoc(doc(firestore, 'courseAccess/mirrorUser'), { allCourses: true }));
});

test('only a verified admin can manage protected profiles and video records', async () => {
  await seedDocuments([
    ['users/student', { uid: 'student', blocked: false }],
    ['courseVideos/courseA', { videoUrl: 'https://example.test/a' }],
  ]);
  const unverifiedAdmin = context('admin', adminEmail, false).firestore();
  const verifiedAdmin = context('admin', adminEmail).firestore();

  await assertFails(updateDoc(doc(unverifiedAdmin, 'users/student'), { blocked: true }));
  await assertSucceeds(updateDoc(doc(verifiedAdmin, 'users/student'), { blocked: true }));
  await assertSucceeds(setDoc(doc(verifiedAdmin, 'courseVideos/courseA'), {
    videoUrl: 'https://example.test/updated',
  }));
  await assertFails(setDoc(doc(unverifiedAdmin, 'courseVideos/courseA'), {
    videoUrl: 'https://example.test/denied',
  }));
});

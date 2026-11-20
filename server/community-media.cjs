const crypto = require('node:crypto');
const { readFileSync } = require('node:fs');
const { isAbsolute, resolve } = require('node:path');
const { getApps, initializeApp, cert } = require('firebase-admin/app');
const { getAppCheck } = require('firebase-admin/app-check');
const { getAuth } = require('firebase-admin/auth');
const { FieldValue, getFirestore } = require('firebase-admin/firestore');

const IMAGE_LIMIT = 5 * 1024 * 1024;
const VIDEO_LIMIT = 50 * 1024 * 1024;
const REEL_LIMIT = 60 * 1024 * 1024;
const SOCIAL_ACTION_INTERVAL_MS = 300;
const PRODUCTION_ORIGIN = 'https://codewithsiam.vercel.app';

function firebaseAdmin() {
  if (!getApps().some((app) => app.name === '[DEFAULT]')) {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT is not configured.');
    let serviceAccount;
    try {
      const setting = raw.trim();
      const contents = setting.startsWith('{')
        ? setting
        : readFileSync(isAbsolute(setting) ? setting : resolve(__dirname, setting), 'utf8');
      serviceAccount = JSON.parse(contents);
    } catch {
      throw new Error('FIREBASE_SERVICE_ACCOUNT must be valid JSON or a readable JSON file.');
    }
    if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT is missing required service-account fields.');
    }
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    initializeApp({ credential: cert(serviceAccount) });
  }
  return { auth: getAuth(), db: getFirestore() };
}

function isCommunityIdentityAllowed(decoded) {
  return decoded?.email_verified === true || decoded?.firebase?.sign_in_provider === 'google.com';
}

function isAppCheckRequired(nodeEnv = process.env.NODE_ENV, setting = process.env.REQUIRE_APP_CHECK) {
  return setting === 'true' || (nodeEnv === 'production' && setting !== 'false');
}

function cloudinaryConfig() {
  const { CLOUDINARY_CLOUD_NAME: cloud, CLOUDINARY_API_KEY: key, CLOUDINARY_API_SECRET: secret } = process.env;
  if (!cloud || !/^[a-z0-9-]+$/i.test(cloud) || !key || !secret) {
    throw new Error('Cloudinary server credentials are not configured correctly.');
  }
  return { cloud, key, secret };
}

function setCors(request, response) {
  const origin = request.headers.origin || '';
  const localAllowed = process.env.NODE_ENV !== 'production' && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  if (origin === PRODUCTION_ORIGIN || localAllowed) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Vary', 'Origin');
    response.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Firebase-AppCheck');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
  return origin === PRODUCTION_ORIGIN || localAllowed;
}

async function authenticate(request, { requireRecentAuth = false } = {}) {
  const match = /^Bearer\s+(.+)$/i.exec(request.headers.authorization || '');
  if (!match) {
    const error = new Error('Sign-in is required.');
    error.status = 401;
    throw error;
  }
  const { auth, db } = firebaseAdmin();
  let decoded;
  try {
    decoded = await auth.verifyIdToken(match[1], true);
  } catch {
    const error = new Error('Sign-in has expired. Sign in again and retry.');
    error.status = 401;
    throw error;
  }
  if (!isCommunityIdentityAllowed(decoded)) {
    const error = new Error('Community access requires Google sign-in or a verified email.');
    error.status = 403;
    throw error;
  }
  const authAge = Math.floor(Date.now() / 1000) - decoded.auth_time;
  if (requireRecentAuth && (!Number.isFinite(authAge) || authAge < 0 || authAge > 5 * 60)) {
    const error = new Error('Reauthenticate with Google and try again.');
    error.status = 401;
    throw error;
  }
  const userSnapshot = await db.doc(`users/${decoded.uid}`).get();
  if (userSnapshot.data()?.banned === true) {
    const error = new Error('This account is not permitted to upload media.');
    error.status = 403;
    throw error;
  }
  if (isAppCheckRequired()) {
    const appCheckToken = request.headers['x-firebase-appcheck'];
    if (!appCheckToken) {
      const error = new Error('App Check token is required.');
      error.status = 401;
      throw error;
    }
    try {
      await getAppCheck().verifyToken(appCheckToken);
    } catch {
      const error = new Error('App Check token is invalid.');
      error.status = 401;
      throw error;
    }
  }
  return { uid: decoded.uid, db };
}

function json(response, status, body) {
  response.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(body));
}

function fail(response, error) {
  const status = Number.isInteger(error.status) ? error.status : 500;
  if (status >= 500) console.error('Community API failure:', error.message);
  json(response, status, { error: status >= 500 ? 'Request could not be completed.' : error.message });
}

function parseJsonBody(request) {
  if (!request.headers['content-type']?.toLowerCase().startsWith('application/json')) {
    const error = new Error('Content-Type must be application/json.');
    error.status = 415;
    throw error;
  }
  const body = request.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    const error = new Error('A JSON object is required.');
    error.status = 400;
    throw error;
  }
  return body;
}

function validateMediaInput(body, uid) {
  const { kind, mimeType, size } = body;
  const imageTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const videoTypes = ['video/mp4', 'video/webm'];
  const isImage = kind === 'image' && imageTypes.includes(mimeType);
  const isVideo = ['video', 'reel'].includes(kind) && videoTypes.includes(mimeType);
  const maxBytes = kind === 'image' ? IMAGE_LIMIT : kind === 'reel' ? REEL_LIMIT : VIDEO_LIMIT;
  if ((!isImage && !isVideo) || !Number.isSafeInteger(size) || size <= 0 || size > maxBytes) {
    const error = new Error('Unsupported media type or file size.');
    error.status = 400;
    throw error;
  }
  const assetFolder = `users/${uid}/${kind}`;
  const publicId = `${assetFolder}/${crypto.randomUUID()}`;
  const allowedFormats = isImage ? 'jpg,png,webp' : 'mp4,webm';
  return {
    publicId,
    assetFolder,
    allowedFormats,
    resourceType: isImage ? 'image' : 'video',
    maxBytes,
  };
}

function cloudinarySignature(params, secret) {
  const canonical = Object.keys(params).sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return crypto.createHash('sha1').update(`${canonical}${secret}`).digest('hex');
}

function mediaAssetId(publicId) {
  return crypto.createHash('sha256').update(publicId).digest('hex');
}

function consumeSocialActionRate(transaction, reference, snapshot, field) {
  const timestamp = snapshot.data()?.[field];
  const lastAt = typeof timestamp?.toMillis === 'function'
    ? timestamp.toMillis()
    : timestamp instanceof Date ? timestamp.getTime() : 0;
  if (Date.now() - lastAt < SOCIAL_ACTION_INTERVAL_MS) {
    const error = new Error('Please wait before changing this social action again.');
    error.status = 429;
    throw error;
  }
  const update = { [field]: new Date() };
  if (snapshot.exists) transaction.update(reference, update);
  else transaction.create(reference, update);
}

async function cloudinaryResource(publicId, resourceType) {
  const { cloud, key, secret } = cloudinaryConfig();
  const url = new URL(`https://api.cloudinary.com/v1_1/${cloud}/resources/${resourceType}/upload`);
  url.searchParams.append('public_ids[]', publicId);
  url.searchParams.set('max_results', '1');
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString('base64')}` },
  });
  if (!response.ok) throw new Error(`Cloudinary resource verification failed (${response.status}).`);
  const result = await response.json();
  return result.resources?.find((item) => item.public_id === publicId) || null;
}

async function destroyCloudinaryResource(publicId, resourceType) {
  const { cloud, key, secret } = cloudinaryConfig();
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = cloudinarySignature({ public_id: publicId, timestamp }, secret);
  const body = new URLSearchParams({ public_id: publicId, timestamp: String(timestamp), api_key: key, signature });
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/${resourceType}/destroy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!response.ok) throw new Error(`Cloudinary media deletion failed (${response.status}).`);
  const result = await response.json();
  if (!['ok', 'not found'].includes(result.result)) throw new Error('Cloudinary did not confirm media deletion.');
}

async function deleteUserMedia(uid) {
  const { cloud, key, secret } = cloudinaryConfig();
  for (const resourceType of ['image', 'video']) {
    let nextCursor;
    do {
      const url = new URL(`https://api.cloudinary.com/v1_1/${cloud}/resources/${resourceType}/upload`);
      const body = new URLSearchParams({ prefix: `users/${uid}/` });
      if (nextCursor) body.set('next_cursor', nextCursor);
      const response = await fetch(url, {
        method: 'DELETE',
        headers: { Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString('base64')}` },
        body,
      });
      if (!response.ok) throw new Error(`Could not delete Cloudinary ${resourceType} media (${response.status}).`);
      const result = await response.json();
      nextCursor = result.partial ? result.next_cursor : null;
      if (result.partial && !nextCursor) {
        throw new Error(`Cloudinary did not return a continuation cursor for ${resourceType} media deletion.`);
      }
    } while (nextCursor);
  }
}

function assertAllowedKeys(body, allowedKeys) {
  if (Object.keys(body).some((key) => !allowedKeys.includes(key))) {
    const error = new Error('Request contains unsupported fields.');
    error.status = 400;
    throw error;
  }
}

async function deleteOwnedDocuments(db, uid) {
  const batchSize = 300;
  const deleteQuery = async (query) => {
    let snapshot = await query.limit(batchSize).get();
    while (!snapshot.empty) {
      const batch = db.batch();
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
      if (snapshot.size < batchSize) break;
      snapshot = await query.limit(batchSize).get();
    }
  };

  const postQuery = db.collection('posts').where('authorUid', '==', uid);
  let posts = await postQuery.limit(20).get();
  while (!posts.empty) {
    for (const post of posts.docs) await db.recursiveDelete(post.ref);
    posts = await postQuery.limit(20).get();
  }
  const chatQuery = db.collection('chats').where('members', 'array-contains', uid);
  let chats = await chatQuery.limit(20).get();
  while (!chats.empty) {
    for (const chat of chats.docs) {
      await deleteQuery(chat.ref.collection('messages').where('senderUid', '==', uid));
      const typing = await chat.ref.collection('typing').get();
      if (!typing.empty) {
        const batch = db.batch();
        typing.docs.forEach((item) => batch.delete(item.ref));
        await batch.commit();
      }
      const lastMessage = await chat.ref.collection('messages')
        .orderBy('createdAt', 'desc')
        .limit(1)
        .get();
      const latest = lastMessage.docs[0];
      const members = chat.data().members.filter((member) => member !== uid);
      const unread = Object.fromEntries(members.map((member) => [member, 0]));
      await chat.ref.update(latest ? {
        members,
        unread,
        archived: true,
        lastMessage: latest.data().text,
        lastMessageId: latest.id,
        lastMessageUid: latest.data().senderUid,
        lastMessageAt: latest.data().createdAt,
        updatedAt: FieldValue.serverTimestamp(),
      } : {
        members,
        unread,
        archived: true,
        lastMessage: 'Conversation archived',
        lastMessageId: FieldValue.delete(),
        lastMessageUid: FieldValue.delete(),
        lastMessageAt: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    }
    chats = await chatQuery.limit(20).get();
  }
  await Promise.all([
    deleteQuery(db.collectionGroup('comments').where('authorUid', '==', uid)),
    deleteQuery(db.collection('stories').where('authorUid', '==', uid)),
    deleteQuery(db.collection('reels').where('authorUid', '==', uid)),
    deleteQuery(db.collection('follows').where('followerUid', '==', uid)),
    deleteQuery(db.collection('follows').where('followingUid', '==', uid)),
    deleteQuery(db.collection('reports').where('reporterUid', '==', uid)),
    deleteQuery(db.collection('blocks').where('ownerUid', '==', uid)),
    deleteQuery(db.collectionGroup('items').where('fromUid', '==', uid)),
    deleteQuery(db.collection(`notifications/${uid}/items`)),
    deleteQuery(db.collection('mediaAssets').where('ownerUid', '==', uid)),
    deleteQuery(db.collection('savedPosts').where('ownerUid', '==', uid)),
    deleteQuery(db.collection('mutes').where('ownerUid', '==', uid)),
    deleteQuery(db.collection('blocks').where('blockedUid', '==', uid)),
  ]);
  await Promise.all([
    db.doc(`users/${uid}`).delete(),
    db.doc(`publicProfiles/${uid}`).delete(),
    db.doc(`publicDirectory/${uid}`).delete(),
    db.doc(`admins/${uid}`).delete(),
    db.doc(`writeRates/${uid}`).delete(),
    db.doc(`uploadRates/${uid}`).delete(),
    db.doc(`commentRates/${uid}`).delete(),
    db.doc(`socialActionRates/${uid}`).delete(),
  ]);
}

module.exports = {
  IMAGE_LIMIT,
  VIDEO_LIMIT,
  REEL_LIMIT,
  PRODUCTION_ORIGIN,
  authenticate,
  assertAllowedKeys,
  cloudinaryConfig,
  cloudinarySignature,
  cloudinaryResource,
  consumeSocialActionRate,
  destroyCloudinaryResource,
  deleteUserMedia,
  deleteOwnedDocuments,
  firebaseAdmin,
  fail,
  isCommunityIdentityAllowed,
  isAppCheckRequired,
  json,
  mediaAssetId,
  parseJsonBody,
  setCors,
  validateMediaInput,
  FieldValue,
};

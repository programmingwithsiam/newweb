import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url);
const media = require('../server/community-media.cjs');

function createMemoryDb(initial = {}) {
  const documents = new Map(Object.entries(initial));
  const reference = (path) => ({
    path,
    collection(name) {
      return { doc: (id) => reference(`${path}/${name}/${id}`) };
    },
    get: async () => snapshot(reference(path)),
  });
  const snapshot = (ref) => {
    const data = documents.get(ref.path);
    return { exists: data !== undefined, data: () => data && structuredClone(data) };
  };
  const applyValues = (current, update) => {
    const next = { ...current };
    for (const [key, value] of Object.entries(update)) {
      if (value?.operation === 'arrayUnion') {
        next[key] = [...new Set([...(next[key] || []), ...value.values])];
      } else if (value?.operation === 'arrayRemove') {
        next[key] = (next[key] || []).filter((item) => !value.values.includes(item));
      } else {
        next[key] = value;
      }
    }
    return next;
  };
  return {
    documents,
    doc: reference,
    async recursiveDelete(ref) {
      for (const path of documents.keys()) {
        if (path === ref.path || path.startsWith(`${ref.path}/`)) documents.delete(path);
      }
    },
    async runTransaction(callback) {
      const writes = [];
      const transaction = {
        get: async (ref) => snapshot(ref),
        create: (ref, data) => writes.push({ kind: 'create', ref, data }),
        update: (ref, data) => writes.push({ kind: 'update', ref, data }),
        delete: (ref) => writes.push({ kind: 'delete', ref }),
      };
      const result = await callback(transaction);
      for (const write of writes) {
        if (write.kind === 'delete') documents.delete(write.ref.path);
        else if (write.kind === 'create') {
          if (documents.has(write.ref.path)) throw new Error('Already exists');
          documents.set(write.ref.path, structuredClone(write.data));
        } else {
          const current = documents.get(write.ref.path);
          if (!current) throw new Error('Missing document');
          documents.set(write.ref.path, applyValues(current, write.data));
        }
      }
      return result;
    },
  };
}

function invoke(handler, body) {
  const response = {
    statusCode: 0,
    headers: new Map(),
    body: '',
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers.set(name, value);
      return this;
    },
    end(value = '') {
      this.body = value;
    },
  };
  return handler({
    method: 'POST',
    headers: {
      origin: 'http://localhost:5173',
      'content-type': 'application/json',
    },
    body,
  }, response).then(() => ({
    status: response.statusCode,
    body: JSON.parse(response.body || '{}'),
  }));
}

test('Community authentication accepts Google sign-in without an email_verified claim', () => {
  assert.equal(media.isCommunityIdentityAllowed({
    email_verified: false,
    firebase: { sign_in_provider: 'google.com' },
  }), true);
  assert.equal(media.isCommunityIdentityAllowed({
    email_verified: false,
    firebase: { sign_in_provider: 'password' },
  }), false);
  assert.equal(media.isCommunityIdentityAllowed({ email_verified: true }), true);
});

test('social APIs keep reactions and follows idempotent and enforce comment ownership', async (t) => {
  const original = {
    authenticate: media.authenticate,
    FieldValue: media.FieldValue,
    nodeEnv: process.env.NODE_ENV,
  };
  let uid = 'alice';
  const db = createMemoryDb({
    'posts/post-1': { authorUid: 'bob', likeCount: 0, commentCount: 1 },
    'posts/post-1/comments/comment-1': { authorUid: 'alice', text: 'Owned comment' },
    'publicProfiles/alice': { uid: 'alice', followers: [], following: [], followersCount: 0, followingCount: 0 },
    'publicProfiles/bob': { uid: 'bob', followers: [], following: [], followersCount: 0, followingCount: 0 },
  });
  media.authenticate = async () => ({ uid, db });
  media.FieldValue = {
    serverTimestamp: () => new Date(),
    arrayUnion: (...values) => ({ operation: 'arrayUnion', values }),
    arrayRemove: (...values) => ({ operation: 'arrayRemove', values }),
  };
  process.env.NODE_ENV = 'test';

  const handlerPaths = [
    '../api/toggle-reaction.js',
    '../api/toggle-follow.js',
    '../api/toggle-comment-reaction.js',
    '../api/delete-comment.js',
    '../api/delete-post.js',
  ];
  const handlers = handlerPaths.map((path) => {
    const resolved = require.resolve(path);
    delete require.cache[resolved];
    return require(resolved);
  });
  t.after(() => {
    media.authenticate = original.authenticate;
    media.FieldValue = original.FieldValue;
    if (original.nodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = original.nodeEnv;
    handlerPaths.forEach((path) => delete require.cache[require.resolve(path)]);
  });

  const [toggleReaction, toggleFollow, toggleCommentReaction, deleteComment, deletePost] = handlers;
  assert.deepEqual((await invoke(toggleReaction, { postId: 'post-1', type: 'like' })).body,
    { liked: true, type: 'like', likeCount: 1 });
  assert.deepEqual((await invoke(toggleReaction, { postId: 'post-1', type: 'like' })).body,
    { liked: true, type: 'like', likeCount: 1 });
  assert.equal((await invoke(toggleReaction, { postId: 'post-1', type: null })).status, 429);
  await new Promise((resolve) => setTimeout(resolve, 320));
  assert.deepEqual((await invoke(toggleReaction, { postId: 'post-1', type: null })).body,
    { liked: false, type: null, likeCount: 0 });

  assert.deepEqual((await invoke(toggleFollow, { followingUid: 'bob', following: true })).body,
    { following: true, followersCount: 1, followingCount: 1 });
  assert.deepEqual((await invoke(toggleFollow, { followingUid: 'bob', following: true })).body,
    { following: true, followersCount: 1, followingCount: 1 });
  assert.equal((await invoke(toggleFollow, { followingUid: 'bob', following: false })).status, 429);
  await new Promise((resolve) => setTimeout(resolve, 320));
  assert.deepEqual((await invoke(toggleFollow, { followingUid: 'bob', following: false })).body,
    { following: false, followersCount: 0, followingCount: 0 });
  assert.deepEqual(db.documents.get('publicProfiles/alice').following, []);
  assert.deepEqual(db.documents.get('publicProfiles/bob').followers, []);
  db.documents.set('blocks/alice_bob', { ownerUid: 'alice', blockedUid: 'bob' });
  assert.equal((await invoke(toggleFollow, { followingUid: 'bob', following: true })).status, 403);

  assert.deepEqual((await invoke(toggleCommentReaction, {
    postId: 'post-1',
    commentId: 'comment-1',
    type: 'love',
  })).body, { type: 'love', reactionCounts: { love: 1 } });
  assert.equal((await invoke(toggleCommentReaction, {
    postId: 'post-1',
    commentId: 'comment-1',
    type: null,
  })).status, 429);
  await new Promise((resolve) => setTimeout(resolve, 320));
  assert.deepEqual((await invoke(toggleCommentReaction, {
    postId: 'post-1',
    commentId: 'comment-1',
    type: null,
  })).body, { type: null, reactionCounts: {} });

  uid = 'bob';
  const deniedDelete = await invoke(deleteComment, { postId: 'post-1', commentId: 'comment-1' });
  assert.equal(deniedDelete.status, 403);
  uid = 'alice';
  assert.deepEqual((await invoke(deleteComment, {
    postId: 'post-1',
    commentId: 'comment-1',
  })).body, { deleted: true, commentCount: 0 });
  assert.equal(db.documents.has('posts/post-1/comments/comment-1'), false);

  db.documents.set('posts/post-2', { authorUid: 'bob', text: 'Bob post' });
  db.documents.set('posts/post-2/comments/old-comment', { authorUid: 'alice' });
  const deniedPostDelete = await invoke(deletePost, { postId: 'post-2' });
  assert.equal(deniedPostDelete.status, 403);
  uid = 'bob';
  assert.deepEqual((await invoke(deletePost, { postId: 'post-2' })).body, { deleted: true });
  assert.equal(db.documents.has('posts/post-2/comments/old-comment'), false);
});

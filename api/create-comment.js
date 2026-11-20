const {
  authenticate,
  assertAllowedKeys,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../server/community-media.cjs');
const { randomUUID } = require('node:crypto');

module.exports = async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    if (!setCors(request, response)) return json(response, 403, { error: 'Origin not allowed.' });
    response.status(204).end();
    return;
  }
  if (!setCors(request, response)) return json(response, 403, { error: 'Origin not allowed.' });
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return json(response, 405, { error: 'Method not allowed.' });
  }
  try {
    const body = parseJsonBody(request);
    assertAllowedKeys(body, ['postId', 'text', 'parentCommentId']);
    const { uid, db } = await authenticate(request);
    const postId = typeof body.postId === 'string' ? body.postId : '';
    const text = typeof body.text === 'string' ? body.text.trim() : '';
    const parentCommentId = typeof body.parentCommentId === 'string' ? body.parentCommentId : '';
    if (!/^[A-Za-z0-9_-]{1,150}$/.test(postId) || !text || text.length > 1000) {
      return json(response, 400, { error: 'Post ID or comment text is invalid.' });
    }
    if (parentCommentId && !/^[A-Za-z0-9_-]{1,150}$/.test(parentCommentId)) {
      return json(response, 400, { error: 'Parent comment ID is invalid.' });
    }
    const postRef = db.doc(`posts/${postId}`);
    const userRef = db.doc(`users/${uid}`);
    const rateRef = db.doc(`commentRates/${uid}`);
    const parentRef = parentCommentId ? postRef.collection('comments').doc(parentCommentId) : null;
    const commentRef = postRef.collection('comments').doc(randomUUID());
    let commentCount = 0;
    await db.runTransaction(async (transaction) => {
      const reads = [
        transaction.get(postRef),
        transaction.get(userRef),
        transaction.get(rateRef),
      ];
      if (parentRef) reads.push(transaction.get(parentRef));
      const [postSnapshot, userSnapshot, rateSnapshot, parentSnapshot] = await Promise.all(reads);
      if (!postSnapshot.exists) {
        const error = new Error('Post not found.');
        error.status = 404;
        throw error;
      }
      if (parentRef && (!parentSnapshot?.exists || parentSnapshot.data()?.parentCommentId)) {
        const error = new Error('Reply target not found.');
        error.status = 404;
        throw error;
      }
      if (userSnapshot.data()?.banned === true) {
        const error = new Error('This account is not permitted to comment.');
        error.status = 403;
        throw error;
      }
      const authorUid = postSnapshot.data().authorUid;
      const [outgoingBlock, incomingBlock] = await Promise.all([
        transaction.get(db.doc(`blocks/${uid}_${authorUid}`)),
        transaction.get(db.doc(`blocks/${authorUid}_${uid}`)),
      ]);
      if (outgoingBlock.exists || incomingBlock.exists) {
        const error = new Error('You cannot comment on this post.');
        error.status = 403;
        throw error;
      }
      const lastAt = rateSnapshot.data()?.lastCommentAt?.toMillis?.() || 0;
      if (Date.now() - lastAt < 2000) {
        const error = new Error('Please wait a moment before commenting again.');
        error.status = 429;
        throw error;
      }
      const profile = userSnapshot.data() || {};
      const comment = {
        authorUid: uid,
        authorName: String(profile.name || 'Community member').slice(0, 120),
        authorPhoto: String(profile.photoURL || '').slice(0, 2000),
        text,
        createdAt: FieldValue.serverTimestamp(),
      };
      if (parentCommentId) comment.parentCommentId = parentCommentId;
      transaction.create(commentRef, comment);
      commentCount = Number(postSnapshot.data().commentCount || 0) + 1;
      transaction.update(postRef, {
        commentCount,
        updatedAt: FieldValue.serverTimestamp(),
      });
      transaction.set(rateRef, { lastCommentAt: FieldValue.serverTimestamp() });
    });
    return json(response, 201, { commentId: commentRef.id, commentCount });
  } catch (error) {
    return fail(response, error);
  }
};

const {
  authenticate,
  assertAllowedKeys,
  consumeSocialActionRate,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../server/community-media.cjs');

const REACTION_TYPES = new Set(['like', 'love', 'care', 'haha', 'wow', 'sad', 'angry']);

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
    assertAllowedKeys(body, ['postId', 'commentId', 'type']);
    const { uid, db } = await authenticate(request);
    const postId = typeof body.postId === 'string' ? body.postId : '';
    const commentId = typeof body.commentId === 'string' ? body.commentId : '';
    const type = body.type === null ? null : typeof body.type === 'string' ? body.type : '';
    if (!/^[A-Za-z0-9_-]{1,150}$/.test(postId) ||
        !/^[A-Za-z0-9_-]{1,150}$/.test(commentId) ||
        (type !== null && !REACTION_TYPES.has(type))) {
      return json(response, 400, { error: 'Post, comment, or reaction type is invalid.' });
    }

    const postRef = db.doc(`posts/${postId}`);
    const commentRef = postRef.collection('comments').doc(commentId);
    const rateRef = db.doc(`socialActionRates/${uid}`);
    const reactionRef = commentRef.collection('reactions').doc(uid);
    let result;
    await db.runTransaction(async (transaction) => {
      const [postSnapshot, commentSnapshot, userSnapshot, reactionSnapshot, rateSnapshot] = await Promise.all([
        transaction.get(postRef),
        transaction.get(commentRef),
        transaction.get(db.doc(`users/${uid}`)),
        transaction.get(reactionRef),
        transaction.get(rateRef),
      ]);
      if (!postSnapshot.exists || !commentSnapshot.exists) {
        const error = new Error('Comment not found.');
        error.status = 404;
        throw error;
      }
      if (userSnapshot.data()?.banned === true) {
        const error = new Error('This account is not permitted to react.');
        error.status = 403;
        throw error;
      }

      const comment = commentSnapshot.data();
      const authorUid = String(comment.authorUid || '');
      const [authorBlock, userBlock] = await Promise.all([
        transaction.get(db.doc(`blocks/${uid}_${authorUid}`)),
        transaction.get(db.doc(`blocks/${authorUid}_${uid}`)),
      ]);
      const current = reactionSnapshot.exists ? reactionSnapshot.data() : null;
      if (current && current.uid !== uid) {
        const error = new Error('Reaction ownership could not be verified.');
        error.status = 409;
        throw error;
      }
      const unchanged = current?.type === type || (!current && type === null);
      if ((authorBlock.exists || userBlock.exists) && !unchanged && type !== null) {
        const error = new Error('You cannot react to this comment.');
        error.status = 403;
        throw error;
      }
      if (!unchanged) consumeSocialActionRate(transaction, rateRef, rateSnapshot, 'lastCommentReactionAt');

      const reactionCounts = { ...(comment.reactionCounts || {}) };
      if (!unchanged && current && type === null) {
        transaction.delete(reactionRef);
        reactionCounts[current.type] = Math.max(0, Number(reactionCounts[current.type] || 0) - 1);
        if (!reactionCounts[current.type]) delete reactionCounts[current.type];
      } else if (!unchanged && current) {
        transaction.update(reactionRef, { type, updatedAt: FieldValue.serverTimestamp() });
        reactionCounts[current.type] = Math.max(0, Number(reactionCounts[current.type] || 0) - 1);
        if (!reactionCounts[current.type]) delete reactionCounts[current.type];
        reactionCounts[type] = Number(reactionCounts[type] || 0) + 1;
      } else if (!unchanged) {
        transaction.create(reactionRef, {
          uid,
          type,
          createdAt: FieldValue.serverTimestamp(),
        });
        reactionCounts[type] = Number(reactionCounts[type] || 0) + 1;
      }
      if (!unchanged) {
        transaction.update(commentRef, {
          reactionCounts,
          updatedAt: FieldValue.serverTimestamp(),
        });
      }
      result = { type, reactionCounts };
    });
    return json(response, 200, result);
  } catch (error) {
    return fail(response, error);
  }
};

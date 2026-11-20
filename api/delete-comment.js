const {
  authenticate,
  assertAllowedKeys,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../server/community-media.cjs');

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
    assertAllowedKeys(body, ['postId', 'commentId']);
    const { uid, db } = await authenticate(request);
    const postId = typeof body.postId === 'string' ? body.postId : '';
    const commentId = typeof body.commentId === 'string' ? body.commentId : '';
    if (!/^[A-Za-z0-9_-]{1,150}$/.test(postId) ||
        !/^[A-Za-z0-9_-]{1,150}$/.test(commentId)) {
      return json(response, 400, { error: 'Post or comment ID is invalid.' });
    }

    const postRef = db.doc(`posts/${postId}`);
    const commentRef = postRef.collection('comments').doc(commentId);
    let commentCount = 0;
    await db.runTransaction(async (transaction) => {
      const [postSnapshot, commentSnapshot, userSnapshot] = await Promise.all([
        transaction.get(postRef),
        transaction.get(commentRef),
        transaction.get(db.doc(`users/${uid}`)),
      ]);
      if (!postSnapshot.exists || !commentSnapshot.exists) {
        const error = new Error('Comment not found.');
        error.status = 404;
        throw error;
      }
      if (userSnapshot.data()?.banned === true) {
        const error = new Error('This account is not permitted to delete comments.');
        error.status = 403;
        throw error;
      }
      if (commentSnapshot.data().authorUid !== uid) {
        const error = new Error('You can delete only your own comments.');
        error.status = 403;
        throw error;
      }
      commentCount = Math.max(0, Number(postSnapshot.data().commentCount || 0) - 1);
      transaction.delete(commentRef);
      transaction.update(postRef, {
        commentCount,
        updatedAt: FieldValue.serverTimestamp(),
      });
    });
    return json(response, 200, { deleted: true, commentCount });
  } catch (error) {
    return fail(response, error);
  }
};

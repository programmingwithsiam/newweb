const {
  authenticate,
  assertAllowedKeys,
  fail,
  json,
  parseJsonBody,
  setCors,
} = require('../community-media.cjs');

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
    assertAllowedKeys(body, ['postId']);
    const { uid, db } = await authenticate(request);
    const postId = typeof body.postId === 'string' ? body.postId : '';
    if (!/^[A-Za-z0-9_-]{1,150}$/.test(postId)) {
      return json(response, 400, { error: 'Post ID is invalid.' });
    }

    const postRef = db.doc(`posts/${postId}`);
    const post = await postRef.get();
    if (!post.exists) return json(response, 404, { error: 'Post not found.' });
    if (post.data().authorUid !== uid) {
      return json(response, 403, { error: 'You can delete only your own posts.' });
    }
    await db.recursiveDelete(postRef);
    return json(response, 200, { deleted: true });
  } catch (error) {
    return fail(response, error);
  }
};

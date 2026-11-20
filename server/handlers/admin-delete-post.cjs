const {
  authenticate,
  assertAllowedKeys,
  destroyCloudinaryResource,
  fail,
  json,
  mediaAssetId,
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
    if (typeof body.postId !== 'string' || !/^[A-Za-z0-9_-]{1,150}$/.test(body.postId)) {
      return json(response, 400, { error: 'Invalid post ID.' });
    }
    if (!(await db.doc(`admins/${uid}`).get()).exists) return json(response, 403, { error: 'Administrator access is required.' });
    const postRef = db.doc(`posts/${body.postId}`);
    const postSnapshot = await postRef.get();
    if (!postSnapshot.exists) return json(response, 404, { error: 'Post not found.' });
    const post = postSnapshot.data();
    if (post.mediaAssetId) {
      const assetRef = db.doc(`mediaAssets/${post.mediaAssetId}`);
      const assetSnapshot = await assetRef.get();
      if (assetSnapshot.exists) {
        const asset = assetSnapshot.data();
        if (asset.ownerUid === post.authorUid) {
          await destroyCloudinaryResource(asset.publicId, asset.resourceType);
        }
        await assetRef.delete();
      }
    }
    await db.recursiveDelete(postRef);
    return json(response, 200, { deleted: true });
  } catch (error) {
    return fail(response, error);
  }
};

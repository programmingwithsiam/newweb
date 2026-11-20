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
    assertAllowedKeys(body, ['publicId', 'resourceType']);
    const { uid, db } = await authenticate(request);
    const { publicId, resourceType } = body;
    if (typeof publicId !== 'string' || !publicId.startsWith(`users/${uid}/`) ||
        !['image', 'video'].includes(resourceType)) {
      return json(response, 400, { error: 'Invalid media reference.' });
    }
    const assetRef = db.doc(`mediaAssets/${mediaAssetId(publicId)}`);
    const asset = await assetRef.get();
    if (asset.exists && asset.data().ownerUid !== uid) return json(response, 403, { error: 'Media owner mismatch.' });
    await destroyCloudinaryResource(publicId, resourceType);
    if (asset.exists) await assetRef.delete();
    return json(response, 200, { deleted: true });
  } catch (error) {
    return fail(response, error);
  }
};

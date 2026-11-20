const {
  authenticate,
  assertAllowedKeys,
  cloudinaryResource,
  destroyCloudinaryResource,
  fail,
  json,
  mediaAssetId,
  parseJsonBody,
  setCors,
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
    assertAllowedKeys(body, ['publicId', 'resourceType', 'kind']);
    const { uid, db } = await authenticate(request);
    const { publicId, resourceType, kind } = body;
    if (typeof publicId !== 'string' || !publicId.startsWith(`users/${uid}/`) ||
        !['image', 'video'].includes(resourceType) || !['image', 'video', 'reel'].includes(kind)) {
      return json(response, 400, { error: 'Invalid media reference.' });
    }
    const resource = await cloudinaryResource(publicId, resourceType);
    if (!resource) return json(response, 404, { error: 'Uploaded media was not found.' });
    if (resource.asset_folder !== `users/${uid}/${kind}`) {
      return json(response, 403, { error: 'Uploaded media is outside the permitted account folder.' });
    }
    const maxBytes = kind === 'image' ? 5 * 1024 * 1024 : kind === 'reel' ? 60 * 1024 * 1024 : 50 * 1024 * 1024;
    const validImage = kind === 'image' && resourceType === 'image' && ['jpg', 'jpeg', 'png', 'webp'].includes(resource.format);
    const validVideo = kind !== 'image' && resourceType === 'video' && ['mp4', 'webm'].includes(resource.format);
    if ((!validImage && !validVideo) || resource.bytes > maxBytes ||
        (kind === 'reel' && (!Number.isFinite(resource.duration) || resource.duration > 60))) {
      await destroyCloudinaryResource(publicId, resourceType);
      return json(response, 400, { error: 'Media does not meet the supported format, size, or duration limits.' });
    }
    const assetId = mediaAssetId(publicId);
    const asset = {
      ownerUid: uid,
      publicId,
      resourceType,
      kind,
      secureUrl: resource.secure_url,
      bytes: resource.bytes,
      format: resource.format,
      duration: resource.duration || null,
      createdAt: new Date(),
    };
    await db.doc(`mediaAssets/${assetId}`).set(asset);
    return json(response, 200, { assetId, ...asset });
  } catch (error) {
    return fail(response, error);
  }
};

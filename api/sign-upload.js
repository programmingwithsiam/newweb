const crypto = require('node:crypto');
const {
  authenticate,
  assertAllowedKeys,
  cloudinaryConfig,
  cloudinarySignature,
  fail,
  json,
  parseJsonBody,
  setCors,
  validateMediaInput,
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
    assertAllowedKeys(body, ['kind', 'mimeType', 'size']);
    const { uid, db } = await authenticate(request);
    const media = validateMediaInput(body, uid);
    const rateRef = db.doc(`uploadRates/${uid}`);
    await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(rateRef);
      const lastAt = snapshot.data()?.lastUploadAt?.toMillis?.() || 0;
      if (Date.now() - lastAt < 1000) {
        const error = new Error('Please wait before uploading another file.');
        error.status = 429;
        throw error;
      }
      transaction.set(rateRef, { lastUploadAt: new Date() }, { merge: true });
    });

    const { cloud, key, secret } = cloudinaryConfig();
    const timestamp = Math.floor(Date.now() / 1000);
    const params = {
      allowed_formats: media.allowedFormats,
      asset_folder: media.assetFolder,
      overwrite: 'false',
      public_id: media.publicId,
      timestamp: String(timestamp),
    };
    const signature = cloudinarySignature(params, secret);
    return json(response, 200, {
      cloudName: cloud,
      apiKey: key,
      timestamp,
      signature,
      assetFolder: media.assetFolder,
      publicId: media.publicId,
      resourceType: media.resourceType,
      allowedFormats: media.allowedFormats,
      maxBytes: media.maxBytes,
      uploadId: crypto.randomUUID(),
    });
  } catch (error) {
    return fail(response, error);
  }
};

const {
  authenticate,
  assertAllowedKeys,
  deleteOwnedDocuments,
  deleteUserMedia,
  fail,
  json,
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
    assertAllowedKeys(body, ['confirm']);
    if (body.confirm !== 'DELETE') return json(response, 400, { error: 'Explicit account deletion confirmation is required.' });
    const { uid, db } = await authenticate(request, { requireRecentAuth: true });
    await deleteOwnedDocuments(db, uid);
    await deleteUserMedia(uid);
    const { auth } = require('../server/community-media.cjs').firebaseAdmin();
    await auth.deleteUser(uid);
    return json(response, 200, { deleted: true });
  } catch (error) {
    return fail(response, error);
  }
};

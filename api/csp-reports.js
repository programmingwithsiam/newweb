module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  console.warn('CSP report received');
  return res.status(204).end();
};

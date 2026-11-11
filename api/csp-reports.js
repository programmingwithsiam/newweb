module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const report = req.body || {};
  console.warn('CSP report received', JSON.stringify(report));
  return res.status(204).end();
};

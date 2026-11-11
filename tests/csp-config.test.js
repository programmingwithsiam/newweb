const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.join(__dirname, '..');
const vercelConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'vercel.json'), 'utf8'));
const rootHeaders = vercelConfig.headers.find(header => header.source === '/(.*)')?.headers || [];
const headerMap = Object.fromEntries(rootHeaders.map((header) => [header.key, header.value]));
const indexHtml = fs.readFileSync(path.join(repoRoot, 'index.html'), 'utf8');
const courseHtml = fs.readFileSync(path.join(repoRoot, 'course.html'), 'utf8');

// Failing test: the headers are expected to restrict scripts and reporting for the static deployment.
test('Vercel deployment enforces a CSP with reporting and no inline event handlers', () => {
  assert.match(headerMap['Content-Security-Policy'] || '', /default-src 'self'/i);
  assert.match(headerMap['Content-Security-Policy'] || '', /script-src 'self'/i);
  assert.match(headerMap['Content-Security-Policy'] || '', /report-uri\s+\/api\/csp-reports|report-to\s+csp-endpoint/i);
  assert.doesNotMatch(indexHtml, /onclick=|onkeydown=/i);
  assert.doesNotMatch(courseHtml, /<script>\s*var \$/i);
  assert.match(courseHtml, /course-payment\.js/i);
});

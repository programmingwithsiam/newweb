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

// The static deployment should restrict scripts and report CSP violations.
test('Vercel deployment enforces a CSP with reporting and no inline event handlers', () => {
  assert.match(headerMap['Content-Security-Policy'] || '', /default-src 'self'/i);
  assert.match(headerMap['Content-Security-Policy'] || '', /script-src 'self'/i);
  assert.match(headerMap['Content-Security-Policy'] || '', /report-uri\s+\/api\/csp-reports|report-to\s+csp-endpoint/i);
  assert.doesNotMatch(indexHtml, /onclick=|onkeydown=/i);
  assert.doesNotMatch(courseHtml, /<script>\s*var \$/i);
  assert.match(courseHtml, /course-payment\.js/i);
});

test('Content Security Policy permits Firebase modules and their auth frames', () => {
  const csp = headerMap['Content-Security-Policy'] || '';

  assert.match(csp, /script-src[^;]*https:\/\/www\.gstatic\.com/i);
  assert.match(csp, /script-src[^;]*https:\/\/www\.google\.com/i);
  assert.match(csp, /connect-src[^;]*https:\/\/www\.google\.com/i);
  assert.match(csp, /frame-src[^;]*https:\/\/mylatestweb-fd3d7\.firebaseapp\.com/i);
  assert.match(csp, /frame-src[^;]*https:\/\/www\.google\.com/i);
});

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.join(__dirname, '..');
const serveConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'serve.json'), 'utf8'));
const vercelConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'vercel.json'), 'utf8'));

test('local clean URLs match production destinations for static pages', () => {
  for (const route of ['/admin', '/course', '/live', '/privacy', '/terms', '/community', '/community/']) {
    const localRewrite = serveConfig.rewrites.find(rewrite => rewrite.source === route);
    const productionRewrite = vercelConfig.rewrites.find(rewrite => rewrite.source === route);

    assert.ok(localRewrite, `Missing local rewrite for ${route}`);
    assert.ok(productionRewrite, `Missing production rewrite for ${route}`);
    assert.equal(localRewrite.destination, productionRewrite.destination);
    assert.ok(
      fs.existsSync(path.join(repoRoot, localRewrite.destination.replace(/^\//, ''))),
      `Missing page for ${route}`
    );
  }
});

test('community route loads its isolated stylesheet and script', () => {
  const html = fs.readFileSync(path.join(repoRoot, 'community/index.html'), 'utf8');

  assert.match(html, /href="\/community\/community\.css"/);
  for (const script of ['community.js', 'mock-adapter.js', 'messenger.js', 'community-extras.js']) {
    assert.ok(html.includes(`src="/community/${script}" defer`), `Missing ${script} from the community page`);
    assert.ok(fs.existsSync(path.join(repoRoot, 'community', script)));
  }
  assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
  assert.ok(fs.existsSync(path.join(repoRoot, 'community/community.css')));
});

test('production CSP allows the community video embed providers', () => {
  const headers = vercelConfig.headers.find(header => header.source === '/(.*)').headers;
  const csp = headers.find(header => header.key === 'Content-Security-Policy').value;

  for (const host of ['https://www.youtube-nocookie.com', 'https://www.facebook.com', 'https://www.instagram.com']) {
    assert.ok(csp.includes(host), `CSP does not allow ${host}`);
  }
});

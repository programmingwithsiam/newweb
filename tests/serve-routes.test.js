const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.join(__dirname, '..');
const serveConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'serve.json'), 'utf8'));
const vercelConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'vercel.json'), 'utf8'));

test('local clean URLs match production destinations for static information pages', () => {
  for (const route of ['/live', '/privacy', '/terms']) {
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

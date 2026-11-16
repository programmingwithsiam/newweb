const test = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/csp-reports');

test('CSP reports are not copied into application logs', () => {
  const warnings = [];
  const originalWarn = console.warn;
  const response = {
    statusCode: 0,
    ended: false,
    status(code) {
      this.statusCode = code;
      return this;
    },
    end() {
      this.ended = true;
      return this;
    },
  };

  console.warn = (...values) => warnings.push(values);
  try {
    handler({
      method: 'POST',
      body: {
        'csp-report': {
          'document-uri': 'https://example.test/?token=private-value',
          'blocked-uri': 'https://third-party.test/resource',
        },
      },
    }, response);
  } finally {
    console.warn = originalWarn;
  }

  assert.equal(response.statusCode, 204);
  assert.equal(response.ended, true);
  assert.equal(JSON.stringify(warnings).includes('private-value'), false);
  assert.equal(JSON.stringify(warnings).includes('third-party.test'), false);
});

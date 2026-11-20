import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createRequire } from 'node:module';
import test from 'node:test';
import app, { getAllowedOrigins } from '../server/src/index.js';

const require = createRequire(import.meta.url);

test('production CORS excludes loopback origins even when configured', () => {
  const origins = getAllowedOrigins(
    'production',
    'https://codewithsiam.vercel.app,http://localhost:5173,http://127.0.0.1:3000,http://[::1]:5173',
  );
  assert.deepEqual([...origins], ['https://codewithsiam.vercel.app']);
  assert.ok(getAllowedOrigins('development').has('http://localhost:5173'));
});

test('App Check is required by default in production and remains optional in development', () => {
  const media = require('../server/community-media.cjs');
  assert.equal(media.isAppCheckRequired('production', undefined), true);
  assert.equal(media.isAppCheckRequired('production', 'false'), false);
  assert.equal(media.isAppCheckRequired('development', undefined), false);
  assert.equal(media.isAppCheckRequired('development', 'true'), true);
});

test('local Community media API is routed and returns JSON auth errors', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/sign-upload`, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:5173',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  assert.equal(response.status, 401);
  assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
  assert.deepEqual(await response.json(), { error: 'Sign-in is required.' });
});

test('local Community social APIs are routed and reject unauthenticated actions', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));
  const { port } = server.address();

  for (const path of [
    '/api/toggle-reaction',
    '/api/delete-comment',
    '/api/toggle-follow',
    '/api/delete-post',
  ]) {
    const response = await fetch(`http://127.0.0.1:${port}${path}`, {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:5173',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    assert.equal(response.status, 401, `${path} must require authentication`);
    assert.deepEqual(await response.json(), { error: 'Sign-in is required.' });
  }
});

test('legacy OTP authentication endpoints are no longer mounted', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));
  const { port } = server.address();

  for (const path of [
    '/api/auth/send-otp',
    '/api/auth/verify-otp',
    '/api/auth/resend-otp',
    '/api/auth/register/start',
    '/auth/register/start',
  ]) {
    const response = await fetch(`http://127.0.0.1:${port}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    assert.equal(response.status, 404, `${path} must not be available`);
  }
});

test('signed upload endpoint keeps the dynamic-folder public ID unchanged', async () => {
  const media = require('../server/community-media.cjs');
  const original = {
    authenticate: media.authenticate,
    cloudinaryConfig: media.cloudinaryConfig,
    cloudinarySignature: media.cloudinarySignature,
  };
  let signedParams;
  media.authenticate = async () => ({
    uid: 'local-smoke-test',
    db: {
      doc: () => ({}),
      runTransaction: async (callback) => callback({
        get: async () => ({ data: () => ({}) }),
        set: () => {},
      }),
    },
  });
  media.cloudinaryConfig = () => ({ cloud: 'test-cloud', key: 'test-key', secret: 'test-secret' });
  media.cloudinarySignature = (params) => {
    signedParams = params;
    return 'test-signature';
  };

  const handlerPath = require.resolve('../server/handlers/sign-upload.cjs');
  delete require.cache[handlerPath];
  const handler = require(handlerPath);
  const response = {
    statusCode: 0,
    headers: new Map(),
    body: '',
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers.set(name, value);
      return this;
    },
    end(body) {
      this.body = body;
    },
  };

  try {
    await handler({
      method: 'POST',
      headers: {
        origin: 'http://localhost:5173',
        'content-type': 'application/json',
      },
      body: { kind: 'image', mimeType: 'image/png', size: 1 },
    }, response);

    const body = JSON.parse(response.body);
    assert.equal(response.statusCode, 200);
    assert.equal(body.assetFolder, 'users/local-smoke-test/image');
    assert.ok(body.publicId.startsWith(`${body.assetFolder}/`));
    assert.equal('publicIdPrefix' in body, false);
    assert.equal('public_id_prefix' in signedParams, false);
  } finally {
    media.authenticate = original.authenticate;
    media.cloudinaryConfig = original.cloudinaryConfig;
    media.cloudinarySignature = original.cloudinarySignature;
    delete require.cache[handlerPath];
  }
});

test('verification deletes uploaded media that fails server-side size validation', async () => {
  const media = require('../server/community-media.cjs');
  const original = {
    authenticate: media.authenticate,
    cloudinaryResource: media.cloudinaryResource,
    destroyCloudinaryResource: media.destroyCloudinaryResource,
  };
  let destroyed;
  media.authenticate = async () => ({
    uid: 'local-smoke-test',
    db: { doc: () => ({ set: async () => {} }) },
  });
  media.cloudinaryResource = async () => ({
    asset_folder: 'users/local-smoke-test/video',
    bytes: 50 * 1024 * 1024 + 1,
    format: 'mp4',
    duration: 1,
    secure_url: 'https://res.cloudinary.com/test/video/upload/example.mp4',
  });
  media.destroyCloudinaryResource = async (...args) => {
    destroyed = args;
  };

  const handlerPath = require.resolve('../server/handlers/verify-media.cjs');
  delete require.cache[handlerPath];
  const handler = require(handlerPath);
  const response = {
    statusCode: 0,
    headers: new Map(),
    body: '',
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers.set(name, value);
      return this;
    },
    end(body) {
      this.body = body;
    },
  };

  try {
    await handler({
      method: 'POST',
      headers: {
        origin: 'http://localhost:5173',
        'content-type': 'application/json',
      },
      body: {
        publicId: 'users/local-smoke-test/video/example',
        resourceType: 'video',
        kind: 'video',
      },
    }, response);

    assert.equal(response.statusCode, 400);
    assert.deepEqual(destroyed, ['users/local-smoke-test/video/example', 'video']);
  } finally {
    media.authenticate = original.authenticate;
    media.cloudinaryResource = original.cloudinaryResource;
    media.destroyCloudinaryResource = original.destroyCloudinaryResource;
    delete require.cache[handlerPath];
  }
});

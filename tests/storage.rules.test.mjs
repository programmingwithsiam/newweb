import { readFile } from 'node:fs/promises';
import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import { ref, uploadBytes } from 'firebase/storage';

const projectId = 'demo-community-storage';
let environment;

before(async () => {
  environment = await initializeTestEnvironment({
    projectId,
    storage: {
      host: '127.0.0.1',
      port: 9199,
      rules: await readFile(new URL('../storage.rules', import.meta.url), 'utf8'),
    },
  });
});

after(async () => {
  if (environment) await environment.cleanup();
});

test('Community story uploads require a verified owner and a safe supported image type', async () => {
  const alice = environment.authenticatedContext('alice', { email_verified: true }).storage();
  const bob = environment.authenticatedContext('bob', { email_verified: true }).storage();
  const anonymous = environment.unauthenticatedContext().storage();
  const image = new Uint8Array([1, 2, 3]);

  await assertSucceeds(uploadBytes(
    ref(alice, 'community_images/alice/story.png'),
    image,
    { contentType: 'image/png' },
  ));
  await assertFails(uploadBytes(
    ref(alice, 'community_images/alice/story.svg'),
    image,
    { contentType: 'image/svg+xml' },
  ));
  await assertFails(uploadBytes(
    ref(bob, 'community_images/alice/other.png'),
    image,
    { contentType: 'image/png' },
  ));
  await assertFails(uploadBytes(
    ref(anonymous, 'community_images/alice/anonymous.png'),
    image,
    { contentType: 'image/png' },
  ));
});

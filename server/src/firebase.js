import './env.js';
import { readFileSync } from 'node:fs';
import { dirname, isAbsolute, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';

const serverRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const serviceAccountSetting = process.env.FIREBASE_SERVICE_ACCOUNT || './serviceAccountKey.json';
const serviceAccountPath = isAbsolute(serviceAccountSetting)
  ? serviceAccountSetting
  : resolve(serverRoot, serviceAccountSetting);
const databaseUrl = process.env.FIREBASE_DATABASE_URL ||
  'https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app';

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
} catch {
  throw new Error('Firebase service-account configuration could not be loaded. Check FIREBASE_SERVICE_ACCOUNT.');
}

if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
  throw new Error('Firebase service-account configuration is incomplete.');
}

const app = getApps()[0] || initializeApp({
  credential: cert(serviceAccount),
  databaseURL: databaseUrl
});

export const auth = getAuth(app);
export const database = getDatabase(app);
export const otpHashSecret = process.env.OTP_HASH_SECRET || serviceAccount.private_key;
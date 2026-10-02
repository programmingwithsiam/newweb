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

function normalizePrivateKey(value) {
  return typeof value === 'string' ? value.replace(/\\n/g, '\n') : value;
}

let serviceAccount = {};

if (process.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_CLIENT_EMAIL || process.env.FIREBASE_PRIVATE_KEY) {
  serviceAccount = {
    project_id: process.env.FIREBASE_PROJECT_ID || '',
    client_email: process.env.FIREBASE_CLIENT_EMAIL || '',
    private_key: normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY || '')
  };
} else {
  try {
    serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  } catch {
    throw new Error('Firebase service-account configuration could not be loaded. Check FIREBASE_SERVICE_ACCOUNT or FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY.');
  }
}

if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
  throw new Error('Firebase service-account configuration is incomplete.');
}

const app = getApps()[0] || initializeApp({
  credential: cert({
    project_id: serviceAccount.project_id,
    client_email: serviceAccount.client_email,
    private_key: serviceAccount.private_key
  }),
  databaseURL: databaseUrl
});

if (!process.env.OTP_HASH_SECRET || !process.env.OTP_HASH_SECRET.trim()) {
  throw new Error('OTP_HASH_SECRET is not configured. Set a dedicated secret in Render or your local .env file.');
}

export const auth = getAuth(app);
export const database = getDatabase(app);
export const otpHashSecret = process.env.OTP_HASH_SECRET.trim();
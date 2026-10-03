import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const fallbackFirebaseConfig = {
  apiKey: 'AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE',
  authDomain: 'mylatestweb-fd3d7.firebaseapp.com',
  databaseURL: 'https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mylatestweb-fd3d7',
  storageBucket: 'mylatestweb-fd3d7.appspot.com',
  messagingSenderId: '1079484393919',
  appId: '1:1079484393919:web:798256eeab7f28ecacd90a'
};

// Firebase Auth and Realtime Database remain the source for community data.
const firebaseConfig = {
  ...fallbackFirebaseConfig,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || fallbackFirebaseConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || fallbackFirebaseConfig.authDomain,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || fallbackFirebaseConfig.databaseURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || fallbackFirebaseConfig.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || fallbackFirebaseConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || fallbackFirebaseConfig.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || fallbackFirebaseConfig.appId
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

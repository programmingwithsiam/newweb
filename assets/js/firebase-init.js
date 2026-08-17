/* =========================================================
   FIREBASE INITIALIZATION
   =========================================================
   This is the ONLY place Firebase is configured and initialized.
   Every other module imports { app, auth, db } from here.

   HOW TO SET THIS UP:
   1. Create a Firebase project at https://console.firebase.google.com
   2. Add a Web App inside that project.
   3. Copy the config object Firebase gives you and paste the values
      into firebaseConfig below.
   4. Follow FIREBASE_SETUP.md in the project root for the full,
      step-by-step walkthrough (enabling providers, Firestore, rules,
      authorized domains, etc).

   IMPORTANT — Firebase Web config is NOT a secret.
   Firebase's apiKey/authDomain/projectId etc. are designed to be public
   and ship inside every web app's JS bundle. They only identify which
   Firebase project to talk to. Actual protection of your data comes
   from Firestore Security Rules (see firestore.rules), not from hiding
   this config. So it is safe for these values to live in this file and
   be committed/deployed — do NOT confuse this with the GEMINI_API_KEY,
   which IS a real secret and must stay server-side only (see api/chat.js).
   ========================================================= */

// TODO: Replace with your Firebase project's web config.
// See FIREBASE_SETUP.md — Step 2.
const firebaseConfig = {
  apiKey: 'AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE',
  authDomain: 'mylatestweb-fd3d7.firebaseapp.com',
  projectId: 'mylatestweb-fd3d7',
  storageBucket: 'mylatestweb-fd3d7.firebasestorage.app',
  messagingSenderId: '1079484393919',
  appId: '1:1079484393919:web:798256eeab7f28ecacd90a',
};

// A simple, visible flag so the rest of the app can detect an
// unconfigured project and show a helpful message instead of a
// silent crash.
export const isFirebaseConfigured =
  !!firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith('YOUR_');

let app = null;
let auth = null;
let db = null;
let storage = null;

if (isFirebaseConfigured) {
  try {
    const { initializeApp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js'
    );
    const { getAuth, GoogleAuthProvider } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
    );
    const { getFirestore } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );
    const { getStorage } = await import(
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js'
);

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    // Expose the provider class via auth for convenience elsewhere.
    auth.GoogleAuthProvider = GoogleAuthProvider;
  } catch (err) {
    console.error('Firebase failed to initialize:', err);
  }
} else {
  console.warn(
    '[CodeWithSiam] Firebase is not configured yet. ' +
      'Open assets/js/firebase-init.js and paste your Firebase web config, ' +
      'then see FIREBASE_SETUP.md. Sign-in and the course platform will be ' +
      'disabled until this is done.'
  );
}

export { app, auth, db, storage };

/* =========================================================
   AUTHENTICATION MODULE
   =========================================================
   Real Firebase Authentication. No passwords, users, or sessions
   are ever stored in localStorage/sessionStorage — Firebase owns
   the session and persists it in IndexedDB under the hood.
   ========================================================= */

import { auth, db, isFirebaseConfigured } from './firebase-init.js';

export const ADMIN_EMAIL = 'mdsiamahmmedloselovestroy@gmail.com';

let authModule = null;
let firestoreModule = null;

async function loadAuthModule() {
  if (!authModule) {
    authModule = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
    );
  }
  return authModule;
}

async function loadFirestoreModule() {
  if (!firestoreModule) {
    firestoreModule = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );
  }
  return firestoreModule;
}

/* ---------- friendly error messages ---------- */
function friendlyAuthError(error) {
  const code = error?.code || '';
  const map = {
    'auth/popup-closed-by-user': 'Sign-in was cancelled before it finished.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled.',
    'auth/popup-blocked':
      'Your browser blocked the sign-in popup. Please allow popups for this site and try again.',
    'auth/unauthorized-domain':
      'This domain is not authorized for sign-in yet. Add it under Firebase Console → Authentication → Settings → Authorized domains.',
    'auth/network-request-failed':
      'Network error — please check your connection and try again.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/email-already-in-use': 'An account with that email already exists. Try signing in instead.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/user-disabled': 'This account has been disabled.',
  };
  return map[code] || error?.message || 'Something went wrong. Please try again.';
}

/* ---------- ensure a user profile document exists ---------- */
async function ensureUserProfile(user) {
  if (!db || !user) return;
  const { doc, getDoc, setDoc, updateDoc, serverTimestamp } = await loadFirestoreModule();
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      name: user.displayName || user.email?.split('@')[0] || 'Student',
      email: user.email || null,
      photoURL: user.photoURL || null,
      role: 'student',
      createdAt: serverTimestamp(),
    });
  } else if (user.photoURL && snap.data().photoURL !== user.photoURL) {
    await updateDoc(ref, { photoURL: user.photoURL, name: user.displayName || snap.data().name || 'Student' });
  }
}

/* ---------- public API ---------- */

export async function signInWithGoogle() {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured yet. See FIREBASE_SETUP.md.');
  const { GoogleAuthProvider, signInWithPopup } = await loadAuthModule();
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    await ensureUserProfile(result.user);
    return result.user;
  } catch (error) {
    throw new Error(friendlyAuthError(error));
  }
}

export async function signInWithEmail(email, password) {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured yet. See FIREBASE_SETUP.md.');
  const { signInWithEmailAndPassword } = await loadAuthModule();
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw new Error(friendlyAuthError(error));
  }
}

export async function createAccount(name, email, password) {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured yet. See FIREBASE_SETUP.md.');
  const { createUserWithEmailAndPassword, updateProfile } = await loadAuthModule();
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(result.user, { displayName: name });
    }
    await ensureUserProfile(result.user);
    return result.user;
  } catch (error) {
    throw new Error(friendlyAuthError(error));
  }
}

export async function resetPassword(email) {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured yet. See FIREBASE_SETUP.md.');
  const { sendPasswordResetEmail } = await loadAuthModule();
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(friendlyAuthError(error));
  }
}

export async function logout() {
  if (!isFirebaseConfigured) return;
  const { signOut } = await loadAuthModule();
  await signOut(auth);
}

/**
 * Subscribes to auth state. Callback receives (user | null).
 * Returns an unsubscribe function.
 */
export function observeAuthState(callback) {
  if (!isFirebaseConfigured) {
    callback(null);
    return () => {};
  }
  let unsub = () => {};
  loadAuthModule().then(({ onAuthStateChanged }) => {
    unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await ensureUserProfile(user).catch((e) => console.error('ensureUserProfile failed:', e));
      }
      callback(user);
    });
  });
  return () => unsub();
}

/**
 * Checks whether the current user is the single allowed administrator.
 * Firestore rules enforce the same email restriction server-side.
 */
export async function isCurrentUserAdmin() {
  if (!isFirebaseConfigured || !auth?.currentUser) return false;
  const currentUser = auth.currentUser;
  return currentUser.emailVerified === true && currentUser.email?.toLowerCase() === ADMIN_EMAIL;
}

export function getCurrentUser() {
  return auth?.currentUser || null;
}

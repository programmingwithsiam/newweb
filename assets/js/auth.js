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
    'auth/invalid-credential': 'Incorrect email or password. If you created this account with Google, continue with Google.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/email-already-in-use': 'This email is already registered. Sign in, or continue with Google if that is how you created the account.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email. Sign in using its existing method, then link Google from account settings.',
    'auth/credential-already-in-use': 'That Google account is already linked to a different user. Sign in to that account instead.',
    'auth/weak-password': 'Password must be at least 8 characters.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/operation-not-allowed': 'This sign-in method is disabled in Firebase Authentication. Enable Email/Password or Google in the Firebase Console.',
    'auth/provider-already-linked': 'This sign-in method is already linked to your account.',
  };
  if (!code && /^(Please sign in first\.|Please sign in with an email account first\.|Please sign in before requesting a verification email\.|Enter your current password\.|Password must be at least 8 characters\.)$/.test(error?.message || '')) {
    return error.message;
  }
  return map[code] || 'Something went wrong. Please try again.';
}

/* ---------- ensure a user profile document exists ---------- */
async function ensureUserProfile(user) {
  if (!db || !user) return;
  const { doc, getDoc, setDoc, updateDoc, serverTimestamp } = await loadFirestoreModule();
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);

  // Determine the role: admin if email matches ADMIN_EMAIL, otherwise student
  const defaultRole = user.email?.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';

  if (!snap.exists()) {
    await setDoc(ref, {
      name: user.displayName || user.email?.split('@')[0] || 'Student',
      email: user.email || null,
      photoURL: user.photoURL || null,
      role: defaultRole,
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
  const { signInWithEmailAndPassword, signOut } = await loadAuthModule();
  try {
    const result = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
    if (!result.user.emailVerified) {
      await signOut(auth);
      throw new Error('Please verify your email with the 6-digit code sent during registration.');
    }
    await ensureUserProfile(result.user);
    return result.user;
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Please verify your email')) throw error;
    throw new Error(friendlyAuthError(error));
  }
}

export async function linkGoogleToCurrentUser() {
  if (!isFirebaseConfigured || !auth?.currentUser) throw new Error('Please sign in first.');
  const { GoogleAuthProvider, linkWithPopup } = await loadAuthModule();
  try {
    const result = await linkWithPopup(auth.currentUser, new GoogleAuthProvider());
    await ensureUserProfile(result.user);
    return result.user;
  } catch (error) {
    throw new Error(friendlyAuthError(error));
  }
}

export async function setAccountPassword(currentPassword, newPassword) {
  const user = auth?.currentUser;
  if (!isFirebaseConfigured || !user?.email) throw new Error('Please sign in with an email account first.');
  if (newPassword.length < 8) throw new Error('Password must be at least 8 characters.');
  const { EmailAuthProvider, linkWithCredential, reauthenticateWithCredential, updatePassword } = await loadAuthModule();
  try {
    const hasPasswordProvider = user.providerData.some((provider) => provider.providerId === 'password');
    if (hasPasswordProvider) {
      if (!currentPassword) throw new Error('Enter your current password.');
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    } else {
      const credential = EmailAuthProvider.credential(user.email, newPassword);
      await linkWithCredential(user, credential);
    }
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
    return () => { };
  }
  let unsub = () => { };
  loadAuthModule().then(({ onAuthStateChanged }) => {
    unsub = onAuthStateChanged(auth, async (user) => {
      const isVerified = user?.emailVerified || user?.providerData.some((provider) => provider.providerId === 'google.com');
      if (user && !isVerified) {
        const { signOut } = await loadAuthModule();
        await signOut(auth).catch(() => { });
        callback(null);
        return;
      }
      if (user && (user.emailVerified || user.providerData.some((provider) => provider.providerId === 'google.com'))) {
        await ensureUserProfile(user).catch((e) => console.error('ensureUserProfile failed:', e));
      }
      callback(user);
    });
  });
  return () => unsub();
}

/**
 * Checks whether the current user is the configured administrator.
 * The exact Firebase Auth email is the admin identity; no profile document is required.
 */
export async function isCurrentUserAdmin() {
  if (!isFirebaseConfigured || !auth?.currentUser) return false;
  const currentUser = auth.currentUser;

  // Only admin email can be admin, but we check Firestore for the role
  if (currentUser.email?.toLowerCase() !== ADMIN_EMAIL) return false;

  return true;
}

export function getCurrentUser() {
  return auth?.currentUser || null;
}

export function redirectToAuthPrompt(message = 'Please sign in to continue.') {
  const current = new URL(window.location.href);
  const target = new URL('index.html', current);
  target.searchParams.set('auth', '1');
  target.searchParams.set('authMessage', message);
  target.searchParams.set('returnTo', `${current.pathname}${current.search}${current.hash}`);
  window.location.assign(target.href);
}

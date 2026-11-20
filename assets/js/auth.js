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
  if (!code && /^Please sign in first\.$/.test(error?.message || '')) {
    return error.message;
  }
  return map[code] || 'Something went wrong. Please try again.';
}

/* ---------- ensure a user profile document exists ---------- */
async function ensureUserProfile(user) {
  if (!db || !user) return;
  const { doc, getDoc, setDoc, serverTimestamp } = await loadFirestoreModule();
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);

  // Determine the role: admin if email matches ADMIN_EMAIL, otherwise student
  const defaultRole = user.email?.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';
  let privateProfile = snap.exists() ? snap.data() : {};

  if (!snap.exists()) {
    privateProfile = {
      uid: user.uid,
      name: user.displayName || user.email?.split('@')[0] || 'Student',
      email: user.email || null,
      photoURL: user.photoURL || null,
      role: defaultRole,
      createdAt: serverTimestamp(),
    };
    await setDoc(ref, privateProfile);
  } else {
    const privateUpdates = { uid: user.uid };
    if (user.photoURL && snap.data().photoURL !== user.photoURL) {
      privateProfile = {
        ...privateProfile,
        photoURL: user.photoURL,
        name: user.displayName || snap.data().name || 'Student',
      };
      privateUpdates.photoURL = privateProfile.photoURL;
      privateUpdates.name = privateProfile.name;
    }
    privateProfile.uid = user.uid;
    await setDoc(ref, privateUpdates, { merge: true });
  }

  const publicRef = doc(db, 'publicProfiles', user.uid);
  const publicSnap = await getDoc(publicRef);
  const existingPublic = publicSnap.exists() ? publicSnap.data() : {};
  const name = String(user.displayName || existingPublic.name || privateProfile.name || 'Student').trim().slice(0, 120);
  const publicProfileUpdate = {
    uid: user.uid,
    name,
    displayName: name,
    photoURL: user.photoURL || existingPublic.photoURL || privateProfile.photoURL || '',
    profilePicture: existingPublic.profilePicture || privateProfile.profilePicture || user.photoURL || '',
    coverPhoto: existingPublic.coverPhoto || privateProfile.coverPhoto || '',
    coverURL: existingPublic.coverURL || privateProfile.coverURL || '',
    username: String(existingPublic.username || privateProfile.username || '').slice(0, 30),
    searchName: name.toLowerCase(),
    bio: existingPublic.bio ?? privateProfile.bio ?? '',
    location: existingPublic.location ?? privateProfile.location ?? '',
    website: existingPublic.website ?? privateProfile.website ?? '',
    learningRole: existingPublic.learningRole ?? privateProfile.learningRole ?? '',
    skills: Array.isArray(existingPublic.skills) ? existingPublic.skills : Array.isArray(privateProfile.skills) ? privateProfile.skills : [],
    online: true,
    lastSeen: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  if (!publicSnap.exists()) {
    Object.assign(publicProfileUpdate, {
      followers: [],
      following: [],
      followersCount: 0,
      followingCount: 0,
      totalProjects: 0,
      createdAt: serverTimestamp(),
    });
  }
  await setDoc(publicRef, publicProfileUpdate, { merge: true });
  await setDoc(doc(db, 'publicDirectory', user.uid), {
    uid: user.uid,
    displayName: name,
    photoURL: existingPublic.profilePicture || existingPublic.photoURL || privateProfile.photoURL || user.photoURL || '',
    username: String(existingPublic.username || privateProfile.username || '').slice(0, 30),
    searchName: name.toLowerCase(),
    online: true,
    lastSeen: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

const profileSyncs = new Map();

function ensureUserProfileInBackground(user) {
  const pending = profileSyncs.get(user.uid);
  if (pending) return pending;

  const sync = ensureUserProfile(user)
    .catch((error) => {
      console.error('ensureUserProfile failed:', error);
    })
    .finally(() => {
      profileSyncs.delete(user.uid);
    });

  profileSyncs.set(user.uid, sync);
  return sync;
}

/* ---------- public API ---------- */

export async function signInWithGoogle() {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured yet. See FIREBASE_SETUP.md.');
  const { GoogleAuthProvider, signInWithPopup } = await loadAuthModule();
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
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
      throw new Error('This email/password account is not verified. Continue with Google or contact support.');
    }
    return result.user;
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('This email/password account is not verified')) throw error;
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
        void ensureUserProfileInBackground(user);
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
  const target = new URL('/index.html', current.origin);
  target.searchParams.set('auth', '1');
  target.searchParams.set('authMessage', message);
  target.searchParams.set('returnTo', `${current.pathname}${current.search}${current.hash}`);
  window.location.assign(target.href);
}

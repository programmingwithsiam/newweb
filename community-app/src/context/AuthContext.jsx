import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  sendPasswordResetEmail,
  EmailAuthProvider,
  linkWithCredential,
  linkWithPopup,
  reauthenticateWithCredential,
  updatePassword
} from 'firebase/auth';
import { ref, set, get, onDisconnect, onValue, serverTimestamp, update, runTransaction } from 'firebase/database';
import { auth, db, googleProvider } from '../firebase/config';
import { usernameToKey, validateUsername } from '../utils/helpers';

function authApiBaseUrl() {
  if (import.meta.env.VITE_AUTH_API_URL) return import.meta.env.VITE_AUTH_API_URL.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.CODEWITHSIAM_AUTH_API) return window.CODEWITHSIAM_AUTH_API.replace(/\/$/, '');
  if (typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname)) return 'http://localhost:3001';
  return '';
}

async function registrationRequest(path, payload) {
  const baseUrl = authApiBaseUrl();
  if (!baseUrl) throw new Error('Email verification service is not configured.');
  let response;
  try {
    response = await fetch(`${baseUrl}/auth/register/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch {
    throw new Error('Cannot reach the verification service. Please try again later.');
  }
  const result = await response.json().catch(() => null);
  if (!response.ok) throw new Error(result?.error || 'The verification request failed. Please try again.');
  return result || {};
}

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [authPrompt, setAuthPrompt] = useState('');

  // Track auth state and mirror the user's own profile doc in real time.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      const isVerified = fbUser?.emailVerified || fbUser?.providerData.some((provider) => provider.providerId === 'google.com');
      setUser(isVerified ? fbUser : null);
      setLoading(false);
      if (!isVerified) {
        setProfile(null);
        if (fbUser) signOut(auth).catch(() => { });
      }
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    let active = true;
    getRedirectResult(auth)
      .then((result) => {
        if (active && result?.user) return createProfileIfMissing(result.user);
        return undefined;
      })
      .catch((error) => {
        if (active) setAuthError(error?.code || 'auth/unknown');
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!user) return;
    const profRef = ref(db, `users/${user.uid}`);
    const profileTimer = setTimeout(() => setLoading(false), 600);
    const unsub = onValue(profRef, (snap) => {
      setProfile(snap.val());
      setLoading(false);
    });
    return () => {
      clearTimeout(profileTimer);
      unsub();
    };
  }, [user]);

  // Presence: mark online while connected, offline (with lastSeen) on disconnect.
  useEffect(() => {
    if (!user) return;
    const myStatusRef = ref(db, `presence/${user.uid}`);
    const connectedRef = ref(db, '.info/connected');
    const unsub = onValue(connectedRef, (snap) => {
      if (snap.val() === false) return;
      onDisconnect(myStatusRef)
        .set({ state: 'offline', lastChanged: serverTimestamp() })
        .then(() => {
          set(myStatusRef, { state: 'online', lastChanged: serverTimestamp() });
        });
    });
    return unsub;
  }, [user]);

  async function createProfileIfMissing(fbUser, extra = {}) {
    if (!fbUser.emailVerified && !fbUser.providerData.some((provider) => provider.providerId === 'google.com')) return;
    const userRef = ref(db, `users/${fbUser.uid}`);
    const existing = await get(userRef);
    if (existing.exists()) return;

    const usernameBase = (extra.username || (fbUser.email ? fbUser.email.split('@')[0] : `user${fbUser.uid.slice(0, 6)}`))
      .replace(/[^a-zA-Z0-9_.]/g, '').slice(0, 20) || `user${fbUser.uid.slice(0, 6)}`;
    let username = usernameBase;
    let usernameKey = '';
    let reserved = false;
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const suffix = attempt === 0 ? '' : attempt.toString(36);
      username = `${usernameBase.slice(0, 20 - suffix.length)}${suffix}`;
      usernameKey = usernameToKey(username);
      const reservation = await runTransaction(ref(db, `usernames/${usernameKey}`), (current) => {
        if (current === null || current === fbUser.uid) return fbUser.uid;
        return;
      });
      if (reservation.committed) {
        reserved = true;
        break;
      }
    }
    if (!reserved) throw new Error('A unique username could not be reserved. Please try again.');

    await set(userRef, {
      uid: fbUser.uid,
      fullName: extra.fullName || fbUser.displayName || username,
      username,
      usernameLower: finalKey,
      bio: '',
      photoURL: fbUser.photoURL || '',
      coverURL: '',
      createdAt: serverTimestamp(),
      followersCount: 0,
      followingCount: 0,
      friendsCount: 0,
      isPrivate: false
    });
    // Email lives under a private subpath only the owner can read - it's
    // never needed for the public-facing directory/search features.
    await set(ref(db, `users/${fbUser.uid}/private/email`), fbUser.email || '');
  }

  async function signup({ email, password, fullName, username }) {
    if (password.length < 8) throw new Error('Password must be at least 8 characters.');
    if (username && !validateUsername(username)) {
      throw new Error('Username must be 3-20 characters: letters, numbers, "_" or "." only.');
    }
    const normalizedEmail = email.trim().toLowerCase();
    const displayName = fullName?.trim() || normalizedEmail.split('@')[0];
    await registrationRequest('start', { name: displayName, email: normalizedEmail, password });
    return { email: normalizedEmail };
  }

  async function verifySignupCode(email, otp) {
    return registrationRequest('verify', { email: email.trim().toLowerCase(), otp: otp.trim() });
  }

  async function resendSignupCode(email) {
    return registrationRequest('resend', { email: email.trim().toLowerCase() });
  }

  async function login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
    if (!cred.user.emailVerified && !cred.user.providerData.some((provider) => provider.providerId === 'google.com')) {
      await signOut(auth);
      throw new Error('Please verify your email with the 6-digit code sent during registration.');
    }
    await createProfileIfMissing(cred.user);
    return cred.user;
  }

  function isMobileBrowser() {
    return typeof window !== 'undefined' && (
      window.matchMedia?.('(max-width: 768px)').matches ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    );
  }

  async function loginWithGoogle() {
    if (isMobileBrowser()) {
      await signInWithRedirect(auth, googleProvider);
      return null;
    }

    let cred;
    try {
      cred = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (error?.code === 'auth/popup-blocked' || error?.code === 'auth/operation-not-supported-in-this-environment') {
        await signInWithRedirect(auth, googleProvider);
        return null;
      }
      throw error;
    }
    await createProfileIfMissing(cred.user);
    return cred.user;
  }

  async function resetPassword(email) {
    return sendPasswordResetEmail(auth, email.trim().toLowerCase());
  }

  async function linkGoogleAccount() {
    if (!auth.currentUser) throw new Error('Please sign in first.');
    const credential = await linkWithPopup(auth.currentUser, googleProvider);
    await createProfileIfMissing(credential.user);
    return credential.user;
  }

  async function changeAccountPassword(currentPassword, newPassword) {
    const currentUser = auth.currentUser;
    if (!currentUser?.email) throw new Error('Please sign in with an email account first.');
    if (newPassword.length < 8) throw new Error('Password must be at least 8 characters.');
    const hasPasswordProvider = currentUser.providerData.some((provider) => provider.providerId === 'password');
    if (hasPasswordProvider) {
      if (!currentPassword) throw new Error('Enter your current password.');
      const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
    } else {
      await linkWithCredential(currentUser, EmailAuthProvider.credential(currentUser.email, newPassword));
    }
  }

  async function logout() {
    if (user) {
      await update(ref(db, `presence/${user.uid}`), { state: 'offline', lastChanged: serverTimestamp() });
    }
    return signOut(auth);
  }

  const value = {
    user,
    profile,
    loading,
    authError,
    clearAuthError: () => setAuthError(''),
    authPrompt,
    requestSignIn: (message = 'Please sign in to continue.') => setAuthPrompt(message),
    dismissAuthPrompt: () => setAuthPrompt(''),
    signup,
    verifySignupCode,
    resendSignupCode,
    login,
    loginWithGoogle,
    resetPassword,
    linkGoogleAccount,
    changeAccountPassword,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

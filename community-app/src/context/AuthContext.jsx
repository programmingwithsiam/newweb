import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { ref, set, get, onDisconnect, onValue, serverTimestamp, update } from 'firebase/database';
import { auth, db, googleProvider } from '../firebase/config';
import { usernameToKey, validateUsername } from '../utils/helpers';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track auth state and mirror the user's own profile doc in real time.
  useEffect(() => {
    let authResolved = false;
    const fallbackTimer = setTimeout(() => {
      if (!authResolved) setLoading(false);
    }, 500);
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      authResolved = true;
      setUser(fbUser);
      if (!fbUser) {
        setProfile(null);
        setLoading(false);
      }
    });
    return () => {
      clearTimeout(fallbackTimer);
      unsub();
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
    const userRef = ref(db, `users/${fbUser.uid}`);
    const existing = await get(userRef);
    if (existing.exists()) return;

    let username = extra.username || (fbUser.email ? fbUser.email.split('@')[0] : `user${fbUser.uid.slice(0, 6)}`);
    username = username.replace(/[^a-zA-Z0-9_.]/g, '').slice(0, 20) || `user${fbUser.uid.slice(0, 6)}`;
    const usernameKey = usernameToKey(username);

    // Reserve the username in a separate top-level index so lookups /
    // uniqueness checks don't require scanning all users.
    const usernameRef = ref(db, `usernames/${usernameKey}`);
    const taken = await get(usernameRef);
    if (taken.exists()) {
      username = `${username}${Math.floor(Math.random() * 10000)}`;
    }

    const finalKey = usernameToKey(username);
    await set(ref(db, `usernames/${finalKey}`), fbUser.uid);
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
    if (username && !validateUsername(username)) {
      throw new Error('Username must be 3-20 characters: letters, numbers, "_" or "." only.');
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: fullName });
    await createProfileIfMissing(cred.user, { fullName, username });
    return cred.user;
  }

  async function login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
    await createProfileIfMissing(cred.user);
    return cred.user;
  }

  async function loginWithGoogle() {
    const cred = await signInWithPopup(auth, googleProvider);
    await createProfileIfMissing(cred.user);
    return cred.user;
  }

  async function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function logout() {
    if (user) {
      await update(ref(db, `presence/${user.uid}`), { state: 'offline', lastChanged: serverTimestamp() });
    }
    return signOut(auth);
  }

  const value = { user, profile, loading, signup, login, loginWithGoogle, resetPassword, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

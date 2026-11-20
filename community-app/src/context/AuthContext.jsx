import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  linkWithPopup,
} from 'firebase/auth';
import { ref, set, get, onDisconnect, onValue, serverTimestamp, update, runTransaction } from 'firebase/database';
import { auth, db, googleProvider } from '../firebase/config';
import { usernameToKey } from '../utils/helpers';

const AuthContext = createContext(null);

async function syncRealtimeUserProfile(fbUser) {
  if (!fbUser?.uid) return;
  try {
    await set(ref(db, `privateUsers/${fbUser.uid}/email`), fbUser.email || '');
    console.info(`[msgr] profile sync ok privateUsers/${fbUser.uid}/email`);
  } catch (error) {
    console.error('Could not sync private account data:', {
      code: error?.code || 'unknown',
      message: error?.message || String(error),
    });
  }

  try {
    const userProfileRef = ref(db, `users/${fbUser.uid}`);
    const snapshot = await get(userProfileRef);
    if (!snapshot.exists()) return;
    const profile = snapshot.val() || {};
    const fallbackName = fbUser.email?.split('@')[0] || `user${fbUser.uid.slice(0, 6)}`;
    const name = profile.fullName || profile.name || fbUser.displayName || fallbackName;
    let username = profile.username || '';
    let usernameLower = profile.usernameLower || (username ? usernameToKey(username) : '');
    if (!username) {
      const usernameBase = fallbackName.replace(/[^a-zA-Z0-9_.]/g, '').slice(0, 20) ||
        `user${fbUser.uid.slice(0, 6)}`;
      let reserved = false;
      for (let attempt = 0; attempt < 8; attempt += 1) {
        const suffix = attempt === 0 ? '' : attempt.toString(36);
        const candidate = `${usernameBase.slice(0, 20 - suffix.length)}${suffix}`;
        const candidateKey = usernameToKey(candidate);
        const reservation = await runTransaction(ref(db, `usernames/${candidateKey}`), (current) => {
          if (current === null || current === fbUser.uid) return fbUser.uid;
          return;
        });
        if (reservation.committed) {
          username = candidate;
          usernameLower = candidateKey;
          reserved = true;
          break;
        }
      }
      if (!reserved) throw new Error('A unique username could not be reserved for profile backfill.');
    }
    const updates = {
      fullName: name,
      username,
      usernameLower,
      name,
      nameLower: name.toLowerCase(),
      photoURL: profile.photoURL || fbUser.photoURL || '',
    };
    await update(userProfileRef, updates);
    Object.keys(updates).forEach((field) => console.info(`[msgr] profile sync ok users/${fbUser.uid}/${field}`));
  } catch (error) {
    console.error(`[msgr] profile sync FAILED users/${fbUser.uid} ${error?.code || 'unknown'}`, error?.message || String(error));
  }
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authPrompt, setAuthPrompt] = useState('');

  // Track auth state and mirror the user's own profile doc in real time.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      const isVerified = fbUser?.emailVerified || fbUser?.providerData?.some((provider) => provider.providerId === 'google.com');
      setUser(isVerified ? fbUser : null);
      if (isVerified && fbUser) {
        await syncRealtimeUserProfile(fbUser);
      }
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

  // Presence is stored in Realtime Database and expires on disconnect.
  useEffect(() => {
    if (!user) return;
    const myStatusRef = ref(db, `presence/${user.uid}`);
    const connectedRef = ref(db, '.info/connected');
    console.info(`[msgr] listen attach .info/connected`);
    const unsub = onValue(connectedRef, (snap) => {
      if (snap.val() === false) return;
      onDisconnect(myStatusRef)
        .set({ state: 'offline', online: false, lastChanged: serverTimestamp() })
        .then(() => {
          console.info(`[msgr] onDisconnect registered presence/${user.uid}`);
          return set(myStatusRef, { state: 'online', online: true, lastChanged: serverTimestamp() })
            .then(() => console.info(`[msgr] presence ok presence/${user.uid}`));
        })
        .catch((error) => {
          console.error(`[msgr] presence FAILED presence/${user.uid} ${error?.code || 'unknown'}`, error?.message || String(error));
        });
    });
    return () => {
      unsub();
      console.info(`[msgr] listen detach .info/connected`);
    };
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

    const fullName = extra.fullName || fbUser.displayName || username;
    await set(userRef, {
      uid: fbUser.uid,
      fullName,
      name: fullName,
      nameLower: fullName.toLowerCase(),
      username,
      usernameLower: usernameKey,
      bio: '',
      photoURL: fbUser.photoURL || '',
      coverURL: '',
      createdAt: serverTimestamp(),
      followersCount: 0,
      followingCount: 0,
      friendsCount: 0,
      isPrivate: false
    });
    await syncRealtimeUserProfile(fbUser);
  }

  async function linkGoogleAccount() {
    if (!auth.currentUser) throw new Error('Please sign in first.');
    const credential = await linkWithPopup(auth.currentUser, googleProvider);
    await createProfileIfMissing(credential.user);
    return credential.user;
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
    authPrompt,
    requestSignIn: (message = 'Please sign in to continue.') => setAuthPrompt(message),
    dismissAuthPrompt: () => setAuthPrompt(''),
    linkGoogleAccount,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

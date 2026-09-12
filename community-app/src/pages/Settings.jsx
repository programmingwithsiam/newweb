import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue, update, remove } from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

function BlockedUserRow({ uid, onUnblock }) {
  const [p, setP] = useState(null);
  useEffect(() => {
    const unsub = onValue(ref(db, `users/${uid}`), (snap) => setP(snap.val()));
    return unsub;
  }, [uid]);
  if (!p) return null;
  return (
    <div className="member-row">
      <img className="avatar-sm" src={p.photoURL || '/default-avatar.png'} alt="" />
      <span>{p.fullName}</span>
      <button className="link-btn" onClick={() => onUnblock(uid)}>Unblock</button>
    </div>
  );
}

export default function Settings() {
  const { user, profile, logout } = useAuth();
  const { showToast } = useToast();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(profile?.fullName || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [isPrivate, setIsPrivate] = useState(profile?.isPrivate || false);
  const [blocked, setBlocked] = useState({});
  const [notifPrefs, setNotifPrefs] = useState({ messages: true, reactions: true, comments: true, friendRequests: true });

  useEffect(() => {
    setFullName(profile?.fullName || '');
    setBio(profile?.bio || '');
    setIsPrivate(profile?.isPrivate || false);
  }, [profile]);

  useEffect(() => {
    const unsub = onValue(ref(db, `blockedUsers/${user.uid}`), (snap) => setBlocked(snap.val() || {}));
    return unsub;
  }, [user.uid]);

  useEffect(() => {
    const unsub = onValue(ref(db, `users/${user.uid}/notifPrefs`), (snap) => {
      if (snap.exists()) setNotifPrefs(snap.val());
    });
    return unsub;
  }, [user.uid]);

  async function saveProfile() {
    await update(ref(db, `users/${user.uid}`), { fullName, bio, isPrivate });
    showToast('Profile updated', 'success');
  }

  async function changePhoto(e, field) {
    const file = e.target.files[0];
    if (!file) return;
    const maxBytes = field === 'photoURL' ? 5 * 1024 * 1024 : 6 * 1024 * 1024;
    if (file.size > maxBytes) {
      showToast(`Image is too large (max ${Math.round(maxBytes / 1024 / 1024)}MB)`, 'error');
      return;
    }
    try {
      const path = field === 'photoURL' ? 'avatars' : 'covers';
      const url = await uploadCommunityImage(file, `${path}/${user.uid}`);
      await update(ref(db, `users/${user.uid}`), { [field]: url });
      showToast('Photo updated', 'success');
    } catch (err) {
      showToast(`Upload failed: ${err.message}`, 'error');
    }
  }

  async function unblock(uid) {
    await remove(ref(db, `blockedUsers/${user.uid}/${uid}`));
  }

  async function saveNotifPrefs(next) {
    setNotifPrefs(next);
    await update(ref(db, `users/${user.uid}/notifPrefs`), next);
  }

  async function doLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <section className="card">
        <h3>Edit Profile</h3>
        <label>Full name</label>
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
        <div className="settings-photo-row">
          <label className="btn btn-ghost btn-sm">
            Change profile picture
            <input type="file" accept="image/*" hidden onChange={(e) => changePhoto(e, 'photoURL')} />
          </label>
          <label className="btn btn-ghost btn-sm">
            Change cover photo
            <input type="file" accept="image/*" hidden onChange={(e) => changePhoto(e, 'coverURL')} />
          </label>
        </div>
        <button className="btn btn-primary" onClick={saveProfile}>Save changes</button>
      </section>

      <section className="card">
        <h3>Appearance</h3>
        <label className="switch-row">
          <span>Dark mode</span>
          <input type="checkbox" checked={theme === 'dark'} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
        </label>
      </section>

      <section className="card">
        <h3>Privacy</h3>
        <label className="switch-row">
          <span>Private account (only friends see your friends-only posts)</span>
          <input type="checkbox" checked={isPrivate} onChange={(e) => { setIsPrivate(e.target.checked); }} />
        </label>
        <button className="btn btn-primary btn-sm" onClick={saveProfile}>Save privacy setting</button>
      </section>

      <section className="card">
        <h3>Notification Settings</h3>
        {Object.entries(notifPrefs).map(([key, val]) => (
          <label className="switch-row" key={key}>
            <span>{key.replace(/([A-Z])/g, ' $1')}</span>
            <input type="checkbox" checked={val} onChange={(e) => saveNotifPrefs({ ...notifPrefs, [key]: e.target.checked })} />
          </label>
        ))}
      </section>

      <section className="card">
        <h3>Blocked Users</h3>
        {Object.keys(blocked).length === 0 && <p className="muted">No blocked users.</p>}
        {Object.keys(blocked).map((uid) => <BlockedUserRow key={uid} uid={uid} onUnblock={unblock} />)}
      </section>

      <section className="card">
        <h3>Account</h3>
        <button className="btn btn-danger" onClick={doLogout}>Log out</button>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, get, update, query, orderByChild, limitToLast } from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import FriendButton from '../components/FriendButton';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Profile() {
  const { uid } = useParams();
  const { user, profile: myProfile } = useAuth();
  const { showToast } = useToast();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState({});
  const [friends, setFriends] = useState({});
  const [tab, setTab] = useState('posts');
  const [editingBio, setEditingBio] = useState(false);
  const [bio, setBio] = useState('');

  const isMe = user?.uid === uid;

  useEffect(() => {
    const r = ref(db, `users/${uid}`);
    const unsub = onValue(r, (snap) => {
      setProfile(snap.val());
      setBio(snap.val()?.bio || '');
    });
    return unsub;
  }, [uid]);

  useEffect(() => {
    if (!user) return;
    setPosts({});
    let cancelled = false;
    let cleanup = [];

    async function loadPosts() {
      // userPosts/{uid} is only readable by the profile owner or their
      // friends (see database.rules.json) - a stranger reading it would get
      // a permission-denied error. So: owner/friends use the full index,
      // everyone else falls back to publicPostsIndex filtered to this uid,
      // which only ever contains posts marked public anyway.
      const isFriend = isMe || (await get(ref(db, `friends/${user.uid}/${uid}`))).exists();
      let ids;
      if (isFriend) {
        const idsSnap = await get(ref(db, `userPosts/${uid}`));
        ids = idsSnap.exists() ? Object.keys(idsSnap.val()) : [];
      } else {
        const publicSnap = await get(query(ref(db, 'publicPostsIndex'), orderByChild('createdAt'), limitToLast(200)));
        ids = publicSnap.exists()
          ? Object.entries(publicSnap.val())
              .filter(([, v]) => v.uid === uid)
              .map(([id]) => id)
          : [];
      }
      if (cancelled) return;
      cleanup = ids.map((id) =>
        onValue(ref(db, `posts/${id}`), (snap) => {
          if (snap.exists()) setPosts((p) => ({ ...p, [id]: snap.val() }));
        })
      );
    }

    loadPosts();
    return () => {
      cancelled = true;
      cleanup.forEach((u) => u && u());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, user, isMe]);

  useEffect(() => {
    const r = ref(db, `friends/${uid}`);
    const unsub = onValue(r, (snap) => setFriends(snap.val() || {}));
    return unsub;
  }, [uid]);

  async function uploadImage(file, field) {
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

  async function saveBio() {
    await update(ref(db, `users/${user.uid}`), { bio });
    setEditingBio(false);
  }

  if (!profile) return <LoadingSpinner full label="Loading profile..." />;

  const orderedPosts = Object.entries(posts).sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));
  const photos = orderedPosts.flatMap(([, p]) => (p.images ? Object.values(p.images) : []));

  return (
    <div className="profile-page">
      <div className="profile-cover">
        {profile.coverURL && <img src={profile.coverURL} alt="" />}
        {isMe && (
          <label className="btn btn-ghost cover-edit-btn">
            Change Cover
            <input type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && uploadImage(e.target.files[0], 'coverURL')} />
          </label>
        )}
      </div>
      <div className="profile-header">
        <div className="profile-avatar-wrap">
          <img className="profile-avatar" src={profile.photoURL || '/default-avatar.png'} alt={profile.fullName} />
          {isMe && (
            <label className="avatar-edit-btn">
              📷
              <input type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && uploadImage(e.target.files[0], 'photoURL')} />
            </label>
          )}
        </div>
        <div className="profile-info">
          <h2>{profile.fullName}</h2>
          <p className="muted">@{profile.username}</p>
          {editingBio ? (
            <div>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={2} />
              <button className="btn btn-sm btn-primary" onClick={saveBio}>Save</button>
              <button className="btn btn-sm btn-ghost" onClick={() => setEditingBio(false)}>Cancel</button>
            </div>
          ) : (
            <p>{profile.bio || (isMe ? 'Add a bio in Settings or here.' : '')}</p>
          )}
          <div className="profile-stats">
            <span><strong>{profile.friendsCount || 0}</strong> Friends</span>
            <span><strong>{profile.followersCount || 0}</strong> Followers</span>
            <span><strong>{profile.followingCount || 0}</strong> Following</span>
          </div>
        </div>
        <div className="profile-actions">
          {isMe ? (
            <button className="btn btn-ghost" onClick={() => setEditingBio(true)}>Edit Profile</button>
          ) : (
            <FriendButton targetUid={uid} />
          )}
        </div>
      </div>

      <div className="profile-tabs">
        <button className={tab === 'posts' ? 'active' : ''} onClick={() => setTab('posts')}>Posts</button>
        <button className={tab === 'photos' ? 'active' : ''} onClick={() => setTab('photos')}>Photos</button>
        <button className={tab === 'friends' ? 'active' : ''} onClick={() => setTab('friends')}>Friends</button>
      </div>

      {tab === 'posts' && (
        <div className="feed">
          {orderedPosts.length === 0 && <div className="empty-state"><p>No posts yet.</p></div>}
          {orderedPosts.map(([id, post]) => <PostCard key={id} postId={id} post={post} />)}
        </div>
      )}

      {tab === 'photos' && (
        <div className="photo-grid">
          {photos.length === 0 && <div className="empty-state"><p>No photos yet.</p></div>}
          {photos.map((url, i) => <img key={i} src={url} alt="" loading="lazy" />)}
        </div>
      )}

      {tab === 'friends' && (
        <div className="friends-grid">
          {Object.keys(friends).length === 0 && <div className="empty-state"><p>No friends yet.</p></div>}
          {Object.keys(friends).map((fid) => <FriendCard key={fid} uid={fid} />)}
        </div>
      )}
    </div>
  );
}

function FriendCard({ uid }) {
  const [p, setP] = useState(null);
  useEffect(() => {
    const unsub = onValue(ref(db, `users/${uid}`), (snap) => setP(snap.val()));
    return unsub;
  }, [uid]);
  if (!p) return null;
  return (
    <a className="friend-card" href={`/profile/${uid}`}>
      <img src={p.photoURL || '/default-avatar.png'} alt="" />
      <span>{p.fullName}</span>
    </a>
  );
}

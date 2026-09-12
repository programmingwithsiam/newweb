import { useState } from 'react';
import { ref as dbRef, push, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { extractHashtags, isValidVideoUrl, getEmbedUrl, getEmbedProvider, isFacebookReelUrl } from '../utils/helpers';
import FacebookEmbed from './FacebookEmbed';

function withTimeout(promise, message, milliseconds = 12000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), milliseconds);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

export default function CreatePost({ onPosted }) {
  const { user, profile } = useAuth();
  const { showToast } = useToast();
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [busy, setBusy] = useState(false);

  function handleFiles(e) {
    const list = Array.from(e.target.files || []).slice(0, 10);
    const tooBig = list.find((f) => f.size > 8 * 1024 * 1024);
    if (tooBig) {
      showToast('Each image must be under 8MB', 'error');
      return;
    }
    setFiles(list);
  }

  async function submit(e) {
    e.preventDefault();
    if (!text.trim() && files.length === 0 && !videoUrl.trim()) {
      showToast('Write something or add media first', 'error');
      return;
    }
    if (videoUrl.trim() && !isValidVideoUrl(videoUrl.trim())) {
      showToast('That video link looks invalid', 'error');
      return;
    }
    setBusy(true);
    try {
      const postRef = push(dbRef(db, 'posts'));
      const images = {};
      for (let i = 0; i < files.length; i++) {
        images[i] = await uploadCommunityImage(files[i], `postImages/${user.uid}/${postRef.key}`);
      }

      const hashtags = extractHashtags(text);
      const hashtagMap = {};
      hashtags.forEach((h) => (hashtagMap[h] = true));

      await withTimeout(set(postRef, {
        uid: user.uid,
        authorName: profile?.fullName || 'User',
        authorPhoto: profile?.photoURL || '',
        text: text.trim(),
        images: Object.keys(images).length ? images : null,
        videoUrl: videoUrl.trim() || null,
        privacy,
        createdAt: serverTimestamp(),
        reactionsCount: 0,
        commentCount: 0,
        hashtags: Object.keys(hashtagMap).length ? hashtagMap : null
      }), 'Post save timed out. Check your Firebase Realtime Database URL.');
      await withTimeout(set(dbRef(db, `userPosts/${user.uid}/${postRef.key}`), true), 'Post index save timed out.');
      if (privacy === 'public') {
        await withTimeout(set(dbRef(db, `publicPostsIndex/${postRef.key}`), { uid: user.uid, createdAt: Date.now() }), 'Public post index save timed out.');
      }
      for (const tag of hashtags) {
        await withTimeout(set(dbRef(db, `hashtags/${tag}/${postRef.key}`), true), 'Hashtag save timed out.');
      }

      setText('');
      setFiles([]);
      setVideoUrl('');
      showToast('Posted!', 'success');
      onPosted?.();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setBusy(false);
    }
  }

  const embedPreview = videoUrl.trim() ? getEmbedUrl(videoUrl.trim()) : null;
  const embedPreviewProvider = getEmbedProvider(videoUrl.trim());

  return (
    <form className="create-post card" onSubmit={submit}>
      <div className="create-post-top">
        <img className="avatar-sm" src={profile?.photoURL || '/default-avatar.png'} alt="" />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`What's on your mind, ${profile?.fullName?.split(' ')[0] || ''}?`}
          rows={3}
        />
      </div>

      {files.length > 0 && (
        <div className="create-post-previews">
          {files.map((f, i) => (
            <img key={i} src={URL.createObjectURL(f)} alt="" />
          ))}
        </div>
      )}

      <input
        className="video-input"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Paste a social media or video link (optional)"
      />
      {embedPreview && (
        <div className={`post-video preview${embedPreviewProvider === 'facebook' ? ' is-facebook' : ''}${isFacebookReelUrl(videoUrl.trim()) ? ' is-facebook-reel' : ''}`}>
          {embedPreviewProvider === 'facebook' ? (
            <FacebookEmbed url={videoUrl.trim()} />
          ) : embedPreviewProvider === 'direct' ? (
            <video src={embedPreview} controls playsInline preload="metadata" />
          ) : (
            <iframe src={embedPreview} title="preview" allowFullScreen />
          )}
        </div>
      )}

      <div className="create-post-toolbar">
        <label className="btn btn-ghost btn-sm file-label">
          🖼️ Photo(s)
          <input type="file" accept="image/*" multiple hidden onChange={handleFiles} />
        </label>
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="public">🌐 Public</option>
          <option value="friends">👥 Friends</option>
          <option value="private">🔒 Only Me</option>
        </select>
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? 'Posting...' : 'Post'}
        </button>
      </div>
    </form>
  );
}

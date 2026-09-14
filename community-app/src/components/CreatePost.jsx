import { useState } from 'react';
import { ref as dbRef, push, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { extractHashtags, isValidVideoUrl, getEmbedUrl, getEmbedProvider, isFacebookReelUrl } from '../utils/helpers';
import FacebookEmbed from './FacebookEmbed';
import { Camera, Image, MessageSquareText, Smile, UsersRound, X } from 'lucide-react';

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
  const [expanded, setExpanded] = useState(false);

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

  const composerBody = (
    <>
      <div className="composer-main-row">
        <div className="composer-avatar-wrap">
          <img className="avatar-sm composer-avatar" src={profile?.photoURL || '/default-avatar.png'} alt="" />
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setExpanded(true)}
          onClick={() => setExpanded(true)}
          placeholder={`What's on your mind, ${profile?.fullName?.split(' ')[0] || 'Siam'}?`}
          rows={1}
        />
        <div className="composer-tools">
          <label className="composer-tool" title="Add photo" aria-label="Add photo">
            <Image size={17} strokeWidth={1.8} aria-hidden="true" />
            <input type="file" accept="image/*" multiple hidden onChange={handleFiles} />
          </label>
          <button className="composer-tool" type="button" title="Camera" aria-label="Camera">
            <Camera size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <button className="composer-tool messenger-tool" type="button" title="Messenger" aria-label="Messenger">
            <MessageSquareText size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <button className="composer-tool" type="button" title="Feeling" aria-label="Feeling">
            <Smile size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
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

      <div className="composer-bottom-row compact-only-row">
        <div className="toolbar-privacy-wrap">
          <UsersRound size={16} strokeWidth={1.7} aria-hidden="true" />
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option value="public">Public</option>
            <option value="friends">Friends</option>
            <option value="private">Only Me</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit" disabled={busy || (!text.trim() && files.length === 0 && !videoUrl.trim())}>
          {busy ? 'Posting...' : 'Post'}
        </button>
      </div>
    </>
  );

  return (
    <>
      <form className="create-post composer-inline" onSubmit={submit}>
        {composerBody}
      </form>

      {expanded && (
        <div className="composer-modal-overlay" onClick={() => setExpanded(false)}>
          <div className="composer-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="composer-modal-header">
              <h3>Create post</h3>
              <button type="button" className="composer-close-btn" aria-label="Close" onClick={() => setExpanded(false)}>
                <X size={20} strokeWidth={2.1} aria-hidden="true" />
              </button>
            </div>

            <div className="composer-modal-user-row">
              <img className="avatar-sm composer-avatar" src={profile?.photoURL || '/default-avatar.png'} alt="" />
              <div className="composer-modal-user-meta">
                <span className="composer-modal-name">{profile?.fullName || 'Siam Ahmed'}</span>
                <div className="composer-modal-privacy-row">
                  <button type="button" className="composer-modal-privacy-pill" onClick={() => setPrivacy((prev) => (prev === 'public' ? 'friends' : prev === 'friends' ? 'private' : 'public'))}>
                    <UsersRound size={14} strokeWidth={1.8} aria-hidden="true" />
                    {privacy === 'public' ? 'Public' : privacy === 'friends' ? 'Friends' : 'Only me'}
                  </button>
                </div>
              </div>
            </div>

            <textarea
              className="composer-modal-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`What's on your mind, ${profile?.fullName?.split(' ')[0] || 'Siam'}?`}
            />

            <div className="composer-modal-action-row">
              <label type="button" className="composer-modal-mini-btn" aria-label="Add image">
                <Image size={18} strokeWidth={1.9} aria-hidden="true" />
                <input type="file" accept="image/*" multiple hidden onChange={handleFiles} />
              </label>
              <button type="button" className="composer-modal-mini-btn" aria-label="Add feeling" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}>
                <Smile size={18} strokeWidth={1.9} aria-hidden="true" />
              </button>
            </div>

            {files.length > 0 && (
              <div className="create-post-previews modal-preview-grid">
                {files.map((f, i) => (
                  <img key={i} src={URL.createObjectURL(f)} alt="" />
                ))}
              </div>
            )}

            <div className="composer-modal-footer">
              <button type="button" className="composer-modal-add-btn" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}>Add to your post</button>
              <div className="composer-modal-icons">
                <label className="composer-tool" title="Add photo" aria-label="Add photo">
                  <Image size={17} strokeWidth={1.8} aria-hidden="true" />
                  <input type="file" accept="image/*" multiple hidden onChange={handleFiles} />
                </label>
                <button type="button" className="composer-tool" aria-label="Camera" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}><Camera size={17} strokeWidth={1.8} aria-hidden="true" /></button>
                <button type="button" className="composer-tool" aria-label="Feeling" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}><Smile size={17} strokeWidth={1.8} aria-hidden="true" /></button>
              </div>
            </div>

            <button className="composer-modal-submit btn btn-primary" type="button" onClick={(e) => submit(e)} disabled={busy || (!text.trim() && files.length === 0 && !videoUrl.trim())}>
              {busy ? 'Posting...' : 'Post'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

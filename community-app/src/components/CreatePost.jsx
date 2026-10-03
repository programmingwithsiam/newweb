import { useEffect, useMemo, useState } from 'react';
import { ref as dbRef, push, remove, set, update, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { extractHashtags, isValidVideoUrl, getEmbedUrl, getEmbedProvider, isFacebookReelUrl } from '../utils/helpers';
import {
  prepareCloudinaryImage,
  uploadCloudinaryImage,
  validateCloudinaryImage,
} from '../config/cloudinary';
import FacebookEmbed from './FacebookEmbed';
import { Camera, Image, MessageSquareText, Smile, UsersRound, Video, X } from 'lucide-react';

function withTimeout(promise, message, milliseconds = 12000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), milliseconds);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

export default function CreatePost({ onPosted }) {
  const { user, profile, requestSignIn } = useAuth();
  const { showToast } = useToast();
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [busy, setBusy] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showVideoInput, setShowVideoInput] = useState(false);
  const filePreviewUrls = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files]);

  useEffect(() => () => filePreviewUrls.forEach((url) => URL.revokeObjectURL(url)), [filePreviewUrls]);

  function toggleVideoInput() {
    setShowVideoInput((current) => {
      const next = !current;
      if (!next) setVideoUrl('');
      return next;
    });
  }

  function handleFiles(e) {
    if (busy) return;
    const list = Array.from(e.target.files || []).slice(0, 10);
    e.target.value = '';
    try {
      list.forEach(validateCloudinaryImage);
      setFiles(list);
    } catch (error) {
      showToast(error.message, 'error');
    }
  }

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    if (!user) {
      requestSignIn('Sign in to create a community post.');
      return;
    }
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
      setUploadingImages(true);
      for (let i = 0; i < files.length; i++) {
        const prepared = await prepareCloudinaryImage(files[i]);
        const uploaded = await uploadCloudinaryImage(prepared.file, {
          onProgress: (progress) => setUploadProgress(Math.round(((i + progress / 100) / files.length) * 100)),
        });
        images[i] = uploaded.secureUrl;
      }
      setUploadingImages(false);

      const hashtags = extractHashtags(text);
      const hashtagMap = {};
      hashtags.forEach((h) => (hashtagMap[h] = true));
      const postData = {
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
      };
      const indexUpdates = {
        [`userPosts/${user.uid}/${postRef.key}`]: true,
      };
      if (privacy === 'public') {
        indexUpdates[`publicPostsIndex/${postRef.key}`] = { uid: user.uid, createdAt: Date.now() };
      }
      for (const tag of hashtags) {
        indexUpdates[`hashtags/${tag}/${postRef.key}`] = true;
      }

      await withTimeout(set(postRef, postData), 'Post save timed out. Check your Firebase Realtime Database URL.');
      try {
        await withTimeout(update(dbRef(db), indexUpdates), 'Post index save timed out.');
      } catch (indexError) {
        try {
          await remove(postRef);
        } catch (rollbackError) {
          console.error('Could not roll back a partially indexed community post:', {
            code: rollbackError?.code || 'unknown',
            message: rollbackError?.message || String(rollbackError),
          });
        }
        throw indexError;
      }

      setText('');
      setFiles([]);
      setUploadProgress(0);
      setVideoUrl('');
      setShowVideoInput(false);
      showToast('Posted!', 'success');
      onPosted?.();
    } catch (err) {
      console.error('Community image or post save failed:', {
        code: err?.code || 'unknown',
        message: err?.message || String(err),
      });
      const uploadErrorCodes = new Set([
        'INVALID_IMAGE_TYPE',
        'IMAGE_TOO_LARGE',
        'IMAGE_PROCESSING_FAILED',
        'CLOUDINARY_INVALID_RESPONSE',
        'CLOUDINARY_UPLOAD_FAILED',
        'CLOUDINARY_NETWORK_ERROR',
        'CLOUDINARY_TIMEOUT',
      ]);
      showToast(
        uploadErrorCodes.has(err?.code)
          ? err.message
          : 'Your post could not be published. Please try again.',
        'error'
      );
    } finally {
      setUploadingImages(false);
      setBusy(false);
    }
  }

  if (!user) {
    return (
      <section className="create-post composer-inline guest-composer">
        <p>Join the conversation</p>
        <button className="btn btn-primary" type="button" onClick={() => requestSignIn('Sign in to create a community post.')}>
          Sign in to create a post
        </button>
      </section>
    );
  }

  const embedPreview = videoUrl.trim() ? getEmbedUrl(videoUrl.trim()) : null;
  const embedPreviewProvider = getEmbedProvider(videoUrl.trim());

  const composerBody = (
    <>
      <div className="composer-main-row">
        <div className="composer-avatar-wrap">
          <img className="avatar-sm composer-avatar" src={profile?.photoURL || '/community/default-avatar.png'} alt="" />
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
            <input type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" multiple hidden disabled={busy} onChange={handleFiles} />
          </label>
          <button className={`composer-tool${showVideoInput ? ' is-active' : ''}`} type="button" title="Add Facebook or YouTube video link" aria-label="Add Facebook or YouTube video link" onClick={toggleVideoInput}>
            <Video size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
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
          {files.map((file, i) => (
            <img key={`${file.name}-${i}`} src={filePreviewUrls[i]} alt="" />
          ))}
        </div>
      )}
      {busy && files.length > 0 && (
        <div className="cloudinary-upload-status" role="status">
          <span>{uploadingImages ? `Uploading images ${uploadProgress}%` : 'Publishing post...'}</span>
          {uploadingImages && <progress max="100" value={uploadProgress} aria-label="Image upload progress" />}
        </div>
      )}

      {showVideoInput && (
        <div className="composer-video-link-row">
          <input
            className={`video-input${showVideoInput ? ' is-visible' : ''}`}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste a Facebook or YouTube video link"
          />
          {videoUrl.trim() && (
            <button type="button" className="composer-video-clear" onClick={() => setVideoUrl('')}>
              Clear
            </button>
          )}
        </div>
      )}
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
              <img className="avatar-sm composer-avatar" src={profile?.photoURL || '/community/default-avatar.png'} alt="" />
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
                <input type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" multiple hidden disabled={busy} onChange={handleFiles} />
              </label>
              <button type="button" className={`composer-modal-mini-btn${showVideoInput ? ' is-active' : ''}`} aria-label="Add Facebook or YouTube video link" onClick={() => toggleVideoInput()}>
                <Video size={18} strokeWidth={1.9} aria-hidden="true" />
              </button>
              <button type="button" className="composer-modal-mini-btn" aria-label="Add feeling" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}>
                <Smile size={18} strokeWidth={1.9} aria-hidden="true" />
              </button>
            </div>

            {showVideoInput && (
              <div className="composer-video-link-row modal-video-link-row">
                <input
                  className={`video-input${showVideoInput ? ' is-visible' : ''}`}
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="Paste a Facebook or YouTube video link"
                />
                {videoUrl.trim() && (
                  <button type="button" className="composer-video-clear" onClick={() => setVideoUrl('')}>
                    Clear
                  </button>
                )}
              </div>
            )}

            {files.length > 0 && (
              <div className="create-post-previews modal-preview-grid">
                {files.map((file, i) => (
                  <img key={`${file.name}-${i}`} src={filePreviewUrls[i]} alt="" />
                ))}
              </div>
            )}
            {busy && files.length > 0 && (
              <div className="cloudinary-upload-status" role="status">
                <span>{uploadingImages ? `Uploading images ${uploadProgress}%` : 'Publishing post...'}</span>
                {uploadingImages && <progress max="100" value={uploadProgress} aria-label="Image upload progress" />}
              </div>
            )}

            <div className="composer-modal-footer">
              <button type="button" className="composer-modal-add-btn" onClick={() => document.querySelector('.composer-modal-textarea')?.focus()}>Add to your post</button>
              <div className="composer-modal-icons">
                <label className="composer-tool" title="Add photo" aria-label="Add photo">
                  <Image size={17} strokeWidth={1.8} aria-hidden="true" />
                  <input type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" multiple hidden disabled={busy} onChange={handleFiles} />
                </label>
                <button type="button" className={`composer-tool${showVideoInput ? ' is-active' : ''}`} aria-label="Add Facebook or YouTube video link" onClick={toggleVideoInput}><Video size={17} strokeWidth={1.8} aria-hidden="true" /></button>
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

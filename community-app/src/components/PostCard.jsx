import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, update, remove, push, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { timeAgo, getEmbedUrl, getEmbedProvider, isFacebookReelUrl, linkifyHashtags } from '../utils/helpers';
import ReactionBar from './ReactionBar';
import CommentSection from './CommentSection';
import ConfirmDialog from './ConfirmDialog';
import FacebookEmbed from './FacebookEmbed';

const PRIVACY_ICON = { public: '🌐', friends: '👥', private: '🔒' };
let youtubeApiPromise;

function loadYoutubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;
  youtubeApiPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve(window.YT);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });
  return youtubeApiPromise;
}

function formatVideoTime(seconds) {
  const total = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(total / 60);
  return `${minutes}:${String(total % 60).padStart(2, '0')}`;
}

export default function PostCard({ postId, post }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(post.text || '');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const videoRef = useRef(null);
  const youtubePlayer = useRef(null);
  const videoTimer = useRef(null);

  const isMine = user?.uid === post.uid;
  const embedUrl = post.videoUrl ? getEmbedUrl(post.videoUrl) : null;
  const embedProvider = getEmbedProvider(post.videoUrl);
  const isFacebookVideo = embedProvider === 'facebook';
  const isFacebookReel = isFacebookReelUrl(post.videoUrl);
  const isYoutubeVideo = embedProvider === 'youtube';
  const isDirectVideo = embedProvider === 'direct';
  const isInteractiveEmbed = Boolean(embedUrl && !isYoutubeVideo && !isDirectVideo);

  useEffect(() => {
    if (!embedUrl || !isYoutubeVideo || !videoRef.current) return undefined;
    const videoFrame = videoRef.current.querySelector('iframe');
    if (!videoFrame) return undefined;

    const pauseWhenHidden = (entries) => {
      if (entries[0]?.isIntersecting) return;
      setVideoPlaying(false);
      youtubePlayer.current?.pauseVideo?.();
      videoFrame.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      );
    };
    const observer = new IntersectionObserver(pauseWhenHidden, { threshold: 0.35 });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [embedUrl, isYoutubeVideo]);

  useEffect(() => {
    if (!embedUrl || !isYoutubeVideo || !videoRef.current) return undefined;
    let cancelled = false;
    const frame = videoRef.current.querySelector('iframe');
    loadYoutubeApi().then((YT) => {
      if (cancelled || !frame || !YT?.Player) return;
      youtubePlayer.current = new YT.Player(frame, {
        playerVars: {
          controls: 0,
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 0,
          disablekb: 1
        },
        events: {
          onReady: (event) => {
            setVideoDuration(event.target.getDuration?.() || 0);
            videoTimer.current = setInterval(() => {
              setVideoTime(event.target.getCurrentTime?.() || 0);
              setVideoDuration(event.target.getDuration?.() || 0);
            }, 500);
          },
          onStateChange: (event) => setVideoPlaying(event.data === 1)
        }
      });
    });
    return () => {
      cancelled = true;
      clearInterval(videoTimer.current);
      youtubePlayer.current?.destroy?.();
      youtubePlayer.current = null;
    };
  }, [embedUrl, isYoutubeVideo]);

  function sendVideoCommand(func, args = []) {
    const frame = videoRef.current?.querySelector('iframe');
    frame?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
  }

  function toggleVideo() {
    if (videoPlaying) youtubePlayer.current?.pauseVideo?.();
    else youtubePlayer.current?.playVideo?.();
    sendVideoCommand(videoPlaying ? 'pauseVideo' : 'playVideo');
  }

  function seekVideo(seconds) {
    const player = youtubePlayer.current;
    if (player?.seekTo) player.seekTo(Math.max(0, (player.getCurrentTime?.() || 0) + seconds), true);
    else sendVideoCommand('seekBy', [seconds]);
  }

  function toggleMute() {
    if (videoMuted) youtubePlayer.current?.unMute?.();
    else youtubePlayer.current?.mute?.();
    sendVideoCommand(videoMuted ? 'unMute' : 'mute');
    setVideoMuted((muted) => !muted);
  }

  function seekTo(value) {
    const seconds = Number(value);
    youtubePlayer.current?.seekTo?.(seconds, true);
    setVideoTime(seconds);
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else videoRef.current?.requestFullscreen?.();
  }

  async function saveEdit() {
    await update(ref(db, `posts/${postId}`), { text, updatedAt: serverTimestamp() });
    setEditing(false);
  }

  async function doDelete() {
    try {
      // Remove index entries BEFORE the post itself: the security rules for
      // publicPostsIndex/userPosts check things like "is this post still
      // public" against the live post record, so deleting the post first
      // would make those checks fail.
      if (post.privacy === 'public') {
        await remove(ref(db, `publicPostsIndex/${postId}`));
      }
      await remove(ref(db, `userPosts/${post.uid}/${postId}`));
      await remove(ref(db, `posts/${postId}`));
      showToast('Post deleted', 'success');
    } catch (err) {
      showToast(`Couldn't delete post: ${err.message}`, 'error');
    } finally {
      setConfirmDelete(false);
    }
  }

  async function copyLink() {
    const url = `${window.location.origin}/post/${postId}`;
    await navigator.clipboard.writeText(url);
    showToast('Post link copied', 'success');
  }

  async function submitReport(reason) {
    await push(ref(db, 'reports'), {
      type: 'post',
      targetId: postId,
      reporterId: user.uid,
      reason,
      createdAt: serverTimestamp()
    });
    setReportOpen(false);
    showToast('Report submitted. Thanks for helping keep the community safe.', 'success');
  }

  return (
    <article className="post-card">
      <header className="post-header">
        <img className="avatar-sm" src={post.authorPhoto || '/default-avatar.png'} alt="" onClick={() => navigate(`/profile/${post.uid}`)} />
        <div className="post-header-text">
          <Link to={`/profile/${post.uid}`} className="post-author">{post.authorName}</Link>
          <div className="muted small">
            {timeAgo(post.createdAt)} · {PRIVACY_ICON[post.privacy] || '🌐'} {post.privacy}
          </div>
        </div>
        {isMine && (
          <div className="post-menu">
            <details>
              <summary>⋯</summary>
              <div className="post-menu-list">
                <button onClick={() => setEditing((e) => !e)}>Edit</button>
                <button className="danger" onClick={() => setConfirmDelete(true)}>Delete</button>
              </div>
            </details>
          </div>
        )}
      </header>

      {editing ? (
        <div className="post-edit">
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <div className="post-edit-actions">
            <button className="btn btn-primary btn-sm" onClick={saveEdit}>Save</button>
            <button className="btn btn-ghost btn-sm" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        post.text && (
          <p className="post-text">
            {linkifyHashtags(post.text).map((part) =>
              part.type === 'hashtag' ? (
                <Link key={part.key} to={`/hashtag/${part.value.slice(1).toLowerCase()}`} className="hashtag">
                  {part.value}
                </Link>
              ) : (
                <span key={part.key}>{part.value}</span>
              )
            )}
          </p>
        )
      )}

      {post.images && (
        <div className={`post-images count-${Math.min(Object.keys(post.images).length, 4)}`}>
          {Object.values(post.images).map((url, i) => (
            <img key={i} src={url} alt="" loading="lazy" />
          ))}
        </div>
      )}

      {post.videoUrl && (
        <div className={`post-video${isInteractiveEmbed ? ' is-interactive' : ''}${isFacebookVideo ? ' is-facebook' : ''}${isFacebookReel ? ' is-facebook-reel' : ''}`} ref={videoRef}>
          {embedUrl ? (
            <>
              <div className="community-video-brand" aria-label="Community video">
                <img src={post.authorPhoto || '/default-avatar.png'} alt="" />
                <div>
                  <strong>{post.authorName || 'Community member'}</strong>
                  <span>Community video</span>
                </div>
              </div>
              {isFacebookVideo ? (
                <FacebookEmbed url={post.videoUrl} />
              ) : isDirectVideo ? (
                <video src={embedUrl} controls playsInline preload="metadata" />
              ) : (
                <iframe
                  src={isYoutubeVideo
                    ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}enablejsapi=1&controls=0&fs=0&disablekb=1&origin=${encodeURIComponent(window.location.origin)}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`
                    : embedUrl}
                  title="Community video"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
              {!videoPlaying && isYoutubeVideo && (
                <button className="community-video-start" type="button" onClick={toggleVideo} aria-label="Play community video">
                  <span>▶</span>
                </button>
              )}
              {isYoutubeVideo && <div className="community-video-controls" aria-label="Video controls">
                <button type="button" onClick={toggleVideo} aria-label={videoPlaying ? 'Pause video' : 'Play video'}>
                  {videoPlaying ? '❚❚' : '▶'}
                </button>
                <button type="button" onClick={() => seekVideo(-10)} aria-label="Back 10 seconds">↶10</button>
                <button type="button" onClick={() => seekVideo(10)} aria-label="Forward 10 seconds">10↷</button>
                <button type="button" onClick={toggleMute} aria-label={videoMuted ? 'Unmute video' : 'Mute video'}>
                  {videoMuted ? '🔇' : '🔊'}
                </button>
                <span className="community-video-time">{formatVideoTime(videoTime)} / {formatVideoTime(videoDuration)}</span>
                <span className="community-video-spacer" />
                <button type="button" onClick={toggleFullscreen} aria-label="Fullscreen video">⛶</button>
              </div>}
              {isYoutubeVideo && <input
                className="community-video-progress"
                type="range"
                min="0"
                max={videoDuration || 0}
                step="0.1"
                value={Math.min(videoTime, videoDuration || 0)}
                onChange={(event) => seekTo(event.target.value)}
                aria-label="Video progress"
                disabled={!videoDuration}
              />}
            </>
          ) : (
            <a className="video-link" href={post.videoUrl} target="_blank" rel="noreferrer">
              ↗ Open original link
            </a>
          )}
        </div>
      )}

      <div className="post-stats muted small">
        {(post.reactionsCount || 0) > 0 && <span>{post.reactionsCount} reactions</span>}
        {(post.commentCount || 0) > 0 && <span>{post.commentCount} comments</span>}
      </div>

      <div className="post-actions">
        <ReactionBar
          targetPath={`reactions/${postId}`}
          countPath={`posts/${postId}/reactionsCount`}
          ownerUid={post.uid}
          notifyPayload={{ postId }}
        />
        <button className="btn btn-ghost btn-sm" onClick={() => setShowComments((s) => !s)}>💬 Comment</button>
        <button className="btn btn-ghost btn-sm" onClick={copyLink}>🔗 Share</button>
        {!isMine && (
          <button className="btn btn-ghost btn-sm" onClick={() => setReportOpen(true)}>🚩 Report</button>
        )}
      </div>

      {showComments && <CommentSection postId={postId} postOwnerUid={post.uid} />}

      <ConfirmDialog
        open={confirmDelete}
        title="Delete post?"
        message="This will permanently remove the post."
        confirmLabel="Delete"
        danger
        onConfirm={doDelete}
        onCancel={() => setConfirmDelete(false)}
      />

      {reportOpen && (
        <div className="modal-overlay" onClick={() => setReportOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Report post</h3>
            {['Spam', 'Harassment', 'Nudity', 'False information', 'Other'].map((r) => (
              <button key={r} className="btn btn-ghost report-option" onClick={() => submitReport(r)}>{r}</button>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

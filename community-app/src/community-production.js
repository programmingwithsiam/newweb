import { app, db, getAppCheckToken, isFirebaseConfigured } from '../../assets/js/firebase-init.js';
import { ADMIN_EMAIL, observeAuthState, redirectToAuthPrompt } from '../../assets/js/auth.js';
import { createCommunityMessengerAdapter } from './community-messenger.js';
import { prepareCloudinaryImage, uploadCloudinaryImage } from './config/cloudinary.js';

const state = {
  user: null,
  profile: null,
  profilesByUid: new Map(),
  namesByUid: new Map(),
  file: null,
  hiddenPosts: new Set(),
  pendingReactions: new Set(),
  pendingFollows: new Set(),
  reactionModal: null,
  suggestionsRequest: 0,
  feedUnsubscribe: null,
};

const MODERATION_REACTIONS = ['like', 'love', 'care', 'haha', 'wow', 'sad', 'angry'];
const COMMUNITY_API_ORIGIN = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? `http://${window.location.hostname}:3001`
  : window.location.origin;
let firestore;
let youtubeIframeApiPromise;
let communityVideoId = 0;
const communityYoutubePlayers = new Set();
let communityMediaObserver;
let communityMessenger;

function restoreCommunityEmbed(container) {
  const provider = container.dataset.pp;
  const url = container.dataset.url;
  if (!provider || provider === 'yt' || !url) return;
  const name = provider === 'fb' ? 'Facebook' : 'Instagram';
  container.innerHTML = `<span class="bd">${name}</span><span class="pl">▶</span><a class="op" href="${window.esc(url)}" target="_blank" rel="noopener">Open on ${name}</a>`;
  container.dataset.play = '1';
  container.setAttribute('role', 'button');
  container.setAttribute('tabindex', '0');
  container.setAttribute('aria-label', 'Play video');
}

function observeCommunityMedia() {
  if (!('IntersectionObserver' in window)) return;
  if (!communityMediaObserver) {
    communityMediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) return;
        const target = entry.target;
        if (target instanceof HTMLVideoElement) {
          target.pause();
          return;
        }
        const player = [...communityYoutubePlayers].find((item) => item.container === target);
        if (player) {
          player.player?.pauseVideo?.();
          return;
        }
        if (target.querySelector('iframe')) restoreCommunityEmbed(target);
      });
    }, { threshold: [0, 0.25] });
  }
  document.querySelectorAll('#main video.vf,#main .vid[data-pp]').forEach((video) => {
    if (!video.dataset.communityObserved) {
      communityMediaObserver.observe(video);
      video.dataset.communityObserved = '1';
    }
  });
}

function loadCommunityYoutubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!youtubeIframeApiPromise) {
    youtubeIframeApiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => reject(new Error('YouTube player could not be loaded.'));
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousReady === 'function') previousReady();
        if (window.YT?.Player) resolve(window.YT);
        else reject(new Error('YouTube player could not be initialized.'));
      };
      document.head.append(script);
    }).catch((error) => {
      youtubeIframeApiPromise = null;
      throw error;
    });
  }
  return youtubeIframeApiPromise;
}

function getCommunityYoutubeId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return parsed.pathname.split('/').filter(Boolean)[0] || '';
    if (!['youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) return '';
    return parsed.searchParams.get('v') ||
      parsed.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)/)?.[1] ||
      '';
  } catch {
    return '';
  }
}

function formatCommunityVideoTime(seconds) {
  const value = Math.max(0, Math.floor(Number(seconds) || 0));
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
}

function communityVideoIcon(name) {
  const paths = {
    play: '<path fill="currentColor" stroke="none" d="M7 5.2v13.6c0 .9 1 1.4 1.8.9l10.2-6.8a1.1 1.1 0 0 0 0-1.8L8.8 4.3A1.1 1.1 0 0 0 7 5.2z"/>',
    pause: '<path fill="currentColor" stroke="none" d="M5.5 4.5H10v15H5.5zM14 4.5h4.5v15H14z"/>',
    rewind: '<path d="M3.5 8A9 9 0 1 1 3 16"/><path d="M3.5 8V3h5"/>',
    forward: '<path d="M20.5 8A9 9 0 1 0 21 16"/><path d="M20.5 8V3h-5"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13"/>',
    muted: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6m0-6-5 6"/>',
    settings: '<path d="m12 1 10 5.5v11L12 23 2 17.5v-11z"/><circle cx="12" cy="12" r="2.4"/>',
    fullscreen: '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"/>',
    captions: '<rect x="2.5" y="3.5" width="19" height="17" rx="1"/><path d="M10 9H8a2 2 0 0 0 0 4h2m6-4h-2a2 2 0 0 0 0 4h2"/>',
    annotation: '<rect x="2.5" y="3.5" width="19" height="17" rx="1"/><path d="m8 16 7-7 3 3-7 7H8zM14 10l3 3"/>',
    pip: '<rect x="3" y="5" width="18" height="14" rx="2"/><rect x="12" y="11" width="7" height="5" rx="1"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

function cleanupCommunityYoutubePlayer(instance) {
  if (instance.timer) window.clearInterval(instance.timer);
  instance.player?.destroy?.();
  communityYoutubePlayers.delete(instance);
}

if (document.body) {
  new MutationObserver(() => {
    communityYoutubePlayers.forEach((instance) => {
      if (!instance.container.isConnected) cleanupCommunityYoutubePlayer(instance);
    });
    observeCommunityMedia();
  }).observe(document.body, { childList: true, subtree: true });
}

async function playCommunityYoutubeVideo(container, url) {
  const videoId = getCommunityYoutubeId(url);
  if (!videoId) {
    showError('This YouTube video link is invalid.');
    return;
  }

  container.removeAttribute('data-play');
  container.removeAttribute('role');
  container.classList.add('community-video-player');
  const playerId = `community-youtube-player-${++communityVideoId}`;
  container.innerHTML = `<div class="community-video-surface"><div id="${playerId}"></div><button class="community-video-center" type="button" aria-label="Play video">${communityVideoIcon('play')}</button></div>
    <div class="community-video-controls">
      <div class="community-video-timeline"><span data-community-video-current>0:00</span><div class="community-video-progress-wrap"><input class="community-video-progress" data-community-video-progress type="range" min="0" max="100" value="0" aria-label="Video progress"></div><span data-community-video-duration>0:00</span></div>
      <div class="community-video-toolbar">
        <div class="community-video-toolbar-left">
          <button data-community-video-play type="button" aria-label="Play video" data-tooltip="Play">${communityVideoIcon('play')}</button>
          <button data-community-video-back type="button" aria-label="Rewind 10 seconds" data-tooltip="Rewind 10 seconds"><span class="community-video-seek-icon">${communityVideoIcon('rewind')}<small>10</small></span></button>
          <button data-community-video-forward type="button" aria-label="Forward 10 seconds" data-tooltip="Forward 10 seconds"><span class="community-video-seek-icon">${communityVideoIcon('forward')}<small>10</small></span></button>
          <div class="community-video-volume-control">
            <button data-community-video-mute type="button" aria-label="Mute video" data-tooltip="Mute">${communityVideoIcon('volume')}</button>
            <input class="community-video-volume" data-community-video-volume type="range" min="0" max="100" value="100" aria-label="Video volume">
            <output class="community-video-volume-value" data-community-video-volume-value aria-live="polite">100%</output>
          </div>
        </div>
        <div class="community-video-toolbar-right">
          <button data-community-video-captions type="button" aria-label="Toggle subtitles" aria-pressed="false" data-tooltip="Subtitles">${communityVideoIcon('captions')}</button>
          <button data-community-video-annotations type="button" aria-label="Annotations unavailable" title="Annotations are not supported in embedded YouTube videos." data-tooltip="Annotations unavailable" disabled>${communityVideoIcon('annotation')}</button>
          <button data-community-video-settings type="button" aria-label="Player settings" aria-expanded="false" data-tooltip="Settings">${communityVideoIcon('settings')}</button>
          <button data-community-video-pip type="button" aria-label="Mini player" data-tooltip="Mini player">${communityVideoIcon('pip')}</button>
          <button data-community-video-fullscreen type="button" aria-label="Fullscreen" data-tooltip="Fullscreen">${communityVideoIcon('fullscreen')}</button>
        </div>
      </div>
      <div class="community-video-settings" hidden>
        <strong>Settings</strong>
        <label>Playback speed<select data-community-video-speed aria-label="Playback speed">
          <option value="0.5">0.5x</option><option value="0.75">0.75x</option>
          <option value="1" selected>1x - Normal</option><option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option><option value="1.75">1.75x</option><option value="2">2x</option>
        </select></label>
      </div>
    </div>`;
  const instance = { container, player: null, timer: null };
  communityYoutubePlayers.add(instance);
  communityMediaObserver?.observe(container);
  container.dataset.communityObserved = '1';
  const playButton = container.querySelector('[data-community-video-play]');
  const centerButton = container.querySelector('.community-video-center');
  const videoSurface = container.querySelector('.community-video-surface');
  const progress = container.querySelector('[data-community-video-progress]');
  const currentTime = container.querySelector('[data-community-video-current]');
  const durationTime = container.querySelector('[data-community-video-duration]');
  const volume = container.querySelector('[data-community-video-volume]');
  const muteButton = container.querySelector('[data-community-video-mute]');
  const volumeValue = container.querySelector('[data-community-video-volume-value]');
  const settingsButton = container.querySelector('[data-community-video-settings]');
  const settingsMenu = container.querySelector('.community-video-settings');
  const captionsButton = container.querySelector('[data-community-video-captions]');
  let captionsEnabled = false;
  let captionsLoading = false;
  let captionRequest = 0;
  const setMuteButton = (muted) => {
    muteButton.innerHTML = communityVideoIcon(muted ? 'muted' : 'volume');
    muteButton.setAttribute('aria-label', muted ? 'Unmute video' : 'Mute video');
    muteButton.dataset.tooltip = muted ? 'Unmute' : 'Mute';
  };

  const updateTimeline = () => {
    if (!container.isConnected) {
      cleanupCommunityYoutubePlayer(instance);
      return;
    }
    const current = instance.player?.getCurrentTime?.() || 0;
    const duration = instance.player?.getDuration?.() || 0;
    const progressValue = duration ? (current / duration) * 100 : 0;
    currentTime.textContent = formatCommunityVideoTime(current);
    durationTime.textContent = formatCommunityVideoTime(duration);
    progress.value = String(progressValue);
    progress.style.setProperty('--community-progress', `${progressValue}%`);
  };

  playButton.addEventListener('click', () => {
    if (instance.player?.getPlayerState?.() === 1) instance.player.pauseVideo();
    else instance.player?.playVideo();
  });
  videoSurface.addEventListener('click', (event) => {
    if (event.target.closest('button')) return;
    if (instance.player?.getPlayerState?.() === 1) instance.player.pauseVideo();
    else instance.player?.playVideo();
  });
  centerButton.addEventListener('click', () => instance.player?.playVideo());
  settingsButton.addEventListener('click', () => {
    settingsMenu.hidden = !settingsMenu.hidden;
    settingsButton.setAttribute('aria-expanded', String(!settingsMenu.hidden));
  });
  captionsButton.addEventListener('click', () => {
    if (!instance.player?.loadModule || !instance.player?.getOption || !instance.player?.setOption) {
      captionsButton.setAttribute('aria-label', 'Subtitles unavailable');
      captionsButton.dataset.tooltip = 'Subtitles unavailable';
      showError('Subtitles are not available for this video.');
      return;
    }
    captionRequest += 1;
    if (captionsEnabled) {
      instance.player.unloadModule?.('captions');
      captionsEnabled = false;
      captionsLoading = false;
      captionsButton.classList.remove('is-active');
      captionsButton.setAttribute('aria-pressed', 'false');
      captionsButton.setAttribute('aria-busy', 'false');
      captionsButton.setAttribute('aria-label', 'Turn subtitles on');
      captionsButton.dataset.tooltip = 'Subtitles';
      return;
    }

    captionsLoading = true;
    captionsButton.setAttribute('aria-busy', 'true');
    captionsButton.setAttribute('aria-label', 'Loading subtitles');
    captionsButton.dataset.tooltip = 'Loading subtitles';
    instance.player.loadModule('captions');
    const requestId = captionRequest;
    [300, 900, 1800].forEach((delay, index) => {
      window.setTimeout(() => {
        if (requestId !== captionRequest || !captionsLoading) return;
        const tracks = instance.player?.getOption('captions', 'tracklist');
        const track = Array.isArray(tracks) && tracks.find((item) => item.languageCode || item.language_code);
        if (track) {
          const languageCode = track.languageCode || track.language_code;
          instance.player.setOption('captions', 'track', {
            languageCode,
            ...(track.vssId ? { vssId: track.vssId } : {}),
          });
          captionsEnabled = true;
          captionsLoading = false;
          captionRequest += 1;
          captionsButton.classList.add('is-active');
          captionsButton.setAttribute('aria-pressed', 'true');
          captionsButton.setAttribute('aria-busy', 'false');
          captionsButton.setAttribute('aria-label', 'Turn subtitles off');
          captionsButton.dataset.tooltip = 'Turn subtitles off';
        } else if (index === 2) {
          captionsLoading = false;
          captionsButton.setAttribute('aria-busy', 'false');
          captionsButton.setAttribute('aria-label', 'Subtitles unavailable');
          captionsButton.dataset.tooltip = 'Subtitles unavailable';
          showError('No subtitles are available for this video.');
        }
      }, delay);
    });
  });
  container.querySelector('[data-community-video-speed]').addEventListener('change', (event) => {
    instance.player?.setPlaybackRate?.(Number(event.currentTarget.value));
  });
  container.querySelector('[data-community-video-back]').addEventListener('click', () => {
    instance.player?.seekTo?.(Math.max(0, (instance.player.getCurrentTime?.() || 0) - 10), true);
  });
  container.querySelector('[data-community-video-forward]').addEventListener('click', () => {
    const duration = instance.player?.getDuration?.() || Infinity;
    instance.player?.seekTo?.(Math.min(duration, (instance.player.getCurrentTime?.() || 0) + 10), true);
  });
  progress.addEventListener('change', () => {
    const duration = instance.player?.getDuration?.() || 0;
    if (duration) instance.player?.seekTo?.((Number(progress.value) / 100) * duration, true);
  });
  progress.addEventListener('input', () => {
    progress.style.setProperty('--community-progress', `${progress.value}%`);
  });
  volume.addEventListener('input', () => {
    const selectedVolume = Number(volume.value);
    instance.player?.setVolume?.(selectedVolume);
    if (selectedVolume > 0) instance.player?.unMute?.();
    else instance.player?.mute?.();
    volumeValue.value = `${selectedVolume}%`;
    setMuteButton(selectedVolume === 0);
  });
  muteButton.addEventListener('click', () => {
    if (instance.player?.isMuted?.()) {
      instance.player.unMute();
      instance.player.setVolume(Number(volume.value) || 100);
      volumeValue.value = `${volume.value || 100}%`;
      setMuteButton(false);
    } else {
      instance.player?.mute?.();
      volumeValue.value = '0%';
      setMuteButton(true);
    }
  });
  container.querySelector('[data-community-video-fullscreen]').addEventListener('click', () => {
    if (!document.fullscreenElement) void container.requestFullscreen?.();
    else void document.exitFullscreen?.();
  });
  container.querySelector('[data-community-video-pip]').addEventListener('click', async () => {
    const iframe = instance.player?.getIframe?.();
    try {
      if (document.pictureInPictureEnabled && typeof iframe?.requestPictureInPicture === 'function') {
        if (document.pictureInPictureElement) await document.exitPictureInPicture?.();
        else await iframe.requestPictureInPicture();
      } else if (!document.fullscreenElement) {
        await container.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (error) {
      showError(error.message || 'Picture-in-picture could not be opened.');
    }
  });

  try {
    const YT = await loadCommunityYoutubeApi();
    if (!container.isConnected) {
      cleanupCommunityYoutubePlayer(instance);
      return;
    }
    instance.player = new YT.Player(playerId, {
      host: 'https://www.youtube-nocookie.com',
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        origin: window.location.origin,
      },
      events: {
        onReady: () => {
          instance.player.playVideo();
          updateTimeline();
        },
        onStateChange: (event) => {
          const isPlaying = event.data === YT.PlayerState.PLAYING;
          container.dataset.playing = String(isPlaying);
          playButton.innerHTML = communityVideoIcon(isPlaying ? 'pause' : 'play');
          playButton.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video');
          playButton.dataset.tooltip = isPlaying ? 'Pause' : 'Play';
          centerButton.hidden = isPlaying;
          if (instance.timer) window.clearInterval(instance.timer);
          instance.timer = isPlaying ? window.setInterval(updateTimeline, 500) : null;
          if (isPlaying) {
            communityYoutubePlayers.forEach((other) => {
              if (other !== instance) other.player?.pauseVideo?.();
            });
          }
          updateTimeline();
        },
        onError: () => showError('This YouTube video could not be played.'),
      },
    });
  } catch (error) {
    cleanupCommunityYoutubePlayer(instance);
    container.classList.remove('community-video-player');
    container.textContent = 'Video player could not be loaded. Please try again.';
    showError(error.message || 'Video player could not be loaded.');
  }
}

function showError(message) {
  const toast = window.toast;
  if (typeof toast === 'function') toast(message);
  else console.error(message);
}

function resetPreviewData() {
  window.posts = [];
  window.stories = [];
  window.reels = [];
  window.pts = {};
  window.U = { You: { bio: '', f: 0, g: 0 } };
  window.fol = {};
  window.communityUid = null;
  window.communityProfile = null;
  window.communitySuggestedProfiles = [];
  window.communityNameToUid = {};
  window.me = 'You';
  document.title = 'CodeWithSiam Community';
  document.querySelector('.community-watermark')?.remove();
  document.querySelector('#xtra')?.remove();
  const messageBadge = document.querySelector('#cwmBadge');
  if (messageBadge) {
    messageBadge.textContent = '';
    messageBadge.hidden = true;
  }
  window.render?.();
}

function requireUser() {
  if (state.user) return state.user;
  redirectToAuthPrompt('Continue with Google to post, react, or edit your Community profile.');
  return null;
}

function modules() {
  if (!firestore) {
    firestore = import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  }
  return firestore;
}

async function apiRequest(path, user, body) {
  const headers = {
    Authorization: `Bearer ${await user.getIdToken()}`,
    'Content-Type': 'application/json',
  };
  try {
    headers['X-Firebase-AppCheck'] = await getAppCheckToken();
  } catch (error) {
    console.error('Community App Check token could not be obtained:', error);
  }

  const response = await fetch(new URL(path, COMMUNITY_API_ORIGIN), {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(`Community API returned an invalid response (${response.status}).`);
  }
  if (!response.ok) throw new Error(result.error || `Community request failed (${response.status}).`);
  return result;
}

function getDisplayName(user, profile) {
  return String(profile?.displayName || profile?.name || user.displayName ||
    user.email?.split('@')[0] || 'Community member').trim().slice(0, 120);
}

function updateLocalProfile(profile) {
  state.profile = profile;
  window.communityProfile = profile;
  const name = getDisplayName(state.user, profile);
  const previousName = window.me;
  state.namesByUid.set(state.user.uid, name);
  state.profilesByUid.set(state.user.uid, profile);
  if (previousName !== name && typeof window.rename === 'function') {
    window.rename(previousName, name);
    delete window.communityNameToUid[previousName];
  }
  window.me = name;
  window.posts.forEach((post) => {
    if (post.authorUid === state.user.uid) post.by = name;
  });
  window.U[name] = {
    ...window.U[name],
    bio: profile.bio || '',
    f: Number(profile.followersCount ?? profile.followers?.length ?? 0),
    g: Number(profile.followingCount ?? profile.following?.length ?? 0),
  };
  window.communityUid = state.user.uid;
  window.communityNameToUid[name] = state.user.uid;
  communityMessenger?.setProfile(profile);
}

async function ensurePublicProfile(user) {
  const { doc, getDoc, setDoc, serverTimestamp } = await modules();
  const profileRef = doc(db, 'publicProfiles', user.uid);
  const snapshot = await getDoc(profileRef);
  const existing = snapshot.exists() ? snapshot.data() : {};
  const name = getDisplayName(user, existing);
  const photoURL = String(existing.profilePicture || existing.photoURL || user.photoURL || '');
  if (!snapshot.exists()) {
    await setDoc(profileRef, {
      uid: user.uid,
      name,
      displayName: name,
      photoURL,
      profilePicture: photoURL,
      coverPhoto: '',
      coverURL: '',
      username: '',
      searchName: name.toLowerCase(),
      bio: '',
      location: '',
      website: '',
      learningRole: '',
      skills: [],
      followers: [],
      following: [],
      followersCount: 0,
      followingCount: 0,
      totalProjects: 0,
      createdAt: serverTimestamp(),
      online: true,
      lastSeen: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    existing.name = name;
    existing.displayName = name;
    existing.photoURL = photoURL;
    existing.profilePicture = photoURL;
    existing.bio = '';
  }
  existing.uid = user.uid;
  updateLocalProfile(existing);
}

function timeAgo(value) {
  const date = value?.toDate ? value.toDate() : new Date(value || 0);
  const minutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60000));
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} h`;
  return `${Math.floor(hours / 24)} d`;
}

function mapPost(snapshot) {
  const data = snapshot.data();
  const authorUid = String(data.authorUid || '');
  const by = state.namesByUid.get(authorUid) || String(data.authorName || 'Community member');
  if (authorUid) {
    state.namesByUid.set(authorUid, by);
    window.communityNameToUid[by] = authorUid;
  }
  const externalVideo = data.externalMediaURL && typeof window.parse === 'function'
    ? window.parse(data.externalMediaURL)
    : null;
  const uploadedImage = data.mediaType === 'image' ? data.mediaURL : null;
  const uploadedVideo = data.mediaType === 'video' && data.mediaURL
    ? { p: 'file', url: data.mediaURL }
    : null;
  return {
    id: snapshot.id,
    authorUid,
    authorName: String(data.authorName || 'Community member'),
    by,
    time: timeAgo(data.createdAt),
    txt: String(data.text || ''),
    img: uploadedImage || null,
    vid: uploadedVideo || externalVideo || null,
    mediaAssetId: data.mediaAssetId || '',
    mediaPublicId: data.mediaPublicId || '',
    mediaType: data.mediaType || '',
    feel: String(data.feel || ''),
    bg: String(data.background || ''),
    likeCount: Number(data.likeCount || 0),
    commentCount: Number(data.commentCount || 0),
    saved: false,
    r: {},
    my: null,
    cm: [],
    _commentsLoaded: false,
    _commentsLoading: false,
  };
}

async function loadSavedPosts(posts, user) {
  if (!user || !posts.length) return;
  const { collection, getDocs, limit, query, where } = await modules();
  const savedQuery = query(
    collection(db, 'savedPosts'),
    where('ownerUid', '==', user.uid),
    limit(20),
  );
  const snapshot = await getDocs(savedQuery);
  const savedIds = new Set(snapshot.docs.map((saved) => saved.data().postId));
  posts.forEach((post) => {
    post.saved = savedIds.has(post.id);
  });
  window.render?.();
}

async function loadMyReactions(posts, user) {
  if (!user || !posts.length) return;
  const { doc, getDoc } = await modules();
  await Promise.all(posts.map(async (post) => {
    const snapshot = await getDoc(doc(db, 'posts', post.id, 'reactions', user.uid));
    if (snapshot.exists()) post.my = snapshot.data().type;
  }));
  window.render?.();
}

function renderReactionModal() {
  const modalState = state.reactionModal;
  if (!modalState) return;
  const { users, type } = modalState;
  const visibleUsers = type === 'all' ? users : users.filter((user) => user.type === type);
  const counts = new Map();
  users.forEach((user) => counts.set(user.type, (counts.get(user.type) || 0) + 1));
  const tabs = MODERATION_REACTIONS.filter((reaction) => counts.has(reaction));
  const modal = document.querySelector('#modal');
  if (!modal) return;
  modal.innerHTML = '<div class="cphead"><h2>Reactions</h2><button class="x2" data-community-rm-close aria-label="Close">✕</button></div>'
    + '<div class="rtabs" role="tablist"><button class="rt'+(type === 'all' ? ' on' : '')+'" data-community-rt="all">All</button>'
    + tabs.map((reaction) => '<button class="rt'+(type === reaction ? ' on' : '')+'" data-community-rt="'+reaction+'" aria-label="'+reaction+'">'
      + ic(reaction)+'<span>'+counts.get(reaction)+'</span></button>').join('')+'</div>'
    + '<div class="rlist">'+(visibleUsers.length ? visibleUsers.map((user) => '<div class="rrow"><div class="rav" data-u="'+esc(user.name)+'">'
      + av(user.name)+'<span class="rbd">'+ic(user.type)+'</span></div><b class="rn" data-u="'+esc(user.name)+'">'+esc(user.name)+'</b>'
      +(user.uid === state.user?.uid ? '' : '<button class="btn g sm" data-fo="'+esc(user.name)+'" data-follow-uid="'+esc(user.uid)+'">'
        +(window.fol[user.name] ? 'Following' : 'Follow')+'</button>')+'</div>').join('')
      : '<div class="empty">No reactions yet.</div>')+'</div>'
    + '<div class="empty">Showing up to 30 reactions.</div>';
  document.querySelector('#ovM')?.classList.add('on');
}

async function showReactions(ref, button) {
  const [scope, postId, parentCommentId, replyId] = ref.split(':');
  const commentId = scope === 'c' ? parentCommentId : scope === 'r' ? replyId : '';
  if (!['p', 'c', 'r'].includes(scope) || !postId || (scope !== 'p' && !commentId)) {
    showError('Reactions could not be loaded.');
    return;
  }
  const post = window.posts.find((item) => item.id === postId);
  if (!post) return;
  const comment = commentId && post.cm
    .flatMap((item) => [item, ...(item.rep || [])])
    .find((item) => item.id === commentId);
  if (commentId && !comment) return;
  if (button) button.disabled = true;
  try {
    const { collection, doc, getDoc, getDocs, limit, query } = await modules();
    const reactions = scope === 'p'
      ? collection(db, 'posts', postId, 'reactions')
      : collection(db, 'posts', postId, 'comments', commentId, 'reactions');
    const snapshot = await getDocs(query(
      reactions,
      limit(30),
    ));
    const users = await Promise.all(snapshot.docs.map(async (reaction) => {
      const uid = reaction.id;
      const [profileSnapshot, followSnapshot] = await Promise.all([
        getDoc(doc(db, 'publicProfiles', uid)),
        state.user && uid !== state.user.uid
          ? getDoc(doc(db, 'follows', `${state.user.uid}_${uid}`))
          : Promise.resolve(null),
      ]);
      const profile = profileSnapshot.exists() ? profileSnapshot.data() : {};
      const name = getDisplayName({ uid, displayName: uid.slice(0, 12) }, profile);
      if (profileSnapshot.exists()) {
        state.namesByUid.set(uid, name);
        state.profilesByUid.set(uid, { ...profile, uid });
        window.communityNameToUid[name] = uid;
        window.U[name] = {
          ...window.U[name],
          bio: profile.bio || '',
          f: Number(profile.followersCount ?? profile.followers?.length ?? 0),
          g: Number(profile.followingCount ?? profile.following?.length ?? 0),
        };
      }
      if (state.user && uid !== state.user.uid) {
        window.fol[name] = Boolean(followSnapshot?.exists() ||
          (Array.isArray(profile.followers) && profile.followers.includes(state.user.uid)));
      }
      return { uid, name, type: MODERATION_REACTIONS.includes(reaction.data().type) ? reaction.data().type : 'like' };
    }));
    state.reactionModal = { ref, postId, commentId, users, type: 'all' };
    renderReactionModal();
  } catch (error) {
    console.error('Community reactions could not be loaded:', error);
    showError('Reactions could not be loaded.');
  } finally {
    if (button?.isConnected) button.disabled = false;
  }
}

function subscribeToFeed() {
  if (!db) {
    showError('Community is unavailable because Firebase is not configured.');
    document.querySelector('#main')?.style.setProperty('visibility', 'visible');
    return;
  }
  void modules().then(({ collection, limit, onSnapshot, orderBy, query }) => {
    const feed = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(20));
    state.feedUnsubscribe = onSnapshot(feed, (snapshot) => {
      window.posts = snapshot.docs
        .map(mapPost)
        .filter((post) => !state.hiddenPosts.has(post.id));
      void loadSavedPosts(window.posts, state.user).catch((error) => {
        console.error('Could not load saved Community posts:', error);
      });
      void loadMyReactions(window.posts, state.user).catch((error) => {
        console.error('Could not load Community reactions:', error);
      });
      window.render?.();
      document.querySelector('#main')?.style.setProperty('visibility', 'visible');
    }, (error) => {
      console.error('Community feed subscription failed:', error);
      showError('Community posts could not be loaded. Please refresh and try again.');
      document.querySelector('#main')?.style.setProperty('visibility', 'visible');
    });
  }).catch((error) => {
    console.error('Community feed initialization failed:', error);
    showError('Community could not be connected. Please refresh and try again.');
    document.querySelector('#main')?.style.setProperty('visibility', 'visible');
  });
}

async function loadComments(post) {
  const { collection, doc, getDoc, getDocs, limit, orderBy, query } = await modules();
  const comments = query(
    collection(db, 'posts', post.id, 'comments'),
    orderBy('createdAt', 'desc'),
    limit(30),
  );
  const snapshot = await getDocs(comments);
  post.cm = snapshot.docs.map((comment) => {
    const data = comment.data();
    return {
      id: comment.id,
      parentCommentId: String(data.parentCommentId || ''),
      authorUid: String(data.authorUid || ''),
      by: String(data.authorName || 'Community member'),
      t: String(data.text || ''),
      time: timeAgo(data.createdAt),
      createdAtMs: data.createdAt?.toMillis?.() || 0,
      rep: [],
      r: data.reactionCounts || {},
    };
  });
  if (state.user) {
    await Promise.all(post.cm.map(async (comment) => {
      const reaction = await getDoc(doc(
        db,
        'posts',
        post.id,
        'comments',
        comment.id,
        'reactions',
        state.user.uid,
      ));
      if (reaction.exists()) comment.my = reaction.data().type;
    }));
  }
  const commentsById = new Map(post.cm.map((comment) => [comment.id, comment]));
  post.cm = post.cm.filter((comment) => {
    if (!comment.parentCommentId) return true;
    const parent = commentsById.get(comment.parentCommentId);
    if (!parent) return false;
    parent.rep.push(comment);
    return false;
  });
  post.cm.forEach((comment) => comment.rep.sort((first, second) =>
    first.createdAtMs - second.createdAtMs
  ));
  post._commentsLoaded = true;
  post._commentsLoading = false;
  window.render?.();
}

async function submitComment(form) {
  const user = requireUser();
  if (!user) return;
  const replyParts = form.dataset.rf?.split(':');
  const postId = form.dataset.nc || form.dataset.cf ||
    (replyParts?.[0] === 'c' ? replyParts[1] : '');
  const parentCommentId = replyParts?.[0] === 'c' ? replyParts[2] : '';
  const input = form.querySelector('input');
  const text = input?.value.trim();
  if (!postId || !text) return;
  const button = form.querySelector('button[type="submit"],button:not([type])');
  if (button) button.disabled = true;
  try {
    const result = await apiRequest('/api/create-comment', user, {
      postId,
      text,
      ...(parentCommentId ? { parentCommentId } : {}),
    });
    const post = window.posts.find((item) => item.id === postId);
    if (post) {
      post.commentCount = Number(result.commentCount ?? post.commentCount + 1);
      post._commentsLoaded = false;
      post._commentsLoading = false;
      post.open = true;
      await loadComments(post);
      if (parentCommentId) {
        const parent = post.cm.find((comment) => comment.id === parentCommentId);
        if (parent) parent.open = true;
        window.render?.();
      }
    }
    showError(parentCommentId ? 'Reply added.' : 'Comment added.');
  } catch (error) {
    console.error('Community comment failed:', error);
    showError(error.message || 'Comment could not be added.');
  } finally {
    if (button) button.disabled = false;
  }
}

async function toggleReaction(ref, selectedType, button) {
  const user = requireUser();
  if (!user) return;
  const [scope, postId] = ref.split(':');
  if (!postId || !['p', 'c', 'r'].includes(scope)) {
    showError('This reaction is not available.');
    return;
  }
  const [, , parentCommentId, replyId] = ref.split(':');
  const commentId = scope === 'c' ? parentCommentId : scope === 'r' ? replyId : '';
  const post = window.posts.find((item) => item.id === postId);
  if (!post) return;
  if (scope !== 'p') {
    const comment = post.cm
      .flatMap((item) => [item, ...(item.rep || [])])
      .find((item) => item.id === commentId);
    if (!comment) return;
    const type = selectedType || 'like';
    const nextType = comment.my === type ? null : type;
    if (button) button.disabled = true;
    try {
      const result = await apiRequest('/api/toggle-comment-reaction', user, {
        postId,
        commentId,
        type: nextType,
      });
      comment.r = result.reactionCounts || {};
      comment.my = result.type || null;
      window.render?.();
    } catch (error) {
      console.error('Community comment reaction failed:', error);
      showError(error.message || 'Comment reaction could not be saved.');
    } finally {
      if (button?.isConnected) button.disabled = false;
    }
    return;
  }
  const type = selectedType || 'like';
  if (!MODERATION_REACTIONS.includes(type)) return;
  if (state.pendingReactions.has(postId)) return;
  state.pendingReactions.add(postId);
  if (button) button.disabled = true;
  try {
    const desiredType = post.my === type ? null : type;
    const result = await apiRequest('/api/toggle-reaction', user, { postId, type: desiredType });
    post.likeCount = Number(result.likeCount);
    post.my = result.type || null;
    window.render?.();
  } catch (error) {
    console.error('Community reaction failed:', error);
    showError(error.message || 'Reaction could not be saved.');
  } finally {
    state.pendingReactions.delete(postId);
    if (button?.isConnected) button.disabled = false;
  }
}

function updateUploadProgress(percent, label) {
  const progress = document.querySelector('#cpUploadProgress');
  if (!progress) return;
  const value = Math.max(0, Math.min(100, Math.round(percent)));
  progress.hidden = false;
  progress.querySelector('[data-upload-label]').textContent = label;
  progress.querySelector('[data-upload-percent]').textContent = `${value}%`;
  const bar = progress.querySelector('[role="progressbar"]');
  bar.style.width = `${value}%`;
  bar.setAttribute('aria-valuenow', String(value));
}

function uploadToCloudinary(url, form, expectedPublicId, onProgress) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) onProgress(Math.round((event.loaded / event.total) * 100));
    });
    request.addEventListener('load', () => {
      let uploaded;
      try {
        uploaded = JSON.parse(request.responseText);
      } catch {
        reject(new Error(`Media upload returned an invalid response (${request.status}).`));
        return;
      }
      if (request.status < 200 || request.status >= 300 || uploaded.public_id !== expectedPublicId) {
        reject(new Error(uploaded.error?.message || 'Media upload could not be completed.'));
        return;
      }
      resolve(uploaded);
    });
    request.addEventListener('error', () => reject(new Error(
      'Media upload failed. Check your internet connection and try again.',
    )));
    request.addEventListener('abort', () => reject(new Error('Media upload was interrupted.')));
    request.send(form);
  });
}

async function uploadMedia(file, user, kind, onProgress) {
  const signed = await apiRequest('/api/sign-upload', user, {
    kind,
    mimeType: file.type,
    size: file.size,
  });
  const form = new FormData();
  form.append('file', file);
  form.append('api_key', signed.apiKey);
  form.append('timestamp', String(signed.timestamp));
  form.append('signature', signed.signature);
  form.append('asset_folder', signed.assetFolder);
  form.append('public_id', signed.publicId);
  form.append('overwrite', 'false');
  form.append('allowed_formats', signed.allowedFormats);
  const uploaded = await uploadToCloudinary(
    `https://api.cloudinary.com/v1_1/${signed.cloudName}/${signed.resourceType}/upload`,
    form,
    signed.publicId,
    onProgress,
  );
  let verified;
  try {
    verified = await apiRequest('/api/verify-media', user, {
      publicId: signed.publicId,
      resourceType: signed.resourceType,
      kind,
    });
  } catch (error) {
    try {
      await apiRequest('/api/delete-media', user, {
        publicId: signed.publicId,
        resourceType: signed.resourceType,
      });
    } catch (cleanupError) {
      console.error('Unverified media cleanup failed:', cleanupError);
      throw new Error(`${error.message} Uploaded media cleanup also failed.`);
    }
    throw error;
  }
  return {
    mediaAssetId: verified.assetId,
    mediaURL: verified.secureUrl,
    mediaPublicId: verified.publicId,
    mediaType: verified.resourceType,
  };
}

async function createPost() {
  const user = requireUser();
  if (!user) return;
  const button = document.querySelector('#cpPost');
  if (!button) return;
  const draft = window.draft || {};
  const text = String(draft.txt || '').trim();
  const selectedFile = state.file;
  const externalMediaURL = draft.vid && draft.vid.p !== 'file'
    ? String(draft.vid.url || '').replace(/^http:/i, 'https:')
    : '';
  const isUploadedVideo = draft.vid?.p === 'file';
  if (draft.aud !== undefined && draft.aud !== 0) {
    showError('Community posts are public. Choose Public to continue.');
    return;
  }
  if (!text && !selectedFile && !externalMediaURL) {
    showError('Write something or add media before posting.');
    return;
  }
  if (isUploadedVideo && !selectedFile) {
    showError('Select the video file again before posting.');
    return;
  }

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = 'Posting...';
  let uploadedMedia;
  try {
    const { doc, getDoc } = await modules();
    const rate = await getDoc(doc(db, 'writeRates', user.uid));
    const lastPostAt = rate.data()?.lastPostAt?.toMillis?.() || 0;
    if (Date.now() - lastPostAt < 10000) {
      throw new Error('Please wait a few seconds before sharing another post.');
    }
    if (selectedFile) {
      const maxBytes = selectedFile.type.startsWith('image/') ? 5 * 1024 * 1024 : 50 * 1024 * 1024;
      const supportedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm'];
      if (!supportedTypes.includes(selectedFile.type) || selectedFile.size > maxBytes) {
        throw new Error('Choose a supported image or video file within the size limit.');
      }
      const kind = selectedFile.type.startsWith('image/') ? 'image' : 'video';
      updateUploadProgress(0, `Uploading ${kind}...`);
      uploadedMedia = await uploadMedia(selectedFile, user, kind, (percent) => {
        updateUploadProgress(percent, `Uploading ${kind}...`);
      });
      updateUploadProgress(100, 'Finishing your post...');
    }
    const {
      collection,
      serverTimestamp,
      writeBatch,
    } = await modules();
    const postRef = doc(collection(db, 'posts'));
    const batch = writeBatch(db);
    const profile = state.profile || {};
    const post = {
      authorUid: user.uid,
      authorName: getDisplayName(user, profile),
      authorPhoto: String(profile.profilePicture || profile.photoURL || user.photoURL || ''),
      text,
      postType: 'post',
      likeCount: 0,
      commentCount: 0,
      createdAt: serverTimestamp(),
    };
    if (uploadedMedia) Object.assign(post, uploadedMedia);
    if (externalMediaURL) post.externalMediaURL = externalMediaURL;
    if (draft.feel) post.feel = String(draft.feel).slice(0, 80);
    if (draft.bg && !uploadedMedia && !externalMediaURL) post.background = String(draft.bg).slice(0, 100);
    batch.set(postRef, post);
    batch.set(doc(db, 'writeRates', user.uid), { lastPostAt: serverTimestamp() }, { merge: true });
    await batch.commit();
    window.draft = { img: null, vid: null, txt: '', feel: '', bg: -1, aud: 0 };
    state.file = null;
    document.querySelector('#ovM')?.classList.remove('on');
    window.tab = 'home';
    window.render?.();
    showError('Post shared.');
  } catch (error) {
    console.error('Community post failed:', error);
    if (uploadedMedia?.mediaPublicId) {
      try {
        await apiRequest('/api/delete-media', user, {
          publicId: uploadedMedia.mediaPublicId,
          resourceType: uploadedMedia.mediaType,
        });
      } catch (cleanupError) {
        console.error('Uploaded media cleanup failed:', cleanupError);
        showError(`${error.message || 'Post could not be shared.'} Uploaded media cleanup also failed.`);
        return;
      }
    }
    showError(error.message || 'Post could not be shared.');
  } finally {
    const progress = document.querySelector('#cpUploadProgress');
    if (progress) progress.hidden = true;
    if (button.isConnected) {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  }
}

async function deletePost(post, button) {
  const user = requireUser();
  if (!user || !post || post.authorUid !== user.uid) return;
  if (button) button.disabled = true;
  try {
    try {
      await apiRequest('/api/delete-post', user, { postId: post.id });
    } catch (error) {
      console.error('Community post deletion failed:', error);
      showError(error.message || 'Post could not be deleted.');
      return;
    }
    if (post.mediaPublicId && ['image', 'video'].includes(post.mediaType)) {
      try {
        await apiRequest('/api/delete-media', user, {
          publicId: post.mediaPublicId,
          resourceType: post.mediaType,
        });
      } catch (error) {
        console.error('Deleted post media cleanup failed:', error);
        showError(`Post deleted, but media cleanup failed: ${error.message}`);
        return;
      }
    }
    showError('Post deleted.');
  } finally {
    if (button?.isConnected) button.disabled = false;
  }
}

function openPostEditor(post) {
  const user = requireUser();
  if (!user || post.authorUid !== user.uid) return;
  const modal = document.querySelector('#modal');
  if (!modal) return;
  modal.innerHTML = '<div class="cphead"><h2>Edit post</h2><button class="x2" data-post-edit-cancel aria-label="Close">✕</button></div>'
    + '<div class="f"><textarea class="in" id="editPostText" rows="5" maxlength="5000" aria-label="Post text"></textarea></div>'
    + '<div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn g" data-post-edit-cancel>Cancel</button><button class="btn" data-post-edit-save>Save</button></div>';
  const textarea = modal.querySelector('#editPostText');
  const saveButton = modal.querySelector('[data-post-edit-save]');
  textarea.value = post.txt || '';
  document.querySelector('#ovM')?.classList.add('on');
  modal.querySelectorAll('[data-post-edit-cancel]').forEach((button) => {
    button.addEventListener('click', () => document.querySelector('#ovM')?.classList.remove('on'));
  });
  saveButton.addEventListener('click', () => void savePostEdit(post, textarea, saveButton));
}

async function savePostEdit(post, textarea, button) {
  const user = requireUser();
  if (!user || post.authorUid !== user.uid) return;
  const text = textarea.value.trim();
  if (!text && !post.img && !post.vid) {
    showError('Write something or keep media attached before saving.');
    return;
  }
  button.disabled = true;
  try {
    const { doc, serverTimestamp, updateDoc } = await modules();
    await updateDoc(doc(db, 'posts', post.id), { text, updatedAt: serverTimestamp() });
    post.txt = text;
    document.querySelector('#ovM')?.classList.remove('on');
    window.render?.();
    showError('Post updated.');
  } catch (error) {
    console.error('Community post edit failed:', error);
    showError(error.message || 'Post could not be updated.');
  } finally {
    if (button.isConnected) button.disabled = false;
  }
}

async function deleteComment(postId, commentId, button) {
  const user = requireUser();
  if (!user) return;
  const post = window.posts.find((item) => item.id === postId);
  const comment = post?.cm.find((item) => item.id === commentId);
  if (!post || !comment || comment.authorUid !== user.uid) {
    showError('You can delete only your own comments.');
    return;
  }
  button.disabled = true;
  try {
    const result = await apiRequest('/api/delete-comment', user, { postId, commentId });
    post.cm = post.cm.filter((item) => item.id !== commentId);
    post.commentCount = Number(result.commentCount);
    window.render?.();
    showError('Comment deleted.');
  } catch (error) {
    console.error('Community comment deletion failed:', error);
    showError(error.message || 'Comment could not be deleted.');
  } finally {
    if (button.isConnected) button.disabled = false;
  }
}

async function loadSuggestedProfiles(user = state.user) {
  const requestId = ++state.suggestionsRequest;
  try {
    const { collection, doc, getDoc, getDocs, limit, query } = await modules();
    const profiles = await getDocs(query(collection(db, 'publicProfiles'), limit(20)));
    const suggestions = profiles.docs
      .map((snapshot) => ({ uid: snapshot.id, ...snapshot.data() }))
      .filter((profile) => profile.uid && profile.uid !== user?.uid)
      .map((profile) => ({
        ...profile,
        name: getDisplayName({ displayName: profile.displayName || profile.name }, profile),
      }));
    if (requestId !== state.suggestionsRequest) return;
    suggestions.forEach((profile) => {
      state.namesByUid.set(profile.uid, profile.name);
      state.profilesByUid.set(profile.uid, profile);
      window.communityNameToUid[profile.name] = profile.uid;
      window.U[profile.name] = {
        ...window.U[profile.name],
        bio: profile.bio || '',
        f: Number(profile.followersCount ?? profile.followers?.length ?? 0),
        g: Number(profile.followingCount ?? profile.following?.length ?? 0),
      };
    });
    window.communitySuggestedProfiles = suggestions.map((profile) => ({
      uid: profile.uid,
      name: profile.name,
      bio: profile.bio || '',
    }));
    if (user) {
      await Promise.all(suggestions.map(async (profile) => {
        const follow = await getDoc(doc(db, 'follows', `${user.uid}_${profile.uid}`));
        window.fol[profile.name] = follow.exists() ||
          (Array.isArray(profile.followers) && profile.followers.includes(user.uid));
      }));
    }
    window.render?.();
  } catch (error) {
    console.error('Community suggested profiles could not be loaded:', error);
    showError('Suggested Community profiles could not be loaded.');
  }
}

async function toggleFollow(button) {
  const user = requireUser();
  if (!user) return;
  const name = button.dataset.fo || '';
  let targetUid = button.dataset.followUid || window.communityNameToUid[name] ||
    [...state.namesByUid.entries()].find(([, displayName]) => displayName === name)?.[0];
  if (!targetUid) {
    await openProfile(name);
    targetUid = window.communityNameToUid[name] ||
      [...state.namesByUid.entries()].find(([, displayName]) => displayName === name)?.[0];
  }
  if (!targetUid || targetUid === user.uid) {
    showError('This Community profile is not available to follow.');
    return;
  }
  if (state.pendingFollows.has(targetUid)) return;
  state.pendingFollows.add(targetUid);
  const targetName = state.namesByUid.get(targetUid) || name;
  const targetProfile = state.profilesByUid.get(targetUid) || {};
  const ownProfile = state.profile;
  const previousFollowing = Boolean(window.fol[targetName] ||
    (Array.isArray(targetProfile.followers) && targetProfile.followers.includes(user.uid)));
  const nextFollowing = !previousFollowing;
  const previousFollowers = [...(targetProfile.followers || [])];
  const previousFollowingList = [...(ownProfile?.following || [])];
  const currentFollowersCount = Number(targetProfile.followersCount ?? previousFollowers.length);
  const currentFollowingCount = Number(ownProfile?.followingCount ?? previousFollowingList.length);
  const updateFollowState = (following, followersCount, followingCount) => {
    const followers = new Set(previousFollowers);
    const followingUsers = new Set(previousFollowingList);
    if (following) {
      followers.add(user.uid);
      followingUsers.add(targetUid);
    } else {
      followers.delete(user.uid);
      followingUsers.delete(targetUid);
    }
    state.profilesByUid.set(targetUid, {
      ...targetProfile,
      followers: [...followers],
      followersCount,
    });
    if (ownProfile) {
      state.profile = {
        ...ownProfile,
        following: [...followingUsers],
        followingCount,
      };
      state.profilesByUid.set(user.uid, state.profile);
    }
    window.communityNameToUid[targetName] = targetUid;
    window.fol[targetName] = following;
    window.U[targetName] = { ...window.U[targetName], f: followersCount };
    window.U[window.me] = { ...window.U[window.me], g: followingCount };
  };
  updateFollowState(
    nextFollowing,
    Math.max(0, currentFollowersCount + (nextFollowing ? 1 : -1)),
    Math.max(0, currentFollowingCount + (nextFollowing ? 1 : -1)),
  );
  window.render?.();
  if (state.reactionModal) renderReactionModal();
  document.querySelectorAll('[data-follow-uid]').forEach((item) => {
    if (item.dataset.followUid === targetUid) item.disabled = true;
  });
  try {
    const result = await apiRequest('/api/toggle-follow', user, {
      followingUid: targetUid,
      following: nextFollowing,
    });
    updateFollowState(
      result.following,
      Number(result.followersCount),
      Number(result.followingCount),
    );
    window.render?.();
    if (state.reactionModal) renderReactionModal();
    showError(result.following ? `Following ${targetName}.` : `Unfollowed ${targetName}.`);
  } catch (error) {
    updateFollowState(previousFollowing, currentFollowersCount, currentFollowingCount);
    console.error('Community follow action failed:', error);
    showError(error.message || 'Follow status could not be updated.');
    window.render?.();
    if (state.reactionModal) renderReactionModal();
  } finally {
    state.pendingFollows.delete(targetUid);
    document.querySelectorAll('[data-follow-uid]').forEach((item) => {
      if (item.dataset.followUid === targetUid) item.disabled = false;
    });
  }
}

async function toggleSavedPost(post, user) {
  try {
    const { deleteDoc, doc, getDoc, serverTimestamp, setDoc } = await modules();
    const savedRef = doc(db, 'savedPosts', `${user.uid}_${post.id}`);
    const savedSnapshot = await getDoc(savedRef);
    if (savedSnapshot.exists()) {
      await deleteDoc(savedRef);
      post.saved = false;
      showError('Post removed from saved items.');
    } else {
      await setDoc(savedRef, {
        ownerUid: user.uid,
        postId: post.id,
        createdAt: serverTimestamp(),
      });
      post.saved = true;
      showError('Post saved.');
    }
    window.render?.();
  } catch (error) {
    console.error('Saving Community post failed:', error);
    showError(error.message || 'Post could not be saved.');
  }
}

async function saveProfile() {
  const user = requireUser();
  if (!user) return;
  const nameInput = document.querySelector('#en');
  const bioInput = document.querySelector('#eb');
  const error = document.querySelector('#merr');
  const uploadStatus = document.querySelector('#profileUploadStatus');
  const name = nameInput?.value.trim() || '';
  const bio = bioInput?.value.trim() || '';
  const location = document.querySelector('#elocation')?.value.trim() || '';
  const learningRole = document.querySelector('#erole')?.value.trim() || '';
  const rawWebsite = document.querySelector('#ewebsite')?.value.trim() || '';
  const skillsText = document.querySelector('#eskills')?.value || '';
  const profilePhotoFile = document.querySelector('#profilePhotoFile')?.files?.[0];
  const profileCoverFile = document.querySelector('#profileCoverFile')?.files?.[0];
  if (name.length < 2 || name.length > 120) {
    if (error) error.textContent = 'Name must be between 2 and 120 characters.';
    return;
  }
  if (bio.length > 500) {
    if (error) error.textContent = 'Bio must be 500 characters or fewer.';
    return;
  }
  if (location.length > 120 || learningRole.length > 120) {
    if (error) error.textContent = 'Location and learning focus must be 120 characters or fewer.';
    return;
  }
  let website = '';
  if (rawWebsite) {
    try {
      const parsedWebsite = new URL(
        /^https?:\/\//i.test(rawWebsite) ? rawWebsite : `https://${rawWebsite}`,
      );
      if (!['http:', 'https:'].includes(parsedWebsite.protocol)) throw new Error();
      website = parsedWebsite.href;
    } catch {
      if (error) error.textContent = 'Enter a valid website address.';
      return;
    }
  }
  const skills = [...new Set(skillsText.split(',').map((skill) => skill.trim()).filter(Boolean))];
  if (skills.length > 30 || skills.some((skill) => skill.length > 50)) {
    if (error) error.textContent = 'Add up to 30 skills, with no more than 50 characters each.';
    return;
  }
  const saveButton = document.querySelector('#es');
  if (saveButton) saveButton.disabled = true;
  try {
    let profilePicture = String(state.profile?.profilePicture || state.profile?.photoURL || user.photoURL || '');
    let coverPhoto = String(state.profile?.coverPhoto || state.profile?.coverURL || '');
    const uploadProfileImage = async (file, label) => {
      if (!file) return '';
      if (uploadStatus) uploadStatus.textContent = `Preparing ${label.toLowerCase()}…`;
      const prepared = await prepareCloudinaryImage(file);
      const result = await uploadCloudinaryImage(prepared.file, {
        onProgress(percent) {
          if (uploadStatus) uploadStatus.textContent = `Uploading ${label.toLowerCase()}… ${percent}%`;
        },
      });
      return result.secureUrl;
    };
    if (profilePhotoFile) profilePicture = await uploadProfileImage(profilePhotoFile, 'Profile picture');
    if (profileCoverFile) coverPhoto = await uploadProfileImage(profileCoverFile, 'Cover photo');
    if (uploadStatus) uploadStatus.textContent = 'Saving your profile…';

    const {
      doc,
      getDoc,
      serverTimestamp,
      writeBatch,
    } = await modules();
    const userRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userRef);
    const privateUpdate = {
      uid: user.uid,
      name,
      bio,
      photoURL: profilePicture,
      profilePicture,
      coverPhoto,
      coverURL: coverPhoto,
      location,
      website,
      learningRole,
      skills,
      updatedAt: serverTimestamp(),
    };
    if (!userSnapshot.exists()) {
      privateUpdate.email = user.email || null;
      privateUpdate.role = user.email?.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';
      privateUpdate.createdAt = serverTimestamp();
    }
    const publicUpdate = {
      uid: user.uid,
      name,
      displayName: name,
      photoURL: profilePicture,
      profilePicture,
      coverPhoto,
      coverURL: coverPhoto,
      username: String(state.profile?.username || ''),
      searchName: name.toLowerCase(),
      bio,
      location,
      website,
      learningRole,
      skills,
      updatedAt: serverTimestamp(),
    };
    const directoryUpdate = {
      uid: user.uid,
      displayName: name,
      photoURL: publicUpdate.profilePicture,
      username: publicUpdate.username,
      searchName: name.toLowerCase(),
      online: true,
      lastSeen: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    const { updateProfile } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
    );
    await updateProfile(user, { displayName: name, photoURL: profilePicture || null });
    const batch = writeBatch(db);
    batch.set(userRef, privateUpdate, { merge: true });
    batch.set(doc(db, 'publicProfiles', user.uid), publicUpdate, { merge: true });
    batch.set(doc(db, 'publicDirectory', user.uid), directoryUpdate, { merge: true });
    await batch.commit();
    updateLocalProfile({ ...state.profile, ...publicUpdate, bio });
    document.querySelector('#ovM')?.classList.remove('on');
    document.querySelector('#modal')?.classList.remove('profile-edit-dialog');
    window.render?.();
    showError('Profile updated.');
  } catch (saveError) {
    console.error('Community profile update failed:', saveError);
    if (error) error.textContent = saveError.message || 'Profile could not be saved.';
  } finally {
    if (saveButton) saveButton.disabled = false;
  }
}

async function openProfile(name) {
  if (name === window.me && state.profile) return state.profile;
  let uid = window.communityNameToUid[name] ||
    [...state.namesByUid.entries()].find(([, displayName]) => displayName === name)?.[0];
  try {
    const { collection, doc, getDoc, limit, query, where, getDocs } = await modules();
    let profile = uid ? state.profilesByUid.get(uid) : null;
    if (!profile && uid) {
      const snapshot = await getDoc(doc(db, 'publicProfiles', uid));
      if (snapshot.exists()) profile = snapshot.data();
    }
    if (!profile) {
      const matches = await getDocs(query(
        collection(db, 'publicProfiles'),
        where('displayName', '==', name),
        limit(1),
      ));
      if (!matches.empty) {
        profile = matches.docs[0].data();
        uid = matches.docs[0].id;
      }
    }
    if (profile) {
      const displayName = getDisplayName({ displayName: name }, profile);
      uid = uid || profile.uid;
      if (uid) {
        profile = { ...profile, uid };
        state.namesByUid.set(uid, displayName);
        state.profilesByUid.set(uid, profile);
        window.communityNameToUid[displayName] = uid;
      }
      window.U[displayName] = {
        bio: profile.bio || '',
        f: Number(profile.followersCount ?? profile.followers?.length ?? 0),
        g: Number(profile.followingCount ?? profile.following?.length ?? 0),
      };
      if (state.user && uid && uid !== state.user.uid) {
        const follow = await getDoc(doc(db, 'follows', `${state.user.uid}_${uid}`));
        window.fol[displayName] = follow.exists() ||
          (Array.isArray(profile.followers) && profile.followers.includes(state.user.uid));
      }
      return profile;
    }
    return null;
  } catch (error) {
    console.error('Community profile could not be loaded:', error);
    showError('Profile details could not be loaded.');
    return null;
  }
}

window.communityGetProfile = (name) => {
  if (name === window.me) return state.profile;
  const uid = window.communityNameToUid[name] ||
    [...state.namesByUid.entries()].find(([, displayName]) => displayName === name)?.[0];
  return uid ? state.profilesByUid.get(uid) || null : null;
};
window.communityLoadProfile = openProfile;

async function initializeCommunityMessenger() {
  communityMessenger = await createCommunityMessengerAdapter(app, {
    async loadPeople() {
      const { collection, getDocs, limit, query } = await modules();
      const snapshots = await getDocs(query(collection(db, 'publicProfiles'), limit(50)));
      return snapshots.docs.map((snapshot) => {
        const person = snapshot.data();
        return {
          ...person,
          uid: snapshot.id,
          displayName: getDisplayName({ displayName: person.displayName || person.name }, person),
        };
      });
    },
    resolvePerson: openProfile,
    onError(error) {
      console.error('Community messenger request failed:', error);
      showError('Messenger could not connect. Please try again.');
    },
  });
  if (typeof window.mountCommunityMessenger !== 'function') {
    throw new Error('Messenger UI is unavailable.');
  }
  window.mountCommunityMessenger({
    adapter: communityMessenger,
    notify: showError,
    onViewProfile(name) {
      window.pu = name;
      window.tab = 'profile';
      window.ptab = 'posts';
      window.render?.();
    },
  });
  await communityMessenger.setUser(state.user, state.profile);
}

function interceptClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const youtubePreview = target.closest('[data-play][data-pp="yt"]');
  if (youtubePreview) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void playCommunityYoutubeVideo(youtubePreview, youtubePreview.dataset.url || '');
    return;
  }

  if (target.closest('[data-cp]')) {
    if (!requireUser()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    return;
  }
  if (target.closest('#tProf')) {
    if (!requireUser()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    return;
  }
  const messengerButton = target.closest('#cwmOpen');
  const messageButton = target.closest('[data-msg]');
  if (messengerButton || messageButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!requireUser()) return;
    if (!window.CWMessenger || !window.communityMessengerReady) {
      showError('Messenger is loading. Please try again.');
      return;
    }
    if (messengerButton) window.CWMessenger.open();
    else window.CWMessenger.openChat(messageButton.getAttribute('data-msg'));
    return;
  }
  const followButton = target.closest('[data-fo]');
  if (followButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void toggleFollow(followButton);
    return;
  }
  if (target.closest('#cpPost')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void createPost();
    return;
  }
  if (target.closest('#es')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void saveProfile();
    return;
  }
  const reaction = target.closest('[data-rs]');
  if (reaction) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const [ref, type] = reaction.dataset.rs.split('|');
    void toggleReaction(ref, type, reaction);
    return;
  }
  const reactionToggle = target.closest('[data-rx]');
  if (reactionToggle) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const post = window.posts.find((item) => `p:${item.id}` === reactionToggle.dataset.rx);
    void toggleReaction(reactionToggle.dataset.rx, post?.my || 'like', reactionToggle);
    return;
  }
  const reactionListButton = target.closest('[data-rm]');
  if (reactionListButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void showReactions(reactionListButton.dataset.rm, reactionListButton);
    return;
  }
  const reactionTab = target.closest('[data-community-rt]');
  if (reactionTab && state.reactionModal) {
    event.preventDefault();
    event.stopImmediatePropagation();
    state.reactionModal.type = reactionTab.dataset.communityRt;
    renderReactionModal();
    return;
  }
  if (target.closest('[data-community-rm-close]')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    state.reactionModal = null;
    document.querySelector('#ovM')?.classList.remove('on');
    return;
  }
  const commentDelete = target.closest('[data-dl]');
  if (commentDelete) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const [scope, postId, parentCommentId, replyId] = commentDelete.dataset.dl.split(':');
    const commentId = scope === 'r' ? replyId : parentCommentId;
    if (!['c', 'r'].includes(scope) || !postId || !commentId) {
      showError('This comment could not be deleted.');
      return;
    }
    void deleteComment(postId, commentId, commentDelete);
    return;
  }
  const replyButton = target.closest('[data-rp]');
  if (replyButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const [scope, postId, commentId] = replyButton.dataset.rp.split(':');
    const post = window.posts.find((item) => item.id === postId);
    const comment = post?.cm.find((item) => item.id === commentId);
    if (scope !== 'c' || !comment) {
      showError('Replies can be added to a comment, not another reply.');
      return;
    }
    comment.rf = !comment.rf;
    comment.rfp = '';
    post.open = true;
    window.render?.();
    document.querySelector(`[data-rf="c:${CSS.escape(postId)}:${CSS.escape(commentId)}"] input`)?.focus();
    return;
  }
  if (target.closest('[data-ed],[data-ec]')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    showError('Comment editing is not available yet.');
    return;
  }
  const commentToggle = target.closest('[data-tc]');
  if (commentToggle) {
    const post = window.posts.find((item) => item.id === commentToggle.dataset.tc);
    if (!post) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    post.open = !post.open;
    window.render?.();
    if (post.open && !post._commentsLoaded && !post._commentsLoading) {
      post._commentsLoading = true;
      void loadComments(post).catch((error) => {
        post._commentsLoading = false;
        console.error('Community comments could not be loaded:', error);
        showError('Comments could not be loaded.');
      });
    }
    return;
  }
  const menuAction = target.closest('[data-mn]');
  if (menuAction) {
    const [action, postId] = menuAction.dataset.mn.split(':');
    const post = window.posts.find((item) => item.id === postId);
    if (action === 'del' && post) {
      event.preventDefault();
      event.stopImmediatePropagation();
      void deletePost(post, menuAction);
      return;
    }
    if (action === 'edit' && post) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openPostEditor(post);
      return;
    }
    if (action === 'copy' && post) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!navigator.clipboard?.writeText) {
        showError('Clipboard access is unavailable in this browser.');
        return;
      }
      void navigator.clipboard.writeText(`${location.origin}/community/#post=${encodeURIComponent(post.id)}`)
        .then(() => showError('Post link copied.'))
        .catch((error) => {
          console.error('Post link copy failed:', error);
          showError('Post link could not be copied.');
        });
      return;
    }
    if (action === 'save') {
      event.preventDefault();
      event.stopImmediatePropagation();
      const user = requireUser();
      if (user && post) void toggleSavedPost(post, user);
      return;
    }
    if (action === 'hide' && post) {
      event.preventDefault();
      event.stopImmediatePropagation();
      state.hiddenPosts.add(post.id);
      window.posts = window.posts.filter((item) => item.id !== post.id);
      window.render?.();
      showError('Post hidden for this session.');
      return;
    }
  }
  const profileLink = target.closest('[data-u]');
  if (profileLink) {
    const name = profileLink.dataset.u;
    event.preventDefault();
    event.stopImmediatePropagation();
    void openProfile(name).finally(() => {
      document.querySelector('#ovM')?.classList.remove('on');
      document.querySelector('#ovS')?.classList.remove('on');
      window.pu = name;
      window.tab = 'profile';
      window.ptab = 'posts';
      window.render?.();
    });
    return;
  }
  const audience = target.closest('[data-cpa="aud"]');
  if (audience) {
    event.preventDefault();
    event.stopImmediatePropagation();
    showError('Community posts are public.');
    return;
  }
  if (target.closest('[data-cpa="rm"]')) state.file = null;
  if (target.closest('[data-cpa="linkok"]')) state.file = null;
  if (target.closest('[data-new="story"],[data-new="reel"]')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    showError('Stories and reels are not connected yet.');
  }
}

function interceptSubmit(event) {
  const form = event.target instanceof HTMLFormElement ? event.target : null;
  if (!form) return;
  if (form.matches('[data-nc],[data-cf],[data-rf]')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    void submitComment(form);
    return;
  }
  if (form.hasAttribute('data-sf') || form.hasAttribute('data-ce')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    showError('Comment editing is not available yet.');
  }
}

function interceptChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.id === 'cpimg' || target.id === 'cpvid') {
    state.file = target.files?.[0] || null;
  }
}

resetPreviewData();
const renderCommunity = window.render;
window.render = () => {
  renderCommunity?.();
  observeCommunityMedia();
  if (window.tab === 'home') {
    document.querySelectorAll('#main article.post').forEach((article, index) => {
      const post = window.posts[index];
      if (post) article.id = `post-${post.id}`;
    });
  }
  const targetId = new URLSearchParams(location.hash.slice(1)).get('post');
  if (targetId) {
    requestAnimationFrame(() => document.getElementById(`post-${targetId}`)?.scrollIntoView());
  }
};
window.total = (item) => Number(item.likeCount ?? item.likes ?? 0);
window.ccount = (post) => post._commentsLoaded
  ? post.cm.reduce((count, comment) => count + 1 + (comment.rep?.length || 0), 0)
  : Number(post.commentCount || 0);
document.addEventListener('click', interceptClick, true);
document.addEventListener('submit', interceptSubmit, true);
document.addEventListener('change', interceptChange, true);
document.addEventListener('input', (event) => {
  if (event.target?.id === 'cptxt' && window.draft) {
    window.draft.txt = event.target.value;
    const button = document.querySelector('#cpPost');
    if (button) button.disabled = !(window.draft.txt.trim() || window.draft.img || window.draft.vid);
  }
}, true);

if (!isFirebaseConfigured) {
  showError('Community requires the site Firebase configuration.');
  document.querySelector('#main')?.style.setProperty('visibility', 'visible');
} else {
  subscribeToFeed();
  void initializeCommunityMessenger().catch((error) => {
    console.error('Community messenger could not be initialized:', error);
    showError('Messenger could not be loaded. Please reload the Community page.');
  });
  observeAuthState((user) => {
    state.user = user;
    if (communityMessenger) {
      void communityMessenger.setUser(user, state.profile).catch((error) => {
        console.error('Community messenger authentication failed:', error);
        showError('Messenger could not connect to your account.');
      });
    }
    if (!user) {
      const previousName = window.me;
      state.profile = null;
      state.namesByUid.clear();
      state.profilesByUid.clear();
      window.communityUid = null;
      window.communityProfile = null;
      window.communityNameToUid = {};
      window.fol = {};
      if (previousName !== 'You' && typeof window.rename === 'function') {
        window.rename(previousName, 'You');
      }
      window.me = 'You';
      window.posts.forEach((post) => {
        post.my = null;
        post.saved = false;
        post.by = post.authorName;
      });
      void loadSuggestedProfiles(null);
      window.render?.();
      return;
    }
    window.communityUid = user.uid;
    void ensurePublicProfile(user).then(() => {
      void loadMyReactions(window.posts, user);
      void loadSuggestedProfiles(user);
      window.render?.();
    }).catch((error) => {
      console.error('Community profile initialization failed:', error);
      showError('Your Community profile could not be loaded.');
    });
  });
}

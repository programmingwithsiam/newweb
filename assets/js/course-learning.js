import { fetchAllCourses, saveUserCourseProgress, createPaymentSubmission, uploadPaymentScreenshot, updatePaymentScreenshot, fetchUserPayments, extractYoutubeId, isMp4VideoUrl } from './courses-db.js';
import { observeAuthState, signInWithGoogle } from './auth.js';

const progressKey = 'siam_portfolio_course_progress';
const params = new URLSearchParams(location.search);
const prettyCoursePath = location.pathname.match(/^\/courses\/([^/]+)(?:\/lectures\/([^/]+))?\/?$/);
const courseId = params.get('course') || (prettyCoursePath ? decodeURIComponent(prettyCoursePath[1]) : null);
const startsEnrollment = params.get('enroll') === '1';
let user = null;
let course = null;
let lessons = [];
let selectedLessonId = params.get('lesson') || (prettyCoursePath?.[2] ? decodeURIComponent(prettyCoursePath[2]) : null);
let progress = {};
let youtubePlayer = null;
let youtubeApiPromise = null;
const workspaceSettingsKey = 'codewithsiam_workspace_settings';
const workspaceSettings = (() => {
  try { return { showSidebar: true, autoplay: false, autocomplete: true, ...JSON.parse(localStorage.getItem(workspaceSettingsKey) || '{}') }; } catch { return { showSidebar: true, autoplay: false, autocomplete: true }; }
})();

const $ = id => document.getElementById(id);
function withTimeout(promise, milliseconds = 15000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = window.setTimeout(() => reject(new Error('Course data is taking too long to load. Check your connection and Firestore rules, then try again.')), milliseconds);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timer));
}
function togglePlayerFullscreen(target) {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    return exit?.call(document);
  }
  const enter = target?.requestFullscreen || target?.webkitRequestFullscreen;
  return enter?.call(target);
}
function setupPlayerAutoHide(wrap, controls, isPlaying) {
  if (!wrap || !controls || wrap.dataset.autoHideReady) return;
  wrap.dataset.autoHideReady = 'true';
  let timer = 0;
  const show = () => {
    controls.classList.remove('is-auto-hidden');
    window.clearTimeout(timer);
    if (isPlaying()) timer = window.setTimeout(() => controls.classList.add('is-auto-hidden'), 2000);
  };
  const interact = event => { if (!event.target.closest('button, input, select, a')) show(); };
  wrap.addEventListener('pointermove', show, { passive: true });
  wrap.addEventListener('pointerdown', interact);
  wrap.addEventListener('touchstart', interact, { passive: true });
  controls.addEventListener('pointerdown', event => { event.stopPropagation(); show(); });
  controls.addEventListener('click', event => { event.stopPropagation(); show(); });
  wrap.showPlayerControls = show;
  show();
}
const getLocalProgress = () => { try { return JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch { return {}; } };
const completed = () => new Set(progress[course?.id]?.completedLessons || []);
const percent = () => {
  const total = Number(course?.totalLessonCount || lessons.length || 0);
  return total ? Math.round((completed().size / total) * 100) : 0;
};
const route = lessonId => lessonId
  ? `course.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(lessonId)}&autoplay=1`
  : `course.html?course=${encodeURIComponent(course.id)}`;
function go(lessonId = '') {
  const lesson = lessons.find(item => item.id === lessonId);
  if (lessonId && lesson && !hasLessonAccess(lesson)) {
    history.pushState({}, '', route(lessonId));
    selectedLessonId = lessonId;
    renderLockedLesson(lesson);
    return;
  }
  history.pushState({}, '', route(lessonId));
  selectedLessonId = lessonId || null;
  render();
  if (lessonId) window.setTimeout(() => $('lessonVideo')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
}
function orderedLessons(data) {
  const modules = Array.isArray(data?.modules) ? data.modules : [];
  const visibleById = new Map((data?.lessons || []).map(lesson => [lesson.id, lesson]));
  const ordered = [];

  modules.forEach(module => {
    const catalog = Array.isArray(module.lessonCatalog) && module.lessonCatalog.length
      ? module.lessonCatalog
      : (Array.isArray(module.lessons) ? module.lessons : []);

    catalog.forEach(lesson => {
      const visibleLesson = visibleById.get(lesson.id) || {};
      ordered.push({
        ...visibleLesson,
        ...lesson,
        id: lesson.id || visibleLesson.id,
        title: lesson.title || visibleLesson.title,
        duration: lesson.duration || visibleLesson.duration || '0 min',
        moduleId: module.id,
        moduleTitle: module.title,
        isFreePreview: Boolean(lesson.isFreePreview || lesson.freePreview || visibleLesson.isFreePreview || visibleLesson.freePreview),
        freePreview: Boolean(lesson.isFreePreview || lesson.freePreview || visibleLesson.isFreePreview || visibleLesson.freePreview)
      });
    });
  });

  if (!ordered.length && Array.isArray(data?.lessons)) return [...data.lessons];
  return ordered;
}
function currentLesson() { return lessons.find(lesson => lesson.id === selectedLessonId) || lessons[0] || null; }
function isFreePreviewLesson(lesson) { return lesson?.isFreePreview === true || lesson?.freePreview === true; }
function hasCourseAccess() { return Boolean(user && (course?.accessStatus === 'approved' || course?.accessStatus === 'admin')); }
function hasLessonAccess(lesson) { return isFreePreviewLesson(lesson) || hasCourseAccess(); }
function youtubeId(lesson) {
  return extractYoutubeId(lesson?.youtubeVideoId)
    || extractYoutubeId(lesson?.youtubeUrl)
    || extractYoutubeId(lesson?.videoUrl)
    || '';
}
function renderPaymentQrPanel(panelId, payment = {}, selectedMethod = 'bkash') {
  const panel = $(panelId);
  if (!panel) return;
  panel.replaceChildren();
  const source = payment[`${selectedMethod}Qr`];
  const usableSource = source && !/^https:\/\/cdn\.simpleicons\.org\//i.test(String(source)) ? source : '';
  if (!usableSource) return;
  const image = document.createElement('img');
  image.src = usableSource;
  image.alt = `${selectedMethod} payment QR code`;
  image.loading = 'lazy';
  image.addEventListener('error', () => panel.replaceChildren(), { once: true });
  panel.appendChild(image);
}
function selectPaymentMethod(method) {
  $('paymentMethod').value = method;
  document.querySelectorAll('.payment-method-choice').forEach(button => button.classList.toggle('active', button.dataset.paymentMethod === method));
  document.querySelectorAll('.payment-method-details').forEach(details => details.classList.toggle('hidden', details.id !== `paymentDetails-${method}`));
  renderPaymentQrPanel('accessPaymentQrPanel', course?.payment, method);
}
function setCheckoutStep(step) {
  document.querySelectorAll('.checkout-progress [data-step]').forEach(item => {
    const isActive = Number(item.dataset.step) <= step;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-current', Number(item.dataset.step) === step ? 'step' : 'false');
  });
}
function renderAccessPayment() {
  if (!course) return;
  const bkash = course.payment?.bkash || '01644171751';
  const rocket = course.payment?.rocket || '01644171751';
  const bank = course.payment?.bank || 'Contact for bank details';
  const discount = Number(course.discountPrice);
  const amount = discount > 0 && discount < Number(course.price) ? discount : Number(course.price) || 0;
  $('accessIntroTitle').textContent = course.title;
  $('accessIntroPrice').textContent = amount > 0 ? `৳${amount.toLocaleString('en-BD')}` : 'Free';
  $('accessCourseTitle').textContent = course.title;
  $('accessPaymentPrice').textContent = amount > 0 ? `৳${amount.toLocaleString('en-BD')}` : 'Free enrollment';
  $('accessPaymentBkash').textContent = bkash;
  $('accessPaymentRocket').textContent = rocket;
  $('accessPaymentBank').textContent = bank;
  selectPaymentMethod($('paymentMethod')?.value || 'bkash');
}
function showAccessGate({ signedIn = false, startEnrollment = false } = {}) {
  $('learningLoading').classList.add('hidden');
  $('courseOverview').classList.add('hidden');
  $('lessonPlayer').classList.add('hidden');
  if (course) {
    $('accessIntroTitle').textContent = course.title || 'Course';
    const price = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price) || 0;
    $('accessIntroPrice').textContent = price > 0 ? `৳${price.toLocaleString('en-BD')}` : 'Free';
  }
  $('learningGateTitle').textContent = signedIn ? 'Video access required' : 'Sign in to start learning';
  $('learningGateText').textContent = signedIn
    ? `Signed in as ${user?.email || 'your Google account'}. Admin approval is required for this course.`
    : 'Sign in with Google to access the lesson playlist and videos.';
  $('learningGoogleBtn').classList.toggle('hidden', signedIn);
  $('refreshAccessBtn')?.classList.toggle('hidden', !signedIn);
  $('accessIntro').classList.toggle('hidden', signedIn || startEnrollment);
  $('accessContinueBtn').classList.toggle('hidden', signedIn);
  $('learningGateTitle').classList.remove('hidden');
  $('learningGateText').classList.remove('hidden');
  $('learningLogin').querySelector('.access-payment-panel').classList.add('hidden');
  $('payment-submit-panel')?.classList.add('hidden');
  setCheckoutStep(1);
  $('learningLogin').classList.remove('hidden');
}
function setupCustomVideoPlayer(enabled = true) {
  const wrap = $('lessonMp4').closest('.lesson-video-wrap');
  const video = $('lessonMp4');
  if (!wrap || !video) return;
  if (!enabled) {
    wrap.querySelector('.custom-video-controls')?.remove();
    wrap.classList.remove('is-custom-player');
    video.setAttribute('controls', '');
    return;
  }
  if (wrap.querySelector('.custom-video-controls')) return;
  wrap.classList.add('is-custom-player');
  video.removeAttribute('controls');
  const controls = document.createElement('div');
  controls.className = 'custom-video-controls';
  controls.innerHTML = '<input class="custom-video-progress" type="range" min="0" max="100" value="0" aria-label="Video progress"><div class="custom-video-toolbar"><button type="button" data-video-action="play" aria-label="Play or pause"><i class="fa-solid fa-play"></i></button><button type="button" data-video-action="seek-back" aria-label="Rewind 10 seconds"><i class="fa-solid fa-rotate-left"></i><small>10</small></button><button type="button" data-video-action="seek-forward" aria-label="Forward 10 seconds"><i class="fa-solid fa-rotate-right"></i><small>10</small></button><button type="button" data-video-action="mute" aria-label="Mute or unmute"><i class="fa-solid fa-volume-high"></i></button><select data-video-speed aria-label="Playback speed"><option value="0.5">0.5x</option><option value="1" selected>1x</option><option value="1.25">1.25x</option><option value="1.5">1.5x</option><option value="2">2x</option><option value="4">4x</option></select><button type="button" class="video-caption-button" data-video-captions aria-label="Toggle subtitles" disabled>CC</button><span class="custom-video-time">0:00 / 0:00</span><button type="button" data-video-action="fullscreen" aria-label="Fullscreen"><i class="fa-solid fa-expand"></i></button></div>';
  wrap.appendChild(controls);
  const progressInput = controls.querySelector('.custom-video-progress');
  const playButton = controls.querySelector('[data-video-action="play"]');
  const playIcon = playButton.querySelector('i');
  const muteButton = controls.querySelector('[data-video-action="mute"]');
  const muteIcon = muteButton.querySelector('i');
  const timeLabel = controls.querySelector('.custom-video-time');
  const speedSelect = controls.querySelector('[data-video-speed]');
  const formatTime = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  const updateTime = () => {
    progressInput.value = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration || 0)}`;
  };
  playButton.addEventListener('click', () => video.paused ? video.play() : video.pause());
  controls.querySelector('[data-video-action="seek-back"]')?.addEventListener('click', () => { video.currentTime = Math.max(0, video.currentTime - 10); });
  controls.querySelector('[data-video-action="seek-forward"]')?.addEventListener('click', () => { video.currentTime = Math.min(video.duration || video.currentTime + 10, video.currentTime + 10); });
  muteButton.addEventListener('click', () => { video.muted = !video.muted; muteIcon.className = video.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'; });
  controls.querySelector('[data-video-action="fullscreen"]').addEventListener('click', () => wrap.requestFullscreen?.());
  progressInput.addEventListener('input', () => { if (video.duration) video.currentTime = (progressInput.value / 100) * video.duration; });
  speedSelect?.addEventListener('change', () => { video.playbackRate = Number(speedSelect.value); });
  video.addEventListener('play', () => { playIcon.className = 'fa-solid fa-pause'; });
  video.addEventListener('pause', () => { playIcon.className = 'fa-solid fa-play'; });
  video.addEventListener('timeupdate', updateTime);
  video.addEventListener('loadedmetadata', updateTime);
  video.addEventListener('loadedmetadata', () => {
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
  });
  setupPlayerAutoHide(wrap, controls, () => !video.paused && !video.ended);
}
function loadYoutubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;
  youtubeApiPromise = new Promise(resolve => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve(window.YT);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
  return youtubeApiPromise;
}
function setupYoutubePlayer(videoId, youtubeUrl, autoplay = false) {
  ensureLessonVideoFrame();
  const wrap = $('lessonVideo')?.closest('.lesson-video-wrap');
  const controls = wrap?.querySelector('.youtube-video-controls');
  const brand = wrap?.querySelector('.youtube-video-brand');
  const progressInput = controls?.querySelector('.youtube-video-progress');
  const playButton = controls?.querySelector('[data-youtube-action="play"] i');
  const muteButton = controls?.querySelector('[data-youtube-action="mute"] i');
  const currentTimeLabel = controls?.querySelector('.youtube-video-current-time');
  const totalTimeLabel = controls?.querySelector('.youtube-video-total-time');
  const speedSelect = controls?.querySelector('[data-video-speed]');
  const qualitySelect = controls?.querySelector('[data-video-quality]');
  const captionsButton = controls?.querySelector('[data-video-captions]');
  const externalButton = controls?.querySelector('#youtubeExternalButton');
  if (!wrap || !controls || !brand || !progressInput || !currentTimeLabel || !totalTimeLabel) return;
  if (captionsButton) {
    captionsButton.disabled = false;
    captionsButton.dataset.enabled = 'false';
    captionsButton.setAttribute('aria-pressed', 'false');
  }

  youtubePlayer?.destroy?.();
  youtubePlayer = null;
  const frame = ensureLessonVideoFrame();
  if (frame) {
    frame.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&origin=${encodeURIComponent(location.origin)}&autoplay=${autoplay ? 1 : 0}`;
  }
  wrap.classList.add('is-youtube-player');
  controls.hidden = false;
  brand.hidden = false;
  if (externalButton) externalButton.href = youtubeUrl;
  const formatTime = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  const updateTime = () => {
    const duration = youtubePlayer?.getDuration?.() || 0;
    const current = youtubePlayer?.getCurrentTime?.() || 0;
    progressInput.value = duration ? (current / duration) * 100 : 0;
    currentTimeLabel.textContent = formatTime(current);
    totalTimeLabel.textContent = formatTime(duration);
  };
  const updateIcons = () => {
    if (playButton) playButton.className = youtubePlayer?.getPlayerState?.() === 1 ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    if (muteButton) muteButton.className = youtubePlayer?.isMuted?.() ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  };
  controls.querySelector('[data-youtube-action="play"]').onclick = () => {
    if (youtubePlayer?.getPlayerState?.() === 1) youtubePlayer.pauseVideo();
    else {
      youtubePlayer?.unMute?.();
      youtubePlayer?.setVolume?.(100);
      youtubePlayer?.playVideo?.();
    }
  };
  controls.querySelector('[data-youtube-action="seek-back"]')?.addEventListener('click', () => youtubePlayer?.seekTo?.(Math.max(0, (youtubePlayer.getCurrentTime?.() || 0) - 10), true));
  controls.querySelector('[data-youtube-action="seek-forward"]')?.addEventListener('click', () => youtubePlayer?.seekTo?.(Math.min(youtubePlayer.getDuration?.() || Infinity, (youtubePlayer.getCurrentTime?.() || 0) + 10), true));
  controls.querySelector('[data-youtube-action="mute"]').onclick = () => {
    if (youtubePlayer?.isMuted?.()) youtubePlayer.unMute();
    else youtubePlayer?.mute();
    updateIcons();
  };
  controls.querySelector('[data-youtube-action="fullscreen"]').onclick = () => togglePlayerFullscreen(wrap);
  controls.querySelector('[data-youtube-action="settings"]')?.addEventListener('click', () => $('workspaceSettingsButton')?.click());
  controls.querySelector('[data-youtube-action="pip"]')?.addEventListener('click', async () => {
    const video = $('lessonMp4');
    const frame = $('lessonVideo');
    if (video && !video.classList.contains('hidden') && document.pictureInPictureEnabled && video.requestPictureInPicture) {
      if (document.pictureInPictureElement) await document.exitPictureInPicture?.().catch(() => {});
      else await video.requestPictureInPicture().catch(() => {});
      return;
    }
    if (frame?.requestPictureInPicture && document.pictureInPictureEnabled) {
      await frame.requestPictureInPicture().catch(() => {});
      return;
    }
    await togglePlayerFullscreen(wrap);
  });
  speedSelect?.addEventListener('change', () => youtubePlayer?.setPlaybackRate?.(Number(speedSelect.value)));
  qualitySelect?.addEventListener('change', () => youtubePlayer?.setPlaybackQuality?.(qualitySelect.value));
  if (captionsButton) captionsButton.onclick = () => {
    if (!youtubePlayer?.setOption || captionsButton.disabled) return;
    const enabled = captionsButton.dataset.enabled !== 'true';
    const languageCode = captionsButton.dataset.captionLanguage || undefined;
    if (enabled) youtubePlayer.loadModule?.('captions');
    youtubePlayer.setOption('captions', 'track', enabled ? { languageCode } : null);
    captionsButton.dataset.enabled = String(enabled);
    captionsButton.classList.toggle('is-active', enabled);
    captionsButton.setAttribute('aria-pressed', String(enabled));
  };
  progressInput.oninput = () => {
    const duration = youtubePlayer?.getDuration?.() || 0;
    if (duration) youtubePlayer.seekTo((Number(progressInput.value) / 100) * duration, true);
  };

  loadYoutubeApi().then(YT => {
    if (!YT?.Player || !document.body.contains(wrap)) return;
    youtubePlayer = new YT.Player('lessonVideo', {
      videoId,
      events: {
        onReady: () => {
          youtubePlayer.loadVideoById(videoId);
          updateTime();
          updateIcons();
          if (autoplay) {
            youtubePlayer.unMute();
            youtubePlayer.setVolume(100);
            youtubePlayer.playVideo();
          }
        },
        onStateChange: event => {
          updateTime();
          updateIcons();
          setupPlayerAutoHide(wrap, controls, () => event.data === 1);
          wrap.showPlayerControls?.();
        }
      },
      playerVars: { controls: 0, rel: 0, playsinline: 1, modestbranding: 1, iv_load_policy: 3, fs: 0, cc_load_policy: 0 }
    });
    youtubePlayer.addEventListener('onApiChange', () => {
      const tracks = youtubePlayer.getOption?.('captions', 'tracklist') || [];
      if (captionsButton) {
        captionsButton.disabled = false;
        captionsButton.setAttribute('aria-disabled', String(tracks.length === 0));
        captionsButton.dataset.captionLanguage = tracks[0]?.languageCode || '';
      }
      if (qualitySelect) qualitySelect.innerHTML = '<option value="auto">Auto</option>' + (youtubePlayer.getAvailableQualityLevels?.() || []).map(level => `<option value="${level}">${level.toUpperCase()}</option>`).join('');
    });
    const timer = setInterval(() => {
      if (!youtubePlayer || !document.body.contains(wrap)) { clearInterval(timer); return; }
      updateTime();
    }, 500);
    setupPlayerAutoHide(wrap, controls, () => youtubePlayer?.getPlayerState?.() === 1);
  });
}
function resetYoutubeControls() {
  youtubePlayer?.destroy?.();
  youtubePlayer = null;
  ensureLessonVideoFrame();
  const wrap = $('lessonVideo').closest('.lesson-video-wrap');
  wrap?.classList.remove('is-youtube-player');
  wrap?.querySelector('.youtube-video-controls')?.setAttribute('hidden', '');
  wrap?.querySelector('.youtube-video-brand')?.setAttribute('hidden', '');
}
function ensureLessonVideoFrame() {
  const existing = $('lessonVideo');
  if (existing) return existing;
  const wrap = document.querySelector('.lesson-video-wrap');
  if (!wrap) return null;
  const frame = document.createElement('iframe');
  frame.id = 'lessonVideo';
  frame.loading = 'lazy';
  frame.title = 'Course lesson video';
  frame.tabIndex = 0;
  frame.allow = 'autoplay; encrypted-media; picture-in-picture';
  frame.allowFullscreen = true;
  wrap.prepend(frame);
  return frame;
}
function setProgress() {
  const total = Number(course?.totalLessonCount || lessons.length || 0);
  const value = total ? Math.round((completed().size / total) * 100) : 0;
  ['overviewProgressBar', 'sidebarProgressBar'].forEach(id => { if ($(id)) $(id).style.width = `${value}%`; });
  if ($('overviewProgressText')) $('overviewProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressText')) $('sidebarProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressCount')) $('sidebarProgressCount').textContent = `${completed().size} / ${total} lessons`;
}
function renderLockedLesson(lesson = currentLesson()) {
  $('learningLoading').classList.add('hidden');
  $('learningLogin').classList.add('hidden');
  $('courseOverview').classList.add('hidden');
  $('lessonPlayer').classList.add('hidden');
  $('lessonLocked').classList.remove('hidden');
  const pending = course?.accessStatus === 'pending';
  $('lessonLockedMessage').textContent = pending
    ? 'Enrollment Pending. You can watch the first 2 classes free while your request is reviewed.'
    : 'Watch the first 2 classes free before enrolling.';
  $('lessonEnrollBtn').textContent = pending ? 'Enrollment Pending' : 'Enroll Now';
  $('lessonEnrollBtn').disabled = pending;
  $('lessonEnrollBtn').onclick = () => {
    if (pending) return;
    if (!user) {
      showAccessGate({ signedIn: false });
      return;
    }
    selectedLessonId = null;
    render();
    $('courseCheckout')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('checkoutStudentName')?.focus();
  };
  document.title = `${lesson?.title || 'Locked class'} | ${course?.title || 'Course'}`;
}
function setupWorkspaceSettings() {
  const screen = $('lessonPlayer');
  const settingsButton = $('workspaceSettingsButton');
  const menu = $('workspaceSettingsMenu');
  if (!screen || !settingsButton || !menu || settingsButton.dataset.bound) return;
  settingsButton.dataset.bound = 'true';
  const sidebarToggle = $('showSidebarToggle');
  const autoplayToggle = $('autoplayToggle');
  const autocompleteToggle = $('autocompleteToggle');
  const save = () => localStorage.setItem(workspaceSettingsKey, JSON.stringify(workspaceSettings));
  const update = () => {
    screen.classList.toggle('sidebar-hidden', !workspaceSettings.showSidebar);
    sidebarToggle.checked = workspaceSettings.showSidebar;
    autoplayToggle.checked = workspaceSettings.autoplay;
    autocompleteToggle.checked = workspaceSettings.autocomplete;
  };
  settingsButton.addEventListener('click', event => { event.stopPropagation(); menu.hidden = !menu.hidden; settingsButton.setAttribute('aria-expanded', String(!menu.hidden)); });
  document.addEventListener('click', event => { if (!menu.contains(event.target) && event.target !== settingsButton) { menu.hidden = true; settingsButton.setAttribute('aria-expanded', 'false'); } });
  sidebarToggle.addEventListener('change', () => { workspaceSettings.showSidebar = sidebarToggle.checked; save(); update(); });
  autoplayToggle.addEventListener('change', () => { workspaceSettings.autoplay = autoplayToggle.checked; save(); });
  autocompleteToggle.addEventListener('change', () => { workspaceSettings.autocomplete = autocompleteToggle.checked; save(); });
  update();
}
function playlist(target, compact = false) {
  const groups = new Map();
  lessons.forEach(lesson => { if (!groups.has(lesson.moduleId)) groups.set(lesson.moduleId, { title: lesson.moduleTitle, lessons: [] }); groups.get(lesson.moduleId).lessons.push(lesson); });
  target.innerHTML = [...groups.values()].map(group => `<section class="module-block"><div class="module-title">${group.title || 'Course Content'}</div>${group.lessons.map((lesson, index) => { const isComplete = completed().has(lesson.id); const isCurrent = lesson.id === selectedLessonId; const unlocked = hasLessonAccess(lesson); const action = unlocked ? (hasCourseAccess() ? (isComplete ? 'Review' : 'Watch Now') : 'Watch Free') : (course?.accessStatus === 'pending' ? 'Enrollment Pending' : 'Locked'); return `<button class="lesson-row ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''} ${unlocked ? '' : 'is-locked'}" data-lesson-id="${lesson.id}" type="button"><span class="lesson-state">${isComplete ? '✓' : unlocked ? (isCurrent ? '▶' : '○') : '🔒'}</span><span class="lesson-row-title">${index + 1}. ${lesson.title}</span><span class="lesson-row-meta"><span>${lesson.duration || '0 min'}</span><span class="lesson-row-action">${action}</span></span></button>`; }).join('')}</section>`).join('');
  target.querySelectorAll('[data-lesson-id]').forEach(button => button.addEventListener('click', () => go(button.dataset.lessonId)));
}
function renderOverview() {
  const lesson = currentLesson();
  const hasAccess = hasCourseAccess();
  const totalLessonCount = Number(course.totalLessonCount || lessons.length || 0);
  $('courseTitle').textContent = course.title;
  $('courseDescription').textContent = course.description || '';
  $('courseInstructor').textContent = `Instructor: ${course.instructor || 'CodeWithSiam'}`;
  $('courseLessonCount').textContent = `${totalLessonCount} lessons`;
  $('courseDuration').textContent = `${lessons.reduce((sum, item) => sum + parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10), 0)} min`;
  const bkash = course.payment?.bkash || '01644171751';
  const rocket = course.payment?.rocket || '01644171751';
  const bank = course.payment?.bank || 'Contact for bank details';
  const originalPrice = Number(course.price) || 0;
  const discountPrice = Number(course.discountPrice) > 0 && Number(course.discountPrice) < originalPrice ? Number(course.discountPrice) : originalPrice;
  $('coursePaymentPrice').textContent = discountPrice > 0 ? `৳${discountPrice.toLocaleString('en-BD')}` : 'Free';
  $('coursePaymentPanel')?.classList.add('hidden');
  $('coursePaymentBkash').textContent = bkash;
  $('coursePaymentRocket').textContent = rocket;
  $('coursePaymentBank').textContent = bank;
  $('courseEnrollmentStatus').textContent = "✓ You're enrolled";
  $('coursePaymentBkashLink')?.closest('.course-payment-panel')?.classList.add('hidden');
  $('courseThumbnail').src = course.thumbnail || '';
  $('courseThumbnail').alt = `${course.title} thumbnail`;
  $('overviewLessonTitle').textContent = lesson?.title || 'No lessons published yet';
  $('overviewStartBtn').textContent = hasAccess && lesson && completed().has(lesson.id) ? 'Review Lesson' : 'Watch First Class';
  $('overviewStartBtn').classList.toggle('hidden', !hasAccess);
  $('overviewStartBtn').disabled = !hasAccess || !lesson;
  $('overviewStartBtn').onclick = () => hasAccess && lesson && go(lesson.id);
  $('overviewEnrollBtn').textContent = course.accessStatus === 'pending' ? 'Enrollment Pending' : 'Enroll Now';
  $('overviewEnrollBtn').classList.toggle('hidden', hasAccess);
  $('overviewEnrollBtn').disabled = !lesson || course.accessStatus === 'pending';
  $('overviewEnrollBtn').onclick = () => {
    if (!user) {
      showAccessGate();
      return;
    }
    $('courseCheckout')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('checkoutStudentName')?.focus();
  };
  $('courseEnrollmentStatus').textContent = hasAccess ? "✓ You're enrolled" : course.accessStatus === 'pending' ? 'Enrollment Pending' : 'First 2 classes are free to watch';
  $('courseEnrollmentStatus').classList.remove('hidden');
  renderCheckout(discountPrice, originalPrice, hasAccess);
  $('playlistCount').textContent = `${Number(course.totalLessonCount || lessons.length || 0)} lessons`;
  playlist($('overviewPlaylist'));
  setProgress();
}
function renderCheckout(finalPrice, originalPrice, hasAccess) {
  const checkout = $('courseCheckout');
  if (!checkout) return;
  checkout.classList.toggle('hidden', hasAccess || finalPrice <= 0);
  $('checkoutFinalPrice').textContent = finalPrice > 0 ? `৳${finalPrice.toLocaleString('en-BD')}` : 'Free';
  $('checkoutOriginalPrice').textContent = `৳${originalPrice.toLocaleString('en-BD')}`;
  $('checkoutOriginalPrice').classList.toggle('hidden', originalPrice <= finalPrice);
  $('checkoutCourseThumbnail').src = course.thumbnail || '';
  $('checkoutCourseThumbnail').alt = `${course.title} thumbnail`;
  $('checkoutCourseTitle').textContent = course.title;
  $('checkoutCourseDescription').textContent = course.description || 'Practical lessons from CodeWithSiam.';
  $('checkoutCourseInstructor').textContent = `Instructor: ${course.instructor || 'CodeWithSiam'}`;
  $('checkoutStudentName').value = $('checkoutStudentName').value || user?.displayName || '';
  $('checkoutStudentEmail').value = user?.email || '';
  $('checkoutAccountBadge').textContent = user ? `Signed in as ${user.email || 'student'}` : 'Sign in required';
  $('checkoutAccountHint').textContent = user ? 'Your Firebase account details are filled in. You can edit your name before submitting.' : 'Sign in with Google before submitting your enrollment request.';
  $('checkoutOriginalSummary').textContent = originalPrice > 0 ? `৳${originalPrice.toLocaleString('en-BD')}` : 'Free';
  $('checkoutDiscountSummary').textContent = originalPrice > finalPrice ? `-৳${(originalPrice - finalPrice).toLocaleString('en-BD')}` : '-৳0';
  $('checkoutTotalSummary').textContent = finalPrice > 0 ? `৳${finalPrice.toLocaleString('en-BD')}` : 'Free';
  $('checkoutOrderTotal').textContent = finalPrice > 0 ? `৳${finalPrice.toLocaleString('en-BD')}` : 'Free';
  const duration = course.duration || `${lessons.reduce((sum, item) => sum + parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10), 0)} min`;
  const benefits = [`${Number(course.totalLessonCount || lessons.length || 0)} lectures`, duration];
  if (course.accessDuration) benefits.push(`Access on mobile and desktop (${course.accessDuration})`);
  if (course.certificateAvailable === true) benefits.push('Certificate of completion');
  $('checkoutBenefits').innerHTML = benefits.map(item => `<span class="checkout-benefit">✓ ${item}</span>`).join('');
  const method = $('checkoutPaymentMethod').value;
  const instructions = {
    bkash: `bKash: ${course.payment?.bkash || 'Contact admin for payment instructions'}`,
    rocket: `Rocket: ${course.payment?.rocket || 'Contact admin for payment instructions'}`,
    nagad: `Nagad: ${course.payment?.nagad || 'Contact admin for payment instructions'}`,
    bank: course.payment?.bank || 'Bank transfer details will be provided by the admin.',
    visa: 'Visa payment details will be provided by the admin.',
    debit_card: 'Debit card payment details will be provided by the admin.',
    credit_card: 'Credit card payment details will be provided by the admin.',
    paypal: 'PayPal payment details will be provided by the admin.'
  };
  $('checkoutPaymentInstruction').textContent = instructions[method] || 'Contact admin for payment instructions';
  $('checkoutPayBtn').textContent = `Pay ৳${finalPrice.toLocaleString('en-BD')}`;
  $('checkoutPayBtn').textContent = finalPrice > 0 ? `Confirm Enrollment · ৳${finalPrice.toLocaleString('en-BD')}` : 'Confirm Enrollment';
}
function getCheckoutCountry() {
  const select = $('checkoutCountry');
  const option = select?.selectedOptions?.[0];
  return { code: option?.value || '+880', country: option?.dataset.country || 'Bangladesh', placeholder: option?.dataset.placeholder || '01XXXXXXXXX' };
}
function normalizeCheckoutPhone(value, countryCode) {
  const digits = String(value || '').replace(/\D/g, '');
  const localDigits = digits.startsWith('0') ? digits.slice(1) : digits;
  return `${countryCode}${localDigits}`;
}
function validCheckoutPhone(value, countryCode) {
  const digits = String(value || '').replace(/\D/g, '');
  if (countryCode === '+880') return /^(01[3-9]\d{8})$/.test(digits);
  const localDigits = digits.startsWith('0') ? digits.slice(1) : digits;
  return /^[1-9]\d{6,14}$/.test(localDigits);
}
function bindCheckout() {
  const phone = $('checkoutPhone');
  const transaction = $('checkoutTransactionId');
  const pay = $('checkoutPayBtn');
  const name = $('checkoutStudentName');
  const confirmation = $('checkoutPaymentConfirm');
  if (!phone || !transaction || !pay || !name || !confirmation || pay.dataset.bound) return;
  pay.dataset.bound = 'true';
  const update = () => {
    const selected = getCheckoutCountry();
    const validPhone = validCheckoutPhone(phone.value, selected.code);
    const validName = name.value.trim().length >= 2;
    $('checkoutPhoneError').textContent = phone.value && !validPhone ? `Please enter a valid ${selected.country} phone number` : '';
    pay.disabled = !user || !validName || !validPhone || !transaction.value.trim() || !confirmation.checked || Boolean(pay.dataset.processing);
  };
  name.addEventListener('input', update);
  phone.addEventListener('input', update);
  transaction.addEventListener('input', update);
  confirmation.addEventListener('change', update);
  $('checkoutCountry').addEventListener('change', () => { const selected = getCheckoutCountry(); phone.placeholder = selected.placeholder; phone.value = ''; $('checkoutPhoneError').textContent = ''; update(); });
  $('checkoutPaymentMethod').addEventListener('change', () => renderCheckout(Number(course.discountPrice) || Number(course.price) || 0, Number(course.price) || 0, false));
  pay.addEventListener('click', async () => {
    update();
    if (pay.disabled) return;
    if (!user) { $('checkoutStatus').textContent = 'Login to continue.'; showAccessGate(); return; }
    pay.dataset.processing = 'true'; pay.disabled = true; pay.textContent = 'Processing...';
    try {
      const amount = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price);
      const payment = await createPaymentSubmission({ userId: user.uid, studentName: name.value.trim(), courseId: course.id, courseTitle: course.title, amount, method: $('checkoutPaymentMethod').value, transactionId: transaction.value.trim(), phone: normalizeCheckoutPhone(phone.value, getCheckoutCountry().code) });
      const screenshot = await compressPaymentScreenshot($('checkoutPaymentScreenshot')?.files?.[0]);
      if (screenshot) {
        const screenshotUrl = await uploadPaymentScreenshot(screenshot, user.uid, payment.id);
        await updatePaymentScreenshot(payment.id, screenshotUrl);
      }
      $('checkoutStatus').textContent = '';
      $('checkoutRequestId').textContent = payment.id;
      $('checkoutSuccess').classList.remove('hidden');
      pay.textContent = 'Enrollment request submitted';
      $('checkoutStudentName').disabled = true;
      $('checkoutPhone').disabled = true;
      $('checkoutTransactionId').disabled = true;
      $('checkoutPaymentConfirm').disabled = true;
    } catch (error) { $('checkoutStatus').textContent = error.message || 'Payment could not be submitted.'; pay.dataset.processing = ''; pay.textContent = `Pay ৳${(Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price)).toLocaleString('en-BD')}`; update(); }
  });
  $('checkoutWhatsappBtn')?.addEventListener('click', () => {
    const amount = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price);
    const method = $('checkoutPaymentMethod').value;
    const proofText = [
      'Hello Siam, I submitted a course payment.',
      `Student: ${user?.displayName || 'Student'}`,
      `Gmail: ${user?.email || ''}`,
      `Course: ${course.title}`,
      `Amount: ৳${amount.toLocaleString('en-BD')}`,
      `Payment method: ${method}`,
      `Transaction ID: ${transaction.value.trim() || 'Not entered yet'}`,
      '',
      'I will attach my payment screenshot manually in this chat.'
    ].join('\n');
    window.open(`https://wa.me/8801644171751?text=${encodeURIComponent(proofText)}`, '_blank', 'noopener,noreferrer');
  });
  $('checkoutShareBtn')?.addEventListener('click', async () => { const url = location.href; if (navigator.share) await navigator.share({ title: course.title, url }).catch(() => {}); else { await navigator.clipboard?.writeText(url); $('checkoutStatus').textContent = 'Link copied!'; } });
}
function renderPlayer() {
  const lesson = currentLesson();
  if (!hasLessonAccess(lesson)) {
    renderLockedLesson(lesson);
    return;
  }
  if (!lesson) { $('lessonPlayer').classList.add('hidden'); return; }
  ensureLessonVideoFrame();
  $('lessonPlayer').classList.remove('hidden');
  const videoWrap = $('lessonVideo').closest('.lesson-video-wrap');
  videoWrap?.querySelector('.lesson-video-unavailable')?.remove();
  setupWorkspaceSettings();
  $('lessonTitle').textContent = lesson.title;
  $('lessonDescription').textContent = lesson.description || '';
  $('lessonDuration').textContent = lesson.duration || '0 min';
  const youtubeLink = $('lessonYoutubeLink');
  const id = youtubeId(lesson);
  const youtubeUrl = extractYoutubeId(lesson?.youtubeUrl)
    ? lesson.youtubeUrl
    : (lesson?.videoUrl && extractYoutubeId(lesson.videoUrl)
      ? `https://www.youtube.com/watch?v=${extractYoutubeId(lesson.videoUrl)}`
      : (id ? `https://www.youtube.com/watch?v=${id}` : ''));
  youtubeLink.classList.toggle('hidden', lesson.showYoutubeLink !== true || !youtubeUrl);
  youtubeLink.href = youtubeUrl;
  
  const isMp4 = lesson.videoType === 'mp4' || isMp4VideoUrl(lesson?.videoUrl || '');
  const autoplayRequested = new URLSearchParams(location.search).get('autoplay') === '1';
  
  if (isMp4 && lesson.videoUrl) {
    // Display MP4 video
    resetYoutubeControls();
    $('lessonVideo').classList.add('hidden');
    $('lessonMp4').classList.remove('hidden');
    $('lessonMp4').src = lesson.videoUrl;
    setupCustomVideoPlayer(true);
    if (autoplayRequested || workspaceSettings.autoplay) $('lessonMp4').play().catch(() => {});
  } else if (id) {
    // Display YouTube video
    $('lessonVideo').classList.remove('hidden');
    $('lessonMp4').classList.add('hidden');
    // Keep native controls as a fallback if the YouTube API is blocked.
    $('lessonVideo').src = `https://www.youtube.com/embed/${id}?enablejsapi=1&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&origin=${encodeURIComponent(location.origin)}&autoplay=${autoplayRequested || workspaceSettings.autoplay ? 1 : 0}`;
    $('lessonMp4').removeAttribute('src');
    setupYoutubePlayer(id, youtubeUrl, autoplayRequested || workspaceSettings.autoplay);
  } else {
    // No valid video
    resetYoutubeControls();
    $('lessonVideo').classList.add('hidden');
    $('lessonMp4').classList.add('hidden');
    const unavailable = document.createElement('div');
    unavailable.className = 'lesson-video-unavailable';
    unavailable.innerHTML = '<i class="fa-solid fa-video-slash" aria-hidden="true"></i><strong>Video is not available yet</strong><span>The lesson is published, but its YouTube or MP4 video URL has not been loaded. Please ask the course admin to publish the lesson video and deploy the Firestore rules.</span>';
    videoWrap?.appendChild(unavailable);
  }
  
  if (videoWrap && !videoWrap.dataset.controlsReady) {
    videoWrap.dataset.controlsReady = 'true';
    const requestFullscreen = async target => {
      const method = target?.requestFullscreen || target?.webkitRequestFullscreen;
      if (method) await method.call(target).catch(() => {});
    };
    const enterFullscreen = async event => {
      event?.preventDefault();
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen;
        if (exit) await exit.call(document).catch(() => {});
        return;
      }
      await requestFullscreen(videoWrap);
    };
    videoWrap.addEventListener('dblclick', enterFullscreen);
    $('lessonVideo').addEventListener('dblclick', event => enterFullscreen(event));
    $('lessonMp4').addEventListener('dblclick', event => enterFullscreen(event));
  }
  $('previousLesson').disabled = lessons.indexOf(lesson) === 0;
  $('nextLesson').disabled = lessons.indexOf(lesson) === lessons.length - 1;
  $('previousLesson').onclick = () => go(lessons[lessons.indexOf(lesson) - 1]?.id);
  $('nextLesson').onclick = () => go(lessons[lessons.indexOf(lesson) + 1]?.id);
  $('completeLesson').textContent = completed().has(lesson.id) ? 'Completed' : 'Complete and Continue';
  $('completeLesson').onclick = complete;
  $('sidebarCourseTitle').textContent = course.title;
  playlist($('lessonPlaylist'), true);
  setProgress();
}
document.addEventListener('keydown', event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  const video = $('lessonMp4');
  const usingMp4 = video && !video.classList.contains('hidden');
  const usingYoutube = youtubePlayer && video?.classList.contains('hidden');
  if (!usingMp4 && !usingYoutube) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    if (usingMp4) {
      video.currentTime = Math.max(0, Math.min(video.duration || Infinity, video.currentTime + (event.key === 'ArrowRight' ? 5 : -5)));
    } else {
      const currentTime = youtubePlayer.getCurrentTime?.() || 0;
      const duration = youtubePlayer.getDuration?.() || Infinity;
      youtubePlayer.seekTo(Math.max(0, Math.min(duration, currentTime + (event.key === 'ArrowRight' ? 5 : -5))), true);
    }
  }
  if (event.key === ' ' || event.key === 'k' || event.key === 'K') {
    event.preventDefault();
    if (usingMp4) video.paused ? video.play().catch(() => {}) : video.pause();
    else youtubePlayer.getPlayerState?.() === 1 ? youtubePlayer.pauseVideo() : youtubePlayer.playVideo();
  }
});
function render() {
  if (!course) return;
  const hasLessonRoute = Boolean(selectedLessonId);
  const routedLesson = currentLesson();
  if (hasLessonRoute && routedLesson && !hasLessonAccess(routedLesson)) {
    renderLockedLesson(routedLesson);
    return;
  }
  $('lessonLocked').classList.add('hidden');
  $('courseOverview').classList.toggle('hidden', hasLessonRoute);
  $('lessonPlayer').classList.toggle('hidden', !hasLessonRoute);
  if (hasLessonRoute) renderPlayer(); else renderOverview();
  document.title = `${course.title} | CodeWithSiam`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = course.description || `Learn ${course.title} with CodeWithSiam video lessons.`;
}
async function complete() {
  const lesson = currentLesson();
  if (!lesson || completed().has(lesson.id)) return;
  const updated = { ...(progress[course.id] || {}), completedLessons: [...completed(), lesson.id], lastLessonId: lesson.id, completion: Math.round(((completed().size + 1) / lessons.length) * 100) };
  progress[course.id] = updated;
  localStorage.setItem(progressKey, JSON.stringify(progress));
  if (user) await saveUserCourseProgress(user.uid, course.id, updated).catch(error => console.error('Progress sync failed:', error));
  const next = lessons[lessons.indexOf(lesson) + 1];
  if (next) go(next.id); else render();
}
async function load() {
  const all = await withTimeout(fetchAllCourses({ includeLessons: true }));
  const requestedCourseId = courseId || null;
  course = all.find(item => item.id === requestedCourseId)
    || all.find(item => item.id === 'python-for-beginners-bangla')
    || all[0] || null;

  if (!course) {
    $('learningLoading').innerHTML = '<div class="course-error-card"><i class="fa-solid fa-compass"></i><h1>Course not found</h1><p>Choose a course from the CodeWithSiam course library to continue.</p><a class="learning-button primary" href="index.html">Browse Courses</a></div>';
    return;
  }

  if (requestedCourseId && course.id !== requestedCourseId) {
    const nextUrl = selectedLessonId
      ? `course.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(selectedLessonId)}`
      : `course.html?course=${encodeURIComponent(course.id)}`;
    history.replaceState({}, '', nextUrl);
  }

  bindCheckout();
  $('learningLogin').classList.add('hidden');
  progress = getLocalProgress();
  if (user) {
    const cloud = (await import('./courses-db.js')).fetchUserProgress;
    const cloudProgress = await cloud(user.uid).catch(() => ({}));
    progress = { ...progress, ...cloudProgress };
  }
  localStorage.setItem(progressKey, JSON.stringify(progress));
  lessons = orderedLessons(course);
  if (!selectedLessonId && user && hasCourseAccess()) selectedLessonId = progress[course.id]?.lastLessonId || lessons.find(lesson => !completed().has(lesson.id))?.id || lessons[0]?.id;
  $('learningLoading').classList.add('hidden');
  render();
}
$('learningGoogleBtn').onclick = async () => { const button = $('learningGoogleBtn'); button.disabled = true; button.innerHTML = '<i class="fa-brands fa-google"></i> Connecting to Google...'; $('learningAuthStatus').textContent = 'Opening secure Google sign-in...'; try { await signInWithGoogle(); } catch (error) { $('learningAuthStatus').textContent = error.message; button.disabled = false; button.innerHTML = '<i class="fa-brands fa-google"></i> Continue with Google'; } };
$('refreshAccessBtn')?.addEventListener('click', async () => {
  const button = $('refreshAccessBtn');
  button.disabled = true;
  $('learningAuthStatus').textContent = 'Checking the latest access...';
  try {
    await user?.reload();
    await load();
  } catch (error) {
    $('learningAuthStatus').textContent = error.message || 'Access could not be refreshed.';
  } finally {
    button.disabled = false;
  }
});
$('accessContinueBtn').onclick = () => { $('accessIntro').classList.add('hidden'); $('accessContinueBtn').classList.add('hidden'); $('learningGoogleBtn').classList.remove('hidden'); };
document.querySelectorAll('.payment-method-choice').forEach(button => button.addEventListener('click', () => selectPaymentMethod(button.dataset.paymentMethod)));
document.querySelectorAll('.copy-payment-number').forEach(button => button.addEventListener('click', async () => {
  const value = $(button.dataset.copyTarget)?.textContent.trim() || '';
  await navigator.clipboard?.writeText(value);
  button.textContent = 'Copied';
  setTimeout(() => { button.textContent = button.dataset.copyTarget === 'accessPaymentBank' ? 'Copy Details' : 'Copy Number'; }, 1200);
}));
async function compressPaymentScreenshot(file) {
  if (!file) return '';
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image screenshot.');
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          if (!blob || blob.size > 900 * 1024) reject(new Error('Screenshot is too large. Please use a smaller image.'));
          else resolve(blob);
        }, 'image/jpeg', 0.58);
      };
      image.onerror = () => reject(new Error('Screenshot could not be read.'));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Screenshot could not be loaded.'));
    reader.readAsDataURL(file);
  });
}
window.addEventListener('popstate', () => {
  const nextParams = new URLSearchParams(location.search);
  const nextPrettyPath = location.pathname.match(/^\/courses\/([^/]+)(?:\/lectures\/([^/]+))?\/?$/);
  selectedLessonId = nextParams.get('lesson') || nextPrettyPath?.[2] || null;
  render();
});
observeAuthState(nextUser => {
  user = nextUser;
  load().catch(error => {
    const isPermissionError = error?.code === 'permission-denied'
      || /permission|insufficient/i.test(error?.message || '');
    $('learningLoading').innerHTML = isPermissionError
      ? '<div class="course-error-card"><i class="fa-solid fa-lock"></i><h1>Course access needs approval</h1><p>Sign in with the approved Google account, or ask the course admin to grant access to your email.</p><button class="learning-button primary" type="button" onclick="location.reload()">Try again</button><a class="learning-button" href="index.html#course">Back to courses</a></div>'
      : `<div class="course-error-card"><i class="fa-solid fa-triangle-exclamation"></i><h1>Unable to load this course</h1><p>${error.message || 'Please refresh the page and try again.'}</p><button class="learning-button primary" type="button" onclick="location.reload()">Try again</button><a class="learning-button" href="index.html#course">Back to courses</a></div>`;
    console.error(error);
  });
});

import { fetchAllCourses, saveUserCourseProgress, createPaymentSubmission, createFreeCourseEnrollment, uploadPaymentScreenshot, updatePaymentScreenshot, fetchUserPayments, getLessonVideoSource } from './courses-db.js?v=20261004-checkout-email-1';
import { observeAuthState, redirectToAuthPrompt } from './auth.js?v=20261001-auth-flow-1';

const progressKey = 'siam_portfolio_course_progress';
const params = new URLSearchParams(location.search);
const prettyCoursePath = location.pathname.match(/^\/courses\/([^/]+)(?:\/lectures\/([^/]+))?\/?$/);
const courseId = params.get('course') || (prettyCoursePath ? decodeURIComponent(prettyCoursePath[1]) : null);
let user = null;
let authLoadGeneration = 0;
let checkoutActive = false;
let checkoutStep = 1;
let course = null;
let lessons = [];
let selectedLessonId = params.get('lesson') || (prettyCoursePath?.[2] ? decodeURIComponent(prettyCoursePath[2]) : null);
let progress = {};
let youtubePlayer = null;
let youtubeApiPromise = null;
let youtubeTimer = null;
const workspaceSettingsKey = 'codewithsiam_workspace_settings';
const workspaceSettings = (() => {
  try { return { showSidebar: true, autoplay: false, autocomplete: true, ...JSON.parse(localStorage.getItem(workspaceSettingsKey) || '{}') }; } catch { return { showSidebar: true, autoplay: false, autocomplete: true }; }
})();

const $ = id => document.getElementById(id);
const mobileCourseMedia = window.matchMedia('(max-width: 768px)');
let mobileCourseOverlayOpen = false;
let mobileCourseHistoryEntry = false;
let previousBodyOverflow = '';

function setMobileCourseOverlayVisible(isOpen) {
  const overlay = $('mobileCourseOverlay');
  if (!overlay) return;
  mobileCourseOverlayOpen = isOpen;
  overlay.classList.toggle('is-open', isOpen);
  overlay.setAttribute('aria-hidden', String(!isOpen));
  overlay.inert = !isOpen;
  $('mobileCourseMenuButton')?.setAttribute('aria-expanded', String(isOpen));
  $('mobilePlayerPlaylistButton')?.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = previousBodyOverflow;
  }
}

function openMobileCourseOverlay() {
  if (!mobileCourseMedia.matches || !course || mobileCourseOverlayOpen) return;
  const state = history.state && typeof history.state === 'object' ? history.state : {};
  history.pushState({ ...state, mobileCoursePlaylistOpen: true }, '', location.href);
  mobileCourseHistoryEntry = true;
  setMobileCourseOverlayVisible(true);
  $('mobileCourseCloseButton')?.focus({ preventScroll: true });
}

function closeMobileCourseOverlay({ fromPopstate = false, force = false } = {}) {
  if (!mobileCourseOverlayOpen) return;
  if (mobileCourseHistoryEntry && !fromPopstate && !force) {
    history.back();
    return;
  }
  if (force && mobileCourseHistoryEntry) {
    const state = history.state && typeof history.state === 'object' ? history.state : {};
    history.replaceState({ ...state, mobileCoursePlaylistOpen: false }, '', location.href);
  }
  mobileCourseHistoryEntry = false;
  setMobileCourseOverlayVisible(false);
}

function replaceMobileOverlayRoute(nextUrl) {
  const state = history.state && typeof history.state === 'object' ? history.state : {};
  history.replaceState({ ...state, mobileCoursePlaylistOpen: false }, '', nextUrl);
  mobileCourseHistoryEntry = false;
  setMobileCourseOverlayVisible(false);
}

function updateMobileCoursePlaylist() {
  if (!course) return;
  $('mobileCourseHeading').textContent = course.title || 'Course';
  const total = Number(course.totalLessonCount || lessons.length || 0);
  $('mobileCourseProgressText').textContent = `${percent()}% COMPLETE`;
  $('mobileCourseProgressCount').textContent = `${completed().size} / ${total} lessons`;
  $('mobileCourseProgressBar').style.width = `${percent()}%`;
  playlist($('mobileCourseLessonList'), true, true);
}

function syncMobileCourseExperience() {
  if (!mobileCourseMedia.matches) {
    closeMobileCourseOverlay({ force: true });
    return;
  }
  updateMobileCoursePlaylist();
}

$('mobileCourseMenuButton')?.addEventListener('click', openMobileCourseOverlay);
$('mobileCourseCloseButton')?.addEventListener('click', () => closeMobileCourseOverlay());

function togglePlayerPlaylist() {
  if (mobileCourseMedia.matches) {
    openMobileCourseOverlay();
    return;
  }
  const screen = $('lessonPlayer');
  workspaceSettings.showSidebar = screen.classList.contains('sidebar-hidden');
  screen.classList.toggle('sidebar-hidden', !workspaceSettings.showSidebar);
  $('showSidebarToggle').checked = workspaceSettings.showSidebar;
  $('mobilePlayerPlaylistButton').setAttribute('aria-expanded', String(workspaceSettings.showSidebar));
  localStorage.setItem(workspaceSettingsKey, JSON.stringify(workspaceSettings));
}

$('mobilePlayerPlaylistButton')?.addEventListener('click', togglePlayerPlaylist);
$('mobilePlayerPreviousButton')?.addEventListener('click', () => $('previousLesson')?.click());
$('mobilePlayerNextButton')?.addEventListener('click', () => $('nextLesson')?.click());
mobileCourseMedia.addEventListener('change', event => {
  if (event.matches) syncMobileCourseExperience();
  else closeMobileCourseOverlay({ force: true });
});

function withTimeout(promise, milliseconds = 15000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = window.setTimeout(() => reject(new Error('Course data is taking too long to load. Check your connection and Firestore rules, then try again.')), milliseconds);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timer));
}
function scrollToCourseSection(element, offset = 88) {
  if (!element) return;
  const targetTop = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);
  requestAnimationFrame(() => {
    window.scrollTo({ top: targetTop, left: 0, behavior: 'smooth' });
  });
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
  const selectingFromOverlay = mobileCourseOverlayOpen && mobileCourseMedia.matches;
  if (lessonId && lesson && !hasLessonAccess(lesson)) {
    if (selectingFromOverlay) replaceMobileOverlayRoute(route(lessonId));
    else history.pushState({}, '', route(lessonId));
    selectedLessonId = lessonId;
    renderLockedLesson(lesson);
    return;
  }
  if (selectingFromOverlay) replaceMobileOverlayRoute(route(lessonId));
  else history.pushState({}, '', route(lessonId));
  selectedLessonId = lessonId || null;
  render();
  if (lessonId) window.setTimeout(() => scrollToCourseSection($('lessonVideo'), 90), 0);
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
function youtubeId(lesson) { return getLessonVideoSource(lesson)?.id || ''; }
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
const paymentMethods = {
  bkash: { label: 'bKash', mark: 'bKash', color: '#e2136e', type: 'Mobile wallet' },
  rocket: { label: 'Rocket', mark: 'ROCKET', color: '#8c3494', type: 'DBBL wallet' },
  nagad: { label: 'Nagad', mark: 'NAGAD', color: '#f6921e', type: 'Mobile wallet' },
  bank: { label: 'Bank transfer', mark: 'BANK', color: '#3b82f6', type: 'Bank transfer' },
  upi: { label: 'UPI', mark: 'UPI', color: '#6b46c1', type: 'Instant payment' },
  visa: { label: 'Visa', mark: 'VISA', color: '#1a1f71', type: 'Card payment' },
  debit_card: { label: 'Debit card', mark: 'DEBIT', color: '#14b8a6', type: 'Card payment' },
  credit_card: { label: 'Credit card', mark: 'CARD', color: '#eb5757', type: 'Card payment' },
  paypal: { label: 'PayPal', mark: 'PAYPAL', color: '#0070ba', type: 'Online payment' }
};
function availablePaymentMethods() {
  const countryCode = getCheckoutCountry().code;
  if (countryCode === '+880') return ['bkash', 'nagad', 'rocket', 'bank'];
  if (countryCode === '+91') return ['upi', 'paypal', 'visa', 'debit_card', 'credit_card'];
  return ['paypal', 'visa', 'debit_card', 'credit_card'];
}
function renderPaymentOptions() {
  const options = $('checkoutPaymentOptions');
  const select = $('checkoutPaymentMethod');
  if (!options || !select) return;
  const methods = availablePaymentMethods();
  if (!methods.includes(select.value)) select.value = methods[0];
  options.innerHTML = methods.map(method => {
    const details = paymentMethods[method];
    const selected = select.value === method;
    return `<button class="checkout-payment-choice${selected ? ' selected' : ''}" type="button" data-payment-choice="${method}" aria-pressed="${selected}" style="--choice-color:${details.color}"><span class="checkout-payment-mark">${details.mark}</span><span><b>${details.label}</b><small>${details.type}</small></span></button>`;
  }).join('');
  renderSelectedPaymentDetails();
}
function renderSelectedPaymentDetails() {
  if (!course) return;
  const method = $('checkoutPaymentMethod')?.value || 'bkash';
  const details = paymentMethods[method] || paymentMethods.bkash;
  const amount = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price)
    ? Number(course.discountPrice)
    : Number(course.price) || 0;
  const recipients = {
    bkash: course.payment?.bkash || '01644171751',
    rocket: course.payment?.rocket || '01644171751',
    nagad: course.payment?.nagad || '01644171751',
    bank: course.payment?.bank || 'Contact us on WhatsApp for bank details',
    upi: 'Contact us on WhatsApp for UPI payment details',
    visa: 'Contact us on WhatsApp for secure card payment details',
    debit_card: 'Contact us on WhatsApp for secure card payment details',
    credit_card: 'Contact us on WhatsApp for secure card payment details',
    paypal: 'Contact us on WhatsApp for PayPal details'
  };
  const isInternational = !['bkash', 'rocket', 'nagad', 'bank'].includes(method);
  const recipient = recipients[method];
  const paymentPhone = isInternational || method === 'bank' ? '' : recipient;
  $('checkoutPaymentLogo').textContent = details.mark;
  $('checkoutPaymentLogo').style.background = details.color;
  $('checkoutPaymentName').textContent = details.label;
  $('checkoutPaymentType').textContent = details.type;
  $('checkoutPaymentAmount').textContent = amount > 0 ? `৳${amount.toLocaleString('en-BD')}` : 'Free';
  $('checkoutRecipientLabel').textContent = isInternational ? 'PAYMENT DETAILS' : method === 'bank' ? 'BANK DETAILS' : 'SEND TO';
  $('checkoutRecipient').textContent = recipient;
  $('checkoutRecipient').dataset.copyable = String(Boolean(paymentPhone));
  $('checkoutCopyRecipient').classList.toggle('hidden', !paymentPhone);
  $('checkoutPaymentInstructions').innerHTML = isInternational
    ? '<li>Contact Siam on WhatsApp to receive the current payment instructions.</li><li>Complete the payment and keep the transaction reference.</li><li>Return here to submit your payment reference.</li>'
    : method === 'bank'
      ? '<li>Contact us on WhatsApp for bank account details.</li><li>Transfer the exact amount and keep your payment reference.</li><li>Return here to submit your payment reference.</li>'
      : `<li>Open the <b>${details.label}</b> app and choose <b>Send Money</b>.</li><li>Send the exact amount to the number above.</li><li>Confirm the payment and copy the transaction ID.</li>`;
  $('checkoutPaymentInstruction').textContent = isInternational || method === 'bank'
    ? 'Payment details are confirmed directly with CodeWithSiam before you pay.'
    : 'Please use Send Money, not Cash Out.';
  $('checkoutPaymentHelp').href = `https://wa.me/8801644171751?text=${encodeURIComponent(`Hi Siam, I need ${details.label} payment details for ${course.title}.`)}`;
  $('checkoutOrderTotal').textContent = amount > 0 ? `৳${amount.toLocaleString('en-BD')}` : 'Free';
  $('checkoutConfirmAmount').textContent = amount > 0 ? `৳${amount.toLocaleString('en-BD')}` : 'Free';
}
function beginCheckout() {
  if (!user) {
    const next = new URL(location.href);
    next.searchParams.set('enroll', '1');
    history.replaceState(history.state, '', next);
    showAccessGate();
    return;
  }
  checkoutActive = true;
  $('learningLogin').classList.add('hidden');
  $('courseOverview').classList.add('hidden');
  $('lessonPlayer').classList.add('hidden');
  $('lessonLocked').classList.add('hidden');
  $('courseCheckout').classList.remove('hidden');
  setCheckoutStep(1);
  $('checkoutStudentName').focus({ preventScroll: true });
}
function leaveCheckout() {
  checkoutActive = false;
  $('courseCheckout').classList.add('hidden');
  $('courseOverview').classList.remove('hidden');
  const next = new URL(location.href);
  next.searchParams.delete('enroll');
  history.replaceState(history.state, '', next);
  render();
}
function selectPaymentMethod(method) {
  $('paymentMethod').value = method;
  document.querySelectorAll('.payment-method-choice').forEach(button => button.classList.toggle('active', button.dataset.paymentMethod === method));
  document.querySelectorAll('.payment-method-details').forEach(details => details.classList.toggle('hidden', details.id !== `paymentDetails-${method}`));
  renderPaymentQrPanel('accessPaymentQrPanel', course?.payment, method);
}
function setCheckoutStep(step) {
  checkoutStep = step;
  document.querySelectorAll('#courseCheckout [data-checkout-pane]').forEach(pane => {
    pane.classList.toggle('active', Number(pane.dataset.checkoutPane) === step);
  });
  document.querySelectorAll('#courseCheckout .checkout-progress [data-step]').forEach(item => {
    const itemStep = Number(item.dataset.step);
    item.classList.toggle('active', itemStep === step);
    item.classList.toggle('complete', itemStep < step);
    item.setAttribute('aria-current', itemStep === step ? 'step' : 'false');
    item.querySelector('i').textContent = itemStep < step ? '✓' : String(itemStep);
  });
  $('courseCheckout').querySelector('.checkout-progress').classList.toggle('hidden', step === 4);
  if (step < 4) {
    requestAnimationFrame(() => scrollToCourseSection($('courseCheckout'), 20));
  }
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
    ? `Signed in as ${user?.email || 'your account'}. Course approval is required for private lessons.`
    : 'Sign in or create an account to enroll and access private lessons.';
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
  window.clearInterval(youtubeTimer);
  youtubeTimer = null;
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
  controls.querySelector('[data-youtube-action="seek-back"]').onclick = () => youtubePlayer?.seekTo?.(Math.max(0, (youtubePlayer.getCurrentTime?.() || 0) - 10), true);
  controls.querySelector('[data-youtube-action="seek-forward"]').onclick = () => youtubePlayer?.seekTo?.(Math.min(youtubePlayer.getDuration?.() || Infinity, (youtubePlayer.getCurrentTime?.() || 0) + 10), true);
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
      if (document.pictureInPictureElement) await document.exitPictureInPicture?.().catch(() => { });
      else await video.requestPictureInPicture().catch(() => { });
      return;
    }
    if (frame?.requestPictureInPicture && document.pictureInPictureEnabled) {
      await frame.requestPictureInPicture().catch(() => { });
      return;
    }
    await togglePlayerFullscreen(wrap);
  });
  if (speedSelect) speedSelect.onchange = () => youtubePlayer?.setPlaybackRate?.(Number(speedSelect.value));
  if (qualitySelect) qualitySelect.onchange = () => youtubePlayer?.setPlaybackQuality?.(qualitySelect.value);
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
    youtubeTimer = window.setInterval(() => {
      if (!youtubePlayer || !document.body.contains(wrap)) { window.clearInterval(youtubeTimer); youtubeTimer = null; return; }
      updateTime();
    }, 500);
    setupPlayerAutoHide(wrap, controls, () => youtubePlayer?.getPlayerState?.() === 1);
  });
}
function resetYoutubeControls() {
  youtubePlayer?.destroy?.();
  youtubePlayer = null;
  const wrap = $('lessonVideo')?.closest('.lesson-video-wrap');
  wrap?.classList.remove('is-youtube-player', 'is-custom-player');
  wrap?.querySelector('.youtube-video-controls')?.setAttribute('hidden', '');
  wrap?.querySelector('.youtube-video-brand')?.setAttribute('hidden', '');
}

function resetLessonVideoSurface() {
  const frame = $('lessonVideo');
  const video = $('lessonMp4');
  const wrap = frame?.closest('.lesson-video-wrap');
  resetYoutubeControls();
  wrap?.querySelector('.lesson-video-unavailable')?.remove();
  if (frame) {
    frame.classList.add('hidden');
    frame.removeAttribute('src');
  }
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.classList.add('hidden');
  }
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
  frame.tabIndex = -1;
  frame.allow = 'autoplay; encrypted-media; picture-in-picture';
  frame.allowFullscreen = true;
  wrap.prepend(frame);
  return frame;
}
function setProgress() {
  const total = Number(course?.totalLessonCount || lessons.length || 0);
  const value = total ? Math.round((completed().size / total) * 100) : 0;
  ['overviewProgressBar', 'sidebarProgressBar', 'mobileCourseProgressBar'].forEach(id => { if ($(id)) $(id).style.width = `${value}%`; });
  if ($('overviewProgressText')) $('overviewProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressText')) $('sidebarProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressCount')) $('sidebarProgressCount').textContent = `${completed().size} / ${total} lessons`;
  if ($('mobileCourseProgressText')) $('mobileCourseProgressText').textContent = `${value}% COMPLETE`;
  if ($('mobileCourseProgressCount')) $('mobileCourseProgressCount').textContent = `${completed().size} / ${total} lessons`;
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
    selectedLessonId = null;
    history.replaceState(history.state, '', route(''));
    beginCheckout();
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
    $('mobilePlayerPlaylistButton')?.setAttribute('aria-expanded', String(workspaceSettings.showSidebar));
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
function formatModuleDuration(groupLessons) {
  const totalMinutes = groupLessons.reduce((total, lesson) => {
    const duration = String(lesson.duration || '').trim().toLowerCase();
    const clock = duration.match(/^(\d+):(\d{2})$/);
    if (clock) return total + Number(clock[1]) + Number(clock[2]) / 60;
    const minutes = duration.match(/(\d+(?:\.\d+)?)\s*(?:m|min|mins|minute|minutes)\b/);
    if (minutes) return total + Number(minutes[1]);
    const seconds = duration.match(/(\d+(?:\.\d+)?)\s*(?:s|sec|secs|second|seconds)\b/);
    return seconds ? total + Number(seconds[1]) / 60 : total;
  }, 0);
  return totalMinutes ? `${Math.max(1, Math.round(totalMinutes))}m` : '';
}

function playlist(target, compact = false, mobileOverlay = false) {
  const groups = new Map();
  lessons.forEach(lesson => { if (!groups.has(lesson.moduleId)) groups.set(lesson.moduleId, { title: lesson.moduleTitle, lessons: [] }); groups.get(lesson.moduleId).lessons.push(lesson); });
  target.innerHTML = [...groups.values()].map((group, groupIndex) => {
    const rows = group.lessons.map((lesson, index) => {
      const isComplete = completed().has(lesson.id);
      const isCurrent = lesson.id === selectedLessonId;
      const unlocked = hasLessonAccess(lesson);
      const action = unlocked ? (hasCourseAccess() ? (isComplete ? 'Review' : 'Start') : 'Start') : (course?.accessStatus === 'pending' ? 'Enrollment Pending' : 'Locked');
      const state = isComplete ? '<i class="fa-solid fa-check" aria-hidden="true"></i>' : unlocked ? (isCurrent ? '<i class="fa-solid fa-play" aria-hidden="true"></i>' : '<i class="fa-regular fa-circle" aria-hidden="true"></i>') : '<i class="fa-solid fa-lock" aria-hidden="true"></i>';
      if (mobileOverlay) {
        return `<div class="lesson-row mobile-course-lesson-row ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''} ${unlocked ? '' : 'is-locked'}"><button class="mobile-course-lesson-open" data-lesson-id="${lesson.id}" type="button"><span class="lesson-state">${state}</span><span class="mobile-course-lesson-copy"><span class="lesson-row-title">${index + 1}. ${lesson.title}</span><small class="mobile-course-lesson-duration">(${lesson.duration || '0 min'})</small></span></button><button class="mobile-course-lesson-action" data-lesson-id="${lesson.id}" type="button">${action}</button></div>`;
      }
      return `<button class="lesson-row ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''} ${unlocked ? '' : 'is-locked'}" data-lesson-id="${lesson.id}" type="button"><span class="lesson-state">${state}</span><span class="lesson-row-title">${index + 1}. ${lesson.title}</span><span class="lesson-row-meta"><span>${lesson.duration || '0 min'}</span><span class="lesson-row-action">${action}</span></span></button>`;
    }).join('');

    if (mobileOverlay) {
      const completeCount = group.lessons.filter(lesson => completed().has(lesson.id)).length;
      const sectionId = `mobile-course-module-${groupIndex}`;
      const duration = formatModuleDuration(group.lessons);
      return `<section class="module-block mobile-course-module"><button class="module-title mobile-course-module-toggle" data-module-toggle type="button" aria-expanded="true" aria-controls="${sectionId}"><span class="mobile-course-module-heading"><strong>${group.title || 'Course Content'}</strong>${duration ? `<small>(${duration})</small>` : ''}</span><span class="mobile-course-module-progress"><i class="fa-solid fa-check" aria-hidden="true"></i>${completeCount} / ${group.lessons.length} complete</span><i class="fa-solid fa-chevron-up mobile-course-module-chevron" aria-hidden="true"></i></button><div class="mobile-course-module-lessons" id="${sectionId}">${rows}</div></section>`;
    }

    return `<section class="module-block"><div class="module-title">${group.title || 'Course Content'}</div>${rows}</section>`;
  }).join('');
  target.querySelectorAll('[data-module-toggle]').forEach(button => button.addEventListener('click', () => {
    const section = button.closest('.mobile-course-module');
    const collapsed = section.classList.toggle('is-collapsed');
    button.setAttribute('aria-expanded', String(!collapsed));
  }));
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
  $('overviewEnrollBtn').onclick = beginCheckout;
  $('courseEnrollmentStatus').textContent = hasAccess ? "✓ You're enrolled" : course.accessStatus === 'pending' ? 'Enrollment Pending' : 'First 2 classes are free to watch';
  $('courseEnrollmentStatus').classList.remove('hidden');
  renderCheckout(discountPrice, originalPrice, hasAccess);
  const overviewPlaylist = $('overviewPlaylist');
  if (overviewPlaylist) {
    $('playlistCount').textContent = `${Number(course.totalLessonCount || lessons.length || 0)} lessons`;
    playlist(overviewPlaylist);
  }
  setProgress();
}
function renderCheckout(finalPrice, originalPrice, hasAccess) {
  const checkout = $('courseCheckout');
  if (!checkout) return;
  const isFree = finalPrice <= 0;
  checkout.classList.toggle('hidden', hasAccess || !checkoutActive);
  checkout.classList.toggle('free-enrollment', isFree);
  $('checkoutFinalPrice').textContent = finalPrice > 0 ? `৳${finalPrice.toLocaleString('en-BD')}` : 'Free';
  $('checkoutOriginalPrice').textContent = `৳${originalPrice.toLocaleString('en-BD')}`;
  $('checkoutOriginalPrice').classList.toggle('hidden', originalPrice <= finalPrice);
  $('checkoutCourseThumbnail').src = course.thumbnail || '';
  $('checkoutCourseThumbnail').alt = `${course.title} thumbnail`;
  $('checkoutCourseTitle').textContent = course.title;
  $('checkoutCourseDescription').textContent = course.description || 'Practical lessons from CodeWithSiam.';
  $('checkoutCourseInstructor').textContent = `Instructor: ${course.instructor || 'CodeWithSiam'}`;
  $('checkoutStudentName').value = $('checkoutStudentName').value || user?.displayName || '';
  $('checkoutStudentEmail').value = $('checkoutStudentEmail').value || user?.email || '';
  $('checkoutAccountBadge').textContent = user ? `Signed in as ${user.email || 'student'}` : 'Sign in required';
  $('checkoutAccountHint').textContent = user ? 'Your signed-in account will be linked to this enrollment request.' : 'Sign in with Google to enroll in this course.';
  $('checkoutOriginalSummary').textContent = originalPrice > 0 ? `৳${originalPrice.toLocaleString('en-BD')}` : 'Free';
  $('checkoutDiscountSummary').textContent = originalPrice > finalPrice ? `-৳${(originalPrice - finalPrice).toLocaleString('en-BD')}` : '-৳0';
  $('checkoutTotalSummary').textContent = finalPrice > 0 ? `৳${finalPrice.toLocaleString('en-BD')}` : 'Free';
  renderPaymentOptions();
  $('checkoutContinuePayment').textContent = isFree ? 'Enroll free' : 'Continue';
  $('checkoutPaymentOptions').closest('label')?.classList.toggle('hidden', isFree);
  $('checkoutOrderNote').textContent = isFree ? 'No payment required · Instant enrollment' : 'One-time payment · Manual verification';
  $('checkoutTransactionId').required = !isFree;
  $('checkoutTransactionId').closest('label').classList.toggle('hidden', isFree);
  $('checkoutPaymentDetails').classList.toggle('hidden', isFree);
  $('checkoutPaymentHelp').classList.toggle('hidden', isFree);
  $('checkoutUpload').classList.toggle('hidden', isFree);
  $('checkoutPaymentConfirm').closest('label').classList.toggle('hidden', isFree);
  $('checkoutPayBtn').textContent = isFree ? 'Enroll free' : 'Confirm enrollment';
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
function validCheckoutEmail(value) {
  const email = String(value || '').trim();
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function bindCheckout() {
  const phone = $('checkoutPhone');
  const transaction = $('checkoutTransactionId');
  const pay = $('checkoutPayBtn');
  const name = $('checkoutStudentName');
  const email = $('checkoutStudentEmail');
  const confirmation = $('checkoutPaymentConfirm');
  if (!phone || !transaction || !pay || !name || !email || !confirmation || pay.dataset.bound) return;
  pay.dataset.bound = 'true';
  const isFree = () => {
    const price = Number(course?.price) || 0;
    const discount = Number(course?.discountPrice) || 0;
    return (discount > 0 && discount < price ? discount : price) <= 0;
  };
  const updatePayButton = () => {
    const selected = getCheckoutCountry();
    const validPhone = validCheckoutPhone(phone.value, selected.code);
    pay.disabled = Boolean(pay.dataset.processing)
      || !user
      || name.value.trim().length < 2
      || !validCheckoutEmail(email.value)
      || (!isFree() && (!validPhone || !transaction.value.trim() || !confirmation.checked));
  };
  const validateStudentDetails = () => {
    const selected = getCheckoutCountry();
    const validName = name.value.trim().length >= 2;
    const validEmail = validCheckoutEmail(email.value);
    const validPhone = isFree() || validCheckoutPhone(phone.value, selected.code);
    $('checkoutNameError').textContent = validName ? '' : 'Please enter your full name.';
    $('checkoutEmailError').textContent = validEmail ? '' : 'Please enter a valid email address.';
    $('checkoutPhoneError').textContent = validPhone ? '' : `Please enter a valid ${selected.country} phone number.`;
    if (!validName) name.focus();
    else if (!validEmail) email.focus();
    else if (!validPhone) phone.focus();
    return validName && validEmail && validPhone;
  };
  const setPaymentMethod = method => {
    const select = $('checkoutPaymentMethod');
    if (!paymentMethods[method] || !availablePaymentMethods().includes(method)) return;
    select.value = method;
    $('checkoutPaymentOptions').querySelectorAll('[data-payment-choice]').forEach(button => {
      const selected = button.dataset.paymentChoice === method;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    renderSelectedPaymentDetails();
  };
  const submitEnrollment = async () => {
    updatePayButton();
    if (pay.disabled) return;
    if (!user) {
      showAccessGate();
      return;
    }
    pay.dataset.processing = 'true';
    pay.disabled = true;
    pay.textContent = isFree() ? 'Enrolling...' : 'Submitting request...';
    try {
      if (isFree()) {
        const enrollment = await createFreeCourseEnrollment(user.uid, course.id);
        course.accessStatus = 'approved';
        course.accessSource = 'free';
        $('checkoutRequestId').textContent = enrollment.id;
        $('checkoutSuccessTitle').textContent = "You're enrolled!";
        $('checkoutSuccessText').textContent = 'Free enrollment is complete. Return to the course to start learning.';
        $('checkoutWhatsappBtn').classList.add('hidden');
        setCheckoutStep(4);
        return;
      }
      const amount = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price)
        ? Number(course.discountPrice)
        : Number(course.price);
      const screenshot = await compressPaymentScreenshot($('checkoutPaymentScreenshot')?.files?.[0]);
      const payment = await createPaymentSubmission({
        userId: user.uid,
        studentName: name.value.trim(),
        studentEmail: email.value.trim(),
        courseId: course.id,
        courseTitle: course.title,
        amount,
        method: $('checkoutPaymentMethod').value,
        transactionId: transaction.value.trim(),
        phone: normalizeCheckoutPhone(phone.value, getCheckoutCountry().code)
      });
      let screenshotWarning = '';
      if (screenshot) {
        try {
          const screenshotUrl = await uploadPaymentScreenshot(screenshot, user.uid, payment.id);
          await updatePaymentScreenshot(payment.id, screenshotUrl);
        } catch (error) {
          screenshotWarning = `Your request was received, but the screenshot could not be uploaded: ${error.message || 'upload failed'}. You can send it by WhatsApp.`;
        }
      }
      $('checkoutRequestId').textContent = payment.id;
      course.accessStatus = 'pending';
      $('checkoutSuccessTitle').textContent = 'Enrollment request received!';
      $('checkoutSuccessText').textContent = screenshotWarning || "We'll verify your payment and unlock the course shortly.";
      $('checkoutWhatsappBtn').classList.remove('hidden');
      setCheckoutStep(4);
      name.disabled = true;
      phone.disabled = true;
      transaction.disabled = true;
      confirmation.disabled = true;
    } catch (error) {
      $('checkoutStatus').textContent = error.message || 'Payment could not be submitted.';
      if (isFree()) $('checkoutFreeStatus').textContent = error.message || 'Free enrollment could not be completed.';
      pay.dataset.processing = '';
      pay.textContent = isFree() ? 'Enroll free' : 'Confirm enrollment';
      updatePayButton();
    }
  };

  name.addEventListener('input', () => {
    if (name.value.trim().length >= 2) $('checkoutNameError').textContent = '';
    updatePayButton();
  });
  email.addEventListener('input', () => {
    $('checkoutEmailError').textContent = email.value && !validCheckoutEmail(email.value)
      ? 'Please enter a valid email address.'
      : '';
    updatePayButton();
  });
  phone.addEventListener('input', () => {
    const selected = getCheckoutCountry();
    $('checkoutPhoneError').textContent = phone.value && !validCheckoutPhone(phone.value, selected.code)
      ? `Please enter a valid ${selected.country} phone number.`
      : '';
    updatePayButton();
  });
  transaction.addEventListener('input', () => {
    $('checkoutTransactionError').textContent = checkoutStep === 3 && !transaction.value.trim()
      ? 'Enter the transaction ID from your payment receipt.'
      : '';
    updatePayButton();
  });
  confirmation.addEventListener('change', updatePayButton);
  $('checkoutCountry').addEventListener('change', () => {
    const selected = getCheckoutCountry();
    phone.placeholder = selected.placeholder;
    phone.value = '';
    $('checkoutPhoneError').textContent = '';
    renderPaymentOptions();
    updatePayButton();
  });
  $('checkoutPaymentOptions').addEventListener('click', event => {
    const choice = event.target.closest('[data-payment-choice]');
    if (choice) setPaymentMethod(choice.dataset.paymentChoice);
  });
  $('checkoutPaymentMethod').addEventListener('change', renderSelectedPaymentDetails);
  $('checkoutContinueDetails').addEventListener('click', () => {
    $('checkoutFreeStatus').textContent = '';
    if (!validateStudentDetails()) return;
    $('checkoutPaymentOptions').classList.toggle('hidden', isFree());
    $('checkoutPaymentOptions').closest('label')?.classList.toggle('hidden', isFree());
    $('checkoutPaymentFreeNote')?.classList.toggle('hidden', !isFree());
    $('checkoutContinuePayment').textContent = isFree() ? 'Enroll free' : 'Continue';
    setCheckoutStep(2);
  });
  $('checkoutContinuePayment').addEventListener('click', () => {
    if (isFree()) {
      $('checkoutFreeStatus').textContent = '';
      submitEnrollment();
      return;
    }
    renderSelectedPaymentDetails();
    $('checkoutTransactionError').textContent = '';
    setCheckoutStep(3);
  });
  document.querySelectorAll('[data-checkout-back]').forEach(button => {
    button.addEventListener('click', () => setCheckoutStep(Number(button.dataset.checkoutBack)));
  });
  $('checkoutBackBtn').addEventListener('click', leaveCheckout);
  $('checkoutReturnCourse').addEventListener('click', leaveCheckout);
  $('checkoutCopyRecipient').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($('checkoutRecipient').textContent.trim());
      $('checkoutCopyRecipient').textContent = 'Copied';
      window.setTimeout(() => { $('checkoutCopyRecipient').textContent = 'Copy'; }, 1500);
    } catch (error) {
      $('checkoutStatus').textContent = error.message || 'Could not copy payment details. Please copy them manually.';
    }
  });
  $('checkoutCopyReference').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($('checkoutRequestId').textContent.trim());
      $('checkoutCopyReference').textContent = 'Copied';
      window.setTimeout(() => { $('checkoutCopyReference').textContent = 'Copy'; }, 1500);
    } catch (error) {
      $('checkoutSuccessText').textContent = error.message || 'Could not copy the reference. Please select and copy it manually.';
    }
  });
  $('checkoutPaymentScreenshot').addEventListener('change', () => {
    const file = $('checkoutPaymentScreenshot').files?.[0];
    $('checkoutScreenshotName').textContent = file?.name || 'Tap to choose an image · PNG or JPG';
  });
  pay.addEventListener('click', submitEnrollment);
  $('checkoutWhatsappBtn')?.addEventListener('click', () => {
    const amount = Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price);
    const method = $('checkoutPaymentMethod').value;
    const proofText = [
      'Hello Siam, I submitted a course payment.',
      `Student: ${name.value.trim() || user?.displayName || 'Student'}`,
      `Gmail: ${email.value.trim()}`,
      `Course: ${course.title}`,
      `Amount: ৳${amount.toLocaleString('en-BD')}`,
      `Payment method: ${paymentMethods[method]?.label || method}`,
      `Transaction ID: ${transaction.value.trim() || 'Not entered yet'}`,
      '',
      `Enrollment reference: ${$('checkoutRequestId').textContent}`,
      'I will attach my payment screenshot in this chat.'
    ].join('\n');
    window.open(`https://wa.me/8801644171751?text=${encodeURIComponent(proofText)}`, '_blank', 'noopener,noreferrer');
  });
  updatePayButton();
}
function renderPlayer() {
  const lesson = currentLesson();
  if (!hasLessonAccess(lesson)) {
    renderLockedLesson(lesson);
    return;
  }
  if (!lesson) { $('lessonPlayer').classList.add('hidden'); return; }
  $('lessonPlayer').classList.remove('hidden');
  const videoWrap = $('lessonVideo').closest('.lesson-video-wrap');
  resetLessonVideoSurface();
  setupWorkspaceSettings();
  $('lessonTitle').textContent = lesson.title;
  $('lessonDescription').textContent = lesson.description || '';
  $('lessonDuration').textContent = lesson.duration || '0 min';
  const youtubeLink = $('lessonYoutubeLink');
  const source = getLessonVideoSource(lesson);
  const id = source?.type === 'youtube' ? source.id : '';
  const youtubeUrl = source?.type === 'youtube' ? source.url : '';
  youtubeLink.classList.toggle('hidden', lesson.showYoutubeLink !== true || !youtubeUrl);
  youtubeLink.href = youtubeUrl;
  const autoplayRequested = new URLSearchParams(location.search).get('autoplay') === '1';

  if (source?.type === 'mp4') {
    $('lessonMp4').classList.remove('hidden');
    $('lessonMp4').src = source.url;
    setupCustomVideoPlayer(true);
    if (autoplayRequested || workspaceSettings.autoplay) $('lessonMp4').play().catch(() => { });
  } else if (source?.type === 'youtube' && id) {
    ensureLessonVideoFrame();
    $('lessonVideo').classList.remove('hidden');
    $('lessonVideo').src = `https://www.youtube.com/embed/${id}?enablejsapi=1&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&origin=${encodeURIComponent(location.origin)}&autoplay=${autoplayRequested || workspaceSettings.autoplay ? 1 : 0}`;
    setupYoutubePlayer(id, youtubeUrl, autoplayRequested || workspaceSettings.autoplay);
  } else {
    const unavailable = document.createElement('div');
    unavailable.className = 'lesson-video-unavailable';
    unavailable.innerHTML = '<i class="fa-solid fa-video-slash" aria-hidden="true"></i><strong>Video is not available yet</strong><span>The lesson is published, but its YouTube or MP4 video URL has not been loaded. Please ask the course admin to publish the lesson video and deploy the Firestore rules.</span>';
    videoWrap?.appendChild(unavailable);
  }

  if (videoWrap && !videoWrap.dataset.controlsReady) {
    videoWrap.dataset.controlsReady = 'true';
    const requestFullscreen = async target => {
      const method = target?.requestFullscreen || target?.webkitRequestFullscreen;
      if (method) await method.call(target).catch(() => { });
    };
    const enterFullscreen = async event => {
      event?.preventDefault();
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen;
        if (exit) await exit.call(document).catch(() => { });
        return;
      }
      await requestFullscreen(videoWrap);
    };
    videoWrap.addEventListener('dblclick', enterFullscreen);
    $('lessonVideo').addEventListener('dblclick', event => enterFullscreen(event));
    $('lessonMp4').addEventListener('dblclick', event => enterFullscreen(event));
  }
  const lessonIndex = lessons.indexOf(lesson);
  $('previousLesson').disabled = lessonIndex === 0;
  $('nextLesson').disabled = lessonIndex === lessons.length - 1;
  $('mobilePlayerPreviousButton').disabled = lessonIndex === 0;
  $('mobilePlayerNextButton').disabled = lessonIndex === lessons.length - 1;
  $('previousLesson').onclick = () => go(lessons[lessons.indexOf(lesson) - 1]?.id);
  $('nextLesson').onclick = () => go(lessons[lessons.indexOf(lesson) + 1]?.id);
  $('completeLesson').textContent = completed().has(lesson.id) ? 'Completed' : 'Complete and Continue';
  $('completeLesson').onclick = complete;
  $('sidebarCourseTitle').textContent = course.title;
  playlist($('lessonPlaylist'), true);
  setProgress();
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileCourseOverlayOpen) {
    event.preventDefault();
    closeMobileCourseOverlay();
    return;
  }
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
    if (usingMp4) video.paused ? video.play().catch(() => { }) : video.pause();
    else youtubePlayer.getPlayerState?.() === 1 ? youtubePlayer.pauseVideo() : youtubePlayer.playVideo();
  }
});
function render() {
  if (!course) return;
  const hasLessonRoute = Boolean(selectedLessonId);
  const routedLesson = currentLesson();
  if (hasLessonRoute && routedLesson && !hasLessonAccess(routedLesson)) {
    renderLockedLesson(routedLesson);
    syncMobileCourseExperience();
    return;
  }
  $('lessonLocked').classList.add('hidden');
  $('courseOverview').classList.toggle('hidden', hasLessonRoute);
  $('lessonPlayer').classList.toggle('hidden', !hasLessonRoute);
  if (hasLessonRoute) renderPlayer(); else renderOverview();
  syncMobileCourseExperience();
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
async function load(generation = authLoadGeneration) {
  const all = await withTimeout(fetchAllCourses({ includeLessons: true }));
  if (generation !== authLoadGeneration) return;
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
    if (generation !== authLoadGeneration) return;
    progress = { ...progress, ...cloudProgress };
  }
  localStorage.setItem(progressKey, JSON.stringify(progress));
  lessons = orderedLessons(course);
  if (!selectedLessonId && user && hasCourseAccess()) selectedLessonId = progress[course.id]?.lastLessonId || lessons.find(lesson => !completed().has(lesson.id))?.id || lessons[0]?.id;
  $('learningLoading').classList.add('hidden');
  render();
  if (user && new URLSearchParams(location.search).get('enroll') === '1'
    && !hasCourseAccess() && course.accessStatus !== 'pending') {
    beginCheckout();
  }
}
$('learningGoogleBtn').onclick = () => redirectToAuthPrompt('Sign in or create an account to enroll and access private lessons.');
$('refreshAccessBtn')?.addEventListener('click', async () => {
  const button = $('refreshAccessBtn');
  button.disabled = true;
  $('learningAuthStatus').textContent = 'Checking the latest access...';
  try {
    await user?.reload();
    await load(authLoadGeneration);
  } catch (error) {
    $('learningAuthStatus').textContent = error.message || 'Access could not be refreshed.';
  } finally {
    button.disabled = false;
  }
});
$('accessContinueBtn').onclick = () => {
  $('accessIntro').classList.add('hidden');
  $('accessContinueBtn').classList.add('hidden');
  $('learningGoogleBtn').classList.remove('hidden');
  $('learningGoogleBtn').textContent = 'Sign In or Create Account';
};
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
  if (mobileCourseOverlayOpen) {
    mobileCourseHistoryEntry = false;
    setMobileCourseOverlayVisible(false);
    return;
  }
  const nextParams = new URLSearchParams(location.search);
  const nextPrettyPath = location.pathname.match(/^\/courses\/([^/]+)(?:\/lectures\/([^/]+))?\/?$/);
  selectedLessonId = nextParams.get('lesson') || nextPrettyPath?.[2] || null;
  render();
});
observeAuthState(nextUser => {
  if (user?.uid !== nextUser?.uid) {
    $('checkoutStudentEmail').value = nextUser?.email || '';
    $('checkoutEmailError').textContent = '';
  }
  user = nextUser;
  const generation = ++authLoadGeneration;
  if (!nextUser) {
    checkoutActive = false;
    resetLessonVideoSurface();
    $('lessonPlayer').classList.add('hidden');
    $('learningLoading').classList.remove('hidden');
  }
  load(generation).catch(error => {
    if (generation !== authLoadGeneration) return;
    const isPermissionError = error?.code === 'permission-denied'
      || /permission|insufficient/i.test(error?.message || '');
    $('learningLoading').innerHTML = isPermissionError
      ? '<div class="course-error-card"><i class="fa-solid fa-lock"></i><h1>Course access needs approval</h1><p>Sign in with the approved Google account, or ask the course admin to grant access to your email.</p><button class="learning-button primary" type="button" onclick="location.reload()">Try again</button><a class="learning-button" href="index.html#course">Back to courses</a></div>'
      : `<div class="course-error-card"><i class="fa-solid fa-triangle-exclamation"></i><h1>Unable to load this course</h1><p>${error.message || 'Please refresh the page and try again.'}</p><button class="learning-button primary" type="button" onclick="location.reload()">Try again</button><a class="learning-button" href="index.html#course">Back to courses</a></div>`;
    console.error(error);
  });
});

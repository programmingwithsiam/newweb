import { fetchAllCourses, saveUserCourseProgress, createPaymentSubmission, extractYoutubeId } from './courses-db.js';
import { observeAuthState, signInWithGoogle } from './auth.js';

const progressKey = 'siam_portfolio_course_progress';
const params = new URLSearchParams(location.search);
const courseId = params.get('course');
const startsEnrollment = params.get('enroll') === '1';
let user = null;
let course = null;
let lessons = [];
let selectedLessonId = params.get('lesson');
let progress = {};

const $ = id => document.getElementById(id);
const getLocalProgress = () => { try { return JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch { return {}; } };
const completed = () => new Set(progress[course?.id]?.completedLessons || []);
const percent = () => lessons.length ? Math.round((completed().size / lessons.length) * 100) : 0;
const route = lessonId => `course.html?course=${encodeURIComponent(course.id)}${lessonId ? `&lesson=${encodeURIComponent(lessonId)}` : ''}`;
function go(lessonId = '') {
  if (lessonId && (!user || course?.accessDenied)) {
    showAccessGate({ signedIn: Boolean(user) });
    return;
  }
  history.pushState({}, '', route(lessonId));
  selectedLessonId = lessonId || null;
  render();
}
function orderedLessons(data) {
  const fullLessons = new Map((data.lessons || []).map(lesson => [lesson.id, lesson]));
  return (data.modules || []).flatMap(module => (module.lessons || []).map(lesson => ({
    ...(fullLessons.get(lesson.id) || {}),
    ...lesson,
    moduleId: module.id,
    moduleTitle: module.title
  })));
}
function currentLesson() { return lessons.find(lesson => lesson.id === selectedLessonId) || lessons[0] || null; }
function youtubeId(lesson) { return lesson?.youtubeVideoId || extractYoutubeId(lesson?.youtubeUrl || lesson?.videoUrl || ''); }
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
  controls.innerHTML = '<input class="custom-video-progress" type="range" min="0" max="100" value="0" aria-label="Video progress"><div class="custom-video-toolbar"><button type="button" data-video-action="play" aria-label="Play or pause">Play</button><button type="button" data-video-action="mute" aria-label="Mute or unmute">Mute</button><span class="custom-video-time">0:00 / 0:00</span><button type="button" data-video-action="fullscreen" aria-label="Fullscreen">Fullscreen</button></div>';
  wrap.appendChild(controls);
  const progressInput = controls.querySelector('.custom-video-progress');
  const playButton = controls.querySelector('[data-video-action="play"]');
  const muteButton = controls.querySelector('[data-video-action="mute"]');
  const timeLabel = controls.querySelector('.custom-video-time');
  const formatTime = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  const updateTime = () => {
    progressInput.value = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration || 0)}`;
  };
  playButton.addEventListener('click', () => video.paused ? video.play() : video.pause());
  muteButton.addEventListener('click', () => { video.muted = !video.muted; muteButton.textContent = video.muted ? 'Unmute' : 'Mute'; });
  controls.querySelector('[data-video-action="fullscreen"]').addEventListener('click', () => wrap.requestFullscreen?.());
  progressInput.addEventListener('input', () => { if (video.duration) video.currentTime = (progressInput.value / 100) * video.duration; });
  video.addEventListener('play', () => { playButton.textContent = 'Pause'; });
  video.addEventListener('pause', () => { playButton.textContent = 'Play'; });
  video.addEventListener('timeupdate', updateTime);
  video.addEventListener('loadedmetadata', updateTime);
  video.addEventListener('loadedmetadata', () => {
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
  });
}
function setProgress() {
  const value = percent();
  ['overviewProgressBar', 'sidebarProgressBar'].forEach(id => { if ($(id)) $(id).style.width = `${value}%`; });
  if ($('overviewProgressText')) $('overviewProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressText')) $('sidebarProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressCount')) $('sidebarProgressCount').textContent = `${completed().size} / ${lessons.length} lessons`;
}
function playlist(target, compact = false) {
  const groups = new Map();
  lessons.forEach(lesson => { if (!groups.has(lesson.moduleId)) groups.set(lesson.moduleId, { title: lesson.moduleTitle, lessons: [] }); groups.get(lesson.moduleId).lessons.push(lesson); });
  target.innerHTML = [...groups.values()].map(group => `<section class="module-block"><div class="module-title">${group.title || 'Course Content'}</div>${group.lessons.map((lesson, index) => { const isComplete = completed().has(lesson.id); const isCurrent = lesson.id === selectedLessonId; const locked = !user || course?.accessDenied; return `<button class="lesson-row ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''}" data-lesson-id="${lesson.id}" type="button"><span class="lesson-state">${isComplete ? '✓' : isCurrent ? '▶' : '○'}</span><span class="lesson-row-title">${index + 1}. ${lesson.title}</span><span class="lesson-row-meta"><span>${lesson.duration || '0 min'}</span><span class="lesson-row-action">${locked ? 'Locked' : isComplete ? 'Review' : 'Start'}</span></span></button>`; }).join('')}</section>`).join('');
  target.querySelectorAll('[data-lesson-id]').forEach(button => button.addEventListener('click', () => go(button.dataset.lessonId)));
}
function renderOverview() {
  const lesson = currentLesson();
  const hasAccess = Boolean(user && !course.accessDenied);
  $('courseTitle').textContent = course.title;
  $('courseDescription').textContent = course.description || '';
  $('courseInstructor').textContent = `Instructor: ${course.instructor || 'CodeWithSiam'}`;
  $('courseLessonCount').textContent = `${lessons.length} lessons`;
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
  $('overviewStartBtn').textContent = hasAccess && lesson && completed().has(lesson.id) ? 'Review Lesson' : 'Enroll Now';
  $('overviewStartBtn').classList.toggle('hidden', !hasAccess);
  $('overviewStartBtn').disabled = !hasAccess || !lesson;
  $('overviewStartBtn').onclick = () => hasAccess && lesson && go(lesson.id);
  $('overviewEnrollBtn').classList.toggle('hidden', hasAccess);
  $('overviewEnrollBtn').disabled = !lesson;
  $('overviewEnrollBtn').onclick = () => {
    if (!user) {
      showAccessGate();
      return;
    }
    $('courseCheckout')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('checkoutPhone')?.focus();
  };
  $('courseEnrollmentStatus').classList.toggle('hidden', !hasAccess);
  renderCheckout(discountPrice, originalPrice, hasAccess);
  $('playlistCount').textContent = `${lessons.length} lessons`;
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
  const duration = course.duration || `${lessons.reduce((sum, item) => sum + parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10), 0)} min`;
  const benefits = [`${lessons.length} lectures`, duration];
  if (course.accessDuration) benefits.push(`Access on mobile and desktop (${course.accessDuration})`);
  if (course.certificateAvailable === true) benefits.push('Certificate of completion');
  $('checkoutBenefits').innerHTML = benefits.map(item => `<span class="checkout-benefit">✓ ${item}</span>`).join('');
  const method = $('checkoutPaymentMethod').value;
  const number = course.payment?.[method] || 'Contact admin for payment instructions';
  $('checkoutPaymentInstruction').textContent = `${method === 'bkash' ? 'bKash' : 'Nagad'}: ${number}`;
  $('checkoutPayBtn').textContent = `Pay ৳${finalPrice.toLocaleString('en-BD')}`;
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
  if (!phone || !transaction || !pay || pay.dataset.bound) return;
  pay.dataset.bound = 'true';
  const update = () => { const selected = getCheckoutCountry(); const valid = validCheckoutPhone(phone.value, selected.code); $('checkoutPhoneError').textContent = phone.value && !valid ? `Please enter a valid ${selected.country} phone number` : ''; pay.disabled = !valid || !transaction.value.trim() || Boolean(pay.dataset.processing); };
  phone.addEventListener('input', update);
  transaction.addEventListener('input', update);
  $('checkoutCountry').addEventListener('change', () => { const selected = getCheckoutCountry(); phone.placeholder = selected.placeholder; phone.value = ''; $('checkoutPhoneError').textContent = ''; update(); });
  $('checkoutPaymentMethod').addEventListener('change', () => renderCheckout(Number(course.discountPrice) || Number(course.price) || 0, Number(course.price) || 0, false));
  pay.addEventListener('click', async () => {
    update();
    if (pay.disabled) return;
    if (!user) { $('checkoutStatus').textContent = 'Login to continue.'; showAccessGate(); return; }
    pay.dataset.processing = 'true'; pay.disabled = true; pay.textContent = 'Processing...';
    try {
      const screenshotUrl = await compressPaymentScreenshot($('checkoutPaymentScreenshot')?.files?.[0]);
      await createPaymentSubmission({ userId: user.uid, courseId: course.id, courseTitle: course.title, amount: Number(course.discountPrice) > 0 && Number(course.discountPrice) < Number(course.price) ? Number(course.discountPrice) : Number(course.price), method: $('checkoutPaymentMethod').value, transactionId: transaction.value.trim(), phone: normalizeCheckoutPhone(phone.value, getCheckoutCountry().code), screenshotUrl });
      $('checkoutStatus').textContent = 'Payment submitted — waiting for verification.';
      pay.textContent = 'Payment submitted';
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
  if (!lesson) { $('lessonPlayer').classList.add('hidden'); return; }
  $('lessonPlayer').classList.remove('hidden');
  $('lessonTitle').textContent = lesson.title;
  $('lessonDescription').textContent = lesson.description || '';
  $('lessonDuration').textContent = lesson.duration || '0 min';
  const youtubeLink = $('lessonYoutubeLink');
  const youtubeUrl = lesson.youtubeUrl || (youtubeId(lesson) ? `https://www.youtube.com/watch?v=${youtubeId(lesson)}` : '');
  youtubeLink.classList.toggle('hidden', lesson.showYoutubeLink !== true || !youtubeUrl);
  youtubeLink.href = youtubeUrl;
  
  const isMp4 = lesson.videoType === 'mp4' || (lesson.videoUrl && lesson.videoUrl.toLowerCase().endsWith('.mp4'));
  const id = youtubeId(lesson);
  
  if (isMp4 && lesson.videoUrl) {
    // Display MP4 video
    $('lessonVideo').classList.add('hidden');
    $('lessonMp4').classList.remove('hidden');
    $('lessonMp4').src = lesson.videoUrl;
    setupCustomVideoPlayer(true);
  } else if (id) {
    // Display YouTube video
    $('lessonVideo').classList.remove('hidden');
    $('lessonMp4').classList.add('hidden');
    $('lessonVideo').src = `https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1`;
    $('lessonMp4').removeAttribute('src');
  } else {
    // No valid video
    $('lessonVideo').classList.add('hidden');
    $('lessonMp4').classList.add('hidden');
  }
  
  const videoWrap = $('lessonVideo').closest('.lesson-video-wrap');
  if (videoWrap && !videoWrap.dataset.controlsReady) {
    videoWrap.dataset.controlsReady = 'true';
    videoWrap.addEventListener('dblclick', async () => {
      if (document.fullscreenElement) await document.exitFullscreen().catch(() => {});
      else {
        try { await videoWrap.requestFullscreen?.(); } catch {}
      }
    });
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
  if (!video || video.classList.contains('hidden')) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    video.currentTime = Math.max(0, Math.min(video.duration || Infinity, video.currentTime + (event.key === 'ArrowRight' ? 5 : -5)));
  }
  if (event.key === ' ' || event.key === 'k' || event.key === 'K') {
    event.preventDefault();
    video.paused ? video.play().catch(() => {}) : video.pause();
  }
});
function render() {
  if (!course) return;
  const hasLessonRoute = Boolean(selectedLessonId);
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
  await saveUserCourseProgress(user.uid, course.id, updated).catch(error => console.error('Progress sync failed:', error));
  const next = lessons[lessons.indexOf(lesson) + 1];
  if (next) go(next.id); else render();
}
async function load() {
  const all = await fetchAllCourses();
  course = all.find(item => item.id === courseId);
  if (!course) {
    $('learningLoading').innerHTML = '<div class="course-error-card"><i class="fa-solid fa-compass"></i><h1>Course not found</h1><p>Choose a course from the CodeWithSiam course library to continue.</p><a class="learning-button primary" href="index.html">Browse Courses</a></div>';
    return;
  }
  bindCheckout();
  if (!user) {
    lessons = orderedLessons(course);
    $('learningLoading').classList.add('hidden');
    selectedLessonId = null;
    render();
    return;
  }
  if (course.accessDenied) {
    lessons = orderedLessons(course);
    $('learningLoading').classList.add('hidden');
    selectedLessonId = null;
    render();
    return;
  }
  $('learningLogin').classList.add('hidden');
  progress = getLocalProgress();
  const cloud = (await import('./courses-db.js')).fetchUserProgress;
  const cloudProgress = await cloud(user.uid).catch(() => ({}));
  progress = { ...progress, ...cloudProgress };
  localStorage.setItem(progressKey, JSON.stringify(progress));
  lessons = orderedLessons(course);
  if (!selectedLessonId) selectedLessonId = progress[course.id]?.lastLessonId || lessons.find(lesson => !completed().has(lesson.id))?.id || lessons[0]?.id;
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
        const compressed = canvas.toDataURL('image/jpeg', 0.58);
        if (compressed.length > 900 * 1024) reject(new Error('Screenshot is too large. Please use a smaller image.'));
        else resolve(compressed);
      };
      image.onerror = () => reject(new Error('Screenshot could not be read.'));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Screenshot could not be loaded.'));
    reader.readAsDataURL(file);
  });
}
window.addEventListener('popstate', () => { const nextParams = new URLSearchParams(location.search); selectedLessonId = nextParams.get('lesson'); render(); });
observeAuthState(nextUser => { user = nextUser; load().catch(error => { $('learningLoading').textContent = 'Unable to load this course.'; console.error(error); }); });

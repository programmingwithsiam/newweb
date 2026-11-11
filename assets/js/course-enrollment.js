import { createPaymentSubmission, fetchAllCourses, updatePaymentScreenshot, uploadPaymentScreenshot } from './courses-db.js';
import { observeAuthState, signInWithGoogle } from './auth.js';
import { getCourseThumbnail } from './page-renderers.js?v=20261008-course-image-1';

const $ = id => document.getElementById(id);
const currencyInfo = {
  BDT: { symbol: '৳', locale: 'en-BD' },
  USD: { symbol: '$', locale: 'en-US' },
  INR: { symbol: '₹', locale: 'en-IN' },
};
const paymentMethods = {
  bKash: 'bkash',
  Rocket: 'rocket',
  Nagad: 'nagad',
  Bank: 'bank',
  Card: 'credit_card',
  PayPal: 'paypal',
  UPI: 'upi',
};
const themeFallbacks = [
  { words: ['python'], accent: '#3776ab', success: '#ffd43b' },
  { words: ['sql', 'database'], accent: '#f29111', success: '#31b6e8' },
  { words: ['web', 'javascript', 'react'], accent: '#e5a823', success: '#61dafb' },
  { words: ['ai', 'claude', 'machine learning'], accent: '#ec6a3c', success: '#7fd18b' },
];
let currentUser = null;
let currentCourse = null;
let requestInProgress = false;

function normalizeText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function getRequestedCourseId() {
  const queryId = new URLSearchParams(location.search).get('course');
  const routeId = location.pathname.match(/^\/courses\/([^/]+)\/?$/)?.[1];
  return queryId || (routeId ? decodeURIComponent(routeId) : '');
}

function getFinalPrice(course) {
  const price = Math.max(0, Number(course.price) || 0);
  const discount = Number(course.discountPrice);
  return discount > 0 && discount < price ? discount : price;
}

function setCourseColor(course) {
  const words = normalizeText(`${course.title} ${course.category}`);
  const selected = themeFallbacks.find(theme => theme.words.some(word => words.includes(word)));
  const accent = selected?.accent || '#ec6a3c';
  const success = selected?.success || '#7fd18b';
  document.documentElement.style.setProperty('--ac', accent);
  document.documentElement.style.setProperty('--ok', success);
}

function applyThumbnailColor(image, course) {
  const fallback = () => setCourseColor(course);
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 24;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) {
      fallback();
      return;
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const colors = new Map();
    for (let index = 0; index < data.length; index += 4) {
      const [red, green, blue, alpha] = data.slice(index, index + 4);
      if (alpha < 160) continue;
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      if (max - min < 32 || max < 50 || min > 235) continue;
      const key = [red, green, blue].map(value => Math.round(value / 32) * 32).join(',');
      colors.set(key, (colors.get(key) || 0) + 1);
    }
    const dominant = [...colors.entries()].sort((left, right) => right[1] - left[1])[0]?.[0];
    if (!dominant) {
      fallback();
      return;
    }
    const [red, green, blue] = dominant.split(',').map(Number);
    const accent = `#${[red, green, blue].map(value => Math.min(255, value).toString(16).padStart(2, '0')).join('')}`;
    document.documentElement.style.setProperty('--ac', accent);
    document.documentElement.style.setProperty('--ok', accent);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'SecurityError') {
      fallback();
      return;
    }
    throw error;
  }
}

function formatBDT(amount) {
  return `৳${Number(amount || 0).toLocaleString('en-BD')}`;
}

function safeImageUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(value, location.href);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

function renderCourse(course) {
  currentCourse = course;
  const price = Math.max(0, Number(course.price) || 0);
  const finalPrice = getFinalPrice(course);
  const discounted = finalPrice < price;
  const lessons = (course.modules || []).flatMap(module => module.lessons || []);
  const lessonCount = Number(course.totalLessonCount) || lessons.length;
  const durationMinutes = lessons.reduce((total, lesson) => {
    const minutes = Number.parseInt(String(lesson.duration || '').match(/\d+/)?.[0] || '0', 10);
    return total + minutes;
  }, 0);
  const duration = course.duration || (durationMinutes ? `${durationMinutes} min` : 'Self-paced');
  const instructor = course.instructor || 'CodeWithSiam';
  const courseTopic = /python/i.test(course.title) ? 'Python' : /\bsql\b/i.test(course.title) ? 'SQL' : course.category || 'Programming';

  document.title = `${course.title} — CodeWithSiam`;
  $('courseCategory').textContent = `Course · ${courseTopic}`;
  $('courseTitle').textContent = course.title;
  $('courseDescription').textContent = course.description || `Learn ${course.title} with structured, practical lessons.`;
  $('coursePrice').textContent = formatBDT(finalPrice);
  $('courseOriginalPrice').textContent = formatBDT(price);
  $('courseOriginalPrice').hidden = !discounted;
  $('courseDiscount').textContent = discounted ? `${Math.round((price - finalPrice) / price * 100)}% off` : '';
  $('courseDiscount').hidden = !discounted;
  $('courseSavings').textContent = discounted ? `· you save ${formatBDT(price - finalPrice)} · one-time payment` : '· one-time payment';
  $('enr2').textContent = finalPrice > 0 ? `Enroll now · ${formatBDT(finalPrice)}` : 'Enroll free';
  $('n1').textContent = finalPrice > 0 ? 'Continue to payment' : 'Submit free enrollment request';
  $('courseEnrollmentState').textContent = '';
  if (currentUser && course.accessStatus === 'pending') {
    $('courseEnrollmentState').textContent = 'Your enrollment request is waiting for admin approval.';
    $('enr2').disabled = true;
  } else if (currentUser && course.accessStatus === 'approved') {
    $('courseEnrollmentState').textContent = 'You are already enrolled in this course.';
    $('enr2').disabled = true;
  } else {
    $('enr2').disabled = false;
  }
  $('courseThumbTitle').textContent = course.title;
  $('courseInstructor').textContent = instructor;
  $('instructorHeading').textContent = instructor;
  $('instructorAvatar').textContent = instructor.trim().charAt(0).toUpperCase() || 'C';
  $('instructorBio').textContent = `${instructor} teaches this ${courseTopic} course. ${course.description || ''}`.trim();
  $('courseLessonCount').textContent = `${lessonCount} ${lessonCount === 1 ? 'lesson' : 'lessons'}`;
  $('courseDuration').textContent = duration;
  $('courseDurationMeta').textContent = duration;
  $('courseLevel').textContent = course.level || course.difficulty || 'Self-paced';

  const thumbnail = safeImageUrl(course.thumbnail) || safeImageUrl(getCourseThumbnail({ ...course, thumbnail: '' }));
  const thumbnailElement = $('courseThumb');
  thumbnailElement.hidden = !thumbnail;
  $('tilt').hidden = Boolean(thumbnail);
  if (thumbnail) {
    thumbnailElement.onload = () => applyThumbnailColor(thumbnailElement, course);
    thumbnailElement.onerror = () => {
      thumbnailElement.hidden = true;
      $('tilt').hidden = false;
      setCourseColor(course);
    };
    thumbnailElement.src = thumbnail;
    thumbnailElement.alt = `${course.title} course thumbnail`;
  } else {
    thumbnailElement.removeAttribute('src');
    setCourseColor(course);
  }

  const curriculum = $('courseCurriculum');
  curriculum.replaceChildren();
  const outcomes = $('courseOutcomes');
  outcomes.replaceChildren();
  let lessonNumber = 0;
  lessons.forEach(lesson => {
    lessonNumber += 1;
    const row = document.createElement('div');
    row.className = 'row';
    const label = document.createElement('span');
    label.append(document.createTextNode(`${lessonNumber}. ${lesson.title || 'Untitled lesson'}`));
    if (lesson.duration) {
      const durationLabel = document.createElement('small');
      durationLabel.textContent = ` · ${lesson.duration}`;
      label.append(durationLabel);
    }
    row.append(label);
    if (lesson.isFreePreview === true || lesson.freePreview === true) {
      const free = document.createElement('span');
      free.className = 'free';
      free.textContent = 'Free preview';
      row.append(free);
    }
    curriculum.append(row);

    if (lessonNumber <= 4) {
      const outcome = document.createElement('div');
      outcome.textContent = lesson.title || 'Course lesson';
      outcomes.append(outcome);
    }
  });
  if (!lessons.length) {
    const empty = document.createElement('div');
    empty.className = 'row';
    empty.textContent = 'Course lessons will be added soon.';
    curriculum.append(empty);
    $('outcomesSection').hidden = true;
  } else {
    $('outcomesSection').hidden = false;
  }

  const about = $('audienceSection').querySelector('.aud');
  about.replaceChildren();
  const aboutCard = document.createElement('div');
  const aboutTitle = document.createElement('h3');
  aboutTitle.textContent = courseTopic;
  const aboutText = document.createElement('p');
  aboutText.textContent = course.description || `A structured course covering ${course.title}.`;
  aboutCard.append(aboutTitle, aboutText);
  about.append(aboutCard);

  const usd = Math.round(finalPrice / 122);
  const inr = Math.round(finalPrice * 0.68);
  window.M.bKash.cur = formatBDT(finalPrice);
  window.M.Rocket.cur = formatBDT(finalPrice);
  window.M.Nagad.cur = formatBDT(finalPrice);
  window.M.Bank.cur = formatBDT(finalPrice);
  window.M.Card.cur = `$${usd.toLocaleString('en-US')}`;
  window.M.PayPal.cur = `$${usd.toLocaleString('en-US')}`;
  window.M.UPI.cur = `₹${inr.toLocaleString('en-IN')}`;
  if (course.payment?.bkash) window.M.bKash.n = course.payment.bkash;
  if (course.payment?.rocket) window.M.Rocket.n = course.payment.rocket;
  if (course.payment?.nagad) window.M.Nagad.n = course.payment.nagad;
  window.country();
}

function setSignedInUser(user) {
  const previousUid = currentUser?.uid || '';
  currentUser = user;
  const button = $('courseSignIn');
  const status = $('courseAuthStatus');
  if (user) {
    button.hidden = true;
    status.textContent = `Signed in as ${user.email || 'your account'}`;
    if (!$('nm').value.trim()) $('nm').value = user.displayName || '';
    $('em').value = user.email || '';
    $('em').readOnly = true;
  } else {
    button.hidden = false;
    status.textContent = 'Sign in with Google before submitting an enrollment request.';
    $('em').readOnly = false;
  }
  if (user && user.uid !== previousUid && currentCourse) loadCourse();
}

function setPageError(message) {
  $('courseLoadStatus').textContent = message;
  $('courseTitle').textContent = 'Course unavailable';
  $('enr2').disabled = true;
}

async function loadCourse() {
  try {
    const courses = await fetchAllCourses({ includeLessons: false });
    const requestedId = getRequestedCourseId();
    const selected = requestedId
      ? courses.find(course => course.id === requestedId)
      : courses[0];
    if (!selected) {
      setPageError('This course could not be found. Return to the course list and choose another course.');
      return;
    }
    renderCourse(selected);
  } catch (error) {
    console.error('Course page data could not be loaded:', error);
    setPageError(error.message || 'Could not load this course. Please try again.');
  }
}

function validateStudentDetails() {
  const country = window.CT[Number($('dial').value)];
  const phoneDigits = $('tel').value.replace(/\D/g, '');
  let valid = true;
  $('e1').textContent = $('nm').value.trim().length > 1 ? '' : 'Please enter your full name.';
  $('e2').textContent = currentUser?.email || /^\S+@\S+\.\S+$/.test($('em').value.trim()) ? '' : 'Enter a valid email address.';
  $('e3').textContent = country && phoneDigits.length === country[4] ? '' : `Enter a valid ${country?.[4] || ''}-digit number for ${country?.[1] || 'your country'}.`;
  if (!$('e1').textContent && $('e2').textContent === '' && !$('e3').textContent) return true;
  valid = false;
  return valid;
}

function getPaidAmount() {
  const raw = String(window.M[window.cur]?.cur || '').replace(/[^\d.]/g, '');
  const paidAmount = Number(raw);
  if (!Number.isFinite(paidAmount) || paidAmount <= 0) throw new Error('The displayed payment amount is invalid.');
  const currency = String(window.M[window.cur]?.cur || '').trim().charAt(0);
  const paidCurrency = currency === '$' ? 'USD' : currency === '₹' ? 'INR' : 'BDT';
  return { paidAmount, paidCurrency };
}

function getPaymentPhone() {
  const country = window.CT[Number($('dial').value)];
  if (!country) throw new Error('Choose a valid country code.');
  return `${country[3]}${$('tel').value.replace(/\D/g, '')}`;
}

function validateScreenshot(file) {
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    throw new Error('Payment screenshots must be JPG, PNG, or WebP.');
  }
  if (file.size > 1048576) throw new Error('Payment screenshots must be 1 MB or smaller.');
}

function showEnrollmentConfirmation(payment, { free = false, proofError = '' } = {}) {
  const firstName = $('nm').value.trim().split(/\s+/)[0];
  $('ref').textContent = payment.id;
  $('dn').textContent = firstName;
  $('proofUploadStatus').textContent = proofError;
  $('wa').hidden = free;
  if (free) {
    $('p4').querySelector('.d2').textContent = `Thanks ${firstName}. Your free enrollment request is waiting for admin approval. You will receive access after it is approved.`;
  }
  const message = free
    ? `Free enrollment request for ${currentCourse.title}. Request ${payment.id}.`
    : `Payment proof for ${currentCourse.title}. Request ${payment.id}, ${window.cur} TrxID ${$('trx').value.trim()}`;
  $('wa').href = `https://wa.me/8801644171751?text=${encodeURIComponent(`Hi Siam! ${message}`)}`;
  window.go(4);
  window.confetti();
}

async function submitEnrollment() {
  if (requestInProgress) return;
  $('submitStatus').textContent = '';
  if (!currentUser) {
    $('submitStatus').textContent = 'Sign in with Google before submitting your enrollment request.';
    $('courseSignIn').hidden = false;
    return;
  }
  if (!currentCourse) {
    $('submitStatus').textContent = 'Course details are still loading. Please try again in a moment.';
    return;
  }
  if (!validateStudentDetails()) {
    window.go(1);
    return;
  }
  if (!$('ck').checked) {
    $('submitStatus').textContent = 'Confirm that you completed the payment before submitting.';
    return;
  }
  const method = paymentMethods[window.cur];
  if (!method) {
    $('submitStatus').textContent = 'The selected payment method is not supported. Please choose another method.';
    return;
  }
  if (window.cur === 'UPI' && $('dial').value !== '1') {
    $('submitStatus').textContent = 'UPI is only available for India. Choose India or select another payment method.';
    return;
  }
  const screenshot = $('fl').files?.[0] || null;
  try {
    validateScreenshot(screenshot);
  } catch (error) {
    $('submitStatus').textContent = error.message;
    return;
  }

  const originalAmount = Math.max(0, Number(currentCourse.price) || 0);
  const amount = getFinalPrice(currentCourse);
  const rawTransactionId = $('trx').value.trim();
  if (!rawTransactionId) {
    $('submitStatus').textContent = 'Enter your transaction ID.';
    return;
  }
  const { paidAmount, paidCurrency } = getPaidAmount();
  requestInProgress = true;
  const button = $('go');
  button.disabled = true;
  button.textContent = 'Submitting request…';
  $('submitStatus').textContent = 'Sending your enrollment request securely…';
  try {
    const payment = await createPaymentSubmission({
      userId: currentUser.uid,
      studentName: $('nm').value.trim(),
      courseId: currentCourse.id,
      courseTitle: currentCourse.title,
      amount: amount || originalAmount,
      method,
      transactionId: rawTransactionId,
      phone: getPaymentPhone(),
      paidAmount,
      paidCurrency,
    });

    let proofError = '';
    if (screenshot) {
      try {
        const screenshotUrl = await uploadPaymentScreenshot(screenshot, currentUser.uid, payment.id);
        await updatePaymentScreenshot(payment.id, screenshotUrl);
      } catch (error) {
        console.error('Enrollment request was created, but the screenshot could not be attached:', error);
        proofError = 'Your request was sent, but the screenshot could not be uploaded. Please attach it in WhatsApp.';
      }
    }

    showEnrollmentConfirmation(payment, { proofError });
  } catch (error) {
    console.error('Enrollment request could not be submitted:', error);
    $('submitStatus').textContent = error.message || 'Your enrollment request could not be submitted. Please try again.';
    button.textContent = 'Confirm enrollment';
  } finally {
    requestInProgress = false;
    if (button.textContent !== 'Confirm enrollment') button.textContent = 'Confirm enrollment';
    window.chk();
  }
}

async function submitFreeEnrollmentRequest() {
  if (requestInProgress || !currentUser || !currentCourse || !validateStudentDetails()) return;
  requestInProgress = true;
  const button = $('n1');
  button.disabled = true;
  $('courseLoadStatus').textContent = '';
  $('courseAuthStatus').textContent = 'Submitting your free enrollment request…';
  try {
    const payment = await createPaymentSubmission({
      userId: currentUser.uid,
      studentName: $('nm').value.trim(),
      courseId: currentCourse.id,
      courseTitle: currentCourse.title,
      amount: 0,
      paidAmount: 0,
      paidCurrency: 'BDT',
      method: 'free',
      transactionId: '',
      phone: getPaymentPhone(),
    });
    currentCourse.accessStatus = 'pending';
    $('courseAuthStatus').textContent = '';
    showEnrollmentConfirmation(payment, { free: true });
  } catch (error) {
    console.error('Free enrollment request could not be submitted:', error);
    $('courseAuthStatus').textContent = error.message || 'Your request could not be submitted. Please try again.';
  } finally {
    requestInProgress = false;
    button.disabled = false;
  }
}

$('enr2').onclick = async () => {
  if (!currentCourse) return;
  window.view(true);
  window.go(1);
  if (getFinalPrice(currentCourse) > 0) return;
  if (!currentUser) {
    $('courseAuthStatus').textContent = 'Sign in with Google to enroll in this free course.';
    $('courseSignIn').hidden = false;
    return;
  }
};

$('courseSignIn').addEventListener('click', async () => {
  const button = $('courseSignIn');
  button.disabled = true;
  $('courseAuthStatus').textContent = 'Opening Google sign-in…';
  try {
    await signInWithGoogle();
  } catch (error) {
    console.error('Course enrollment sign-in failed:', error);
    $('courseAuthStatus').textContent = error.message || 'Sign-in failed. Please try again.';
  } finally {
    button.disabled = false;
  }
});

$('n1').onclick = () => {
  if (!currentCourse) {
    $('courseLoadStatus').textContent = 'Course details are still loading. Please try again in a moment.';
    return;
  }
  if (!currentUser) {
    $('courseAuthStatus').textContent = getFinalPrice(currentCourse) > 0
      ? 'Sign in with Google before continuing to payment.'
      : 'Sign in with Google before submitting your free enrollment request.';
    $('courseSignIn').hidden = false;
    return;
  }
  if (!validateStudentDetails()) return;
  if (getFinalPrice(currentCourse) <= 0) {
    submitFreeEnrollmentRequest();
    return;
  }
  window.go(2);
};
$('go').onclick = submitEnrollment;
observeAuthState(setSignedInUser);
loadCourse();

/* =========================================================
   AUTH APP — wires Firebase auth to the header UI and modal
   =========================================================
   This is the only module index.html loads directly. It talks to
   auth.js for all real Firebase calls, and calls into script.js's
   global window.handleAuthStateChange() bridge so the (classic,
   non-module) portfolio script can react to sign-in/out without
   itself importing Firebase.
   ========================================================= */

import {
  signInWithGoogle,
  signInWithEmail,
  resetPassword,
  logout,
  observeAuthState,
  isCurrentUserAdmin,
  getCurrentUser,
} from './auth.js?v=20260829-auth-fix-1';
import { isFirebaseConfigured } from './firebase-init.js';
import { startRegistration, verifyRegistration, resendRegistrationCode } from './auth-api.js';

const modal = document.getElementById('authModal');
const modalClose = document.getElementById('authModalClose');
const modalStatus = document.getElementById('authModalStatus');
const modalCard = document.getElementById('authModalCard');
const googleBtn = document.getElementById('googleLoginBtn');
const signInForm = document.getElementById('signInForm');
const registerForm = document.getElementById('registerForm');
const forgotBtn = document.getElementById('forgotPasswordBtn');
const loginResendOtpBtn = document.getElementById('loginResendOtpBtn');
const authFormsView = document.getElementById('authFormsView');
const otpView = document.getElementById('authOtpView');
const otpForm = document.getElementById('otpForm');
const otpDigits = [...document.querySelectorAll('.otp-digit')];
const resendOtpBtn = document.getElementById('resendOtpBtn');
const resendCountdown = document.getElementById('resendCountdown');
const resendOtpLabel = resendOtpBtn?.innerHTML;
const otpEmailLabel = document.getElementById('otpEmailLabel');
const authModeCaption = document.getElementById('authModeCaption');
const authWelcomeCopy = document.getElementById('authWelcomeCopy');
let pendingRegistration = null;
let resendTimer = null;

const RECAPTCHA_SITE_KEY = '6LfEirQtAAAAAD2bQLLMveIf4pvufTyOcrQ570hO';
let recaptchaLoadPromise = null;

const navLoggedOut = document.getElementById('navAuthLoggedOut');
const navLoggedIn = document.getElementById('navAuthLoggedIn');
const headerSignInBtn = document.getElementById('headerSignInBtn');
const mobileAccountBtn = document.getElementById('mobileAccountBtn');
const courseGateSignInBtn = document.getElementById('courseGateSignInBtn');
const userChipBtn = document.getElementById('userChipBtn');
const userChipAvatar = document.getElementById('userChipAvatar');
const userChipInitial = document.getElementById('userChipInitial');
const userChipName = document.getElementById('userChipName');
const userDropdown = document.getElementById('userDropdown');
const userDropdownEmail = document.getElementById('userDropdownEmail');
const userLogoutBtn = document.getElementById('userLogoutBtn');
const adminNavLink = document.getElementById('adminNavLink');
const contactAdminPanel = document.getElementById('contactAdminPanel');
const contactAdminLink = document.getElementById('contactAdminLink');
const communityAuthMode = new URLSearchParams(window.location.search).get('communityAuth') === '1';

function setStatus(message, type = 'error') {
  if (!modalStatus) return;
  modalStatus.textContent = message;
  modalStatus.className = `auth-status show ${type}`;
}

function clearStatus() {
  if (!modalStatus) return;
  modalStatus.textContent = '';
  modalStatus.className = 'auth-status';
}

function loadRecaptcha() {
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (recaptchaLoadPromise) return recaptchaLoadPromise;

  recaptchaLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha));
    script.onerror = () => reject(new Error('Security verification could not be loaded. Please try again.'));
    document.head.appendChild(script);
  });
  return recaptchaLoadPromise;
}

async function getRecaptchaToken(action) {
  try {
    const recaptcha = await loadRecaptcha();
    const token = await recaptcha.execute(RECAPTCHA_SITE_KEY, { action });
    if (!token) {
      setStatus('Security verification failed. Please try again.');
      return false;
    }
    return token;
  } catch (error) {
    setStatus(error instanceof Error ? error.message : 'Security verification failed. Please try again.');
    return false;
  }
}

function openAuthModal(message) {
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  clearStatus();
  if (message) setStatus(message, 'info');
  setTimeout(() => document.getElementById('signInEmail')?.focus(), 50);
}
window.openAuthModal = openAuthModal; // used by script.js's toggleLessonComplete gate

if (communityAuthMode) {
  document.getElementById('siteRoot')?.classList.remove('show');
  modalClose?.classList.add('hidden');
  openAuthModal();
}

function closeAuthModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  clearStatus();
  signInForm?.reset();
  registerForm?.reset();
  otpForm?.reset();
  pendingRegistration = null;
  clearInterval(resendTimer);
  switchTab(false);
  authFormsView?.classList.remove('hidden');
  otpView?.classList.add('hidden');
}

function switchTab(showRegister) {
  signInForm?.classList.toggle('hidden', showRegister);
  registerForm?.classList.toggle('hidden', !showRegister);
  modalCard?.classList.toggle('active', showRegister);
  authModeCaption.textContent = showRegister ? 'Create your account to join the community' : 'Log in to continue';
  authWelcomeCopy.textContent = showRegister
    ? 'A great place to learn, build, and share starts here.'
    : 'Sign in to continue learning, building, and sharing.';
  clearStatus();
}

modalClose?.addEventListener('click', closeAuthModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeAuthModal();
});
document.addEventListener('keydown', (e) => {
  if (!communityAuthMode && e.key === 'Escape' && !modal?.classList.contains('hidden')) closeAuthModal();
});

document.getElementById('switchToRegister')?.addEventListener('click', () => switchTab(true));
document.getElementById('switchToLogin')?.addEventListener('click', () => switchTab(false));
document.getElementById('changeOtpEmailBtn')?.addEventListener('click', () => {
  clearInterval(resendTimer);
  authFormsView?.classList.remove('hidden');
  otpView?.classList.add('hidden');
  switchTab(true);
  document.getElementById('registerEmailInput')?.focus();
});
headerSignInBtn?.addEventListener('click', () => openAuthModal());
mobileAccountBtn?.addEventListener('click', () => {
  if (!navLoggedIn?.classList.contains('hidden')) userChipBtn?.click();
  else openAuthModal();
});
courseGateSignInBtn?.addEventListener('click', () => openAuthModal());

async function finishSignIn() {
  const admin = await isCurrentUserAdmin();
  closeAuthModal();
  if (communityAuthMode) {
    window.top.location.assign(admin ? '/admin.html' : '/community/');
    return;
  }
  if (admin && !location.pathname.endsWith('/admin.html')) {
    window.location.assign('admin.html');
  }
}

googleBtn?.addEventListener('click', async () => {
  if (!isFirebaseConfigured) {
    setStatus('Firebase is not configured yet. See FIREBASE_SETUP.md.');
    return;
  }
  if (!(await getRecaptchaToken('login'))) return;
  googleBtn.disabled = true;
  clearStatus();
  try {
    await signInWithGoogle();
    await finishSignIn();
  } catch (error) {
    setStatus(error.message);
  } finally {
    googleBtn.disabled = false;
  }
});

signInForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearFieldErrors(signInForm);
  const email = document.getElementById('signInEmail')?.value.trim();
  const password = document.getElementById('signInPassword')?.value;
  let valid = true;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('signInEmailError', 'Enter a valid email address.'); valid = false; }
  if (!password) { setFieldError('signInPasswordError', 'Enter your password.'); valid = false; }
  if (!valid) {
    setStatus('Please correct the highlighted fields.');
    return;
  }
  if (!(await getRecaptchaToken('login'))) return;
  const btn = document.getElementById('signInSubmitBtn');
  btn.disabled = true;
  btn.textContent = 'Signing in...';
  clearStatus();
  try {
    await signInWithEmail(email, password);
    const signedInUser = getCurrentUser();
    if (signedInUser && !signedInUser.emailVerified) {
      await logout();
      showLoginResend(email);
      setStatus('Your email is not verified yet. Request a new access code to continue.', 'info');
      return;
    }
    await finishSignIn();
  } catch (error) {
    if (/disabled|not verified|verify your email/i.test(error.message || '')) {
      showLoginResend(email);
      setStatus('Your account is awaiting email verification. Request a new access code to continue.', 'info');
    } else {
      setStatus(error.message);
    }
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }
});

function setFieldError(id, message) {
  const error = document.getElementById(id);
  if (error) error.textContent = message;
}

function showLoginResend(email) {
  if (!loginResendOtpBtn) return;
  loginResendOtpBtn.dataset.email = email;
  loginResendOtpBtn.classList.remove('hidden');
}

function clearFieldErrors(form) {
  form?.querySelectorAll('.auth-field-error').forEach((item) => { item.textContent = ''; });
}

document.querySelectorAll('.auth-password-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const input = document.getElementById(toggle.dataset.passwordTarget);
    if (!input) return;
    const showPassword = input.type === 'password';
    input.type = showPassword ? 'text' : 'password';
    toggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
    toggle.innerHTML = `<i class="fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}" aria-hidden="true"></i>`;
  });
});

document.querySelectorAll('#signInForm input, #registerForm input').forEach((input) => {
  input.addEventListener('input', () => {
    const fieldError = input.closest('.lock-field')?.querySelector('.auth-field-error');
    if (fieldError) fieldError.textContent = '';
  });
});

function startResendCountdown(seconds = 60) {
  clearInterval(resendTimer);
  let remaining = seconds;
  resendOtpBtn.disabled = true;
  resendCountdown.textContent = String(remaining);
  resendTimer = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(resendTimer);
      resendOtpBtn.disabled = false;
      resendOtpBtn.innerHTML = 'Resend code';
      return;
    }
    resendCountdown.textContent = String(remaining);
  }, 1000);
}

function otpValue() {
  return otpDigits.map((input) => input.value).join('');
}

async function verifyOtp() {
  if (!pendingRegistration) return;
  const otp = otpValue();
  if (!/^\d{6}$/.test(otp)) return;
  const button = document.getElementById('verifyOtpBtn');
  button.disabled = true;
  button.textContent = 'Verifying...';
  clearStatus();
  try {
    await verifyRegistration({ email: pendingRegistration.email, otp });
    await signInWithEmail(pendingRegistration.email, pendingRegistration.password);
    await finishSignIn();
  } catch (error) {
    setStatus(error.message || 'The code could not be verified. Check it and try again.');
    otpView.classList.remove('otp-shake');
    void otpView.offsetWidth;
    otpView.classList.add('otp-shake');
    otpDigits.forEach((input) => { input.value = ''; });
    otpDigits[0]?.focus();
  } finally {
    button.disabled = false;
    button.textContent = 'Verify code';
  }
}

otpDigits.forEach((input, index) => {
  input.addEventListener('input', () => {
    const digits = input.value.replace(/\D/g, '');
    input.value = digits.slice(-1);
    if (input.value) {
      input.classList.remove('digit-pop');
      void input.offsetWidth;
      input.classList.add('digit-pop');
      otpDigits[index + 1]?.focus();
    }
    if (otpValue().length === 6) verifyOtp();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value) otpDigits[index - 1]?.focus();
    if (event.key === 'ArrowLeft') otpDigits[index - 1]?.focus();
    if (event.key === 'ArrowRight') otpDigits[index + 1]?.focus();
  });
  input.addEventListener('paste', (event) => {
    const pasted = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    event.preventDefault();
    [...pasted].forEach((digit, digitIndex) => { otpDigits[digitIndex].value = digit; });
    otpDigits[Math.min(pasted.length, 5)]?.focus();
    if (pasted.length === 6) verifyOtp();
  });
});

otpForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  await verifyOtp();
});

resendOtpBtn?.addEventListener('click', async () => {
  if (!pendingRegistration || resendOtpBtn.disabled) return;
  resendOtpBtn.disabled = true;
  clearStatus();
  try {
    await resendRegistrationCode({ email: pendingRegistration.email });
    setStatus('A new access code has been sent.', 'success');
    resendOtpBtn.innerHTML = resendOtpLabel;
    startResendCountdown(60);
  } catch (error) {
    resendOtpBtn.disabled = false;
    setStatus(error.message || 'Could not resend the code. Please try again.');
  }
});

registerForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearFieldErrors(registerForm);
  const name = document.getElementById('registerNameInput')?.value.trim();
  const email = document.getElementById('registerEmailInput')?.value.trim();
  const password = document.getElementById('registerPasswordInput')?.value;
  let valid = true;
  if (!name) { setFieldError('registerNameError', 'Enter your name.'); valid = false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('registerEmailError', 'Enter a valid email address.'); valid = false; }
  if (!password || password.length < 8) { setFieldError('registerPasswordError', 'Password must be at least 8 characters'); valid = false; }
  if (!valid) {
    setStatus('Please correct the highlighted fields.');
    return;
  }
  const btn = document.getElementById('registerSubmitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending code...';
  clearStatus();
  try {
    await startRegistration({ name, email, password });
    pendingRegistration = { name, email, password };
    otpEmailLabel.textContent = email;
    otpDigits.forEach((input) => { input.value = ''; });
    authFormsView?.classList.add('hidden');
    otpView?.classList.remove('hidden');
    startResendCountdown(60);
    otpDigits[0]?.focus();
    setStatus('Your access code is on its way.', 'success');
  } catch (error) {
    setStatus(error.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Continue';
  }
});

loginResendOtpBtn?.addEventListener('click', async () => {
  const email = loginResendOtpBtn.dataset.email || document.getElementById('signInEmail')?.value.trim();
  if (!email) {
    setStatus('Enter your email address first.');
    return;
  }
  loginResendOtpBtn.disabled = true;
  loginResendOtpBtn.textContent = 'Sending...';
  try {
    await resendRegistrationCode({ email });
    setStatus('If a registration is pending, a new access code has been sent.', 'success');
  } catch (error) {
    setStatus(error.message || 'Could not resend the code. Start Sign Up again or try later.');
  } finally {
    loginResendOtpBtn.disabled = false;
    loginResendOtpBtn.textContent = 'Resend verification code';
  }
});

forgotBtn?.addEventListener('click', async () => {
  const email = document.getElementById('signInEmail')?.value.trim();
  if (!email) {
    setStatus('Enter your email above first, then tap "Forgot password?" again.');
    return;
  }
  try {
    await resetPassword(email);
    setStatus(`Password reset email sent to ${email}.`, 'success');
  } catch (error) {
    setStatus(error.message);
  }
});

userChipBtn?.addEventListener('click', (event) => {
  event.stopPropagation();
  const isCurrentlyHidden = userDropdown?.classList.contains('hidden');
  const nextOpenState = isCurrentlyHidden === true;
  userDropdown?.classList.toggle('hidden', !nextOpenState);
  userChipBtn.setAttribute('aria-expanded', String(nextOpenState));
});
document.addEventListener('click', (e) => {
  if (!userChipBtn?.contains(e.target) && !userDropdown?.contains(e.target)) {
    userDropdown?.classList.add('hidden');
    userChipBtn?.setAttribute('aria-expanded', 'false');
  }
});

userLogoutBtn?.addEventListener('click', async () => {
  if (userLogoutBtn.disabled) return;
  userLogoutBtn.disabled = true;
  userLogoutBtn.classList.add('is-logging-out');
  try {
    await new Promise((resolve) => setTimeout(resolve, 520));
    await logout();
  } catch (error) {
    console.error('Logout failed:', error);
  } finally {
    userLogoutBtn.disabled = false;
    userLogoutBtn.classList.remove('is-logging-out');
  }
});

/* ---------- react to real Firebase auth state ---------- */
function renderLoggedOut() {
  navLoggedOut?.classList.remove('hidden');
  navLoggedIn?.classList.add('hidden');
  adminNavLink?.classList.add('hidden');
  contactAdminPanel?.classList.add('hidden');
  mobileAccountBtn?.classList.add('hidden');
}

function renderLoggedIn(user, isAdmin) {
  navLoggedOut?.classList.add('hidden');
  navLoggedIn?.classList.remove('hidden');
  adminNavLink?.classList.toggle('hidden', !isAdmin);
  contactAdminPanel?.classList.toggle('hidden', !isAdmin);
  contactAdminLink?.classList.toggle('hidden', !isAdmin);
  mobileAccountBtn?.classList.remove('hidden');

  const name = user.displayName || user.email?.split('@')[0] || 'Student';
  userChipName.textContent = 'My Account';
  userDropdownEmail.textContent = user.email || '';

  if (user.photoURL) {
    userChipAvatar.src = user.photoURL;
    userChipAvatar.alt = name;
    userChipAvatar.classList.remove('hidden');
    userChipInitial.classList.add('hidden');
    userChipAvatar.onerror = () => {
      userChipAvatar.classList.add('hidden');
      userChipInitial.classList.remove('hidden');
      userChipInitial.textContent = name.charAt(0).toUpperCase();
    };
  } else {
    userChipAvatar.classList.add('hidden');
    userChipInitial.classList.remove('hidden');
    userChipInitial.textContent = name.charAt(0).toUpperCase();
  }

}

if (!isFirebaseConfigured) {
  renderLoggedOut();
  if (headerSignInBtn) headerSignInBtn.title = 'Firebase is not configured yet — see FIREBASE_SETUP.md';
}

observeAuthState(async (user) => {
  if (user) {
    const admin = await isCurrentUserAdmin();
    renderLoggedIn(user, admin);
  } else {
    renderLoggedOut();
  }
  // Let script.js (classic, non-module) know so it can sync progress
  // and re-render whatever course UI is on screen.
  window.handleAuthStateChange?.(user);
});

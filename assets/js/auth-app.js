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
  linkGoogleToCurrentUser,
  logout,
  observeAuthState,
  isCurrentUserAdmin,
  getCurrentUser,
} from './auth.js?v=20261120-google-auth-1';
import { isFirebaseConfigured } from './firebase-init.js';

const modal = document.getElementById('authModal');
const modalClose = document.getElementById('authModalClose');
const modalStatus = document.getElementById('authModalStatus');
const googleBtn = document.getElementById('googleLoginBtn');
const signInForm = document.getElementById('signInForm');
const forgotBtn = document.getElementById('forgotPasswordBtn');

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
const linkGoogleAccountBtn = document.getElementById('linkGoogleAccountBtn');
const adminNavLink = document.getElementById('adminNavLink');
const contactAdminPanel = document.getElementById('contactAdminPanel');
const contactAdminLink = document.getElementById('contactAdminLink');

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

const authParams = new URLSearchParams(window.location.search);
if (authParams.get('auth') === '1') {
  openAuthModal(authParams.get('authMessage') || '');
}

function closeAuthModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  clearStatus();
  signInForm?.reset();
}

modalClose?.addEventListener('click', closeAuthModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeAuthModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal?.classList.contains('hidden')) closeAuthModal();
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
  const returnTo = new URLSearchParams(window.location.search).get('returnTo');
  if (returnTo) {
    const target = new URL(returnTo, window.location.origin);
    if (target.origin === window.location.origin) {
      window.location.assign(`${target.pathname}${target.search}${target.hash}`);
      return;
    }
  }
  if (admin && !location.pathname.endsWith('/admin.html')) {
    window.location.assign('admin.html');
  }
}

linkGoogleAccountBtn?.addEventListener('click', async () => {
  openAuthModal();
  linkGoogleAccountBtn.disabled = true;
  try {
    await linkGoogleToCurrentUser();
    setStatus('Google is now linked to this account.', 'success');
    renderLoggedIn(getCurrentUser(), await isCurrentUserAdmin());
  } catch (error) {
    setStatus(error.message);
  } finally {
    linkGoogleAccountBtn.disabled = false;
  }
});

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
    await finishSignIn();
  } catch (error) {
    setStatus(error.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }
});

function setFieldError(id, message) {
  const error = document.getElementById(id);
  if (error) error.textContent = message;
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

document.querySelectorAll('#signInForm input').forEach((input) => {
  input.addEventListener('input', () => {
    const fieldError = input.closest('.lock-field')?.querySelector('.auth-field-error');
    if (fieldError) fieldError.textContent = '';
  });
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
  linkGoogleAccountBtn?.classList.toggle('hidden', user.providerData.some((provider) => provider.providerId === 'google.com'));

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

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
  createAccount,
  resetPassword,
  logout,
  observeAuthState,
  isCurrentUserAdmin,
} from './auth.js?v=20260829-auth-fix-1';
import { isFirebaseConfigured } from './firebase-init.js';

const modal = document.getElementById('authModal');
const modalClose = document.getElementById('authModalClose');
const modalStatus = document.getElementById('authModalStatus');
const googleBtn = document.getElementById('googleLoginBtn');
const tabSignIn = document.getElementById('authTabSignIn');
const tabRegister = document.getElementById('authTabRegister');
const signInForm = document.getElementById('signInForm');
const registerForm = document.getElementById('registerForm');
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
const adminNavLink = document.getElementById('adminNavLink');

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

function closeAuthModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  clearStatus();
  signInForm?.reset();
  registerForm?.reset();
}

function switchTab(showRegister) {
  signInForm?.classList.toggle('hidden', showRegister);
  registerForm?.classList.toggle('hidden', !showRegister);
  tabSignIn?.classList.toggle('active', !showRegister);
  tabRegister?.classList.toggle('active', showRegister);
  clearStatus();
}

modalClose?.addEventListener('click', closeAuthModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeAuthModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal?.classList.contains('hidden')) closeAuthModal();
});

tabSignIn?.addEventListener('click', () => switchTab(false));
tabRegister?.addEventListener('click', () => switchTab(true));
headerSignInBtn?.addEventListener('click', () => openAuthModal());
mobileAccountBtn?.addEventListener('click', () => {
  if (!navLoggedIn?.classList.contains('hidden')) userChipBtn?.click();
  else openAuthModal();
});
courseGateSignInBtn?.addEventListener('click', () => openAuthModal());

async function finishSignIn() {
  const admin = await isCurrentUserAdmin();
  closeAuthModal();
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
  const email = document.getElementById('signInEmail')?.value.trim();
  const password = document.getElementById('signInPassword')?.value;
  if (!email || !password) {
    setStatus('Please enter your email and password.');
    return;
  }
  if (!(await getRecaptchaToken('login'))) return;
  const btn = document.getElementById('signInSubmitBtn');
  btn.disabled = true;
  clearStatus();
  try {
    await signInWithEmail(email, password);
    await finishSignIn();
  } catch (error) {
    setStatus(error.message);
  } finally {
    btn.disabled = false;
  }
});

registerForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('registerNameInput')?.value.trim();
  const email = document.getElementById('registerEmailInput')?.value.trim();
  const password = document.getElementById('registerPasswordInput')?.value;
  if (!name || !email || !password) {
    setStatus('Please fill in all fields.');
    return;
  }
  if (password.length < 6) {
    setStatus('Password must be at least 6 characters.');
    return;
  }
  if (!(await getRecaptchaToken('register'))) return;
  const btn = document.getElementById('registerSubmitBtn');
  btn.disabled = true;
  clearStatus();
  try {
    await createAccount(name, email, password);
    closeAuthModal();
  } catch (error) {
    setStatus(error.message);
  } finally {
    btn.disabled = false;
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
  try {
    await logout();
  } catch (error) {
    console.error('Logout failed:', error);
  }
});

/* ---------- react to real Firebase auth state ---------- */
function renderLoggedOut() {
  navLoggedOut?.classList.remove('hidden');
  navLoggedIn?.classList.add('hidden');
  mobileAccountBtn?.classList.add('hidden');
}

function renderLoggedIn(user, isAdmin) {
  navLoggedOut?.classList.add('hidden');
  navLoggedIn?.classList.remove('hidden');
  adminNavLink?.classList.remove('hidden');
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

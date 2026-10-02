import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const { user, login, loginWithGoogle, verifySignupCode, resendSignupCode, authError, clearAuthError } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [verificationMode, setVerificationMode] = useState(false);
  const [otp, setOtp] = useState('');
  const [resendRemaining, setResendRemaining] = useState(0);

  useEffect(() => {
    if (user) navigate(location.state?.returnTo || '/', { replace: true });
  }, [location.state, navigate, user]);

  useEffect(() => {
    if (location.state?.notice) setAuthMessage(location.state.notice);
  }, [location.state]);

  useEffect(() => {
    if (!verificationMode || resendRemaining <= 0) return undefined;
    const timer = setTimeout(() => setResendRemaining((remaining) => remaining - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendRemaining, verificationMode]);

  useEffect(() => {
    if (!authError) return;
    showToast(friendlyAuthError({ code: authError }), 'error');
    clearAuthError();
  }, [authError, clearAuthError, showToast]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setAuthMessage(verificationMode ? 'Verifying email...' : 'Signing in...');
    try {
      if (verificationMode) {
        await verifySignupCode(email, otp);
        setVerificationMode(false);
        setOtp('');
        setAuthMessage('Email verified. Signing in...');
      }
      await login(email, password);
      navigate(location.state?.returnTo || '/', { replace: true });
    } catch (err) {
      if (err?.code === 'auth/user-disabled' || /verify your email with the 6-digit code/i.test(err?.message || '')) {
        setVerificationMode(true);
        setAuthMessage('This account is awaiting email verification. Request its 6-digit code below.');
      } else {
        showToast(friendlyAuthError(err), 'error');
        setAuthMessage('');
      }
    } finally {
      setBusy(false);
    }
  }

  async function resendCode() {
    setBusy(true);
    try {
      await resendSignupCode(email);
      setResendRemaining(60);
      setAuthMessage('If a registration is pending, a new verification code will arrive shortly.');
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setBusy(true);
    setAuthMessage('Connecting to Google...');
    try {
      const googleUser = await loginWithGoogle();
      if (googleUser) navigate(location.state?.returnTo || '/', { replace: true });
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
      setAuthMessage('');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>My Community</h1>
        <p className="muted">Log in to continue</p>
        <label className="auth-field-label" htmlFor="login-user-id">User ID</label>
        <input id="login-user-id" type="email" placeholder="Enter your email" value={email} required autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="auth-field-label" htmlFor="login-password">Password</label>
        <input id="login-password" type="password" placeholder="Enter your password" value={password} required autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit" disabled={busy}>Log In</button>
        {verificationMode && (
          <>
            <p className="muted small">Enter the 6-digit code sent to this email. It expires in 10 minutes.</p>
            <label className="auth-field-label" htmlFor="login-otp">6-digit verification code</label>
            <input id="login-otp" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={otp}
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))} />
            <button className="btn btn-primary" type="submit" disabled={busy || otp.length !== 6}>Verify and Sign In</button>
            <button className="link-btn" type="button" disabled={busy || resendRemaining > 0} onClick={resendCode}>
              {resendRemaining > 0 ? `Resend code in ${resendRemaining}s` : 'Resend verification code'}
            </button>
          </>
        )}
        <button type="button" className="btn btn-google" onClick={google} disabled={busy}>Continue with Google</button>
        {authMessage && <p className="muted small auth-status" role="status" aria-live="polite">{authMessage}</p>}
        <div className="auth-links auth-links-stack">
          <Link to="/forgot-password">Forgot password?</Link>
          <span>Don't have an account? <Link to="/signup">Create an account</Link></span>
        </div>
      </form>
    </div>
  );
}

export function friendlyAuthError(err) {
  const code = err?.code || '';
  const map = {
    'auth/invalid-credential': 'Incorrect email or password. If you use Google, continue with Google.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/operation-not-allowed': 'Email/password login is not enabled in Firebase Authentication.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/user-disabled': 'This account is awaiting email verification. Request a code to continue.',
    'auth/email-already-in-use': 'This email is already registered. Please sign in.',
    'auth/weak-password': 'Password must be at least 8 characters.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/popup-blocked': 'Google sign-in was blocked. Please allow popups and try again.',
    'auth/cancelled-popup-request': 'Another Google sign-in is already in progress.',
    'auth/unauthorized-domain': 'Google sign-in is not enabled for this website domain.',
    'auth/network-request-failed': 'Network connection failed. Check your connection and try again.',
    'auth/account-exists-with-different-credential': 'This email already belongs to another sign-in method. Use that method to access the existing account.',
    'auth/operation-not-supported-in-this-environment': 'Google sign-in is unavailable in this browser. Please try again.',
    'auth/redirect-cancelled-by-user': 'Google sign-in was cancelled.'
  };
  if (map[code]) return map[code];
  if (!code && /^The code is invalid or expired\./.test(err?.message || '')) return 'Invalid or expired verification code.';
  if (!code && /^(Too many requests\. Please wait and try again\.|Unable to start signup\..*)$/.test(err?.message || '')) return err.message;
  if (!code && /^(This (email|account)|Please |Password |Enter |Cannot reach |Could not |The verification)/.test(err?.message || '')) return err.message;
  if (!code && /^(Passwords do not match\.|Password must be at least 8 characters\.|Please verify your email before signing in\..*)$/.test(err?.message || '')) return err.message;
  return 'Something went wrong. Please try again.';
}

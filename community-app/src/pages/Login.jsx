import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const { user, login, loginWithGoogle, authError, clearAuthError } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [authMessage, setAuthMessage] = useState('');

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [navigate, user]);

  useEffect(() => {
    if (!authError) return;
    showToast(friendlyAuthError({ code: authError }), 'error');
    clearAuthError();
  }, [authError, clearAuthError, showToast]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setAuthMessage('Signing in...');
    try {
      await login(email, password);
      navigate('/', { replace: true });
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
      setAuthMessage('');
    }
  }

  async function google() {
    setBusy(true);
    setAuthMessage('Connecting to Google...');
    try {
      const googleUser = await loginWithGoogle();
      if (googleUser) navigate('/', { replace: true });
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
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/operation-not-allowed': 'Email/password login is not enabled in Firebase Authentication.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/email-already-in-use': 'An account already exists with that email.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/popup-blocked': 'Google sign-in was blocked. Please allow popups and try again.',
    'auth/cancelled-popup-request': 'Another Google sign-in is already in progress.',
    'auth/unauthorized-domain': 'Google sign-in is not enabled for this website domain.',
    'auth/network-request-failed': 'Network connection failed. Check your connection and try again.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email. Use the original sign-in method.',
    'auth/operation-not-supported-in-this-environment': 'Google sign-in is unavailable in this browser. Please try again.',
    'auth/redirect-cancelled-by-user': 'Google sign-in was cancelled.'
  };
  if (map[code]) return map[code];
  if (!code && err?.message === 'Passwords do not match.') return err.message;
  return 'Something went wrong. Please try again.';
}

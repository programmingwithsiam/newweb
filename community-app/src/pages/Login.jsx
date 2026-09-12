import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await login(email, password);
      window.location.replace('/community/');
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setBusy(true);
    try {
      await loginWithGoogle();
      window.location.replace('/community/');
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>My Community</h1>
        <p className="muted">Log in to continue</p>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit" disabled={busy}>Log In</button>
        <button type="button" className="btn btn-google" onClick={google} disabled={busy}>Continue with Google</button>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/signup">Create an account</Link>
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
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.'
  };
  return map[code] || err.message || 'Something went wrong. Please try again.';
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { friendlyAuthError } from './Login';

export default function Signup() {
  const { signup, loginWithGoogle } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await signup({ email, password, fullName, username });
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
        <h1>Join My Community</h1>
        <input placeholder="Full name" value={fullName} required onChange={(e) => setFullName(e.target.value)} />
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password (min 6 characters)" value={password} required minLength={6}
          onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit" disabled={busy}>Sign Up</button>
        <button type="button" className="btn btn-google" onClick={google} disabled={busy}>Continue with Google</button>
        <div className="auth-links">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </form>
    </div>
  );
}

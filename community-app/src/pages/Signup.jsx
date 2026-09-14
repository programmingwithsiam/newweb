import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { friendlyAuthError } from './Login';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Signup() {
  const { user, loading, signup } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate('/', { replace: true });
  }, [loading, navigate, user]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }
      await signup({ email, password });
      navigate('/', { replace: true });
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  if (loading || user) return <LoadingSpinner full label="Checking session..." />;

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>Create your account</h1>
        <p className="muted">Use your User ID and password to join My Community.</p>
        <label className="auth-field-label" htmlFor="signup-user-id">User ID</label>
        <input id="signup-user-id" type="email" placeholder="Enter your email" value={email} required autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="auth-field-label" htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" placeholder="At least 6 characters" value={password} required minLength={6} autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} />
        <label className="auth-field-label" htmlFor="signup-confirm-password">Confirm Password</label>
        <input id="signup-confirm-password" type="password" placeholder="Repeat your password" value={confirmPassword} required autoComplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit" disabled={busy}>Create Account</button>
        <div className="auth-links">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </form>
    </div>
  );
}

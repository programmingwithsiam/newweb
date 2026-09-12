import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { friendlyAuthError } from './Login';

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>Reset password</h1>
        {sent ? (
          <p>Check your inbox for a password reset link.</p>
        ) : (
          <>
            <p className="muted">We'll email you a reset link.</p>
            <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn-primary" type="submit" disabled={busy}>Send reset link</button>
          </>
        )}
        <div className="auth-links">
          <Link to="/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
}

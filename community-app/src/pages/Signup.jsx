import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { friendlyAuthError } from './Login';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Signup() {
  const { user, loading, signup, verifySignupCode, resendSignupCode } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [resendRemaining, setResendRemaining] = useState(0);

  useEffect(() => {
    if (!loading && user) navigate('/', { replace: true });
  }, [loading, navigate, user]);

  useEffect(() => {
    if (!otpStep || resendRemaining <= 0) return undefined;
    const timer = setTimeout(() => setResendRemaining((remaining) => remaining - 1), 1000);
    return () => clearTimeout(timer);
  }, [otpStep, resendRemaining]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      if (otpStep) {
        await verifySignupCode(email, otp);
        showToast('Email verified. You can now sign in.', 'success');
        navigate('/login', {
          replace: true,
          state: {
            email,
            notice: 'Email verified. You can now sign in.',
            returnTo: location.state?.returnTo
          }
        });
        return;
      }
      if (password.length < 8) throw new Error('Password must be at least 8 characters.');
      if (password !== confirmPassword) throw new Error('Passwords do not match.');
      const result = await signup({ email, password, fullName });
      setEmail(result.email);
      setPassword('');
      setConfirmPassword('');
      setOtpStep(true);
      setResendRemaining(60);
      showToast('If registration can be completed, a 6-digit verification code will arrive by email.', 'success');
    } catch (err) {
      showToast(friendlyAuthError(err), 'error');
    } finally {
      setBusy(false);
    }
  }

  async function resendCode() {
    setBusy(true);
    try {
      await resendSignupCode(email);
      setOtp('');
      setResendRemaining(60);
      showToast('If a registration is pending, a new code will arrive shortly.', 'success');
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
        {otpStep ? (
          <>
            <h1>Verify your email</h1>
            <p className="muted">If registration can be completed, a 6-digit code will arrive at {email}. It expires in 10 minutes.</p>
            <label className="auth-field-label" htmlFor="signup-otp">Verification code</label>
            <input id="signup-otp" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={otp} required
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))} />
            <button className="btn btn-primary" type="submit" disabled={busy || otp.length !== 6}>{busy ? 'Verifying...' : 'Verify Email'}</button>
            <button className="link-btn" type="button" disabled={busy || resendRemaining > 0} onClick={resendCode}>
              {resendRemaining > 0 ? `Resend code in ${resendRemaining}s` : 'Resend verification code'}
            </button>
            <button className="link-btn" type="button" disabled={busy} onClick={() => navigate('/login', { state: { email, returnTo: location.state?.returnTo } })}>
              Already have an account? Sign in
            </button>
            <button className="link-btn" type="button" disabled={busy} onClick={() => { setOtpStep(false); setOtp(''); }}>Back to sign up</button>
          </>
        ) : (
          <>
            <h1>Create your account</h1>
            <p className="muted">Verify your email before signing in.</p>
            <label className="auth-field-label" htmlFor="signup-full-name">Full Name</label>
            <input id="signup-full-name" type="text" placeholder="Your name" value={fullName} required maxLength={80} autoComplete="name" onChange={(e) => setFullName(e.target.value)} />
            <label className="auth-field-label" htmlFor="signup-user-id">Email</label>
            <input id="signup-user-id" type="email" placeholder="Enter your email" value={email} required autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
            <label className="auth-field-label" htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" placeholder="At least 8 characters" value={password} required minLength={8} autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)} />
            <label className="auth-field-label" htmlFor="signup-confirm-password">Confirm Password</label>
            <input id="signup-confirm-password" type="password" placeholder="Repeat your password" value={confirmPassword} required autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)} />
            <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? 'Sending code...' : 'Create Account'}</button>
          </>
        )}
        <div className="auth-links">
          {!otpStep && <Link to="/login">Already have an account? Log in</Link>}
        </div>
      </form>
    </div>
  );
}

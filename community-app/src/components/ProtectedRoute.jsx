import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import '../styles/MessengerLoading.css';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    if (location.pathname.startsWith('/messenger')) {
      return (
        <div className="msgr-route-loading">
          <LoadingSpinner full label="Checking session..." />
        </div>
      );
    }
    return <LoadingSpinner full label="Checking session..." />;
  }
  if (!user) {
    const returnTo = `${location.pathname}${location.search}${location.hash}`;
    return (
      <div className="auth-page">
        <section className="auth-card" aria-labelledby="protected-route-title">
          <h1 id="protected-route-title">Sign in to continue</h1>
          <p className="muted">This community feature is available to members. Your current page will be restored after sign-in.</p>
          <div className="auth-links">
            <Link className="btn btn-primary" to="/login" state={{ returnTo }}>Sign In</Link>
            <Link className="btn btn-ghost" to="/signup" state={{ returnTo }}>Create Account</Link>
          </div>
        </section>
      </div>
    );
  }
  return children || <Outlet />;
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import NotificationBell from './NotificationBell';

export default function Navbar() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user, profile } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <header className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/')}>
        <span className="brand-dot" />
        My Community
      </div>
      <form className="navbar-search" onSubmit={submitSearch}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search people, posts, #hashtags"
          aria-label="Search"
        />
      </form>
      <div className="navbar-actions">
        {isAdmin && <a className="admin-nav-link" href="/admin">🛠️ Admin</a>}
        <button className="icon-btn" onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <NotificationBell />
        <NotificationBell kind="messages" />
        {profile && (
          <img
            className="navbar-avatar"
            src={profile.photoURL || '/default-avatar.png'}
            alt={profile.fullName}
            onClick={() => navigate(`/profile/${profile.uid}`)}
          />
        )}
      </div>
    </header>
  );
}

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import NotificationBell from './NotificationBell';
import { LayoutGrid, Menu, Moon, Search as SearchIcon, Sun } from 'lucide-react';

const iconProps = { size: 20, strokeWidth: 1.5, 'aria-hidden': true };

export default function Navbar({ onMenu }) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
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
      <button className="mobile-menu-btn icon-btn" type="button" onClick={onMenu} aria-label="Open menu"><Menu {...iconProps} /></button>
      <div className="navbar-brand" onClick={() => navigate('/')}>
        <span className="brand-dot" />
        CodeWithSiam
      </div>
      <nav className="navbar-links" aria-label="Community navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/search">Explore</NavLink>
        <NavLink to="/messenger">Messages</NavLink>
      </nav>
      <form className={`navbar-search${mobileSearchOpen ? ' is-mobile-open' : ''}`} onSubmit={(e) => { submitSearch(e); setMobileSearchOpen(false); }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search people, posts, #hashtags"
          aria-label="Search"
        />
      </form>
      <div className="navbar-actions">
        <button className="mobile-search-btn icon-btn" type="button" onClick={() => setMobileSearchOpen(true)} title="Search" aria-label="Open search"><SearchIcon {...iconProps} /></button>
        {isAdmin && <a className="admin-nav-link" href="/admin"><LayoutGrid {...iconProps} /><span>Admin</span></a>}
        <button className="icon-btn" type="button" onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
          {theme === 'dark' ? <Sun {...iconProps} /> : <Moon {...iconProps} />}
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

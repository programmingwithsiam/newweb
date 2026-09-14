import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Grid2x2, Home, Menu, MessageSquareText, PlaySquare, Search as SearchIcon, Store, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const iconProps = { size: 19, strokeWidth: 1.8, 'aria-hidden': true };

export default function Navbar({ onMenu }) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { profile } = useAuth();

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <header className="navbar">
      <button className="mobile-menu-btn icon-btn" type="button" onClick={onMenu} aria-label="Open menu"><Menu {...iconProps} /></button>
      <div className="navbar-brand" onClick={() => navigate('/')} aria-label="Go home">
        <span className="brand-mark">C</span>
      </div>

      <form className={`navbar-search${mobileSearchOpen ? ' is-mobile-open' : ''}`} onSubmit={(e) => { submitSearch(e); setMobileSearchOpen(false); }}>
        <SearchIcon className="navbar-search-icon" size={17} aria-hidden="true" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Facebook"
          aria-label="Search"
        />
      </form>

      <nav className="navbar-quick-actions" aria-label="Community navigation">
        <button className="quick-action active" type="button" aria-label="Home" onClick={() => navigate('/')}><Home {...iconProps} /></button>
        <button className="quick-action" type="button" aria-label="Watch" onClick={() => navigate('/search?view=videos')}><PlaySquare {...iconProps} /></button>
        <button className="quick-action" type="button" aria-label="Marketplace" onClick={() => navigate('/search?view=marketplace')}><Store {...iconProps} /></button>
        <button className="quick-action" type="button" aria-label="Groups" onClick={() => navigate('/search?view=groups')}><Users {...iconProps} /></button>
        <button className="quick-action" type="button" aria-label="Messenger" onClick={() => navigate('/messenger')}><MessageSquareText {...iconProps} /></button>
      </nav>

      <div className="navbar-actions">
        <button className="icon-btn ghost-btn" type="button" aria-label="Apps"><Grid2x2 {...iconProps} /></button>
        <button className="icon-btn ghost-btn" type="button" aria-label="Messages" onClick={() => navigate('/messenger')}><MessageSquareText {...iconProps} /></button>
        <button className="icon-btn ghost-btn" type="button" aria-label="Notifications"><Bell {...iconProps} /></button>
        <button className="avatar-action" type="button" aria-label="Profile" onClick={() => navigate('/profile')}>
          <img className="navbar-avatar" src={profile?.photoURL || '/default-avatar.png'} alt="Profile" />
        </button>
        <button className="mobile-search-btn icon-btn" type="button" onClick={() => setMobileSearchOpen(true)} title="Search" aria-label="Open search"><SearchIcon {...iconProps} /></button>
      </div>
    </header>
  );
}

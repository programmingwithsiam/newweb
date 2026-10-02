import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Gamepad2, Grid2x2, Home, Menu, MessageSquareText, PlaySquare, Search as SearchIcon, Store, Users } from 'lucide-react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../firebase/config';

const iconProps = { size: 19, strokeWidth: 1.8, 'aria-hidden': true };

export default function Navbar({ onMenu }) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [unreadTotal, setUnreadTotal] = useState(0);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { profile, user } = useAuth();
  const activeView = pathname === '/' ? 'home' : new URLSearchParams(search).get('view');

  useEffect(() => {
    if (!user) return undefined;
    const chatsQuery = query(collection(firestore, 'chats'), where('members', 'array-contains', user.uid), orderBy('lastMessageAt', 'desc'));
    const unsub = onSnapshot(chatsQuery, (snapshot) => {
      const total = snapshot.docs.reduce((sum, docSnap) => sum + Number(docSnap.data()?.unread?.[user.uid] || 0), 0);
      setUnreadTotal(total);
    });
    return () => unsub();
  }, [user]);

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <header className="navbar">
      <button className="mobile-menu-btn icon-btn" type="button" onClick={onMenu} aria-label="Open menu"><Menu {...iconProps} /></button>
      <a className="navbar-brand" href="/" aria-label="Back to CodeWithSiam site" title="Back to site">
        <img className="brand-mark navbar-brand-avatar" src={profile?.photoURL || '/assets/images/profile-siam.webp'} alt="" />
        <span className="cwsfb-brand-name">CodeWithSiam</span>
      </a>

      <form className={`navbar-search${mobileSearchOpen ? ' is-mobile-open' : ''}`} onSubmit={(e) => { submitSearch(e); setMobileSearchOpen(false); }}>
        <SearchIcon className="navbar-search-icon" size={17} aria-hidden="true" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search CodeWithSiam"
          aria-label="Search"
        />
      </form>

      <nav className="navbar-quick-actions" aria-label="Community navigation">
        <button className={`quick-action${activeView === 'home' ? ' active' : ''}`} type="button" aria-label="Home" aria-current={activeView === 'home' ? 'page' : undefined} onClick={() => navigate('/')}><Home {...iconProps} /></button>
        <button className={`quick-action${activeView === 'reels' ? ' active' : ''}`} type="button" aria-label="Reels" aria-current={activeView === 'reels' ? 'page' : undefined} onClick={() => navigate('/search?view=reels')}><PlaySquare {...iconProps} /></button>
        <button className={`quick-action${activeView === 'marketplace' ? ' active' : ''}`} type="button" aria-label="Marketplace" aria-current={activeView === 'marketplace' ? 'page' : undefined} onClick={() => navigate('/search?view=marketplace')}><Store {...iconProps} /></button>
        <button className={`quick-action${activeView === 'groups' ? ' active' : ''}`} type="button" aria-label="Groups" aria-current={activeView === 'groups' ? 'page' : undefined} onClick={() => navigate('/search?view=groups')}><Users {...iconProps} /></button>
        <button className={`quick-action${activeView === 'gaming' ? ' active' : ''}`} type="button" aria-label="Games" aria-current={activeView === 'gaming' ? 'page' : undefined} onClick={() => navigate('/search?view=gaming')}><Gamepad2 {...iconProps} /></button>
      </nav>

      <div className="navbar-actions">
        <button className="icon-btn ghost-btn" type="button" aria-label="Apps"><Grid2x2 {...iconProps} /></button>
        <button className="icon-btn ghost-btn" type="button" aria-label="Messages" onClick={() => navigate('/messenger')} style={{ position: 'relative' }}>
          <MessageSquareText {...iconProps} />
          {unreadTotal > 0 && (
            <span style={{ position: 'absolute', top: '-3px', right: '-2px', background: '#00a884', color: '#fff', borderRadius: '999px', minWidth: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, padding: '0 5px' }}>{unreadTotal > 9 ? '9+' : unreadTotal}</span>
          )}
        </button>
        <button className="icon-btn ghost-btn" type="button" aria-label="Notifications"><Bell {...iconProps} /></button>
        <button className="avatar-action" type="button" aria-label="Profile" onClick={() => navigate('/profile')}>
          <img className="navbar-avatar" src={profile?.photoURL || '/default-avatar.png'} alt="Profile" />
        </button>
        <button className="mobile-search-btn icon-btn" type="button" onClick={() => setMobileSearchOpen(true)} title="Search" aria-label="Open search"><SearchIcon {...iconProps} /></button>
      </div>
    </header>
  );
}

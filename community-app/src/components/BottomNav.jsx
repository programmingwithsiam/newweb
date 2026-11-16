import { NavLink, useLocation } from 'react-router-dom';
import { Home, Menu, MessageSquareText, PlaySquare, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const iconProps = { size: 20, strokeWidth: 1.75, 'aria-hidden': true };

export default function BottomNav({ onMenu }) {
  const { pathname, search } = useLocation();
  const { profile, user } = useAuth();
  const activeView = new URLSearchParams(search).get('view');
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end title="Home" aria-label="Home" className={({ isActive }) => (isActive ? 'active' : '')}><Home {...iconProps} /><span>Home</span></NavLink>
      <NavLink to="/search?view=reels" title="Reels" aria-label="Reels" className={() => (pathname === '/search' && activeView === 'reels' ? 'active' : '')}><PlaySquare {...iconProps} /><span>Reels</span></NavLink>
      <NavLink to={user ? '/messenger' : '/login'} title="Messages" aria-label="Messages" className={({ isActive }) => (isActive ? 'active' : '')}><MessageSquareText {...iconProps} /><span>Messages</span></NavLink>
      <NavLink to={profile?.uid || user?.uid ? `/profile/${profile?.uid || user.uid}` : '/login'} title="Profile" aria-label="Profile" className={() => (pathname.startsWith('/profile/') ? 'active' : '')}><UserRound {...iconProps} /><span>Profile</span></NavLink>
      <button type="button" title="Menu" aria-label="Menu" onClick={onMenu}><Menu {...iconProps} /><span>Menu</span></button>
    </nav>
  );
}

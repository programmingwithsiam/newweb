import { NavLink, useLocation } from 'react-router-dom';
import { Bell, Home, Menu, PlaySquare, Store, Users } from 'lucide-react';

const iconProps = { size: 20, strokeWidth: 1.75, 'aria-hidden': true };

export default function BottomNav({ onMenu }) {
  const { pathname, search } = useLocation();
  const activeView = new URLSearchParams(search).get('view');
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end title="Home" aria-label="Home" className={({ isActive }) => (isActive ? 'active' : '')}><Home {...iconProps} /></NavLink>
      <NavLink to="/search?view=reels" title="Reels" aria-label="Reels" className={() => (pathname === '/search' && activeView === 'reels' ? 'active' : '')}><PlaySquare {...iconProps} /></NavLink>
      <NavLink to="/search?view=marketplace" title="Marketplace" aria-label="Marketplace" className={() => (pathname === '/search' && activeView === 'marketplace' ? 'active' : '')}><Store {...iconProps} /></NavLink>
      <NavLink to="/search?view=groups" title="Groups" aria-label="Groups" className={() => (pathname === '/search' && activeView === 'groups' ? 'active' : '')}><Users {...iconProps} /></NavLink>
      <NavLink to="/notifications" title="Notifications" aria-label="Notifications" className={({ isActive }) => (isActive ? 'active' : '')}><Bell {...iconProps} /></NavLink>
      <button type="button" title="Menu" aria-label="Menu" onClick={onMenu}><Menu {...iconProps} /></button>
    </nav>
  );
}

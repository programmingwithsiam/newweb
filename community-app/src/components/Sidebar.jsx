import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, Bookmark, BookOpen, Clock3, Gamepad2, Home, MessageCircle, PlusCircle, Search, Settings, ShieldCheck, Store, User, Users, UserRound, Video, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/search?view=friends', label: 'Friends', icon: UserRound },
  { to: '/search?view=saved', label: 'Saved', icon: Bookmark },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/create', label: 'Create Post', icon: PlusCircle },
  { to: '/messenger', label: 'Messenger', icon: MessageCircle },
  { to: '/notifications', label: 'Notifications', icon: Bell },
];

const iconProps = { size: 20, strokeWidth: 1.5, 'aria-hidden': true };

export default function Sidebar({ mobileOpen = false, onClose }) {
  const { user, profile } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
  return (
    <>
      {mobileOpen && <button className="sidebar-backdrop" type="button" aria-label="Close menu" onClick={onClose} />}
      <nav className={`sidebar${mobileOpen ? ' is-open' : ''}`}>
        <div className="sidebar-mobile-head">
          <strong>Menu</strong>
          <button className="icon-btn" type="button" onClick={onClose} aria-label="Close menu"><X {...iconProps} /></button>
        </div>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={onClose} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            <l.icon className="sidebar-icon" {...iconProps} />
            <span>{l.label}</span>
          </NavLink>
        ))}
        <div className="sidebar-section-divider"><span>More community</span></div>
        {[
          { to: '/search?view=memories', label: 'Memories', icon: Clock3 },
          { to: '/search?view=groups', label: 'Groups', icon: Users },
          { to: '/search?view=reels', label: 'Reels', icon: Video },
          { to: '/search?view=marketplace', label: 'Marketplace', icon: Store },
          { to: '/search?view=feeds', label: 'Feeds', icon: BookOpen },
          { to: '/search?view=gaming', label: 'Gaming', icon: Gamepad2 }
        ].map((l) => (
          <NavLink key={l.to} to={l.to} onClick={onClose} className={({ isActive }) => `sidebar-link sidebar-more-link${isActive ? ' active' : ''}`}>
            <l.icon className="sidebar-icon" {...iconProps} />
            <span>{l.label}</span>
          </NavLink>
        ))}
        {profile && (
          <NavLink to={`/profile/${profile.uid}`} onClick={onClose} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            <User className="sidebar-icon" {...iconProps} />
            <span>Profile</span>
          </NavLink>
        )}
        {isAdmin && (
          <a className="sidebar-link" href="/admin">
            <ShieldCheck className="sidebar-icon" {...iconProps} />
            <span>Admin Panel</span>
          </a>
        )}
        <NavLink to="/settings" onClick={onClose} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
          <Settings className="sidebar-icon" {...iconProps} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </>
  );
}

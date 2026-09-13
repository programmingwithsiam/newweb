import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, Home, MessageCircle, PlusCircle, Search, Settings, ShieldCheck, User, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', icon: Home },
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

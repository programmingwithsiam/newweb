import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/search', label: 'Search', icon: '🔍' },
  { to: '/create', label: 'Create Post', icon: '➕' },
  { to: '/messenger', label: 'Messenger', icon: '💬' },
  { to: '/notifications', label: 'Notifications', icon: '🔔' },
];

export default function Sidebar() {
  const { user, profile } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
  return (
    <nav className="sidebar">
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
          <span className="sidebar-icon">{l.icon}</span>
          <span>{l.label}</span>
        </NavLink>
      ))}
      {profile && (
        <NavLink to={`/profile/${profile.uid}`} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
          <span className="sidebar-icon">👤</span>
          <span>Profile</span>
        </NavLink>
      )}
      {isAdmin && (
        <a className="sidebar-link" href="/admin">
          <span className="sidebar-icon">🛠️</span>
          <span>Admin Panel</span>
        </a>
      )}
      <NavLink to="/settings" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
        <span className="sidebar-icon">⚙️</span>
        <span>Settings</span>
      </NavLink>
    </nav>
  );
}

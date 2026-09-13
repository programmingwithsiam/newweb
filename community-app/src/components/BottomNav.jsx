import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, Home, PlusCircle, Search, User } from 'lucide-react';

const iconProps = { size: 20, strokeWidth: 1.75, 'aria-hidden': true };

export default function BottomNav() {
  const { profile } = useAuth();
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end title="Home" aria-label="Home" className={({ isActive }) => (isActive ? 'active' : '')}><Home {...iconProps} /></NavLink>
      <NavLink to="/search" title="Search" aria-label="Search" className={({ isActive }) => (isActive ? 'active' : '')}><Search {...iconProps} /></NavLink>
      <NavLink to="/create" title="Create Post" aria-label="Create Post" className={({ isActive }) => (isActive ? 'active' : '')}><PlusCircle {...iconProps} /></NavLink>
      <NavLink to="/notifications" title="Notifications" aria-label="Notifications" className={({ isActive }) => (isActive ? 'active' : '')}><Bell {...iconProps} /></NavLink>
      <NavLink to={profile ? `/profile/${profile.uid}` : '/login'} title="Profile" aria-label="Profile" className={({ isActive }) => (isActive ? 'active' : '')}>
        <User {...iconProps} />
      </NavLink>
    </nav>
  );
}

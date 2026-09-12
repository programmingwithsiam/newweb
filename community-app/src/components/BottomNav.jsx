import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function BottomNav() {
  const { profile } = useAuth();
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>🏠</NavLink>
      <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : '')}>🔍</NavLink>
      <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>➕</NavLink>
      <NavLink to="/messenger" className={({ isActive }) => (isActive ? 'active' : '')}>💬</NavLink>
      <NavLink to={profile ? `/profile/${profile.uid}` : '/login'} className={({ isActive }) => (isActive ? 'active' : '')}>
        👤
      </NavLink>
    </nav>
  );
}

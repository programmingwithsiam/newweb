import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../firebase/config';
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

const shortcutLinks = [
  { to: '/search?view=groups', label: 'Groups', icon: Users },
  { to: '/search?view=reels', label: 'Reels', icon: Video },
  { to: '/search?view=marketplace', label: 'Marketplace', icon: Store }
];

const moreLinks = [
  { to: '/search?view=memories', label: 'Memories', icon: Clock3 },
  { to: '/search?view=feeds', label: 'Feeds', icon: BookOpen },
  { to: '/search?view=gaming', label: 'Gaming', icon: Gamepad2 }
];

const iconProps = { size: 20, strokeWidth: 1.5, 'aria-hidden': true };

export default function Sidebar({ mobileOpen = false, onClose }) {
  const [showMore, setShowMore] = useState(false);
  const [unreadTotal, setUnreadTotal] = useState(0);
  const { user, profile } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';

  useEffect(() => {
    if (!user) return undefined;
    const chatsQuery = query(collection(firestore, 'chats'), where('members', 'array-contains', user.uid), orderBy('lastMessageAt', 'desc'));
    const unsub = onSnapshot(chatsQuery, (snapshot) => {
      const total = snapshot.docs.reduce((sum, docSnap) => sum + Number(docSnap.data()?.unread?.[user.uid] || 0), 0);
      setUnreadTotal(total);
    });
    return () => unsub();
  }, [user]);

  return (
    <>
      {mobileOpen && <button className="sidebar-backdrop" type="button" aria-label="Close menu" onClick={onClose} />}
      <nav className={`sidebar${mobileOpen ? ' is-open' : ''}`}>
        <div className="sidebar-mobile-head">
          <strong>Menu</strong>
          <button className="icon-btn" type="button" onClick={onClose} aria-label="Close menu"><X {...iconProps} /></button>
        </div>
        <NavLink to={profile ? `/profile/${profile.uid}` : '/login'} onClick={onClose} aria-label="Your profile" className={({ isActive }) => `sidebar-link sidebar-profile${isActive ? ' active' : ''}`}>
          {profile?.photoURL ? <img className="sidebar-profile-avatar" src={profile.photoURL} alt="" /> : <User className="sidebar-icon" {...iconProps} />}
          <span>{profile?.fullName || 'Your profile'}</span>
        </NavLink>
        {links.map((l) => {
          const isMessenger = l.to === '/messenger';
          return (
            <NavLink key={l.to} to={l.to} onClick={onClose} aria-label={l.label} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`} style={isMessenger ? { position: 'relative' } : undefined}>
              <l.icon className="sidebar-icon" {...iconProps} />
              <span>{l.label}</span>
              {isMessenger && unreadTotal > 0 && (
                <span style={{ marginLeft: 'auto', background: '#00a884', color: '#fff', borderRadius: '999px', minWidth: '18px', height: '18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, padding: '0 5px' }}>{unreadTotal > 9 ? '9+' : unreadTotal}</span>
              )}
            </NavLink>
          );
        })}
        <div className="sidebar-section-divider"><span>Your shortcuts</span></div>
        {shortcutLinks.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={onClose} aria-label={l.label} className={({ isActive }) => `sidebar-link sidebar-more-link${isActive ? ' active' : ''}`}>
            <l.icon className="sidebar-icon" {...iconProps} />
            <span>{l.label}</span>
          </NavLink>
        ))}
        <button className="sidebar-see-more" type="button" aria-expanded={showMore} onClick={() => setShowMore((current) => !current)}>
          {showMore ? 'See less' : 'See more'}
        </button>
        {showMore && moreLinks.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={onClose} aria-label={l.label} className={({ isActive }) => `sidebar-link sidebar-more-link${isActive ? ' active' : ''}`}>
            <l.icon className="sidebar-icon" {...iconProps} />
            <span>{l.label}</span>
          </NavLink>
        ))}
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

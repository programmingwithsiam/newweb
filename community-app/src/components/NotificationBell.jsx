import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, query, orderByChild, equalTo, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { Bell, MessageSquare } from 'lucide-react';

export default function NotificationBell({ kind = 'community' }) {
  const { user } = useAuth();
  const [unread, setUnread] = useState(0);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const destination = kind === 'messages' ? '/message-notifications' : '/notifications';
  const label = kind === 'messages' ? 'Message notifications' : 'Notifications';

  useEffect(() => {
    if (!user) return;
    const path = kind === 'messages' ? 'messageNotifications' : 'notifications';
    const notifRef = query(ref(db, `${path}/${user.uid}`), orderByChild('read'), equalTo(false));
    const unsub = onValue(notifRef, (snap) => {
      setUnread(snap.exists() ? Object.keys(snap.val()).length : 0);
    });
    return unsub;
  }, [user, kind]);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, []);

  return (
    <div className="notification-trigger" ref={wrapperRef}>
      <button className={`icon-btn notif-bell${open ? ' is-open' : ''}`} type="button" onClick={() => setOpen((value) => !value)} aria-label={label} aria-expanded={open}>
        {kind === 'messages'
          ? <MessageSquare size={20} strokeWidth={1.5} aria-hidden="true" />
          : <Bell size={20} strokeWidth={1.5} aria-hidden="true" />}
        {unread > 0 && <span className="badge">{unread > 99 ? '99+' : unread}</span>}
      </button>
      {open && (
        <div className="notification-popover" role="dialog" aria-label={label}>
          <div className="notification-popover-head">
            <strong>{label}</strong>
            <span>{unread > 0 ? `${unread} unread` : 'All caught up'}</span>
          </div>
          <p>{unread > 0 ? 'You have new activity waiting for you.' : 'There are no new notifications right now.'}</p>
          <button className="notification-popover-link" type="button" onClick={() => { setOpen(false); navigate(destination); }}>
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
}

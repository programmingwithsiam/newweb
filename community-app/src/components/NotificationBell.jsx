import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, query, orderByChild, equalTo, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';

export default function NotificationBell({ kind = 'community' }) {
  const { user } = useAuth();
  const [unread, setUnread] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const path = kind === 'messages' ? 'messageNotifications' : 'notifications';
    const notifRef = query(ref(db, `${path}/${user.uid}`), orderByChild('read'), equalTo(false));
    const unsub = onValue(notifRef, (snap) => {
      setUnread(snap.exists() ? Object.keys(snap.val()).length : 0);
    });
    return unsub;
  }, [user, kind]);

  return (
    <button className="icon-btn notif-bell" onClick={() => navigate(kind === 'messages' ? '/message-notifications' : '/notifications')} aria-label={kind === 'messages' ? 'Message notifications' : 'Notifications'}>
      {kind === 'messages' ? '💬' : '🔔'}
      {unread > 0 && <span className="badge">{unread > 99 ? '99+' : unread}</span>}
    </button>
  );
}

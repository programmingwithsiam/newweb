import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue, update, query, orderByChild, limitToLast } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/helpers';
import { Bell, Heart, MessageCircle, MessageSquare, Reply, UserPlus } from 'lucide-react';

const LABELS = {
  friend_request: (n) => `${n.fromName || 'Someone'} sent you a friend request`,
  friend_accept: (n) => `${n.fromName || 'Someone'} accepted your friend request`,
  follow: (n) => `${n.fromName || 'Someone'} followed you`,
  reaction: (n) => `${n.fromName || 'Someone'} reacted to your ${n.commentId ? 'comment' : 'post'}`,
  comment: (n) => `${n.fromName || 'Someone'} commented on your post`,
  reply: (n) => `${n.fromName || 'Someone'} replied to your comment`,
  message: (n) => `${n.fromName || 'Someone'} sent you a message`,
  group_invite: (n) => `${n.fromName || 'Someone'} added you to a group`
};

const TYPE_ICONS = {
  friend_request: UserPlus,
  friend_accept: UserPlus,
  follow: UserPlus,
  reaction: Heart,
  comment: MessageCircle,
  reply: Reply,
  message: MessageSquare,
  group_invite: UserPlus
};

function NotificationRow({ id, n, onClick }) {
  const [fromName, setFromName] = useState('');
  const [fromPhoto, setFromPhoto] = useState('');
  useEffect(() => {
    if (!n.fromUid) return;
    const unsub = onValue(ref(db, `users/${n.fromUid}`), (snap) => {
      setFromName(snap.val()?.fullName || '');
      setFromPhoto(snap.val()?.photoURL || '');
    });
    return unsub;
  }, [n.fromUid]);
  const TypeIcon = TYPE_ICONS[n.type] || Bell;

  return (
    <button className={`notification-row${n.read ? '' : ' unread'}`} onClick={() => onClick(id, n)}>
      <span className="notification-type-icon" aria-hidden="true"><TypeIcon size={20} strokeWidth={1.5} /></span>
      <img className="avatar-sm" src={fromPhoto || '/default-avatar.png'} alt="" />
      <span className="notification-copy">
        <span className="notification-message">{LABELS[n.type] ? LABELS[n.type]({ ...n, fromName }) : 'New notification'}</span>
        <span className="notification-time">{timeAgo(n.createdAt)}</span>
      </span>
      {!n.read && <span className="notification-unread-dot" aria-label="Unread" />}
    </button>
  );
}

export default function Notifications({ kind = 'community' }) {
  const { user } = useAuth();
  const [items, setItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const path = kind === 'messages' ? 'messageNotifications' : 'notifications';
    const r = query(ref(db, `${path}/${user.uid}`), orderByChild('createdAt'), limitToLast(50));
    const unsub = onValue(r, (snap) => setItems(snap.val() || {}));
    return unsub;
  }, [user, kind]);

  function handleClick(id, n) {
    const path = kind === 'messages' ? 'messageNotifications' : 'notifications';
    update(ref(db, `${path}/${user.uid}/${id}`), { read: true });
    if (n.postId) navigate(`/post/${n.postId}`);
    else if (n.convId) navigate(`/messenger/${n.convId}`);
    else if (n.fromUid) navigate(`/profile/${n.fromUid}`);
  }

  const ordered = Object.entries(items).sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));

  return (
    <div className="notifications-page">
      <div className="notifications-heading">
        <div>
          <span className="notifications-eyebrow">ACTIVITY CENTER</span>
          <h2>{kind === 'messages' ? 'Message notifications' : 'Community notifications'}</h2>
          <p>Stay up to date with what is happening around your community.</p>
        </div>
        <span className="notifications-count">{ordered.length} {ordered.length === 1 ? 'update' : 'updates'}</span>
      </div>
      {ordered.length === 0 && <div className="empty-state notifications-empty"><span className="empty-state-icon"><Bell size={20} strokeWidth={1.5} /></span><strong>You’re all caught up</strong><p>No new notifications yet.</p></div>}
      {ordered.map(([id, n]) => <NotificationRow key={id} id={id} n={n} onClick={handleClick} />)}
    </div>
  );
}

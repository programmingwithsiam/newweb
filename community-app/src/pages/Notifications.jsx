import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue, update, query, orderByChild, limitToLast } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/helpers';

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

  return (
    <button className={`notification-row${n.read ? '' : ' unread'}`} onClick={() => onClick(id, n)}>
      <img className="avatar-sm" src={fromPhoto || '/default-avatar.png'} alt="" />
      <div>
        <p>{LABELS[n.type] ? LABELS[n.type]({ ...n, fromName }) : 'New notification'}</p>
        <span className="muted small">{timeAgo(n.createdAt)}</span>
      </div>
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
      <h2>{kind === 'messages' ? 'Message notifications' : 'Community notifications'}</h2>
      {ordered.length === 0 && <div className="empty-state"><p>No notifications yet.</p></div>}
      {ordered.map(([id, n]) => <NotificationRow key={id} id={id} n={n} onClick={handleClick} />)}
    </div>
  );
}

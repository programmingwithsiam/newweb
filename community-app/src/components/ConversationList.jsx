import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/helpers';

function ConversationRow({ convId, conv, myUid, active, onClick }) {
  const [peer, setPeer] = useState(null);
  const [unread, setUnread] = useState(0);
  const [presence, setPresence] = useState(null);
  const isGroup = conv.type === 'group';
  const peerUid = !isGroup ? Object.keys(conv.members || {}).find((m) => m !== myUid) : null;

  useEffect(() => {
    if (!peerUid) return;
    const unsub = onValue(ref(db, `users/${peerUid}`), (snap) => setPeer(snap.val()));
    return unsub;
  }, [peerUid]);

  useEffect(() => {
    if (!peerUid) return;
    const unsub = onValue(ref(db, `presence/${peerUid}`), (snap) => setPresence(snap.val()));
    return unsub;
  }, [peerUid]);

  useEffect(() => {
    const unsub = onValue(ref(db, `userConversations/${myUid}/${convId}/unreadCount`), (snap) => setUnread(snap.val() || 0));
    return unsub;
  }, [convId, myUid]);

  const title = isGroup ? conv.name : peer?.fullName || '...';
  const photo = isGroup ? conv.photoURL : peer?.photoURL;

  return (
    <button className={`conversation-row${active ? ' active' : ''}`} onClick={onClick}>
      <div className="avatar-wrap">
        <img className="avatar-sm" src={photo || '/default-avatar.png'} alt="" />
      </div>
      <div className="conversation-meta">
        <strong>{title}</strong>
        <span className="muted small">{conv.lastMessage || 'Say hello!'}</span>
      </div>
      <div className="conversation-side">
        <span className="muted small">{timeAgo(conv.lastMessageAt)}</span>
        {unread > 0 && <span className="badge">{unread}</span>}
      </div>
    </button>
  );
}

export default function ConversationList({ activeId, onSelect }) {
  const { user } = useAuth();
  const [conversations, setConversations] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!user) return;
    const unsub = onValue(ref(db, `userConversations/${user.uid}`), async (snap) => {
      const ids = snap.exists() ? Object.keys(snap.val()) : [];
      const convs = {};
      for (const id of ids) {
        const cSnap = await new Promise((res) => onValue(ref(db, `conversations/${id}`), res, { onlyOnce: true }));
        if (cSnap.exists()) convs[id] = cSnap.val();
      }
      setConversations(convs);
    });
    return unsub;
  }, [user]);

  const filtered = Object.entries(conversations).filter(([, c]) =>
    !search || (c.name || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="conversation-list">
      <div className="conversation-search">
        <input placeholder="Search conversations" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {filtered
        .sort((a, b) => (b[1].lastMessageAt || 0) - (a[1].lastMessageAt || 0))
        .map(([id, conv]) => (
          <ConversationRow key={id} convId={id} conv={conv} myUid={user.uid} active={id === activeId} onClick={() => onSelect(id)} />
        ))}
      {filtered.length === 0 && <div className="empty-state"><p className="muted">No conversations yet.</p></div>}
    </div>
  );
}

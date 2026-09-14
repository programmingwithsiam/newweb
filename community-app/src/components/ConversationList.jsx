import { useEffect, useMemo, useState } from 'react';
import { ref, onValue, get } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/helpers';
import { MessageCircle, Search } from 'lucide-react';
import { messengerSeedConversations } from '../data/messengerSeed';

function initials(name = '') {
  return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase() || '?';
}

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
    if (!myUid || !convId) return;
    const unsub = onValue(ref(db, `userConversations/${myUid}/${convId}/unreadCount`), (snap) => setUnread(snap.val() || 0));
    return unsub;
  }, [convId, myUid]);

  const title = isGroup ? conv.name : peer?.fullName || conv._displayName || '...';
  const photo = isGroup ? conv.photoURL : peer?.photoURL;
  const displayName = title === '...' ? 'Loading conversation' : title;

  return (
    <button className={`conversation-row${active ? ' active' : ''}${unread > 0 ? ' has-unread' : ''}`} onClick={onClick} type="button">
      <div className="avatar-wrap">
        {photo ? <img className="avatar-sm" src={photo} alt="" /> : <span className="avatar-sm avatar-initials" aria-hidden="true">{initials(displayName)}</span>}
        {presence?.state === 'online' && <span className="online-dot" aria-label="Online" />}
      </div>
      <div className="conversation-meta">
        <strong>{displayName}</strong>
        <span className="muted small">{conv.lastMessage || 'Say hello!'}</span>
      </div>
      <div className="conversation-side">
        <span className="muted small">{timeAgo(conv.lastMessageAt)}</span>
        {unread > 0 && <span className="unread-badge">{unread > 9 ? '9+' : unread}</span>}
      </div>
    </button>
  );
}

function ConversationSkeleton() {
  return (
    <div className="conversation-skeleton" aria-label="Loading conversations">
      <span className="skeleton-avatar" />
      <div className="skeleton-copy">
        <span className="skeleton-line short" />
        <span className="skeleton-line" />
      </div>
      <span className="skeleton-line tiny" />
    </div>
  );
}

export default function ConversationList({ activeId, onSelect }) {
  const { user } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    console.log('[ConversationList] mounted. user:', user?.uid || null);

    if (!user) {
      const fallback = messengerSeedConversations.map((conv) => ({ id: conv.id, conv }));
      console.log('[ConversationList] no user, using fallback seed list:', fallback);
      setConversations(fallback);
      setLoading(false);
      return;
    }

    const unsub = onValue(ref(db, `userConversations/${user.uid}`), async (snap) => {
      console.log('[ConversationList] snapshot received for user:', user.uid, 'exists:', snap.exists(), 'raw:', snap.val());

      const ids = snap.exists() ? Object.keys(snap.val()) : [];
      const next = [];

      for (const id of ids) {
        const cSnap = await get(ref(db, `conversations/${id}`));
        if (!cSnap.exists()) continue;

        const conv = cSnap.val();
        let displayName = conv.name || '';

        if (!displayName && conv.members) {
          const peerUid = Object.keys(conv.members).find((member) => member !== user.uid);
          if (peerUid) {
            const peerSnap = await get(ref(db, `users/${peerUid}`));
            displayName = peerSnap.val()?.fullName || '';
          }
        }

        next.push({ id, conv: { ...conv, _displayName: displayName } });
      }

      console.log('[ConversationList] fetched IDs:', ids);
      console.log('[ConversationList] built conversation array:', next);

      if (!next.length) {
        const fallback = messengerSeedConversations.map((conv) => ({ id: conv.id, conv }));
        console.log('[ConversationList] array empty, using hardcoded seed fallback:', fallback);
        setConversations(fallback);
      } else {
        setConversations(next);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [user]);

  const normalizedSearch = search.trim().toLowerCase();
  const filtered = useMemo(() => {
    return conversations
      .filter(({ conv }) => {
        if (filter === 'unread' && !(conv.unreadCount || 0)) return false;
        if (filter === 'groups' && conv.type !== 'group') return false;
        if (filter === 'communities' && conv.type !== 'community') return false;
        return true;
      })
      .filter(({ conv, id }) => {
        if (!normalizedSearch) return true;
        const title = (conv.name || conv._displayName || '').toLowerCase();
        const lastMessage = (conv.lastMessage || '').toLowerCase();
        const haystack = `${title} ${lastMessage} ${id}`.toLowerCase();
        return haystack.includes(normalizedSearch);
      })
      .sort((a, b) => (b.conv.lastMessageAt || 0) - (a.conv.lastMessageAt || 0));
  }, [conversations, filter, normalizedSearch]);

  return (
    <div className="conversation-list">
      <div className="conversation-search">
        <Search size={17} aria-hidden="true" />
        <input placeholder="Search Messenger" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="conversation-filters" aria-label="Conversation filters">
        {['all', 'unread', 'groups', 'communities'].map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-pill${filter === option ? ' active' : ''}`}
            onClick={() => setFilter(option)}
          >
            {option === 'all' ? 'All' : option === 'unread' ? 'Unread' : option === 'groups' ? 'Groups' : 'Communities'}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="conversation-list-loading" aria-live="polite">
          {Array.from({ length: 5 }).map((_, index) => (
            <ConversationSkeleton key={`conversation-skeleton-${index}`} />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        filtered.map(({ id, conv }) => (
          <ConversationRow key={id} convId={id} conv={conv} myUid={user.uid} active={id === activeId} onClick={() => onSelect(id)} />
        ))
      ) : (
        <div className="conversation-empty empty-state">
          <span className="conversation-empty-icon"><MessageCircle size={27} /></span>
          <strong>{search ? 'No matches found' : 'No conversations yet'}</strong>
          <p>{search ? 'Try a different search.' : 'Start a conversation with someone from your community.'}</p>
        </div>
      )}
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Gamepad2, Grid2x2, Home, Menu, MessageSquareText, PlaySquare, Search as SearchIcon, Store, Users } from 'lucide-react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../firebase/config';
import ChatWindow from './ChatWindow';

const iconProps = { size: 19, strokeWidth: 1.8, 'aria-hidden': true };

function formatMessageTime(value) {
  if (!value) return 'Now';
  if (typeof value.toDate === 'function') return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(value.toDate());
  if (value instanceof Date) return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(value);
  if (typeof value.seconds === 'number') return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date(value.seconds * 1000));
  return 'Now';
}

export default function Navbar({ onMenu }) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [chatSearch, setChatSearch] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [chatRows, setChatRows] = useState([]);
  const [userMap, setUserMap] = useState({});
  const [unreadTotal, setUnreadTotal] = useState(0);
  const [dockChats, setDockChats] = useState([]);
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { profile, user } = useAuth();
  const activeView = pathname === '/' ? 'home' : new URLSearchParams(search).get('view');

  useEffect(() => {
    if (!user) return undefined;

    const chatsQuery = query(
      collection(firestore, 'chats'),
      where('members', 'array-contains', user.uid),
      orderBy('lastMessageAt', 'desc')
    );

    const unsub = onSnapshot(chatsQuery, (snapshot) => {
      const chats = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
      setChatRows(chats);
      setUnreadTotal(chats.reduce((sum, chat) => sum + Number(chat.unread?.[user.uid] || 0), 0));
    });

    return () => unsub();
  }, [user]);

  useEffect(() => {
    if (!user) return undefined;

    const usersQuery = query(collection(firestore, 'users'));
    const unsub = onSnapshot(usersQuery, (snapshot) => {
      const nextMap = {};
      snapshot.docs.forEach((docSnap) => {
        nextMap[docSnap.id] = docSnap.data();
      });
      setUserMap(nextMap);
    });

    return () => unsub();
  }, [user]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setPanelOpen(false);
      }
    }

    function handleKey(event) {
      if (event.key === 'Escape') setPanelOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const filteredChats = useMemo(() => {
    const q = chatSearch.trim().toLowerCase();
    if (!q) return chatRows;
    return chatRows.filter((chat) => {
      const peerUid = chat.members?.find((member) => member !== user?.uid) || '';
      const peer = userMap[peerUid] || {};
      const haystack = [peer.displayName, peer.email, chat.lastMessage].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [chatRows, chatSearch, user?.uid, userMap]);

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  function openChat(chatId) {
    setPanelOpen(false);
    setDockChats((current) => (current.includes(chatId) ? current : [...current.slice(-2), chatId]));
    if (pathname !== '/messenger') navigate(`/messenger/${chatId}`);
  }

  function removeDockChat(chatId) {
    setDockChats((current) => current.filter((item) => item !== chatId));
  }

  function minimizeDockChat(chatId) {
    setDockChats((current) => current.filter((item) => item !== chatId));
  }

  return (
    <>
      <header className="navbar">
        <button className="mobile-menu-btn icon-btn" type="button" onClick={onMenu} aria-label="Open menu">
          <Menu {...iconProps} />
        </button>
        <a className="navbar-brand" href="/" aria-label="Back to CodeWithSiam site" title="Back to site">
          <img className="brand-mark navbar-brand-avatar" src={profile?.photoURL || '/assets/images/profile-siam.webp'} alt="" />
          <span className="cwsfb-brand-name">CodeWithSiam</span>
        </a>

        <form className={`navbar-search${mobileSearchOpen ? ' is-mobile-open' : ''}`} onSubmit={(e) => { submitSearch(e); setMobileSearchOpen(false); }}>
          <SearchIcon className="navbar-search-icon" size={17} aria-hidden="true" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search CodeWithSiam" aria-label="Search" />
        </form>

        <nav className="navbar-quick-actions" aria-label="Community navigation">
          <button className={`quick-action${activeView === 'home' ? ' active' : ''}`} type="button" aria-label="Home" aria-current={activeView === 'home' ? 'page' : undefined} onClick={() => navigate('/')}><Home {...iconProps} /></button>
          <button className={`quick-action${activeView === 'reels' ? ' active' : ''}`} type="button" aria-label="Reels" aria-current={activeView === 'reels' ? 'page' : undefined} onClick={() => navigate('/search?view=reels')}><PlaySquare {...iconProps} /></button>
          <button className={`quick-action${activeView === 'marketplace' ? ' active' : ''}`} type="button" aria-label="Marketplace" aria-current={activeView === 'marketplace' ? 'page' : undefined} onClick={() => navigate('/search?view=marketplace')}><Store {...iconProps} /></button>
          <button className={`quick-action${activeView === 'groups' ? ' active' : ''}`} type="button" aria-label="Groups" aria-current={activeView === 'groups' ? 'page' : undefined} onClick={() => navigate('/search?view=groups')}><Users {...iconProps} /></button>
          <button className={`quick-action${activeView === 'gaming' ? ' active' : ''}`} type="button" aria-label="Games" aria-current={activeView === 'gaming' ? 'page' : undefined} onClick={() => navigate('/search?view=gaming')}><Gamepad2 {...iconProps} /></button>
        </nav>

        <div className="navbar-actions">
          <button className="icon-btn ghost-btn" type="button" aria-label="Apps"><Grid2x2 {...iconProps} /></button>
          <div className="cwschat chat-trigger-wrap" ref={panelRef}>
            <button className="icon-btn ghost-btn cwschat-chat-button" type="button" aria-label="Chats" onClick={() => setPanelOpen((open) => !open)}>
              <MessageSquareText {...iconProps} />
              {unreadTotal > 0 && <span className="cwschat-top-badge">{unreadTotal > 9 ? '9+' : unreadTotal}</span>}
            </button>

            {panelOpen && (
              <div className="cwschat dropdown-panel" role="dialog" aria-label="Chats">
                <div className="cwschat dropdown-head">
                  <span>Chats</span>
                  <button type="button" className="cwschat small-icon-button" aria-label="Create new chat">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  </button>
                </div>

                <div className="cwschat search-pill">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4a7 7 0 015.6 11.9l3.7 3.7 1.4-1.4-3.7-3.7A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z" fill="currentColor" /></svg>
                  <input value={chatSearch} onChange={(event) => setChatSearch(event.target.value)} placeholder="Search chats" aria-label="Search chats" />
                </div>

                <div className="cwschat tabs-row">
                  <button type="button" className="cwschat tab active">All</button>
                  <button type="button" className="cwschat tab">Unread</button>
                </div>

                <div className="cwschat dropdown-list">
                  {filteredChats.length === 0 ? (
                    <div className="cwschat empty-list">No chats yet.</div>
                  ) : (
                    filteredChats.map((chat) => {
                      const peerUid = chat.members?.find((member) => member !== user?.uid) || '';
                      const peer = userMap[peerUid] || {};
                      const unreadCount = Number(chat.unread?.[user?.uid] || 0);
                      const preview = chat.lastMessage || 'Start the conversation';

                      return (
                        <button key={chat.id} type="button" className="cwschat chat-row" onClick={() => openChat(chat.id)}>
                          <div className="cwschat avatar-wrap">
                            {peer.photoURL ? <img src={peer.photoURL} alt="" className="cwschat row-avatar" /> : <span className="cwschat row-avatar fallback">{(peer.displayName || 'C').slice(0, 1).toUpperCase()}</span>}
                            {peer.online && <span className="cwschat online-dot" />}
                          </div>

                          <div className="cwschat chat-row-copy">
                            <div className="cwschat chat-row-top">
                              <span className="cwschat chat-name">{peer.displayName || 'CodeWithSiam user'}</span>
                              <span className="cwschat chat-time">{formatMessageTime(chat.lastMessageAt)}</span>
                            </div>
                            <div className="cwschat chat-row-bottom">
                              <span className="cwschat chat-preview">{chat.lastMessage?.startsWith(user?.uid) ? preview : preview}</span>
                              {unreadCount > 0 && <span className="cwschat unread-pill">{unreadCount > 9 ? '9+' : unreadCount}</span>}
                            </div>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>

                <div className="cwschat dropdown-footer" onClick={() => navigate('/messenger')}>
                  See all in chats
                </div>
              </div>
            )}
          </div>

          <button className="icon-btn ghost-btn" type="button" aria-label="Notifications"><Bell {...iconProps} /></button>
          <button className="avatar-action" type="button" aria-label="Profile" onClick={() => navigate('/profile')}>
            <img className="navbar-avatar" src={profile?.photoURL || '/default-avatar.png'} alt="Profile" />
          </button>
          <button className="mobile-search-btn icon-btn" type="button" onClick={() => setMobileSearchOpen(true)} title="Search" aria-label="Open search"><SearchIcon {...iconProps} /></button>
        </div>
      </header>

      {dockChats.length > 0 && (
        <div className="cwschat dock-stack">
          {dockChats.map((chatId) => {
            const activeChat = chatRows.find((chat) => chat.id === chatId) || null;
            return (
              <ChatWindow
                key={chatId}
                chat={activeChat}
                chatId={chatId}
                currentUser={user}
                usersMap={userMap}
                compact
                onClose={() => removeDockChat(chatId)}
                onMinimize={() => minimizeDockChat(chatId)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

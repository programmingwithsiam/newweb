import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Bell,
  Ellipsis,
  Gamepad2,
  Grid2x2,
  Home,
  Menu,
  MessageSquareText,
  PlaySquare,
  Search as SearchIcon,
  SquarePen,
  Store,
  Users,
  X,
} from 'lucide-react';
import {
  endAt,
  get,
  limitToFirst,
  orderByChild,
  query,
  ref,
  serverTimestamp,
  startAt,
  update,
} from 'firebase/database';
import { useAuth } from '../context/AuthContext';
import { useChats } from '../context/ChatsContext';
import { messengerStrings } from '../messenger-strings';
import { db } from '../firebase/config';
import { findOrCreateDirectChat, normalizeDisplayName, normalizeTimestamp } from '../utils/chatService';
import ChatWindow from './ChatWindow';
import '../styles/chat-dropdown.css';

const iconProps = { size: 19, strokeWidth: 1.8, 'aria-hidden': true };

function parseTimestamp(value) {
  if (value && typeof value.toDate === 'function') return value.toDate();
  const timestamp = normalizeTimestamp(value);
  return timestamp ? new Date(timestamp) : null;
}

function formatMessageTime(value) {
  const date = parseTimestamp(value);
  if (!date || Number.isNaN(date.getTime())) return messengerStrings.dateUnavailable;
  const diff = Math.max(0, Date.now() - date.getTime());
  if (diff < 60_000) return messengerStrings.now;
  if (diff < 60 * 60_000) return `${Math.floor(diff / 60_000)}m`;
  if (diff < 24 * 60 * 60_000) return `${Math.floor(diff / (60 * 60_000))}h`;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return messengerStrings.yesterday;
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date);
}

function getChatTitle(chat, currentUid, profiles) {
  const peers = (chat.members || [])
    .filter((member) => member !== currentUid)
    .map((uid) => normalizeDisplayName(
      profiles[uid]?.displayName,
      profiles[uid]?.fullName,
      profiles[uid]?.username,
      chat.memberProfiles?.[uid]?.displayName,
      chat.memberProfiles?.[uid]?.fullName,
      chat.memberProfiles?.[uid]?.name,
      chat.lastMessageSenderUid === uid ? chat.lastMessageSenderName : '',
      chat.lastMessageSenderUid === uid ? chat.lastMessageSenderEmail : ''
    ))
    .filter(Boolean);
  if (!peers.length) return chat.members?.length > 2 ? messengerStrings.groupConversation : messengerStrings.communityMember;
  if (chat.members?.length > 2 && peers.length > 1) {
    return peers.length > 2 ? `${peers.slice(0, 2).join(', ')} +${peers.length - 2}` : peers.join(', ');
  }
  return peers[0];
}

export default function Navbar({ onMenu }) {
  const [q, setQ] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [chatSearch, setChatSearch] = useState('');
  const [debouncedChatSearch, setDebouncedChatSearch] = useState('');
  const [activeChatTab, setActiveChatTab] = useState('all');
  const [panelOpen, setPanelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newMessageMode, setNewMessageMode] = useState(false);
  const [dockChats, setDockChats] = useState([]);
  const [minimizedDockChats, setMinimizedDockChats] = useState([]);
  const [dockChatData, setDockChatData] = useState({});
  const [people, setPeople] = useState([]);
  const [peopleLoading, setPeopleLoading] = useState(false);
  const [peopleError, setPeopleError] = useState('');
  const [panelError, setPanelError] = useState('');
  const [startingUid, setStartingUid] = useState('');
  const [peopleRetryVersion, setPeopleRetryVersion] = useState(0);
  const [markingRead, setMarkingRead] = useState(false);
  const [markReadError, setMarkReadError] = useState('');
  const panelRef = useRef(null);
  const chatSearchRef = useRef(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { profile, user } = useAuth();
  const {
    chats: chatRows,
    profiles: userMap,
    loading: chatLoading,
    error: chatError,
    profileError,
    retry: retryChats,
  } = useChats();
  const unreadTotal = useMemo(
    () => chatRows.reduce((sum, chat) => sum + (Number(chat.unread?.[user?.uid] ?? chat.unreadCount ?? 0) > 0 ? 1 : 0), 0),
    [chatRows, user?.uid]
  );
  const activeView = pathname === '/' ? 'home' : new URLSearchParams(search).get('view');
  const isMessengerRoute = pathname.startsWith('/messenger');

  useEffect(() => {
    if (!isMessengerRoute) return;
    setDockChats([]);
    setMinimizedDockChats([]);
    setDockChatData({});
    setPanelOpen(false);
    setNewMessageMode(false);
  }, [isMessengerRoute]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setPanelOpen(false);
        setMenuOpen(false);
        setNewMessageMode(false);
      }
    }

    function handleKey(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setPanelOpen(false);
        setNewMessageMode(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedChatSearch(chatSearch.trim()), 300);
    return () => window.clearTimeout(timer);
  }, [chatSearch]);

  useEffect(() => {
    if (!panelOpen || !newMessageMode) return;
    window.requestAnimationFrame(() => chatSearchRef.current?.focus());
  }, [newMessageMode, panelOpen]);

  useEffect(() => {
    const term = debouncedChatSearch.toLowerCase();
    if (!panelOpen || !term || !user?.uid) {
      setPeople([]);
      setPeopleLoading(false);
      setPeopleError('');
      return undefined;
    }

    let active = true;
    setPeopleLoading(true);
    setPeopleError('');
    const peopleQueries = ['usernameLower', 'nameLower'].map((field) => query(
      ref(db, 'users'),
      orderByChild(field),
      startAt(term),
      endAt(`${term}\uf8ff`),
      limitToFirst(20)
    ));
    Promise.all(peopleQueries.map((peopleQuery) => get(peopleQuery)))
      .then((snapshots) => {
        if (!active) return;
        const results = new Map();
        snapshots.forEach((snapshot) => snapshot.forEach((item) => {
          if (item.key === user.uid || results.has(item.key)) return;
          const profile = item.val() || {};
          results.set(item.key, {
            id: item.key,
            uid: item.key,
            displayName: normalizeDisplayName(
              profile.fullName,
              profile.displayName,
              profile.name,
              profile.username
            ) || messengerStrings.communityMember,
            photoURL: profile.photoURL || profile.profilePicture || '',
            username: profile.username || '',
          });
        }));
        setPeople([...results.values()].slice(0, 20));
      })
      .catch((error) => {
        console.error('Chat dropdown people search failed:', {
          code: error?.code || 'unknown',
          message: error?.message || String(error),
        });
        if (active) setPeopleError(messengerStrings.peopleCouldNotLoad);
      })
      .finally(() => {
        if (active) setPeopleLoading(false);
      });

    return () => {
      active = false;
    };
  }, [debouncedChatSearch, panelOpen, peopleRetryVersion, user?.uid]);

  const filteredChats = useMemo(() => {
    const term = debouncedChatSearch.toLowerCase();
    return chatRows.filter((chat) => {
      if (activeChatTab === 'unread' && !Number(chat.unread?.[user?.uid] ?? chat.unreadCount ?? 0)) return false;
      if (activeChatTab === 'online') {
        const peerUids = (chat.members || []).filter((uid) => uid !== user?.uid);
        if (!peerUids.some((uid) => userMap[uid]?.online)) return false;
      }
      if (!term) return true;
      const title = getChatTitle(chat, user?.uid, userMap);
      const members = (chat.members || []).map((uid) => userMap[uid]?.username || '');
      return [title, ...members, chat.lastMessage].join(' ').toLowerCase().includes(term);
    }).sort((first, second) => {
      const firstTime = normalizeTimestamp(first.lastMessageAt) || 0;
      const secondTime = normalizeTimestamp(second.lastMessageAt) || 0;
      return secondTime - firstTime;
    });
  }, [activeChatTab, chatRows, debouncedChatSearch, user?.uid, userMap]);

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  function openChat(chatId, chatData = null) {
    setPanelOpen(false);
    setMenuOpen(false);
    setNewMessageMode(false);
    setChatSearch('');
    if (isMessengerRoute || window.matchMedia('(max-width: 767px)').matches) {
      navigate(`/messenger/${encodeURIComponent(chatId)}`);
      return;
    }
    if (chatData) {
      setDockChatData((current) => ({ ...current, [chatId]: chatData }));
    }
    const nextDockChats = dockChats.includes(chatId)
      ? dockChats
      : [...dockChats.slice(-2), chatId];
    const droppedChats = dockChats.filter((item) => !nextDockChats.includes(item));
    setMinimizedDockChats((current) => current.filter((item) =>
      nextDockChats.includes(item) && item !== chatId
    ));
    if (droppedChats.length) {
      setDockChatData((current) => {
        const next = { ...current };
        droppedChats.forEach((item) => delete next[item]);
        return next;
      });
    }
    setDockChats(nextDockChats);
  }

  async function openPersonChat(person) {
    if (!user?.uid || startingUid) return;
    setStartingUid(person.id);
    setPanelError('');
    try {
      const conversation = await findOrCreateDirectChat(user.uid, person.id, chatRows);
      openChat(conversation.id, conversation);
    } catch (error) {
      console.error('Could not start chat from dropdown:', {
        code: error?.code || 'unknown',
        message: error?.message || String(error),
      });
      setPanelError(messengerStrings.couldNotStartChat);
    } finally {
      setStartingUid('');
    }
  }

  async function markAllChatsRead() {
    if (!user?.uid || markingRead) return;
    const unreadChats = chatRows.filter((chat) => Number(chat.unread?.[user.uid] ?? chat.unreadCount ?? 0) > 0);
    setMarkingRead(true);
    setMarkReadError('');
    try {
      const updates = {};
      unreadChats.forEach((chat) => {
        updates[`conversations/${chat.id}/unreadByUid/${user.uid}`] = 0;
        updates[`conversations/${chat.id}/readAt/${user.uid}`] = serverTimestamp();
        updates[`userConversations/${user.uid}/${chat.id}/unreadCount`] = 0;
        updates[`userConversations/${user.uid}/${chat.id}/unreadByUid/${user.uid}`] = 0;
        updates[`userConversations/${user.uid}/${chat.id}/readAt/${user.uid}`] = serverTimestamp();
        (chat.members || []).forEach((memberUid) => {
          updates[`userConversations/${memberUid}/${chat.id}/readAt/${user.uid}`] = serverTimestamp();
        });
      });
      if (Object.keys(updates).length) {
        await update(ref(db), updates);
        Object.keys(updates).forEach((path) => console.info(`[msgr] read ok ${path}`));
      }
      setMenuOpen(false);
    } catch (error) {
      Object.keys(unreadChats).forEach((chat) => {
        console.error(`[msgr] read FAILED conversations/${chat.id} ${error?.code || 'unknown'}`, error?.message || String(error));
      });
      console.error('Could not mark chats as read:', {
        code: error?.code || 'unknown',
        message: error?.message || String(error),
      });
      setMarkReadError(messengerStrings.couldNotMarkChatsRead);
    } finally {
      setMarkingRead(false);
    }
  }

  function openNewMessage() {
    setPanelOpen(true);
    setMenuOpen(false);
    setNewMessageMode(true);
    setChatSearch('');
    setActiveChatTab('all');
    setPanelError('');
    setMarkReadError('');
  }

  function toggleChatPanel() {
    if (panelOpen) {
      setMenuOpen(false);
      setNewMessageMode(false);
    } else {
      setPanelError('');
      setMarkReadError('');
    }
    setPanelOpen((open) => !open);
  }

  function openFullMessenger() {
    setPanelOpen(false);
    setMenuOpen(false);
    navigate('/messenger');
  }

  function removeDockChat(chatId) {
    setDockChats((current) => current.filter((item) => item !== chatId));
    setMinimizedDockChats((current) => current.filter((item) => item !== chatId));
    setDockChatData((current) => {
      const next = { ...current };
      delete next[chatId];
      return next;
    });
  }

  function minimizeDockChat(chatId) {
    setMinimizedDockChats((current) => current.includes(chatId) ? current : [...current, chatId]);
  }

  return (
    <>
      <header className={`navbar${panelOpen ? ' chats-open' : ''}`}>
        <button className="mobile-menu-btn icon-btn" type="button" onClick={onMenu} aria-label="Open menu">
          <Menu {...iconProps} />
        </button>
        <a className="navbar-brand" href="/" aria-label="Back to CodeWithSiam site" title="Back to site">
          <img className="brand-mark navbar-brand-avatar" src={profile?.photoURL || '/community/profile-siam.webp'} alt="" />
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
          <div className="cwschat chat-trigger-wrap cwschat-topbar" ref={panelRef}>
            <button
              className="icon-btn ghost-btn cwschat-chat-button"
              type="button"
              aria-label={messengerStrings.chatsTitle}
              onClick={() => {
                if (isMessengerRoute) {
                  setPanelOpen(false);
                  navigate('/messenger');
                } else {
                  toggleChatPanel();
                }
              }}
            >
              <MessageSquareText {...iconProps} />
              {unreadTotal > 0 && <span className="cwschat-top-badge">{unreadTotal > 9 ? '9+' : unreadTotal}</span>}
            </button>

            {panelOpen && (
              <section className="cwschat cwschat-topbar-panel" role="dialog" aria-label={messengerStrings.chatsTitle}>
                <header className="cwschat cwschat-topbar-head">
                  <h2>Messages</h2>
                  <div className="cwschat dropdown-actions">
                    <button
                      type="button"
                      className="cwschat-topbar-icon-button cwschat-mobile-home"
                      aria-label="Back to website"
                      title="Back to website"
                      onClick={() => {
                        setPanelOpen(false);
                        setNewMessageMode(false);
                        setMenuOpen(false);
                        navigate('/');
                      }}
                    >
                      <Home size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="cwschat-topbar-icon-button"
                      aria-label={messengerStrings.moreOptions}
                      aria-expanded={menuOpen}
                      onClick={() => setMenuOpen((current) => !current)}
                    >
                      <Ellipsis size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="cwschat-topbar-icon-button"
                      aria-label={messengerStrings.openMessenger}
                      title={messengerStrings.openMessenger}
                      onClick={openFullMessenger}
                    >
                      <MessageSquareText size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="cwschat-topbar-icon-button"
                      aria-label={messengerStrings.newMessage}
                      title={messengerStrings.newMessage}
                      onClick={openNewMessage}
                    >
                      <SquarePen size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="cwschat-topbar-icon-button cwschat-mobile-close"
                      aria-label="Close messages"
                      title="Close"
                      onClick={() => {
                        setPanelOpen(false);
                        setNewMessageMode(false);
                        setMenuOpen(false);
                      }}
                    >
                      <X size={20} aria-hidden="true" />
                    </button>
                  </div>
                  {menuOpen && (
                    <div className="cwschat dropdown-menu" role="menu">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={markAllChatsRead}
                        disabled={markingRead || unreadTotal === 0}
                      >
                        {markingRead ? messengerStrings.markingRead : messengerStrings.markAllRead}
                      </button>
                    </div>
                  )}
                </header>

                <label className="cwschat dropdown-search">
                  <SearchIcon size={16} aria-hidden="true" />
                  <input
                    ref={chatSearchRef}
                    value={chatSearch}
                    onChange={(event) => setChatSearch(event.target.value)}
                    placeholder={messengerStrings.searchMessenger}
                    aria-label={messengerStrings.searchMessenger}
                  />
                  {chatSearch && (
                    <button
                      type="button"
                      className="cwschat clear-search"
                      aria-label={messengerStrings.clearSearch}
                      onClick={() => setChatSearch('')}
                    >
                      ×
                    </button>
                  )}
                </label>

                <div className="cwschat dropdown-tabs" role="tablist" aria-label={messengerStrings.chatsTitle}>
                  {[
                    ['all', messengerStrings.allChats],
                    ['unread', messengerStrings.unreadChats],
                    ['online', 'Online'],
                  ].map(([tab, label]) => (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={activeChatTab === tab}
                      className={`cwschat dropdown-tab${activeChatTab === tab ? ' active' : ''}`}
                      onClick={() => setActiveChatTab(tab)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {(chatError || profileError || markReadError || panelError) && (
                  <div className="cwschat dropdown-error" role="alert">
                    <span>{chatError
                      ? messengerStrings.getChatLoadError(chatError.code)
                      : profileError
                        ? messengerStrings.profilesCouldNotLoad
                        : markReadError || panelError}</span>
                    {(chatError || profileError) && (
                      <button type="button" onClick={retryChats}>{messengerStrings.retry}</button>
                    )}
                  </div>
                )}

                <div className="cwschat dropdown-scroll">
                  {chatLoading && chatRows.length === 0 ? (
                    <div className="cwschat dropdown-skeletons" role="status" aria-label={messengerStrings.loadingChats}>
                      {[0, 1, 2, 3].map((item) => (
                        <div className="cwschat skeleton-row" key={item}>
                          <span className="cwschat skeleton-avatar" />
                          <span className="cwschat skeleton-copy"><i /><i /></span>
                        </div>
                      ))}
                    </div>
                  ) : filteredChats.length > 0 ? (
                    filteredChats.map((chat) => {
                      const peerUid = chat.members?.find((member) => member !== user?.uid) || '';
                      const peer = userMap[peerUid] || {};
                      const unreadCount = Number(chat.unread?.[user?.uid] ?? chat.unreadCount ?? 0);
                      const title = getChatTitle(chat, user?.uid, userMap);
                      const isGroup = (chat.members?.length || 0) > 2;

                      return (
                        <button
                          key={chat.id}
                          type="button"
                          className={`cwschat dropdown-chat-row${unreadCount ? ' unread' : ''}`}
                          onClick={() => openChat(chat.id, chat)}
                        >
                          <span className="cwschat dropdown-avatar-wrap">
                            {peer.photoURL
                              ? <img src={peer.photoURL} alt="" className="cwschat dropdown-avatar" loading="lazy" />
                              : <span className="cwschat dropdown-avatar fallback">{title.slice(0, 1).toUpperCase()}</span>}
                            {!isGroup && peer.online && <span className="cwschat dropdown-online-dot" />}
                          </span>
                          <span className="cwschat dropdown-chat-copy">
                            <span className="cwschat dropdown-chat-top">
                              <strong>{title}</strong>
                              <time>{formatMessageTime(chat.lastMessageAt)}</time>
                            </span>
                            <span className="cwschat dropdown-chat-bottom">
                              <span>{chat.lastMessageLoading
                                ? messengerStrings.loading
                                : chat.lastMessage || messengerStrings.startConversation}</span>
                              {unreadCount > 0 && <i className="cwschat dropdown-unread-dot" aria-label={messengerStrings.unreadChats} />}
                            </span>
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    <div className="cwschat dropdown-empty">
                      <span className="cwschat dropdown-empty-icon"><MessageSquareText size={22} aria-hidden="true" /></span>
                      <strong>{activeChatTab === 'unread'
                        ? messengerStrings.noUnreadChats
                        : activeChatTab === 'online'
                          ? 'No one is online'
                          : debouncedChatSearch
                            ? messengerStrings.noMatchingChats
                            : messengerStrings.noChatsYet}</strong>
                      <span>{messengerStrings.searchToStart}</span>
                      <button type="button" onClick={openNewMessage}>{messengerStrings.findSomeone}</button>
                    </div>
                  )}

                  {(debouncedChatSearch || newMessageMode) && (
                    <section className="cwschat dropdown-people" aria-label={messengerStrings.people}>
                      <h3>{messengerStrings.people}</h3>
                      {peopleLoading ? (
                        <p className="cwschat people-status" role="status">{messengerStrings.searchingPeople}</p>
                      ) : peopleError ? (
                        <p className="cwschat people-status" role="alert">
                          {peopleError}
                          <button type="button" onClick={() => setPeopleRetryVersion((version) => version + 1)}>
                            {messengerStrings.retry}
                          </button>
                        </p>
                      ) : debouncedChatSearch && people.length > 0 ? (
                        people.map((person) => (
                          <button
                            key={person.id}
                            type="button"
                            className="cwschat dropdown-chat-row people-row"
                            onClick={() => openPersonChat(person)}
                            disabled={Boolean(startingUid)}
                          >
                            <span className="cwschat dropdown-avatar-wrap">
                              {person.photoURL
                                ? <img src={person.photoURL} alt="" className="cwschat dropdown-avatar" loading="lazy" />
                                : <span className="cwschat dropdown-avatar fallback">{(person.displayName || 'C').slice(0, 1).toUpperCase()}</span>}
                              {person.online && <span className="cwschat dropdown-online-dot" />}
                            </span>
                            <span className="cwschat dropdown-chat-copy">
                              <span className="cwschat dropdown-chat-top"><strong>{person.displayName || messengerStrings.codeWithSiamUser}</strong></span>
                              <span className="cwschat dropdown-chat-bottom"><span>{person.username ? `@${person.username}` : person.online ? messengerStrings.activeNow : messengerStrings.communityMember}</span></span>
                            </span>
                            {startingUid === person.id && <span className="cwschat starting-indicator" role="status">{messengerStrings.openingChat}</span>}
                          </button>
                        ))
                      ) : debouncedChatSearch && !peopleLoading ? (
                        <p className="cwschat people-status">{messengerStrings.noMatchingPeople}</p>
                      ) : (
                        <p className="cwschat people-status">{messengerStrings.searchToStart}</p>
                      )}
                    </section>
                  )}
                </div>

                <button type="button" className="cwschat cwschat-topbar-footer" onClick={openFullMessenger}>
                  {messengerStrings.seeAllMessenger}
                </button>
              </section>
            )}
          </div>

          <button className="icon-btn ghost-btn" type="button" aria-label="Notifications"><Bell {...iconProps} /></button>
          <button className="avatar-action" type="button" aria-label="Profile" onClick={() => navigate('/profile')}>
            <img className="navbar-avatar" src={profile?.photoURL || '/community/default-avatar.png'} alt="Profile" />
          </button>
          <button className="mobile-search-btn icon-btn" type="button" onClick={() => setMobileSearchOpen(true)} title="Search" aria-label="Open search"><SearchIcon {...iconProps} /></button>
        </div>
      </header>

      {!isMessengerRoute && dockChats.length > 0 && (
        <div className="cwschat cwschat-topbar-dock-stack">
          {dockChats.filter((chatId) => minimizedDockChats.includes(chatId)).map((chatId) => {
            const chat = chatRows.find((item) => item.id === chatId) || dockChatData[chatId] || null;
            const title = chat ? getChatTitle(chat, user?.uid, userMap) : messengerStrings.chatConversation;
            const peerUid = chat?.members?.find((member) => member !== user?.uid) || '';
            const peer = userMap[peerUid] || {};
            const unread = Number(chat?.unread?.[user?.uid] ?? chat?.unreadCount ?? 0) > 0;
            return (
              <button
                key={chatId}
                type="button"
                className="cwschat-topbar-minimized"
                aria-label={messengerStrings.getOpenChatLabel(title)}
                title={title}
                onClick={() => setMinimizedDockChats((current) => current.filter((item) => item !== chatId))}
              >
                {peer.photoURL
                  ? <img src={peer.photoURL} alt="" loading="lazy" />
                  : <span>{title.slice(0, 1).toUpperCase()}</span>}
                {unread && <i aria-hidden="true" />}
              </button>
            );
          })}
          {dockChats.filter((chatId) => !minimizedDockChats.includes(chatId)).map((chatId) => {
            const activeChat = chatRows.find((chat) => chat.id === chatId) || dockChatData[chatId] || null;
            return (
              <div className="msgr-page msgr-docked-window" key={chatId}>
                <ChatWindow
                  chat={activeChat}
                  chatId={chatId}
                  currentUser={user}
                  usersMap={userMap}
                  compact
                  onClose={() => removeDockChat(chatId)}
                  onMinimize={() => minimizeDockChat(chatId)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

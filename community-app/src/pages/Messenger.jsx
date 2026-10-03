import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  endAt,
  get,
  limitToFirst,
  orderByChild,
  query,
  ref,
  startAt,
} from 'firebase/database';
import {
  ArrowLeft,
  Bell,
  ChevronDown,
  Image as ImageIcon,
  LoaderCircle,
  LockKeyhole,
  MessageSquareText,
  Palette,
  Plus,
  Search,
  UserRound,
} from 'lucide-react';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useChats } from '../context/ChatsContext';
import { messengerStrings } from '../messenger-strings';
import {
  findOrCreateDirectChat,
  normalizeConversation,
  normalizeDisplayName,
} from '../utils/chatService';
import ConversationList from '../components/ConversationList';
import ChatWindow from '../components/ChatWindow';
import '../styles/messenger.css';

export default function Messenger() {
  const { convId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const {
    chats,
    profiles: sharedProfiles,
    loading: chatLoading,
    error: chatLoadError,
    profileError,
    retry: retryChats,
  } = useChats();
  const [pageVisible, setPageVisible] = useState(document.visibilityState === 'visible');
  const [directChat, setDirectChat] = useState(null);
  const [directChatLoading, setDirectChatLoading] = useState(false);
  const [directProfile, setDirectProfile] = useState(null);
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [peopleLoading, setPeopleLoading] = useState(false);
  const [error, setError] = useState('');
  const [peopleError, setPeopleError] = useState('');
  const [requestedConversationError, setRequestedConversationError] = useState('');
  const [requestedChatRetry, setRequestedChatRetry] = useState(0);
  const chatsRef = useRef(chats);
  const conversationLoadVersion = useRef(0);
  const searchRef = useRef(null);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const updateViewportHeight = () => {
      const height = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--msgr-vv-height', `${height}px`);
    };
    updateViewportHeight();
    window.visualViewport?.addEventListener('resize', updateViewportHeight);
    window.visualViewport?.addEventListener('scroll', updateViewportHeight);
    window.addEventListener('resize', updateViewportHeight);
    return () => {
      window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      window.visualViewport?.removeEventListener('scroll', updateViewportHeight);
      window.removeEventListener('resize', updateViewportHeight);
      document.documentElement.style.removeProperty('--msgr-vv-height');
    };
  }, []);

  useEffect(() => {
    chatsRef.current = chats;
  }, [chats]);

  useEffect(() => {
    const loadVersion = ++conversationLoadVersion.current;
    if (!convId) {
      setDirectChat(null);
      setDirectChatLoading(false);
      return undefined;
    }

    if (authLoading || !user || !pageVisible || chatLoading || directChat?.id === convId) {
      setDirectChatLoading(false);
      return undefined;
    }

    const listedChat = chatsRef.current.find((chat) => chat.id === convId);
    if (listedChat) {
      setDirectChat(null);
      setDirectChatLoading(false);
      return undefined;
    }

    let active = true;
    setRequestedConversationError('');
    setDirectChatLoading(true);
    get(ref(db, `conversations/${convId}`))
      .then((snapshot) => {
        if (!active || loadVersion !== conversationLoadVersion.current) return;
        setDirectChatLoading(false);
        if (chatsRef.current.some((chat) => chat.id === convId)) return;
        const conversation = snapshot.exists() ? normalizeConversation(convId, snapshot.val()) : null;
        if (!conversation || !conversation.members.includes(user.uid)) {
          setDirectChat(null);
          navigate('/messenger', { replace: true });
          return;
        }
        setDirectChat(conversation);
      })
      .catch((loadError) => {
        console.error('Could not load the requested conversation:', {
          code: loadError?.code || 'unknown',
          message: loadError?.message || String(loadError),
        });
        if (!active || loadVersion !== conversationLoadVersion.current) return;
        setDirectChatLoading(false);
        if (chatsRef.current.some((chat) => chat.id === convId)) return;
        if (['permission-denied', 'PERMISSION_DENIED'].includes(loadError?.code)) {
          setDirectChat(null);
          navigate('/messenger', { replace: true });
          return;
        }
        setRequestedConversationError(messengerStrings.getChatLoadError(loadError?.code));
      });

    return () => {
      active = false;
      if (loadVersion === conversationLoadVersion.current) conversationLoadVersion.current += 1;
    };
  }, [authLoading, chatLoading, convId, directChat?.id, navigate, pageVisible, requestedChatRetry, user?.uid]);

  const directPeerUid = directChat?.members?.find((member) => member !== user?.uid);
  const directChatIsListed = chats.some((chat) => chat.id === directChat?.id);
  const sharedPeerProfile = directPeerUid ? sharedProfiles[directPeerUid] : null;

  useEffect(() => {
    if (authLoading || !user || !pageVisible || !directChat?.id || directChatIsListed) {
      if (!directChat?.id || directChatIsListed) setDirectProfile(null);
      return undefined;
    }
    if (!directPeerUid || sharedPeerProfile) {
      setDirectProfile(null);
      setRequestedConversationError('');
      return;
    }

    let active = true;
    setRequestedConversationError('');
    get(ref(db, `users/${directPeerUid}`))
      .then((snapshot) => {
        if (!active) return;
        const profile = snapshot.val();
        setDirectProfile(profile ? {
          id: directPeerUid,
          uid: directPeerUid,
          displayName: normalizeDisplayName(
            profile.fullName,
            profile.displayName,
            profile.name,
            profile.username
          ) || messengerStrings.communityMember,
          photoURL: profile.photoURL || profile.profilePicture || '',
          username: profile.username || '',
        } : null);
      })
      .catch((profileLoadError) => {
        console.error('Could not load the requested conversation profile:', {
          code: profileLoadError?.code || 'unknown',
          message: profileLoadError?.message || String(profileLoadError),
        });
        if (active) setRequestedConversationError(messengerStrings.profilesCouldNotLoad);
      });

    return () => {
      active = false;
    };
  }, [authLoading, directChat?.id, directPeerUid, directChatIsListed, pageVisible, requestedChatRetry, sharedPeerProfile, user?.uid]);

  const allChats = useMemo(
    () => (directChat && !chats.some((chat) => chat.id === directChat.id) ? [...chats, directChat] : chats),
    [chats, directChat]
  );

  useEffect(() => {
    const term = search.trim().toLowerCase();
    if (authLoading || !term || !user || !pageVisible) {
      setPeople([]);
      setPeopleLoading(false);
      setPeopleError('');
      return undefined;
    }

    let active = true;
    setPeopleLoading(true);
    setPeopleError('');
    const timer = window.setTimeout(() => {
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
          const result = new Map();
          snapshots.forEach((snapshot) => snapshot.forEach((item) => {
            if (item.key === user.uid || result.has(item.key)) return;
            const profile = item.val() || {};
            result.set(item.key, {
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
          setPeople([...result.values()].slice(0, 20));
        })
        .catch((searchError) => {
          console.error('Messenger people search failed:', {
            code: searchError?.code || 'unknown',
            message: searchError?.message || String(searchError),
          });
          if (active) setPeopleError(messengerStrings.peopleSearchUnavailable);
        })
        .finally(() => {
          if (active) setPeopleLoading(false);
        });
    }, 250);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [authLoading, pageVisible, search, user]);

  const userMap = useMemo(() => {
    const next = { ...sharedProfiles };
    if (directProfile?.id) next[directProfile.id] = directProfile;
    people.forEach((person) => {
      next[person.id] = person;
    });
    if (user) {
      next[user.uid] = {
        uid: user.uid,
        displayName: user.displayName || user.email?.split('@')[0] || messengerStrings.you,
        photoURL: user.photoURL || '',
      };
    }
    return next;
  }, [directProfile, people, sharedProfiles, user]);

  const activeChat = allChats.find((chat) => chat.id === convId) || null;
  const activePeerUid = activeChat?.members?.find((member) => member !== user?.uid);
  const activePeer = activePeerUid ? userMap[activePeerUid] || {} : {};
  const activePeerDetails = activePeerUid ? activeChat?.memberProfiles?.[activePeerUid] || {} : {};
  const activePeerName = normalizeDisplayName(
    activePeer.displayName,
    activePeer.fullName,
    activePeer.username,
    activePeerDetails.displayName,
    activePeerDetails.fullName,
    activePeerDetails.name,
    activeChat?.lastMessageSenderUid === activePeerUid ? activeChat?.lastMessageSenderName : ''
  ) || messengerStrings.communityMember;
  const activePeerPhoto = activePeer.photoURL || activePeerDetails.photoURL ||
    activePeerDetails.profilePicture ||
    (activeChat?.lastMessageSenderUid === activePeerUid ? activeChat?.lastMessageSenderPhotoURL : '') || '';
  const totalUnread = allChats.reduce((sum, chat) => sum + Number(chat.unread?.[user?.uid] ?? chat.unreadCount ?? 0), 0);

  const focusSearch = useCallback(() => {
    searchRef.current?.focus();
  }, []);

  const openChat = useCallback((chatId) => {
    setError('');
    navigate(`/messenger/${encodeURIComponent(chatId)}`);
  }, [navigate]);

  async function createChat(targetUid) {
    if (authLoading || !user || !targetUid || targetUid === user.uid) return;
    try {
      const conversation = await findOrCreateDirectChat(user.uid, targetUid, allChats);
      if (!chats.some((chat) => chat.id === conversation.id)) setDirectChat(conversation);
      setError('');
      openChat(conversation.id);
    } catch (createError) {
      console.error('Could not create or open conversation:', {
        code: createError?.code || 'unknown',
        message: createError?.message || String(createError),
      });
      setError(messengerStrings.couldNotStartChat);
    }
  }

  function retryConversationLoad() {
    setError('');
    setRequestedConversationError('');
    setRequestedChatRetry((version) => version + 1);
    retryChats();
  }

  return (
    <section className="msgr-page" aria-label={messengerStrings.chatsTitle}>
      {error && <div className="msgr-error" role="alert">{error}</div>}
      <div className={`msgr-shell${convId ? ' has-active-chat' : ''}${activeChat ? ' has-info-panel' : ''}`}>
        <aside className="msgr-sidebar">
          <header className="msgr-sidebar-header">
            <h1>{messengerStrings.chatsTitle}</h1>
            <button type="button" className="msgr-icon-button" aria-label={messengerStrings.startNewChat} title={messengerStrings.newChat} onClick={focusSearch}>
              <Plus size={21} />
            </button>
          </header>

          <label className="msgr-search">
            <Search size={18} aria-hidden="true" />
            <input
              ref={searchRef}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={messengerStrings.searchChatsAndPeople}
              aria-label={messengerStrings.searchChatsAndPeople}
            />
            {search && <button type="button" aria-label={messengerStrings.clearSearch} onClick={() => setSearch('')}>×</button>}
          </label>

          <div className="msgr-sidebar-scroll">
            {(chatLoadError || requestedConversationError || profileError) && (
              <div className="msgr-inline-error" role="alert">
                <span>{requestedConversationError || (chatLoadError
                  ? messengerStrings.getChatLoadError(chatLoadError.code)
                  : messengerStrings.profilesCouldNotLoad)}</span>
                <button type="button" onClick={retryConversationLoad}>{messengerStrings.retry}</button>
              </div>
            )}
            {search.trim() && (
              <section className="msgr-people-section" aria-label={messengerStrings.people}>
                <h2>{messengerStrings.people}</h2>
                {peopleLoading ? (
                  <p className="msgr-search-status"><LoaderCircle size={16} className="msgr-spin" /> {messengerStrings.searchingPeople}</p>
                ) : peopleError ? (
                  <p className="msgr-search-status" role="status">{peopleError}</p>
                ) : people.length ? (
                  people.map((person) => (
                    <button type="button" className="msgr-person-row" key={person.id} onClick={() => createChat(person.id)}>
                      <span className="msgr-avatar-wrap">
                        {person.photoURL
                          ? <img src={person.photoURL} alt="" className="msgr-avatar" />
                          : <span className="msgr-avatar msgr-avatar-fallback">{(person.displayName || person.username || '?').slice(0, 1).toUpperCase()}</span>}
                        {person.online && <span className="msgr-online-dot" />}
                      </span>
                      <span className="msgr-person-name">{person.displayName || person.username || messengerStrings.communityMember}</span>
                      <span className="msgr-person-action">{messengerStrings.messageAction}</span>
                    </button>
                  ))
                ) : (
                  <p className="msgr-search-status">{messengerStrings.noPeopleForSearch(search.trim())}</p>
                )}
              </section>
            )}

            <div className="msgr-list-heading">
              <h2>{messengerStrings.recentChats}</h2>
              <span>{totalUnread ? messengerStrings.unreadCount(totalUnread) : messengerStrings.yourConversations}</span>
            </div>
            <ConversationList
              chats={allChats}
              activeChatId={convId}
              currentUserUid={user?.uid}
              usersMap={userMap}
              onSelect={openChat}
              onNewChat={focusSearch}
              searchTerm={search}
              loading={chatLoading && allChats.length === 0}
              variant="messenger"
              emptyTitle={search.trim() ? messengerStrings.noMatchingChats : messengerStrings.noChatsYet}
              emptyDescription={messengerStrings.searchToStart}
            />
          </div>
        </aside>

        <main className="msgr-chat-panel">
          {activeChat ? (
            <ChatWindow
              chat={activeChat}
              chatId={activeChat.id}
              currentUser={user}
              usersMap={userMap}
              onBack={() => navigate('/messenger')}
            />
          ) : convId ? (
            <div className="msgr-chat-empty">
              <button type="button" className="msgr-mobile-back" onClick={() => navigate('/messenger')} aria-label={messengerStrings.backToChats}>
                <ArrowLeft size={19} />
              </button>
              <LoaderCircle size={28} className="msgr-spin" />
              <p>{chatLoading || directChatLoading ? messengerStrings.openingConversation : messengerStrings.conversationUnavailable}</p>
            </div>
          ) : (
            <div className="msgr-chat-empty">
              <div className="msgr-empty-icon"><MessageSquareText size={38} /></div>
              <h2>{messengerStrings.selectChat}</h2>
              <p>{messengerStrings.pickSomeoneToStart}</p>
            </div>
          )}
        </main>

        {activeChat && (
          <aside className="msgr-info-panel" aria-label={messengerStrings.chatDetails}>
            <div className="msgr-info-person">
              <div className="msgr-info-avatar-wrap">
                {activePeerPhoto
                  ? <img src={activePeerPhoto} alt="" className="msgr-info-avatar" />
                  : <span className="msgr-info-avatar msgr-info-avatar-fallback">{activePeerName.slice(0, 1).toUpperCase()}</span>}
                {activePeer.online && <span className="msgr-info-online" />}
              </div>
              <h2>{activePeerName}</h2>
              <p>{activePeer.online ? messengerStrings.activeNow : messengerStrings.offline}</p>
            </div>

            <div className="msgr-info-actions" aria-label={messengerStrings.contactActions}>
              <div><span><UserRound size={18} /></span><small>{messengerStrings.profile}</small></div>
              <div><span><Bell size={18} /></span><small>{messengerStrings.mute}</small></div>
              <div><span><Search size={18} /></span><small>{messengerStrings.search}</small></div>
            </div>

            <div className="msgr-info-sections">
              <details>
                <summary>{messengerStrings.chatInfo}<ChevronDown size={17} /></summary>
                <p>{messengerStrings.chatInfoDescription}</p>
              </details>
              <details>
                <summary>{messengerStrings.customizeChat}<ChevronDown size={17} /></summary>
                <p className="msgr-info-option"><Palette size={17} />{messengerStrings.chatTheme}</p>
              </details>
              <details>
                <summary>{messengerStrings.mediaAndFiles}<ChevronDown size={17} /></summary>
                <p className="msgr-info-option"><ImageIcon size={17} />{messengerStrings.sharedMedia}</p>
              </details>
              <details>
                <summary>{messengerStrings.privacyAndSupport}<ChevronDown size={17} /></summary>
                <p className="msgr-info-option"><LockKeyhole size={17} />{messengerStrings.privacyAndSafety}</p>
              </details>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firestore } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import ConversationList from '../components/ConversationList';
import ChatWindow from '../components/ChatWindow';
import { MessageSquareText, Plus, Search, Sparkles, UserRound, X } from 'lucide-react';

function buildChatId(uidA, uidB) {
  return [uidA, uidB].sort().join('_');
}

export default function Messenger() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState('');
  const [newChatOpen, setNewChatOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return undefined;

    const userDocRef = doc(firestore, 'users', user.uid);
    setDoc(userDocRef, {
      uid: user.uid,
      displayName: user.displayName || user.email?.split('@')[0] || 'CodeWithSiam user',
      photoURL: user.photoURL || '',
      online: true,
      lastSeen: serverTimestamp(),
    }, { merge: true }).catch(() => undefined);

    const handleVisibility = () => {
      updateDoc(userDocRef, {
        online: document.visibilityState === 'visible',
        lastSeen: serverTimestamp(),
      }).catch(() => undefined);
    };

    handleVisibility();
    document.addEventListener('visibilitychange', handleVisibility);
    const beforeUnload = () => {
      updateDoc(userDocRef, {
        online: false,
        lastSeen: serverTimestamp(),
      }).catch(() => undefined);
    };
    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', beforeUnload);
      updateDoc(userDocRef, {
        online: false,
        lastSeen: serverTimestamp(),
      }).catch(() => undefined);
    };
  }, [user]);

  useEffect(() => {
    if (!user) return undefined;

    const chatsQuery = query(
      collection(firestore, 'chats'),
      where('members', 'array-contains', user.uid),
      orderBy('lastMessageAt', 'desc')
    );

    const unsub = onSnapshot(chatsQuery, (snapshot) => {
      const next = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setChats(next);

      if (!chatId && next[0]) {
        navigate(`/messenger/${next[0].id}`, { replace: true });
      }
    }, (chatError) => {
      setError('Permission denied, check Firestore rules');
      console.error('Chat listener failed', chatError);
    });

    return () => unsub();
  }, [user, chatId, navigate]);

  useEffect(() => {
    const usersQuery = query(collection(firestore, 'users'), limit(50));
    const unsub = onSnapshot(usersQuery, (snapshot) => {
      setUserList(snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() })));
      setError('');
    }, (userError) => {
      setError('Permission denied, check Firestore rules');
      console.error('Users listener failed', userError);
    });
    return () => unsub();
  }, []);

  const userMap = useMemo(() => {
    return Object.fromEntries(userList.map((entry) => [entry.id, entry]));
  }, [userList]);

  const filteredUsers = useMemo(() => {
    const q = search.trim().toLowerCase();
    return userList.filter((entry) => {
      if (entry.id === user?.uid) return false;
      const searchText = `${entry.displayName || ''} ${entry.username || ''} ${entry.searchName || ''} ${entry.email || ''}`.toLowerCase();
      if (!q) return true;
      return searchText.includes(q);
    });
  }, [search, user?.uid, userList]);

  const totalUnread = chats.reduce((sum, chat) => sum + Number(chat.unread?.[user?.uid] || 0), 0);

  const openChat = (chatDocId) => {
    navigate(`/messenger/${chatDocId}`);
  };

  async function createChat(targetUid) {
    if (!user || !targetUid || targetUid === user.uid) return;

    try {
      const chatDocId = buildChatId(user.uid, targetUid);
      const chatDocRef = doc(firestore, 'chats', chatDocId);
      const chatSnap = await getDoc(chatDocRef);

      if (!chatSnap.exists()) {
        await setDoc(chatDocRef, {
          id: chatDocId,
          members: [user.uid, targetUid],
          unread: {
            [user.uid]: 0,
            [targetUid]: 0,
          },
          lastMessage: '',
          lastMessageAt: serverTimestamp(),
          createdAt: serverTimestamp(),
        });
      }

      setError('');
      setNewChatOpen(false);
      navigate(`/messenger/${chatDocId}`);
    } catch (chatError) {
      console.error('Create chat failed', chatError);
      setError('Permission denied, check Firestore rules');
    }
  }

  const activeChat = chats.find((chat) => chat.id === chatId) || null;

  return (
    <div className="cwschat messenger-page">
      {error && (
        <div className="cwschat chat-error-banner" role="alert">
          {error}
        </div>
      )}
      <div className="cwschat chat-shell">
        <aside className="cwschat chat-sidebar">
          <div className="cwschat sidebar-header">
            <div className="cwschat brand-block">
              <span className="cwschat brand-icon"><MessageSquareText size={18} /></span>
              <span className="cwschat brand-name">CodeWithSiam</span>
            </div>
            <button type="button" className="cwschat ghost-button" aria-label="New chat" onClick={() => setNewChatOpen(true)}>
              <Plus size={18} />
            </button>
          </div>

          <div className="cwschat sidebar-profile">
            <div className="cwschat profile-avatar-wrap">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="cwschat profile-avatar" />
              ) : (
                <span className="cwschat profile-avatar fallback"><UserRound size={18} /></span>
              )}
            </div>
            <div className="cwschat profile-meta">
              <strong>{user?.displayName || 'Your chats'}</strong>
              <span>Chat</span>
            </div>
          </div>

          <div className="cwschat sidebar-search">
            <Search size={15} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search chats" aria-label="Search chats" />
          </div>

          <ConversationList
            chats={chats}
            activeChatId={chatId}
            currentUserUid={user?.uid}
            usersMap={userMap}
            onSelect={openChat}
            onNewChat={() => setNewChatOpen(true)}
          />
        </aside>

        <section className="cwschat chat-panel">
          {activeChat ? (
            <ChatWindow
              chat={activeChat}
              chatId={activeChat.id}
              currentUser={user}
              usersMap={userMap}
              onBack={() => navigate('/messenger')}
            />
          ) : (
            <div className="cwschat empty-chat-state">
              <div className="cwschat empty-chat-badge">
                <Sparkles size={28} />
              </div>
              <h2>CodeWithSiam Chat</h2>
              <p>Choose a conversation to start messaging.</p>
            </div>
          )}
        </section>
      </div>

      {newChatOpen && (
        <div className="cwschat new-chat-overlay" onClick={() => setNewChatOpen(false)}>
          <div className="cwschat new-chat-modal" onClick={(event) => event.stopPropagation()}>
            <div className="cwschat modal-header">
              <h3>New chat</h3>
              <button type="button" className="cwschat close-button" aria-label="Close" onClick={() => setNewChatOpen(false)}>
                <X size={17} />
              </button>
            </div>
            <div className="cwschat modal-search">
              <Search size={15} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search people" aria-label="Search people" />
            </div>
            <div className="cwschat user-list">
              {filteredUsers.length ? (
                filteredUsers.map((person) => (
                  <button key={person.id} type="button" className="cwschat user-row" onClick={() => createChat(person.id)}>
                    <div className="cwschat user-avatar-wrap">
                      {person.photoURL ? <img src={person.photoURL} alt="" className="cwschat user-avatar" /> : <span className="cwschat user-avatar fallback">{(person.displayName || person.id).slice(0, 1).toUpperCase()}</span>}
                      {person.online && <span className="cwschat online-dot" />}
                    </div>
                    <div className="cwschat user-copy">
                      <strong>{person.displayName || person.username || 'CodeWithSiam user'}</strong>
                      <span>{person.online ? 'online' : 'offline'}</span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="cwschat empty-user-state">No people found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

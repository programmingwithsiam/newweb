import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { onValue, ref, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import ConversationList from '../components/ConversationList';
import ChatWindow from '../components/ChatWindow';
import NewGroupModal from '../components/NewGroupModal';
import UserSearchPicker from '../components/UserSearchPicker';
import { Bell, Bookmark, MailPlus, MessageCircle, Search, Settings, UsersRound, UserRound } from 'lucide-react';
import { messengerSeedConversations } from '../data/messengerSeed';

export default function Messenger() {
  const { convId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if (convId) return;

    const fallbackId = messengerSeedConversations[0]?.id;

    if (!user) {
      if (fallbackId) navigate(`/messenger/${fallbackId}`, { replace: true });
      return;
    }

    const unsub = onValue(ref(db, `userConversations/${user.uid}`), (snap) => {
      if (!snap.exists()) {
        if (fallbackId) navigate(`/messenger/${fallbackId}`, { replace: true });
        return;
      }

      const conversations = Object.entries(snap.val());
      if (!conversations.length) {
        if (fallbackId) navigate(`/messenger/${fallbackId}`, { replace: true });
        return;
      }

      const sorted = conversations.sort((a, b) => (b[1].lastMessageAt || 0) - (a[1].lastMessageAt || 0));
      const [[firstId]] = sorted;
      if (!firstId) return;

      navigate(`/messenger/${firstId}`, { replace: true });
    });

    return () => unsub();
  }, [convId, user, navigate]);

  async function startChatWith(u) {
    const id = [user.uid, u.uid].sort().join('_');
    await set(ref(db, `conversations/${id}`), {
      type: 'private',
      members: { [user.uid]: true, [u.uid]: true },
      createdAt: serverTimestamp()
    });
    const conversationSummary = {
      members: { [user.uid]: true, [u.uid]: true },
      lastMessage: '',
      lastMessageAt: Date.now(),
      unreadCount: 0
    };
    await set(ref(db, `userConversations/${user.uid}/${id}`), conversationSummary);
    await set(ref(db, `userConversations/${u.uid}/${id}`), conversationSummary);
    setShowNewChat(false);
    navigate(`/messenger/${id}`);
  }

  return (
    <div className={`messenger messenger-shell${convId ? ' show-chat' : ''}`}>
      <aside className="messenger-sidebar">
        <div className="messenger-brand">
          <span className="messenger-brand-mark"><MessageCircle size={22} /></span>
          <span className="messenger-brand-name">Community</span>
        </div>

        <div className="messenger-profile">
          <span className="messenger-profile-avatar">
            <UserRound size={22} />
          </span>
          <span className="messenger-profile-label">{user?.displayName || user?.email || 'Me'}</span>
        </div>

        <nav className="messenger-nav">
          <button className="messenger-nav-item active" type="button" aria-label="Chats">
            <MessageCircle size={20} />
            <span>Chats</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Notifications">
            <Bell size={20} />
            <span>Notifications</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Friends">
            <UserRound size={20} />
            <span>Friends</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Groups">
            <UsersRound size={20} />
            <span>Groups</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Saved">
            <Bookmark size={20} />
            <span>Saved</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Search">
            <Search size={20} />
            <span>Search</span>
          </button>
          <button className="messenger-nav-item" type="button" aria-label="Settings">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </nav>

        <button className="messenger-new-button" type="button" onClick={() => setShowNewChat(true)}>
          <MailPlus size={18} />
          <span>New chat</span>
        </button>
      </aside>

      <section className="messenger-list-pane">
        <div className="messenger-list-header">
          <h3>Chats</h3>
          <div>
            <button className="icon-btn" onClick={() => setShowNewChat(true)} title="New message" aria-label="New message"><MailPlus size={20} strokeWidth={1.5} aria-hidden="true" /></button>
            <button className="icon-btn" onClick={() => setShowNewGroup(true)} title="New group" aria-label="New group"><UsersRound size={20} strokeWidth={1.5} aria-hidden="true" /></button>
          </div>
        </div>
        <ConversationList activeId={convId} onSelect={(id) => navigate(`/messenger/${id}`)} />
      </section>

      <section className="messenger-chat-pane">
        {convId ? (
          <ChatWindow convId={convId} />
        ) : (
          <div className="chat-empty-state chat-window"><span className="chat-empty-icon"><MessageCircle size={38} /></span><h2>Select a conversation</h2><p>Choose a chat from the left to start messaging.</p><button className="btn btn-primary" type="button" onClick={() => navigate('/search')}>Find people</button></div>
        )}
      </section>

      {showNewGroup && <NewGroupModal onClose={() => setShowNewGroup(false)} onCreated={(id) => { setShowNewGroup(false); navigate(`/messenger/${id}`); }} />}
      {showNewChat && (
        <div className="modal-overlay" onClick={() => setShowNewChat(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>New message</h3>
            <UserSearchPicker onPick={startChatWith} excludeUids={[user?.uid]} />
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowNewChat(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

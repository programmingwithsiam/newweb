import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import ConversationList from '../components/ConversationList';
import ChatWindow from '../components/ChatWindow';
import NewGroupModal from '../components/NewGroupModal';
import UserSearchPicker from '../components/UserSearchPicker';

export default function Messenger() {
  const { convId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);

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
    <div className={`messenger${convId ? ' show-chat' : ''}`}>
      <div className="messenger-list-pane">
        <div className="messenger-list-header">
          <h3>Chats</h3>
          <div>
            <button className="icon-btn" onClick={() => setShowNewChat(true)} title="New message">✉️</button>
            <button className="icon-btn" onClick={() => setShowNewGroup(true)} title="New group">👥</button>
          </div>
        </div>
        <ConversationList activeId={convId} onSelect={(id) => navigate(`/messenger/${id}`)} />
      </div>
      <div className="messenger-chat-pane">
        {convId ? (
          <ChatWindow convId={convId} />
        ) : (
          <div className="empty-state chat-window"><p>Select a conversation to start chatting</p></div>
        )}
      </div>

      {showNewGroup && <NewGroupModal onClose={() => setShowNewGroup(false)} onCreated={(id) => { setShowNewGroup(false); navigate(`/messenger/${id}`); }} />}
      {showNewChat && (
        <div className="modal-overlay" onClick={() => setShowNewChat(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>New message</h3>
            <UserSearchPicker onPick={startChatWith} excludeUids={[user.uid]} />
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowNewChat(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

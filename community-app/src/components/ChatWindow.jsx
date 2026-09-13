import { useEffect, useRef, useState } from 'react';
import {
  ref, push, onValue, update, remove, set,
  query, orderByChild, limitToLast, serverTimestamp
} from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { timeAgo } from '../utils/helpers';
import { notifyMessage } from '../utils/notify';
import GroupInfoPanel from './GroupInfoPanel';
import { Image } from 'lucide-react';

const CHAT_EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '😡', '🎉'];

export default function ChatWindow({ convId }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [conv, setConv] = useState(null);
  const [messages, setMessages] = useState({});
  const [text, setText] = useState('');
  const [peer, setPeer] = useState(null);
  const [typingUsers, setTypingUsers] = useState({});
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [messageReactions, setMessageReactions] = useState({});
  const [reactionOpenId, setReactionOpenId] = useState(null);
  const bottomRef = useRef(null);
  const typingTimeout = useRef(null);

  useEffect(() => {
    const unsub = onValue(ref(db, `conversations/${convId}`), (snap) => setConv(snap.val()));
    return unsub;
  }, [convId]);

  useEffect(() => {
    const r = query(ref(db, `messages/${convId}`), orderByChild('createdAt'), limitToLast(100));
    const unsub = onValue(r, (snap) => setMessages(snap.val() || {}));
    return unsub;
  }, [convId]);

  useEffect(() => {
    const unsub = onValue(ref(db, `typing/${convId}`), (snap) => setTypingUsers(snap.val() || {}));
    return unsub;
  }, [convId]);

  useEffect(() => {
    const unsub = onValue(ref(db, `messageReactions/${convId}`), (snap) => setMessageReactions(snap.val() || {}));
    return unsub;
  }, [convId]);

  const isGroup = conv?.type === 'group';
  const peerUid = conv && !isGroup ? Object.keys(conv.members || {}).find((m) => m !== user.uid) : null;

  useEffect(() => {
    if (!peerUid) return;
    const unsub = onValue(ref(db, `users/${peerUid}`), (snap) => setPeer(snap.val()));
    return unsub;
  }, [peerUid]);

  // Mark unread messages as seen + reset my unread counter whenever the
  // window is open and messages change.
  useEffect(() => {
    if (!conv) return;
    const updates = {};
    Object.entries(messages).forEach(([id, m]) => {
      if (m.senderId !== user.uid && !m.seenBy?.[user.uid]) {
        updates[`messages/${convId}/${id}/seenBy/${user.uid}`] = true;
      }
    });
    if (Object.keys(updates).length) update(ref(db), updates);
    set(ref(db, `userConversations/${user.uid}/${convId}/unreadCount`), 0);
  }, [messages, conv, convId, user.uid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(e) {
    e?.preventDefault();
    if (!text.trim()) return;
    try {
      await doSend({ text: text.trim() });
      setText('');
      try {
        await set(ref(db, `typing/${convId}/${user.uid}`), null);
      } catch (err) {
        console.warn('Typing indicator cleanup failed:', err);
      }
    } catch (err) {
      showToast(`Message failed: ${err.message}`, 'error');
    }
  }

  async function sendImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      showToast('Image is too large (max 8MB)', 'error');
      return;
    }
    try {
      const url = await uploadCommunityImage(file, `chatImages/${convId}`);
      await doSend({ imageUrl: url });
    } catch (err) {
      showToast(`Image upload failed: ${err.message}`, 'error');
    }
  }

  async function doSend(payload) {
    const msgRef = push(ref(db, `messages/${convId}`));
    await update(msgRef, {
      senderId: user.uid,
      ...payload,
      createdAt: serverTimestamp(),
      seenBy: { [user.uid]: true }
    });
    try {
      const preview = payload.text || '📷 Photo';
      await update(ref(db, `conversations/${convId}`), { lastMessage: preview, lastMessageAt: Date.now() });
      const members = Object.keys(conv?.members || {});
      for (const m of members) {
        if (m === user.uid) continue;
        // These are convenience indexes. A rules mismatch here must not undo
        // the message that was already saved above.
        await set(ref(db, `userConversations/${m}/${convId}/unreadCount`), 1);
        await set(ref(db, `userConversations/${m}/${convId}/lastMessageAt`), Date.now());
        if (isGroup) {
          notifyMessage(m, { type: 'group_invite', fromUid: user.uid, convId, subtype: 'message' });
        } else {
          notifyMessage(m, { type: 'message', fromUid: user.uid, convId });
        }
      }
    } catch (err) {
      console.warn('Message metadata update failed:', err);
    }
  }

  function handleTyping(val) {
    setText(val);
    set(ref(db, `typing/${convId}/${user.uid}`), true);
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => set(ref(db, `typing/${convId}/${user.uid}`), null), 2000);
  }

  async function deleteMessage(id) {
    try {
      await remove(ref(db, `messages/${convId}/${id}`));
    } catch (err) {
      showToast(`Delete failed: ${err.message}`, 'error');
    }
  }

  async function saveEditedMessage(id) {
    if (!editText.trim()) return;
    try {
      await update(ref(db, `messages/${convId}/${id}`), {
        text: editText.trim(),
        editedAt: serverTimestamp()
      });
      setEditingId(null);
      setEditText('');
    } catch (err) {
      showToast(`Edit failed: ${err.message}`, 'error');
    }
  }

  async function toggleReaction(id, emoji) {
    const reactionRef = ref(db, `messageReactions/${convId}/${id}/${user.uid}`);
    try {
      const currentEmoji = messageReactions[id]?.[user.uid]?.emoji;
      if (currentEmoji === emoji) {
        await remove(reactionRef);
        setMessageReactions((current) => {
          const next = { ...current, [id]: { ...(current[id] || {}) } };
          delete next[id][user.uid];
          return next;
        });
      } else {
        await set(reactionRef, { emoji, createdAt: serverTimestamp() });
        setMessageReactions((current) => ({
          ...current,
          [id]: { ...(current[id] || {}), [user.uid]: { emoji } }
        }));
      }
    } catch (err) {
      // Keep the interaction responsive while rules are being updated in the
      // Firebase console; the next successful write will persist the choice.
      setMessageReactions((current) => ({
        ...current,
        [id]: {
          ...(current[id] || {}),
          [user.uid]: currentEmoji === emoji ? undefined : { emoji }
        }
      }));
      console.warn('Reaction persistence failed:', err);
    }
  }

  if (!conv) return <div className="chat-window empty-state"><p>Select a conversation</p></div>;

  const othersTyping = Object.entries(typingUsers).some(([uid, v]) => uid !== user.uid && v);
  const title = isGroup ? conv.name : peer?.fullName;
  const photo = isGroup ? conv.photoURL : peer?.photoURL;

  return (
    <div className="chat-window">
      <header className="chat-header">
        <img className="avatar-sm" src={photo || '/default-avatar.png'} alt="" />
        <div className="chat-header-text">
          <strong>{title}</strong>
          {othersTyping && <span className="muted small">typing...</span>}
        </div>
        <div className="chat-header-actions">
          <button className="icon-btn" disabled title="Coming soon">📞</button>
          <button className="icon-btn" disabled title="Coming soon">📹</button>
          {isGroup && <button className="icon-btn" onClick={() => setShowGroupInfo(true)}>ℹ️</button>}
        </div>
      </header>

      <div className="chat-messages">
        {Object.entries(messages)
          .sort((a, b) => (a[1].createdAt || 0) - (b[1].createdAt || 0))
          .map(([id, m]) => (
            <div key={id} className={`chat-message${m.senderId === user.uid ? ' mine' : ''}`}>
              {editingId === id ? (
                <div className="chat-edit-box">
                  <textarea value={editText} onChange={(event) => setEditText(event.target.value)} />
                  <div>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => saveEditedMessage(id)}>Save</button>
                    <button className="btn btn-ghost btn-sm" type="button" onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </div>
              ) : m.imageUrl ? <img src={m.imageUrl} alt="" className="chat-image" /> : <p>{m.text}</p>}
              <div className="chat-message-meta">
                <span>{timeAgo(m.createdAt)}</span>
                {m.editedAt && <span>edited</span>}
                <span className="chat-reaction-wrap">
                  <button
                    className={`link-btn chat-reaction-trigger${messageReactions[id]?.[user.uid]?.emoji ? ' active-reaction' : ''}`}
                    type="button"
                    onClick={() => setReactionOpenId((current) => current === id ? null : id)}
                    aria-label="Choose reaction"
                  >
                    {messageReactions[id]?.[user.uid]?.emoji || '😊'}
                  </button>
                  {reactionOpenId === id && (
                    <span className="chat-reaction-picker" aria-label="Message reactions">
                      {CHAT_EMOJIS.map((emoji) => (
                        <button key={emoji} type="button" onClick={() => { toggleReaction(id, emoji); setReactionOpenId(null); }} aria-label={`React ${emoji}`}>
                          {emoji}
                        </button>
                      ))}
                    </span>
                  )}
                </span>
                {m.senderId === user.uid && (
                  <>
                    <span>{isGroup
                      ? (Object.keys(m.seenBy || {}).length > 1 ? 'Seen' : 'Sent')
                      : (m.seenBy?.[peerUid] ? 'Seen' : 'Sent')}</span>
                    {!m.imageUrl && <button className="link-btn" type="button" onClick={() => { setEditingId(id); setEditText(m.text || ''); }}>Edit</button>}
                    <button className="link-btn" onClick={() => deleteMessage(id)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        <div ref={bottomRef} />
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <label className="icon-btn file-label">
          <Image size={20} strokeWidth={1.5} aria-hidden="true" />
          <input type="file" accept="image/*" hidden onChange={sendImage} />
        </label>
        <input value={text} onChange={(e) => handleTyping(e.target.value)} placeholder="Type a message..." />
        <button className="btn btn-primary btn-sm" type="submit">Send</button>
      </form>

      {showGroupInfo && isGroup && (
        <GroupInfoPanel convId={convId} conv={conv} onClose={() => setShowGroupInfo(false)} />
      )}
    </div>
  );
}

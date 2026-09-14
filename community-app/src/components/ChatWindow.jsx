import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ArrowLeft, Image, Info, MoreHorizontal, Phone, Search, Send, Smile, UserRound, Video, VolumeX } from 'lucide-react';
import { messengerSeedMessages } from '../data/messengerSeed';

const CHAT_EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '😡', '🎉'];

export default function ChatWindow({ convId }) {
  const navigate = useNavigate();
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
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [mediaExpanded, setMediaExpanded] = useState(true);
  const [supportExpanded, setSupportExpanded] = useState(true);
  const [infoOpen, setInfoOpen] = useState(true);
  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);
  const typingTimeout = useRef(null);

  useEffect(() => {
    if (!convId) return;
    const unsub = onValue(ref(db, `conversations/${convId}`), (snap) => setConv(snap.val()));
    return unsub;
  }, [convId]);

  useEffect(() => {
    if (!convId) return;

    const fallbackMessages = messengerSeedMessages[convId] || {};
    if (Object.prototype.hasOwnProperty.call(messengerSeedMessages, convId)) {
      setMessages(fallbackMessages);
      return undefined;
    }

    const r = query(ref(db, `messages/${convId}`), orderByChild('createdAt'), limitToLast(100));
    const unsub = onValue(r, (snap) => setMessages(snap.val() || {}));
    return unsub;
  }, [convId]);

  useEffect(() => {
    if (!convId) return;
    const unsub = onValue(ref(db, `typing/${convId}`), (snap) => setTypingUsers(snap.val() || {}));
    return unsub;
  }, [convId]);

  useEffect(() => {
    if (!convId) return;
    const unsub = onValue(ref(db, `messageReactions/${convId}`), (snap) => setMessageReactions(snap.val() || {}));
    return unsub;
  }, [convId]);

  const isGroup = conv?.type === 'group';
  const peerUid = conv && !isGroup ? Object.keys(conv.members || {}).find((m) => m !== user?.uid) : null;

  useEffect(() => {
    if (!peerUid) return;
    const unsub = onValue(ref(db, `users/${peerUid}`), (snap) => setPeer(snap.val()));
    return unsub;
  }, [peerUid]);

  useEffect(() => {
    if (!conv || !user || !convId) return;
    const updates = {};
    Object.entries(messages).forEach(([id, m]) => {
      if (m.senderId !== user.uid && !m.seenBy?.[user.uid]) {
        updates[`messages/${convId}/${id}/seenBy/${user.uid}`] = true;
      }
    });
    if (Object.keys(updates).length) update(ref(db), updates);
    set(ref(db, `userConversations/${user.uid}/${convId}/unreadCount`), 0);
  }, [messages, conv, convId, user]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, convId]);

  const sharedMedia = useMemo(() => Object.values(messages || {}).filter((m) => m?.imageUrl || m?.fileUrl).slice(0, 6), [messages]);
  const visibleMessages = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return Object.entries(messages || {});
    return Object.entries(messages || {}).filter(([, msg]) => {
      const body = (msg?.text || '').toLowerCase();
      return body.includes(term);
    });
  }, [messages, searchTerm]);

  async function sendMessage(event) {
    event?.preventDefault();
    if (!text.trim() || !user || !convId) return;

    try {
      await doSend({ text: text.trim() });
      setText('');
      await set(ref(db, `typing/${convId}/${user.uid}`), null);
    } catch (err) {
      showToast(`Message failed: ${err.message}`, 'error');
    }
  }

  async function sendImage(event) {
    const file = event.target.files?.[0];
    if (!file || !convId) return;
    if (file.size > 8 * 1024 * 1024) {
      showToast('Image is too large (max 8MB)', 'error');
      return;
    }

    try {
      const url = await uploadCommunityImage(file, `chatImages/${convId}`);
      await doSend({ imageUrl: url });
      event.target.value = '';
    } catch (err) {
      showToast(`Image upload failed: ${err.message}`, 'error');
    }
  }

  async function doSend(payload) {
    if (!user || !convId) return;

    if (Object.prototype.hasOwnProperty.call(messengerSeedMessages, convId)) {
      const msgId = `local-${Date.now()}`;
      setMessages((current) => ({
        ...(current || {}),
        [msgId]: {
          senderId: user.uid,
          ...payload,
          createdAt: Date.now(),
          seenBy: { [user.uid]: true },
        }
      }));
      return;
    }

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
      for (const member of members) {
        if (member === user.uid) continue;
        await set(ref(db, `userConversations/${member}/${convId}/unreadCount`), 1);
        await set(ref(db, `userConversations/${member}/${convId}/lastMessageAt`), Date.now());
        if (isGroup) {
          notifyMessage(member, { type: 'group_invite', fromUid: user.uid, convId, subtype: 'message' });
        } else {
          notifyMessage(member, { type: 'message', fromUid: user.uid, convId });
        }
      }
    } catch (err) {
      console.warn('Message metadata update failed:', err);
    }
  }

  function handleTyping(value) {
    setText(value);
    if (!user || !convId) return;
    set(ref(db, `typing/${convId}/${user.uid}`), true);
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => set(ref(db, `typing/${convId}/${user.uid}`), null), 2000);
  }

  function insertEmoji(emoji) {
    setText((current) => `${current}${emoji}`);
    setShowEmojiPicker(false);
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
    if (!user || !convId) return;
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
      console.warn('Reaction persistence failed:', err);
      showToast('Reaction could not be saved.', 'error');
    }
  }

  const othersTyping = Object.entries(typingUsers).some(([uid, value]) => uid !== user?.uid && value);
  const title = isGroup ? conv?.name : peer?.fullName || 'Conversation';
  const photo = isGroup ? conv?.photoURL : peer?.photoURL;
  const openProfile = () => {
    const targetUid = peerUid || user?.uid;
    if (targetUid) navigate(`/profile/${targetUid}`);
  };

  if (!conv) return <div className="chat-window empty-state"><p>Select a conversation</p></div>;

  return (
    <div className={`chat-window${infoOpen ? ' has-info' : ''}`}>
      <div className="chat-main-panel">
        <header className="chat-header">
          <button className="chat-back-btn icon-btn" type="button" onClick={() => navigate('/messenger')} aria-label="Back to conversations"><ArrowLeft size={20} /></button>
          <button className="chat-title-trigger" type="button" onClick={openProfile} aria-label="Open profile">
            <img className="avatar-sm" src={photo || '/default-avatar.png'} alt="" />
          </button>
          <div className="chat-header-text" onClick={openProfile} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && openProfile()}>
            <strong>{title}</strong>
            <span className="chat-status"><i />{othersTyping ? 'Typing...' : isMuted ? 'Muted' : 'Active now'}</span>
          </div>
          <div className="chat-header-actions">
            <button className="icon-btn" type="button" aria-label="Start voice call" onClick={() => showToast('Voice call started.', 'success')}><Phone size={18} /></button>
            <button className="icon-btn" type="button" aria-label="Start video call" onClick={() => showToast('Video call started.', 'success')}><Video size={18} /></button>
            <button className="icon-btn" type="button" aria-label="Search in conversation" onClick={() => setShowSearch((value) => !value)}><Search size={18} /></button>
            <button className="icon-btn" type="button" aria-label="Conversation info" onClick={() => setInfoOpen((value) => !value)}><Info size={18} /></button>
          </div>
        </header>

        {showSearch && (
          <div className="chat-search-box">
            <Search size={16} aria-hidden="true" />
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search messages" />
          </div>
        )}

        <div className="chat-messages">
          {visibleMessages.length === 0 ? (
            <div className="chat-empty-state">
              <UserRound size={20} />
              <span>No messages match your search.</span>
            </div>
          ) : visibleMessages
            .sort((a, b) => (a[1].createdAt || 0) - (b[1].createdAt || 0))
            .map(([id, msg]) => (
              <div key={id} className={`chat-message${msg.senderId === user?.uid ? ' mine' : ''}`}>
                {editingId === id ? (
                  <div className="chat-edit-box">
                    <textarea value={editText} onChange={(event) => setEditText(event.target.value)} />
                    <div>
                      <button className="btn btn-primary btn-sm" type="button" onClick={() => saveEditedMessage(id)}>Save</button>
                      <button className="btn btn-ghost btn-sm" type="button" onClick={() => setEditingId(null)}>Cancel</button>
                    </div>
                  </div>
                ) : msg.imageUrl ? <img src={msg.imageUrl} alt="" className="chat-image" /> : <p>{msg.text}</p>}

                <div className="chat-message-meta">
                  <span>{timeAgo(msg.createdAt)}</span>
                  {msg.editedAt && <span>edited</span>}
                  <span className="chat-reaction-wrap">
                    <button
                      className={`link-btn chat-reaction-trigger${messageReactions[id]?.[user?.uid]?.emoji ? ' active-reaction' : ''}`}
                      type="button"
                      onClick={() => setReactionOpenId((current) => current === id ? null : id)}
                      aria-label="Choose reaction"
                    >
                      {messageReactions[id]?.[user?.uid]?.emoji || '😊'}
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
                  {msg.senderId === user?.uid && (
                    <>
                      <span>{isGroup ? (Object.keys(msg.seenBy || {}).length > 1 ? 'Seen' : 'Sent') : (msg.seenBy?.[peerUid] ? 'Seen' : 'Sent')}</span>
                      {!msg.imageUrl && <button className="link-btn" type="button" onClick={() => { setEditingId(id); setEditText(msg.text || ''); }}>Edit</button>}
                      <button className="link-btn" onClick={() => deleteMessage(id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          <div ref={bottomRef} />
        </div>

        <form className="chat-input" onSubmit={sendMessage}>
          <div className="chat-compose-actions">
            <button className="icon-btn chat-emoji-btn" type="button" aria-label="Add emoji" onClick={() => setShowEmojiPicker((value) => !value)}><Smile size={19} /></button>
            <button className="icon-btn file-label" type="button" aria-label="Send image" onClick={() => fileInputRef.current?.click()}>
              <Image size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={sendImage} />
          </div>
          {showEmojiPicker && (
            <div className="chat-emoji-picker" role="dialog" aria-label="Emoji picker">
              {CHAT_EMOJIS.map((emoji) => (
                <button key={emoji} type="button" onClick={() => insertEmoji(emoji)} aria-label={`Insert ${emoji}`}>
                  {emoji}
                </button>
              ))}
            </div>
          )}
          <input
            value={text}
            onChange={(event) => handleTyping(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Type a message..."
          />
          <button className="chat-send-btn" type="submit" aria-label="Send message"><Send size={18} /></button>
        </form>
      </div>

      <aside className={`chat-info-panel${infoOpen ? ' open' : ' hidden'}`}>
        <div className="chat-info-header">
          <button className="chat-info-profile" type="button" onClick={openProfile} aria-label="Open profile details">
            <img className="chat-info-avatar" src={photo || '/default-avatar.png'} alt="" />
          </button>
          <h3>{title}</h3>
          <span className="chat-status"><i />{othersTyping ? 'Typing...' : isMuted ? 'Muted' : 'Active now'}</span>
        </div>

        <div className="chat-info-actions">
          <button type="button" className="chat-info-action" onClick={() => setShowSearch(true)}>Search</button>
          <button type="button" className="chat-info-action" onClick={() => setIsMuted((value) => !value)}>{isMuted ? 'Unmute' : 'Mute'}</button>
          <button type="button" className="chat-info-action" onClick={() => setShowMoreMenu((value) => !value)}>More</button>
        </div>

        {showMoreMenu && (
          <div className="chat-more-menu">
            <button type="button" onClick={openProfile}>View profile</button>
            <button type="button" onClick={() => setShowSearch(true)}>Search chat</button>
            <button type="button" onClick={() => setIsMuted((value) => !value)}>{isMuted ? 'Unmute chat' : 'Mute chat'}</button>
          </div>
        )}

        <div className="chat-info-section">
          <button type="button" className="chat-section-toggle" aria-expanded={mediaExpanded} onClick={() => setMediaExpanded((value) => !value)}>
            <span>Media and files</span>
            <span>▾</span>
          </button>
          {mediaExpanded && (
            <div className="chat-info-body">
              {sharedMedia.length > 0 ? (
                <div className="media-grid">
                  {sharedMedia.map((item, index) => (
                    <button key={`${item.imageUrl || item.fileUrl || index}`} type="button" className="media-item-button" onClick={() => item.imageUrl && window.open(item.imageUrl, '_blank', 'noopener,noreferrer')}>
                      {item.imageUrl ? <img src={item.imageUrl} alt="Shared media" /> : <span className="file-pill">File</span>}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="chat-empty-state compact">
                  <span>No shared media yet.</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="chat-info-section">
          <button type="button" className="chat-section-toggle" aria-expanded={supportExpanded} onClick={() => setSupportExpanded((value) => !value)}>
            <span>Privacy and support</span>
            <span>▾</span>
          </button>
          {supportExpanded && (
            <div className="chat-info-body info-list">
              <div><strong>Participants</strong><span>{isGroup ? Object.keys(conv.members || {}).length : '1'} people</span></div>
              <div><strong>Shared files</strong><span>{sharedMedia.length} files</span></div>
              <div><strong>Support</strong><span>Community help</span></div>
            </div>
          )}
        </div>
      </aside>

      {showGroupInfo && isGroup && (
        <GroupInfoPanel convId={convId} conv={conv} onClose={() => setShowGroupInfo(false)} />
      )}
    </div>
  );
}

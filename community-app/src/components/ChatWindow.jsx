import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase/config';
import { useToast } from '../context/ToastContext';
import { ArrowLeft, CheckCheck, ImagePlus, SendHorizonal, Smile, X } from 'lucide-react';

const EMOJIS = ['👍', '❤️', '😂', '🎉', '😮', '😢', '😎'];

function parseTimestamp(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === 'number') return new Date(value);
  if (typeof value === 'string') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (typeof value.seconds === 'number') return new Date(value.seconds * 1000);
  return null;
}

function formatBubbleTime(value) {
  const date = parseTimestamp(value);
  if (!date) return '';
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(date);
}

function formatDayChip(value) {
  const date = parseTimestamp(value);
  if (!date) return 'Today';
  const diffDays = (Date.now() - date.getTime()) / 86400000;
  if (diffDays < 1) return 'Today';
  if (diffDays < 2) return 'Yesterday';
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date);
}

export default function ChatWindow({ chat, chatId, currentUser, usersMap, onBack }) {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [sending, setSending] = useState(false);
  const [messageLimit, setMessageLimit] = useState(30);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);

  const peerUid = useMemo(() => {
    if (!chat?.members || !currentUser) return null;
    return chat.members.find((member) => member !== currentUser.uid) || null;
  }, [chat, currentUser]);

  const peerUser = peerUid ? usersMap?.[peerUid] || null : null;

  useEffect(() => {
    if (!chatId) return undefined;
    const q = query(collection(firestore, 'chats', chatId, 'messages'), orderBy('createdAt', 'desc'), limit(messageLimit));
    const unsub = onSnapshot(q, (snapshot) => {
      const next = snapshot.docs
        .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
        .sort((first, second) => {
          const firstTime = parseTimestamp(first.createdAt)?.getTime?.() || 0;
          const secondTime = parseTimestamp(second.createdAt)?.getTime?.() || 0;
          return firstTime - secondTime;
        });
      setMessages(next);
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      });
    });
    return () => unsub();
  }, [chatId, messageLimit]);

  useEffect(() => {
    if (!chatId || !currentUser || !peerUid) return undefined;
    const typingRef = doc(firestore, 'chats', chatId, 'typing', peerUid);
    const unsub = onSnapshot(typingRef, (snap) => {
      setTyping(Boolean(snap.data()?.isTyping));
    });
    return () => unsub();
  }, [chatId, currentUser, peerUid]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 140)}px`;
  }, [draft]);

  const handleTypingChange = (value) => {
    setDraft(value);
    if (!currentUser || !chatId) return;

    setDoc(doc(firestore, 'chats', chatId, 'typing', currentUser.uid), {
      isTyping: value.trim().length > 0,
      updatedAt: serverTimestamp(),
    }, { merge: true });

    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setDoc(doc(firestore, 'chats', chatId, 'typing', currentUser.uid), {
        isTyping: false,
        updatedAt: serverTimestamp(),
      }, { merge: true }).catch(() => undefined);
    }, 1500);
  };

  async function sendMessage() {
    if (!currentUser || !chatId || !draft.trim() || sending) return;
    setSending(true);

    try {
      const messageRef = doc(collection(firestore, 'chats', chatId, 'messages'));
      const messagePayload = {
        senderId: currentUser.uid,
        text: draft.trim(),
        createdAt: serverTimestamp(),
        status: 'sent',
        replyTo: replyTo ? { id: replyTo.id, text: replyTo.text, senderId: replyTo.senderId } : null,
      };

      await setDoc(messageRef, messagePayload);
      const nextUnread = { ...(chat?.unread || {}), [currentUser.uid]: 0 };
      if (peerUid) nextUnread[peerUid] = Number(nextUnread[peerUid] || 0) + 1;
      await updateDoc(doc(firestore, 'chats', chatId), {
        lastMessage: draft.trim(),
        lastMessageAt: serverTimestamp(),
        unread: nextUnread,
      });
      setDraft('');
      setReplyTo(null);
      setShowEmoji(false);
    } catch (error) {
      showToast('Message failed to send.', 'error');
    } finally {
      setSending(false);
    }
  }

  async function handleImageSelect(event) {
    const file = event.target.files?.[0];
    if (!file || !chatId || !currentUser) return;

    const limit = 1_000_000;
    if (file.size > limit) {
      showToast('Image is too large. Please send a file under 1MB.', 'error');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const messageRef = doc(collection(firestore, 'chats', chatId, 'messages'));
        await setDoc(messageRef, {
          senderId: currentUser.uid,
          text: '',
          imageData: String(reader.result || ''),
          createdAt: serverTimestamp(),
          status: 'sent',
        });
        const nextUnread = { ...(chat?.unread || {}), [currentUser.uid]: 0 };
        if (peerUid) nextUnread[peerUid] = Number(nextUnread[peerUid] || 0) + 1;
        await updateDoc(doc(firestore, 'chats', chatId), {
          lastMessage: 'Image',
          lastMessageAt: serverTimestamp(),
          unread: nextUnread,
        });
      } catch (error) {
        showToast('Image failed to send.', 'error');
      }
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  }

  async function handleDelete(messageId, mode) {
    if (!chatId) return;
    const messageRef = doc(firestore, 'chats', chatId, 'messages', messageId);
    if (mode === 'everyone') {
      await updateDoc(messageRef, {
        deletedForEveryone: true,
        text: 'This message was deleted',
        imageData: '',
        status: 'deleted',
      }).catch(() => undefined);
      setMenuOpenId(null);
      return;
    }
    await updateDoc(messageRef, { deletedFor: [currentUser.uid] }).catch(() => undefined);
    setMenuOpenId(null);
  }

  async function handleCopy(text) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Message copied.', 'success');
    } catch {
      showToast('Copy failed.', 'error');
    }
  }

  const loadMore = () => setMessageLimit((count) => count + 30);

  return (
    <div className="cwschat chat-window-wrap">
      <header className="cwschat chat-header">
        <div className="cwschat header-left">
          <button type="button" className="cwschat back-button" onClick={onBack} aria-label="Back to list">
            <ArrowLeft size={18} />
          </button>
          <div className="cwschat header-avatar-wrap">
            {peerUser?.photoURL ? (
              <img src={peerUser.photoURL} alt="" className="cwschat header-avatar" />
            ) : (
              <span className="cwschat header-avatar fallback">{(peerUser?.displayName || 'C').slice(0, 1).toUpperCase()}</span>
            )}
            {peerUser?.online && <span className="cwschat online-indicator" />}
          </div>
          <div className="cwschat header-identify">
            <strong>{peerUser?.displayName || 'CodeWithSiam user'}</strong>
            <span>{typing ? 'typing...' : peerUser?.online ? 'online' : 'offline'}</span>
          </div>
        </div>
      </header>

      <div className="cwschat chat-body" ref={scrollRef}>
        <div className="cwschat chat-scroll-inner">
          <button type="button" className="cwschat load-more-btn" onClick={loadMore}>Load older messages</button>
          {messages.length === 0 ? (
            <div className="cwschat empty-message-state">Say hello to start the conversation.</div>
          ) : (
            messages.map((message, index) => {
              const isMine = message.senderId === currentUser?.uid;
              const previous = index > 0 ? messages[index - 1] : null;
              const showDateChip = !previous || formatDayChip(previous.createdAt) !== formatDayChip(message.createdAt);
              const isDeleted = Boolean(message.deletedForEveryone || message.deletedFor?.includes(currentUser?.uid));

              return (
                <div key={message.id} className="cwschat message-group">
                  {showDateChip && <div className="cwschat date-chip">{formatDayChip(message.createdAt)}</div>}
                  <div className={`cwschat message-bubble${isMine ? ' mine' : ' theirs'}`}>
                    {message.replyTo && (
                      <div className="cwschat reply-preview">
                        Replying to {message.replyTo.senderId === currentUser?.uid ? 'yourself' : 'message'}
                      </div>
                    )}

                    {isDeleted ? (
                      <div className="cwschat deleted-message">Message deleted</div>
                    ) : (
                      <>
                        {message.imageData ? <img src={message.imageData} alt="sent media" className="cwschat message-image" /> : null}
                        {message.text ? <p>{message.text}</p> : null}
                      </>
                    )}

                    <div className="cwschat bubble-meta">
                      <span>{formatBubbleTime(message.createdAt)}</span>
                      {isMine && <CheckCheck size={12} />}
                    </div>

                    {isMine && !isDeleted && (
                      <div className="cwschat bubble-actions">
                        <button type="button" onClick={() => handleCopy(message.text || '')}>Copy</button>
                        <button type="button" onClick={() => setReplyTo({ id: message.id, text: message.text || 'Image', senderId: message.senderId })}>Reply</button>
                        <div className="cwschat dropdown-wrap">
                          <button type="button" onClick={() => setMenuOpenId(menuOpenId === message.id ? null : message.id)}>Delete</button>
                          {menuOpenId === message.id && (
                            <div className="cwschat delete-menu">
                              <button type="button" onClick={() => handleDelete(message.id, 'me')}>For me</button>
                              <button type="button" onClick={() => handleDelete(message.id, 'everyone')}>For everyone</button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="cwschat input-row">
        <div className="cwschat composer-tools">
          <button type="button" className="cwschat tool-button" aria-label="Emoji" onClick={() => setShowEmoji((value) => !value)}>
            <Smile size={18} />
          </button>
          <label className="cwschat tool-button" aria-label="Attach image">
            <ImagePlus size={18} />
            <input type="file" accept="image/*" onChange={handleImageSelect} />
          </label>
        </div>

        {showEmoji && (
          <div className="cwschat emoji-picker" role="dialog" aria-label="Emoji picker">
            {EMOJIS.map((emoji) => (
              <button key={emoji} type="button" className="cwschat emoji-option" onClick={() => { setDraft((value) => `${value}${emoji}`); setShowEmoji(false); }}>
                {emoji}
              </button>
            ))}
          </div>
        )}

        {replyTo && (
          <div className="cwschat reply-box">
            <span>Replying to {replyTo.text}</span>
            <button type="button" onClick={() => setReplyTo(null)}><X size={12} /></button>
          </div>
        )}

        <textarea
          ref={inputRef}
          value={draft}
          onChange={(event) => handleTypingChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              sendMessage();
            }
          }}
          className="cwschat message-input"
          placeholder="Type a message"
          rows={1}
        />

        <button type="button" className="cwschat send-button" onClick={sendMessage} aria-label="Send message" disabled={sending || !draft.trim()}>
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}

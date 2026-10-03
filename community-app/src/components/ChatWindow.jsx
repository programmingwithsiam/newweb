import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  endAt,
  get,
  limitToLast,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onDisconnect,
  onValue,
  orderByChild,
  push,
  query,
  ref,
  set,
  update,
  serverTimestamp,
} from 'firebase/database';
import { db } from '../firebase/config';
import { useToast } from '../context/ToastContext';
import { ArrowDown, ArrowLeft, Check, CheckCheck, ChevronDown, Code2, Copy, Ellipsis, ImagePlus, Info, LoaderCircle, Pencil, Phone, Reply, RotateCcw, SendHorizontal, Smile, ThumbsUp, Trash2, Video, X } from 'lucide-react';
import { messengerStrings } from '../messenger-strings';
import {
  normalizeChatMessage,
  normalizeDisplayName,
  normalizeTimestamp,
  sendChatMessage,
} from '../utils/chatService';
import {
  getCloudinaryDeliveryUrl,
  prepareCloudinaryImage,
  uploadCloudinaryImage,
} from '../config/cloudinary';
import '../styles/Messenger.css';

const PAGE_SIZE = 30;
const MAX_TEXTAREA_HEIGHT = 110;
const SEND_ACK_TIMEOUT = 15_000;
const EMOJIS = ['👍', '❤️', '😂', '🎉', '😮', '😢', '😎'];

function parseTimestamp(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  const timestamp = normalizeTimestamp(value);
  return timestamp ? new Date(timestamp) : null;
}

function timestampValue(value) {
  return parseTimestamp(value)?.getTime() || 0;
}

function formatBubbleTime(value) {
  const date = parseTimestamp(value);
  if (!date) return '';
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(date);
}

function formatDayChip(value, detailed = false) {
  const date = parseTimestamp(value);
  if (!date) return messengerStrings.dateUnavailable;
  if (!detailed) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const days = Math.round((today - messageDay) / 86400000);
    if (days <= 0) return messengerStrings.today;
    if (days === 1) return messengerStrings.yesterday;
    return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: date.getFullYear() === now.getFullYear() ? undefined : 'numeric' }).format(date);
  }
  const day = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date).replace('Sept ', 'Sep ');
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(date);
  return `${day}, ${time}`;
}

function presenceLabel(peerUser) {
  if (peerUser?.online) return messengerStrings.activeNow;
  const lastSeen = parseTimestamp(peerUser?.lastSeen || peerUser?.lastActive);
  if (!lastSeen) return messengerStrings.offline;
  const seconds = Math.max(0, Math.floor((Date.now() - lastSeen.getTime()) / 1000));
  if (seconds < 60) return messengerStrings.lastSeenJustNow;
  if (seconds < 3600) return messengerStrings.lastSeenMinutes(Math.floor(seconds / 60));
  if (seconds < 86400) return messengerStrings.lastSeenHours(Math.floor(seconds / 3600));
  return messengerStrings.lastSeenDate(new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(lastSeen));
}

function renderMessageText(value) {
  const parts = String(value).split(/(https?:\/\/[^\s<]+)/gi);
  return parts.map((part, index) => {
    if (!/^https?:\/\//i.test(part)) return <span key={`text-${index}`}>{part}</span>;
    const trailing = part.match(/[.,!?;:)\]}]+$/)?.[0] || '';
    const href = trailing ? part.slice(0, -trailing.length) : part;
    return (
      <span key={`link-${index}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">{href}</a>
        {trailing}
      </span>
    );
  });
}

function imageSelectionError(error) {
  if (error?.code === 'INVALID_IMAGE_TYPE') return messengerStrings.onlySupportedImages;
  if (error?.code === 'IMAGE_TOO_LARGE') return messengerStrings.imagesTooLarge;
  return messengerStrings.imageProcessingFailed;
}

function ChatImage({ message, onOpen }) {
  const [failed, setFailed] = useState(false);
  const imageUrl = message.imageUrl || message.imageData;
  const caption = message.caption || '';

  return (
    <div className="cwschat image-message-content">
      {failed ? (
        <div className="cwschat image-unavailable">{messengerStrings.imageUnavailable}</div>
      ) : (
        <button type="button" className="cwschat image-open-button" onClick={(event) => {
          event.stopPropagation();
          onOpen(imageUrl);
        }} aria-label={messengerStrings.openImage}>
          <img
            className="cwschat message-image"
            src={getCloudinaryDeliveryUrl(imageUrl, 600)}
            alt={caption || messengerStrings.sharedImage}
            width={message.width || undefined}
            height={message.height || undefined}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        </button>
      )}
      {caption && <p className="cwschat image-caption">{caption}</p>}
    </div>
  );
}

export default function ChatWindow({ chat, chatId, currentUser, usersMap, onBack, onToggleInfo, infoOpen = false, compact = false, onClose, onMinimize }) {
  const messengerView = Boolean(onBack || compact);
  const { showToast } = useToast();
  const [latestMessages, setLatestMessages] = useState([]);
  const [olderMessages, setOlderMessages] = useState([]);
  const [optimisticMessages, setOptimisticMessages] = useState([]);
  const [deliveryStates, setDeliveryStates] = useState({});
  const [draft, setDraft] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [reactionPickerId, setReactionPickerId] = useState(null);
  const [localReactions, setLocalReactions] = useState({});
  const [codeMode, setCodeMode] = useState(false);
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [sendingIds, setSendingIds] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [pageVisible, setPageVisible] = useState(
    document.visibilityState === 'visible' && document.hasFocus()
  );
  const [peerPresence, setPeerPresence] = useState(null);
  const [imageDraft, setImageDraft] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [draggingImage, setDraggingImage] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const uploadAbortRef = useRef(null);
  const typingTimer = useRef(null);
  const typingActive = useRef(false);
  const oldestCursor = useRef(null);
  const messageDocs = useRef(new Map());
  const liveMessages = useRef(new Map());
  const olderMessageIds = useRef(new Set());
  const messageSources = useRef(new Map());
  const publishedMessageIds = useRef(new Set());
  const chatRefState = useRef(chat);
  const atBottom = useRef(true);
  const scrollRestore = useRef(null);
  const lastSendAttempt = useRef(0);
  const sendLock = useRef(false);
  const sendAttemptSequence = useRef(0);
  const sendAttempts = useRef(new Map());
  const lastReadRequest = useRef('');

  chatRefState.current = chat;

  const peerUid = useMemo(() => {
    if (!chat?.members || !currentUser) return null;
    return chat.members.find((member) => member !== currentUser.uid) || null;
  }, [chat?.members, currentUser?.uid]);
  const basePeerUser = peerUid ? usersMap?.[peerUid] || null : null;
  const peerUser = peerPresence
    ? {
        ...basePeerUser,
        online: Boolean(peerPresence.online || peerPresence.state === 'online'),
        lastSeen: peerPresence.lastSeen || peerPresence.lastActive || peerPresence.lastChanged || null,
      }
    : basePeerUser;

  const messages = useMemo(() => {
    const merged = new Map();
    olderMessages.forEach((message) => merged.set(message.id, message));
    latestMessages.forEach((message) => merged.set(message.id, message));
    optimisticMessages.forEach((message) => merged.set(message.id, message));
    for (const [id, message] of merged) {
      if (deliveryStates[id]) merged.set(id, { ...message, _delivery: deliveryStates[id] });
    }
    return [...merged.values()].sort((first, second) =>
      timestampValue(first.createdAt) - timestampValue(second.createdAt)
    );
  }, [deliveryStates, latestMessages, olderMessages, optimisticMessages]);
  const lastOwnMessageId = [...messages].reverse()
    .find((message) => message.senderId === currentUser?.uid)?.id;
  const peerMessage = peerUid
    ? [...messages].reverse().find((message) => message.senderId === peerUid)
    : null;
  const embeddedPeer = peerUid ? chat?.memberProfiles?.[peerUid] || {} : {};
  const peerDisplayName = normalizeDisplayName(
    peerUser?.displayName,
    peerUser?.fullName,
    peerUser?.username,
    embeddedPeer.displayName,
    embeddedPeer.fullName,
    embeddedPeer.name,
    chat?.lastMessageSenderUid === peerUid ? chat?.lastMessageSenderName : '',
    peerMessage?.senderName,
    peerMessage?.senderEmail
  ) || messengerStrings.communityMember;
  const peerPhotoURL = peerUser?.photoURL || embeddedPeer.photoURL || embeddedPeer.profilePicture ||
    peerMessage?.senderPhotoURL ||
    (chat?.lastMessageSenderUid === peerUid ? chat?.lastMessageSenderPhotoURL : '') || '';

  useEffect(() => {
    const updateVisibility = () => setPageVisible(
      document.visibilityState === 'visible' && document.hasFocus()
    );
    document.addEventListener('visibilitychange', updateVisibility);
    window.addEventListener('focus', updateVisibility);
    window.addEventListener('blur', updateVisibility);
    return () => {
      document.removeEventListener('visibilitychange', updateVisibility);
      window.removeEventListener('focus', updateVisibility);
      window.removeEventListener('blur', updateVisibility);
    };
  }, []);

  useEffect(() => () => {
    uploadAbortRef.current?.abort();
    if (imageDraft?.previewUrl) URL.revokeObjectURL(imageDraft.previewUrl);
  }, [imageDraft?.previewUrl]);

  useEffect(() => {
    if (!lightboxUrl) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxUrl('');
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxUrl]);

  const writeTypingState = useCallback((nextValue) => {
    if (!chatId || !currentUser || typingActive.current === nextValue) return;
    typingActive.current = nextValue;
    const path = `typing/${chatId}/${currentUser.uid}`;
    set(ref(db, path), {
      isTyping: nextValue,
      updatedAt: serverTimestamp(),
    }).then(() => {
      console.info(`[msgr] typing ok ${path}`);
    }).catch((writeError) => {
      console.error(`[msgr] typing FAILED ${path} ${writeError?.code || 'unknown'}`, writeError?.message || String(writeError));
    });
  }, [chatId, currentUser]);

  useEffect(() => {
    uploadAbortRef.current?.abort();
    uploadAbortRef.current = null;
    setImageDraft((current) => {
      if (current?.previewUrl) URL.revokeObjectURL(current.previewUrl);
      return null;
    });
    setUploadingImage(false);
    setUploadProgress(0);
    setUploadError('');
    setLatestMessages([]);
    setOlderMessages([]);
    setOptimisticMessages([]);
    setDeliveryStates({});
    setHasMore(false);
    setNewMessageCount(0);
    oldestCursor.current = null;
    messageDocs.current = new Map();
    liveMessages.current = new Map();
    olderMessageIds.current = new Set();
    messageSources.current = new Map();
    publishedMessageIds.current = new Set();
    atBottom.current = true;
    lastReadRequest.current = '';
    sendAttempts.current.clear();
  }, [chatId]);

  useEffect(() => {
    if (!chatId || !currentUser || !pageVisible) return undefined;
    const messagesPath = `messages/${chatId}`;
    const messagesRef = ref(db, messagesPath);
    const createdAtQuery = query(messagesRef, orderByChild('createdAt'), limitToLast(PAGE_SIZE));
    const createdAtOrderQuery = query(messagesRef, orderByChild('createdAtOrder'), limitToLast(PAGE_SIZE));
    let initialized = false;
    console.info(`[msgr] listen attach ${messagesPath} orderByChild(createdAt) limitToLast(${PAGE_SIZE})`);
    console.info(`[msgr] listen attach ${messagesPath} orderByChild(createdAtOrder) limitToLast(${PAGE_SIZE})`);

    const publishMessages = () => {
      const previousIds = publishedMessageIds.current;
      const next = [...liveMessages.current.values()]
        .sort((first, second) => timestampValue(first.createdAt) - timestampValue(second.createdAt) ||
          String(first.id).localeCompare(String(second.id)))
        .slice(-PAGE_SIZE);
      oldestCursor.current = next.length
        ? { createdAt: next[0]._rawCreatedAt, id: next[0].id }
        : null;
      next.forEach((message) => messageDocs.current.set(message.id, message));
      publishedMessageIds.current = new Set(next.map((message) => message.id));
      setHasMore(next.length === PAGE_SIZE);
      setLatestMessages(next);
      setOptimisticMessages((pending) => pending.filter((message) =>
        !messageDocs.current.has(message.id) || message._delivery !== 'sent'
      ));

      const currentChat = chatRefState.current;
      const latestIncoming = [...next].reverse().find((message) => message.senderId !== currentUser.uid);
      const lastReadAt = timestampValue(currentChat?.readAt?.[currentUser.uid]);
      const unreadCount = Number(currentChat?.unread?.[currentUser.uid] || 0);
      const readRequestId = `${chatId}:${latestIncoming?.id || `unread-${unreadCount}`}`;
      if (pageVisible && (unreadCount > 0 ||
        (latestIncoming && timestampValue(latestIncoming.createdAt) > lastReadAt)) &&
        lastReadRequest.current !== readRequestId) {
        lastReadRequest.current = readRequestId;
        const readUpdates = {
          [`conversations/${chatId}/unreadByUid/${currentUser.uid}`]: 0,
          [`conversations/${chatId}/readAt/${currentUser.uid}`]: serverTimestamp(),
          [`userConversations/${currentUser.uid}/${chatId}/unreadCount`]: 0,
          [`userConversations/${currentUser.uid}/${chatId}/unreadByUid/${currentUser.uid}`]: 0,
          [`userConversations/${currentUser.uid}/${chatId}/readAt/${currentUser.uid}`]: serverTimestamp(),
        };
        (currentChat?.members || []).forEach((memberUid) => {
          readUpdates[`userConversations/${memberUid}/${chatId}/readAt/${currentUser.uid}`] = serverTimestamp();
        });
        update(ref(db), readUpdates).then(() => {
          Object.keys(readUpdates).forEach((path) => console.info(`[msgr] read ok ${path}`));
        }).catch((readError) => {
          if (lastReadRequest.current === readRequestId) lastReadRequest.current = '';
          Object.keys(readUpdates).forEach((path) => {
            console.error(`[msgr] read FAILED ${path} ${readError?.code || 'unknown'}`, readError?.message || String(readError));
          });
        });
      }

      if (!initialized) {
        initialized = true;
        requestAnimationFrame(() => {
          if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          atBottom.current = true;
        });
      } else if (atBottom.current) {
        requestAnimationFrame(() => {
          if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        });
        setNewMessageCount(0);
      } else if (next.some((message) =>
        !previousIds.has(message.id) && message.senderId !== currentUser.uid
      )) {
        setNewMessageCount((count) => count + 1);
      }
    };

    const writeSnapshot = (source, snapshot, eventName) => {
      const path = `${messagesPath}/${snapshot.key}`;
      console.info(`[msgr] ${eventName} ${snapshot.key} ${path}`);
      messageSources.current.set(snapshot.key, new Set([
        ...(messageSources.current.get(snapshot.key) || []),
        source,
      ]));
      const raw = snapshot.val() || {};
      const message = {
        ...normalizeChatMessage(snapshot.key, raw),
        _rawCreatedAt: raw.createdAt ?? null,
      };
      liveMessages.current.set(snapshot.key, message);
      messageDocs.current.set(snapshot.key, message);
      publishMessages();
    };

    const removeSnapshot = (source, snapshot) => {
      const path = `${messagesPath}/${snapshot.key}`;
      console.info(`[msgr] child_removed ${snapshot.key} ${path}`);
      const remaining = new Set(messageSources.current.get(snapshot.key) || []);
      remaining.delete(source);
      if (remaining.size) messageSources.current.set(snapshot.key, remaining);
      else {
        messageSources.current.delete(snapshot.key);
        liveMessages.current.delete(snapshot.key);
        if (!olderMessageIds.current.has(snapshot.key)) messageDocs.current.delete(snapshot.key);
      }
      publishMessages();
    };

    const attach = (source, targetQuery) => {
      const listenerError = (error) => {
        console.error(`[msgr] listen FAILED ${messagesPath} ${error?.code || 'unknown'}`, error?.message || String(error));
        showToast(messengerStrings.messageListenerFailed, 'error');
      };
      return [
        onChildAdded(targetQuery, (snapshot) => writeSnapshot(source, snapshot, 'child_added'), listenerError),
        onChildChanged(targetQuery, (snapshot) => writeSnapshot(source, snapshot, 'child_changed'), listenerError),
        onChildRemoved(targetQuery, (snapshot) => removeSnapshot(source, snapshot), listenerError),
      ];
    };
    const unsubscribe = [
      ...attach('createdAt', createdAtQuery),
      ...attach('createdAtOrder', createdAtOrderQuery),
    ];

    return () => {
      unsubscribe.forEach((stop) => stop());
      console.info(`[msgr] listen detach ${messagesPath}`);
    };
  }, [chatId, currentUser, pageVisible, showToast]);

  useEffect(() => {
    if (!chatId || !currentUser || !peerUid || !pageVisible) {
      setTyping(false);
      return undefined;
    }

    const typingRef = ref(db, `typing/${chatId}/${peerUid}`);
    const ownTypingRef = ref(db, `typing/${chatId}/${currentUser.uid}`);
    console.info(`[msgr] listen attach typing/${chatId}/${peerUid}`);
    onDisconnect(ownTypingRef).remove().then(() => {
      console.info(`[msgr] onDisconnect registered typing/${chatId}/${currentUser.uid}`);
    }).catch((error) => {
      console.error(`[msgr] onDisconnect FAILED typing/${chatId}/${currentUser.uid} ${error?.code || 'unknown'}`, error?.message || String(error));
    });
    const unsubscribe = onValue(typingRef, (snapshot) => {
      setTyping(Boolean(snapshot.val()?.isTyping));
    }, (listenerError) => console.error(`[msgr] listen FAILED typing/${chatId}/${peerUid} ${listenerError?.code || 'unknown'}`, {
      code: listenerError?.code || 'unknown',
      message: listenerError?.message || String(listenerError),
    }));
    return () => {
      unsubscribe();
      onDisconnect(ownTypingRef).cancel().catch((error) => {
        console.warn(`[msgr] onDisconnect cancel FAILED typing/${chatId}/${currentUser.uid} ${error?.code || 'unknown'}`);
      });
      console.info(`[msgr] listen detach typing/${chatId}/${peerUid}`);
    };
  }, [chatId, currentUser, pageVisible, peerUid]);

  useEffect(() => {
    if (!chatId || !currentUser || !peerUid || !pageVisible) {
      setPeerPresence(null);
      return undefined;
    }
    const path = `presence/${peerUid}`;
    console.info(`[msgr] listen attach ${path}`);
    const unsubscribe = onValue(ref(db, path), (snapshot) => {
      setPeerPresence(snapshot.val() || null);
    }, (error) => {
      console.error(`[msgr] listen FAILED ${path} ${error?.code || 'unknown'}`, error?.message || String(error));
    });
    return () => {
      unsubscribe();
      console.info(`[msgr] listen detach ${path}`);
    };
  }, [chatId, currentUser, pageVisible, peerUid]);

  useEffect(() => {
    if (!pageVisible) writeTypingState(false);
  }, [pageVisible, writeTypingState]);

  useEffect(() => () => {
    window.clearTimeout(typingTimer.current);
    writeTypingState(false);
  }, [writeTypingState]);

  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }, [draft]);

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    if (scrollRestore.current) {
      const { height, top } = scrollRestore.current;
      container.scrollTop = top + (container.scrollHeight - height);
      scrollRestore.current = null;
      return;
    }
    if (atBottom.current) container.scrollTop = container.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const container = scrollRef.current;
    const content = container?.querySelector('.chat-scroll-inner');
    if (!container || !content) return undefined;

    const keepLatestVisible = () => {
      if (atBottom.current && !scrollRestore.current) {
        container.scrollTop = container.scrollHeight;
      }
    };
    const observer = new ResizeObserver(keepLatestVisible);
    observer.observe(container);
    observer.observe(content);
    return () => observer.disconnect();
  }, [chatId]);

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;
    atBottom.current = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    if (atBottom.current) setNewMessageCount(0);
  }

  function handleTypingChange(value) {
    setDraft(value);
    if (!currentUser || !chatId || !pageVisible) return;

    const isTyping = value.trim().length > 0;
    if (isTyping) writeTypingState(true);
    else writeTypingState(false);

    window.clearTimeout(typingTimer.current);
    if (isTyping) {
      typingTimer.current = window.setTimeout(() => writeTypingState(false), 3000);
    }
  }

  async function transmitMessage(message, retry = false) {
    if (!currentUser || !chatId || !peerUid) return;
    if (sendLock.current) {
      showToast(messengerStrings.waitForCurrentMessage, 'info');
      return;
    }
    const now = Date.now();
    if (now - lastSendAttempt.current < 1000) {
      showToast(messengerStrings.waitBeforeSending, 'info');
      return;
    }

    sendLock.current = true;
    lastSendAttempt.current = now;
    setSendingIds((ids) => [...ids, message.id]);
    setDeliveryStates((states) => ({ ...states, [message.id]: 'sending' }));
    const attemptToken = ++sendAttemptSequence.current;
    sendAttempts.current.set(message.id, attemptToken);
    setOptimisticMessages((pending) => [
      ...pending.filter((item) => item.id !== message.id),
      { ...message, _delivery: 'sending' },
    ]);

    const markSent = (sendResult) => {
      if (sendAttempts.current.get(message.id) !== attemptToken) return;
      setDeliveryStates((states) => ({ ...states, [message.id]: 'sent' }));
      setOptimisticMessages((pending) => pending
        .map((item) => item.id === message.id ? { ...item, _delivery: 'sent' } : item)
        .filter((item) => item.id !== message.id || !messageDocs.current.has(message.id)));
      if (message.type === 'image') {
        setImageDraft((current) => {
          if (current?.previewUrl) URL.revokeObjectURL(current.previewUrl);
          return null;
        });
        setDraft('');
        setUploadError('');
        setUploadProgress(0);
      }
      setShowEmoji(false);
      setNewMessageCount(0);
      writeTypingState(false);
      if (!sendResult.summaryUpdated) {
        showToast(messengerStrings.messageDeliveredPreviewFailed, 'error');
      }
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        atBottom.current = true;
      });
    };

    const markFailed = (sendError, notify = true) => {
      if (sendAttempts.current.get(message.id) !== attemptToken) return;
      const errorCode = String(sendError?.code || '').toLowerCase().replaceAll('_', '-');
      console.error('Message send failed:', {
        code: sendError?.code || sendError?.message || 'unknown',
        message: sendError?.message || String(sendError),
      });
      setDeliveryStates((states) => ({ ...states, [message.id]: 'failed' }));
      setOptimisticMessages((pending) => pending.map((item) =>
        item.id === message.id ? { ...item, _delivery: 'failed', _error: sendError?.message || String(sendError) } : item
      ));
      if (!notify) return;
      showToast(
        sendError?.message === 'MESSAGE_RATE_LIMIT'
          ? messengerStrings.waitOneSecond
          : sendError?.message === 'MESSAGE_TOO_LONG'
            ? messengerStrings.messageLimit
            : errorCode === 'permission-denied'
              ? messengerStrings.messagePermissionDenied
              : ['network-error', 'unavailable', 'disconnected'].includes(errorCode)
                ? messengerStrings.messageOffline
                : messengerStrings.messageSendFailed,
        'error'
      );
    };

    try {
      const operation = sendChatMessage({
        chatId,
        currentUser,
        peerUid,
        messageId: message.id,
        text: message.text,
        senderName: normalizeDisplayName(
          usersMap?.[currentUser.uid]?.displayName,
          currentUser.displayName,
          currentUser.email
        ),
        senderPhotoURL: usersMap?.[currentUser.uid]?.photoURL || currentUser.photoURL || '',
        retry,
        image: message.type === 'image' ? {
          imageUrl: message.imageUrl,
          width: message.width,
          height: message.height,
          caption: message.caption || '',
        } : null,
        replyTo: message.replyTo || null,
      }).then(
        (result) => ({ kind: 'success', result }),
        (error) => ({ kind: 'failure', error })
      );
      let timeoutId;
      const outcome = await Promise.race([
        operation,
        new Promise((resolve) => {
          timeoutId = window.setTimeout(() => resolve({ kind: 'timeout' }), SEND_ACK_TIMEOUT);
        }),
      ]);
      window.clearTimeout(timeoutId);

      if (outcome.kind === 'timeout') {
        markFailed(new Error('SEND_ACK_TIMEOUT'));
        operation.then((lateOutcome) => {
          if (lateOutcome.kind === 'success') markSent(lateOutcome.result);
          else markFailed(lateOutcome.error, false);
        });
        return;
      }
      if (outcome.kind === 'failure') {
        markFailed(outcome.error);
        return;
      }
      markSent(outcome.result);
    } finally {
      sendLock.current = false;
      setSendingIds((ids) => ids.filter((id) => id !== message.id));
    }
  }

  async function handleImageSelection(file) {
    if (!file || !chatId || !currentUser || !peerUid || uploadingImage || imageDraft) return;
    try {
      const prepared = await prepareCloudinaryImage(file, { allowGif: true });
      setImageDraft({
        ...prepared,
        previewUrl: URL.createObjectURL(prepared.file),
        imageUrl: '',
      });
      setUploadError('');
      setUploadProgress(0);
    } catch (imageError) {
      showToast(imageSelectionError(imageError), 'error');
    }
  }

  function handleImageFileChange(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    handleImageSelection(file);
  }

  function handleImagePaste(event) {
    const file = Array.from(event.clipboardData?.items || [])
      .find((item) => item.type.startsWith('image/'))
      ?.getAsFile();
    if (file) {
      event.preventDefault();
      handleImageSelection(file);
    }
  }

  function handleImageDrop(event) {
    event.preventDefault();
    setDraggingImage(false);
    const file = Array.from(event.dataTransfer?.files || []).find((item) => item.type.startsWith('image/'));
    if (file) handleImageSelection(file);
  }

  function removeImageDraft() {
    if (uploadingImage) {
      uploadAbortRef.current?.abort();
      return;
    }
    if (imageDraft?.previewUrl) URL.revokeObjectURL(imageDraft.previewUrl);
    setImageDraft(null);
    setUploadError('');
    setUploadProgress(0);
  }

  async function saveMessageEdit() {
    if (!editingMessage || !draft.trim() || !chatId) return;
    try {
      await update(ref(db, `messages/${chatId}/${editingMessage.id}`), {
        text: draft.trim(),
        edited: true,
      });
      setEditingMessage(null);
      setDraft('');
      setMenuOpenId(null);
    } catch (editError) {
      console.error('Message edit failed:', {
        code: editError?.code || 'unknown',
        message: editError?.message || String(editError),
      });
      showToast('Could not edit this message. Please try again.', 'error');
    }
  }

  function startMessageEdit(message) {
    if (message.senderId !== currentUser?.uid || !message.text) return;
    setEditingMessage(message);
    setReplyTo(null);
    setDraft(message.text);
    setMenuOpenId(null);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function toggleReaction(messageId, emoji) {
    setLocalReactions((current) => ({
      ...current,
      [messageId]: current[messageId] === emoji ? '' : emoji,
    }));
    setReactionPickerId(null);
  }

  async function sendImageMessage() {
    if (!imageDraft || uploadingImage || uploadAbortRef.current || sendLock.current || !currentUser || !chatId || !peerUid) return;
    const caption = draft.trim();
    if (caption.length > 2000) {
      showToast(messengerStrings.captionLimit, 'error');
      return;
    }

    let uploaded = imageDraft.imageUrl
      ? { secureUrl: imageDraft.imageUrl, width: imageDraft.width, height: imageDraft.height }
      : null;
    if (!uploaded) {
      const controller = new AbortController();
      uploadAbortRef.current = controller;
      setUploadingImage(true);
      setUploadError('');
      try {
        uploaded = await uploadCloudinaryImage(imageDraft.file, {
          signal: controller.signal,
          onProgress: setUploadProgress,
        });
        setImageDraft((current) => current ? ({
          ...current,
          imageUrl: uploaded.secureUrl,
          width: uploaded.width || current.width,
          height: uploaded.height || current.height,
        }) : current);
      } catch (uploadError) {
        if (uploadError.name === 'AbortError') {
          setUploadError(messengerStrings.uploadCanceled);
        } else {
          console.error('Cloudinary chat image upload failed:', {
            code: uploadError?.code || 'unknown',
            message: uploadError?.message || String(uploadError),
          });
          setUploadError(messengerStrings.imageUploadFailed);
        }
        setUploadingImage(false);
        uploadAbortRef.current = null;
        return;
      }
      setUploadingImage(false);
      uploadAbortRef.current = null;
    }

    const messageId = push(ref(db, `messages/${chatId}`)).key;
    await transmitMessage({
      id: messageId,
      senderId: currentUser.uid,
      type: 'image',
      imageUrl: uploaded.secureUrl,
      width: uploaded.width || imageDraft.width,
      height: uploaded.height || imageDraft.height,
      caption,
      createdAt: new Date(),
      status: 'sent',
      replyTo: replyTo ? { id: replyTo.id, text: replyTo.text, senderId: replyTo.senderId } : null,
    });
    setReplyTo(null);
  }

  function sendMessage(messageText = draft.trim()) {
    if (editingMessage) {
      saveMessageEdit();
      return;
    }
    if (imageDraft) {
      sendImageMessage();
      return;
    }
    const plainText = messageText.trim();
    const text = codeMode ? `\`\`\`\n${plainText}\n\`\`\`` : plainText;
    if (!text || !currentUser || !chatId || !peerUid) return;
    if (text.length > 2000) {
      showToast(messengerStrings.messageLimit, 'error');
      return;
    }
    if (sendLock.current || Date.now() - lastSendAttempt.current < 1000) {
      showToast(messengerStrings.waitBeforeSending, 'info');
      return;
    }
    const messageId = push(ref(db, `messages/${chatId}`)).key;
    transmitMessage({
      id: messageId,
      senderId: currentUser.uid,
      text,
      createdAt: new Date(),
      status: 'sent',
      replyTo: replyTo ? { id: replyTo.id, text: replyTo.text, senderId: replyTo.senderId } : null,
    });
    setDraft('');
    setReplyTo(null);
    setCodeMode(false);
  }

  async function loadOlderMessages() {
    if (!oldestCursor.current || historyLoading || !hasMore || !pageVisible) return;
    const container = scrollRef.current;
    if (container) {
      atBottom.current = false;
      scrollRestore.current = { height: container.scrollHeight, top: container.scrollTop };
    }
    setHistoryLoading(true);
    try {
      const olderQuery = query(
        ref(db, `messages/${chatId}`),
        orderByChild('createdAt'),
        endAt(oldestCursor.current.createdAt, oldestCursor.current.id),
        limitToLast(PAGE_SIZE + 1)
      );
      const snapshot = await get(olderQuery);
      const page = [];
      snapshot.forEach((item) => {
        const raw = item.val() || {};
        page.push({
          ...normalizeChatMessage(item.key, raw),
          _rawCreatedAt: raw.createdAt ?? null,
        });
      });
      page.sort((first, second) => timestampValue(first.createdAt) - timestampValue(second.createdAt) ||
        String(first.id).localeCompare(String(second.id)));
      const dedupedPage = page.filter((message) => !messageDocs.current.has(message.id));
      if (dedupedPage.length) {
        const first = dedupedPage[0];
        oldestCursor.current = {
          createdAt: Object.prototype.hasOwnProperty.call(first, '_rawCreatedAt')
            ? first._rawCreatedAt
            : first.createdAt,
          id: first.id,
        };
        dedupedPage.forEach((message) => {
          olderMessageIds.current.add(message.id);
          messageDocs.current.set(message.id, message);
        });
        setOlderMessages((existing) => [...dedupedPage, ...existing]);
      }
      setHasMore(dedupedPage.length >= PAGE_SIZE);
    } catch (loadError) {
      console.error('Older messages failed to load:', {
        code: loadError?.code || 'unknown',
        message: loadError?.message || String(loadError),
      });
      showToast(messengerStrings.olderMessagesFailed, 'error');
      scrollRestore.current = null;
    } finally {
      setHistoryLoading(false);
    }
  }

  async function handleDelete(messageId, mode) {
    if (!chatId || !currentUser) return;
    const message = messages.find((item) => item.id === messageId);
    if (mode === 'everyone' && message?.senderId !== currentUser.uid) return;
    const messageRef = ref(db, `messages/${chatId}/${messageId}`);
    try {
      if (mode === 'everyone') {
        await update(messageRef, {
          deletedForEveryone: true,
          text: messengerStrings.messageDeleted,
          imageData: '',
          imageUrl: '',
          caption: '',
          status: 'deleted',
        });
      } else {
        const deletedFor = [...new Set([...(message?.deletedFor || []), currentUser.uid])];
        await update(messageRef, { deletedFor });
      }
      console.info(`[msgr] message update ok messages/${chatId}/${messageId}`);
      setMenuOpenId(null);
      if (editingMessage?.id === messageId) {
        setEditingMessage(null);
        setDraft('');
      }
    } catch (deleteError) {
      console.error(`[msgr] message update FAILED messages/${chatId}/${messageId} ${deleteError?.code || 'unknown'}`, deleteError?.message || String(deleteError));
      console.error('Message delete failed:', {
        code: deleteError?.code || 'unknown',
        message: deleteError?.message || String(deleteError),
      });
      showToast(messengerStrings.messageDeleteFailed, 'error');
    }
  }

  async function handleCopy(text) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      showToast(messengerStrings.messageCopied, 'success');
    } catch (copyError) {
      console.error('Message copy failed:', {
        code: copyError?.code || 'unknown',
        message: copyError?.message || String(copyError),
      });
      showToast(messengerStrings.copyFailed, 'error');
    }
  }

  function scrollToLatest() {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    atBottom.current = true;
    setNewMessageCount(0);
  }

  const lastReadAt = timestampValue(chat?.readAt?.[peerUid]);

  return (
    <div className={`cwschat chat-window-wrap${compact ? ' compact' : ''}`}>
      <header className="cwschat chat-header">
        <div className="cwschat header-left">
          {compact && (
            <button type="button" className="cwschat back-button compact-back-button" onClick={onMinimize} aria-label="Back to messages">
              <ArrowLeft size={18} />
            </button>
          )}
          {onBack && (
            <button type="button" className="cwschat back-button" onClick={onBack} aria-label={messengerStrings.backToChats}>
              <ArrowLeft size={19} />
            </button>
          )}
          <div className="cwschat header-avatar-wrap">
            {peerPhotoURL
              ? <img src={peerPhotoURL} alt="" className="cwschat header-avatar" />
              : <span className="cwschat header-avatar fallback">{peerDisplayName.slice(0, 1).toUpperCase()}</span>}
            {peerUser?.online && <span className="cwschat online-indicator" />}
          </div>
          <div className="cwschat header-identify">
            <strong>{peerDisplayName}{compact && <ChevronDown className="cwschat compact-name-chevron" size={14} aria-hidden="true" />}</strong>
            <span>{typing ? messengerStrings.typingNow : presenceLabel(peerUser)}</span>
          </div>
        </div>

        <div className={`cwschat chat-header-actions${compact ? ' compact-tools' : ''}`}>
          {messengerView && (
            <>
              <button type="button" className="cwschat tool-button msgr-header-call" aria-label="Start audio call" title="Audio call">
                <Phone size={20} />
              </button>
              <button type="button" className="cwschat tool-button msgr-header-video" aria-label="Start video call" title="Video call">
                <Video size={20} />
              </button>
            </>
          )}
          {onToggleInfo && (
            <button
              type="button"
              className="cwschat tool-button msgr-details-toggle"
              aria-label={messengerStrings.chatDetails}
              title={messengerStrings.chatDetails}
              aria-expanded={infoOpen}
              onClick={onToggleInfo}
            >
              <Info size={20} />
            </button>
          )}
          {messengerView && onBack && (
            <button type="button" className="cwschat tool-button mobile-chat-close" aria-label="Close conversation" title="Close" onClick={onBack}>
              <X size={19} />
            </button>
          )}
          {compact && (
            <>
              <button type="button" className="cwschat tool-button" aria-label={messengerStrings.closeChat} onClick={onClose}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </>
          )}
        </div>
      </header>

      <div
        className={`cwschat chat-body${draggingImage ? ' image-drag-over' : ''}`}
        ref={scrollRef}
        onScroll={handleScroll}
        onDragOver={(event) => {
          if (Array.from(event.dataTransfer?.types || []).includes('Files')) {
            event.preventDefault();
            setDraggingImage(true);
          }
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setDraggingImage(false);
        }}
        onDrop={handleImageDrop}
        aria-live="polite"
      >
        {draggingImage && <div className="cwschat drop-image-hint">{messengerStrings.dropImage}</div>}
        <div className="cwschat chat-scroll-inner">
          {hasMore && (
            <button type="button" className="cwschat load-more-btn" onClick={loadOlderMessages} disabled={historyLoading}>
              {historyLoading ? <><LoaderCircle size={15} className="msgr-spin" /> {messengerStrings.loading}</> : messengerStrings.loadOlderMessages}
            </button>
          )}
          {!messages.length && !latestMessages.length ? (
            <div className="cwschat empty-message-state">{messengerStrings.startConversation}</div>
          ) : (
            messages.map((message, index) => {
              const isMine = message.senderId === currentUser?.uid;
              const previous = index > 0 ? messages[index - 1] : null;
              const next = index + 1 < messages.length ? messages[index + 1] : null;
              const messageTime = timestampValue(message.createdAt);
              const previousTime = timestampValue(previous?.createdAt);
              const nextTime = timestampValue(next?.createdAt);
              const dayChanged = previous && new Date(previousTime).toDateString() !== new Date(messageTime).toDateString();
              const showDateChip = !compact && (!previous || dayChanged || messageTime - previousTime > 15 * 60_000);
              const isGrouped = Boolean(previous && previous.senderId === message.senderId &&
                !dayChanged && messageTime - previousTime <= 5 * 60_000);
              const groupedToNext = Boolean(next && next.senderId === message.senderId &&
                new Date(nextTime).toDateString() === new Date(messageTime).toDateString() &&
                nextTime - messageTime <= 5 * 60_000);
              const showSenderAvatar = !isMine && !groupedToNext;
              const isDeleted = Boolean(message.deletedForEveryone || message.deletedFor?.includes(currentUser?.uid));
              const isImageMessage = message.type === 'image' || Boolean(message.imageData || message.imageUrl);
              const codeMatch = typeof message.text === 'string'
                ? message.text.match(/^```(?:[\w+-]+)?\n([\s\S]*?)\n```$/)
                : null;
              const isSeen = isMine && timestampValue(message.createdAt) > 0 &&
                lastReadAt >= timestampValue(message.createdAt);
              const isLastOwnMessage = isMine && message.id === lastOwnMessageId;
              const isEndOfMessageGroup = !next || next.senderId !== message.senderId ||
                new Date(nextTime).toDateString() !== new Date(messageTime).toDateString() ||
                formatBubbleTime(next.createdAt) !== formatBubbleTime(message.createdAt);

              return (
                <div key={message.id} className={`cwschat message-group${isMine ? ' mine-group' : ' theirs-group'}${isGrouped ? ' grouped' : ''}${groupedToNext ? ' grouped-to-next' : ''}${showDateChip ? ' date-start' : ''}${selectedMessageId === message.id ? ' selected' : ''}`}>
                  {showDateChip && <div className="cwschat date-chip">{formatDayChip(message.createdAt, messengerView)}</div>}
                  {!isMine && (
                    <span className={`cwschat message-avatar${showSenderAvatar ? '' : ' avatar-spacer'}`}>
                      {showSenderAvatar && (peerPhotoURL
                        ? <img src={peerPhotoURL} alt="" />
                        : peerDisplayName.slice(0, 1).toUpperCase())}
                    </span>
                  )}
                  <div className="cwschat message-content">
                    <div
                      className={`cwschat message-bubble${isMine ? ' mine' : ' theirs'}${isDeleted ? ' deleted' : ''}${isImageMessage && !isDeleted ? ' image-message' : ''}${selectedMessageId === message.id ? ' selected' : ''}`}
                      title={formatBubbleTime(message.createdAt)}
                      onClick={(event) => {
                        if (event.target.closest('button, a, .bubble-actions')) return;
                        if (messengerView) {
                          setSelectedMessageId((selected) => selected === message.id ? null : message.id);
                        }
                      }}
                    >
                      {message.replyTo && messengerView && (
                        <div className="cwschat reply-preview">
                          <span className="cwschat reply-label">
                            {messengerStrings.replyingTo} {message.replyTo.senderId === currentUser?.uid ? messengerStrings.yourself : messengerStrings.replyMessage}
                          </span>
                          <span className="cwschat reply-quote">{message.replyTo.text}</span>
                        </div>
                      )}
                      {message.replyTo && !messengerView && (
                        <div className="cwschat reply-preview">
                          {messengerStrings.replyingTo} {message.replyTo.senderId === currentUser?.uid ? messengerStrings.yourself : messengerStrings.replyMessage}
                        </div>
                      )}
                      {isDeleted ? (
                        <div className="cwschat deleted-message">
                          {isMine ? 'You unsent a message' : `${peerDisplayName} unsent a message`}
                        </div>
                      ) : (
                        <>
                          {(message.type === 'image' || message.imageData || message.imageUrl) && (
                            <ChatImage message={message} onOpen={setLightboxUrl} />
                          )}
                          {message.type !== 'image' && message.text && (
                            <p className={`cwschat message-text${codeMatch ? ' code-message' : ''}`}>
                              {codeMatch ? <code>{codeMatch[1]}</code> : renderMessageText(message.text)}
                            </p>
                          )}
                        </>
                      )}
                      {!isDeleted && message._delivery !== 'failed' && (
                        messengerView ? (
                          <div className="cwschat bubble-actions">
                            <div className="cwschat reaction-action-wrap">
                              <button type="button" aria-label="React to message" title="React" onClick={() => setReactionPickerId(reactionPickerId === message.id ? null : message.id)}><Smile size={16} /></button>
                              {reactionPickerId === message.id && (
                                <div className="cwschat message-reaction-picker" role="group" aria-label="Choose a reaction">
                                  {EMOJIS.map((emoji) => (
                                    <button key={emoji} type="button" aria-label={`React ${emoji}`} onClick={() => toggleReaction(message.id, emoji)}>{emoji}</button>
                                  ))}
                                </div>
                              )}
                            </div>
                            <button type="button" aria-label={messengerStrings.reply} title={messengerStrings.reply} onClick={() => setReplyTo({ id: message.id, text: message.text || message.caption || messengerStrings.photo, senderId: message.senderId })}><Reply size={16} /></button>
                            <div className="cwschat dropdown-wrap">
                              <button type="button" aria-label="More message actions" title="More" onClick={() => setMenuOpenId(menuOpenId === message.id ? null : message.id)}><Ellipsis size={17} /></button>
                              {menuOpenId === message.id && (
                                <div className={`cwschat delete-menu${compact ? ' compact-message-menu' : ''}`}>
                                  <button type="button" onClick={() => { setReplyTo({ id: message.id, text: message.text || message.caption || messengerStrings.photo, senderId: message.senderId }); setMenuOpenId(null); }}><Reply size={15} />Reply</button>
                                  <button type="button" onClick={() => { handleCopy(message.text || message.caption || ''); setMenuOpenId(null); }}><Copy size={15} />Copy</button>
                                  {isMine && Boolean(message.text) && <button type="button" onClick={() => startMessageEdit(message)}><Pencil size={15} />Edit</button>}
                                  {isMine && <button type="button" className="danger-action" onClick={() => handleDelete(message.id, 'everyone')}><RotateCcw size={15} />Unsend</button>}
                                  <button type="button" className="danger-action" onClick={() => handleDelete(message.id, 'me')}><Trash2 size={15} />Delete for me</button>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="cwschat bubble-actions">
                            <button type="button" onClick={() => handleCopy(message.text || message.caption || '')}>{messengerStrings.copy}</button>
                            <button type="button" onClick={() => setReplyTo({ id: message.id, text: message.text || message.caption || messengerStrings.photo, senderId: message.senderId })}>{messengerStrings.reply}</button>
                            <div className="cwschat dropdown-wrap">
                              <button type="button" onClick={() => setMenuOpenId(menuOpenId === message.id ? null : message.id)}>{messengerStrings.more}</button>
                              {menuOpenId === message.id && (
                                <div className="cwschat delete-menu">
                                  <button type="button" onClick={() => handleDelete(message.id, 'me')}>{messengerStrings.deleteForMe}</button>
                                  <button type="button" onClick={() => handleDelete(message.id, 'everyone')}>{messengerStrings.deleteForEveryone}</button>
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    {messengerView && isEndOfMessageGroup && !isDeleted && (
                      <div className={`cwschat compact-message-meta${isMine ? ' mine-meta' : ''}`}>
                        <time>{formatBubbleTime(message.createdAt)}</time>
                        {isLastOwnMessage && message._delivery !== 'failed' && (
                          <>
                            {(isSeen || message.status === 'delivered') ? <CheckCheck size={12} aria-hidden="true" /> : <Check size={12} aria-hidden="true" />}
                            <span>{isSeen ? messengerStrings.seen
                              : message._delivery === 'sending' || sendingIds.includes(message.id)
                                ? `${messengerStrings.sending}…`
                                : message.status === 'delivered' ? 'Delivered' : 'Sent'}</span>
                          </>
                        )}
                      </div>
                    )}
                    {isLastOwnMessage && !isDeleted && !compact && (
                      <div className="cwschat delivery-status">
                        {message._delivery === 'failed' ? (
                          <span className="cwschat send-failed">
                            {messengerStrings.notSent}
                            <button type="button" onClick={() => transmitMessage(message, true)}>{messengerStrings.retry}</button>
                          </span>
                        ) : isSeen ? messengerStrings.seen
                          : message._delivery === 'sending' || sendingIds.includes(message.id)
                            ? `${messengerStrings.sending}…`
                            : message.status === 'delivered' ? 'Delivered' : 'Sent'}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
          {typing && <div className="cwschat typing-indicator" aria-label={messengerStrings.otherPersonTyping}><span /><span /><span /></div>}
        </div>
      </div>

      {newMessageCount > 0 && (
        <button type="button" className="msgr-new-messages" onClick={scrollToLatest}>
          {newMessageCount > 1 ? messengerStrings.newMessages : messengerStrings.newMessage} <ArrowDown size={15} />
        </button>
      )}

      {imageDraft && (
        <div className="cwschat attachment-preview">
          <img src={imageDraft.previewUrl} alt={messengerStrings.imagePreview} />
          <div className="cwschat attachment-preview-copy">
            <strong>{uploadingImage ? messengerStrings.uploadingImage(uploadProgress) : uploadError || messengerStrings.imageReady}</strong>
            {(uploadingImage || uploadError) && (
              <progress max="100" value={uploadProgress} aria-label={messengerStrings.imageUploadProgress} />
            )}
            {uploadError && !uploadingImage && !imageDraft.imageUrl && (
              <button type="button" onClick={sendImageMessage}>{messengerStrings.retryUpload}</button>
            )}
          </div>
          <button
            type="button"
            className="cwschat attachment-remove"
            onClick={removeImageDraft}
            aria-label={uploadingImage ? messengerStrings.cancelImageUpload : messengerStrings.removeImage}
            title={uploadingImage ? messengerStrings.cancelUpload : messengerStrings.removeImage}
          >
            <X size={17} />
          </button>
        </div>
      )}

      <div className="cwschat input-row">
        {showEmoji && (
          <div className="cwschat emoji-picker" role="dialog" aria-label={messengerStrings.emojiPicker}>
            {EMOJIS.map((emoji) => (
              <button key={emoji} type="button" className="cwschat emoji-option" onClick={() => { handleTypingChange(`${draft}${emoji}`); setShowEmoji(false); }}>
                {emoji}
              </button>
            ))}
          </div>
        )}
        {replyTo && (
          <div className="cwschat reply-box">
            <span>{messengerStrings.replyToMessage(replyTo.text)}</span>
            <button type="button" onClick={() => setReplyTo(null)} aria-label={messengerStrings.cancelReply}><X size={15} /></button>
          </div>
        )}

        <div className="cwschat composer-entry-row">
          {messengerView ? (
            <div className="cwschat composer-input-wrap">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(event) => handleTypingChange(event.target.value)}
                onPaste={handleImagePaste}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                className={`cwschat message-input${codeMode ? ' code-mode' : ''}`}
                placeholder={imageDraft ? messengerStrings.addCaption : 'Message'}
                aria-label={messengerStrings.messageLabel}
                rows={1}
                maxLength={2000}
              />
              <button type="button" className="cwschat composer-emoji" aria-label={messengerStrings.chooseEmoji} onClick={() => setShowEmoji((value) => !value)}>
                <Smile size={19} />
              </button>
            </div>
          ) : (
            <textarea
              ref={inputRef}
              value={draft}
              onChange={(event) => handleTypingChange(event.target.value)}
              onPaste={handleImagePaste}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage();
                }
              }}
              className={`cwschat message-input${codeMode ? ' code-mode' : ''}`}
              placeholder={imageDraft ? messengerStrings.addCaption : messengerStrings.typeMessage}
              aria-label={messengerStrings.messageLabel}
              rows={1}
              maxLength={2000}
            />
          )}
        </div>
        <div className="cwschat composer-tools-row">
          {!messengerView && (
            <button type="button" className="cwschat tool-button" aria-label={messengerStrings.chooseEmoji} onClick={() => setShowEmoji((value) => !value)}>
              <Smile size={20} />
            </button>
          )}
          <button
            type="button"
            className={`cwschat tool-button${messengerView ? ' composer-tool' : ''}`}
            aria-label={messengerStrings.attachImage}
            title={messengerStrings.attachImage}
            onClick={() => fileInputRef.current?.click()}
            disabled={Boolean(imageDraft) || uploadingImage}
          >
            <ImagePlus size={20} />
          </button>
          {messengerView && (
            <>
              <button
                type="button"
                className={`cwschat tool-button composer-tool${codeMode ? ' active' : ''}`}
                aria-label={codeMode ? 'Turn off code formatting' : 'Send as code'}
                aria-pressed={codeMode}
                title="Send as code"
                onClick={() => setCodeMode((enabled) => !enabled)}
              >
                <Code2 size={20} />
              </button>
              <button type="button" className="cwschat tool-button composer-tool composer-toolbar-emoji" aria-label={messengerStrings.chooseEmoji} title="Emoji" onClick={() => setShowEmoji((value) => !value)}>
                <Smile size={20} />
              </button>
            </>
          )}
          <span className="cwschat composer-spacer" />
          <button
            type="button"
            className="cwschat send-button"
            onClick={() => messengerView ? sendMessage(draft.trim() || '👍') : sendMessage()}
            aria-label={messengerView && !draft.trim() && !imageDraft ? 'Send a like' : imageDraft ? messengerStrings.sendImage : messengerStrings.sendMessage}
            title={messengerView && !draft.trim() && !imageDraft ? 'Send a like' : imageDraft ? messengerStrings.sendImage : messengerStrings.sendMessage}
            disabled={(!messengerView && !draft.trim() && !imageDraft) || draft.trim().length > 2000 || sendingIds.length > 0 || uploadingImage}
          >
            {messengerView && !draft.trim() && !imageDraft ? <ThumbsUp size={20} fill="currentColor" /> : <><span className="cwschat send-label">Send</span><SendHorizontal size={16} /></>}
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="cwschat image-file-input"
          onChange={handleImageFileChange}
          tabIndex={-1}
        />
      </div>
      {lightboxUrl && createPortal(
        <div
          className="msgr-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={messengerStrings.enlargedImage}
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxUrl('');
          }}
        >
          <button type="button" aria-label={messengerStrings.closeImage} onClick={() => setLightboxUrl('')}><X size={24} /></button>
          <img src={getCloudinaryDeliveryUrl(lightboxUrl, 1600)} alt={messengerStrings.enlargedImage} />
        </div>,
        document.body
      )}
    </div>
  );
}

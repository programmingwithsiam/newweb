import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
import { ArrowDown, ArrowLeft, Check, CheckCheck, ImagePlus, LoaderCircle, SendHorizontal, Smile, X } from 'lucide-react';
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

const PAGE_SIZE = 30;
const MAX_TEXTAREA_HEIGHT = 132;
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

function formatDayChip(value) {
  const date = parseTimestamp(value);
  if (!date) return messengerStrings.dateUnavailable;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const messageDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const days = Math.round((today - messageDay) / 86400000);
  if (days <= 0) return messengerStrings.today;
  if (days === 1) return messengerStrings.yesterday;
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: date.getFullYear() === now.getFullYear() ? undefined : 'numeric' }).format(date);
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
        <button type="button" className="cwschat image-open-button" onClick={() => onOpen(imageUrl)} aria-label={messengerStrings.openImage}>
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

export default function ChatWindow({ chat, chatId, currentUser, usersMap, onBack, compact = false, onClose, onMinimize }) {
  const { showToast } = useToast();
  const [latestMessages, setLatestMessages] = useState([]);
  const [olderMessages, setOlderMessages] = useState([]);
  const [optimisticMessages, setOptimisticMessages] = useState([]);
  const [deliveryStates, setDeliveryStates] = useState({});
  const [draft, setDraft] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
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
  }, [messages]);

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

  function sendMessage() {
    if (imageDraft) {
      sendImageMessage();
      return;
    }
    const text = draft.trim();
    if (!text || text.length > 2000 || !currentUser || !chatId || !peerUid) return;
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
  }

  async function loadOlderMessages() {
    if (!oldestCursor.current || historyLoading || !hasMore || !pageVisible) return;
    const container = scrollRef.current;
    if (container) scrollRestore.current = { height: container.scrollHeight, top: container.scrollTop };
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
        const message = messages.find((item) => item.id === messageId);
        const deletedFor = [...new Set([...(message?.deletedFor || []), currentUser.uid])];
        await update(messageRef, { deletedFor });
      }
      console.info(`[msgr] message update ok messages/${chatId}/${messageId}`);
      setMenuOpenId(null);
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
            <strong>{peerDisplayName}</strong>
            <span>{typing ? messengerStrings.typingNow : presenceLabel(peerUser)}</span>
          </div>
        </div>

        {compact && (
          <div className="cwschat compact-tools">
            <button type="button" className="cwschat tool-button" aria-label={messengerStrings.minimizeChat} onClick={onMinimize}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            <button type="button" className="cwschat tool-button" aria-label={messengerStrings.closeChat} onClick={onClose}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
        )}
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
              const showDateChip = !previous || formatDayChip(previous.createdAt) !== formatDayChip(message.createdAt);
              const isGrouped = previous?.senderId === message.senderId && !showDateChip;
              const showSenderAvatar = !isMine && (!next || next.senderId !== message.senderId);
              const isDeleted = Boolean(message.deletedForEveryone || message.deletedFor?.includes(currentUser?.uid));
              const isSeen = isMine && timestampValue(message.createdAt) > 0 &&
                lastReadAt >= timestampValue(message.createdAt);

              return (
                <div key={message.id} className={`cwschat message-group${isMine ? ' mine-group' : ' theirs-group'}${isGrouped ? ' grouped' : ''}${showDateChip ? ' date-start' : ''}`}>
                  {showDateChip && <div className="cwschat date-chip">{formatDayChip(message.createdAt)}</div>}
                  {!isMine && (
                    <span className={`cwschat message-avatar${showSenderAvatar ? '' : ' avatar-spacer'}`}>
                      {showSenderAvatar && (peerPhotoURL
                        ? <img src={peerPhotoURL} alt="" />
                        : peerDisplayName.slice(0, 1).toUpperCase())}
                    </span>
                  )}
                  <div className={`cwschat message-bubble${isMine ? ' mine' : ' theirs'}`}>
                    {message.replyTo && <div className="cwschat reply-preview">{messengerStrings.replyingTo} {message.replyTo.senderId === currentUser?.uid ? messengerStrings.yourself : messengerStrings.replyMessage}</div>}
                    {isDeleted ? (
                      <div className="cwschat deleted-message">{messengerStrings.deletedMessage}</div>
                    ) : (
                      <>
                        {(message.type === 'image' || message.imageData || message.imageUrl) ? (
                          <ChatImage message={message} onOpen={setLightboxUrl} />
                        ) : null}
                        {message.type !== 'image' && message.text && <p className="cwschat message-text">{renderMessageText(message.text)}</p>}
                      </>
                    )}
                    <div className="cwschat bubble-meta">
                      {message._delivery === 'failed' ? (
                        <span className="cwschat send-failed">
                          {messengerStrings.notSent}
                          <button type="button" onClick={() => transmitMessage(message, true)}>{messengerStrings.retry}</button>
                        </span>
                      ) : (
                        <>
                          <time>{formatBubbleTime(message.createdAt) || messengerStrings.dateUnavailable}</time>
                          {isMine && message.id === lastOwnMessageId && (message._delivery !== 'failed' && isSeen
                            ? <span className="cwschat delivery-status">{messengerStrings.seen} <CheckCheck size={14} /></span>
                            : message._delivery === 'sending' || sendingIds.includes(message.id)
                              ? <span className="cwschat delivery-status"><LoaderCircle size={13} className="msgr-spin" aria-hidden="true" />{messengerStrings.sending}…</span>
                              : <span className="cwschat delivery-status">{messengerStrings.sent} <Check size={14} /></span>)}
                        </>
                      )}
                    </div>
                    {isMine && !isDeleted && message._delivery !== 'failed' && (
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

        <button type="button" className="cwschat tool-button" aria-label={messengerStrings.chooseEmoji} onClick={() => setShowEmoji((value) => !value)}>
          <Smile size={20} />
        </button>
        <button
          type="button"
          className="cwschat tool-button"
          aria-label={messengerStrings.attachImage}
          title={messengerStrings.attachImage}
          onClick={() => fileInputRef.current?.click()}
          disabled={Boolean(imageDraft) || uploadingImage}
        >
          <ImagePlus size={20} />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="cwschat image-file-input"
          onChange={handleImageFileChange}
          tabIndex={-1}
        />
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
          className="cwschat message-input"
          placeholder={imageDraft ? messengerStrings.addCaption : messengerStrings.typeMessage}
          aria-label={messengerStrings.messageLabel}
          rows={1}
          maxLength={2000}
        />
        <button
          type="button"
          className="cwschat send-button"
          onClick={sendMessage}
          aria-label={imageDraft ? messengerStrings.sendImage : messengerStrings.sendMessage}
          title={imageDraft ? messengerStrings.sendImage : messengerStrings.sendMessage}
          disabled={(!draft.trim() && !imageDraft) || draft.trim().length > 2000 || sendingIds.length > 0 || uploadingImage}
        >
          <SendHorizontal size={19} />
        </button>
      </div>
      {lightboxUrl && (
        <div
          className="msgr-image-lightbox"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxUrl('');
          }}
        >
          <button type="button" aria-label={messengerStrings.closeImage} onClick={() => setLightboxUrl('')}><X size={24} /></button>
          <img src={getCloudinaryDeliveryUrl(lightboxUrl, 1600)} alt={messengerStrings.enlargedImage} />
        </div>
      )}
    </div>
  );
}

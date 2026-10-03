import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  endAt,
  get,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useAuth } from './AuthContext';
import { db } from '../firebase/config';
import {
  normalizeChatMessage,
  normalizeConversation,
  normalizeDisplayName,
  normalizeTimestamp,
} from '../utils/chatService';

const ChatsContext = createContext(null);

function usePageVisibility() {
  const [visible, setVisible] = useState(document.visibilityState === 'visible');

  useEffect(() => {
    const updateVisibility = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return visible;
}

export function ChatsProvider({ children }) {
  const { user, loading: authLoading } = useAuth();
  const pageVisible = usePageVisibility();
  const [retryVersion, setRetryVersion] = useState(0);
  const [state, setState] = useState({
    uid: null,
    chats: [],
    profiles: {},
    lastMessages: {},
    loading: true,
    error: null,
    profileError: null,
  });

  useEffect(() => {
    if (authLoading) return undefined;
    if (!user?.uid) {
      setState({
        uid: null,
        chats: [],
        profiles: {},
        lastMessages: {},
        loading: false,
        error: null,
        profileError: null,
      });
      return undefined;
    }
    if (!pageVisible) {
      setState((current) => current.uid === user.uid
        ? { ...current, loading: false }
        : { uid: user.uid, chats: [], profiles: {}, lastMessages: {}, loading: false, error: null, profileError: null });
      return undefined;
    }

    setState((current) => ({
      uid: user.uid,
      chats: current.uid === user.uid ? current.chats : [],
      profiles: current.uid === user.uid ? current.profiles : {},
      lastMessages: current.uid === user.uid ? current.lastMessages : {},
      loading: true,
      error: null,
      profileError: current.uid === user.uid ? current.profileError : null,
    }));

    const userChatsQuery = query(
      ref(db, `userConversations/${user.uid}`),
      orderByChild('lastMessageAt'),
      limitToLast(30)
    );
    const userConversationsPath = `userConversations/${user.uid}`;
    console.info(`[msgr] listen attach ${userConversationsPath} orderByChild(lastMessageAt) limitToLast(30)`);
    const unsubscribe = onValue(userChatsQuery, (snapshot) => {
      console.info(`[msgr] listen value ${userConversationsPath}`);
      const chats = Object.entries(snapshot.val() || {})
        .map(([id, item]) => normalizeConversation(id, item))
        .sort((first, second) => normalizeTimestamp(second.lastMessageAt) - normalizeTimestamp(first.lastMessageAt))
        .slice(0, 30);
      setState((current) => ({
        ...current,
        uid: user.uid,
        chats,
        loading: false,
        error: null,
      }));
    }, (error) => {
      console.error(`[msgr] listen FAILED ${userConversationsPath} ${error?.code || 'unknown'}`, error?.message || String(error));
      setState((current) => ({
        ...current,
        uid: user.uid,
        loading: false,
        error: { code: 'permission-denied' },
      }));
    });
    return () => {
      unsubscribe();
      console.info(`[msgr] listen detach ${userConversationsPath}`);
    };
  }, [authLoading, pageVisible, retryVersion, user?.uid]);

  const chats = state.uid === user?.uid ? state.chats : [];
  const lastMessages = state.uid === user?.uid ? state.lastMessages : {};
  const participantKey = useMemo(() => [...new Set(
    chats.flatMap((chat) => chat.members || []).filter((uid) => uid && uid !== user?.uid)
  )].slice(0, 30).join('|'), [chats, user?.uid]);

  useEffect(() => {
    if (authLoading || !user?.uid || !pageVisible || !participantKey) {
      setState((current) => current.uid === user?.uid
        ? { ...current, profiles: {}, profileError: null }
        : current);
      return undefined;
    }

    let active = true;
    const participantIds = participantKey.split('|');
    Promise.all(participantIds.map(async (uid) => {
      const [profileSnapshot, presenceSnapshot] = await Promise.all([
        get(ref(db, `users/${uid}`)).catch((error) => {
          console.error(`[msgr] profile read FAILED users/${uid} ${error?.code || 'unknown'}`, error?.message || String(error));
          return null;
        }),
        get(ref(db, `presence/${uid}`)).catch((error) => {
          console.warn(`[msgr] presence read FAILED presence/${uid} ${error?.code || 'unknown'}`, error?.message || String(error));
          return null;
        }),
      ]);
      const profile = profileSnapshot?.val() || {};
      const presence = presenceSnapshot?.val() || {};
      return [uid, {
        uid,
        displayName: normalizeDisplayName(profile.fullName, profile.name, profile.displayName, profile.username),
        photoURL: profile.photoURL || profile.profilePicture || '',
        username: profile.username || '',
        online: Boolean(presence.online || presence.state === 'online'),
        lastSeen: presence.lastSeen || presence.lastActive || presence.lastChanged || null,
      }];
    })).then((entries) => {
      if (!active) return;
      setState((current) => ({
        ...current,
        uid: user.uid,
        profiles: Object.fromEntries(entries),
        profileError: null,
      }));
    }).catch((error) => {
      console.error('Chat participant profile load failed:', {
        code: error?.code || 'unknown',
        message: error?.message || String(error),
      });
      if (!active) return;
      setState((current) => ({
        ...current,
        profileError: { code: error?.code || 'unknown' },
      }));
    });
    return () => {
      active = false;
    };
  }, [authLoading, pageVisible, participantKey, retryVersion, user?.uid]);

  const lastMessageRequests = useRef(new Set());
  useEffect(() => {
    if (authLoading || !user?.uid || !pageVisible) return undefined;
    const missingPreviews = chats.filter((chat) =>
      !chat.lastMessage && !Object.prototype.hasOwnProperty.call(lastMessages, chat.id) &&
      !lastMessageRequests.current.has(chat.id)
    );
    missingPreviews.forEach((chat) => {
      lastMessageRequests.current.add(chat.id);
      const messagesPath = `messages/${chat.id}`;
      const readFallbackPreview = () => Promise.all([
          get(query(ref(db, messagesPath), orderByChild('createdAtOrder'), limitToLast(1))),
          get(query(ref(db, messagesPath), orderByChild('createdAt'), limitToLast(1))),
        ]).then((snapshots) => snapshots.flatMap((snapshot) => {
          const last = [];
          snapshot.forEach((item) => last.push(normalizeChatMessage(item.key, item.val())));
          return last;
        }).sort((first, second) =>
          normalizeTimestamp(first.createdAt) - normalizeTimestamp(second.createdAt)
        ).at(-1) || null);
      const readLastMessage = chat.lastMessageId
        ? get(ref(db, `${messagesPath}/${chat.lastMessageId}`)).then((snapshot) => (
          snapshot.exists()
            ? normalizeChatMessage(snapshot.key, snapshot.val())
            : readFallbackPreview()
        ))
        : readFallbackPreview();

      readLastMessage.then((message) => {
        setState((current) => {
          if (current.uid !== user.uid) return current;
          return {
            ...current,
            lastMessages: {
              ...current.lastMessages,
              [chat.id]: message ? {
                loaded: true,
                text: message.type === 'image' || message.imageUrl || message.imageData
                  ? (message.caption ? `📷 ${message.caption}` : '📷 Photo')
                  : (message.text || ''),
                senderId: message.senderId || '',
                senderName: message.senderName || '',
                senderEmail: message.senderEmail || '',
                senderPhotoURL: message.senderPhotoURL || '',
                createdAt: normalizeTimestamp(message.createdAt),
              } : { loaded: true, text: '' },
            },
          };
        });
      }).catch((error) => {
        lastMessageRequests.current.delete(chat.id);
        console.error(`[msgr] preview read FAILED ${messagesPath} ${error?.code || 'unknown'}`, error?.message || String(error));
      });
    });
    return undefined;
  }, [authLoading, chats, lastMessages, pageVisible, user?.uid]);

  const enrichedChats = useMemo(() => chats.map((chat) => {
    if (chat.lastMessage) return chat;
    const cached = lastMessages[chat.id];
    if (!cached?.loaded) return { ...chat, lastMessageLoading: true };
    return {
      ...chat,
      lastMessage: cached.text,
      lastMessageAt: chat.lastMessageAt || cached.createdAt,
      lastMessageSenderUid: chat.lastMessageSenderUid || cached.senderId,
      lastMessageSenderName: chat.lastMessageSenderName || cached.senderName,
      lastMessageSenderPhotoURL: chat.lastMessageSenderPhotoURL || cached.senderPhotoURL,
      lastMessageSenderEmail: cached.senderEmail,
    };
  }), [chats, lastMessages]);

  const retry = useCallback(() => setRetryVersion((version) => version + 1), []);
  const profiles = useMemo(() => {
    const next = state.uid === user?.uid ? { ...state.profiles } : {};
    enrichedChats.forEach((chat) => {
      const peerUid = chat.members.find((member) => member !== user?.uid);
      if (!peerUid) return;
      const current = next[peerUid] || { uid: peerUid };
      const embedded = chat.memberProfiles?.[peerUid] || {};
      const latestSenderName = chat.lastMessageSenderUid === peerUid
        ? chat.lastMessageSenderName
        : '';
      const latestSenderPhoto = chat.lastMessageSenderUid === peerUid
        ? chat.lastMessageSenderPhotoURL
        : '';
      const latestSenderEmail = chat.lastMessageSenderUid === peerUid
        ? chat.lastMessageSenderEmail
        : '';
      next[peerUid] = {
        ...current,
        displayName: normalizeDisplayName(
          current.displayName,
          current.fullName,
          embedded.displayName,
          embedded.fullName,
          embedded.name,
          embedded.username,
          latestSenderName,
          latestSenderEmail
        ),
        photoURL: current.photoURL || embedded.photoURL || embedded.profilePicture || latestSenderPhoto || '',
      };
    });
    return next;
  }, [enrichedChats, lastMessages, state.profiles, state.uid, user?.uid]);
  const selfChats = useMemo(() => chats.filter((chat) => {
    const members = [...new Set(chat.members || [])];
    return members.length === 1 && members[0] === user?.uid;
  }), [chats, user?.uid]);
  useEffect(() => {
    selfChats.forEach((chat) => console.warn(`[msgr] existing self-chat retained ${chat.id}`));
  }, [selfChats]);
  const value = useMemo(() => ({
    chats: enrichedChats,
    profiles,
    selfChats,
    loading: authLoading || Boolean(user?.uid && state.uid !== user.uid) ||
      (state.uid === user?.uid && state.loading),
    error: state.uid === user?.uid ? state.error : null,
    profileError: state.uid === user?.uid ? state.profileError : null,
    retry,
  }), [authLoading, enrichedChats, profiles, retry, selfChats, state, user?.uid]);

  return <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>;
}

export function useChats() {
  const context = useContext(ChatsContext);
  if (!context) throw new Error('useChats must be used within a ChatsProvider.');
  return context;
}

import {
  get,
  ref,
  runTransaction,
  serverTimestamp,
  set,
  update,
} from 'firebase/database';
import { db } from '../firebase/config';
import { CLOUDINARY_CONFIG } from '../config/cloudinary';

export const MAX_CHAT_MESSAGE_LENGTH = 2000;

export function normalizeMembers(members) {
  if (Array.isArray(members)) return members;
  if (members && typeof members === 'object') {
    return Object.entries(members).filter(([, active]) => Boolean(active)).map(([uid]) => uid);
  }
  return [];
}

export function normalizeTimestamp(value) {
  if (value == null || value === '') return null;
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value > 0 && value < 100_000_000_000 ? value * 1000 : value;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const numeric = Number(trimmed);
    if (Number.isFinite(numeric)) return normalizeTimestamp(numeric);
    const parsed = Date.parse(trimmed);
    return Number.isFinite(parsed) ? parsed : null;
  }
  if (value instanceof Date) return value.getTime();
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.seconds === 'number') {
    return value.seconds * 1000 + Math.floor((value.nanoseconds || 0) / 1_000_000);
  }
  return null;
}

export function normalizeDisplayName(...values) {
  for (const value of values) {
    if (typeof value !== 'string') continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    const withoutEmailDomain = trimmed.includes('@') ? trimmed.split('@')[0] : trimmed;
    if (withoutEmailDomain) return withoutEmailDomain;
  }
  return '';
}

const PUSH_ID_ALPHABET = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

function timestampFromPushKey(key) {
  if (typeof key !== 'string' || key.length < 8) return null;
  let timestamp = 0;
  for (const character of key.slice(0, 8)) {
    const digit = PUSH_ID_ALPHABET.indexOf(character);
    if (digit < 0) return null;
    timestamp = timestamp * 64 + digit;
  }
  return Number.isSafeInteger(timestamp) && timestamp > 0 ? timestamp : null;
}

export function normalizeChatMessage(id, value = {}) {
  const createdAt = normalizeTimestamp(
    value.createdAt ?? value.timestamp ?? value.sentAt ?? value.created_at
  ) || timestampFromPushKey(id);
  return {
    ...value,
    id,
    createdAt,
    _timestampMissing: !createdAt,
  };
}

export function normalizeConversation(id, value = {}) {
  const memberValues = value.members && !Array.isArray(value.members) && typeof value.members === 'object'
    ? value.members
    : {};
  const memberProfiles = Object.fromEntries(
    Object.entries(memberValues).filter(([, member]) => member && typeof member === 'object')
  );
  return {
    ...value,
    id,
    members: normalizeMembers(value.members),
    memberProfiles: value.memberProfiles || memberProfiles,
    unread: value.unread || value.unreadByUid || {},
    lastMessageAt: normalizeTimestamp(value.lastMessageAt),
    readAt: Object.fromEntries(
      Object.entries(value.readAt || {}).map(([uid, timestamp]) => [uid, normalizeTimestamp(timestamp)])
    ),
  };
}

function logWriteSuccess(path) {
  console.info(`[msgr] send ok ${path}`);
}

function logWriteFailure(path, error, warning = false) {
  const log = warning ? console.warn : console.error;
  log(`[msgr] send FAILED ${path} ${error?.code || 'unknown'}`, error?.message || String(error));
}

async function writeWithLog(path, operation) {
  const paths = Array.isArray(path) ? path : [path];
  try {
    await operation;
    paths.forEach(logWriteSuccess);
  } catch (error) {
    paths.forEach((item) => logWriteFailure(item, error));
    throw error;
  }
}

function summaryFor(conversation, uid) {
  return {
    members: Object.fromEntries(conversation.members.map((member) => [member, true])),
    lastMessage: conversation.lastMessage || '',
    lastMessageAt: conversation.lastMessageAt || serverTimestamp(),
    lastMessageOrder: conversation.lastMessageAt || serverTimestamp(),
    unreadCount: Number(conversation.unread?.[uid] || 0),
    unreadByUid: conversation.unread || {},
    lastMessageId: conversation.lastMessageId || '',
    lastMessageSenderUid: conversation.lastMessageSenderUid || '',
    lastMessageSenderName: conversation.lastMessageSenderName || '',
    lastMessageSenderPhotoURL: conversation.lastMessageSenderPhotoURL || '',
  };
}

function isDirectConversation(conversation, uidA, uidB) {
  const members = normalizeMembers(conversation?.members);
  return members.length === 2 && members.includes(uidA) && members.includes(uidB);
}

export async function findOrCreateDirectChat(uid, peerUid, knownChats = []) {
  if (!uid || !peerUid || uid === peerUid) throw new Error('INVALID_CHAT_TARGET');

  const knownChat = knownChats.find((chat) => isDirectConversation(chat, uid, peerUid));
  if (knownChat) return knownChat;

  const chatId = [uid, peerUid].sort().join('_');
  const conversationRef = ref(db, `conversations/${chatId}`);
  const snapshot = await get(conversationRef);
  let conversation;

  if (snapshot.exists()) {
    conversation = normalizeConversation(chatId, snapshot.val());
    if (!isDirectConversation(conversation, uid, peerUid)) throw new Error('CHAT_ACCESS_DENIED');
  } else {
    const members = [uid, peerUid];
    conversation = {
      id: chatId,
      type: 'private',
      members,
      lastMessage: '',
      lastMessageAt: null,
      lastMessageOrder: null,
      unread: { [uid]: 0, [peerUid]: 0 },
      createdAt: null,
    };
    await writeWithLog(`conversations/${chatId}`, set(conversationRef, {
      type: 'private',
      members: { [uid]: true, [peerUid]: true },
      lastMessage: '',
      lastMessageAt: serverTimestamp(),
      lastMessageOrder: serverTimestamp(),
      unreadByUid: { [uid]: 0, [peerUid]: 0 },
      createdAt: serverTimestamp(),
    }));
  }

  const summaries = {};
  conversation.members.forEach((member) => {
    const basePath = `userConversations/${member}/${chatId}`;
    const summary = summaryFor(conversation, member);
    Object.entries(summary).forEach(([field, value]) => {
      summaries[`${basePath}/${field}`] = value;
    });
  });
  await writeWithLog(Object.keys(summaries), update(ref(db), summaries));
  return conversation;
}

export async function sendChatMessage({
  chatId,
  currentUser,
  peerUid,
  messageId,
  text,
  image = null,
  replyTo = null,
  senderName = '',
  senderPhotoURL = '',
  retry = false,
}) {
  const normalizedText = String(text || '').trim();
  const caption = String(image?.caption || '').trim();
  if (!normalizedText && !image) throw new Error('EMPTY_MESSAGE');
  if (normalizedText.length > MAX_CHAT_MESSAGE_LENGTH || caption.length > MAX_CHAT_MESSAGE_LENGTH) {
    throw new Error('MESSAGE_TOO_LONG');
  }
  if (image && (!image.imageUrl?.startsWith(`https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/`) ||
    !image.width || !image.height)) throw new Error('INVALID_IMAGE');

  const expectedChatId = [currentUser.uid, peerUid].sort().join('_');
  const conversationRef = ref(db, `conversations/${chatId}`);
  let conversation;
  try {
    const snapshot = await get(conversationRef);
    if (snapshot.exists()) {
      conversation = normalizeConversation(chatId, snapshot.val());
    }
  } catch (error) {
    const code = String(error?.code || '').toLowerCase().replaceAll('_', '-');
    if (code !== 'permission-denied' || chatId !== expectedChatId) throw error;
  }

  if (!conversation) {
    if (chatId !== expectedChatId) throw new Error('CHAT_ACCESS_DENIED');
    const members = [currentUser.uid, peerUid];
    conversation = {
      id: chatId,
      type: 'private',
      members,
      lastMessage: '',
      lastMessageAt: null,
      lastMessageOrder: null,
      unread: { [currentUser.uid]: 0, [peerUid]: 0 },
      createdAt: null,
    };
    await writeWithLog(`conversations/${chatId}`, set(conversationRef, {
      type: 'private',
      members: { [currentUser.uid]: true, [peerUid]: true },
      lastMessage: '',
      lastMessageAt: serverTimestamp(),
      lastMessageOrder: serverTimestamp(),
      unreadByUid: conversation.unread,
      createdAt: serverTimestamp(),
    }));
  }
  if (!conversation.members.includes(currentUser.uid) || !conversation.members.includes(peerUid)) {
    throw new Error('CHAT_ACCESS_DENIED');
  }

  const message = image
    ? {
        senderId: currentUser.uid,
        senderName,
        senderPhotoURL,
        type: 'image',
        imageUrl: image.imageUrl,
        width: image.width,
        height: image.height,
        caption,
        createdAt: serverTimestamp(),
        createdAtOrder: serverTimestamp(),
        status: 'sent',
        replyTo,
      }
    : {
        senderId: currentUser.uid,
        senderName,
        senderPhotoURL,
        type: 'text',
        text: normalizedText,
        createdAt: serverTimestamp(),
        createdAtOrder: serverTimestamp(),
        status: 'sent',
        replyTo,
      };
  const messagePath = `messages/${chatId}/${messageId}`;
  let messageAlreadyStored = false;
  if (retry) {
    let storedSnapshot;
    try {
      storedSnapshot = await get(ref(db, messagePath));
    } catch (error) {
      logWriteFailure(messagePath, error);
      throw error;
    }
    if (storedSnapshot.exists()) {
      const stored = storedSnapshot.val() || {};
      const matches = stored.senderId === currentUser.uid &&
        (image
          ? stored.type === 'image' && stored.imageUrl === image.imageUrl &&
            String(stored.caption || '') === caption
          : stored.type !== 'image' && String(stored.text || '') === normalizedText);
      if (!matches) throw new Error('MESSAGE_ID_CONFLICT');
      messageAlreadyStored = true;
      console.info(`[msgr] send ok ${messagePath} already-stored`);
    }
  }
  const lastMessage = image ? (caption ? `📷 ${caption}` : '📷 Photo') : normalizedText;
  const primaryUpdates = {
    [`conversations/${chatId}/lastMessage`]: lastMessage,
    [`conversations/${chatId}/lastMessageAt`]: serverTimestamp(),
    [`conversations/${chatId}/lastMessageOrder`]: serverTimestamp(),
    [`conversations/${chatId}/lastMessageId`]: messageId,
    [`conversations/${chatId}/lastMessageSenderUid`]: currentUser.uid,
    [`conversations/${chatId}/lastMessageSenderName`]: senderName,
    [`conversations/${chatId}/lastMessageSenderPhotoURL`]: senderPhotoURL,
  };
  if (!messageAlreadyStored) primaryUpdates[messagePath] = message;
  const conversationSummaryPaths = [];
  conversation.members.forEach((member) => {
    const basePath = `userConversations/${member}/${chatId}`;
    conversationSummaryPaths.push(basePath);
    primaryUpdates[`${basePath}/members`] = Object.fromEntries(
      conversation.members.map((participant) => [participant, true])
    );
    primaryUpdates[`${basePath}/lastMessage`] = lastMessage;
    primaryUpdates[`${basePath}/lastMessageAt`] = serverTimestamp();
    primaryUpdates[`${basePath}/lastMessageOrder`] = serverTimestamp();
    primaryUpdates[`${basePath}/lastMessageId`] = messageId;
    primaryUpdates[`${basePath}/lastMessageSenderUid`] = currentUser.uid;
    primaryUpdates[`${basePath}/lastMessageSenderName`] = senderName;
    primaryUpdates[`${basePath}/lastMessageSenderPhotoURL`] = senderPhotoURL;
  });

  await writeWithLog(Object.keys(primaryUpdates), update(ref(db), primaryUpdates));

  const unreadRef = ref(db, `conversations/${chatId}/unreadByUid`);
  void runTransaction(unreadRef, (currentUnread) => {
    const unread = currentUnread && typeof currentUnread === 'object' ? currentUnread : {};
    if (unread._lastProcessedMessageId === messageId) return;
    return {
      ...unread,
      [currentUser.uid]: 0,
      [peerUid]: Number(unread[peerUid] || 0) + 1,
      _lastProcessedMessageId: messageId,
    };
  }).then(async (result) => {
    if (!result.committed && result.snapshot.val()?._lastProcessedMessageId !== messageId) {
      throw new Error('UNREAD_TRANSACTION_NOT_COMMITTED');
    }
    logWriteSuccess(`conversations/${chatId}/unreadByUid`);
    const unread = result.snapshot.val() || {};
    const unreadUpdates = {};
    conversation.members.forEach((member) => {
      const basePath = `userConversations/${member}/${chatId}`;
      unreadUpdates[`${basePath}/unreadByUid`] = unread;
      unreadUpdates[`${basePath}/unreadCount`] = Number(unread[member] || 0);
    });
    await writeWithLog(Object.keys(unreadUpdates), update(ref(db), unreadUpdates));
  }).catch((error) => {
    logWriteFailure(`conversations/${chatId}/unreadByUid`, error, true);
  });

  return { messageId, summaryUpdated: true };
}

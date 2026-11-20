import {
  CLOUDINARY_MAX_FILE_SIZE,
  prepareCloudinaryImage,
  uploadCloudinaryImage,
} from './config/cloudinary.js';

function membersOf(value) {
  if (Array.isArray(value)) return value;
  return Object.entries(value || {}).filter(([, active]) => Boolean(active)).map(([uid]) => uid);
}

function timestampOf(value) {
  const timestamp = Number(value || 0);
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function mapPerson(profile) {
  const uid = String(profile.uid || profile.id || '');
  const name = String(profile.displayName || profile.name || profile.fullName || 'Community member');
  const lastActive = profile.lastSeen?.toMillis?.() || timestampOf(profile.lastSeen || profile.lastActive);
  return { id: uid, name, online: Boolean(profile.online), lastActive };
}

function imageBlob(dataUrl) {
  return fetch(dataUrl).then((response) => response.blob()).then((blob) => {
    if (blob.size > CLOUDINARY_MAX_FILE_SIZE) throw new Error('Images must be 5 MB or smaller.');
    return new File([blob], `message-${Date.now()}.${blob.type.split('/')[1] || 'jpg'}`, {
      type: blob.type || 'image/jpeg',
    });
  });
}

export async function createCommunityMessengerAdapter(app, { loadPeople, resolvePerson, onError }) {
  const {
    get,
    getDatabase,
    limitToLast,
    onValue,
    orderByChild,
    push,
    query,
    ref,
    remove,
    serverTimestamp,
    set,
    update,
  } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js');
  const rtdb = getDatabase(app);
  const subscribers = new Set();
  const conversations = new Map();
  const messageUnsubscribers = new Map();
  const reactionUnsubscribers = new Map();
  const hiddenUnsubscribers = new Map();
  const typingUnsubscribers = new Map();
  const metadataUnsubscribers = new Map();
  const lastSentAt = new Map();
  const sendQueues = new Map();
  const typingTimers = new Map();
  const blockedUids = new Set();
  let user = null;
  let profile = null;
  let users = {};
  let conversationsUnsubscribe = null;
  let blockedUnsubscribe = null;

  function emit() {
    const snapshot = {
      me: user ? users[user.uid] : { id: 'guest', name: 'You' },
      users,
      convs: [...conversations.values()],
      blockedUsers: [...blockedUids],
    };
    subscribers.forEach((subscriber) => subscriber(snapshot));
  }

  async function syncBlockedConversations() {
    if (!user) return;
    const updates = {};
    conversations.forEach((conversation) => {
      const next = { ...(conversation.blockedByUid || {}) };
      conversation.members.forEach((targetUid) => {
        if (targetUid === user.uid) return;
        const existing = { ...(next[targetUid] || {}) };
        const shouldBlock = blockedUids.has(targetUid);
        const isBlocked = Boolean(existing[user.uid]);
        if (shouldBlock === isBlocked) return;
        updates[`conversations/${conversation.id}/blockedByUid/${targetUid}/${user.uid}`] =
          shouldBlock ? true : null;
        if (shouldBlock) existing[user.uid] = true;
        else delete existing[user.uid];
        if (Object.keys(existing).length) next[targetUid] = existing;
        else delete next[targetUid];
      });
      conversation.blockedByUid = next;
    });
    if (Object.keys(updates).length) await update(ref(rtdb), updates);
  }

  function stopConversationListeners() {
    [
      messageUnsubscribers,
      reactionUnsubscribers,
      hiddenUnsubscribers,
      typingUnsubscribers,
      metadataUnsubscribers,
    ].forEach((collection) => {
      collection.forEach((unsubscribe) => unsubscribe());
      collection.clear();
    });
    typingTimers.forEach((timer) => window.clearTimeout(timer));
    typingTimers.clear();
    conversationsUnsubscribe?.();
    conversationsUnsubscribe = null;
    blockedUnsubscribe?.();
    blockedUnsubscribe = null;
    blockedUids.clear();
  }

  function memberSummary(conversation, memberUid) {
    const unreadByUid = conversation.unreadByUid || {};
    return {
      members: Object.fromEntries(conversation.members.map((uid) => [uid, true])),
      lastMessage: conversation.lastMessage || '',
      lastMessageAt: conversation.lastMessageAt || serverTimestamp(),
      lastMessageOrder: conversation.lastMessageAt || serverTimestamp(),
      unreadCount: Number(unreadByUid[memberUid] || 0),
      unreadByUid,
      lastMessageId: conversation.lastMessageId || '',
      lastMessageSenderUid: conversation.lastMessageSenderUid || '',
      lastMessageSenderName: conversation.lastMessageSenderName || '',
      lastMessageSenderPhotoURL: conversation.lastMessageSenderPhotoURL || '',
    };
  }

  function ensureConversation(id, summary = {}) {
    let conversation = conversations.get(id);
    if (!conversation) {
      conversation = {
        id,
        type: 'dm',
        rawType: summary.type || '',
        members: [],
        unread: 0,
        unreadByUid: {},
        typing: [],
        msgs: [],
        created: timestampOf(summary.lastMessageAt),
        reactions: {},
        hidden: {},
        rawMessages: {},
      };
      conversations.set(id, conversation);
    }
    const members = membersOf(summary.members);
    if (members.length) conversation.members = members;
    conversation.unreadByUid = summary.unreadByUid || conversation.unreadByUid || {};
    conversation.peerUid = summary.peerUid || conversation.peerUid || '';
    conversation.rawType = summary.type || conversation.rawType || '';
    conversation.peerUidByUid = summary.peerUidByUid || conversation.peerUidByUid || {};
    conversation.blockedByUid = summary.blockedByUid || conversation.blockedByUid || {};
    conversation.unread = Number(
      conversation.unreadByUid[user?.uid] ?? summary.unreadCount ?? conversation.unread ?? 0,
    );
    conversation.lastMessage = String(summary.lastMessage || conversation.lastMessage || '');
    conversation.lastMessageAt = timestampOf(summary.lastMessageAt) || conversation.lastMessageAt || 0;
    conversation.lastMessageSenderUid = String(
      summary.lastMessageSenderUid || conversation.lastMessageSenderUid || '',
    );
    conversation.lastMessageId = summary.lastMessageId || conversation.lastMessageId || '';
    return conversation;
  }

  function mapMessages(conversation, messages) {
    const reactions = conversation.reactions || {};
    const hidden = conversation.hidden || {};
    return Object.entries(messages || {}).map(([id, value]) => {
      const rx = {};
      Object.entries(reactions[id] || {}).forEach(([uid, emoji]) => {
        if (typeof emoji === 'string') (rx[emoji] ||= []).push(uid);
      });
      return {
        id,
        from: String(value.senderId || ''),
        t: String(value.text || value.caption || ''),
        img: String(value.imageUrl || ''),
        ts: timestampOf(value.createdAt || value.createdAtOrder),
        seen: Boolean(value.seenBy && Object.keys(value.seenBy).some((uid) => uid !== value.senderId)),
        seenBy: Object.keys(value.seenBy || {}),
        replyTo: value.replyTo || null,
        edited: Boolean(value.edited),
        deleted: Boolean(value.deletedForEveryone),
        hiddenFor: hidden[id] ? [user.uid] : [],
        rx,
      };
    }).sort((first, second) => first.ts - second.ts);
  }

  function watchConversation(id, summary) {
    const conversation = ensureConversation(id, summary);
    if (!metadataUnsubscribers.has(id)) {
      metadataUnsubscribers.set(id, onValue(ref(rtdb, `conversations/${id}`), (snapshot) => {
        if (!snapshot.exists()) return;
        const data = snapshot.val() || {};
        conversation.rawType = String(data.type || '');
        conversation.type = data.type === 'group' || conversation.members.length > 2 ? 'group' : 'dm';
        conversation.name = String(data.name || '');
        conversation.admins = Object.keys(data.admins || {}).filter((uid) => data.admins[uid]);
        conversation.members = membersOf(data.members);
        conversation.peerUid = String(data.peerUid || '');
        conversation.peerUidByUid = data.peerUidByUid || {};
        conversation.blockedByUid = data.blockedByUid || {};
        conversation.unreadByUid = data.unreadByUid || conversation.unreadByUid;
        conversation.unread = Number(conversation.unreadByUid[user.uid] ?? conversation.unread ?? 0);
        conversation.lastMessage = String(data.lastMessage || '');
        conversation.lastMessageAt = timestampOf(data.lastMessageAt);
        conversation.lastMessageSenderUid = String(data.lastMessageSenderUid || '');
        conversation.lastMessageId = String(data.lastMessageId || '');
        emit();
        void syncBlockedConversations().catch(onError);
      }, onError));
    }
    if (!messageUnsubscribers.has(id)) {
      const messages = query(
        ref(rtdb, `messages/${id}`),
        orderByChild('createdAtOrder'),
        limitToLast(100),
      );
      messageUnsubscribers.set(id, onValue(messages, (snapshot) => {
        conversation.rawMessages = snapshot.val() || {};
        conversation.msgs = mapMessages(conversation, conversation.rawMessages);
        emit();
      }, onError));
    }
    if (!reactionUnsubscribers.has(id)) {
      reactionUnsubscribers.set(id, onValue(
        ref(rtdb, `messageReactions/${id}`),
        (snapshot) => {
          conversation.reactions = snapshot.val() || {};
          conversation.msgs = mapMessages(conversation, conversation.rawMessages);
          emit();
        },
        onError,
      ));
    }
    if (!hiddenUnsubscribers.has(id)) {
      hiddenUnsubscribers.set(id, onValue(
        ref(rtdb, `hiddenMessages/${user.uid}/${id}`),
        (snapshot) => {
          conversation.hidden = snapshot.val() || {};
          conversation.msgs = mapMessages(conversation, conversation.rawMessages);
          emit();
        },
        onError,
      ));
    }
    if (!typingUnsubscribers.has(id)) {
      typingUnsubscribers.set(id, onValue(
        ref(rtdb, `typing/${id}`),
        (snapshot) => {
          conversation.typing = Object.entries(snapshot.val() || {})
            .filter(([uid, value]) => uid !== user.uid && value?.isTyping)
            .map(([uid]) => uid);
          emit();
        },
        onError,
      ));
    }
  }

  function addConversation(id, data) {
    const members = membersOf(data.members);
    const conversation = ensureConversation(id, {
      ...data,
      members: data.members,
      unreadByUid: data.unreadByUid,
    });
    conversation.members = members;
    conversation.type = data.type === 'group' || members.length > 2 ? 'group' : 'dm';
    conversation.rawType = String(data.type || '');
    conversation.name = String(data.name || '');
    conversation.admins = Object.keys(data.admins || {}).filter((uid) => data.admins[uid]);
    conversation.unreadByUid = data.unreadByUid || {};
    watchConversation(id, data);
    emit();
    return conversation;
  }

  async function setUser(nextUser, nextProfile = null) {
    if (user?.uid !== nextUser?.uid) {
      stopConversationListeners();
      conversations.clear();
      users = {};
      lastSentAt.clear();
    }
    user = nextUser || null;
    profile = nextUser ? (nextProfile || profile) : null;
    if (!user) {
      stopConversationListeners();
      conversations.clear();
      users = {};
      emit();
      return;
    }
    const activeUid = user.uid;
    if (!blockedUnsubscribe) {
      blockedUnsubscribe = onValue(ref(rtdb, `blockedUsers/${activeUid}`), (snapshot) => {
        if (user?.uid !== activeUid) return;
        blockedUids.clear();
        Object.keys(snapshot.val() || {}).forEach((uid) => blockedUids.add(uid));
        emit();
        void syncBlockedConversations().catch(onError);
      }, onError);
    }
    const self = mapPerson({
      uid: user.uid,
      displayName: profile?.displayName || profile?.name || user.displayName,
      photoURL: profile?.photoURL || user.photoURL,
      online: true,
    });
    users = { ...users, [user.uid]: self };
    emit();
    try {
      const people = await loadPeople();
      if (user?.uid !== activeUid) return;
      people.forEach((person) => {
        const mapped = mapPerson(person);
        if (mapped.id && mapped.id !== user.uid) users[mapped.id] = mapped;
      });
      emit();
    } catch (error) {
      if (user?.uid === activeUid) onError(error);
    }
    if (user?.uid !== activeUid) return;
    if (!conversationsUnsubscribe) {
      const conversationQuery = query(
        ref(rtdb, `userConversations/${user.uid}`),
        orderByChild('lastMessageOrder'),
        limitToLast(30),
      );
      conversationsUnsubscribe = onValue(conversationQuery, (snapshot) => {
        const summaries = snapshot.val() || {};
        const activeIds = new Set(Object.keys(summaries));
        [...conversations.keys()].forEach((id) => {
          if (activeIds.has(id)) return;
          conversations.delete(id);
          [
            messageUnsubscribers,
            reactionUnsubscribers,
            hiddenUnsubscribers,
            typingUnsubscribers,
            metadataUnsubscribers,
          ].forEach((collection) => {
            collection.get(id)?.();
            collection.delete(id);
          });
        });
        Object.entries(summaries).forEach(([id, summary]) => {
          const conversation = ensureConversation(id, summary);
          conversation.msgs = conversation.msgs || [];
          watchConversation(id, summary);
        });
        emit();
      }, onError);
    }
  }

  async function resolveUser(name) {
    const normalized = String(name || '').trim().toLowerCase();
    const match = Object.values(users).find((person) => person.name.toLowerCase() === normalized);
    if (match) return match.id;
    const profile = await resolvePerson(name);
    const person = profile && mapPerson(profile);
    if (!person?.id) return null;
    users[person.id] = person;
    emit();
    return person.id;
  }

  async function createDirectConversation(peerUid) {
    const id = [user.uid, peerUid].sort().join('_');
    let snapshot;
    try {
      snapshot = await get(ref(rtdb, `conversations/${id}`));
    } catch {
      snapshot = null;
    }
    if (snapshot?.exists()) {
      const existing = snapshot.val();
      if (!membersOf(existing.members).includes(user.uid) ||
          !membersOf(existing.members).includes(peerUid)) {
        throw new Error('CHAT_ACCESS_DENIED');
      }
      const members = membersOf(existing.members);
      if ((existing.type && existing.type !== 'private') || members.length !== 2) throw new Error('CHAT_ACCESS_DENIED');
      if (existing.peerUid && existing.peerUid !== peerUid) throw new Error('CHAT_ACCESS_DENIED');
      if (existing.peerUidByUid?.[user.uid] && existing.peerUidByUid[user.uid] !== peerUid) {
        throw new Error('CHAT_ACCESS_DENIED');
      }
      if (!existing.peerUid) {
        await set(ref(rtdb, `conversations/${id}/peerUid`), peerUid);
        existing.peerUid = peerUid;
      }
      if (!existing.type) {
        await set(ref(rtdb, `conversations/${id}/type`), 'private');
        existing.type = 'private';
      }
      if (!existing.peerUidByUid?.[user.uid]) {
        await set(ref(rtdb, `conversations/${id}/peerUidByUid/${user.uid}`), peerUid);
        existing.peerUidByUid = { ...(existing.peerUidByUid || {}), [user.uid]: peerUid };
      }
      const updates = {};
      members.forEach((member) => {
        Object.entries(memberSummary({ ...existing, members }, member)).forEach(([field, value]) => {
          updates[`userConversations/${member}/${id}/${field}`] = value;
        });
      });
      await update(ref(rtdb), updates);
      addConversation(id, existing);
      return id;
    }
    const members = [user.uid, peerUid];
    const conversation = {
      type: 'private',
      members: Object.fromEntries(members.map((member) => [member, true])),
      peerUid,
      peerUidByUid: { [user.uid]: peerUid, [peerUid]: user.uid },
      lastMessage: '',
      lastMessageAt: serverTimestamp(),
      lastMessageOrder: serverTimestamp(),
      lastMessageSenderUid: '',
      lastMessageSenderName: '',
      lastMessageSenderPhotoURL: '',
      lastMessageId: '',
      unreadByUid: { [user.uid]: 0, [peerUid]: 0 },
      createdAt: serverTimestamp(),
    };
    try {
      await set(ref(rtdb, `conversations/${id}`), conversation);
    } catch (error) {
      const existing = await get(ref(rtdb, `conversations/${id}`)).catch(() => null);
      if (!existing?.exists() || !membersOf(existing.val().members).includes(user.uid)) throw error;
      addConversation(id, existing.val());
      return id;
    }
    const summary = memberSummary({
      ...conversation,
      members,
      unreadByUid: conversation.unreadByUid,
    }, user.uid);
    const updates = {};
    members.forEach((member) => {
      Object.entries(memberSummary({
        ...conversation,
        members,
        unreadByUid: conversation.unreadByUid,
      }, member)).forEach(([field, value]) => {
        updates[`userConversations/${member}/${id}/${field}`] = value;
      });
    });
    await update(ref(rtdb), updates);
    addConversation(id, { ...conversation, unreadByUid: conversation.unreadByUid });
    conversation.lastMessage = summary.lastMessage;
    return id;
  }

  async function sendMessage(chatId, payload = {}) {
    if (!user) throw new Error('Sign in to send messages.');
    const sender = user;
    const senderUid = sender.uid;
    const conversation = conversations.get(chatId);
    if (!conversation || !conversation.members.includes(senderUid)) throw new Error('CHAT_ACCESS_DENIED');
    if (conversation.type !== 'group') {
      const peerUid = conversation.members.find((member) => member !== senderUid);
      if (!peerUid || conversation.members.length !== 2) throw new Error('CHAT_ACCESS_DENIED');
      if (!conversation.peerUid) {
        await set(ref(rtdb, `conversations/${chatId}/peerUid`), peerUid);
        conversation.peerUid = peerUid;
      }
      if (!conversation.rawType) {
        await set(ref(rtdb, `conversations/${chatId}/type`), 'private');
        conversation.rawType = 'private';
      }
      if (conversation.rawType !== 'private') throw new Error('CHAT_ACCESS_DENIED');
      if (conversation.peerUid !== peerUid) throw new Error('CHAT_ACCESS_DENIED');
      if (conversation.peerUidByUid?.[senderUid] && conversation.peerUidByUid[senderUid] !== peerUid) {
        throw new Error('CHAT_ACCESS_DENIED');
      }
      if (!conversation.peerUidByUid?.[senderUid]) {
        await set(ref(rtdb, `conversations/${chatId}/peerUidByUid/${senderUid}`), peerUid);
        conversation.peerUidByUid = { ...(conversation.peerUidByUid || {}), [senderUid]: peerUid };
      }
    }
    const text = String(payload.t || '').trim();
    const imageData = String(payload.img || '');
    if (!text && !imageData) throw new Error('Write a message or attach a photo.');
    if (text.length > 2000) throw new Error('Messages must be 2,000 characters or fewer.');
    const displayName = users[senderUid]?.name || sender.displayName || 'Community member';
    const photoURL = profile?.photoURL || sender.photoURL || '';
    const lastSent = Math.max(lastSentAt.get(senderUid) || 0, conversation.lastMessageSenderUid === senderUid
      ? timestampOf(conversation.lastMessageAt)
      : 0);
    const delay = Math.max(0, 1000 - (Date.now() - lastSent));
    if (delay) await new Promise((resolve) => window.setTimeout(resolve, delay));
    if (user?.uid !== senderUid) throw new Error('Your account changed before the message was sent.');

    let image = null;
    if (imageData) {
      const sourceFile = await imageBlob(imageData);
      const prepared = await prepareCloudinaryImage(sourceFile);
      const uploaded = await uploadCloudinaryImage(prepared.file);
      image = { imageUrl: uploaded.secureUrl, width: uploaded.width, height: uploaded.height };
    }
    if (user?.uid !== senderUid) throw new Error('Your account changed before the message was sent.');

    const messageRef = push(ref(rtdb, `messages/${chatId}`));
    const messageId = messageRef.key;
    await set(ref(rtdb, `messageSendRates/${senderUid}`), {
      lastSentAt: serverTimestamp(),
      messageId,
    });
    const senderMessage = image
      ? {
          senderId: senderUid,
          senderName: displayName,
          senderPhotoURL: photoURL,
          type: 'image',
          ...image,
          caption: text,
          createdAt: serverTimestamp(),
          createdAtOrder: serverTimestamp(),
          status: 'sent',
          replyTo: payload.replyTo || null,
          seenBy: { [senderUid]: true },
        }
      : {
          senderId: senderUid,
          senderName: displayName,
          senderPhotoURL: photoURL,
          type: 'text',
          text,
          createdAt: serverTimestamp(),
          createdAtOrder: serverTimestamp(),
          status: 'sent',
          replyTo: payload.replyTo || null,
          seenBy: { [senderUid]: true },
        };
    const lastMessage = image ? (text ? `📷 ${text}` : '📷 Photo') : text;
    const updates = {
      [`messages/${chatId}/${messageId}`]: senderMessage,
      [`conversations/${chatId}/lastMessage`]: lastMessage,
      [`conversations/${chatId}/lastMessageAt`]: serverTimestamp(),
      [`conversations/${chatId}/lastMessageOrder`]: serverTimestamp(),
      [`conversations/${chatId}/lastMessageId`]: messageId,
      [`conversations/${chatId}/lastMessageSenderUid`]: senderUid,
      [`conversations/${chatId}/lastMessageSenderName`]: displayName,
      [`conversations/${chatId}/lastMessageSenderPhotoURL`]: photoURL,
    };
    const unreadByUid = { ...(conversation.unreadByUid || {}) };
    conversation.members.forEach((member) => {
      const count = member === senderUid ? 0 : Number(unreadByUid[member] || 0) + 1;
      unreadByUid[member] = count;
      const base = `userConversations/${member}/${chatId}`;
      updates[`${base}/members`] = Object.fromEntries(conversation.members.map((uid) => [uid, true]));
      updates[`${base}/lastMessage`] = lastMessage;
      updates[`${base}/lastMessageAt`] = serverTimestamp();
      updates[`${base}/lastMessageOrder`] = serverTimestamp();
      updates[`${base}/lastMessageId`] = messageId;
      updates[`${base}/lastMessageSenderUid`] = senderUid;
      updates[`${base}/lastMessageSenderName`] = displayName;
      updates[`${base}/lastMessageSenderPhotoURL`] = photoURL;
      updates[`${base}/unreadByUid/${member}`] = count;
      updates[`${base}/unreadCount`] = count;
      updates[`conversations/${chatId}/unreadByUid/${member}`] = count;
    });
    await update(ref(rtdb), updates);
    lastSentAt.set(senderUid, Date.now());
    conversation.lastMessageAt = Date.now();
    conversation.lastMessageSenderUid = user.uid;
    conversation.lastMessageId = messageId;
    conversation.lastMessage = lastMessage;
    conversation.unreadByUid = unreadByUid;
    conversation.unread = 0;
    emit();
  }

  async function send(chatId, payload = {}) {
    const previous = sendQueues.get(chatId) || Promise.resolve();
    const current = previous.catch(() => {}).then(() => sendMessage(chatId, payload));
    sendQueues.set(chatId, current);
    try {
      await current;
    } finally {
      if (sendQueues.get(chatId) === current) sendQueues.delete(chatId);
    }
  }

  return {
    mode: 'live',
    subscribe(callback) {
      subscribers.add(callback);
      callback({ me: { id: 'guest', name: 'You' }, users, convs: [] });
      return () => subscribers.delete(callback);
    },
    setUser,
    setProfile(nextProfile) {
      profile = nextProfile || null;
      if (user) users[user.uid] = mapPerson({ ...profile, uid: user.uid, online: true });
      emit();
    },
    resolveUser,
    async openDM(peerUid) {
      if (!user) throw new Error('Sign in to message people.');
      if (!peerUid || peerUid === user.uid) throw new Error('Choose another Community member.');
      return createDirectConversation(peerUid);
    },
    isBlocked(uid) {
      return blockedUids.has(uid);
    },
    async toggleBlock(targetUid) {
      if (!user || !targetUid || targetUid === user.uid) throw new Error('Choose a valid Community member.');
      const blockRef = ref(rtdb, `blockedUsers/${user.uid}/${targetUid}`);
      if (blockedUids.has(targetUid)) {
        await remove(blockRef);
        blockedUids.delete(targetUid);
      } else {
        await set(blockRef, { createdAt: serverTimestamp() });
        blockedUids.add(targetUid);
      }
      await syncBlockedConversations();
      emit();
      return blockedUids.has(targetUid);
    },
    async report(chatId, messageId, reason = 'other') {
      if (!user) throw new Error('Sign in to report a message.');
      const conversation = conversations.get(chatId);
      const message = conversation?.msgs.find((item) => item.id === messageId);
      if (!message || message.from === user.uid) throw new Error('That message cannot be reported.');
      const reportRef = push(ref(rtdb, `chatReports/${user.uid}`));
      await set(reportRef, {
        reporterUid: user.uid,
        conversationId: chatId,
        messageId,
        targetUid: message.from,
        reason: ['spam', 'harassment', 'scam', 'other'].includes(reason) ? reason : 'other',
        createdAt: serverTimestamp(),
      });
    },
    send,
    async markRead(chatId) {
      if (!user) return;
      const readerUid = user.uid;
      const conversation = conversations.get(chatId);
      if (!conversation || !conversation.unread) return;
      const unreadBeforeUpdate = conversation.unread;
      conversation.unread = 0;
      conversation.unreadByUid[readerUid] = 0;
      emit();
      const updates = {
        [`conversations/${chatId}/unreadByUid/${readerUid}`]: 0,
        [`conversations/${chatId}/readAt/${readerUid}`]: serverTimestamp(),
        [`userConversations/${readerUid}/${chatId}/unreadByUid/${readerUid}`]: 0,
        [`userConversations/${readerUid}/${chatId}/unreadCount`]: 0,
        [`userConversations/${readerUid}/${chatId}/readAt/${readerUid}`]: serverTimestamp(),
      };
      conversation.msgs.forEach((message) => {
        if (message.from !== readerUid) {
          updates[`messages/${chatId}/${message.id}/seenBy/${readerUid}`] = true;
        }
      });
      try {
        await update(ref(rtdb), updates);
      } catch (error) {
        conversation.unread = unreadBeforeUpdate;
        conversation.unreadByUid[readerUid] = unreadBeforeUpdate;
        emit();
        throw error;
      }
    },
    setTyping(chatId, isTyping) {
      if (!user) return Promise.resolve();
      const key = `${chatId}:${user.uid}`;
      const typingRef = ref(rtdb, `typing/${chatId}/${user.uid}`);
      window.clearTimeout(typingTimers.get(key));
      if (!isTyping) {
        typingTimers.delete(key);
        return remove(typingRef);
      }
      typingTimers.set(key, window.setTimeout(() => {
        typingTimers.delete(key);
        void remove(typingRef).catch(onError);
      }, 8000));
      return set(typingRef, { isTyping: true, updatedAt: serverTimestamp() });
    },
    async edit(chatId, messageId, text) {
      if (!user || !String(text || '').trim() || String(text).length > 2000) {
        throw new Error('Messages must contain 1–2,000 characters.');
      }
      await update(ref(rtdb, `messages/${chatId}/${messageId}`), {
        text: String(text).trim(),
        edited: true,
      });
    },
    async remove(chatId, messageId, scope) {
      if (!user) throw new Error('Sign in to delete messages.');
      if (scope === 'all') {
        await update(ref(rtdb, `messages/${chatId}/${messageId}`), {
          deletedForEveryone: true,
          text: '',
          caption: '',
          imageUrl: null,
        });
      } else {
        await set(ref(rtdb, `hiddenMessages/${user.uid}/${chatId}/${messageId}`), true);
      }
    },
    async react(chatId, messageId, emoji) {
      if (!user) throw new Error('Sign in to react to messages.');
      const reactionRef = ref(rtdb, `messageReactions/${chatId}/${messageId}/${user.uid}`);
      const current = await get(reactionRef);
      await set(reactionRef, current.val() === emoji ? null : emoji);
    },
    async createGroup(name, userIds) {
      if (!user || !name.trim() || userIds.length < 2 || userIds.length > 49) {
        throw new Error('Choose a group name and 2–49 people.');
      }
      const conversationRef = push(ref(rtdb, 'conversations'));
      const id = conversationRef.key;
      const members = [...new Set([user.uid, ...userIds])];
      const memberMap = Object.fromEntries(members.map((uid) => [uid, true]));
      const unreadByUid = Object.fromEntries(members.map((uid) => [uid, 0]));
      const group = {
        type: 'group',
        name: name.trim().slice(0, 40),
        initialPeerUid: members.find((uid) => uid !== user.uid),
        members: memberMap,
        admins: { [user.uid]: true },
        lastMessage: '',
        lastMessageAt: serverTimestamp(),
        lastMessageOrder: serverTimestamp(),
        lastMessageSenderUid: '',
        lastMessageSenderName: '',
        lastMessageSenderPhotoURL: '',
        lastMessageId: '',
        unreadByUid,
        createdAt: serverTimestamp(),
      };
      await set(conversationRef, group);
      const updates = {};
      members.forEach((member) => {
        Object.entries(memberSummary({ ...group, members, unreadByUid }, member)).forEach(([field, value]) => {
          updates[`userConversations/${member}/${id}/${field}`] = value;
        });
      });
      await update(ref(rtdb), updates);
      addConversation(id, { ...group, unreadByUid });
      return id;
    },
    async addMembers(chatId, userIds) {
      if (!user) throw new Error('Sign in to manage this chat.');
      const snapshot = await get(ref(rtdb, `conversations/${chatId}`));
      if (!snapshot.exists()) throw new Error('Chat not found.');
      const data = snapshot.val();
      const existing = membersOf(data.members);
      if (data.type !== 'group' || data.admins?.[user.uid] !== true) throw new Error('Only group admins can add people.');
      const additions = [...new Set(userIds)].filter((uid) => !existing.includes(uid));
      const members = [...new Set([...existing, ...additions])];
      if (members.length > 50) throw new Error('Groups can have up to 50 members.');
      const unreadByUid = { ...(data.unreadByUid || {}) };
      const memberUpdates = {};
      additions.forEach((uid) => {
        memberUpdates[`conversations/${chatId}/members/${uid}`] = true;
        memberUpdates[`conversations/${chatId}/unreadByUid/${uid}`] = 0;
        unreadByUid[uid] = 0;
      });
      if (Object.keys(memberUpdates).length) await update(ref(rtdb), memberUpdates);
      const updates = {};
      members.forEach((member) => {
        Object.entries(memberSummary({ ...data, members, unreadByUid }, member)).forEach(([field, value]) => {
          updates[`userConversations/${member}/${chatId}/${field}`] = value;
        });
      });
      if (Object.keys(updates).length) await update(ref(rtdb), updates);
    },
    async leave(chatId) {
      if (!user) return;
      const summaryRef = ref(rtdb, `userConversations/${user.uid}/${chatId}`);
      const summary = await get(summaryRef);
      if (summary.exists()) {
        const updates = {};
        Object.keys(summary.val()).forEach((field) => {
          updates[`userConversations/${user.uid}/${chatId}/${field}`] = null;
        });
        await update(ref(rtdb), updates);
      }
      await remove(ref(rtdb, `conversations/${chatId}/members/${user.uid}`));
      conversations.delete(chatId);
      emit();
    },
  };
}

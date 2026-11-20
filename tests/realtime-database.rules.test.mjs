import { readFile } from 'node:fs/promises';
import { after, before, beforeEach, test } from 'node:test';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import { get, ref, remove, serverTimestamp, set, update } from 'firebase/database';

const projectId = 'demo-community-rtdb';
let environment;

before(async () => {
  environment = await initializeTestEnvironment({
    projectId,
    database: {
      host: '127.0.0.1',
      port: 9000,
      rules: await readFile(
        process.env.RTDB_RULES_FILE || new URL('../database.rules.json', import.meta.url),
        'utf8',
      ),
    },
  });
});

beforeEach(async () => {
  await environment.clearDatabase();
  await environment.withSecurityRulesDisabled(async (context) => {
    const database = context.database();
    await set(ref(database, 'conversations/chat-1'), {
      type: 'private',
      members: { sender: true, recipient: true },
      peerUid: 'recipient',
      peerUidByUid: { sender: 'recipient', recipient: 'sender' },
      lastMessage: 'Hello',
      lastMessageAt: 1000,
      lastMessageOrder: 1000,
      lastMessageSenderUid: 'sender',
      lastMessageSenderName: 'Sender',
      lastMessageSenderPhotoURL: '',
    });
    await set(ref(database, 'messages/chat-1/message-1'), {
      senderId: 'sender',
      senderName: 'Sender',
      senderPhotoURL: '',
      type: 'text',
      text: 'Hello',
      createdAt: 1000,
      createdAtOrder: 1000,
      status: 'sent',
      seenBy: { sender: true },
    });
  });
});

after(async () => {
  await environment.cleanup();
});

function userDatabase(uid) {
  return environment.authenticatedContext(uid, {
    email_verified: true,
    firebase: { sign_in_provider: 'google.com' },
  }).database();
}

test('conversation members can mark received messages seen without changing their content', async () => {
  const recipient = userDatabase('recipient');
  await assertSucceeds(set(ref(recipient, 'messages/chat-1/message-1/seenBy/recipient'), true));
  await assertFails(set(ref(recipient, 'messages/chat-1/message-1/text'), 'Changed by recipient'));
});

test('senders can edit and unsend their own messages but recipients cannot', async () => {
  const sender = userDatabase('sender');
  const recipient = userDatabase('recipient');
  const messageRef = ref(sender, 'messages/chat-1/message-1');
  await assertSucceeds(update(messageRef, { text: 'Edited by sender', edited: true }));
  await assertFails(update(ref(recipient, 'messages/chat-1/message-1'), { text: 'Edited by recipient' }));
  await assertSucceeds(update(messageRef, {
    deletedForEveryone: true,
    text: 'Message deleted',
    imageData: '',
    imageUrl: '',
    caption: '',
    status: 'deleted',
  }));
  await assertFails(update(messageRef, { text: 'Restored after deletion' }));
});

test('public and friend posts allow valid comments but reject invalid or outsider writes', async () => {
  await environment.withSecurityRulesDisabled(async (context) => {
    const database = context.database();
    await set(ref(database, 'posts/public-post'), {
      uid: 'author',
      privacy: 'public',
      createdAt: 1000,
    });
    await set(ref(database, 'posts/friend-post'), {
      uid: 'author',
      privacy: 'friends',
      createdAt: 1000,
    });
    await set(ref(database, 'friends/friend-user/author'), true);
  });

  const commenter = userDatabase('friend-user');
  await assertSucceeds(set(ref(commenter, 'comments/friend-post/comment-1'), {
    uid: 'friend-user',
    authorName: 'Friend',
    authorPhoto: '',
    text: 'This comment is valid.',
    parentId: null,
    createdAt: serverTimestamp(),
  }));
  await assertFails(set(ref(commenter, 'comments/friend-post/invalid-comment'), {
    uid: 'friend-user',
    authorName: 'Friend',
    authorPhoto: '',
    text: '',
    createdAt: serverTimestamp(),
  }));

  const outsider = userDatabase('outsider');
  await assertFails(set(ref(outsider, 'comments/friend-post/comment-2'), {
    uid: 'outsider',
    authorName: 'Outsider',
    authorPhoto: '',
    text: 'Blocked comment.',
    createdAt: serverTimestamp(),
  }));
});

test('conversation members can create valid live messages', async () => {
  const sender = userDatabase('sender');
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'message-2',
  });
  await assertFails(set(ref(sender, 'messages/chat-1/message-2'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Forged read receipt',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
    status: 'sent',
    seenBy: { sender: true, outsider: true },
  }));
  await assertSucceeds(set(ref(sender, 'messages/chat-1/message-2'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'A new live message',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
    status: 'sent',
    seenBy: { sender: true },
  }));
});

test('message reads and conversation membership are limited to participants', async () => {
  const outsider = userDatabase('outsider');
  const anonymous = environment.unauthenticatedContext().database();
  const unverified = environment.authenticatedContext('sender', {
    email_verified: false,
    firebase: { sign_in_provider: 'password' },
  }).database();
  await assertFails(get(ref(outsider, 'conversations/chat-1')));
  await assertFails(get(ref(outsider, 'messages/chat-1')));
  await assertFails(get(ref(anonymous, 'messages/chat-1')));
  await assertFails(get(ref(unverified, 'messages/chat-1')));
  await assertFails(set(ref(outsider, 'messages/chat-1/outsider-message'), {
    senderId: 'outsider',
    senderName: 'Outsider',
    senderPhotoURL: '',
    type: 'text',
    text: 'Not a member',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
  await assertFails(set(ref(unverified, 'messages/chat-1/unverified-message'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Not verified',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
  await assertFails(set(ref(userDatabase('sender'), 'conversations/chat-1/members/outsider'), true));
});

test('only group admins can add members and groups require a second participant', async () => {
  await environment.withSecurityRulesDisabled(async (context) => {
    await set(ref(context.database(), 'conversations/group-1'), {
      type: 'group',
      members: { sender: true, recipient: true },
      admins: { sender: true },
      name: 'Test group',
    });
  });
  await assertSucceeds(set(ref(userDatabase('sender'), 'conversations/group-1/members/new-member'), true));
  await assertFails(set(ref(userDatabase('recipient'), 'conversations/group-1/members/other-member'), true));
  await assertSucceeds(set(ref(userDatabase('sender'), 'conversations/new-group'), {
    type: 'group',
    initialPeerUid: 'recipient',
    name: 'New group',
    members: { sender: true, recipient: true },
    admins: { sender: true },
  }));
  await assertFails(set(ref(userDatabase('sender'), 'conversations/solo-group'), {
    type: 'group',
    initialPeerUid: 'sender',
    name: 'Solo group',
    members: { sender: true },
    admins: { sender: true },
  }));
});

test('direct chats require a canonical two-member identity mapping', async () => {
  const sender = userDatabase('sender');
  await assertSucceeds(set(ref(sender, 'conversations/peer_sender'), {
    type: 'private',
    members: { sender: true, peer: true },
    peerUid: 'peer',
    peerUidByUid: { sender: 'peer', peer: 'sender' },
  }));
  await assertFails(set(ref(sender, 'conversations/fake-id'), {
    type: 'private',
    members: { sender: true, peer: true },
    peerUid: 'peer',
    peerUidByUid: { sender: 'peer', peer: 'sender' },
  }));
  await assertFails(set(ref(sender, 'conversations/peer_sender'), {
    type: 'private',
    members: { sender: true, peer: true, outsider: true },
    peerUid: 'peer',
    peerUidByUid: { sender: 'peer', peer: 'sender' },
  }));
});

test('message sends are rate-limited across conversations and validate length', async () => {
  const sender = userDatabase('sender');
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'rate-first',
  });
  await assertFails(set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'rate-second',
  }));
  await new Promise((resolve) => setTimeout(resolve, 1100));
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'too-long',
  });
  await assertFails(set(ref(sender, 'messages/chat-1/too-long'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'x'.repeat(2001),
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
    status: 'sent',
  }));
});

test('blocked users cannot send direct or group messages', async () => {
  const sender = userDatabase('sender');
  await set(ref(sender, 'blockedUsers/sender/recipient'), { createdAt: serverTimestamp() });
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'blocked-direct',
  });
  await assertFails(set(ref(sender, 'messages/chat-1/blocked-direct'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Blocked',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
  await remove(ref(sender, 'blockedUsers/sender/recipient'));
  await set(ref(userDatabase('recipient'), 'blockedUsers/recipient/sender'), { createdAt: serverTimestamp() });
  await assertFails(set(ref(sender, 'messages/chat-1/blocked-direct'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Blocked by recipient',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));

  await environment.withSecurityRulesDisabled(async (context) => {
    await set(ref(context.database(), 'conversations/group-1'), {
      type: 'group',
      members: { sender: true, recipient: true },
      admins: { sender: true },
      blockedByUid: { sender: { recipient: true } },
    });
  });
  await assertFails(set(ref(sender, 'messages/group-1/blocked-direct'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Blocked in group',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
});

test('message attachments require a trusted Cloudinary URL and bounded dimensions', async () => {
  const sender = userDatabase('sender');
  await new Promise((resolve) => setTimeout(resolve, 1100));
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'image-valid',
  });
  await assertSucceeds(set(ref(sender, 'messages/chat-1/image-valid'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'image',
    imageUrl: 'https://res.cloudinary.com/fyelzeqn/image/upload/example.jpg',
    width: 800,
    height: 600,
    caption: '',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
    status: 'sent',
  }));
  await new Promise((resolve) => setTimeout(resolve, 1100));
  await set(ref(sender, 'messageSendRates/sender'), {
    lastSentAt: serverTimestamp(),
    messageId: 'image-invalid',
  });
  await assertFails(set(ref(sender, 'messages/chat-1/image-invalid'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'text',
    text: 'Image data bypass',
    imageData: 'data:image/svg+xml;base64,PHN2Zy8+',
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
  await assertFails(set(ref(sender, 'messages/chat-1/image-invalid'), {
    senderId: 'sender',
    senderName: 'Sender',
    senderPhotoURL: '',
    type: 'image',
    imageUrl: 'https://example.com/image.jpg',
    width: 800,
    height: 600,
    createdAt: serverTimestamp(),
    createdAtOrder: serverTimestamp(),
  }));
});

test('chat reports are limited to participant reports of another member’s message', async () => {
  const recipient = userDatabase('recipient');
  await assertSucceeds(set(ref(recipient, 'chatReports/recipient/report-1'), {
    reporterUid: 'recipient',
    conversationId: 'chat-1',
    messageId: 'message-1',
    targetUid: 'sender',
    reason: 'harassment',
    createdAt: serverTimestamp(),
  }));
  await assertFails(get(ref(userDatabase('sender'), 'chatReports/recipient/report-1')));
  await assertFails(set(ref(recipient, 'chatReports/recipient/report-self'), {
    reporterUid: 'recipient',
    conversationId: 'chat-1',
    messageId: 'message-1',
    targetUid: 'recipient',
    reason: 'other',
    createdAt: serverTimestamp(),
  }));
});

test('users cannot forge message notifications for another account', async () => {
  const sender = userDatabase('sender');
  await assertFails(set(ref(sender, 'messageNotifications/recipient/forged'), {
    fromUid: 'sender',
    convId: 'chat-1',
    messageId: 'missing-message',
    createdAt: serverTimestamp(),
    read: false,
    type: 'message',
  }));
  const notificationRef = ref(sender, 'messageNotifications/recipient/valid');
  await assertSucceeds(set(notificationRef, {
    fromUid: 'sender',
    convId: 'chat-1',
    messageId: 'message-1',
    createdAt: serverTimestamp(),
    read: false,
    type: 'message',
  }));
  await assertSucceeds(update(ref(userDatabase('recipient'), 'messageNotifications/recipient/valid'), {
    read: true,
  }));
  await assertFails(update(ref(userDatabase('recipient'), 'messageNotifications/recipient/valid'), {
    fromUid: 'outsider',
  }));
});

test('conversation summaries cannot be written for non-members', async () => {
  const sender = userDatabase('sender');
  await assertSucceeds(set(ref(sender, 'userConversations/recipient/chat-1/lastMessage'), 'Updated preview'));
  await assertFails(set(ref(sender, 'userConversations/outsider/chat-1/lastMessage'), 'Injected preview'));
});

test('message reactions and hidden-message state are scoped to the signed-in member', async () => {
  const recipient = userDatabase('recipient');
  await assertSucceeds(set(ref(recipient, 'messageReactions/chat-1/message-1/recipient'), '❤️'));
  await assertSucceeds(set(ref(recipient, 'hiddenMessages/recipient/chat-1/message-1'), true));
  await assertFails(set(ref(recipient, 'hiddenMessages/sender/chat-1/message-1'), true));
});

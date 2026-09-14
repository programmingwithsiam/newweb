export const messengerSeedConversations = [
  {
    id: 'seed-1',
    type: 'private',
    members: { 'demo-user': true, 'peer-1': true },
    name: 'Nadia Rahman',
    photoURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'I can review the layout tomorrow morning.',
    lastMessageAt: Date.now() - 1000 * 60 * 12,
    unreadCount: 2,
    online: true,
  },
  {
    id: 'seed-2',
    type: 'private',
    members: { 'demo-user': true, 'peer-2': true },
    name: 'Arif Hasan',
    photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'The upload issue is fixed on my side.',
    lastMessageAt: Date.now() - 1000 * 60 * 42,
    unreadCount: 0,
    online: false,
  },
  {
    id: 'seed-3',
    type: 'group',
    members: { 'demo-user': true, 'peer-3': true, 'peer-4': true },
    name: 'Design Review',
    photoURL: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'Let’s ship the dark mode polish today.',
    lastMessageAt: Date.now() - 1000 * 60 * 90,
    unreadCount: 5,
    online: true,
  },
];

export const messengerSeedMessages = {
  'seed-1': {
    m1: {
      senderId: 'peer-1',
      text: 'Hey! I saw the updated chat layout. It feels much cleaner.',
      createdAt: Date.now() - 1000 * 60 * 70,
      seenBy: { 'peer-1': true },
    },
    m2: {
      senderId: 'demo-user',
      text: 'Thanks! I am polishing the sidebar spacing and list hover states.',
      createdAt: Date.now() - 1000 * 60 * 58,
      seenBy: { 'demo-user': true, 'peer-1': true },
    },
    m3: {
      senderId: 'peer-1',
      text: 'I can review the layout tomorrow morning.',
      createdAt: Date.now() - 1000 * 60 * 12,
      seenBy: { 'demo-user': true, 'peer-1': true },
    },
  },
  'seed-2': {
    m1: {
      senderId: 'peer-2',
      text: 'The upload issue is fixed on my side.',
      createdAt: Date.now() - 1000 * 60 * 42,
      seenBy: { 'demo-user': true, 'peer-2': true },
    },
    m2: {
      senderId: 'demo-user',
      text: 'Great, let me test once more before we close it.',
      createdAt: Date.now() - 1000 * 60 * 39,
      seenBy: { 'demo-user': true, 'peer-2': true },
    },
  },
  'seed-3': {
    m1: {
      senderId: 'peer-3',
      text: 'Design review starts in 20 minutes.',
      createdAt: Date.now() - 1000 * 60 * 110,
      seenBy: { 'demo-user': true, 'peer-3': true, 'peer-4': true },
    },
    m2: {
      senderId: 'demo-user',
      text: 'I have the dark gradient bubble variation ready.',
      createdAt: Date.now() - 1000 * 60 * 95,
      seenBy: { 'demo-user': true, 'peer-3': true, 'peer-4': true },
    },
    m3: {
      senderId: 'peer-4',
      text: 'Let’s ship the dark mode polish today.',
      createdAt: Date.now() - 1000 * 60 * 82,
      seenBy: { 'demo-user': true, 'peer-3': true, 'peer-4': true },
    },
  },
};

import { readFile } from 'node:fs/promises';
import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';

const projectId = 'demo-community-rules';
let environment;

before(async () => {
  environment = await initializeTestEnvironment({
    projectId,
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules: await readFile(new URL('../firestore.rules', import.meta.url), 'utf8'),
    },
  });
});

beforeEach(async () => {
  await environment.clearFirestore();
  await environment.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    for (const uid of ['alice', 'bob', 'mallory']) {
      await setDoc(doc(db, 'users', uid), {
        uid,
        name: uid,
        email: `${uid}@example.com`,
        role: 'student',
        photoURL: '',
        username: `${uid}-name`,
        bio: '',
        banned: false,
        createdAt: new Date(),
      });
      await setDoc(doc(db, 'publicProfiles', uid), {
        uid,
        name: uid,
        displayName: uid,
        photoURL: '',
        profilePicture: '',
        username: `${uid}-name`,
        searchName: uid,
        bio: '',
        skills: [],
        followers: [],
        following: [],
        followersCount: 0,
        followingCount: 0,
        totalProjects: 0,
        online: true,
        createdAt: new Date(),
      });
    }
    await setDoc(doc(db, 'chats', 'alice_bob'), {
      members: ['alice', 'bob'],
      lastMessage: '',
      unread: { alice: 0, bob: 0 },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});

after(async () => {
  await environment.cleanup();
});

function userDb(uid, token = {}) {
  return environment.authenticatedContext(uid, {
    email: `${uid}@example.com`,
    email_verified: true,
    firebase: { sign_in_provider: 'google.com' },
    ...token,
  }).firestore();
}

async function createPost(db, uid, text = 'Hello community') {
  const postRef = doc(collection(db, 'posts'));
  const batch = writeBatch(db);
  batch.set(postRef, {
    authorUid: uid,
    authorName: uid,
    authorPhoto: '',
    text,
    postType: 'post',
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
  });
  batch.set(doc(db, 'writeRates', uid), { lastPostAt: serverTimestamp() }, { merge: true });
  await batch.commit();
  return postRef;
}

test('public profiles are readable but private account documents and role changes are protected', async () => {
  const alice = userDb('alice');
  const mallory = userDb('mallory');
  const anonymous = environment.unauthenticatedContext().firestore();
  await assertFails(getDoc(doc(mallory, 'users', 'alice')));
  await assertSucceeds(getDoc(doc(anonymous, 'publicProfiles', 'alice')));
  await assertSucceeds(updateDoc(doc(alice, 'users', 'alice'), { bio: 'A new bio' }));
  const profileDetails = {
    profilePicture: 'https://res.cloudinary.com/example/profile.jpg',
    coverPhoto: 'https://res.cloudinary.com/example/cover.jpg',
    coverURL: 'https://res.cloudinary.com/example/cover.jpg',
    location: 'Dhaka, Bangladesh',
    website: 'https://example.com/',
    learningRole: 'Frontend development',
    skills: ['JavaScript', 'UI design'],
  };
  await assertSucceeds(updateDoc(doc(alice, 'users', 'alice'), profileDetails));
  await assertSucceeds(updateDoc(doc(alice, 'publicProfiles', 'alice'), profileDetails));
  await assertFails(updateDoc(doc(mallory, 'users', 'alice'), { bio: 'Changed by another user' }));
  await assertFails(updateDoc(doc(alice, 'users', 'alice'), { role: 'admin' }));
  await assertFails(getDoc(doc(alice, 'socialActionRates', 'alice')));
  await assertFails(setDoc(doc(alice, 'socialActionRates', 'alice'), {
    lastReactionAt: serverTimestamp(),
  }));
  await assertSucceeds(updateDoc(doc(alice, 'publicProfiles', 'alice'), { bio: 'A public bio' }));
  await assertFails(updateDoc(doc(mallory, 'publicProfiles', 'alice'), { bio: 'Changed by another user' }));
  await assertFails(updateDoc(doc(alice, 'publicProfiles', 'alice'), { followersCount: 1 }));
  await assertFails(updateDoc(doc(alice, 'publicProfiles', 'alice'), { following: ['mallory'] }));
  await assertFails(setDoc(doc(alice, 'admins', 'alice'), { enabled: true }));
});

test('users can create private profiles but cannot claim another role or email', async () => {
  const user = userDb('new-user');
  await assertSucceeds(setDoc(doc(user, 'users', 'new-user'), {
    uid: 'new-user',
    name: 'New user',
    email: 'new-user@example.com',
    role: 'student',
    photoURL: '',
    createdAt: serverTimestamp(),
  }));
  await assertFails(setDoc(doc(user, 'users', 'another-user'), {
    uid: 'another-user',
    name: 'Not my account',
    email: 'new-user@example.com',
    role: 'student',
    photoURL: '',
    createdAt: serverTimestamp(),
  }));
  await assertFails(updateDoc(doc(user, 'users', 'new-user'), { email: 'other@example.com' }));
});

test('new public profiles cannot initialize fake follows or follower counts', async () => {
  const user = userDb('new-member');
  await assertSucceeds(setDoc(doc(user, 'publicProfiles', 'new-member'), {
    uid: 'new-member',
    name: 'New member',
    displayName: 'New member',
    photoURL: '',
    profilePicture: '',
    username: '',
    searchName: 'new member',
    bio: '',
    skills: [],
    followers: [],
    following: [],
    followersCount: 0,
    followingCount: 0,
    totalProjects: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }));
  const fake = userDb('fake-member');
  await assertFails(setDoc(doc(fake, 'publicProfiles', 'fake-member'), {
    uid: 'fake-member',
    name: 'New member',
    displayName: 'New member',
    photoURL: '',
    followers: ['mallory'],
    following: ['mallory'],
    followersCount: 1,
    followingCount: 1,
    createdAt: serverTimestamp(),
  }));
});

test('post creation is rate-limited and another user cannot edit the post', async () => {
  const alice = userDb('alice');
  const bob = userDb('bob');
  const anonymous = environment.unauthenticatedContext().firestore();
  const postRef = await createPost(alice, 'alice');
  await assertSucceeds(getDoc(doc(bob, postRef.path)));
  await assertSucceeds(getDoc(doc(anonymous, postRef.path)));
  await assertSucceeds(getDocs(query(
    collection(anonymous, 'posts'),
    orderBy('createdAt', 'desc'),
    limit(20),
  )));
  await assertSucceeds(updateDoc(postRef, { text: 'Edited by owner', updatedAt: serverTimestamp() }));
  await assertFails(updateDoc(doc(bob, postRef.path), { text: 'Edited by another user' }));
  await assertFails(updateDoc(doc(alice, postRef.path), { likeCount: 100 }));
  await assertFails(updateDoc(doc(alice, postRef.path), {
    text: 'Changed owner and counters',
    authorUid: 'bob',
    likeCount: 99,
    updatedAt: serverTimestamp(),
  }));
  await assertFails(deleteDoc(doc(bob, postRef.path)));
  await assertFails(deleteDoc(doc(alice, postRef.path)));
  await assert.rejects(() => createPost(alice, 'alice', 'Too soon'));
});

test('Google accounts can use Community without an email_verified claim', async () => {
  const googleUser = userDb('google-user', { email_verified: false });
  await assert.doesNotReject(() => createPost(googleUser, 'google-user'));
});

test('unverified non-Google accounts cannot create Community posts', async () => {
  const unverified = userDb('unverified', {
    email_verified: false,
    firebase: { sign_in_provider: 'password' },
  });
  await assert.rejects(() => createPost(unverified, 'unverified'));
});

test('external post media must use a supported HTTPS provider', async () => {
  const alice = userDb('alice');
  const validPost = doc(collection(alice, 'posts'));
  const validBatch = writeBatch(alice);
  validBatch.set(validPost, {
    authorUid: 'alice',
    authorName: 'alice',
    authorPhoto: '',
    text: 'A supported video link',
    externalMediaURL: 'https://youtu.be/abcd1234',
    postType: 'post',
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
  });
  validBatch.set(doc(alice, 'writeRates', 'alice'), { lastPostAt: serverTimestamp() }, { merge: true });
  await assertSucceeds(validBatch.commit());

  const bob = userDb('bob');
  const invalidPost = doc(collection(bob, 'posts'));
  const invalidBatch = writeBatch(bob);
  invalidBatch.set(invalidPost, {
    authorUid: 'bob',
    authorName: 'bob',
    authorPhoto: '',
    text: 'An unsupported link',
    externalMediaURL: 'https://evil.example/video',
    postType: 'post',
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
  });
  invalidBatch.set(doc(bob, 'writeRates', 'bob'), { lastPostAt: serverTimestamp() }, { merge: true });
  await assertFails(invalidBatch.commit());
});

test('clients cannot forge reactions or change like counters directly', async () => {
  const alice = userDb('alice');
  const bob = userDb('bob');
  const postRef = await createPost(alice, 'alice');
  const reactionRef = doc(bob, 'posts', postRef.id, 'reactions', 'bob');
  const batch = writeBatch(bob);
  batch.set(reactionRef, { uid: 'bob', type: 'care', createdAt: serverTimestamp() });
  batch.update(doc(bob, 'posts', postRef.id), { likeCount: 1 });
  await assertFails(batch.commit());

  await assertFails(setDoc(doc(bob, 'posts', postRef.id, 'reactions', 'alice'), {
    uid: 'alice', type: 'like', createdAt: serverTimestamp(),
  }));
  await environment.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), 'posts', postRef.id, 'reactions', 'bob'), {
      uid: 'bob', type: 'care', createdAt: new Date(),
    });
  });
  await assertFails(updateDoc(reactionRef, { type: 'love', updatedAt: serverTimestamp() }));
  await assertFails(deleteDoc(reactionRef));
  await assertFails(updateDoc(doc(alice, 'posts', postRef.id), { likeCount: 1 }));
});

test('comments can only be created or deleted through the counter-safe API', async () => {
  const alice = userDb('alice');
  const bob = userDb('bob');
  const postRef = await createPost(alice, 'alice');
  const commentRef = doc(alice, 'posts', postRef.id, 'comments', 'comment-1');
  await assertFails(setDoc(commentRef, {
    authorUid: 'alice',
    authorName: 'alice',
    authorPhoto: '',
    text: 'Direct writes cannot bypass comment counter and block checks.',
    createdAt: serverTimestamp(),
  }));
  await environment.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), commentRef.path), {
      authorUid: 'alice',
      authorName: 'alice',
      authorPhoto: '',
      text: 'Owned comment',
      createdAt: new Date(),
    });
  });
  await assertFails(deleteDoc(commentRef));
  await assertFails(deleteDoc(doc(bob, commentRef.path)));
});

test('follows are readable but only the authenticated API may mutate relationships', async () => {
  const alice = userDb('alice');
  const bob = userDb('bob');
  const followRef = doc(alice, 'follows', 'alice_bob');
  await assertSucceeds(getDoc(doc(bob, 'follows', 'alice_bob')));
  await assertFails(setDoc(followRef, {
    followerUid: 'alice',
    followingUid: 'bob',
    createdAt: serverTimestamp(),
  }));
  await environment.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), 'follows/alice_bob'), {
      followerUid: 'alice',
      followingUid: 'bob',
      createdAt: new Date(),
    });
  });
  await assertFails(updateDoc(followRef, { followingUid: 'mallory' }));
  await assertFails(deleteDoc(followRef));
  await assertFails(deleteDoc(doc(bob, 'follows/alice_bob')));
});

test('unauthenticated users cannot create posts, reactions, comments, or follows', async () => {
  const anonymous = environment.unauthenticatedContext().firestore();
  const postRef = doc(collection(anonymous, 'posts'));
  const batch = writeBatch(anonymous);
  batch.set(postRef, {
    authorUid: 'anonymous',
    authorName: 'Anonymous',
    authorPhoto: '',
    text: 'Unauthenticated post',
    postType: 'post',
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
  });
  batch.set(doc(anonymous, 'writeRates', 'anonymous'), { lastPostAt: serverTimestamp() });
  await assertFails(batch.commit());
  await assertFails(setDoc(doc(anonymous, 'posts', 'existing', 'reactions', 'anonymous'), {
    uid: 'anonymous',
    type: 'like',
    createdAt: serverTimestamp(),
  }));
  await assertFails(setDoc(doc(anonymous, 'posts', 'existing', 'comments', 'anonymous'), {
    authorUid: 'anonymous',
    authorName: 'Anonymous',
    authorPhoto: '',
    text: 'Unauthenticated comment',
    createdAt: serverTimestamp(),
  }));
  await assertFails(setDoc(doc(anonymous, 'follows', 'anonymous_bob'), {
    followerUid: 'anonymous',
    followingUid: 'bob',
    createdAt: serverTimestamp(),
  }));
});

test('media metadata cannot be attached without a verified media asset', async () => {
  const alice = userDb('alice');
  const postRef = doc(collection(alice, 'posts'));
  const batch = writeBatch(alice);
  batch.set(postRef, {
    authorUid: 'alice',
    authorName: 'alice',
    authorPhoto: '',
    text: 'Forged attachment',
    mediaURL: 'https://res.cloudinary.com/example/image/upload/forged.jpg',
    mediaType: 'image',
    postType: 'post',
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
  });
  batch.set(doc(alice, 'writeRates', 'alice'), { lastPostAt: serverTimestamp() }, { merge: true });
  await assertFails(batch.commit());
});

test('saved posts are private, bounded, and owner-controlled', async () => {
  const alice = userDb('alice');
  const bob = userDb('bob');
  const postRef = await createPost(alice, 'alice');
  const savedRef = doc(alice, 'savedPosts', `alice_${postRef.id}`);
  await assertSucceeds(setDoc(savedRef, {
    ownerUid: 'alice',
    postId: postRef.id,
    createdAt: serverTimestamp(),
  }));
  const ownSaved = query(collection(alice, 'savedPosts'), where('ownerUid', '==', 'alice'), limit(20));
  const otherSaved = query(collection(bob, 'savedPosts'), where('ownerUid', '==', 'alice'), limit(20));
  await assertSucceeds(getDocs(ownSaved));
  await assertFails(getDoc(doc(bob, savedRef.path)));
  await assertFails(getDocs(otherSaved));
  await assertFails(updateDoc(savedRef, { postId: 'another-post' }));
});

test('clients cannot forge notifications', async () => {
  const alice = userDb('alice');
  await assertFails(setDoc(doc(alice, 'notifications', 'bob', 'items', 'forged'), {
    fromUid: 'alice',
    type: 'follow',
    targetId: 'alice',
    text: 'Fake notification',
    createdAt: serverTimestamp(),
    read: false,
  }));
});

test('chat messages are private to members and sender/rate metadata must match', async () => {
  const alice = userDb('alice', { email_verified: false });
  const mallory = userDb('mallory');
  await assertSucceeds(getDoc(doc(alice, 'chats', 'alice_bob')));
  await assertFails(getDoc(doc(mallory, 'chats', 'alice_bob')));
  await assertFails(getDocs(collection(mallory, 'chats', 'alice_bob', 'messages')));

  const chatRef = doc(alice, 'chats', 'alice_bob');
  const messageRef = doc(collection(alice, 'chats', 'alice_bob', 'messages'));
  const batch = writeBatch(alice);
  batch.set(messageRef, { senderUid: 'alice', text: 'Private message', createdAt: serverTimestamp() });
  batch.update(chatRef, {
    lastMessage: 'Private message',
    lastMessageAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    lastMessageId: messageRef.id,
    lastMessageUid: 'alice',
    unread: { alice: 0, bob: 1 },
  });
  batch.set(doc(alice, 'writeRates', 'alice'), { lastMessageAt: serverTimestamp() }, { merge: true });
  await assertSucceeds(batch.commit());
  await assertFails(getDoc(doc(mallory, messageRef.path)));
});

test('archived conversations remain readable to the remaining member but reject writes', async () => {
  await environment.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    await updateDoc(doc(db, 'chats/alice_bob'), { archived: true });
    await setDoc(doc(db, 'chats/alice_bob/messages/peer-message'), {
      senderUid: 'bob',
      text: 'A message retained for the remaining member.',
      createdAt: new Date(),
    });
  });
  const bob = userDb('bob');
  await assertSucceeds(getDoc(doc(bob, 'chats/alice_bob')));
  await assertSucceeds(getDoc(doc(bob, 'chats/alice_bob/messages/peer-message')));
  await assertFails(setDoc(doc(bob, 'chats/alice_bob/messages/new-message'), {
    senderUid: 'bob',
    text: 'Archived conversations cannot receive messages.',
    createdAt: serverTimestamp(),
  }));
});

test('blocks and bans prevent new community writes', async () => {
  const alice = userDb('alice');
  await environment.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    await setDoc(doc(db, 'blocks/alice_bob'), {
      ownerUid: 'alice', blockedUid: 'bob', createdAt: new Date(),
    });
    await updateDoc(doc(db, 'users/bob'), { banned: true });
  });

  const chatRef = doc(alice, 'chats', 'alice_bob');
  const messageRef = doc(collection(alice, 'chats', 'alice_bob', 'messages'));
  const batch = writeBatch(alice);
  batch.set(messageRef, { senderUid: 'alice', text: 'Blocked message', createdAt: serverTimestamp() });
  batch.update(chatRef, {
    lastMessage: 'Blocked message',
    lastMessageAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    lastMessageId: messageRef.id,
    lastMessageUid: 'alice',
    unread: { alice: 0, bob: 1 },
  });
  batch.set(doc(alice, 'writeRates', 'alice'), { lastMessageAt: serverTimestamp() }, { merge: true });
  await assertFails(batch.commit());
  await assertFails(createPost(userDb('bob'), 'bob'));
});

test('free course access requires a pending admin-review request', async () => {
  await environment.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), 'courses', 'free-course'), {
      title: 'Free course',
      price: 0,
      discountPrice: 0,
      status: 'published',
    });
  });

  const alice = userDb('alice');
  await assertSucceeds(setDoc(doc(alice, 'payments', 'free-request'), {
    userId: 'alice',
    studentName: 'Alice',
    studentEmail: 'alice@example.com',
    courseId: 'free-course',
    courseTitle: 'Free course',
    amount: 0,
    paidAmount: 0,
    paidCurrency: 'BDT',
    method: 'free',
    transactionId: '',
    phone: '+8801712345678',
    paymentDate: '',
    screenshotUrl: '',
    status: 'pending',
    submittedAt: serverTimestamp(),
  }));
  await assertSucceeds(setDoc(doc(alice, 'enrollments', 'alice_free-course'), {
    userId: 'alice',
    courseId: 'free-course',
    status: 'pending',
    paymentMethod: 'free',
    transactionId: '',
    paymentId: 'free-request',
    requestedAt: serverTimestamp(),
    accessSource: 'payment',
  }));
  await assertFails(setDoc(doc(alice, 'enrollments', 'alice_direct-free-access'), {
    userId: 'alice',
    courseId: 'free-course',
    status: 'approved',
    paymentMethod: 'free',
    transactionId: '',
    requestedAt: serverTimestamp(),
    approvedAt: serverTimestamp(),
    approvedBy: 'free-course',
    accessSource: 'free',
  }));
});

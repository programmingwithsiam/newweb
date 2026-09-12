import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, set, remove, runTransaction, serverTimestamp, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { notify } from '../utils/notify';
import ConfirmDialog from './ConfirmDialog';

export default function FriendButton({ targetUid }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  // Track each relationship independently and idempotently (every listener
  // sets both the true and false case) so removals are reflected instantly
  // instead of leaving a stale "Friends" button after the other side
  // unfriends/rejects/cancels.
  const [isFriends, setIsFriends] = useState(false);
  const [sentPending, setSentPending] = useState(false);
  const [receivedPending, setReceivedPending] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [confirmUnfriend, setConfirmUnfriend] = useState(false);
  const [confirmBlock, setConfirmBlock] = useState(false);

  useEffect(() => {
    if (!user || user.uid === targetUid) return;
    const unsubs = [
      onValue(ref(db, `friends/${user.uid}/${targetUid}`), (s) => setIsFriends(s.exists())),
      onValue(ref(db, `friendRequests/${targetUid}/${user.uid}`), (s) => setSentPending(s.exists())),
      onValue(ref(db, `friendRequests/${user.uid}/${targetUid}`), (s) => setReceivedPending(s.exists())),
      onValue(ref(db, `following/${user.uid}/${targetUid}`), (s) => setIsFollowing(s.exists())),
      onValue(ref(db, `blockedUsers/${user.uid}/${targetUid}`), (s) => setIsBlocked(s.exists()))
    ];
    return () => unsubs.forEach((u) => u());
  }, [user, targetUid]);

  if (!user || user.uid === targetUid) return null;

  const friendStatus = isFriends
    ? 'friends'
    : receivedPending
      ? 'pending_received'
      : sentPending
        ? 'pending_sent'
        : 'none';

  async function sendRequest() {
    await set(ref(db, `friendRequests/${targetUid}/${user.uid}`), { status: 'pending', createdAt: serverTimestamp() });
    notify(targetUid, { type: 'friend_request', fromUid: user.uid });
    showToast('Friend request sent', 'success');
  }

  async function cancelRequest() {
    await remove(ref(db, `friendRequests/${targetUid}/${user.uid}`));
  }

  async function acceptRequest() {
    await set(ref(db, `friends/${user.uid}/${targetUid}`), true);
    await set(ref(db, `friends/${targetUid}/${user.uid}`), true);
    await remove(ref(db, `friendRequests/${user.uid}/${targetUid}`));
    await runTransaction(ref(db, `users/${user.uid}/friendsCount`), (c) => (c || 0) + 1);
    await runTransaction(ref(db, `users/${targetUid}/friendsCount`), (c) => (c || 0) + 1);
    notify(targetUid, { type: 'friend_accept', fromUid: user.uid });
    showToast('You are now friends', 'success');
  }

  async function rejectRequest() {
    await remove(ref(db, `friendRequests/${user.uid}/${targetUid}`));
  }

  async function unfriend() {
    await remove(ref(db, `friends/${user.uid}/${targetUid}`));
    await remove(ref(db, `friends/${targetUid}/${user.uid}`));
    await runTransaction(ref(db, `users/${user.uid}/friendsCount`), (c) => Math.max(0, (c || 0) - 1));
    await runTransaction(ref(db, `users/${targetUid}/friendsCount`), (c) => Math.max(0, (c || 0) - 1));
    setConfirmUnfriend(false);
  }

  async function toggleFollow() {
    if (isFollowing) {
      await remove(ref(db, `following/${user.uid}/${targetUid}`));
      await remove(ref(db, `followers/${targetUid}/${user.uid}`));
      await runTransaction(ref(db, `users/${user.uid}/followingCount`), (c) => Math.max(0, (c || 0) - 1));
      await runTransaction(ref(db, `users/${targetUid}/followersCount`), (c) => Math.max(0, (c || 0) - 1));
    } else {
      await set(ref(db, `following/${user.uid}/${targetUid}`), true);
      await set(ref(db, `followers/${targetUid}/${user.uid}`), true);
      await runTransaction(ref(db, `users/${user.uid}/followingCount`), (c) => (c || 0) + 1);
      await runTransaction(ref(db, `users/${targetUid}/followersCount`), (c) => (c || 0) + 1);
      notify(targetUid, { type: 'follow', fromUid: user.uid });
    }
  }

  async function toggleBlock() {
    if (isBlocked) {
      await remove(ref(db, `blockedUsers/${user.uid}/${targetUid}`));
    } else {
      await set(ref(db, `blockedUsers/${user.uid}/${targetUid}`), { createdAt: serverTimestamp() });
      showToast('User blocked', 'success');
    }
    setConfirmBlock(false);
  }

  async function startChat() {
    try {
      const convId = [user.uid, targetUid].sort().join('_');
      await set(ref(db, `conversations/${convId}`), {
        type: 'private',
        members: { [user.uid]: true, [targetUid]: true },
        createdAt: serverTimestamp()
      });
      const summary = {
        members: { [user.uid]: true, [targetUid]: true },
        lastMessage: '',
        lastMessageAt: Date.now(),
        unreadCount: 0
      };
      await set(ref(db, `userConversations/${user.uid}/${convId}`), summary);
      await set(ref(db, `userConversations/${targetUid}/${convId}`), summary);
      navigate(`/messenger/${convId}`);
    } catch (err) {
      showToast(`Could not open chat: ${err.message}`, 'error');
    }
  }

  return (
    <div className="friend-actions">
      {friendStatus === 'friends' && (
        <button className="btn btn-ghost" onClick={() => setConfirmUnfriend(true)}>✓ Friends</button>
      )}
      {friendStatus === 'pending_sent' && (
        <button className="btn btn-ghost" onClick={cancelRequest}>Cancel Request</button>
      )}
      {friendStatus === 'pending_received' && (
        <>
          <button className="btn btn-primary" onClick={acceptRequest}>Accept</button>
          <button className="btn btn-ghost" onClick={rejectRequest}>Reject</button>
        </>
      )}
      {friendStatus === 'none' && (
        <button className="btn btn-primary" onClick={sendRequest}>Add Friend</button>
      )}
      <button className="btn btn-ghost" onClick={toggleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
      <button className="btn btn-ghost" onClick={startChat}>Message</button>
      <button className="btn btn-ghost danger" onClick={() => setConfirmBlock(true)}>{isBlocked ? 'Unblock' : 'Block'}</button>

      <ConfirmDialog open={confirmUnfriend} title="Remove friend?" message="You'll need to send a new request to reconnect."
        confirmLabel="Remove" danger onConfirm={unfriend} onCancel={() => setConfirmUnfriend(false)} />
      <ConfirmDialog open={confirmBlock} title={isBlocked ? 'Unblock user?' : 'Block user?'}
        message={isBlocked ? 'They will be able to interact with you again.' : 'They won\u2019t be able to message you or see your profile.'}
        confirmLabel={isBlocked ? 'Unblock' : 'Block'} danger onConfirm={toggleBlock} onCancel={() => setConfirmBlock(false)} />
    </div>
  );
}

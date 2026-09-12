import { push, ref, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';

// Writes community activity into notifications/{targetUid}/{pushId}.
// type: 'friend_request' | 'friend_accept' | 'follow' | 'reaction' | 'comment' | 'reply' | 'message' | 'group_invite'
export function notify(targetUid, payload) {
  if (!targetUid) return;
  const notifRef = ref(db, `notifications/${targetUid}`);
  return push(notifRef, {
    ...payload,
    createdAt: serverTimestamp(),
    read: false
  });
}

export function notifyMessage(targetUid, payload) {
  if (!targetUid) return;
  return push(ref(db, `messageNotifications/${targetUid}`), {
    ...payload,
    createdAt: serverTimestamp(),
    read: false
  });
}

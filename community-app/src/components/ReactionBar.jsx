import { useEffect, useState, useRef } from 'react';
import { ref, onValue, set, remove, runTransaction } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { notify } from '../utils/notify';

export const REACTIONS = {
  like: '👍',
  love: '❤️',
  haha: '😂',
  wow: '😮',
  sad: '😢',
  angry: '😡'
};

// targetPath: e.g. `reactions/${postId}` or `commentReactions/${commentId}`
// countPath: path to the numeric counter to keep in sync, e.g. `posts/${postId}/reactionsCount`
export default function ReactionBar({ targetPath, countPath, ownerUid, notifyPayload }) {
  const { user } = useAuth();
  const [reactions, setReactions] = useState({});
  const [showPicker, setShowPicker] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const r = ref(db, targetPath);
    const unsub = onValue(r, (snap) => setReactions(snap.val() || {}));
    return unsub;
  }, [targetPath]);

  const myReaction = user ? reactions[user.uid]?.type : null;
  const counts = {};
  Object.values(reactions).forEach((r) => {
    counts[r.type] = (counts[r.type] || 0) + 1;
  });
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  async function react(type) {
    if (!user) return;
    const myRef = ref(db, `${targetPath}/${user.uid}`);
    const wasReacted = !!myReaction;
    if (myReaction === type) {
      await remove(myRef);
      if (countPath) await runTransaction(ref(db, countPath), (c) => Math.max(0, (c || 0) - 1));
    } else {
      await set(myRef, { type, createdAt: Date.now() });
      if (!wasReacted && countPath) {
        await runTransaction(ref(db, countPath), (c) => (c || 0) + 1);
      }
      if (ownerUid && ownerUid !== user.uid) {
        notify(ownerUid, { type: 'reaction', fromUid: user.uid, ...notifyPayload });
      }
    }
    setShowPicker(false);
  }

  function openPicker() {
    clearTimeout(timeoutRef.current);
    setShowPicker(true);
  }
  function closePickerDelayed() {
    timeoutRef.current = setTimeout(() => setShowPicker(false), 300);
  }

  return (
    <div className="reaction-bar">
      <div className="reaction-summary">
        {Object.keys(counts).length > 0 && (
          <span>
            {Object.entries(counts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([type]) => REACTIONS[type])
              .join(' ')}{' '}
            {total}
          </span>
        )}
      </div>
      <div className="reaction-trigger-wrap" onMouseEnter={openPicker} onMouseLeave={closePickerDelayed}>
        <button
          className={`reaction-trigger${myReaction ? ' active' : ''}`}
          onClick={() => react(myReaction || 'like')}
        >
          {myReaction ? `${REACTIONS[myReaction]} ${myReaction[0].toUpperCase()}${myReaction.slice(1)}` : '👍 Like'}
        </button>
        {showPicker && (
          <div className="reaction-picker">
            {Object.entries(REACTIONS).map(([type, emoji]) => (
              <button key={type} className="reaction-option" onClick={() => react(type)} title={type}>
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

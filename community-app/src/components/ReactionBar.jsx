import { useEffect, useState, useRef } from 'react';
import { ref, onValue, set, remove, runTransaction } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { notify } from '../utils/notify';

export const REACTIONS = {
  like: '👍',
  love: '❤️',
  care: '🥰',
  haha: '🤣',
  wow: '😮',
  sad: '😢',
  angry: '😡'
};

function ReactionIcon({ type, size = 24 }) {
  return (
    <span
      className={type === 'like' ? 'reaction-like-badge' : 'reaction-emoji-text'}
      style={type === 'like' ? { width: size, height: size, fontSize: size * 0.72 } : { fontSize: size }}
      role="img"
      aria-label={`${type} reaction`}
    >
      {REACTIONS[type]}
    </span>
  );
}

// targetPath: e.g. `reactions/${postId}` or `commentReactions/${commentId}`
// countPath: path to the numeric counter to keep in sync, e.g. `posts/${postId}/reactionsCount`
export default function ReactionBar({ targetPath, countPath, ownerUid, notifyPayload }) {
  const { user } = useAuth();
  const [reactions, setReactions] = useState({});
  const [showPicker, setShowPicker] = useState(false);
  const [pickerClosing, setPickerClosing] = useState(false);
  const [reactionPulse, setReactionPulse] = useState(false);
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
    closePicker();
    setReactionPulse(false);
    requestAnimationFrame(() => setReactionPulse(true));
    window.setTimeout(() => setReactionPulse(false), 220);
  }

  function openPicker() {
    clearTimeout(timeoutRef.current);
    setPickerClosing(false);
    setShowPicker(true);
  }

  function closePicker(delay = 150) {
    clearTimeout(timeoutRef.current);
    if (!showPicker) return;
    setPickerClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setShowPicker(false);
      setPickerClosing(false);
    }, delay);
  }

  function closePickerDelayed() {
    closePicker();
  }

  function handleTriggerClick() {
    if (showPicker) {
      closePicker(0);
      return;
    }
    if (myReaction) {
      react(myReaction);
      return;
    }
    openPicker();
  }

  return (
    <div className="reaction-bar">
      <div className="reaction-summary">
        {Object.keys(counts).length > 0 && (
          <span>
            {Object.entries(counts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([type]) => <ReactionIcon key={type} type={type} size={18} />)}{' '}
            {total}
          </span>
        )}
      </div>
      <div className="reaction-trigger-wrap" onMouseEnter={openPicker} onMouseLeave={closePickerDelayed}>
        <button
          type="button"
          className={`reaction-trigger reaction-${myReaction || 'like'}${myReaction ? ' active' : ''}${reactionPulse ? ' reaction-pulse' : ''}`}
          onClick={handleTriggerClick}
        >
          <ReactionIcon type={myReaction || 'like'} size={22} />
          <span>{myReaction ? `${myReaction[0].toUpperCase()}${myReaction.slice(1)}` : 'Like'}</span>
        </button>
        {showPicker && (
          <div className={`reaction-picker${pickerClosing ? ' is-closing' : ''}`} role="toolbar" aria-label="Choose a reaction">
            {Object.keys(REACTIONS).map((type, index) => (
              <button key={type} type="button" className="reaction-option" style={{ '--reaction-delay': `${index * 26}ms` }} onClick={() => react(type)} title={type} aria-label={type}>
                <ReactionIcon type={type} size={42} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

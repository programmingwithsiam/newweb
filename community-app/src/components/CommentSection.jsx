import { useEffect, useState } from 'react';
import { ref, push, onValue, update, remove, serverTimestamp, runTransaction } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/helpers';
import { notify } from '../utils/notify';
import ReactionBar from './ReactionBar';
import ConfirmDialog from './ConfirmDialog';

function CommentItem({ postId, postOwnerUid, comment, id, onReply }) {
  const { user, profile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const isMine = user?.uid === comment.uid;

  async function saveEdit() {
    await update(ref(db, `comments/${postId}/${id}`), { text, editedAt: serverTimestamp() });
    setEditing(false);
  }

  async function doDelete() {
    try {
      await remove(ref(db, `comments/${postId}/${id}`));
      await runTransaction(ref(db, `posts/${postId}/commentCount`), (c) => Math.max(0, (c || 0) - 1));
    } finally {
      setConfirmDelete(false);
    }
  }

  return (
    <div className={comment.parentId ? 'comment comment-reply' : 'comment'}>
      <img className="avatar-sm" src={comment.authorPhoto || '/default-avatar.png'} alt="" />
      <div className="comment-body">
        <div className="comment-bubble">
          <strong>{comment.authorName}</strong>
          {editing ? (
            <div className="comment-edit">
              <input value={text} onChange={(e) => setText(e.target.value)} />
              <button className="btn btn-sm" onClick={saveEdit}>Save</button>
              <button className="btn btn-sm btn-ghost" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          ) : (
            <p>{comment.text}{comment.editedAt ? <span className="muted"> (edited)</span> : null}</p>
          )}
        </div>
        <div className="comment-meta">
          <span className="muted">{timeAgo(comment.createdAt)}</span>
          <ReactionBar
            targetPath={`commentReactions/${id}`}
            ownerUid={comment.uid}
            notifyPayload={{ postId, commentId: id }}
          />
          {!comment.parentId && (
            <button className="link-btn" onClick={() => onReply(id, comment.authorName)}>Reply</button>
          )}
          {isMine && !editing && (
            <>
              <button className="link-btn" onClick={() => setEditing(true)}>Edit</button>
              <button className="link-btn danger" onClick={() => setConfirmDelete(true)}>Delete</button>
            </>
          )}
        </div>
      </div>
      <ConfirmDialog
        open={confirmDelete}
        title="Delete comment?"
        message="This can't be undone."
        confirmLabel="Delete"
        danger
        onConfirm={doDelete}
        onCancel={() => setConfirmDelete(false)}
      />
    </div>
  );
}

export default function CommentSection({ postId, postOwnerUid }) {
  const { user, profile } = useAuth();
  const [comments, setComments] = useState({});
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState(null); // { id, name }

  useEffect(() => {
    const r = ref(db, `comments/${postId}`);
    const unsub = onValue(r, (snap) => setComments(snap.val() || {}));
    return unsub;
  }, [postId]);

  async function submit(e) {
    e.preventDefault();
    if (!text.trim() || !user) return;
    const newRef = push(ref(db, `comments/${postId}`));
    await update(newRef, {
      uid: user.uid,
      authorName: profile?.fullName || 'User',
      authorPhoto: profile?.photoURL || '',
      text: text.trim(),
      parentId: replyTo?.id || null,
      createdAt: serverTimestamp()
    });
    await runTransaction(ref(db, `posts/${postId}/commentCount`), (c) => (c || 0) + 1);
    if (postOwnerUid && postOwnerUid !== user.uid) {
      notify(postOwnerUid, { type: 'comment', fromUid: user.uid, postId });
    }
    if (replyTo && replyTo.parentUid && replyTo.parentUid !== user.uid) {
      notify(replyTo.parentUid, { type: 'reply', fromUid: user.uid, postId });
    }
    setText('');
    setReplyTo(null);
  }

  const top = Object.entries(comments).filter(([, c]) => !c.parentId);
  const repliesFor = (id) => Object.entries(comments).filter(([, c]) => c.parentId === id);

  return (
    <div className="comment-section">
      {top
        .sort((a, b) => (a[1].createdAt || 0) - (b[1].createdAt || 0))
        .map(([id, c]) => (
          <div key={id}>
            <CommentItem postId={postId} postOwnerUid={postOwnerUid} comment={c} id={id}
              onReply={(rid, name) => setReplyTo({ id: rid, name, parentUid: c.uid })} />
            {repliesFor(id).map(([rid, rc]) => (
              <CommentItem key={rid} postId={postId} postOwnerUid={postOwnerUid} comment={rc} id={rid}
                onReply={() => setReplyTo({ id, name: c.authorName, parentUid: c.uid })} />
            ))}
          </div>
        ))}
      <form className="comment-form" onSubmit={submit}>
        {replyTo && (
          <div className="reply-chip">
            Replying to {replyTo.name}
            <button type="button" onClick={() => setReplyTo(null)}>✕</button>
          </div>
        )}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className="btn btn-primary btn-sm" type="submit">Post</button>
      </form>
    </div>
  );
}

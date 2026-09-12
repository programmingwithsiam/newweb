import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue, update, remove, set, get } from 'firebase/database';
import { db } from '../firebase/config';
import { uploadCommunityImage } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

function MemberRow({ uid, role, isAdmin, myUid, onPromote, onDemote, onRemove }) {
  const [p, setP] = useState(null);
  useEffect(() => {
    const unsub = onValue(ref(db, `users/${uid}`), (snap) => setP(snap.val()));
    return unsub;
  }, [uid]);
  if (!p) return null;
  return (
    <div className="member-row">
      <img className="avatar-sm" src={p.photoURL || '/default-avatar.png'} alt="" />
      <span>{p.fullName}{role === 'admin' && <span className="tag"> admin</span>}</span>
      {isAdmin && uid !== myUid && (
        <div className="member-actions">
          {role === 'admin' ? (
            <button className="link-btn" onClick={() => onDemote(uid)}>Demote</button>
          ) : (
            <button className="link-btn" onClick={() => onPromote(uid)}>Promote</button>
          )}
          <button className="link-btn danger" onClick={() => onRemove(uid)}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default function GroupInfoPanel({ convId, conv, onClose }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [members, setMembers] = useState({});
  const [addUid, setAddUid] = useState('');

  useEffect(() => {
    const unsub = onValue(ref(db, `groupMembers/${convId}`), (snap) => setMembers(snap.val() || {}));
    return unsub;
  }, [convId]);

  const myRole = members[user.uid]?.role;
  const isAdmin = myRole === 'admin';

  async function changeGroupPhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 6 * 1024 * 1024) {
      showToast('Image is too large (max 6MB)', 'error');
      return;
    }
    try {
      const url = await uploadCommunityImage(file, `groupPhotos/${convId}`);
      await update(ref(db, `conversations/${convId}`), { photoURL: url });
    } catch (err) {
      showToast(`Upload failed: ${err.message}`, 'error');
    }
  }

  async function promote(uid) {
    await update(ref(db, `groupMembers/${convId}/${uid}`), { role: 'admin' });
  }
  async function demote(uid) {
    await update(ref(db, `groupMembers/${convId}/${uid}`), { role: 'member' });
  }
  async function removeMember(uid) {
    // Order matters: userConversations/{uid}/{convId} can only be written by
    // someone who is still a member of the conversation (per the security
    // rules), so clean that up BEFORE revoking membership itself - otherwise
    // the final step would be denied and leave a dangling, unreadable
    // conversation entry behind.
    await remove(ref(db, `userConversations/${uid}/${convId}`));
    await remove(ref(db, `groupMembers/${convId}/${uid}`));
    await remove(ref(db, `conversations/${convId}/members/${uid}`));
  }
  async function addMember() {
    if (!addUid.trim()) return;
    const uid = addUid.trim();
    const exists = await get(ref(db, `users/${uid}`));
    if (!exists.exists()) {
      showToast('No user found with that UID', 'error');
      return;
    }
    await set(ref(db, `groupMembers/${convId}/${uid}`), { role: 'member', joinedAt: Date.now() });
    await set(ref(db, `conversations/${convId}/members/${uid}`), true);
    await set(ref(db, `userConversations/${uid}/${convId}`), { unreadCount: 0, lastMessageAt: Date.now() });
    setAddUid('');
    showToast('Member added', 'success');
  }
  async function leaveGroup() {
    await removeMember(user.uid);
    onClose();
    navigate('/messenger');
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3>{conv.name}</h3>
        <label className="btn btn-ghost btn-sm">
          Change group photo
          <input type="file" accept="image/*" hidden onChange={changeGroupPhoto} />
        </label>
        <h4>Members ({Object.keys(members).length})</h4>
        <div className="member-list">
          {Object.entries(members).map(([uid, m]) => (
            <MemberRow key={uid} uid={uid} role={m.role} isAdmin={isAdmin} myUid={user.uid}
              onPromote={promote} onDemote={demote} onRemove={removeMember} />
          ))}
        </div>
        {isAdmin && (
          <div className="add-member-row">
            <input placeholder="User ID to add" value={addUid} onChange={(e) => setAddUid(e.target.value)} />
            <button className="btn btn-sm btn-primary" onClick={addMember}>Add</button>
          </div>
        )}
        <div className="modal-actions">
          <button className="btn btn-ghost danger" onClick={leaveGroup}>Leave Group</button>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

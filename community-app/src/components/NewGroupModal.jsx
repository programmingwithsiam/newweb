import { useState } from 'react';
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import UserSearchPicker from './UserSearchPicker';

export default function NewGroupModal({ onClose, onCreated }) {
  const { user, profile } = useAuth();
  const [name, setName] = useState('');
  const [picked, setPicked] = useState([]);

  function addUser(u) {
    if (picked.find((p) => p.uid === u.uid)) return;
    setPicked((p) => [...p, u]);
  }
  function removeUser(uid) {
    setPicked((p) => p.filter((u) => u.uid !== uid));
  }

  async function create() {
    if (!name.trim() || picked.length === 0) return;
    const convRef = push(ref(db, 'conversations'));
    const members = { [user.uid]: true };
    picked.forEach((u) => (members[u.uid] = true));
    await set(convRef, {
      type: 'group',
      name: name.trim(),
      photoURL: '',
      ownerId: user.uid,
      members,
      createdAt: serverTimestamp()
    });
    await set(ref(db, `groupMembers/${convRef.key}/${user.uid}`), { role: 'admin', joinedAt: Date.now() });
    for (const u of picked) {
      await set(ref(db, `groupMembers/${convRef.key}/${u.uid}`), { role: 'member', joinedAt: Date.now() });
      await set(ref(db, `userConversations/${u.uid}/${convRef.key}`), { unreadCount: 0, lastMessageAt: Date.now() });
    }
    await set(ref(db, `userConversations/${user.uid}/${convRef.key}`), { unreadCount: 0, lastMessageAt: Date.now() });
    onCreated(convRef.key);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3>New group</h3>
        <input placeholder="Group name" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="picked-chips">
          {picked.map((u) => (
            <span key={u.uid} className="chip">{u.fullName} <button onClick={() => removeUser(u.uid)}>✕</button></span>
          ))}
        </div>
        <UserSearchPicker onPick={addUser} excludeUids={[user.uid, ...picked.map((p) => p.uid)]} />
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={create} disabled={!name.trim() || picked.length === 0}>Create</button>
        </div>
      </div>
    </div>
  );
}

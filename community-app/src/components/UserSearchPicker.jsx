import { useState } from 'react';
import { ref, query, orderByChild, startAt, endAt, limitToFirst, get } from 'firebase/database';
import { db } from '../firebase/config';

export default function UserSearchPicker({ onPick, excludeUids = [] }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [busy, setBusy] = useState(false);

  async function search(value) {
    setQ(value);
    const term = value.trim().toLowerCase();
    if (!term) return setResults([]);
    setBusy(true);
    const r = query(
      ref(db, 'users'),
      orderByChild('usernameLower'),
      startAt(term),
      endAt(term + '\uf8ff'),
      limitToFirst(10)
    );
    const snap = await get(r);
    const list = [];
    snap.forEach((child) => {
      if (!excludeUids.includes(child.key)) list.push({ uid: child.key, ...child.val() });
    });
    setResults(list);
    setBusy(false);
  }

  return (
    <div className="user-search-picker">
      <input placeholder="Search by username..." value={q} onChange={(e) => search(e.target.value)} />
      {busy && <p className="muted small">Searching...</p>}
      <div className="user-search-results">
        {results.map((u) => (
          <button key={u.uid} className="user-search-row" onClick={() => onPick(u)}>
            <img className="avatar-sm" src={u.photoURL || '/default-avatar.png'} alt="" />
            <span>{u.fullName} <span className="muted">@{u.username}</span></span>
          </button>
        ))}
      </div>
    </div>
  );
}

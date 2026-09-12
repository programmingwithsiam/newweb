import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ref, query, limitToFirst, get } from 'firebase/database';
import { db } from '../firebase/config';
import PostCard from '../components/PostCard';

export default function Search() {
  const [params] = useSearchParams();
  const initialQ = params.get('q') || '';
  const [q, setQ] = useState(initialQ);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialQ) runSearch(initialQ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQ]);

  async function runSearch(term) {
    const clean = term.trim();
    if (!clean) {
      setUsers([]);
      setPosts([]);
      return;
    }
    if (clean.startsWith('#')) {
      navigate(`/hashtag/${clean.slice(1).toLowerCase()}`);
      return;
    }
    const lower = clean.toLowerCase();

    const userSnap = await get(ref(db, 'users'));
    const foundUsers = [];
    userSnap.forEach((c) => {
      const user = c.val() || {};
      const searchable = `${user.fullName || ''} ${user.username || ''} ${user.usernameLower || ''}`.toLowerCase();
      if (searchable.includes(lower) && foundUsers.length < 15) {
        foundUsers.push({ uid: c.key, ...user });
      }
    });
    setUsers(foundUsers);

    // Best-effort text search over recent public posts (Realtime Database has
    // no full-text index, so this scans recent public posts client-side -
    // fine at hobby scale, but for large post volumes a dedicated search
    // service like Algolia/Typesense would be the production answer).
    const publicSnap = await get(query(ref(db, 'publicPostsIndex'), limitToFirst(200)));
    const found = [];
    if (publicSnap.exists()) {
      const ids = Object.keys(publicSnap.val());
      for (const id of ids) {
        const pSnap = await get(ref(db, `posts/${id}`));
        if (pSnap.exists() && (pSnap.val().text || '').toLowerCase().includes(lower)) {
          found.push([id, pSnap.val()]);
        }
      }
    }
    setPosts(found);
  }

  function submit(e) {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q)}`);
    runSearch(q);
  }

  return (
    <div className="search-page">
      <form onSubmit={submit} className="search-form">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search users, posts, #hashtags" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      {users.length > 0 && (
        <section>
          <h3>People</h3>
          <div className="friends-grid">
            {users.map((u) => (
              <a key={u.uid} className="friend-card" href={`/profile/${u.uid}`}>
                <img src={u.photoURL || '/default-avatar.png'} alt="" />
                <span>{u.fullName}<br /><span className="muted small">@{u.username}</span></span>
              </a>
            ))}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <h3>Posts</h3>
          <div className="feed">
            {posts.map(([id, post]) => <PostCard key={id} postId={id} post={post} />)}
          </div>
        </section>
      )}

      {initialQ && users.length === 0 && posts.length === 0 && (
        <div className="empty-state"><p>No results for "{initialQ}"</p></div>
      )}
    </div>
  );
}

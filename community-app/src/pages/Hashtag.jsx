import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Hashtag() {
  const { tag } = useParams();
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts({});
    setLoading(true);
    let unsubs = [];
    async function load() {
      const idsSnap = await get(ref(db, `hashtags/${tag.toLowerCase()}`));
      if (idsSnap.exists()) {
        unsubs = Object.keys(idsSnap.val()).map((id) =>
          onValue(ref(db, `posts/${id}`), (snap) => {
            if (snap.exists()) setPosts((p) => ({ ...p, [id]: snap.val() }));
          })
        );
      }
      setLoading(false);
    }
    load();
    return () => unsubs.forEach((u) => u && u());
  }, [tag]);

  const ordered = Object.entries(posts).sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));

  return (
    <div className="feed">
      <h2>#{tag}</h2>
      {loading && <LoadingSpinner label="Loading posts..." />}
      {!loading && ordered.length === 0 && <div className="empty-state"><p>No posts with this hashtag yet.</p></div>}
      {ordered.map(([id, post]) => <PostCard key={id} postId={id} post={post} />)}
    </div>
  );
}

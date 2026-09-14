import { useEffect, useState, useCallback } from 'react';
import { ref, onValue, get, query, orderByChild, limitToLast } from 'firebase/database';
import { MessageSquareText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import StoriesStrip from '../components/StoriesStrip';

// NOTE on architecture: Realtime Database can't do a single secure query that
// mixes "public OR mine OR my-friends'-friends-only" posts, because broad
// list reads are authorized (or not) as a whole at the queried path. So the
// feed is assembled from three cheap, properly-secured index reads instead:
//   1) publicPostsIndex - global public posts (indexed by time)
//   2) userPosts/{myUid} - my own posts (any privacy)
//   3) userPosts/{friendUid} for each friend - their posts (rules filter out
//      anything that isn't public/friends-visible when we fetch the post)
export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [postIds, setPostIds] = useState(new Set());
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [feedError, setFeedError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const loadPost = useCallback((postId) => {
    const r = ref(db, `posts/${postId}`);
    return onValue(r, (snap) => {
      if (snap.exists()) {
        setPosts((p) => ({ ...p, [postId]: snap.val() }));
      } else {
        setPosts((p) => {
          const next = { ...p };
          delete next[postId];
          return next;
        });
      }
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    let unsubscribers = [];
    setLoading(true);
    setFeedError('');
    const feedTimer = setTimeout(() => setLoading(false), 900);

    async function assemble() {
      try {
        const ids = new Set();

        const publicSnap = await get(query(ref(db, 'publicPostsIndex'), orderByChild('createdAt'), limitToLast(40)));
        if (publicSnap.exists()) Object.keys(publicSnap.val()).forEach((id) => ids.add(id));

        const ownSnap = await get(ref(db, `userPosts/${user.uid}`));
        if (ownSnap.exists()) Object.keys(ownSnap.val()).forEach((id) => ids.add(id));

        const friendsSnap = await get(ref(db, `friends/${user.uid}`));
        if (friendsSnap.exists()) {
          const friendUids = Object.keys(friendsSnap.val());
          for (const fUid of friendUids) {
            const fPosts = await get(ref(db, `userPosts/${fUid}`));
            if (fPosts.exists()) Object.keys(fPosts.val()).forEach((id) => ids.add(id));
          }
        }

        setPostIds(ids);
        unsubscribers = Array.from(ids).map(loadPost);
      } catch (err) {
        console.warn('Community feed unavailable:', err);
        setFeedError('Feed could not load. Check your connection and try again.');
      } finally {
        setLoading(false);
      }
    }

    assemble();
    return () => {
      clearTimeout(feedTimer);
      unsubscribers.forEach((u) => u && u());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, refreshKey]);

  const ordered = Object.entries(posts)
    .filter(([id]) => postIds.has(id))
    .sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));

  return (
    <div className="feed">
      <CreatePost />
      <StoriesStrip />
      {loading && <LoadingSpinner label="Loading your feed..." />}
      {!loading && feedError && (
        <div className="empty-state feed-error">
          <p>{feedError}</p>
          <button className="btn btn-ghost" type="button" onClick={() => setRefreshKey((key) => key + 1)}>
            Retry
          </button>
        </div>
      )}
      {!loading && !feedError && ordered.length === 0 && (
        <div className="empty-state">
          <p>Your feed is empty.</p>
          <p className="muted">Add friends or write your first post to get started.</p>
        </div>
      )}
      {ordered.map(([id, post]) => (
        <PostCard key={id} postId={id} post={post} />
      ))}
    </div>
  );
}

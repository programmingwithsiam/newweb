import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    const unsub = onValue(
      ref(db, `posts/${postId}`),
      (snap) => setPost(snap.exists() ? snap.val() : null),
      // If the post is private/friends-only and this viewer isn't allowed to
      // read it, the security rules deny the request - without this handler
      // the request would just hang silently and the spinner never resolves.
      () => setPost(null)
    );
    return unsub;
  }, [postId]);

  if (post === undefined) return <LoadingSpinner full label="Loading post..." />;
  if (post === null) return <div className="empty-state"><p>This post isn't available. It may be private or deleted.</p></div>;

  return (
    <div className="feed">
      <PostCard postId={postId} post={post} />
    </div>
  );
}

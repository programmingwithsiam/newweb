import { useNavigate } from 'react-router-dom';
import CreatePost from '../components/CreatePost';

export default function CreatePostPage() {
  const navigate = useNavigate();
  return (
    <div className="feed">
      <h2>Create Post</h2>
      <CreatePost onPosted={() => navigate('/')} />
    </div>
  );
}

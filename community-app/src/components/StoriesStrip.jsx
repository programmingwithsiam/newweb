import { Plus, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const sampleStories = [
  { id: 1, name: 'Rafikul', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Suhani', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Siam', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'Aditi', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
  { id: 5, name: 'Jahid', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80' }
];

export default function StoriesStrip() {
  const { profile } = useAuth();
  const avatar = profile?.photoURL || '';

  return (
    <section className="stories-strip" aria-label="Stories">
      <div className="stories-heading">
        <div><span className="stories-kicker"><Sparkles size={13} /> COMMUNITY MOMENTS</span><h2>Stories</h2></div>
        <a href="/stories.html" className="stories-see-all">View all</a>
      </div>
      <div className="stories-scroller">
        <button className="story-create-card" type="button" onClick={() => window.location.assign('/stories.html?mode=create')} aria-label="Create a story">
          <span className={`story-create-media${avatar ? ' has-avatar' : ''}`} style={avatar ? { backgroundImage: `url(${avatar})` } : undefined} />
          <span className="story-create-footer"><span className="story-create-plus"><Plus size={21} /></span><strong>Create Story</strong></span>
        </button>

        {sampleStories.map((story) => (
          <button className="story-card" type="button" key={story.id} aria-label={`Open story from ${story.name}`}>
            <span className="story-card-image" style={{ backgroundImage: `url(${story.image})` }} />
            <span className="story-card-name">{story.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

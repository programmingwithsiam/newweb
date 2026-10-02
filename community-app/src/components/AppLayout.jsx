import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import ConversationList from './ConversationList';
import { useAuth } from '../context/AuthContext';
import { UserRound, ChevronRight, Megaphone } from 'lucide-react';

export default function AppLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isMessengerRoute = pathname.startsWith('/messenger');

  return (
    <div className="app-shell">
      <Navbar onMenu={() => setMobileNavOpen(true)} />
      <div className={`app-body${isMessengerRoute ? ' messenger-layout' : ''}`}>
        {!isMessengerRoute && <Sidebar mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />}
        <main className="app-main">
          <Outlet />
        </main>
        {!isMessengerRoute && (
          <div className="app-right-rail trending-rail">
            <div className="rail-stack">
              <section className="rail-card friend-requests-card">
                <div className="rail-card-heading"><h4>Friend Requests</h4><a href="/community/search?view=friends">See all</a></div>
                <div className="friend-request-empty"><span><UserRound size={18} /></span><p>No new requests right now.</p></div>
              </section>
              <section className="rail-card cwsfb-highlights">
                <div className="rail-card-heading"><span className="rail-eyebrow">HIGHLIGHTS</span><Megaphone size={16} /></div>
                <h4>Community highlights</h4>
                <p className="muted">Stories, ideas, and recent posts from CodeWithSiam.</p>
                <a href="/community/search?view=reels">Explore Reels</a>
              </section>
              <section className="rail-card cwsfb-birthdays">
                <span className="rail-eyebrow">TODAY</span>
                <h4>Birthdays</h4>
                <p className="muted">No birthdays today.</p>
              </section>
              <section className="rail-card cwsfb-contacts">
                <div className="rail-card-heading"><h4>Contacts</h4></div>
                {user ? (
                  <ConversationList activeId="" onSelect={(convId) => navigate(`/messenger/${convId}`)} />
                ) : (
                  <p className="muted">Sign in to see your contacts.</p>
                )}
              </section>
              <section className="rail-card sponsored-card">
                <div className="rail-card-heading"><span className="rail-eyebrow">COMMUNITY PICKS</span><Megaphone size={16} /></div>
                <div className="sponsored-placeholder"><span className="sponsored-placeholder-image" /><div><strong>Build your next idea in public</strong><small>CodeWithSiam community</small></div><ChevronRight size={16} /></div>
              </section>
              <section className="rail-card">
                <span className="rail-eyebrow">DISCOVER</span>
                <h4>Trending hashtags</h4>
                <p className="muted">Follow the conversations shaping your community.</p>
                <div className="rail-tags"><span>#Python</span><span>#Programming</span><span>#AI</span><span>#MyCommunity</span></div>
              </section>
              <section className="rail-card">
                <span className="rail-eyebrow">PEOPLE</span>
                <h4>People you may know</h4>
                <p className="muted">Discover learners and builders with similar interests.</p>
                <button className="rail-action" type="button">Find people</button>
              </section>
              <section className="rail-card">
                <span className="rail-eyebrow">YOUR SPACE</span>
                <h4>Suggested groups</h4>
                <p className="muted">Join focused conversations around code, AI, and projects.</p>
                <button className="rail-action" type="button">Explore groups</button>
              </section>
            </div>
          </div>
        )}
      </div>
      {!isMessengerRoute && <BottomNav onMenu={() => setMobileNavOpen(true)} />}
    </div>
  );
}

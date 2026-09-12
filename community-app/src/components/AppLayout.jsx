import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-main">
          <Outlet />
        </main>
        <div className="app-right-rail">
          <div className="card">
            <h4>Trending hashtags</h4>
            <p className="muted">Follow #Python, #Programming, #AI, #MyCommunity</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

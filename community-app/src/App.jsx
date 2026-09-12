import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messenger from './pages/Messenger';
import Notifications from './pages/Notifications';
import Search from './pages/Search';
import Hashtag from './pages/Hashtag';
import Settings from './pages/Settings';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter basename="/community">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:uid" element={<Profile />} />
                <Route path="/messenger" element={<Messenger />} />
                <Route path="/messenger/:convId" element={<Messenger />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/message-notifications" element={<Notifications kind="messages" />} />
                <Route path="/search" element={<Search />} />
                <Route path="/hashtag/:tag" element={<Hashtag />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/post/:postId" element={<PostPage />} />
                <Route path="/create" element={<CreatePostPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

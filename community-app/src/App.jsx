import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';

import Login from './pages/Login';
import LoadingSpinner from './components/LoadingSpinner';

const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Messenger = lazy(() => import('./pages/Messenger'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Search = lazy(() => import('./pages/Search'));
const Hashtag = lazy(() => import('./pages/Hashtag'));
const Settings = lazy(() => import('./pages/Settings'));
const PostPage = lazy(() => import('./pages/PostPage'));
const CreatePostPage = lazy(() => import('./pages/CreatePostPage'));

function LazyPage({ children }) {
  return <Suspense fallback={<LoadingSpinner full label="Loading Community..." />}>{children}</Suspense>;
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter basename="/community">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<LazyPage><Signup /></LazyPage>} />
              <Route path="/forgot-password" element={<LazyPage><ForgotPassword /></LazyPage>} />

              <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                <Route path="/" element={<LazyPage><Home /></LazyPage>} />
                <Route path="/index.html" element={<LazyPage><Home /></LazyPage>} />
                <Route path="/profile/:uid" element={<LazyPage><Profile /></LazyPage>} />
                <Route path="/messenger" element={<LazyPage><Messenger /></LazyPage>} />
                <Route path="/messenger/:convId" element={<LazyPage><Messenger /></LazyPage>} />
                <Route path="/notifications" element={<LazyPage><Notifications /></LazyPage>} />
                <Route path="/message-notifications" element={<LazyPage><Notifications kind="messages" /></LazyPage>} />
                <Route path="/search" element={<LazyPage><Search /></LazyPage>} />
                <Route path="/hashtag/:tag" element={<LazyPage><Hashtag /></LazyPage>} />
                <Route path="/settings" element={<LazyPage><Settings /></LazyPage>} />
                <Route path="/post/:postId" element={<LazyPage><PostPage /></LazyPage>} />
                <Route path="/create" element={<LazyPage><CreatePostPage /></LazyPage>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

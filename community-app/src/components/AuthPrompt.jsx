import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthPrompt() {
    const { authPrompt, dismissAuthPrompt } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    if (!authPrompt) return null;

    function continueTo(path) {
        const returnTo = `${location.pathname}${location.search}${location.hash}`;
        dismissAuthPrompt();
        navigate(path, { state: { returnTo } });
    }

    return (
        <div className="modal-overlay" role="presentation" onClick={dismissAuthPrompt}>
            <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="auth-prompt-title" onClick={(event) => event.stopPropagation()}>
                <h2 id="auth-prompt-title">Sign in to continue</h2>
                <p>{authPrompt}</p>
                <div className="auth-links">
                    <button className="btn btn-primary" type="button" onClick={() => continueTo('/login')}>Sign In</button>
                    <button className="btn btn-ghost" type="button" onClick={() => continueTo('/signup')}>Create Account</button>
                    <button className="link-btn" type="button" onClick={dismissAuthPrompt}>Continue browsing</button>
                </div>
            </section>
        </div>
    );
}
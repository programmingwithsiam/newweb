import { useAuth } from '../context/AuthContext';
import { redirectToAuthPrompt } from '../../../assets/js/auth.js';

export default function AuthPrompt() {
    const { authPrompt, dismissAuthPrompt } = useAuth();

    if (!authPrompt) return null;

    return (
        <div className="modal-overlay" role="presentation" onClick={dismissAuthPrompt}>
            <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="auth-prompt-title" onClick={(event) => event.stopPropagation()}>
                <h2 id="auth-prompt-title">Sign in to continue</h2>
                <p>{authPrompt}</p>
                <div className="auth-links">
                    <button className="btn btn-primary" type="button" onClick={() => redirectToAuthPrompt(authPrompt)}>Continue with Google</button>
                    <button className="link-btn" type="button" onClick={dismissAuthPrompt}>Continue browsing</button>
                </div>
            </section>
        </div>
    );
}
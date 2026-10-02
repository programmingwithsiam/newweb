const API_BASE_URL = (() => {
    const configured = typeof window !== 'undefined'
        ? (window.__APP_CONFIG__?.apiBaseUrl || window.__APP_CONFIG__?.apiUrl || window.CODEWITHSIAM_AUTH_API || window.CWS_API_BASE_URL)
        : undefined;
    if (configured) return configured.replace(/\/$/, '');
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        const envValue = import.meta.env.VITE_API_URL || import.meta.env.VITE_AUTH_API_URL;
        if (envValue) return envValue.replace(/\/$/, '');
    }
    return 'https://codewithsiam-api.onrender.com';
})();

async function post(path, payload) {
    if (!API_BASE_URL) {
        throw new Error('The email verification service is not configured.');
    }
    let response;
    try {
        response = await fetch(`${API_BASE_URL}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch {
        throw new Error('Cannot reach the server. Please try again later.');
    }

    const result = await response.json().catch(() => null);
    if (!response.ok || result?.success === false) {
        const message = result?.message || result?.error || `Request failed (${response.status}).`;
        if (path === '/api/auth/send-otp' && result?.code === 'EMAIL_EXISTS') {
            throw new Error('An account with this email already exists. Please log in instead.');
        }
        if (path === '/api/auth/send-otp' && result?.code === 'GOOGLE_ACCOUNT') {
            throw new Error('This account uses Google. Please continue with Google.');
        }
        if (result?.code === 'PASSWORD_TOO_SHORT') {
            throw new Error('Password must be at least 8 characters.');
        }
        if (result?.code === 'INVALID_INPUT' || result?.code === 'INVALID_EMAIL') {
            throw new Error('Please check your email and try again.');
        }
        if (result?.code === 'RESEND_COOLDOWN') {
            throw new Error('Please wait before requesting a new OTP.');
        }
        throw new Error(message);
    }
    return result || {};
}

export function startRegistration({ name, email, password }) {
    return post('/api/auth/send-otp', { name, email, password });
}

export function verifyRegistration({ email, otp, password }) {
    return post('/api/auth/verify-otp', { email, otp, password });
}

export function resendRegistrationCode({ email }) {
    return post('/api/auth/resend-otp', { email });
}

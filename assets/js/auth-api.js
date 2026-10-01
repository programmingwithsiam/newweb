const API_BASE_URL = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? 'http://localhost:3001'
    : 'https://codewithsiam-api.onrender.com';

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
        throw new Error('Cannot reach the server, try again later');
    }

    const result = await response.json().catch(() => null);
    if (!response.ok) {
        if (path === '/auth/register/start') {
            if (result?.code === 'GOOGLE_ACCOUNT_EXISTS') {
                throw new Error('This account uses Google. Please continue with Google.');
            }
            if (result?.code === 'EMAIL_ALREADY_REGISTERED') {
                throw new Error('This email is already registered. Please sign in.');
            }
            if (result?.code === 'EMAIL_VERIFICATION_PENDING') {
                throw new Error('This email already has a pending registration. Use the latest verification code to continue.');
            }
            if (result?.code === 'PASSWORD_TOO_SHORT') {
                throw new Error('Password must be at least 8 characters');
            }
            if (result?.code === 'INVALID_INPUT') {
                throw new Error('Please check your name and email and try again.');
            }
        }
        throw new Error(result?.error || result?.message || `Registration request failed (${response.status}).`);
    }
    return result || {};
}

export function startRegistration({ name, email, password }) {
    return post('/auth/register/start', { name, email, password });
}

export function verifyRegistration({ email, otp }) {
    return post('/auth/register/verify', { email, otp });
}

export function resendRegistrationCode({ email }) {
    return post('/auth/register/resend', { email });
}

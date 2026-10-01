const API_BASE_URL = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? 'http://localhost:3001'
    : 'https://YOUR-SERVICE.onrender.com';

async function post(path, payload) {
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
            if (result?.code === 'PASSWORD_TOO_SHORT') {
                throw new Error('Password must be at least 8 characters');
            }
            if (response.status === 409 || result?.code === 'REGISTRATION_REJECTED') {
                throw new Error('Unable to start registration. Check your details or try signing in.');
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

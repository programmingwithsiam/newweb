import { createHash, createHmac, randomInt, timingSafeEqual } from 'node:crypto';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import './env.js';
import { auth, database, otpHashSecret } from './firebase.js';
import { sendRegistrationCode } from './mailer.js';

const router = Router();
const OTP_LIFETIME_MS = 10 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;
const PENDING_PATH = 'authRegistrationPending';
const OTP_REQUEST_LIMIT = 5;
const OTP_WINDOW_MS = 15 * 60 * 1000;
const OTP_RESEND_LIMIT = 3;
const OTP_RESEND_WINDOW_MS = 60 * 60 * 1000;

function logStage(requestId, stage, details = {}) {
    console.info(JSON.stringify({ timestamp: new Date().toISOString(), requestId, stage, ...details }));
}

function normalizeEmail(value) {
    return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

function emailKey(email) {
    return createHash('sha256').update(email).digest('hex');
}

function otpDigest(email, otp) {
    return createHmac('sha256', otpHashSecret).update(`${email}:${otp}`).digest('hex');
}

function passwordHash(email, password) {
    return createHmac('sha256', otpHashSecret).update(`${email}:${password}`).digest('hex');
}

function equalDigest(left, right) {
    if (typeof left !== 'string' || typeof right !== 'string' || left.length !== right.length) return false;
    const leftBuffer = Buffer.from(left, 'hex');
    const rightBuffer = Buffer.from(right, 'hex');
    return leftBuffer.length === 32 && rightBuffer.length === 32 && timingSafeEqual(leftBuffer, rightBuffer);
}

function makeOtp() {
    return randomInt(0, 1_000_000).toString().padStart(6, '0');
}

function isEmailValid(email) {
    return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendSuccess(res, status, message) {
    return res.status(status).json({ success: true, ok: true, message });
}

function sendError(res, status, message, code) {
    return res.status(status).json({ success: false, message, error: message, ...(code ? { code } : {}) });
}

function registrationAccepted(res) {
    return sendSuccess(res, 202, 'OTP sent successfully');
}

function resendAccepted(res) {
    return sendSuccess(res, 202, 'OTP sent successfully');
}

function createEmailLimiter({ limit, windowMs, stage, message = 'Too many requests. Please wait and try again.' }) {
    return rateLimit({
        windowMs,
        limit,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
        keyGenerator: (req) => {
            const email = normalizeEmail(req.body?.email);
            const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown-ip';
            return email ? `email:${email}` : `ip:${String(ip)}`;
        },
        validate: false,
        handler: (req, res) => {
            logStage(req.requestId, stage, { code: 'EMAIL_RATE_LIMIT' });
            return sendError(res, 429, message, 'RATE_LIMITED');
        },
        message: { success: false, message }
    });
}

const startEmailLimit = createEmailLimiter({ limit: OTP_REQUEST_LIMIT, windowMs: OTP_WINDOW_MS, stage: 'registration_start_rate_limited', message: 'Too many OTP requests. Please wait a moment and try again.' });
const verifyEmailLimit = createEmailLimiter({ limit: 15, windowMs: OTP_WINDOW_MS, stage: 'registration_verify_rate_limited', message: 'Too many verification attempts. Please wait and try again.' });
const resendEmailLimit = createEmailLimiter({ limit: OTP_RESEND_LIMIT, windowMs: OTP_RESEND_WINDOW_MS, stage: 'registration_resend_rate_limited', message: 'Too many resend requests. Please wait before requesting another OTP.' });

async function sendOtpHandler(req, res) {
    const requestId = req.requestId;
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const email = normalizeEmail(req.body?.email);
    const password = typeof req.body?.password === 'string' ? req.body.password : '';

    logStage(requestId, 'registration_validation_started');
    if (password.length < 8) {
        logStage(requestId, 'registration_validation_failed', { code: 'PASSWORD_TOO_SHORT' });
        return sendError(res, 400, 'Password must be at least 8 characters.', 'PASSWORD_TOO_SHORT');
    }
    if (!name || name.length > 80 || !isEmailValid(email) || password.length > 128) {
        logStage(requestId, 'registration_validation_failed', { code: 'INVALID_INPUT' });
        return sendError(res, 400, 'Please check your name and email and try again.', 'INVALID_INPUT');
    }
    logStage(requestId, 'registration_validation_passed');

    const key = emailKey(email);
    const pendingRef = database.ref(`${PENDING_PATH}/${key}`);
    let originalPending = null;
    let newlyCreatedUid = null;
    try {
        const currentSnapshot = await pendingRef.get();
        const currentPending = currentSnapshot.val();
        originalPending = currentPending;
        if (currentPending?.lastSentAt && Date.now() - currentPending.lastSentAt < RESEND_COOLDOWN_MS) {
            logStage(requestId, 'registration_start_rate_limited', { code: 'RESEND_COOLDOWN' });
            return sendError(res, 429, 'Please wait before requesting a new OTP.', 'RESEND_COOLDOWN');
        }

        let existingUser = null;
        try {
            existingUser = await auth.getUserByEmail(email);
        } catch (error) {
            if (error?.code !== 'auth/user-not-found') {
                logStage(requestId, 'firebase_user_lookup_failed', { code: error?.code || 'FIREBASE_AUTH_ERROR' });
                throw error;
            }
        }

        const existingUserHasGoogle = existingUser?.providerData?.some((provider) => provider.providerId === 'google.com');
        if (existingUserHasGoogle) {
            logStage(requestId, 'registration_skipped');
            return sendError(res, 409, 'This account uses Google. Please continue with Google.', 'GOOGLE_ACCOUNT');
        }

        if (existingUser?.emailVerified) {
            logStage(requestId, 'registration_skipped');
            return sendError(res, 409, 'An account with this email already exists. Please log in instead.', 'EMAIL_EXISTS');
        }

        const otp = makeOtp();
        const now = Date.now();
        const pendingRecord = {
            uid: existingUser?.uid || null,
            name,
            email,
            passwordHash: passwordHash(email, password),
            otpHash: otpDigest(email, otp),
            expiresAt: now + OTP_LIFETIME_MS,
            attempts: 0,
            lastSentAt: now,
            status: 'pending'
        };
        await pendingRef.set(pendingRecord);
        logStage(requestId, 'registration_otp_saved');

        if (existingUser) {
            try {
                await auth.updateUser(existingUser.uid, {
                    displayName: name,
                    emailVerified: false,
                    disabled: true
                });
                logStage(requestId, 'firebase_pending_user_updated');
            } catch (error) {
                await pendingRef.transaction((current) => current?.otpHash === pendingRecord.otpHash ? (originalPending || null) : undefined).catch(() => { });
                throw error;
            }
        }

        try {
            await sendRegistrationCode({ name, email, otp });
            logStage(requestId, 'registration_email_sent');
            return registrationAccepted(res);
        } catch (error) {
            if (newlyCreatedUid) {
                await pendingRef.transaction((current) => current?.otpHash === pendingRecord.otpHash ? null : undefined).catch(() => { });
                await auth.deleteUser(newlyCreatedUid).catch((deleteError) => {
                    logStage(requestId, 'firebase_orphan_cleanup_failed', { code: deleteError?.code || 'FIREBASE_AUTH_ERROR' });
                });
                newlyCreatedUid = null;
            }
            logStage(requestId, 'registration_email_failed', { code: error?.code || 'MAIL_ERROR' });
            return sendError(res, 503, 'We could not send the OTP email right now. Please try again.', 'OTP_EMAIL_FAILED');
        }
    } catch (error) {
        if (newlyCreatedUid) {
            await auth.deleteUser(newlyCreatedUid).catch((deleteError) => {
                logStage(requestId, 'firebase_orphan_cleanup_failed', { code: deleteError?.code || 'FIREBASE_AUTH_ERROR' });
            });
        }
        const code = error?.code || 'REGISTRATION_ERROR';
        logStage(requestId, 'registration_start_failed', { code });
        return sendError(res, 500, 'Registration could not be started. Please try again.', 'REGISTRATION_START_FAILED');
    }
}

const verifyRegistrationHandler = async (req, res) => {
    const requestId = req.requestId;
    const email = normalizeEmail(req.body?.email);
    const otp = typeof req.body?.otp === 'string' ? req.body.otp.trim() : '';
    const password = typeof req.body?.password === 'string' ? req.body.password : '';
    logStage(requestId, 'registration_verification_validation_started');
    if (!isEmailValid(email) || !/^\d{6}$/.test(otp) || password.length < 8) {
        logStage(requestId, 'registration_verification_validation_failed');
        return sendError(res, 400, password.length < 8 ? 'Password must be at least 8 characters.' : 'Invalid or expired OTP', password.length < 8 ? 'PASSWORD_TOO_SHORT' : 'INVALID_OTP');
    }
    logStage(requestId, 'registration_verification_validation_passed');

    const pendingRef = database.ref(`${PENDING_PATH}/${emailKey(email)}`);
    const submittedHash = otpDigest(email, otp);
    const submittedPasswordHash = passwordHash(email, password);
    const now = Date.now();
    try {
        const transaction = await pendingRef.transaction((current) => {
            if (!current || current.status !== 'pending') return;
            if (current.expiresAt <= now) return { ...current, status: 'expired' };
            if (!current.passwordHash || !equalDigest(current.passwordHash, submittedPasswordHash)) return { ...current, status: 'invalid' };
            if (equalDigest(current.otpHash, submittedHash)) return { ...current, status: 'verifying' };
            const attempts = Number(current.attempts || 0) + 1;
            return { ...current, attempts, status: attempts >= MAX_OTP_ATTEMPTS ? 'locked' : 'pending' };
        });

        const pending = transaction.snapshot.val();
        if (!transaction.committed || !pending) {
            logStage(requestId, 'registration_verification_rejected', { reason: 'missing_or_in_progress' });
            return sendError(res, 400, 'Invalid or expired OTP', 'INVALID_OTP');
        }
        if (pending.status === 'expired' || pending.status === 'locked') {
            await pendingRef.remove();
            logStage(requestId, pending.status === 'expired' ? 'registration_code_expired' : 'registration_attempts_exhausted', {
                attempts: Number(pending.attempts || 0)
            });
            return sendError(res, 400, 'Invalid or expired OTP', pending.status === 'locked' ? 'OTP_LOCKED' : 'OTP_EXPIRED');
        }
        if (pending.status === 'invalid') {
            logStage(requestId, 'registration_password_or_code_mismatch', { attempts: Number(pending.attempts || 0) });
            return sendError(res, 400, 'Invalid or expired OTP', 'INVALID_OTP');
        }
        if (pending.status === 'pending') {
            logStage(requestId, 'registration_code_mismatch', { attempts: Number(pending.attempts || 0) });
            return sendError(res, 400, 'Invalid or expired OTP', 'INVALID_OTP');
        }

        try {
            const createdUser = await auth.createUser({
                email,
                password,
                displayName: pending.name || email.split('@')[0],
                emailVerified: true,
                disabled: false
            });
            await pendingRef.remove();
            logStage(requestId, 'registration_verified', { uid: createdUser.uid });
            return sendSuccess(res, 200, 'Email verified successfully');
        } catch (error) {
            await pendingRef.transaction((current) => current?.status === 'verifying' ? { ...current, status: 'pending' } : undefined).catch(() => { });
            if (error?.code === 'auth/email-already-exists') {
                return sendError(res, 409, 'An account with this email already exists. Please log in instead.', 'EMAIL_EXISTS');
            }
            logStage(requestId, 'registration_user_enable_failed', { code: error?.code || 'FIREBASE_AUTH_ERROR' });
            return sendError(res, 503, 'Verification could not be completed right now. Please try again.', 'VERIFICATION_FAILED');
        }
    } catch (error) {
        logStage(requestId, 'registration_verification_failed', { code: error?.code || 'VERIFICATION_ERROR' });
        return sendError(res, 500, 'Verification could not be completed. Please try again.', 'VERIFICATION_ERROR');
    }
};

const resendRegistrationHandler = async (req, res) => {
    const requestId = req.requestId;
    const email = normalizeEmail(req.body?.email);
    logStage(requestId, 'registration_resend_validation_started');
    if (!isEmailValid(email)) {
        logStage(requestId, 'registration_resend_validation_failed');
        return sendError(res, 400, 'Enter a valid email address.', 'INVALID_EMAIL');
    }
    logStage(requestId, 'registration_resend_validation_passed');

    const pendingRef = database.ref(`${PENDING_PATH}/${emailKey(email)}`);
    let snapshot;
    try {
        snapshot = await pendingRef.get();
    } catch (error) {
        logStage(requestId, 'registration_resend_lookup_failed', { code: error?.code || 'DATABASE_ERROR' });
        return sendError(res, 503, 'The code could not be checked. Please try again.', 'OTP_LOOKUP_FAILED');
    }

    const original = snapshot.val();
    if (!original || original.status !== 'pending') {
        return resendAccepted(res);
    }

    const now = Date.now();
    if (original.expiresAt <= now) {
        await pendingRef.remove();
        return resendAccepted(res);
    }
    if (now - original.lastSentAt < RESEND_COOLDOWN_MS) {
        logStage(requestId, 'registration_resend_rate_limited', { waitMs: RESEND_COOLDOWN_MS - (now - original.lastSentAt) });
        return sendError(res, 429, 'Please wait before requesting a new OTP.', 'RESEND_COOLDOWN');
    }

    const otp = makeOtp();
    const nextRecord = {
        ...original,
        otpHash: otpDigest(email, otp),
        expiresAt: now + OTP_LIFETIME_MS,
        attempts: 0,
        lastSentAt: now,
        status: 'pending'
    };
    try {
        const transaction = await pendingRef.transaction((current) => {
            if (!current || current.status !== 'pending' || current.expiresAt <= now || now - current.lastSentAt < RESEND_COOLDOWN_MS) return;
            return nextRecord;
        });
        if (!transaction.committed) return resendAccepted(res);
        logStage(requestId, 'registration_resend_otp_saved');
        try {
            await sendRegistrationCode({ name: original.name, email, otp });
            logStage(requestId, 'registration_resend_email_sent');
            return resendAccepted(res);
        } catch (error) {
            logStage(requestId, 'registration_resend_email_failed', { code: error?.code || 'MAIL_ERROR' });
            return sendError(res, 503, 'We could not resend the OTP email right now. Please try again.', 'OTP_EMAIL_FAILED');
        }
    } catch (error) {
        logStage(requestId, 'registration_resend_failed', { code: error?.code || 'RESEND_ERROR' });
        return sendError(res, 500, 'The code could not be resent. Please try again.', 'RESEND_FAILED');
    }
};

router.post('/send-otp', startEmailLimit, sendOtpHandler);
router.post('/register/start', startEmailLimit, sendOtpHandler);
router.post('/verify-otp', verifyEmailLimit, verifyRegistrationHandler);
router.post('/register/verify', verifyEmailLimit, verifyRegistrationHandler);
router.post('/verify-email-otp', verifyEmailLimit, verifyRegistrationHandler);
router.post('/resend-otp', resendEmailLimit, resendRegistrationHandler);
router.post('/register/resend', resendEmailLimit, resendRegistrationHandler);
router.post('/resend-email-otp', resendEmailLimit, resendRegistrationHandler);

export default router;
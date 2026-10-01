import { createHash, createHmac, randomInt, timingSafeEqual } from 'node:crypto';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import './env.js';
import { auth, database, otpHashSecret } from './firebase.js';
import { sendRegistrationCode } from './mailer.js';

const router = Router();
const OTP_LIFETIME_MS = 5 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;
const PENDING_PATH = 'authRegistrationPending';

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

function sendError(res, status, message, code) {
    return res.status(status).json({ error: message, ...(code ? { code } : {}) });
}

function createEmailLimiter({ limit, windowMs, stage }) {
    return rateLimit({
        windowMs,
        limit,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
        keyGenerator: (req) => {
            const email = normalizeEmail(req.body?.email);
            return `email:${email || 'missing-email'}`;
        },
        validate: false,
        handler: (req, res) => {
            logStage(req.requestId, stage, { code: 'EMAIL_RATE_LIMIT' });
            return sendError(res, 429, 'Too many requests. Please wait and try again.', 'RATE_LIMITED');
        },
        message: { error: 'Too many requests. Please wait and try again.' }
    });
}

const startEmailLimit = createEmailLimiter({ limit: 5, windowMs: 15 * 60 * 1000, stage: 'registration_start_rate_limited' });
const verifyEmailLimit = createEmailLimiter({ limit: 15, windowMs: 15 * 60 * 1000, stage: 'registration_verify_rate_limited' });
const resendEmailLimit = createEmailLimiter({ limit: 5, windowMs: 60 * 60 * 1000, stage: 'registration_resend_rate_limited' });

router.post('/register/start', startEmailLimit, async (req, res) => {
    const requestId = req.requestId;
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const email = normalizeEmail(req.body?.email);
    const password = typeof req.body?.password === 'string' ? req.body.password : '';

    let stage = 'registration_validation';
    logStage(requestId, 'registration_validation_started');
    if (password.length < 8) {
        logStage(requestId, 'registration_validation_failed', { code: 'PASSWORD_TOO_SHORT' });
        return sendError(res, 400, 'Password must be at least 8 characters', 'PASSWORD_TOO_SHORT');
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
        stage = 'pending_record_lookup';
        logStage(requestId, 'pending_record_lookup_started');
        const currentSnapshot = await pendingRef.get();
        logStage(requestId, 'pending_record_lookup_completed');
        const currentPending = currentSnapshot.val();
        originalPending = currentPending;
        if (currentPending?.lastSentAt && Date.now() - currentPending.lastSentAt < RESEND_COOLDOWN_MS) {
            logStage(requestId, 'registration_start_rate_limited', { code: 'RESEND_COOLDOWN' });
            return sendError(res, 429, 'Please wait before requesting another code.', 'RATE_LIMITED');
        }

        stage = 'firebase_user_lookup';
        logStage(requestId, 'firebase_user_lookup_started');
        let existingUser = null;
        try {
            existingUser = await auth.getUserByEmail(email);
        } catch (error) {
            if (error?.code !== 'auth/user-not-found') {
                logStage(requestId, 'firebase_user_lookup_failed', { code: error?.code || 'FIREBASE_AUTH_ERROR' });
                throw error;
            }
        }
        logStage(requestId, 'firebase_user_lookup_completed', { found: Boolean(existingUser) });

        if (existingUser?.emailVerified) {
            const hasGoogleProvider = existingUser.providerData?.some((provider) => provider.providerId === 'google.com');
            const hasPasswordProvider = existingUser.providerData?.some((provider) => provider.providerId === 'password');
            const isGoogleOnly = hasGoogleProvider && !hasPasswordProvider;
            const code = isGoogleOnly ? 'GOOGLE_ACCOUNT_EXISTS' : 'EMAIL_ALREADY_REGISTERED';
            const message = isGoogleOnly
                ? 'This account uses Google. Please continue with Google.'
                : 'This email is already registered. Please sign in.';
            logStage(requestId, 'firebase_verified_user_exists', { code });
            return sendError(res, 409, message, code);
        }

        if (existingUser && (!currentPending || currentPending.uid !== existingUser.uid || currentPending.status !== 'pending')) {
            logStage(requestId, 'firebase_unverified_user_exists', { code: 'EMAIL_VERIFICATION_PENDING' });
            return sendError(res, 409, 'This email already has an account awaiting verification. Sign in and verify your email.', 'EMAIL_VERIFICATION_PENDING');
        }

        let user = existingUser;
        if (!user) {
            stage = 'firebase_disabled_user_create';
            logStage(requestId, 'firebase_disabled_user_create_started');
            user = await auth.createUser({
                email,
                password,
                displayName: name,
                emailVerified: false,
                disabled: true
            });
            newlyCreatedUid = user.uid;
            logStage(requestId, 'firebase_disabled_user_create_completed');
        }

        const otp = makeOtp();
        const now = Date.now();
        const pendingRecord = {
            uid: user.uid,
            name,
            email,
            otpHash: otpDigest(email, otp),
            expiresAt: now + OTP_LIFETIME_MS,
            attempts: 0,
            lastSentAt: now,
            status: 'pending'
        };
        stage = 'registration_otp_save';
        await pendingRef.set(pendingRecord);
        logStage(requestId, 'registration_otp_saved');

        if (existingUser) {
            try {
                stage = 'firebase_pending_user_update';
                user = await auth.updateUser(existingUser.uid, {
                    displayName: name,
                    password,
                    emailVerified: false,
                    disabled: true
                });
                logStage(requestId, 'firebase_pending_user_updated');
            } catch (error) {
                await pendingRef.transaction((current) => current?.otpHash === pendingRecord.otpHash
                    ? (originalPending || null)
                    : undefined).catch(() => { });
                throw error;
            }
        }

        try {
            await sendRegistrationCode({ name, email, otp });
            logStage(requestId, 'registration_email_sent');
            return res.status(202).json({ ok: true, message: 'If the address can be registered, a verification code has been sent.' });
        } catch (error) {
            await pendingRef.transaction((current) => current?.otpHash === pendingRecord.otpHash
                ? (originalPending || null)
                : undefined).catch(() => { });
            if (newlyCreatedUid) {
                await auth.deleteUser(newlyCreatedUid).catch((deleteError) => {
                    logStage(requestId, 'firebase_orphan_cleanup_failed', { code: deleteError?.code || 'FIREBASE_AUTH_ERROR' });
                });
                newlyCreatedUid = null;
            }
            logStage(requestId, 'registration_email_failed', { code: error?.code || 'MAIL_ERROR' });
            return sendError(res, 502, 'We could not send a verification email. Please try again later.', 'EMAIL_DELIVERY_FAILED');
        }
    } catch (error) {
        if (newlyCreatedUid) {
            await auth.deleteUser(newlyCreatedUid).catch((deleteError) => {
                logStage(requestId, 'firebase_orphan_cleanup_failed', { code: deleteError?.code || 'FIREBASE_AUTH_ERROR' });
            });
        }
        const code = error?.code || 'REGISTRATION_ERROR';
        if (code === 'auth/email-already-exists') {
            stage = 'firebase_user_create';
            logStage(requestId, 'registration_email_already_exists', { code: 'EMAIL_ALREADY_REGISTERED' });
            return sendError(res, 409, 'This email is already registered. Please sign in.', 'EMAIL_ALREADY_REGISTERED');
        }
        logStage(requestId, 'registration_start_failed', { stage, code });
        return sendError(res, 500, 'Registration could not be started. Please try again.', 'REGISTRATION_START_FAILED');
    }
});

router.post('/register/verify', verifyEmailLimit, async (req, res) => {
    const requestId = req.requestId;
    const email = normalizeEmail(req.body?.email);
    const otp = typeof req.body?.otp === 'string' ? req.body.otp.trim() : '';
    logStage(requestId, 'registration_verification_validation_started');
    if (!isEmailValid(email) || !/^\d{6}$/.test(otp)) {
        logStage(requestId, 'registration_verification_validation_failed');
        return sendError(res, 400, 'Enter a valid email and 6-digit code.');
    }
    logStage(requestId, 'registration_verification_validation_passed');

    const pendingRef = database.ref(`${PENDING_PATH}/${emailKey(email)}`);
    const submittedHash = otpDigest(email, otp);
    const now = Date.now();
    try {
        const transaction = await pendingRef.transaction((current) => {
            if (!current || current.status !== 'pending') return;
            if (current.expiresAt <= now) return { ...current, status: 'expired' };
            if (equalDigest(current.otpHash, submittedHash)) return { ...current, status: 'verifying' };
            const attempts = Number(current.attempts || 0) + 1;
            return { ...current, attempts, status: attempts >= MAX_OTP_ATTEMPTS ? 'locked' : 'pending' };
        });

        const pending = transaction.snapshot.val();
        if (!transaction.committed || !pending) {
            logStage(requestId, 'registration_verification_rejected', { reason: 'missing_or_in_progress' });
            return sendError(res, 400, 'The code is invalid or expired. Start registration again.');
        }
        if (pending.status === 'expired' || pending.status === 'locked') {
            await pendingRef.remove();
            logStage(requestId, pending.status === 'expired' ? 'registration_code_expired' : 'registration_attempts_exhausted', {
                attempts: Number(pending.attempts || 0)
            });
            return sendError(res, 400, 'The code is invalid or expired. Start registration again.');
        }
        if (pending.status === 'pending') {
            logStage(requestId, 'registration_code_mismatch', { attempts: Number(pending.attempts || 0) });
            return sendError(res, 400, 'The code is invalid or expired. Start registration again.');
        }

        try {
            await auth.updateUser(pending.uid, { disabled: false, emailVerified: true });
            await pendingRef.remove();
            logStage(requestId, 'registration_verified');
            return res.json({ ok: true, message: 'Email verified. You can now sign in.' });
        } catch (error) {
            await pendingRef.transaction((current) => current?.status === 'verifying' ? { ...current, status: 'pending' } : undefined).catch(() => { });
            logStage(requestId, 'registration_user_enable_failed', { code: error?.code || 'FIREBASE_AUTH_ERROR' });
            return sendError(res, 503, 'Verification could not be completed right now. Please try again.');
        }
    } catch (error) {
        logStage(requestId, 'registration_verification_failed', { code: error?.code || 'VERIFICATION_ERROR' });
        return sendError(res, 500, 'Verification could not be completed. Please try again.');
    }
});

router.post('/register/resend', resendEmailLimit, async (req, res) => {
    const requestId = req.requestId;
    const email = normalizeEmail(req.body?.email);
    logStage(requestId, 'registration_resend_validation_started');
    if (!isEmailValid(email)) {
        logStage(requestId, 'registration_resend_validation_failed');
        return sendError(res, 400, 'Enter a valid email address.');
    }
    logStage(requestId, 'registration_resend_validation_passed');

    const pendingRef = database.ref(`${PENDING_PATH}/${emailKey(email)}`);
    let snapshot;
    try {
        snapshot = await pendingRef.get();
    } catch (error) {
        logStage(requestId, 'registration_resend_lookup_failed', { code: error?.code || 'DATABASE_ERROR' });
        return sendError(res, 503, 'The code could not be checked. Please try again.');
    }
    const original = snapshot.val();
    if (!original || original.status !== 'pending') {
        return sendError(res, 400, 'Unable to resend a code. Start registration again.');
    }
    const now = Date.now();
    if (original.expiresAt <= now) {
        await pendingRef.remove();
        return sendError(res, 400, 'The registration expired. Start registration again.');
    }
    if (now - original.lastSentAt < RESEND_COOLDOWN_MS) {
        const retryAfter = Math.ceil((RESEND_COOLDOWN_MS - (now - original.lastSentAt)) / 1000);
        res.set('Retry-After', String(retryAfter));
        return sendError(res, 429, 'Please wait before requesting another code.');
    }

    const otp = makeOtp();
    const nextRecord = {
        ...original,
        otpHash: otpDigest(email, otp),
        expiresAt: now + OTP_LIFETIME_MS,
        attempts: 0,
        lastSentAt: now
    };
    try {
        const transaction = await pendingRef.transaction((current) => {
            if (!current || current.status !== 'pending' || current.expiresAt <= now || now - current.lastSentAt < RESEND_COOLDOWN_MS) return;
            return nextRecord;
        });
        if (!transaction.committed) return sendError(res, 429, 'Please wait before requesting another code.');
        logStage(requestId, 'registration_resend_otp_saved');
        try {
            await sendRegistrationCode({ name: original.name, email, otp });
            logStage(requestId, 'registration_resend_email_sent');
            return res.json({ ok: true, message: 'If a registration is pending, a new code has been sent.' });
        } catch (error) {
            await pendingRef.transaction((current) => current?.otpHash === nextRecord.otpHash ? original : undefined).catch(() => { });
            logStage(requestId, 'registration_resend_email_failed', { code: error?.code || 'MAIL_ERROR' });
            return sendError(res, 502, 'We could not send a verification email. Please try again later.');
        }
    } catch (error) {
        logStage(requestId, 'registration_resend_failed', { code: error?.code || 'RESEND_ERROR' });
        return sendError(res, 500, 'The code could not be resent. Please try again.');
    }
});

export default router;
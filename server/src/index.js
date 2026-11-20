import './env.js';
import { createRequire } from 'node:module';
import { randomUUID } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const require = createRequire(import.meta.url);
const communityApiHandlers = new Map([
    ['/api/sign-upload', require('../../api/sign-upload.js')],
    ['/api/verify-media', require('../../api/verify-media.js')],
    ['/api/delete-media', require('../../api/delete-media.js')],
    ['/api/create-comment', require('../../api/create-comment.js')],
    ['/api/toggle-comment-reaction', require('../../api/toggle-comment-reaction.js')],
    ['/api/toggle-reaction', require('../../api/toggle-reaction.js')],
    ['/api/delete-comment', require('../../api/delete-comment.js')],
    ['/api/toggle-follow', require('../../api/toggle-follow.js')],
    ['/api/delete-post', require('../../api/delete-post.js')],
]);
const app = express();
const port = Number(process.env.PORT) || 3001;
const PRODUCTION_ORIGIN = 'https://codewithsiam.vercel.app';

export function getAllowedOrigins(nodeEnv = process.env.NODE_ENV, configured = process.env.ALLOWED_ORIGINS) {
    const defaults = nodeEnv === 'production'
        ? PRODUCTION_ORIGIN
        : `${PRODUCTION_ORIGIN},http://localhost:5173`;
    const configuredOrigins = (configured || defaults)
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);
    const localOrigins = nodeEnv === 'production'
        ? []
        : ['http://localhost:5173', 'http://127.0.0.1:5173'];
    const isLoopbackOrigin = /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i;

    return new Set([...configuredOrigins, ...localOrigins]
        .filter((origin) => nodeEnv !== 'production' || !isLoopbackOrigin.test(origin)));
}

const allowedOrigins = getAllowedOrigins();

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) return callback(null, true);
        return callback(new Error('Origin not allowed by CORS.'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'X-Firebase-AppCheck']
}));
app.use(express.json({ limit: '16kb' }));
app.use((req, _res, next) => {
    req.requestId = randomUUID();
    next();
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use((req, res, next) => {
    const handler = communityApiHandlers.get(req.path);
    if (!handler) return next();
    return Promise.resolve(handler(req, res)).catch(next);
});

app.use((error, _req, res, _next) => {
    if (error?.type === 'entity.too.large') return res.status(413).json({ error: 'Request is too large.' });
    if (error instanceof SyntaxError && 'body' in error) return res.status(400).json({ error: 'Invalid JSON request.' });
    if (error?.message === 'Origin not allowed by CORS.') return res.status(403).json({ error: 'This origin is not allowed.' });
    console.error(JSON.stringify({ timestamp: new Date().toISOString(), stage: 'request_failed', code: error?.code || 'REQUEST_ERROR' }));
    return res.status(500).json({ error: 'The request could not be completed.' });
});

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    app.listen(port, () => {
        console.info(JSON.stringify({ timestamp: new Date().toISOString(), stage: 'server_listening', port }));
    });
}

export default app;
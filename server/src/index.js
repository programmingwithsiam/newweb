import './env.js';
import { randomUUID } from 'node:crypto';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import authRoutes from './auth-routes.js';

const app = express();
const port = Number(process.env.PORT) || 3001;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('Origin not allowed by CORS.'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '16kb' }));
app.use((req, _res, next) => {
    req.requestId = randomUUID();
    next();
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/auth', rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 60,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Too many requests. Please wait and try again.' },
    handler(req, res) {
        console.info(JSON.stringify({ timestamp: new Date().toISOString(), requestId: req.requestId, stage: 'auth_ip_rate_limited', code: 'IP_RATE_LIMIT' }));
        return res.status(429).json({ error: 'Too many requests. Please wait and try again.', code: 'RATE_LIMITED' });
    }
}));
app.use('/auth', authRoutes);

app.use((error, _req, res, _next) => {
    if (error?.type === 'entity.too.large') return res.status(413).json({ error: 'Request is too large.' });
    if (error instanceof SyntaxError && 'body' in error) return res.status(400).json({ error: 'Invalid JSON request.' });
    if (error?.message === 'Origin not allowed by CORS.') return res.status(403).json({ error: 'This origin is not allowed.' });
    console.error(JSON.stringify({ timestamp: new Date().toISOString(), stage: 'request_failed', code: error?.code || 'REQUEST_ERROR' }));
    return res.status(500).json({ error: 'The request could not be completed.' });
});

app.listen(port, () => {
    console.info(JSON.stringify({ timestamp: new Date().toISOString(), stage: 'server_listening', port }));
});
// api/chat.js
//
// This file runs on Vercel's servers, NOT in the user's browser.
// Vercel auto-detects any file inside /api as a serverless function —
// no extra config needed. It will be reachable at: /api/chat
//
// The API key lives only here, as an environment variable, so it is
// never exposed to anyone visiting the website.
//
// Setup:
// 1. In the Vercel dashboard: your Project → Settings → Environment
//    Variables → add GEMINI_API_KEY with your real key.
// 2. Redeploy (Vercel needs a redeploy to pick up new env vars).
// 3. Your frontend already calls: /api/chat  (see script.js)

const SYSTEM_PROMPT = `You are Siam's AI Assistant, a friendly chatbot on Md Siam Ahmmed's portfolio website.
Siam is a Class 11 Science student at Narsingdi Government College, Bangladesh, and an aspiring AI Engineer & Data Scientist.
He has built 10 Python/ML projects: an Image Classifier (CNN, 92% accuracy), a Sentiment Analyzer (BERT), a Data Dashboard
(Pandas/Plotly), a House Price Predictor (XGBoost, R2 0.85), a Text Generator (LSTM), a Digit Recognizer (CNN, 99.1% accuracy),
an AI Chatbot Assistant (Transformer/FastAPI), a Fake News Detector (NLP/TF-IDF, 94% accuracy), a Stock Price Predictor
(LSTM time-series), and a Face Recognition Attendance System (OpenCV/dlib).
His core skills: Python, Jupyter, NumPy/Pandas, scikit-learn, Git, TensorFlow/Keras.
He is launching a free Python course (Beginner to Master) on YouTube. He's reachable via WhatsApp for collaboration.
Keep replies short (2-4 sentences), warm, accurate, and helpful. Answer general questions normally; mention Siam's work only when
the question is about him, his portfolio, Python, programming, or AI/ML. Never invent private contact details, credentials, or project facts.`;

// Best-effort in-memory rate limiter. This resets whenever Vercel spins up
// a new serverless instance, so it is NOT a strong guarantee — but it's a
// free, zero-dependency way to blunt casual abuse/runaway costs. For strict
// rate limiting, add a real store (e.g. Upstash Redis's free tier).
const requestLog = new Map(); // ip -> [timestamps]
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const UPSTREAM_TIMEOUT_MS = 20 * 1000;
const MAX_REQUEST_BODY_BYTES = 64 * 1024;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (!timestamps.length) requestLog.delete(ip);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

module.exports = async function handler(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://codewithsiam.vercel.app';
  const allowedOrigins = new Set([
    allowedOrigin,
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ]);
  const requestOrigin = req.headers.origin;
  if (requestOrigin && !allowedOrigins.has(requestOrigin)) {
    return res.status(403).json({ error: 'Origin not allowed' });
  }

  // Keep the chatbot callable from the deployed site and local development.
  res.setHeader('Access-Control-Allow-Origin', requestOrigin || allowedOrigin);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contentLength = Number(req.headers['content-length'] || 0);
  if (contentLength > MAX_REQUEST_BODY_BYTES) {
    return res.status(413).json({ error: 'Request body is too large.' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    if (messages.length > 30) {
      return res.status(413).json({ error: 'Too many messages.' });
    }

    // Keep only the last 10 turns to control cost/latency
    const trimmed = messages
      .slice(-10)
      .filter((message) => message && typeof message === 'object' && String(message.content || '').trim())
      .map((message) => ({
        role: message.role === 'assistant' ? 'assistant' : 'user',
        content: String(message.content).slice(0, 2000),
      }));

    if (!trimmed.length) {
      return res.status(400).json({ error: 'At least one non-empty message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Set it in Vercel env vars.' });
    }

    // Convert {role, content} (Anthropic-style) into Gemini's {role, parts}
    // format, capping each message's length to prevent abuse/runaway cost.
    const MAX_MESSAGE_LENGTH = 2000;
    const contents = trimmed.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content.slice(0, MAX_MESSAGE_LENGTH) }],
    }));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
    let response;
    try {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { maxOutputTokens: 300 },
          }),
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data?.error?.message || 'Upstream API error' });
    }

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text || '')
      .join('\n') || '';

    return res.status(200).json({ reply: text || "Sorry, I couldn't generate a reply just now." });
  } catch (err) {
    console.error('Chat request failed:', err);
    if (err?.name === 'AbortError') {
      return res.status(504).json({ error: 'The AI service took too long to respond. Please try again.' });
    }
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
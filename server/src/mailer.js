import './env.js';
import nodemailer from 'nodemailer';

let transporter;

function getTransporter() {
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (!smtpUser || !smtpPass) {
        const error = new Error('SMTP email is not configured. Set SMTP_USER and SMTP_PASS (or the legacy Gmail variables).');
        error.code = 'MAIL_CONFIG';
        throw error;
    }

    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: { user: smtpUser, pass: smtpPass },
            requireTLS: true
        });
    }
    return transporter;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

export async function sendRegistrationCode({ name, email, otp }) {
    const smtpTransporter = getTransporter();
    const safeName = escapeHtml(name || 'Learner');
    const safeFrom = process.env.SMTP_FROM || process.env.GMAIL_USER || process.env.SMTP_USER || 'CodeWithSiam <noreply@example.com>';
    const html = `
    <div style="margin:0;padding:32px 12px;background:#0e1720;font-family:Arial,sans-serif;color:#edf3ee;">
      <div style="max-width:560px;margin:0 auto;padding:30px;border:1px solid #2b3d50;border-radius:16px;background:#111d2a;box-shadow:0 8px 24px rgba(0,0,0,0.18);">
        <p style="margin:0 0 12px;color:#8ee5a4;font-size:12px;font-weight:700;letter-spacing:2px;">CODEWITHSIAM</p>
        <h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;color:#ffffff;">Verify your CodeWithSiam account</h1>
        <p style="margin:0 0 20px;color:#c0cad8;line-height:1.7;">Hello ${safeName}, enter this 6-digit code to verify your email and complete your account setup. This code expires in 10 minutes.</p>
        <div style="padding:22px 18px;border:1px solid #3d536d;border-radius:12px;background:#0b1520;text-align:center;color:#9ae6b4;font-size:34px;font-weight:700;letter-spacing:12px;">${otp}</div>
        <p style="margin:20px 0 0;color:#dce7f4;font-size:13px;line-height:1.6;">For your security, do not share this code with anyone.</p>
        <p style="margin:18px 0 0;color:#8a97a9;font-size:12px;line-height:1.6;">If you did not request this code, you can ignore this email.</p>
        <p style="margin:22px 0 0;color:#a5b4c6;font-size:13px;line-height:1.6;">Thanks,<br>CodeWithSiam Team</p>
      </div>
    </div>`;

    return smtpTransporter.sendMail({
        from: safeFrom,
        to: email,
        subject: 'Verify your CodeWithSiam account',
        text: `Hello ${name}, your CodeWithSiam verification code is ${otp}. This 6-digit code expires in 10 minutes. For your security, do not share this code with anyone. If you did not request it, you can ignore this email.\n\nThanks,\nCodeWithSiam Team`,
        html
    });
}

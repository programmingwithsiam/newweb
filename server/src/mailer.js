import './env.js';
import nodemailer from 'nodemailer';

let transporter;

function getTransporter() {
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    if (!gmailUser || !gmailAppPassword) {
        const error = new Error('Gmail SMTP is not configured.');
        error.code = 'MAIL_CONFIG';
        throw error;
    }
    if (!transporter) {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: gmailUser, pass: gmailAppPassword }
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
    const gmailTransporter = getTransporter();
    const safeName = escapeHtml(name);
    const html = `
    <div style="margin:0;padding:32px 12px;background:#0b0f0e;font-family:Arial,sans-serif;color:#eef1e1">
      <div style="max-width:520px;margin:0 auto;padding:30px;border:1px solid #273142;border-radius:14px;background:#101722">
        <p style="margin:0 0 12px;color:#c9f35b;font-size:12px;font-weight:700;letter-spacing:2px">CODEWITHSIAM</p>
        <h1 style="margin:0 0 12px;font-size:24px">Verify your email</h1>
        <p style="margin:0 0 22px;color:#96a1b2;line-height:1.6">Hi ${safeName}, enter this access code to finish creating your account. It expires in 5 minutes.</p>
        <div style="padding:18px;border:1px solid #3d4c5d;border-radius:10px;background:#0b1118;text-align:center;color:#c9f35b;font-size:32px;font-weight:700;letter-spacing:10px">${otp}</div>
        <p style="margin:22px 0 0;color:#96a1b2;font-size:13px;line-height:1.6">If you did not request this code, you can ignore this email.</p>
      </div>
    </div>`;

    return gmailTransporter.sendMail({
        from: `CodeWithSiam <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Your CodeWithSiam verification code',
        text: `Hi ${name}, your CodeWithSiam verification code is ${otp}. It expires in 5 minutes.`,
        html
    });
}
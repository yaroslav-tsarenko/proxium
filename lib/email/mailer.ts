import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS)");
  }

  const port = Number(process.env.SMTP_PORT ?? 465);

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });

  return transporter;
}

export interface SendMailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
}

export async function sendMail({ to, subject, html, text, attachments }: SendMailInput) {
  const from = process.env.SMTP_FROM ?? `Proxium <${process.env.SMTP_USER}>`;
  return getTransporter().sendMail({ from, to, subject, html, text, attachments });
}

export async function verifySmtp() {
  return getTransporter().verify();
}

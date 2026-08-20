const BRAND = "#22c55e";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://worldproxium.com";
const SUPPORT_EMAIL = process.env.SMTP_USER ?? "info@worldproxium.com";

function layout(title: string, body: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;background:#09090b;font-family:Arial,Helvetica,sans-serif;color:#e4e4e7;">
    <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
      <div style="text-align:center;padding-bottom:24px;">
        <span style="font-size:24px;font-weight:800;color:#fafafa;letter-spacing:-.5px;">proxium</span>
      </div>
      <div style="background:#18181b;border:1px solid #27272a;border-radius:16px;padding:32px;">
        <h1 style="margin:0 0 16px;font-size:20px;color:#fafafa;">${title}</h1>
        ${body}
      </div>
      <p style="text-align:center;color:#71717a;font-size:12px;margin-top:24px;line-height:1.6;">
        Proxium &middot; <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND};text-decoration:none;">${SUPPORT_EMAIL}</a><br/>
        You received this email because you have an account at Proxium.
      </p>
    </div>
  </body>
</html>`;
}

function button(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;background:${BRAND};color:#09090b;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:12px;">${label}</a>`;
}

export function welcomeEmail(name: string) {
  return {
    subject: "Welcome to Proxium",
    html: layout(
      `Welcome, ${name}!`,
      `<p style="color:#a1a1aa;line-height:1.7;">Your Proxium account has been created successfully. You can now sign in, top up your balance, and order proxies.</p>
       <p style="margin:24px 0;">${button(`${SITE_URL}/dashboard`, "Go to Dashboard")}</p>
       <p style="color:#71717a;font-size:13px;">If you didn't create this account, please contact us at ${SUPPORT_EMAIL}.</p>`,
    ),
    text: `Welcome to Proxium, ${name}! Your account is ready: ${SITE_URL}/dashboard`,
  };
}

export function passwordResetEmail(resetUrl: string) {
  return {
    subject: "Reset your Proxium password",
    html: layout(
      "Password reset",
      `<p style="color:#a1a1aa;line-height:1.7;">We received a request to reset your password. Click the button below to choose a new one. This link expires in 1 hour.</p>
       <p style="margin:24px 0;">${button(resetUrl, "Reset Password")}</p>
       <p style="color:#71717a;font-size:13px;">If you didn't request this, you can safely ignore this email.</p>`,
    ),
    text: `Reset your Proxium password: ${resetUrl} (expires in 1 hour)`,
  };
}

export interface OrderEmailData {
  orderId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  currency: string;
  createdAt: Date;
}

export function orderConfirmationEmail(data: OrderEmailData) {
  const total = `${data.currency} ${data.totalPrice.toFixed(2)}`;
  return {
    subject: `Order confirmation #${data.orderId.slice(-8).toUpperCase()}`,
    html: layout(
      "Thank you for your order",
      `<p style="color:#a1a1aa;line-height:1.7;">Your order has been processed successfully. A PDF invoice is attached to this email.</p>
       <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:14px;">
         <tr><td style="padding:8px 0;color:#71717a;">Order</td><td style="padding:8px 0;text-align:right;color:#fafafa;">#${data.orderId.slice(-8).toUpperCase()}</td></tr>
         <tr><td style="padding:8px 0;color:#71717a;">Product</td><td style="padding:8px 0;text-align:right;color:#fafafa;">${data.productName}</td></tr>
         <tr><td style="padding:8px 0;color:#71717a;">Quantity</td><td style="padding:8px 0;text-align:right;color:#fafafa;">${data.quantity}</td></tr>
         <tr><td style="padding:8px 0;color:#71717a;border-top:1px solid #27272a;">Total</td><td style="padding:8px 0;text-align:right;color:${BRAND};font-weight:700;border-top:1px solid #27272a;">${total}</td></tr>
       </table>
       <p style="margin:24px 0;">${button(`${SITE_URL}/dashboard/proxies`, "View Proxies")}</p>`,
    ),
    text: `Order #${data.orderId.slice(-8).toUpperCase()} confirmed. ${data.productName} x${data.quantity} — ${total}. Invoice attached.`,
  };
}

import { Resend } from "resend";

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  intent: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendLeadEmails(payload: LeadPayload): Promise<{
  ownerSent: boolean;
  confirmationSent: boolean;
  error?: string;
}> {
  const key = process.env.RESEND_API_KEY;
  const ownerInbox =
    process.env.NOTIFICATION_EMAIL?.trim() || "gomilescanada@gmail.com";
  const from =
    process.env.RESEND_FROM?.trim() || "Go Miles <onboarding@resend.dev>";

  if (!key) {
    console.warn(
      "[email] RESEND_API_KEY is not set — lead saved to database but no email was sent.",
    );
    return { ownerSent: false, confirmationSent: false };
  }

  const resend = new Resend(key);

  const intentLabel =
    payload.intent === "book_call"
      ? "Book a call"
      : payload.intent === "contact"
        ? "General contact"
        : payload.intent;

  const ownerHtml = `
    <div style="font-family:system-ui,Segoe UI,sans-serif;max-width:560px;line-height:1.5;color:#0f172a;">
      <h1 style="font-size:20px;margin:0 0 16px;">New inquiry — Go Miles Dispatch</h1>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr><td style="padding:8px 0;color:#64748b;">Name</td><td style="padding:8px 0;"><strong>${escapeHtml(payload.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;">${payload.phone ? escapeHtml(payload.phone) : "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;">${payload.company ? escapeHtml(payload.company) : "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;vertical-align:top;">Intent</td><td style="padding:8px 0;">${escapeHtml(intentLabel)}</td></tr>
      </table>
      <p style="margin:20px 0 8px;color:#64748b;font-size:13px;">Message</p>
      <div style="background:#f1f5f9;border-radius:12px;padding:16px;white-space:pre-wrap;font-size:15px;">${escapeHtml(payload.message)}</div>
      <p style="margin-top:24px;font-size:12px;color:#94a3b8;">Sent from gomiles.ca contact form</p>
    </div>
  `;

  const confirmHtml = `
    <div style="font-family:system-ui,Segoe UI,sans-serif;max-width:560px;line-height:1.6;color:#0f172a;">
      <h1 style="font-size:20px;margin:0 0 12px;">We received your message</h1>
      <p>Hi ${escapeHtml(payload.name)},</p>
      <p>Thanks for reaching out to <strong>Go Miles Dispatch Services</strong>. Our team will review your note and get back to you as soon as possible.</p>
      <p style="margin-top:20px;font-size:14px;color:#64748b;">If your matter is urgent, call us at <a href="tel:+14379935658">+1 (437) 993-5658</a> or <a href="tel:+14376618184">+1 (437) 661-8184</a>.</p>
      <p style="margin-top:24px;font-size:12px;color:#94a3b8;">— Go Miles Dispatch · Whitby, Ontario</p>
    </div>
  `;

  let ownerSent = false;
  let confirmationSent = false;
  let error: string | undefined;

  try {
    const toOwner = await resend.emails.send({
      from,
      to: [ownerInbox],
      replyTo: payload.email,
      subject: `[Go Miles] New lead: ${payload.name} — ${intentLabel}`,
      html: ownerHtml,
    });
    if (toOwner.error) {
      error = toOwner.error.message;
      console.error("[email] Owner notification failed:", toOwner.error);
    } else {
      ownerSent = true;
    }
  } catch (e) {
    console.error("[email] Owner notification exception:", e);
    error = e instanceof Error ? e.message : "Email send failed";
  }

  try {
    const toUser = await resend.emails.send({
      from,
      to: [payload.email],
      subject: "We received your message — Go Miles Dispatch Services",
      html: confirmHtml,
    });
    if (toUser.error) {
      console.error("[email] Confirmation failed:", toUser.error);
    } else {
      confirmationSent = true;
    }
  } catch (e) {
    console.error("[email] Confirmation exception:", e);
  }

  return { ownerSent, confirmationSent, error };
}

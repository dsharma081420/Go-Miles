import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmails } from "@/lib/email";
import { isDatabaseConfigured, prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(5000),
  intent: z.enum(["contact", "book_call"]).default("contact"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      const msg = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: msg },
        { status: 400 },
      );
    }

    const { name, email, phone, company, message, intent } = parsed.data;

    let savedToDb = false;
    if (isDatabaseConfigured()) {
      try {
        await prisma.contactSubmission.create({
          data: {
            name,
            email,
            phone: phone || null,
            company: company || null,
            message,
            intent,
          },
        });
        savedToDb = true;
      } catch (dbErr) {
        console.error("[contact] Database save failed:", dbErr);
      }
    }

    const emailResult = await sendLeadEmails({
      name,
      email,
      phone,
      company,
      message,
      intent,
    });

    const ownerEmailed = emailResult.ownerSent;

    if (!savedToDb && !ownerEmailed) {
      const hasResend = !!process.env.RESEND_API_KEY?.trim();
      if (!isDatabaseConfigured() && !hasResend) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "This form is not fully configured yet. Please email or call us using the details on this page.",
          },
          { status: 503 },
        );
      }
      return NextResponse.json(
        {
          ok: false,
          error: "Could not deliver your message. Please try again or call us.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      confirmationSent: emailResult.confirmationSent,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Could not process your message. Please try again or call us." },
      { status: 500 },
    );
  }
}

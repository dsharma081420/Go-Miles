import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmails } from "@/lib/email";
import { prisma } from "@/lib/prisma";

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

    const emailResult = await sendLeadEmails({
      name,
      email,
      phone,
      company,
      message,
      intent,
    });

    return NextResponse.json({
      ok: true,
      confirmationSent: emailResult.confirmationSent,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Please try again or call us." },
      { status: 500 },
    );
  }
}

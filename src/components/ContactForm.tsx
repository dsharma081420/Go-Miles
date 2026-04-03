"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Intent = "contact" | "book_call";

function normalizeIntent(raw: string | null): Intent {
  if (raw === "book_call") return "book_call";
  return "contact";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [intent, setIntent] = useState<Intent>("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmationSent, setConfirmationSent] = useState<boolean | null>(null);

  useEffect(() => {
    setIntent(normalizeIntent(searchParams.get("intent")));
  }, [searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          company: company || undefined,
          message,
          intent,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          typeof data.error === "string" ? data.error : "Something went wrong. Please try again.",
        );
        return;
      }
      if (typeof data.confirmationSent === "boolean") {
        setConfirmationSent(data.confirmationSent);
      } else {
        setConfirmationSent(null);
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please call us or try again.");
    }
  }

  const intentLabel = intent === "book_call" ? "Book a call" : "General inquiry";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm font-medium text-slate-300">I&apos;m reaching out about</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(
            [
              ["contact", "General contact"],
              ["book_call", "Book a call"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setIntent(value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                intent === value
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">Selected: {intentLabel}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-300">Name *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0a1628] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-300">Email *</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0a1628] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-300">Phone</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0a1628] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="+1 ..."
            autoComplete="tel"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-300">Company / MC (optional)</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0a1628] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your company name"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-300">Message *</span>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0a1628] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Lanes, equipment type, and how we can help..."
          />
        </label>
      </div>

      {status === "success" && (
        <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
          Thank you—we received your message and will get back to you shortly.
          {confirmationSent === true && (
            <>
              {" "}
              Check your inbox for a quick confirmation email.
            </>
          )}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactHref } from "@/lib/links";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#050a14]/95 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]"
          : "border-white/10 bg-[#050a14]/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-gomiles.png"
            alt="Go Miles Dispatch Services"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden font-semibold tracking-tight text-white sm:block">
            Go Miles <span className="text-slate-400">Dispatch</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href={contactHref("book_call")}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Book a Call
          </Link>
          <Link
            href={contactHref("contact")}
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-white md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050a14] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={contactHref("book_call")}
              className="mt-2 rounded-lg border border-white/20 px-3 py-2 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </Link>
            <Link
              href={contactHref("contact")}
              className="rounded-lg bg-amber-400 px-3 py-2 text-center font-semibold text-slate-900"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

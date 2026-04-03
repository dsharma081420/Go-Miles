"use client";

import Link from "next/link";
import { contactHref } from "@/lib/links";

export function StickyMobileCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-lg gap-2 px-4">
        <a
          href="tel:+14379935658"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-[#0a1628]/95 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call
        </a>
        <Link
          href={contactHref("book_call")}
          className="flex flex-[1.15] items-center justify-center rounded-2xl bg-amber-400 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/25"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}

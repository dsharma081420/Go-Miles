"use client";

import { useReducedMotion } from "framer-motion";

const items = [
  "Load tracking & updates",
  "Rate negotiation",
  "BOL & invoice support",
  "Detention documentation",
  "Broker relationships",
  "HOS-aware planning",
  "Canada ↔ USA customs awareness",
  "Dedicated dispatcher",
];

export function TrustBar() {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <section className="border-b border-white/5 bg-[#04080f] py-6 overflow-hidden">
      <p className="sr-only">Highlights of our dispatch service for carriers</p>
      <div
        className={`flex gap-10 whitespace-nowrap ${reduce ? "flex-wrap justify-center gap-4 px-4 py-2 text-center" : "animate-marquee w-max px-4"}`}
      >
        {reduce
          ? items.map((t) => (
              <span key={t} className="text-xs text-slate-500">
                {t}
              </span>
            ))
          : row.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500"
              >
                <span className="h-1 w-1 rounded-full bg-amber-400/80" aria-hidden />
                {t}
              </span>
            ))}
      </div>
    </section>
  );
}

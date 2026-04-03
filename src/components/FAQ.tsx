"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Do you work with owner-operators only?",
    a: "We specialize in independent drivers and small to mid-size fleets. If you run under your own authority—or are growing a modest fleet—we align dispatch with how you operate.",
  },
  {
    q: "Can you handle Canada–USA cross-border loads?",
    a: "Yes. We support cross-border freight with attention to paperwork, broker requirements, and communication so border crossings stay as smooth as possible.",
  },
  {
    q: "How does pricing work?",
    a: "We use a transparent commission model—typically 5–10% per load depending on lane complexity and service level. We walk through the details before you haul.",
  },
  {
    q: "What if I already use a load board?",
    a: "We help you book, negotiate, and manage the full lifecycle—not just search. You keep running; we keep the load moving from offer to payment.",
  },
  {
    q: "Is support really 24/7?",
    a: "Dispatch issues don’t follow business hours. We offer round-the-clock availability so you’re not stuck when schedules shift or a broker goes quiet.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 border-b border-white/5 bg-[#070f1c] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Questions</h2>
        <p className="mt-4 text-lg text-slate-400">
          Straight answers—so you know what to expect before you’re on the road.
        </p>
        <ul className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/[0.04]"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.22 }}
                      className="border-t border-white/[0.06] px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-400"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

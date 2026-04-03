"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Coverage", value: "Canada & USA", sub: "Cross-border lanes" },
  { label: "Support", value: "24/7", sub: "Dispatch desk" },
  { label: "Focus", value: "Owner-ops", sub: "& small fleets" },
  { label: "Ops", value: "End-to-end", sub: "Loads to paperwork" },
];

export function StatsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/5 bg-[#060d18] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center md:text-left"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {s.label}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

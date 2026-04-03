"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Full-width “loads on the move” ribbon — works with reduced motion */
export function LoadFlowRibbon() {
  const reduce = useReducedMotion();

  const loads = [
    { delay: 0, duration: 14, y: 0 },
    { delay: 2.2, duration: 16, y: 4 },
    { delay: 4.5, duration: 13, y: -2 },
    { delay: 6.8, duration: 15, y: 3 },
    { delay: 1.1, duration: 17, y: -4 },
  ];

  if (reduce) {
    return (
      <div
        className="border-y border-white/[0.06] bg-gradient-to-r from-[#0a1628]/80 via-[#0f2744]/40 to-[#0a1628]/80 py-4"
        aria-hidden
      >
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
          Loads · Lanes · Cross-border
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-r from-[#050a14] via-[#0a1628] to-[#050a14] py-5"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.04)_50%,transparent_100%)]" />
      <p className="relative z-10 mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
        Freight in motion
      </p>
      <div className="relative h-12">
        {/* Road line */}
        <div className="absolute bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {loads.map((load, i) => (
          <motion.div
            key={i}
            className="absolute bottom-3 flex items-end gap-0.5"
            initial={{ left: "-8%" }}
            animate={{ left: "108%" }}
            transition={{
              duration: load.duration,
              repeat: Infinity,
              ease: "linear",
              delay: load.delay,
            }}
            style={{ y: load.y }}
          >
            <span className="h-5 w-6 rounded-sm border border-amber-500/40 bg-amber-400/20 shadow-sm shadow-amber-500/10" />
            <span className="h-4 w-5 rounded-sm border border-slate-500/40 bg-slate-600/30" />
          </motion.div>
        ))}
        {/* Mini truck silhouettes */}
        {[0, 1].map((i) => (
          <motion.div
            key={`t-${i}`}
            className="absolute bottom-2 opacity-30"
            initial={{ left: "-15%" }}
            animate={{ left: "115%" }}
            transition={{
              duration: 22 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 9,
            }}
          >
            <svg width="36" height="20" viewBox="0 0 36 20" className="text-slate-400">
              <rect x="0" y="6" width="22" height="8" rx="1" fill="currentColor" />
              <rect x="22" y="4" width="10" height="10" rx="1" fill="currentColor" />
              <circle cx="8" cy="16" r="3" fill="#1e293b" />
              <circle cx="28" cy="16" r="3" fill="#1e293b" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

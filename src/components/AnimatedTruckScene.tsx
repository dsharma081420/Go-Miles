"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Side-view semi + rolling road + cargo + wheel motion — respects reduced motion */
export function AnimatedTruckScene() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-[#0c1829] via-[#081018] to-[#04080c] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.65)]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Distant traffic (abstract) */}
      {!reduce && (
        <>
          <motion.div
            className="absolute left-0 top-[28%] h-6 w-20 rounded-sm bg-white/[0.04]"
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "420%", opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0 }}
          />
          <motion.div
            className="absolute left-0 top-[32%] h-5 w-14 rounded-sm bg-white/[0.03]"
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "420%", opacity: [0, 0.35, 0.35, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear", delay: 6 }}
          />
        </>
      )}

      {/* Stars */}
      <div className="absolute inset-x-8 top-6 flex justify-between opacity-40">
        {[12, 28, 8, 20, 16].map((s, i) => (
          <span
            key={i}
            className="rounded-full bg-white"
            style={{ width: s / 8, height: s / 8, opacity: 0.3 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Road + motion stripes */}
      <div className="absolute inset-x-0 bottom-0 h-[42%]">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0f18] to-transparent" />
        <div
          className={`absolute bottom-8 left-0 right-0 h-14 ${reduce ? "" : "animate-road-scroll"}`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0, transparent 28px, rgba(255,255,255,0.06) 28px, rgba(255,255,255,0.06) 30px)",
            backgroundSize: "120px 100%",
          }}
        />
        <div
          className={`absolute bottom-[2.35rem] left-0 right-0 h-0.5 ${reduce ? "" : "animate-road-dash"}`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 24px, transparent 24px, transparent 48px)",
            backgroundSize: "72px 100%",
          }}
        />
        {/* Side shoulder line */}
        <div
          className={`absolute bottom-6 left-0 right-0 h-px opacity-40 ${reduce ? "" : "animate-road-scroll"}`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0, transparent 40px, rgba(148,163,184,0.35) 40px, rgba(148,163,184,0.35) 42px)",
            backgroundSize: "120px 100%",
          }}
        />
      </div>

      {/* Truck + cargo */}
      <motion.div
        className="absolute bottom-[18%] left-1/2 w-[min(88%,280px)] -translate-x-1/2"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -5, 0, -3, 0],
              }
        }
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 320 140" className="w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]">
          <defs>
            <linearGradient id="cab" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="trailer" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <rect x="8" y="48" width="168" height="56" rx="6" fill="url(#trailer)" stroke="#475569" strokeWidth="1.5" />

          {/* Cargo / pallets on deck */}
          {!reduce && (
            <g>
              <motion.rect
                x="18"
                y="54"
                width="36"
                height="16"
                rx="2"
                fill="#78716c"
                stroke="#a8a29e"
                strokeWidth="0.8"
                animate={{ y: [54, 52.5, 54] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.rect
                x="62"
                y="52"
                width="32"
                height="18"
                rx="2"
                fill="#57534e"
                stroke="#a8a29e"
                strokeWidth="0.8"
                animate={{ y: [52, 50.5, 52] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.rect
                x="102"
                y="56"
                width="28"
                height="14"
                rx="2"
                fill="#64748b"
                stroke="#94a3b8"
                strokeWidth="0.8"
                animate={{ y: [56, 54.5, 56] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
            </g>
          )}
          {reduce && (
            <g>
              <rect x="18" y="54" width="36" height="16" rx="2" fill="#78716c" stroke="#a8a29e" strokeWidth="0.8" />
              <rect x="62" y="52" width="32" height="18" rx="2" fill="#57534e" stroke="#a8a29e" strokeWidth="0.8" />
              <rect x="102" y="56" width="28" height="14" rx="2" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
            </g>
          )}

          {/* Straps */}
          <path
            d="M16 48 L16 104 M104 48 L104 104"
            stroke="#fbbf24"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />

          <path
            d="M176 44h52l28 24v36h-80V44z"
            fill="url(#cab)"
            stroke="#3b82f6"
            strokeWidth="1.2"
          />
          <rect x="196" y="54" width="36" height="22" rx="3" fill="#38bdf8" fillOpacity="0.35" />

          {/* Wheels with spin */}
          {[48, 108, 200, 248].map((cx, i) => (
            <g key={i} transform={`translate(${cx}, 118)`}>
              <circle r="18" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              {!reduce ? (
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.55 + i * 0.02, repeat: Infinity, ease: "linear" }}>
                  <line x1="0" y1="0" x2="0" y2="-9" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="0" x2="9" y2="0" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="0" x2="-9" y2="0" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="0" x2="0" y2="9" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                </motion.g>
              ) : (
                <circle r="9" fill="#475569" opacity="0.8" />
              )}
            </g>
          ))}

          {!reduce ? (
            <motion.circle
              cx="248"
              cy="92"
              r="3"
              fill="#fef08a"
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <circle cx="248" cy="92" r="3" fill="#fef08a" opacity="0.9" />
          )}
        </svg>
      </motion.div>

      <p className="absolute bottom-3 left-0 right-0 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
        Always moving forward
      </p>
    </div>
  );
}

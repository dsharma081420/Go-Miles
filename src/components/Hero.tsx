"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedTruckScene } from "@/components/AnimatedTruckScene";
import { contactHref } from "@/lib/links";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0a1628] to-[#050a14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200"
          >
            Ontario · Canada &amp; cross-border USA
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Reliable Truck Dispatch Services That Keep Your Wheels Moving
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            We help independent drivers and fleets maximize profits, cut deadhead, and reduce
            stress—so you can focus on the road while we handle loads, rates, and paperwork.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              href={contactHref("contact")}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-amber-400 px-8 py-3.5 text-base font-semibold text-slate-900 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-300 active:scale-[0.98]"
            >
              Get Started
            </Link>
            <Link
              href={contactHref("book_call")}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Book a Call
            </Link>
          </motion.div>
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6"
          >
            {[
              { k: "24/7", v: "Dispatch support" },
              { k: "Canada ↔ USA", v: "Cross-border loads" },
              { k: "5–10%", v: "Commission per load" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-inner shadow-black/20 backdrop-blur-sm transition hover:border-white/15"
              >
                <dt className="text-2xl font-bold tracking-tight text-white">{item.k}</dt>
                <dd className="mt-1 text-sm text-slate-400">{item.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
          className="relative lg:justify-self-end"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/10 via-transparent to-amber-400/10 blur-2xl" />
          <AnimatedTruckScene />
        </motion.div>
      </div>
    </section>
  );
}

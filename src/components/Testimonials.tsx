"use client";

import { motion, useReducedMotion } from "framer-motion";

const quotes = [
  {
    quote:
      "Clear communication on every load. They treat our MC like a partner—not a ticket number.",
    name: "Independent owner-operator",
    region: "Ontario",
  },
  {
    quote:
      "Cross-border paperwork used to eat our weekends. Having dispatch stay on top of details changed our lane game.",
    name: "Small fleet owner",
    region: "Canada · USA lanes",
  },
  {
    quote:
      "Rates and follow-up are consistent. When brokers push back, our dispatcher pushes harder.",
    name: "Dry van carrier",
    region: "Eastern Canada",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-white/5 bg-[#050a14] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for carriers like you
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Dispatch done the way North American operators expect: responsive, transparent, and
            focused on your revenue—not ours alone.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-slate-300">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{q.name}</p>
                <p className="text-sm text-slate-500">{q.region}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

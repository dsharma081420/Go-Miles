import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { contactHref } from "@/lib/links";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-white/5 bg-[#050a14] py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Pricing</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Straightforward commission-based pricing—aligned with your success on every load.
        </p>
        <div className="mt-12 max-w-xl rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Commission model
          </p>
          <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">5–10%</p>
          <p className="mt-2 text-lg text-slate-300">per load, depending on lane and service level.</p>
          <ul className="mt-8 space-y-3 text-slate-300">
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              No surprise fees—clear terms before you roll
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              Scales with your business as you grow miles
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              Discuss your setup on a quick intro call
            </li>
          </ul>
          <Link
            href={contactHref("book_call")}
            className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300 sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}

import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-white/5 bg-[#050a14] py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Go Miles Dispatch Services is a dedicated dispatch team based in Ontario, Canada. We
              partner with independent truck drivers and growing fleets to find high-paying loads,
              negotiate strong rates, and keep your paperwork organized—so operations run smoothly
              from first call to final payment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Whether you run Canada-only lanes or cross-border into the United States, we align
              dispatch with your equipment, hours, and goals—helping you stay loaded and profitable.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/50 to-slate-900/50 p-8 shadow-xl">
            <ul className="space-y-4 text-slate-200">
              {[
                "Carrier-focused load booking and follow-up",
                "Clear communication on every load",
                "Paperwork handled with accuracy and speed",
                "Built for owner-operators and small to mid-size fleets",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

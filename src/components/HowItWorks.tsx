import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    step: "1",
    title: "Get started",
    body: "Tell us about your truck, lanes, and goals. We onboard you quickly and clearly.",
  },
  {
    step: "2",
    title: "We Find Loads",
    body: "Our team books freight, negotiates rates, and manages paperwork while you stay focused.",
  },
  {
    step: "3",
    title: "You Drive & Get Paid",
    body: "Haul the load, we handle follow-ups—so you grow income with less stress.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-white/5 bg-[#070f1c] py-20 sm:py-24"
    >
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          A simple three-step process to get you loaded and paid—without the runaround.
        </p>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2rem)] top-12 hidden h-0.5 w-full bg-gradient-to-r from-blue-500/50 to-transparent md:block"
                  aria-hidden
                />
              )}
              <div className="relative rounded-2xl border border-white/10 bg-[#050a14] p-8 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                  {s.step}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-400">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </FadeIn>
    </section>
  );
}

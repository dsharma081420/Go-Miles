import { FadeIn } from "@/components/motion/FadeIn";

const points = [
  {
    title: "Higher rates",
    body: "We negotiate with brokers and shippers with your revenue in mind—not quick filler loads.",
  },
  {
    title: "Strong broker relationships",
    body: "Trusted connections across the industry help us access consistent, quality freight.",
  },
  {
    title: "24/7 availability",
    body: "Night or day, you have a dispatch partner when schedules shift or issues arise.",
  },
  {
    title: "Personalized service",
    body: "You’re not a number. We learn your lanes, truck, and preferences to match real opportunities.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-b border-white/5 bg-[#050a14] py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Us</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          We’re built for truckers who want more from dispatch—better communication, better rates,
          and a team that treats your business like our own.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-blue-950/30 p-8"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import { FadeIn } from "@/components/motion/FadeIn";

const items = [
  {
    title: "Load booking",
    desc: "We source and secure freight that fits your lane preferences and equipment.",
  },
  {
    title: "Rate negotiation",
    desc: "Experienced negotiators work to maximize your rate per mile on every load.",
  },
  {
    title: "Route planning",
    desc: "Smarter routing to reduce empty miles and keep you moving efficiently.",
  },
  {
    title: "24/7 support",
    desc: "Round-the-clock dispatch support when you need answers on the road.",
  },
  {
    title: "Paperwork management",
    desc: "BOLs, invoices, and load documents organized so you get paid faster.",
  },
  {
    title: "Detention & layover",
    desc: "We help document delays and pursue fair compensation when you’re held up.",
  },
  {
    title: "Cross-border dispatch",
    desc: "Canada ↔ USA lanes with attention to customs, paperwork, and broker requirements.",
  },
];

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  ];
  const d = paths[index % paths.length];
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={d} />
      </svg>
    </span>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-white/5 bg-[#070f1c] py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Services</h2>
          <p className="mt-4 text-lg text-slate-400">
            End-to-end dispatch support tailored for owner-operators and fleets running in Canada
            and cross-border.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <ServiceIcon index={i} />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

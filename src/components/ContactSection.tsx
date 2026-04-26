import { FadeIn } from "@/components/motion/FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#070f1c] py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-slate-400">
              Ready to run smarter miles? Reach out by phone, email, or the form—we respond fast.
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+14379935658"
                    className="text-lg font-medium text-white hover:text-amber-300"
                  >
                    +1 (437) 993-5658
                  </a>
                </dd>
                <dd className="mt-1">
                  <a
                    href="tel:+14376618184"
                    className="text-lg font-medium text-white hover:text-amber-300"
                  >
                    +1 (437) 661-8184
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:gomilescanada@gmail.com"
                    className="text-lg font-medium text-blue-300 hover:text-amber-300"
                  >
                    gomilescanada@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Address
                </dt>
                <dd className="mt-1 text-lg text-slate-300">
                  32 Murkar Crescent
                  <br />
                  Whitby, Ontario, Canada
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#050a14] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              For now this site is frontend-only. Tap to call or email us and we’ll respond quickly.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+14379935658"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call Dispatch
              </a>
              <a
                href="mailto:gomilescanada@gmail.com?subject=Dispatch%20Inquiry%20-%20Go%20Miles&body=Hi%20Go%20Miles%20Dispatch%2C%0A%0AName%3A%20%0APhone%3A%20%0ACompany%3A%20%0AMessage%3A%20%0A"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Prefer booking? Call us and we’ll set up a time that works for you.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

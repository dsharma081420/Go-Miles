import { Suspense } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "./ContactForm";

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
            <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-white/5" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LoadFlowRibbon } from "@/components/LoadFlowRibbon";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { StatsStrip } from "@/components/StatsStrip";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <LoadFlowRibbon />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}

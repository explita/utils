import { Hero } from "../../components/landing/hero";
import { Features } from "../../components/landing/features";
import { HowItWorks } from "../../components/landing/how-it-works";
import { TwoModes } from "../../components/landing/two-modes";
import { CtaSection } from "../../components/landing/cta-section";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 antialiased selection:bg-emerald-500 selection:text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <TwoModes />
      <CtaSection />
    </div>
  );
}

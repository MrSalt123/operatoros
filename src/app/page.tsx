import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Solutions from "@/components/Solutions";
import CoreFeatures from "@/components/CoreFeatures";
import InteractiveUseCaseSection from "@/components/UseCases";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <section className="overflow-hidden">
        <Hero />
        <SocialProof />
        <Solutions />
        <CoreFeatures />
        <InteractiveUseCaseSection />
        <CTA />
    </section>
  );
}
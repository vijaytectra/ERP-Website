import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import UseCases from "@/components/UseCases";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <section id="home">
        <HeroSection />
      </section>

      <section id="why-choose">
        <WhyUs />
      </section>

      <section id="benefits">
        <Benefits />
      </section>


      <section id="features">
        <Features />
      </section>

      <section id="use-cases">
        <UseCases />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact" className="lg:pt-60">
        <ContactSection />
      </section>
    </div>
  );
}

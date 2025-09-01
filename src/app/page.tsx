import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
       
      >
        <HeroSection/>
      </section>

      <section
        id="why-choose"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-heading text-3xl">Why Choose</h2>
      </section>

      <section
        id="benefits"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-heading text-3xl">Benefits</h2>
      </section>

      <section
        id="features"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-white text-3xl">Features</h2>
      </section>

      <section
        id="use-cases"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-heading text-3xl">Use Cases</h2>
      </section>

      <section
        id="integrations"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-heading text-3xl">Integrations</h2>
      </section>

      <section
        id="pricing"
        className="h-screen flex items-center justify-center "
      >
        <h2 className="text-heading text-3xl">Pricing</h2>
      </section>
    </>
  );
}

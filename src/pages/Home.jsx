import Hero from "../components/Hero";
import SectionCard from "../components/SectionCard";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

// Byt hero-bakgrund här:
import heroImage from "../assets/hero-bg.jpg"; // eller hero-bg.mp4 för video
import liveThumb from "../assets/live-01.jpg";
import studioThumb from "../assets/studio-01.jpg";

export default function Home() {
  return (
    <>
      <SEO
        title="Hem"
        description="Substans – Live & Studio. Portfölj, produktion och design."
      />

      <div id="top" />

      <Hero
        title="Substans"
        subtitle="Live • Studio"
        intro="Modern, personlig och enkel portfolio. Musik, scen, design och strategi."
        backgroundImage={heroImage}
      />

      <section className="container mx-auto px-6 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard
            to="/live"
            image={liveThumb}
            title="Substans Live"
            text="Event, scen och artister. Dokumentation, upplevelser och energi."
            cta="Utforska Live →"
          />
          <SectionCard
            to="/studio"
            image={studioThumb}
            title="Substans Studio"
            text="Design, branding och strategi. Projektexempel och case."
            cta="Utforska Studio →"
          />
        </div>
      </section>

      <Contact />
    </>
  );
}

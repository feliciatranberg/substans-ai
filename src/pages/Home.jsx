// src/pages/Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

import heroImage from "../assets/hero-bg.jpg";

// Data
import studioItems from "../data/studioProjects";
import liveItems from "../data/liveGallery";

export default function Home() {
  const location = useLocation();

  // Gör så att /#studio och /#live scrollar till rätt sektion
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Substans"
        description="Substans – Live & Studio. Portfölj, produktion och design."
      />

      <Hero
        title="Substans"
        subtitle="Live • Studio"
        intro="Modern, personlig och enkel portfolio. Musik, scen, design och strategi."
        backgroundImage={heroImage}
      />

      {/* LIVE */}
      <section id="live" className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Live</h2>
          <p className="mt-2 text-gray-400">
            Utdrag från event, scen och backstage. Ögonblick och energi.
          </p>
        </div>
        <Gallery items={liveItems} />
      </section>

      {/* STUDIO */}
      <section id="studio" className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Studio</h2>
          <p className="mt-2 text-gray-400">
            Design, branding och strategi. Kreativa case och projekt.
          </p>
        </div>
        <Gallery items={studioItems} />
      </section>

      <Contact />
    </>
  );
}

// src/pages/Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import About from "../components/About";
import SEO from "../components/SEO";
import TickerBar from "../components/TickerBar";

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
      <TickerBar
        items={[
          "Nästa event: 15 nov kl 20:00. Nefertiti, Göteborg",
          "Li är snygg",
          "Tralla lalala",
        ]}
        href="https://din-biljettlank.se/"
        speed={30}
      />
      <SEO
        title="Substans"
        description="Substans – Live & Studio. Portfölj, produktion och design."
      />

      <Hero
        title="Logga + film"
        // subtitle="Live • Studio"
        // intro="Modern, personlig och enkel portfolio. Musik, scen, design och strategi."
        backgroundImage={heroImage}
      />
      <About />
      {/* LIVE */}
      <section id="live" className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Live</h2>
          <p className="mt-2 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Gallery items={liveItems} />
      </section>

      {/* STUDIO */}
      <section id="studio" className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Studio</h2>
          <p className="mt-2 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Gallery items={studioItems} />
      </section>

      <Contact />
    </>
  );
}

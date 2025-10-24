import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

import headerImage from "../assets/live-hero.jpg";
import liveItems from "../data/liveGallery";

export default function Live() {
  return (
    <>
      <SEO
        title="Substans Live"
        description="Scen, event och liveupplevelser."
      />

      <Hero
        title="Substans Live"
        subtitle="Event • Scen • Artister"
        intro="Stora och små ögonblick från scenen. Ett urval av liveupplevelser."
        backgroundImage={headerImage}
      />

      <section className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Galleri</h2>
          <p className="mt-2 text-gray-400">
            Bilder från event, backstage och publik.
          </p>
        </div>
        <Gallery items={liveItems} />
      </section>

      <Contact />
    </>
  );
}

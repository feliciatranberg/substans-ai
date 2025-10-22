import Hero from "../components/Hero";
import Gallery from "../components/Galleryjs";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

import headerImage from "../assets/studio-hero.jpg";
import studioItems from "../data/studioProjects";

export default function Studio() {
  return (
    <>
      <SEO
        title="Substans Studio"
        description="Design, branding och strategi."
      />

      <Hero
        title="Substans Studio"
        subtitle="Design • Branding • Strategi"
        intro="Kreativa projekt och case som visar process och resultat."
        backgroundImage={headerImage}
      />

      <section className="container mx-auto px-6 my-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-white">Showcase</h2>
          <p className="mt-2 text-gray-400">
            Ett urval av design- och brandingprojekt.
          </p>
        </div>
        <Gallery items={studioItems} />
      </section>

      <Contact />
    </>
  );
}

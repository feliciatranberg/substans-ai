import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import socialLinks from "../data/socialLinks";

const EMAIL = "hello@substans.studio";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 my-20"
      id="kontakt"
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-soft p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
        <p className="mt-2 text-gray-400">
          Hör av dig för samarbeten, bokningar eller frågor.
        </p>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Hej%20Substans`}
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-2.5 font-medium hover:opacity-90 transition"
          >
            <FaEnvelope /> Maila mig
          </a>

          <div className="flex items-center gap-5 text-gray-400">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition"
              >
                <FaFacebook size={22} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

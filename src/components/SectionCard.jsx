import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SectionCard({ to, image, title, text, cta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 rounded-xl shadow-soft overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
    >
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{text}</p>
        <Link
          to={to}
          className="mt-4 inline-block text-gray-300 hover:text-white font-medium"
        >
          {cta}
        </Link>
      </div>
    </motion.div>
  );
}

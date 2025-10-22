import { motion } from "framer-motion";

export default function Gallery({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="group rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-all"
        >
          <img
            src={item.src}
            alt={item.alt || "Galleri"}
            loading="lazy"
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {item.caption && (
            <figcaption className="p-3 text-sm text-gray-400">
              {item.caption}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  );
}

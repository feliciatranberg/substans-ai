import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 my-20"
      id="about"
    >
      <div className="">
        <h2 className="text-2xl font-semibold text-white">Om Substans</h2>
        <p className="mt-3 text-gray-400 leading-relaxed max-w-3xl mx-auto md:mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </motion.section>
  );
}

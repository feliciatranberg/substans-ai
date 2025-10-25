import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  intro,
  backgroundImage,
  backgroundVideo,
}) {
  return (
    <section className="relative">
      <div className="w-full overflow-hidden aspect-[1/1] sm:aspect-video md:aspect-[16/9]">
        {backgroundVideo ? (
          <video
            src={backgroundVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={backgroundImage}
          />
        ) : (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
          {subtitle && <p className="mt-3 text-lg text-gray-300">{subtitle}</p>}
          {intro && (
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{intro}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

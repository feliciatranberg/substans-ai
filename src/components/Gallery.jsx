// src/components/Gallery.jsx

export default function Gallery({ items = [], aspect = "3/2" }) {
  const cx = (...c) => c.filter(Boolean).join(" ");
  // mappa prop -> tailwind klass
  const aspectClass =
    aspect === "3/2"
      ? "aspect-[3/2]"
      : aspect === "16/9"
        ? "aspect-[16/9]"
        : aspect === "9/16"
          ? "aspect-[9/16]"
          : "aspect-[3/2]"; // fallback

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <article
          key={idx}
          className="group rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800"
        >
          <div className={cx("w-full bg-neutral-700", aspectClass)}>
            {it.type === "video" ? (
              <video
                className="h-full w-full object-cover"
                src={it.src}
                poster={it.poster}
                playsInline
                muted={it.muted ?? true}
                loop={it.loop ?? true}
                autoPlay={it.autoplay ?? false}
                controls={it.controls ?? false}
                preload="metadata"
              />
            ) : (
              <img
                className="h-full w-full object-cover"
                src={it.src}
                alt={it.alt || ""}
                loading="lazy"
              />
            )}
          </div>

          {it.caption && (
            <div className="px-4 py-3 text-sm text-gray-300 border-t border-neutral-800">
              {it.caption}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

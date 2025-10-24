export default function Gallery({ items = [], showCaptions = true }) {
  return (
    <>
      {/* Mobil: horisontell slider */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory pb-4">
        <div className="flex gap-4 pl-6 pr-6">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="flex-shrink-0 w-full snap-start rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800 first:ml-0 last:mr-0"
            >
              <div className="aspect-[4/5] bg-neutral-700">
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

              {showCaptions && it.caption ? (
                <div className="px-4 py-3 text-sm text-gray-300 border-t border-neutral-800">
                  {it.caption}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <article
            key={idx}
            className="group rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800"
          >
            <div className="aspect-[4/5] bg-neutral-700">
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

            {showCaptions && it.caption ? (
              <div className="px-4 py-3 text-sm text-gray-300 border-t border-neutral-800">
                {it.caption}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Seamless, auto-filling marquee:
 * - Measures text width and repeats it so one "half" covers the viewport
 * - Duplicates that half for a perfect 0% -> -50% loop (no jump)
 */
export default function TickerBar({
  // Put your message(s) here; one string is fine
  items = ["Nästa event: 15 nov kl 20:00. Nefertiti, Göteborg"],
  href = null, // optional: make the whole bar clickable
  speed = 32, // seconds per full loop (increase = slower)
  gapPx = 48, // pixel gap between repeats
  bgClass = "bg-neutral-900",
  textClass = "text-neutral-100",
  borderClass = "border-b border-neutral-800",
  pauseOnHover = false, // set true if you want hover pause
}) {
  const containerRef = useRef(null);
  const measureRef = useRef(null);

  const [repeats, setRepeats] = useState(8); // will be recalculated
  const [paused, setPaused] = useState(false);

  // Build the base (join items with gap visually)
  const baseTexts = useMemo(() => (items.length ? items : [""]), [items]);

  // Recompute how many repeats we need so ONE half fills the viewport + buffer
  useEffect(() => {
    const calc = () => {
      if (!containerRef.current || !measureRef.current) return;

      const containerW = containerRef.current.offsetWidth;
      const sampleW = measureRef.current.offsetWidth || 1;

      // How many repeats needed to fill + some buffer (1 extra width)
      const needed = Math.max(
        2,
        Math.ceil((containerW + sampleW) / (sampleW + gapPx))
      );
      setRepeats(needed);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [items, gapPx]);

  // Build ONE half (long enough), then duplicate it to get a seamless loop
  const half = useMemo(() => {
    const arr = [];
    for (let i = 0; i < repeats; i++) {
      for (let j = 0; j < baseTexts.length; j++) arr.push(baseTexts[j]);
    }
    return arr;
  }, [repeats, baseTexts]);

  const loopItems = useMemo(() => [...half, ...half], [half]);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, target: "_self", rel: "noopener" } : {};

  return (
    <div
      className={`${bgClass} ${textClass} ${borderClass} ${pauseOnHover && paused ? "ticker-paused" : ""}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      role="region"
      aria-label="Aktuellt meddelande"
    >
      <div ref={containerRef} className="container mx-auto">
        {/* Invisible measurement span (one item) */}
        <span
          ref={measureRef}
          className="absolute -z-10 opacity-0 whitespace-nowrap pointer-events-none"
          style={{ position: "absolute" }}
        >
          {baseTexts.join("   ")}
        </span>

        <Wrapper
          {...wrapperProps}
          className="relative block overflow-hidden ticker-mask"
          style={{ "--duration": `${speed}s` }}
        >
          <div
            className="ticker-track whitespace-nowrap flex"
            style={{ columnGap: `${gapPx}px` }}
          >
            {loopItems.map((txt, i) => (
              <span key={i} className="text-sm md:text-base">
                {txt}
              </span>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

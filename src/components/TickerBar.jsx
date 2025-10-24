import { useEffect, useState, useMemo } from "react";
import { FaTicketAlt, FaTimes } from "react-icons/fa";

export default function TickerBar({
  items = [],
  href = null, // om satt: hela baren blir klickbar
  speed = 28, // sekunder för en hel loop
  icon = <FaTicketAlt />,
  dismissible = true, // om den ska kunna stängas
  storageKey = "ticker:dismissed",
  bgClass = "bg-neutral-900",
  textClass = "text-neutral-100",
  borderClass = "border-b border-neutral-800",
}) {
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!dismissible) return;
    const saved = localStorage.getItem(storageKey);
    setDismissed(saved === "1");
  }, [dismissible, storageKey]);

  const onClose = () => {
    setDismissed(true);
    if (dismissible) localStorage.setItem(storageKey, "1");
  };

  // duplicerar innehållet så loopen blir sömlös
  const loopItems = useMemo(() => [...items, ...items], [items]);

  if (dismissed || items.length === 0) return null;

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <div
      className={`${bgClass} ${textClass} ${borderClass} ${paused ? "ticker-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Aktuellt meddelande"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 py-2">
          {/* <span className="opacity-80">{icon}</span> */}

          <Wrapper
            {...wrapperProps}
            className="relative flex-1 overflow-hidden ticker-mask no-underline hover:opacity-90"
            style={{ "--duration": `${speed}s` }}
          >
            <div className="ticker-track whitespace-nowrap flex gap-10">
              {loopItems.map((txt, i) => (
                <span key={i} className="text-sm md:text-base">
                  {txt}
                </span>
              ))}
            </div>
          </Wrapper>

          {/* {dismissible && (
            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded hover:bg-white/10"
              aria-label="Stäng meddelandet"
            >
              <FaTimes />
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

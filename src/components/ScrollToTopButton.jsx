import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scrolla till toppen"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-neutral-900 border border-neutral-700 text-gray-300 hover:text-white hover:border-gray-500 p-3 shadow-lg transition"
    >
      <FaArrowUp />
    </button>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-neutral-900/80 border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="h-16 flex items-center justify-between relative">
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Hem
            </NavLink>
            <NavLink
              to="/live"
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Live
            </NavLink>
            <NavLink
              to="/studio"
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Studio
            </NavLink>
          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" aria-label="Start">
              <img src={logo} alt="Substans logotyp" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="w-24" />
        </div>
      </div>
    </header>
  );
}

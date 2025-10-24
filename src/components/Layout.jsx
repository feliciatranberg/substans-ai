import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scrolla till toppen vid sidbyte
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-gray-200">
      {/* <NavBar /> */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.webp";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Floating Back-to-Top Button */}
      {showTopBtn && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 z-[9999]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      
      <footer className="bg-black/70 backdrop-blur-sm text-gray-300 py-6 mt-8">
        <div className="max-w-sm mx-auto flex flex-col items-center justify-center space-y-2">
          {/* Logo */}
          <img
            src={logo}
            alt="Xeda Farm Logo"
            className="h-8 w-auto object-contain select-none"
            draggable="false"
          />

          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400">XedaFarm</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

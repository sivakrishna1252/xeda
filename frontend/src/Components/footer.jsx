import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/xeda logo.webp";

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

      
      <footer className="bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-sm text-gray-300 mt-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6">
            {/* Logo and Social Media Icons - Left Side */}
            <div className="flex flex-col items-center lg:items-start gap-4 ">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Xeda Farm Logo"
                  className="h-12 w-auto object-contain select-none filter brightness-110"
                  draggable="false"
                />
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/xedafarm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582945834500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/109757301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-blue-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Information - Right Side */}
            <div className="grid grid-cols-[28px_1fr] gap-x-3 gap-y-3 text-sm text-gray-300">
  {/* Email */}
  <FaEnvelope className="w-5 h-5 text-green-500/70 mt-0.5" />
  <a
    href="mailto:info@xedafarm.com"
    className="hover:text-green-400 transition-colors duration-300"
  >
    info@xedafarm.com
  </a>

  {/* Phone */}
  <FaPhone className="w-5 h-5 text-green-500/70 mt-0.5 rotate-90" />
  <a
    href="tel:+919172266069"
    className="hover:text-green-400 transition-colors duration-300"
  >
    +91 91722 66069
  </a>

  {/* Location */}
  <FaMapMarkerAlt className="w-5 h-5 text-green-500/70 mt-0.5" />
  <a
    href="https://www.google.com/maps/search/?api=1&query=Cityvista+Kharadi,+Pune+411048"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition-colors duration-300 leading-relaxed"
  >
    Cityvista Kharadi, Pune - 411048
  </a>
</div>

</div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 my-6"></div>

          {/* Copyright - Bottom Center */}
          <div className="flex justify-center">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()}{" "}
              <span className="text-green-400 font-medium">XedaFarm</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

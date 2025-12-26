import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.webp";

export default function Header({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "#benefits", label: "Benefits" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain select-none"
              draggable="false"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-200 hover:text-green-300 font-medium transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}

            <button onClick={onOpenModal} className="btn-green ml-4">
              Enquiry
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center">
            <button
              onClick={onOpenModal}
              className="btn-green mr-2 px-5 py-2 text-sm"
            >
              Enquiry
            </button>

          <button
  onClick={() => setMobileOpen((s) => !s)}
  className="p-2 rounded-md text-gray-200 hover:bg-gray-800 relative z-[60]"
  aria-labelledby="menuLabel"
  title={mobileOpen ? "Close Menu" : "Open Menu"}
>
              {mobileOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/*  Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 z-50 transition-all duration-300 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-200 text-2xl font-medium hover:text-green-300 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => {
              onOpenModal();
              setMobileOpen(false);
            }}
            className="btn-green px-8 py-3 text-lg"
          >
            Enquiry
          </button>

          {/* Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-gray-200 hover:text-green-300"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../assets/Bg1.webp";
import bg2 from "../assets/Bg2.webp";
import bg3 from "../assets/Bg3.webp";

export default function Hero({ onOpenModal }) {
  const slides = [
    {
      image: bg1,
      fallbackImage: "/Xeda1.jpg",
      title: "Pure Wheatgrass, Pure Energy",
      desc: "Start your mornings with a burst of natural vitality — cold-pressed, pure, and nutrient-rich.",
      buttons: [{ text: "Order Now", href: "#shop" }],
    },
    {
      image: bg2,
      fallbackImage: "/Xeda1.jpg",
      title: "Nurtured by Nature, Crafted for You",
      desc: "From seed to sip — we ensure every drop delivers sustainable wellness from farm to bottle.",
      buttons: [{ text: "Know Us", href: "#about" }],
    },
    {
      image: bg3,
      fallbackImage: "/Xeda1.jpg",
      title: "Elevate Your Everyday Wellness",
      desc: "Fuel your day with chlorophyll, enzymes, and antioxidants — the natural reset your body deserves.",
      buttons: [{ text: "See Benefits", href: "#benefits" }],
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
      aria-label="Xeda Farm Hero Section"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        loop
        pagination={{ clickable: true }}
        className="hero-swiper h-full w-full"
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} style={{ width: "100%", height: "100%" }}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + slide.fallbackImage) {
                    e.currentTarget.src = slide.fallbackImage;
                  }
                }}
                className="absolute inset-0 h-full w-full object-cover object-center z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 sm:bg-black/50 md:bg-black/45 z-[1]" />
              {/* Text Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
                <div className="max-w-3xl text-white animate-fadeInUp">
                  <h1
                    className="
                      font-extrabold 
                      text-3xl leading-[1.4]
                      sm:text-4xl sm:leading-[1.3]
                      md:text-6xl md:leading-[1.1]
                      drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
                      transition-all duration-300
                    "
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="
                      mt-4 
                      text-base leading-[1.7]
                      sm:text-lg sm:leading-[1.6]
                      md:text-xl md:leading-[1.5]
                      text-gray-200 font-light max-w-2xl mx-auto
                      drop-shadow-md
                    "
                  >
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {slide.buttons.map((btn, i) => {
                      const handleClick = (e) => {
                        e.preventDefault();
                        if (btn.text === "Order Now" && typeof onOpenModal === "function") {
                          onOpenModal();
                        } else {
                          window.location.href = btn.href;
                        }
                      };
                      return (
                        <button
                          key={i}
                          onClick={handleClick}
                          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                          aria-label={btn.text}
                        >
                          {btn.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* Scoped to hero only — unscoped .swiper-slide broke other Swipers (e.g. testimonials). */
        .hero-swiper .swiper-wrapper {
          width: 100% !important;
          height: 100% !important;
        }
        .hero-swiper .swiper-slide {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
        }
        .hero-swiper .swiper-pagination {
          bottom: 25px !important;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: #86efac; /* green-300 */
          opacity: 0.7;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #16a34a; /* green-600 */
          opacity: 1;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

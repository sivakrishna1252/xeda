import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import bg1 from "../assets/Bg1.webp";
import bg2 from "../assets/Bg2.webp";
import bg3 from "../assets/Bg3.webp";

export default function Hero({ onOpenModal }) {
  const slides = [
    {
      image: bg1,
      title: "Pure Wheatgrass, Pure Energy",
      desc: "Start your mornings with a burst of natural vitality — cold-pressed, pure, and nutrient-rich.",
      buttons: [{ text: "Order Now", href: "#shop" }],
    },
    {
      image: bg2,
      title: "Nurtured by Nature, Crafted for You",
      desc: "From seed to sip — we ensure every drop delivers sustainable wellness from farm to bottle.",
      buttons: [{ text: "Know Us", href: "#about" }],
    },
    {
      image: bg3,
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
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        loop
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
             // Background Image
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 sm:bg-black/50 md:bg-black/45 backdrop-brightness-75" />
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
        .swiper-pagination {
          bottom: 25px !important;
        }
        .swiper-pagination-bullet {
          background: #86efac; /* green-300 */
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
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

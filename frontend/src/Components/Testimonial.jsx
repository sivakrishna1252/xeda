import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import maleAvatar from "../assets/Men.webp";
import femaleAvatar from "../assets/women.webp";

const testimonials = [
  {
    name: "Vikram Deshpande",
    location: "Magarpatta City, Pune Maharashtra",
    text: "Post-leg day soreness used to kill my week, but since I added Xeda wheatgrass shots to my routine, my recovery time is way faster. I feel less stiff in the mornings and ready to hit the weights again. Essential for anyone serious about lifting.",
    avatar: maleAvatar,
  },
  {
    name: "Aditya Kulkarni",
    location: "Kharadi, Pune Maharashtra",
    text: "I was skeptical about natural supplements, but the stamina boost is real. Unlike sugary energy drinks that make me jittery, this gives me steady, clean energy for my entire workout. Perfect for my evening sessions after work.",
    avatar: maleAvatar,
  },
  {
    name: "Mrunal Apte",
    location: "Viman Nagar, Pune Maharashtra",
    text: "I stick to a high-protein diet, which made me feel heavy and bloated. Wheatgrass juice fixed my digestion. Now I feel light, energetic, and my workouts in Viman Nagar are so much better because I'm not fighting that sluggish feeling.",
    avatar: femaleAvatar,
  },
  {
    name: "Sayali Joshi",
    location: "Hadapsar, Pune Maharashtra",
    text: "I swapped my chemical pre-workout for a fresh wheatgrass shot, and the difference is crazy. I have better endurance on the treadmill, and honestly, my skin has cleared up so much too. It’s like a detox and energy booster in one.",
    avatar: femaleAvatar,
  },
];

export default function Reviews() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background overflow-hidden"
      aria-labelledby="wheatgrass-reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Section Heading */}
        <h2
          id="wheatgrass-reviews"
          className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6 tracking-tight"
        >
          What People Say About Wheatgrass Juice
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-14 text-base md:text-lg leading-relaxed">
          Our customers love starting their mornings with{" "}
          <span className="text-green-700 font-semibold">
            Xeda Wheatgrass Juice
          </span>{" "}
          — a pure, natural way to boost energy, immunity, and inner wellness.
          Here's what they're saying about their experience!
        </p>

        {/* Swiper Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper pb-16 px-4 w-full"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="py-2 mb-4">
                <div className="flex justify-center">
                  <div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl px-6 py-6 shadow-lg border-2 border-emerald-900 mx-2
                               hover:shadow-md hover:scale-[1.03] transition-transform duration-300 
                               focus-within:ring-4 focus-within:ring-emerald-200 h-[440px] w-full max-w-sm 
                               flex flex-col items-center gap-4"
                    role="group"
                    aria-label={`Testimonial by ${t.name}`}
                    tabIndex="0"
                  >
                    <img
                      src={t.avatar}
                      alt={`${t.name} from ${t.location}`}
                      className="w-20 h-20 rounded-full border-4 border-green-400 shadow-md object-cover mb-2"
                      loading="lazy"
                    />
                    <p className="text-gray-800 text-base md:text-base leading-relaxed italic text-center max-w-[88%] mx-auto mb-2">
                      "{t.text}"
                    </p>
                    <div className="mt-auto w-full border-t border-emerald-100 pt-3 pb-2 px-2 text-center">
                      <h4 className="font-semibold text-emerald-800 text-lg leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-[15px] mt-1.5 leading-snug">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Styling */}
          <style>{`
            .testimonials-swiper .swiper-pagination {
              position: absolute;
              bottom: 0px !important;
              left: 0;
              width: 100%;
            }
            .testimonials-swiper .swiper-pagination-bullet {
              background: #86efac; /* green-300 */
              opacity: 0.6;
              width: 10px;
              height: 10px;
              transition: all 0.3s ease;
            }
            .testimonials-swiper .swiper-pagination-bullet-active {
              background: #16a34a; /* green-600 */
              opacity: 1;
              transform: scale(1.2);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

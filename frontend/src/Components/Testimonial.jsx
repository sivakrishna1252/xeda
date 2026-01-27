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
      className="py-24 bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 overflow-hidden"
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
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="py-4 mb-4">
                <div className="flex justify-center">
                  <div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100 
                               hover:shadow-md hover:scale-[1.03] transition-transform duration-300 
                               focus-within:ring-4 focus-within:ring-emerald-200 h-[380px] w-full max-w-sm 
                               flex flex-col items-center justify-between"
                    role="group"
                    aria-label={`Testimonial by ${t.name}`}
                    tabIndex="0"
                  >
                    <img
                      src={t.avatar}
                      alt={`${t.name} from ${t.location}`}
                      className="w-20 h-20 rounded-full border-4 border-green-400 shadow-md object-cover mb-4"
                      loading="lazy"
                    />
                    <p className="text-gray-800 text-base text-md leading-relaxed italic mb-4">
                      "{t.text}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-emerald-800 text-lg">
                        {t.name}
                      </h4>
                      <p className="text-gray-600 text-base md:text-lg">{t.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Styling */}
          <style>{`
            .swiper-pagination {
              position: absolute;
              bottom: 0px !important; 
              left: 0;
              width: 100%;
            }
            .swiper-pagination-bullet {
              background: #86efac; /* green-300 */
              opacity: 0.6;
              width: 10px;
              height: 10px;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
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

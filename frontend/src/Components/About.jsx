import React from "react";
import aboutImg from "../assets/About.webp";

export default function About({ onOpenModal }) {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-green-50 to-white" aria-label="About Xeda Farm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            About Xeda Farm
          </h2>
          <div className="mx-auto w-20 h-1 bg-green-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-100 bg-white transform transition duration-500 hover:scale-105">
              <img src={aboutImg} alt="Wheatgrass juice bottle - Xeda Farm" className="w-full h-[420px] object-cover" />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              At <span className="font-semibold text-green-700">Xeda Farm</span>, we cultivate premium wheatgrass through
              sustainable, small-batch farming to deliver the purest form of green nutrition. Each bottle is grown,
              harvested, and pressed with precision to ensure unmatched freshness and nutrient density — building not
              just a product, but a lifestyle rooted in clean and conscious wellness.
            </p>

            <div className="flex justify-center md:justify-start pt-4">
              <button onClick={onOpenModal} className="btn-green">
          Shop now
        </button>
            </div>

            <p className="text-base md:text-lg text-gray-500 text-center md:text-left">
              Sustainably grown • Nutrient-dense • 100% natural
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

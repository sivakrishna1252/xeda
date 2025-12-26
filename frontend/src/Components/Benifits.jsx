import React from "react";
import {
  FaDumbbell,
  FaLungs,
  FaLeaf,
  FaTint,
  FaBalanceScale,
  FaHeartbeat,
} from "react-icons/fa";
import {
  GiBiceps,
  GiWaterDrop,
  GiEnergyArrow,
  GiStrongMan,
  GiHealthPotion,
} from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

import menImage from "../assets/Male.webp";
import womenImage from "../assets/female.webp";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-10 min-h-screen py-12 px-4 bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 text-gray-800"
    >
      {/* ===== Title Section ===== */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-3 tracking-tight">
          The Powerful Health Benefits of Wheatgrass
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover how wheatgrass supports both men’s strength and women’s
          natural balance — promoting energy, detox, and overall vitality.
        </p>
      </div>

      {/* ===== Card Grid ===== */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ===== Male Card ===== */}
        <Card
          image={menImage}
          title=" His Benefits "
          subtitle="Strength • Recovery • Energy"
          items={[
            {
              icon: <GiBiceps />,
              title: "Muscle Recovery Booster",
              desc: "Speeds up recovery and reduces fatigue after workouts.",
            },
            {
              icon: <FaBalanceScale />,
              title: "Natural Testosterone Support",
              desc: "Promotes hormonal balance and vitality.",
            },
            {
              icon: <FaLungs />,
              title: "Oxygen & Endurance Enhancer",
              desc: "Improves oxygen flow and stamina.",
            },
            {
              icon: <FaTint />,
              title: "Liver Cleanser & Detoxifier",
              desc: "Supports liver health and metabolism.",
            },
            {
      icon: <FaHeartbeat />,
      title: "Heart Health Support",
      desc: "Helps lower bad cholesterol and supports better blood circulation for long-term cardiovascular health.",
    },
            {
              icon: <MdHealthAndSafety />,
              title: "Nutrient-Dense Superfood",
              desc: "Rich in vitamins, minerals, and amino acids.",
            },
          ]}
        />

        {/* ===== Female Card ===== */}
        <Card
          image={womenImage}
          title=" Her Benefits"
          subtitle="Balance • Glow • Energy"
          items={[
            {
              icon: <FaLeaf />,
              title: "Hormone Balance (PCOD Support)",
              desc: "Aids liver detox for hormone regulation.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Blood Sugar Control",
              desc: "Enhances insulin sensitivity and reduces cravings.",
            },
            {
              icon: <GiHealthPotion />,
              title: "Reduces Inflammation & Bloating",
              desc: "Soothes stress and supports gut health.",
            },
            {
              icon: <FaDumbbell />,
              title: "Supports Weight Management",
              desc: "Boosts metabolism and healthy fat burn.",
            },
            {
              icon: <GiEnergyArrow />,
              title: "Glowing Skin & Clear Complexion",
              desc: "Purifies blood and improves radiance.",
            },
            {
              icon: <GiStrongMan />,
              title: "Natural Energy Boost",
              desc: "Provides steady, caffeine-free energy.",
            },
          ]}
        />
      </div>
    </section>
  );
}

/* ====== Reusable Card Component ====== */
function Card({ image, title, subtitle, items }) {
  return (
    <div
      tabIndex="0"
      className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden flex flex-col 
                 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-emerald-200 outline-none"
      role="region"
      aria-label={title}
    >
      {/* ===== Image Section (Auto Height) ===== */}
      {image && (
        <div className="relative w-full overflow-hidden flex justify-center bg-gray-50">
          <img
            src={image}
            alt={`Illustration for ${title}`}
            className="object-cover object-center w-full h-auto rounded-t-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* ===== Content Section ===== */}
      <div className="flex flex-col flex-grow p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* ===== Benefit List ===== */}
        <ul className="space-y-3 text-left flex-grow">
          {items.map((item, i) => (
            <BenefitItem key={i} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ====== Reusable Benefit Item Component ====== */
function BenefitItem({ icon, title, desc }) {
  return (
    <li className="flex items-start gap-3 group">
      <div
        className="text-emerald-700 text-xl p-2 bg-emerald-100 rounded-full flex-shrink-0
                   transition-transform duration-200 transform group-hover:scale-110 group-hover:bg-emerald-200"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <strong className="text-base text-gray-900 block font-semibold">
          {title}
        </strong>
        <p className="text-gray-600 text-sm leading-snug">{desc}</p>
      </div>
    </li>
  );
}

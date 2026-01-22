import React from "react";

export default function CTA({ onOpenModal }) {
  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-b from-green-50 to-white text-center"
      aria-label="Get in Touch Section"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Get in Touch With Us
        </h2>

        <p className="text-base md:text-lg text-green-700 mb-10 leading-relaxed">
          We'd love to hear from you — connect with us for any enquiries or collaborations.
        </p>

        <button onClick={onOpenModal} className="btn-green">
          Enquiry Now
        </button>
      </div>
    </section>
  );
}

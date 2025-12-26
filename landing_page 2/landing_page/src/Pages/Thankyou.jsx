// src/pages/ThankYou.js
import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
        Thank You! 🌿
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-md">
        Your enquiry has been successfully submitted. Our team will contact you shortly regarding your purchase.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:opacity-95 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnquiryModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setErrors({});
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function validate(values) {
    const errs = {};

    // Name validation
    if (!values.name?.trim()) {
      errs.name = "Full name is required";
    }

    // Email validation
    if (!values.email?.trim()) {
      errs.email = "Email is required";
    } else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errs.email = "Please enter a valid email address";
    }

    // Phone validation - exactly 10 digits
    if (!values.phone?.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone.trim())) {
      errs.phone = "Phone number must be exactly 10 digits";
    }

    // Product validation
    if (!values.product?.trim()) {
      errs.product = "Product and quantity are required";
    }

    // Location/Pincode validation - exactly 6 digits
    if (!values.location?.trim()) {
      errs.location = "Pin code is required";
    } else if (!/^\d{6}$/.test(values.location.trim())) {
      errs.location = "Pin code must be exactly 6 digits";
    }

    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const values = Object.fromEntries(fd.entries());
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          select_product: values.product,
          quality: values.quantity,
          city_pincode: values.location,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        e.target.reset();
        onClose();
        navigate("/thank-you");
      } else {
        // Show backend error message if available
        const errorMessage = data.message || data.errors || "Failed to submit enquiry. Please try again.";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("idle");
      alert(error.message || "Something went wrong, please try again!");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
      >
        <div className="px-6 pt-6 pb-2 text-center border-b">
          <h2 className="text-xl font-bold text-green-800">Purchase Enquiry</h2>
          <p className="text-sm text-gray-600 mt-1">
            Fill in your details and we’ll get in touch shortly 🌿
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-3">
          {/* Name */}
          <input
            ref={nameRef}
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

          {/* Product & Quantity */}
          <div className="flex gap-3">
            <select name="product" defaultValue="" className="w-2/3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none">
              <option value="" disabled>Select Product</option>
              <option value="30ml Wheatgrass Juice">30ml Wheatgrass Juice</option>
              <option value="50ml Wheatgrass Juice">50ml Wheatgrass Juice</option>
            </select>
            <select name="quantity" defaultValue="" className="w-1/3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none">
              <option value="" disabled>Qty</option>
              {Array.from({ length: 40 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
          </div>
          {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}

          {/* Location */}
          <input
            name="location"
            placeholder="City / Pin Code"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full mt-3 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:opacity-95 transition"
          >
            {status === "sending" ? "Submitting..." : "Submit Enquiry"}
          </button>

          {/* Close */}
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1.5 rounded-full bg-white border text-gray-700 shadow-sm hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

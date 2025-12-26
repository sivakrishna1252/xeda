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
    if (!values.name?.trim()) errs.name = "Full name is required";

    // Email Validation
    if (!values.email?.trim()) {
      errs.email = "Email is required";
    } else if (!values.email.match(/^\S+@\S+\.\S+$/)) {
      errs.email = "Please enter a valid email address";
    }

    // Phone Validation (10 digits)
    if (!values.phone?.trim()) {
      errs.phone = "Phone number is required";
    } else if (!values.phone.match(/^\d{10}$/)) {
      errs.phone = "Phone number must be exactly 10 digits";
    }

    if (!values.product?.trim()) errs.product = "Product is required";

    // Pincode/Location Validation (6 digits)
    if (!values.location?.trim()) {
      errs.location = "City / Pin Code is required";
    } else {
      // Check if it contains a 6-digit number and no more than that/no alphabets if it's just a pincode
      // The user wants 6 digits and no alphabets for pincode.
      // If the field is "City / Pin Code", it might be hard to validate strictly if they enter both.
      // But based on request "6 kana ykakvu chesin alphabets use chesina", I'll treat it as Pincode check.
      const pincode = values.location.trim();
      if (!pincode.match(/^\d{6}$/)) {
        errs.location = "Pin Code must be exactly 6 digits and numeric";
      }
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
      const response = await fetch('http://localhost:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          select_product: values.product,
          quality: values.quantity || "1", // Fallback to 1 if not selected
          pincode: values.location, // Explicitly sending pincode to backend
          message: `City/Pin Code: ${values.location}`
        })
      });

      const data = await response.json();

      if (data.success || response.ok) {
        e.target.reset();
        onClose();
        navigate("/thank-you");
      } else {
        setStatus("idle");
        setErrors({ submit: data.errors || "Submission failed" });
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setStatus("idle");
      setErrors({ submit: "An error occurred. Please try again later." });
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
              <option value="500ml Wheatgrass Juice">30ml Wheatgrass Juice</option>
              <option value="250ml Wheatgrass Juice">50ml Wheatgrass Juice</option>
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
          {errors.submit && <p className="text-red-500 text-sm mt-1 text-center">{errors.submit}</p>}

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

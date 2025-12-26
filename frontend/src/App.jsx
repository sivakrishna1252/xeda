// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import ThankYou from "./Pages/Thankyou";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with all components */}
        <Route path="/" element={<Home />} />

        {/* Thank You page after form submission */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

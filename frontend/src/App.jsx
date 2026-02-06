// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import ThankYou from "./Pages/Thankyou";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";

import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page with all components */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Thank You page after form submission */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

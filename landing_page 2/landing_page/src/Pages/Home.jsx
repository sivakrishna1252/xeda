// src/pages/Home.jsx
import React, { useState } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import EnquiryModal from "../Components/EnquiryModal";
import CTA from "../Components/CTA";
import Footer from "../Components/footer";
import Benefits from "../Components/Benifits";
import About from "../Components/About";
import Testimonials from "../Components/Testimonial";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <EnquiryModal isOpen={isOpen} onClose={closeModal} />
      <Benefits />
      <About  onOpenModal={openModal}/>
      <Testimonials />
      <CTA onOpenModal={openModal} />
      <Footer />
    </>
  );
}

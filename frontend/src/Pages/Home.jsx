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
import { Helmet } from "react-helmet";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.xedafarm.com/#organization",
      "name": "Xeda Farm",
      "description":
        "Premium fresh wheatgrass juice provider in Pune, focused on natural wellness and recovery.",
      "url": "https://www.xedafarm.com/",
      "email": "info@xedafarm.com",
      "telephone": "+91-9172266069",
      "priceRange": "₹₹",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.xedafarm.com/logo.png",
        "width": 112,
        "height": 112
      },
      "image": "https://www.xedafarm.com/images/wheatgrass-juice.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cityvista, Kharadi",
        "addressLocality": "Pune",
        "postalCode": "411048",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5515",
        "longitude": "73.9507"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.youtube.com/@XedaFarm",
        "https://www.facebook.com/xedafarm",
        "https://www.instagram.com/xedafarm",
        "https://www.linkedin.com/company/xeda-farm"
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Xeda Farm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Xeda Farm is a wellness focused brand in India offering fresh wheatgrass juice harvested at an early growth stage."
          }
        },
        {
          "@type": "Question",
          "name": "How much wheatgrass juice should be consumed daily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A common daily intake is around 30 ml. New users often start with a smaller quantity."
          }
        }
      ]
    }
  ]
};

  return (
    
    <>
    

<Helmet>
  <title>Benefits of Wheatgrass Juice for Gym guys | Energy Recovery and Fitness</title>
  <meta name="title" content="Benefits of Wheatgrass Juice for Gym | Energy boost,Muscle Recovery and Fitness"></meta>
 <meta name="description" content="Discover the benefits of wheatgrass juice for gym workouts. Improve energy, muscle recovery, digestion and immunity with fresh wheatgrass juice from Xedafarm in Pune."/>
<script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>
</Helmet>


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

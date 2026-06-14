import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-navy">
      {/* Navigation Layer */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Area of Tampa real estate Consulting */}
        <Hero />

        {/* Detailed About Us Segment */}
        <About />

        {/* Dynamic Services Portfolio */}
        <Services />

        {/* Boutique Why Choose Us Grid */}
        <WhyChooseUs />

        {/* How It Works Horizontal Pipeline */}
        <HowItWorks />

        {/* Coordinates contact validation & map lookups */}
        <Contact />
      </main>

      {/* Trust & Legal Disclosures Footer */}
      <Footer />
    </div>
  );
}

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

      {/* Floating Promo Button */}
      <a
        href="https://auroraadv.co/?tab=wizard"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-navy text-gold text-center rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-gold cursor-pointer group"
      >
        <div className="absolute inset-0 bg-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight relative z-10">Get this<br/>website<br/>for only<br/><span className="text-white text-sm md:text-base">$999</span></span>
      </a>
    </div>
  );
}

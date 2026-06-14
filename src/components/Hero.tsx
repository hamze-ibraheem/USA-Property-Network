import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Building2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-navy flex items-center justify-center pt-28 pb-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 35, 66, 0.92), rgba(10, 35, 66, 0.95)), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)"
      }}
    >
      {/* Background Decorative Grid Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent pointer-events-none z-[1]" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and USP */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-gold/30 px-3 py-1.5 rounded-none text-xs sm:text-xs font-bold tracking-[0.15em] text-gold uppercase"
          >
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Exclusive Consulting • Tampa, FL</span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6.5xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Your Trusted <br />
            <span className="text-gold">Real Estate Partner</span> <br />
            in Tampa, Florida
          </motion.h1>

          {/* Subheadline (Italic gold, from Professional Polish Design) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-lg sm:text-xl text-gold italic leading-relaxed max-w-2xl opacity-95"
          >
            Boutique Service. Global Perspective. Local Expertise.
          </motion.p>

          {/* Body brief descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl font-light"
          >
            A private real estate strategy consultancy delivering neighborhood alignment, transaction diagnostics, and detailed market stress-testing. We build wealth with absolute precision.
          </motion.p>

          {/* Call-to-actions (Square corners, uppercase, bold tracking from Professional Polish design) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white bg-gold hover:bg-gold-hover transition-colors duration-200 rounded-none shadow-lg group"
            >
              Schedule a Strategy Session
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white border border-white/20 hover:border-gold hover:text-gold transition-colors duration-200 rounded-none bg-white/5"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Core Trust Indicators (Flat boutique look) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-white/10"
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <ShieldCheck className="h-4.5 w-4.5 text-gold shrink-0" />
              <span className="text-xs tracking-wider uppercase font-medium">Licensed Analysts</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Building2 className="h-4.5 w-4.5 text-gold shrink-0" />
              <span className="text-xs tracking-wider uppercase font-medium">Tailored Advisory</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4.5 w-4.5 text-gold shrink-0" />
              <span className="text-xs tracking-wider uppercase font-medium">Tampa Footprint</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Stunning real-estate photo inside a sharp border */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-[400px] lg:max-w-none group">
            {/* Elegant Double Border Frame Design (Sharp Square corner format) */}
            <div className="absolute -inset-3 rounded-none border-2 border-gold/40 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500" />
            <div className="relative z-10 overflow-hidden rounded-none bg-navy-950 border border-gold/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80"
                alt="Tampa boutique real estate consultancy representation"
                className="w-full h-[400px] object-cover filter brightness-90 contrast-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlaid glass panel with strict borders */}
              <div className="absolute bottom-6 left-6 right-6 bg-navy/95 border border-gold/30 p-5 rounded-none text-left">
                <p className="font-serif text-sm italic text-gold font-bold">
                  "Integrity. Precision. Market Wisdom."
                </p>
                <p className="text-xs text-gray-300 mt-1 font-sans font-light leading-relaxed">
                  We operate as true fiduciaries for our consulting clients, prioritizing equity returns above immediate volume transactions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tampa Skyline SVG Silhouette Overlay at bottom of Hero */}
      <div className="absolute bottom-0 inset-x-0 w-full z-[2] overflow-hidden pointer-events-none select-none">
        {/* Rear Skyline Shadow */}
        <svg
          className="w-full h-16 md:h-24 text-[#030e1c]/45 translate-y-2 scale-y-105"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,200 L0,180 L40,180 L40,150 L60,150 L60,180 L110,180 L110,140 L150,140 L150,180 L180,180 L180,120 L220,120 L220,105 L230,105 L230,120 L260,120 L260,180 L320,180 L320,165 L350,165 L350,180 L410,180 L410,90 L460,90 L460,70 L480,90 L490,90 L490,180 L540,180 L540,130 L590,130 L590,180 L630,180 L630,80 L650,55 L670,80 L680,80 L680,180 L740,180 L740,110 L790,110 L790,180 L840,180 L840,145 L880,145 L880,180 L920,180 L920,60 C940,60 950,50 960,60 L960,180 L1010,180 L1010,115 L1060,115 L1060,180 L1100,180 L1100,140 L1130,140 L1130,180 L1190,180 L1190,85 C1210,80 1220,80 1240,85 L1240,180 L1300,180 L1300,150 L1340,150 L1340,180 L1400,180 L1400,120 L1440,120 L1440,200 Z" />
        </svg>

        {/* Foreground Skyline Shadow */}
        <svg
          className="w-full h-12 md:h-18 text-white"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,200 L0,180 L80,180 L80,160 L120,160 L120,180 L160,180 L160,130 L190,130 L190,180 L230,180 L230,100 L270,100 L270,180 L350,180 L350,150 L390,150 L390,180 L440,180 L440,110 L480,110 L480,95 L490,95 L490,110 L520,110 L520,180 L600,180 L600,140 L640,140 L640,180 L680,180 L680,70 L720,40 L720,20 L730,40 L760,70 L760,180 L820,180 L820,125 L860,125 L860,180 L900,180 L900,80 L930,80 C935,70 945,70 950,80 L960,80 L960,180 L1040,180 L1040,135 L1080,135 L1080,180 L1120,180 L1120,110 L1150,110 L1150,180 L1220,180 L1220,90 Q1240,75 1260,90 L1260,180 L1320,180 L1320,145 L1360,145 L1360,180 L1440,180 L1440,200 Z" />
        </svg>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { Heart, Landmark, Compass, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Landmark className="h-6 w-6 text-gold" />,
      title: "Boutique Strategy",
      description: "We work with a select list of clients to provide highly-customized, unhurried property guidance.",
    },
    {
      icon: <Compass className="h-6 w-6 text-gold" />,
      title: "Pure Consultation",
      description: "Unlike high-volume brokerages, our focus is advice, analysis, and advocacy, not quick sales.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Visual Element - Left On Mobile, Right on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Gold decorative border offset (Square layout) */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-none z-0" />
              <div className="relative z-10 rounded-none shadow-xl overflow-hidden bg-navy">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="A professional team conducting interactive consultation in a modern bright Tampa boardroom"
                  className="w-full h-[400px] object-cover filter brightness-95 transform hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Small floating stat badge */}
              <div className="absolute bottom-6 right-6 z-20 bg-navy text-white p-5 border border-gold/30 rounded-none shadow-xl">
                <p className="font-serif text-3xl font-bold text-gold">100%</p>
                <p className="text-[10px] text-gray-300 font-sans tracking-[0.15em] uppercase font-bold">
                  Client-Centric Mandate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Engagement - Right On Mobile, Left on Desktop */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
                Bespoke Property Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
                Empowering Your Real Estate Choices with Pure Expertise
              </h2>
              <div className="w-16 h-1 bg-gold rounded-none mt-2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-gray-600 font-sans font-light leading-relaxed text-sm sm:text-base text-justify"
            >
              <p>
                At <span className="font-medium text-navy">USA Property Network, LLC</span>, we operate differently. We are a specialized real estate advisory rather than a standard commission-driven transactional brokerage. By stripping away volume pressures, we stand beside our clients as trusted strategic partners.
              </p>
              <p>
                Nestled on the historical Frances Ave in the heart of Tampa, we understand the local streets, the emerging commercial zones, and the micro-neighborhood trends. Whether you are an individual buying your first home or a family managing an investment portfolio, our custom guidance ensures you acquire or sell at optimal points in the market cycle.
              </p>
            </motion.div>

            {/* highlights key items */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex space-x-3 items-start">
                  <div className="p-2.5 bg-gray-50 border border-gold/20 rounded-none shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-navy text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

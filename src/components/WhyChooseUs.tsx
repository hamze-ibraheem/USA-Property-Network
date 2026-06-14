import React from "react";
import { motion } from "motion/react";
import { Landmark, Users2, ShieldAlert, Sparkles, Map } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Local Tampa Expertise",
      description:
        "We live, breathe, and analyze Tampa. From Bayshore Boulevard up to Seminole Heights, Channelside, and Tampa Palms, we leverage granular knowledge of microsecond sales data, upcoming retail expansions, and school districts to inform your decisions.",
      stat: "TAMPA RESIDENT EXPERTS",
      badge: <Map className="h-5 w-5 text-gold" />,
    },
    {
      title: "Personalized 1-on-1 Guidance",
      description:
        "We operate strictly on a boutique scale. This means no generic newsletters or handing your file off to raw junior assistants. You work one-on-one with a dedicated advisor crafting strategies specifically designed around your life and wallet.",
      stat: "100% PERSONAL ADVOCACY",
      badge: <Users2 className="h-5 w-5 text-gold" />,
    },
    {
      title: "Full Network of Trusted Partners",
      description:
        "Real estate transitions require an army of professionals. We connect you directly with our vetted private network of premium lenders, sharp structural inspectors, experienced real estate attorneys, and active local contractors.",
      stat: "VETTED REGIONAL ECOSYSTEM",
      badge: <ShieldAlert className="h-5 w-5 text-gold" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
            The Boutique Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Why Trusted Clients Partner With Us
          </h2>
          <div className="w-16 h-1 bg-gold rounded-none mx-auto" />
          <p className="text-gray-500 font-sans font-light text-sm sm:text-base leading-relaxed">
            By avoiding the traditional real-estate brokerage volume model, we build a trusted partnership cycle centered on fiduciary integrity, precision diagnostics, and genuine care.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((pt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-none bg-[#F8F9FA] border border-gray-200/80 shadow-sm flex flex-col justify-between hover:bg-navy hover:text-white hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {/* Badge logo wrap */}
                  <div className="p-3 bg-white border border-gray-200/50 group-hover:bg-gold/15 group-hover:border-gold/30 rounded-none shadow-sm transition-all duration-300 shrink-0">
                    {pt.badge}
                  </div>
                  {/* Small sequence marker */}
                  <span className="font-sans text-[11px] font-bold text-gray-300 group-hover:text-gold/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Text Context */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {pt.description}
                  </p>
                </div>
              </div>

              {/* Bottom Stat Banner */}
              <div className="mt-8 pt-4 border-t border-gray-200/50 group-hover:border-white/10 flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#9A8146] group-hover:text-gold uppercase">
                  {pt.stat}
                </span>
                <span className="text-[10px] font-sans tracking-wide uppercase text-gray-400 group-hover:text-gold/80 transition-colors font-bold">
                  Fiduciary Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Callout block with stripes and gold border frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-navy text-white p-8 md:p-12 rounded-none border-t-4 border-gold shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 35, 66, 0.94), rgba(10, 35, 66, 0.96)), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.015) 10px, rgba(255,255,255,0.015) 11px)"
          }}
        >
          {/* Subtle logo silhouette in background */}
          <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-[0.03] pointer-events-none">
            <Landmark className="h-96 w-96 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-left">
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Ready for <span className="text-gold">conflict-free</span> property intelligence?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-sans font-light leading-relaxed">
                Discover the value of partnering with an independent consultant who is legally bound to work on your behalf, prioritizing equity over speed.
              </p>
            </div>
            <div className="md:col-span-1 md:text-right">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-4.5 text-xs font-bold uppercase tracking-[0.12em] text-white bg-gold hover:bg-gold-hover transition-colors rounded-none shadow-lg"
              >
                Let's Partner Up
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { Calendar, Sliders, ShieldCheck, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Schedule a Free Call",
      subtitle: "15-Minute Alignment",
      description:
        "Begin with a direct introductory call with a senior advisor. We listen to your buying, selling, or portfolio goals and determine if our consulting model aligns with your strategy.",
      icon: <Calendar className="h-6 w-6 text-gold" />,
    },
    {
      step: 2,
      title: "Get Your Custom Strategy",
      subtitle: "In-Depth Diagnosis",
      description:
        "We stress-test your objectives against current Tampa MLS grids, zoning laws, capital requirements, and neighborhood trends to engineer a tailor-made property playbook.",
      icon: <Sliders className="h-6 w-6 text-gold" />,
    },
    {
      step: 3,
      title: "Close with Confidence",
      subtitle: "Secured Execution",
      description:
        "Walk into negotiations backed by professional analysts, and close with the full legal and logistical support of our local lender, inspector, and legal networks.",
      icon: <ShieldCheck className="h-6 w-6 text-gold" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
            Our Methods
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            The Consultation Journey
          </h2>
          <div className="w-16 h-1 bg-gold rounded-none mx-auto" />
          <p className="text-gray-500 font-sans font-light text-sm sm:text-base leading-relaxed">
            We've simplified the real estate advisory pipeline. Follow our structured 3-step blueprint to secure premium terms on your next Florida property venture.
          </p>
        </div>

        {/* Process Map Grid */}
        <div className="relative mt-8">
          {/* Subtle connecting line for desktop */}
          <div className="absolute top-[38px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gold/10 via-gold/55 to-gold/10 hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Step Square / Diamond Button */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-none bg-white border-2 border-gold flex items-center justify-center shadow-lg group hover:bg-navy hover:border-navy transition-all duration-300">
                    <div className="p-4 rounded-none bg-gold/10 group-hover:bg-gold/25 transition-all">
                      {item.icon}
                    </div>
                  </div>
                  {/* Floating Square Number Badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-navy border border-gold/40 text-gold text-xs font-bold font-serif flex items-center justify-center rounded-none shadow-md">
                    {item.step}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-gold uppercase mt-2">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm font-sans font-light text-gray-500 leading-relaxed max-w-xs">
                  {item.description}
                </p>

                {/* Pointer for desktop between steps */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 translate-x-6 text-gold opacity-40">
                    <ArrowRight className="h-5 w-5 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small motivational quote (Square layout) */}
        <div className="mt-16 bg-white border border-gray-200 p-6 rounded-none max-w-2xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-gray-500 italic block leading-relaxed">
            "By taking the time to consult first, we save our clients an average of 42 hours of unfocused viewings and streamline cash closures by up to two weeks."
          </p>
        </div>

      </div>
    </section>
  );
}

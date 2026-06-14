import React from "react";
import { motion } from "motion/react";
import {
  UserCheck,
  TrendingUp,
  BarChart3,
  FileCheck,
  Map,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <UserCheck className="h-7 w-7 text-gold" />,
      title: "Buyer Consulting",
      description:
        "Comprehensive, objective buyer representation. We analyze home values, identify hidden neighborhood micro-segments, and structurally engineer negotiation strategies specifically tailored to your terms.",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-gold" />,
      title: "Seller Strategy",
      description:
        "Premium target marketing and architectural staging strategy. We inspect the landscape, formulate localized pricing grids, and craft a bespoke positioning strategy to ensure you exit with maximum yields.",
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-gold" />,
      title: "Investment Property Analysis",
      description:
        "Data-driven financial stress-testing. We analyze capital expenditure, projected cash flows, internal rate of return (IRR), and cap-rate sensitivity analysis to construct airtight real estate investments.",
    },
    {
      icon: <FileCheck className="h-7 w-7 text-gold" />,
      title: "Market Research & Reports",
      description:
        "Bespoke Tampa market reports. Access proprietary intelligence tables tracking inventory fluctuations, local development blueprints, zoning ordinances, and structural pricing trends.",
    },
    {
      icon: <Map className="h-7 w-7 text-gold" />,
      title: "Relocation Assistance",
      description:
        "Executive lifestyle and structural integration. Detailed school evaluations, transit metrics, and neighbourhood pairing audits for individuals and corporations relocating to the Tampa Bay area.",
    },
    {
      icon: <Briefcase className="h-7 w-7 text-gold" />,
      title: "Portfolio Management",
      description:
        "Strategic hold-versus-sell diagnostics. Optimize equity allocations, audit current operational expenditures, and strategize long-term 1031 tax-deferred exchanges to compound your wealth.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8F9FA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Consulting Capabilities Group
          </h2>
          <div className="w-16 h-1 bg-gold rounded-none mx-auto" />
          <p className="text-gray-500 font-sans font-light text-sm sm:text-base leading-relaxed">
            We provide deep analytical clarity and high-tier advocacy. Each consultation service is independent, conflict-free, and designed to de-risk transactions.
          </p>
        </div>

        {/* Services Grid (Grid Column Borders look like real luxury newspaper columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-8 rounded-none border border-gray-200 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Icon wrap */}
                <div className="p-3 bg-gray-50 inline-block rounded-none border border-gray-100 group-hover:bg-navy group-hover:border-gold/60 transition-all duration-300">
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    {svc.icon}
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Action connection */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold tracking-wider text-navy uppercase group-hover:text-gold transition-colors duration-300">
                <a href="#contact" className="hover:underline flex items-center space-x-1">
                  <span>Enquire About Service</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small boutique disclaimer at the bottom */}
        <div className="text-center mt-12 text-xs italic text-gray-400">
          *Note: USA Property Network, LLC provides pure real estate strategic advisory and investment analytics. We are not a listing brokerage, maintaining absolute alignment with buyer and investor success.
        </div>
      </div>
    </section>
  );
}

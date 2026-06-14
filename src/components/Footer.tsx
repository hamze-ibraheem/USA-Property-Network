import React from "react";
import { Landmark, ArrowUp, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t-3 border-gold text-gray-300">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Col 1: Brand Identifier */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-gold/15 rounded-none border border-gold/40">
                <Landmark className="h-5.5 w-5.5 text-gold" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight block">
                  USA <span className="text-gold">Property Network</span>
                </span>
                <span className="text-[10px] font-sans tracking-[0.15em] text-gold/90 uppercase block -mt-1 font-semibold">
                  Consulting Services, LLC
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed max-w-sm">
              Empowering individuals, families, and seasoned investors with high-fidelity analytics, local Tampa Bay market expertise, and conflict-free strategic advice.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
              Quick Portals
            </span>
            <ul className="space-y-2 text-xs sm:text-sm pt-1">
              <li>
                <a href="#about" className="hover:text-gold transition-colors font-sans font-light">
                  About the Firm
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors font-sans font-light">
                  Consulting Capabilities
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold transition-colors font-sans font-light">
                  The Boutique Advantage
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold transition-colors font-sans font-light">
                  Align Journey
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors font-sans font-light">
                  Request consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Disclosures & Equal Housing */}
          <div className="md:col-span-4 space-y-4 text-left">
            <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
              Fiduciary Mandate
            </span>
            <p className="text-[11px] text-gray-400 font-sans font-light leading-relaxed pt-1">
              USA Property Network, LLC is a private real estate strategy consultancy headquartered in Tampa, Florida. We are not a traditional broker agency, do not execute escrow banking, and provide independent advisory. Equal Housing Opportunity.
            </p>
            <div className="flex items-center space-x-3 text-[10px] sm:text-xs pt-1.5">
              <span className="border border-white/10 px-2 py-0.5 rounded-none text-gray-400 font-bold uppercase tracking-wider">
                EHO Certified
              </span>
              <span className="border border-white/10 px-2 py-0.5 rounded-none text-gray-400 font-bold uppercase tracking-wider">
                FL Registered LLC
              </span>
            </div>
          </div>

        </div>

        {/* Lower Divider and Meta details */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-[11px] sm:text-xs text-gray-400 font-sans font-light space-y-1">
            <p>© 2025-2026 USA Property Network, LLC. All rights worldwide reserved.</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
              TAMPA SUITE • 209 E Frances Ave #1/2, Tampa, FL 33602 • +1 813-400-3403
            </p>
          </div>

          {/* Scroll-to-top handler */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/5 border border-white/15 hover:border-gold hover:text-gold rounded-none text-gray-400 transition-all duration-300 flex items-center space-x-1 text-xs cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span className="uppercase font-bold tracking-wider text-[10px]">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { Menu, X, Landmark, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/98 backdrop-blur-md py-4 shadow-lg border-b-3 border-gold"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Section */}
          <a
            href="#"
            id="logo-link"
            className="flex items-center space-x-3 text-white group"
          >
            <div className="p-2 bg-gold/15 rounded-none border border-gold/40 group-hover:bg-gold/25 transition-all duration-300">
              <Landmark className="h-6 w-6 text-gold" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight block">
                USA <span className="text-gold">Property Network</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.15em] text-gold/90 uppercase block -mt-1 font-semibold">
                Consulting Services, LLC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] font-bold text-gray-200 hover:text-gold uppercase tracking-[0.12em] transition-colors duration-200 block relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover transition-colors duration-200 rounded-none shadow-md"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              +1 813-400-3403
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-none text-gray-300 hover:text-white hover:bg-navy/50 focus:outline-none transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-[76px] bg-navy/98 backdrop-blur-lg border-b-3 border-gold shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-gold hover:bg-white/5 rounded-none transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gold/20 px-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover rounded-none shadow transition-colors duration-200"
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

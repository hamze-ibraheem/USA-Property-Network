import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Map as MapIcon,
  ShieldAlert,
} from "lucide-react";

export default function Contact() {
  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Business Hours State
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    // Determine if boutique office is currently open based on EST timeline
    const checkOpenStatus = () => {
      // Find local EST time
      const date = new Date();
      // Translate current time to US/Eastern timezone
      const estString = date.toLocaleString("en-US", {
        timeZone: "America/New_York",
      });
      const estDate = new Date(estString);
      const estDay = estDate.getDay(); // 0 is Sun, 6 is Sat
      const estHours = estDate.getHours();
      const estMinutes = estDate.getMinutes();

      const isWeekday = estDay >= 1 && estDay <= 5;
      const totalMinutes = estHours * 60 + estMinutes;
      const openMinutes = 9 * 60; // 9:00 AM
      const closeMinutes = 17 * 60; // 5:00 PM

      const isOpen = isWeekday && totalMinutes >= openMinutes && totalMinutes < closeMinutes;
      setIsOpenNow(isOpen);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        tempErrors.email = "Please enter a valid email address";
      }
    }

    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else {
      // Basic phone check
      const phoneClean = form.phone.replace(/[^0-9]/g, "");
      if (phoneClean.length < 7) {
        tempErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!form.message.trim()) {
      tempErrors.message = "A brief instruction or message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase block">
            Direct Coordination
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Schedule Your Strategic Alignment
          </h2>
          <div className="w-16 h-1 bg-gold rounded-none mx-auto" />
          <p className="text-gray-500 font-sans font-light text-sm sm:text-base leading-relaxed">
            Fill out the consultation diagnostics below, or connect with our Frances Ave office directly. Let's chart your real estate goals securely.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Panel: Corporate Coordinates */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Live office open/closed status badge */}
            <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-none p-2 pr-4">
              <span className={`relative flex h-3 w-3 ml-2`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-none opacity-75 ${isOpenNow ? "bg-emerald-400" : "bg-amber-400"}`}></span>
                <span className={`relative inline-flex rounded-none h-3 w-3 ${isOpenNow ? "bg-emerald-500" : "bg-amber-500"}`}></span>
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-gray-600 font-bold uppercase tracking-wider">
                Office is currently{" "}
                <span className={isOpenNow ? "text-emerald-700 font-bold" : "text-amber-700 font-bold"}>
                  {isOpenNow ? "OPEN" : "CLOSED"}
                </span>{" "}
                (M-F, 9AM-5PM EST)
              </span>
            </div>

            <div className="space-y-6">
              {/* Location details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-none shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy text-lg">Tampa Headquarters</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans font-light mt-1">
                    209 E Frances Ave #1/2<br />
                    Tampa, FL 33602
                  </p>
                  <p className="text-[10px] sm:text-xs text-gold font-sans font-semibold tracking-wider uppercase mt-1">
                    Historic Tampa Heights District
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-none shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy text-lg">Direct Line</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans font-semibold mt-1">
                    +1 813-400-3403
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans font-light tracking-wide uppercase mt-0.5">
                    Direct voice & secure SMS capability
                  </p>
                </div>
              </div>

              {/* Hours details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-none shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy text-lg">Consultation Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans font-light mt-1">
                    Monday – Friday: 9:00 AM – 5:00 PM EST
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans font-light tracking-wide uppercase mt-0.5">
                    Saturday – Sunday: By exclusive appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded interactive maps frame representing Tampa address */}
            <div className="relative rounded-none overflow-hidden border border-gray-200 shadow group">
              <div className="absolute top-3 left-3 z-10 bg-navy border border-gold/45 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-none shadow">
                <div className="flex items-center space-x-1.5">
                  <MapIcon className="h-3.5 w-3.5 text-gold" />
                  <span>Office Map Location</span>
                </div>
              </div>
              <iframe
                title="USA Property Network Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.2818783457193!2d-82.45995402410888!3d27.955428414436585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c4bfbb250391%3A0xe72688435d8e7c11!2s209%20E%20Frances%20Ave%20%231%2F2%2C%20Tampa%2C%20FL%2033602!5e0!3m2!1sen!2sus!4v1718320000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-110 group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-none text-xs text-gray-500 flex items-start space-x-2">
              <ShieldAlert className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
              <span>
                USA Property Network, LLC values your privacy. Submitted metrics are encrypted and never distributed to third-party home lists or tele-advertises.
              </span>
            </div>
          </div>

          {/* Right Panel: Interactive Validation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-none border border-gray-250 shadow-lg relative">
              
              {!isSubmitted ? (
                // Consultation Diagnostics Form Setup
                <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                  <div className="text-left border-b border-gray-100 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                      Diagnostics Questionnaire
                    </h3>
                    <p className="text-xs text-gray-400 font-sans font-light mt-1">
                      Provide basic coordinates so our consultants can pre-review MLS boards.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="text-left space-y-1">
                    <label htmlFor="name" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Richard Hendricks"
                      className={`w-full font-sans text-xs sm:text-sm px-4 py-3 rounded-none border bg-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                        <AlertTriangle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Twin Columns: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Input */}
                    <div className="text-left space-y-1">
                      <label htmlFor="email" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. richard@piedpiper.com"
                        className={`w-full font-sans text-xs sm:text-sm px-4 py-3 rounded-none border bg-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                          <AlertTriangle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div className="text-left space-y-1">
                      <label htmlFor="phone" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy block">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. (813) 555-0199"
                        className={`w-full font-sans text-xs sm:text-sm px-4 py-3 rounded-none border bg-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all ${
                          errors.phone ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                          <AlertTriangle className="h-3 w-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="text-left space-y-1">
                    <label htmlFor="message" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy block">
                      Consultation Goals & Profile <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your interest: Tampa buying grids, listing consultations, or investment property yields..."
                      className={`w-full font-sans text-xs sm:text-sm px-4 py-3 rounded-none border bg-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                        <AlertTriangle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-4.5 text-xs font-bold uppercase tracking-[0.12em] text-white bg-gold hover:bg-gold-hover transition-colors rounded-none shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Validating Strategy Parameters...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Submit Request</span>
                          <Send className="h-4 w-4" />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // Success Confirmation State
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 py-8 text-center"
                >
                  <div className="mx-auto w-16 h-16 rounded-none bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-md">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                      Consultation Queue Confirmed
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-sans font-light max-w-sm mx-auto">
                      Thank you, <span className="font-bold text-navy">{form.name}</span>. Your property diagnostic parameter has been securely compiled.
                    </p>
                  </div>

                  {/* Core Diagnostic summary card */}
                  <div className="bg-[#F8F9FA] border border-gray-200 rounded-none p-6 max-w-sm mx-auto shadow-sm text-left space-y-3 font-sans text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                        Client Email Coordinate
                      </span>
                      <span className="text-navy font-semibold">{form.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                        Callback Contact Metric
                      </span>
                      <span className="text-navy font-semibold">{form.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                        Advisory Queue Priority
                      </span>
                      <span className="text-gold font-bold">HIGH-ALIGNMENT • SECURE</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 font-sans font-light max-w-xs mx-auto leading-relaxed">
                    A Senior Licensed Consultant will pre-analyze local MLS boards and reach out to you within 24 business hours.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="text-xs font-bold tracking-wider uppercase text-navy hover:text-gold hover:underline transition-colors cursor-pointer"
                    >
                      Submit Another Consultation Ticket
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

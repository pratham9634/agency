"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=15",
  "https://i.pravatar.cc/80?img=47",
];

const Cta = () => {
  return (
    <section className="relative py-28 flex items-center justify-center bg-gradient-to-b from-orange-50/40 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-300/30 blur-3xl rounded-full" />
      </div>

      {/* Avatars */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex -space-x-3">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-heading font-semibold tracking-tight text-gray-800"
        >
          Where Strong Teams Start
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-base md:text-lg"
        >
          Strong teams thrive on trust, collaboration, and shared vision. Together, we turn ambitious goals into remarkable achievements.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Secondary Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">

            {/* Book a Call */}
            <button className="flex items-center gap-2 px-5 py-3 uppercase tracking-wide text-sm font-medium rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Phone size={16} className="text-orange-500" />
              Book a Call
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 uppercase tracking-wide text-sm font-medium rounded-full bg-green-500 text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            {/* Contact Form */}
            <button className="flex items-center gap-2 px-5 py-3 uppercase tracking-wide text-sm font-medium rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Mail size={16} className="text-orange-500" />
              Contact Form
            </button>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
            <span className="text-orange-500 text-lg">↘</span>
            No signup required. Instant response.
          </p>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/30 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/40 blur-3xl rounded-full" />
    </section>
  );
};

export default Cta;
"use client";

import React from "react";
import { motion } from "framer-motion";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=15",
  "https://i.pravatar.cc/80?img=47",
];

const Offers = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight"
        >
          Got an Idea? We’ll Turn It Into Reality 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 text-gray-500 text-base md:text-lg"
        >
          Share your vision and let our team design, build, and scale it into a powerful digital solution.
        </motion.p>
      </div>

      {/* Highlight Strategy Call Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 max-w-5xl mx-auto mt-14 px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl 
          bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg">

          {/* Left Content */}
          <div className="text-center md:text-left">
            
            <p className="text-sm text-gray-500 mb-2">
              ✨ Limited Time Offer
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Book a{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Free Strategy Call
              </span>
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-md">
              Get expert guidance on how to scale your business, improve conversions, and grow faster.
            </p>
          </div>

          {/* Right Badge */}
          <div className="flex flex-col items-center gap-3">

            {/* Small trust badge */}
            <div className="flex items-center -space-x-2">
              {avatars.slice(0, 3).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-8 h-8 rounded-full border border-white"
                />
              ))}
              <span className="ml-3 text-xs text-gray-500">
                100+ founders booked
              </span>
            </div>

            {/* Highlight pill */}
            <div className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium shadow-md hover:scale-105 transition">
              No Cost • No Commitment
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-6 text-center text-sm text-gray-500">
          We respond within <span className="text-orange-500 font-semibold">24 hours</span> ⚡
        </div>
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/30 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/40 blur-3xl rounded-full" />
    </section>
  );
};

export default Offers;
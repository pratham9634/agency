"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* soft overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center mt-12">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.05] uppercase"
        >
          We Turn Midnight Ideas into Digital Reality
        </motion.h1>

        {/* SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white mb-10 mx-auto font-semibold leading-relaxed"
        >
          A full-service digital agency dedicated to building scalable products that shine in a crowded market
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4"
        >

          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-orange-600/10 text-white font-extrabold tracking-wide border-2 border-orange-600/30 hover:bg-orange-600 hover:border-orange-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg backdrop-blur-md uppercase text-sm">
            Start Your Project
          </button>

          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/50 text-neutral-900 font-extrabold tracking-wide border-2 border-neutral-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm backdrop-blur-md uppercase text-sm">
            View Our Work
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
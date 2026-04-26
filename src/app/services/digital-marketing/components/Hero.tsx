"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-white">

      {/* ── BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-3xl text-center">

        {/* subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Digital Marketing
          </p>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight"
        >
          Growth that{" "}
          <span className="text-black relative">
            actually converts
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/10" />
          </span>
        </motion.h1>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed"
        >
          We design and run performance systems that turn traffic into revenue — not just clicks.
          Get More Leads & Sales with Data-Driven Digital Marketing
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6"
        >

          {/* primary */}
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/90 transition-all duration-300 hover:scale-[1.1]">
            Book Strategy Call
          </button>

        </motion.div>

        {/* micro trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-[18px] tracking-wide text-slate-800 font-bold "
        >
          Trusted by startups, schools & growing brands across India
        </motion.p>

      </div>

    </section>
  );
};

export default Hero;
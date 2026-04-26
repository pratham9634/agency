"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-6">

      {/* ─── BACKGROUND VIDEO ─── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/posters/about-poster.png"
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
            type="video/mp4"
          />
        </video>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/15 to-white/5" />
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ─── LEFT SIDE (TEXT) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* headline */}
          <h1 className="text-2xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.05]">
            We Don’t Just Run Ads. <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              We Build Growth Engines.
            </span>
          </h1>

          {/* subtext */}
          <p className="mt-6 text-neutral-600 text-lg max-w-xl leading-relaxed">
            From strategy to scaling — we help brands generate predictable revenue 
            with data-driven marketing systems.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg"
            >
              Get Free Strategy →
            </motion.button>

            <button className="px-8 py-4 rounded-full border border-neutral-300 text-white font-extrabold hover:bg-neutral-100 hover:text-black transition">
              View Projects →
            </button>
          </div>

          {/* trust stats */}
          <div className="flex gap-8 mt-10 text-sm">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">150+</h3>
              <p className="text-neutral-500">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">4.8★</h3>
              <p className="text-neutral-500">Client Rating</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">3X</h3>
              <p className="text-neutral-500">Avg ROI Growth</p>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT SIDE (GLASS CARD / VISUAL) ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative"
        >
          {/* floating card */}
          <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-4xl p-4">

            {/* glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />

            {/* fake dashboard */}
            <div className="space-y-4">
              <div className="h-4 w-24 bg-neutral-200 rounded" />
              <div className="h-3 w-full bg-neutral-200 rounded" />
              <div className="h-3 w-5/6 bg-neutral-200 rounded" />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-100">
                  <p className="text-xs text-neutral-500">Leads</p>
                  <h3 className="text-xl font-bold text-neutral-900">+320%</h3>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100">
                  <p className="text-xs text-neutral-500">Conversion</p>
                  <h3 className="text-xl font-bold text-neutral-900">2.4x</h3>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
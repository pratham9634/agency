"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "./components/Input";

const ContactPage = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#fafafa]">

      {/* 🌈 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 blur-[120px] opacity-50 rounded-full" />
      </div>

      {/* HEADER */}
      <div className="relative max-w-3xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-semibold tracking-tight text-neutral-900"
        >
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Powerful
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-neutral-500 text-lg"
        >
          Tell us about your project — we’ll reply within{" "}
          <span className="font-semibold text-neutral-800">24 hours</span>.
        </motion.p>
      </div>

      {/* MAIN GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* TRUST BLOCK */}
          <div>
            <h2 className="text-2xl font-heading font-semibold tracking-tight text-neutral-900 mb-3">
              Why clients choose us
            </h2>

            <p className="text-neutral-500">
              We don’t just design — we engineer growth systems that convert traffic into revenue.
            </p>
          </div>

          {/* POINTS */}
          <div className="space-y-4">
            {[
              "⚡ Fast response & clear communication",
              "📈 ROI-driven strategy + execution",
              "🚀 Scalable systems, not just websites",
              "🔥 Limited projects = full attention",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm text-neutral-600 flex items-center gap-2"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* SOCIAL PROOF */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-neutral-500">
              Trusted by <span className="font-semibold text-neutral-800">50+ businesses</span>
            </p>
          </div>

        </div>

        {/* FORM */}
        <motion.form
          whileHover={{ y: -4 }}
          className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] space-y-6"
        >

          {/* glow */}
          <div className="absolute -top-12 -right-12 w-52 h-52 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 blur-3xl rounded-full" />

          {/* INPUTS */}
          <Input
            label="Full Name"
            name="name"
            focused={focused}
            setFocused={setFocused}
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            focused={focused}
            setFocused={setFocused}
          />

          {/* SELECT */}
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/60 backdrop-blur-md text-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Project Budget</option>
              <option>₹10k - ₹50k</option>
              <option>₹50k - ₹1L</option>
              <option>₹1L - ₹5L</option>
              <option>₹5L+</option>
            </select>
          </div>

          {/* TEXTAREA */}
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/60 backdrop-blur-md text-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* CTA */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="relative w-full py-4 rounded-xl uppercase tracking-wide text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Send Message →</span>

            {/* shimmer */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>

          {/* TRUST TEXT */}
          <p className="text-xs text-neutral-400 text-center">
            🔒 100% confidential • No spam • Quick response
          </p>

        </motion.form>
      </motion.div>
    </main>
  );
};

export default ContactPage;
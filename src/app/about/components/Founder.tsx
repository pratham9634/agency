"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const Founder = () => {
  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 blur-[150px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-500 blur-3xl opacity-20 rounded-3xl" />

          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl">

            <Image
              width={1000}
              height={1000}
              src="/avatar.webp"
              alt="founder"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl text-sm font-medium text-neutral-900 border border-white flex items-center gap-2">
              <Sparkles size={14} className="text-orange-500" />
              Founder & Creative Director
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500 font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Meet the Founder
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-neutral-900"
          >
            Built with{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Vision & Passion
            </span>
          </motion.h2>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-8 relative"
          >
            <Quote className="text-orange-400 mb-3" />

            <p className="text-neutral-600 leading-relaxed text-lg">
              “I started this agency with one belief — every business deserves
              a powerful digital identity that drives real growth, not just
              pretty websites.”
            </p>
          </motion.div>

          {/* Journey */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-neutral-500 leading-relaxed"
          >
            From freelancing in small projects to building scalable digital
            systems for brands, the journey has always been focused on one
            thing — creating impact through design, performance, and strategy.
          </motion.p>

          {/* Mission + Vision Blocks */}
          <div className="mt-10 space-y-6">

            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-2xl hover:shadow-lg transition"
            >
              <h4 className="text-sm font-heading font-semibold tracking-tight text-neutral-900 mb-1">
                Mission
              </h4>
              <p className="text-sm text-neutral-500">
                Help businesses grow with performance-driven digital solutions
                that convert traffic into revenue.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-2xl hover:shadow-lg transition"
            >
              <h4 className="text-sm font-heading font-semibold tracking-tight text-neutral-900 mb-1">
                Vision
              </h4>
              <p className="text-sm text-neutral-500">
                Build one of the most trusted digital agencies known for
                creativity, scalability, and measurable impact.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const points = [
  {
    title: "We don’t build websites",
    desc: "We engineer digital systems designed to attract, convert, and scale businesses.",
  },
  {
    title: "Every pixel has a purpose",
    desc: "Design is not decoration — it’s a conversion tool that drives real business outcomes.",
  },
  {
    title: "Growth is the core strategy",
    desc: "Every decision we make is tied to performance, ROI, and measurable business growth.",
  },
  {
    title: "Execution over theory",
    desc: "Fast delivery, real results, and continuous optimization — not endless planning.",
  },
];

const Approach = () => {
  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 blur-[140px] opacity-60" />
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900"
        >
          Your Approach{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            & Philosophy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-neutral-500 text-base md:text-lg"
        >
          How we think defines the results we deliver — and we think differently.
        </motion.p>
      </div>

      {/* Flow Section */}
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-200 via-pink-200 to-purple-200" />

        <div className="space-y-16">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 group"
            >

              {/* dot */}
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 shadow-lg group-hover:scale-125 transition-transform" />

              {/* title */}
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>

              {/* description */}
              <p className="mt-3 text-neutral-500 leading-relaxed max-w-2xl">
                {item.desc}
              </p>

              {/* arrow accent */}
              <div className="mt-4 flex items-center gap-2 text-sm text-orange-500 opacity-80 group-hover:opacity-100 transition">
                <span>Our mindset</span>
                <ArrowRight size={14} />
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Bottom Statement */}
      <div className="text-center mt-24 px-6">
        <p className="text-lg md:text-xl font-medium text-neutral-800">
          “We don’t just deliver projects —{" "}
          <span className="text-orange-500">
            we build revenue engines.”
          </span>
        </p>
      </div>

    </section>
  );
};

export default Approach;
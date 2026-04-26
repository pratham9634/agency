"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

const processCardData = [
  {
    title: "Research",
    description:
      "We deeply analyze your business, competitors, and audience to build a strong foundation.",
    icon: Search,
  },
  {
    title: "Strategy",
    description:
      "We craft a tailored, data-driven strategy aligned with your business goals.",
    icon: Lightbulb,
  },
  {
    title: "Execution",
    description:
      "We implement campaigns with precision to ensure maximum performance and impact.",
    icon: Rocket,
  },
  {
    title: "Analysis",
    description:
      "We continuously monitor and optimize performance for consistent growth and ROI.",
    icon: BarChart,
  },
];

const Process = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-orange-500 uppercase tracking-widest"
        >
          Our Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mt-3"
        >
          How We Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-4"
        >
          A structured, data-driven approach that ensures clarity, efficiency, and measurable results at every stage.
        </motion.p>
      </div>

      {/* Process Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-6 px-6 relative z-10">
        {processCardData.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative p-6 rounded-2xl 
              bg-white/40 backdrop-blur-xl border border-white/30 
              shadow-md hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-orange-200/0 group-hover:bg-orange-200/20 blur-xl transition-all duration-500" />

              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full 
              bg-orange-500 text-white text-sm font-bold 
              flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mt-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-4 h-[2px] w-0 bg-orange-500 group-hover:w-14 transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
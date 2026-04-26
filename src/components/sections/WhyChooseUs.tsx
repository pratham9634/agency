"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Headset,
  DollarSign,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Proven Track Record",
    description:
      "98% client retention rate with consistently high ROI across all campaigns.",
    icon: BarChart2,
    color: "orange",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Dedicated experts available anytime to ensure smooth execution and growth.",
    icon: Headset,
    color: "blue",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Transparent pricing designed to maximize value for every budget.",
    icon: DollarSign,
    color: "green",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "AI-powered tools and automation for smarter, faster results.",
    icon: Zap,
    color: "pink",
  },
  {
    title: "98% Client Retention Rate",
    description:
      "We are proud of our 98% client retention rate, which is a testament to our commitment to delivering exceptional results and building long-term relationships with our clients.",
    icon: Zap,
    color: "pink",
  }
];

const colorMap: any = {
  orange: "from-orange-500 to-orange-400 bg-orange-100 text-orange-600",
  blue: "from-blue-500 to-blue-400 bg-blue-100 text-blue-600",
  green: "from-green-500 to-green-400 bg-green-100 text-green-600",
  pink: "from-pink-500 to-pink-400 bg-pink-100 text-pink-600",
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4"
        >
          We combine strategy, technology, and experience to deliver measurable business growth you can trust.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 gap-8 px-6 relative z-10">

        {features.map((item, index) => {
          const Icon = item.icon;

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

              {/* Icon */}
              <div
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl 
                ${colorMap[item.color]} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="relative mt-5 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Accent line */}
              <div className="relative mt-4 h-[2px] w-0 bg-orange-500 group-hover:w-14 transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
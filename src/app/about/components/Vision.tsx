"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

const Vision = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 blur-[140px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT TEXT */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500 font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Our Purpose
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-neutral-900"
          >
            Vision &{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Mission
            </span>
          </motion.h2>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <Eye className="text-orange-500" />
              <h3 className="text-xl font-heading font-semibold text-neutral-900">
                Our Vision
              </h3>
            </div>
            <p className="text-neutral-500 leading-relaxed">
              To become a globally trusted digital agency that transforms
              businesses into powerful online brands through innovation,
              design excellence, and performance-driven strategies.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-pink-500" />
              <h3 className="text-xl font-heading font-semibold text-neutral-900">
                Our Mission
              </h3>
            </div>
            <p className="text-neutral-500 leading-relaxed">
              To help businesses grow through result-oriented digital marketing,
              conversion-focused websites, and scalable growth systems that
              generate real revenue.
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          {/* Glow Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 blur-2xl opacity-20 rounded-3xl" />

          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">

            <Image
              width={1000}
              height={1000}
              src="/vision.avif"
              alt="vision mission"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />

      

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl text-sm font-medium text-neutral-900 border border-white">
              Building Future-Ready Digital Brands
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;
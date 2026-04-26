"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Segment", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Segment_Logo.svg" },
  { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Linear", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Linear_logo.svg/2560px-Linear_logo.svg.png" },
];

const TrustBar = () => {
  return (
    <section className="relative py-16 bg-linear-to-b from-white via-orange-50/30 to-white overflow-hidden border-y border-orange-100">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="container px-4 mx-auto mb-14 text-center relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 mb-3">
          Trusted Worldwide
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Loved by{" "}
          <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            top brands
          </span>
        </h2>
      </div>

      {/* Logo Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-20 items-center px-10"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="group/item flex items-center justify-center transition-all duration-500"
            >
              <div className="relative px-4 py-2 rounded-xl hover:bg-white/60 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-orange-200/0 group-hover/item:bg-orange-200/40 blur-md transition-all duration-500" />

                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="relative h-8 md:h-10 w-auto min-w-[100px] object-contain 
                  grayscale opacity-50 
                  group-hover/item:grayscale-0 group-hover/item:opacity-100 
                  group-hover/item:scale-110 
                  transition-all duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TrustBar;
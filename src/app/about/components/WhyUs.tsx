"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";

const points = [
  {
    title: "No Templates. Just Strategy.",
    desc: "Every project is crafted from scratch — aligned with your audience, positioning, and business goals.",
  },
  {
    title: "ROI > Aesthetics.",
    desc: "We don’t design for looks. Every pixel is engineered to convert and generate revenue.",
  },
  {
    title: "Speed is a Growth Lever.",
    desc: "Faster websites mean better SEO, lower bounce rates, and higher conversions.",
  },
  {
    title: "Execution Beats Ideas.",
    desc: "From strategy to scaling — everything happens in one seamless system.",
  },
];

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // detect if section is in viewport
  const isInView = useInView(containerRef, {
    margin: "-20% 0px -20% 0px",
    amount: 0.2,
  });

  // scroll progress inside section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-32 overflow-hidden"
    >
      {/* ─── BACKGROUND GLOW ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 blur-[160px] opacity-40" />
      </div>

      {/* ─── PROGRESS BAR (ONLY WHEN IN VIEW) ─── */}
      <motion.div
        style={{ scaleX }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left 
        bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
        z-50 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* ─── LEFT SIDE (STICKY HEADING) ─── */}
        <div className="md:sticky md:top-32 h-fit">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-neutral-900"
          >
            We build{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              growth systems
            </span>{" "}
            — not just websites.
          </motion.h2>

          <p className="mt-6 text-neutral-500 text-lg max-w-md">
            Most agencies deliver deliverables. We deliver outcomes.
          </p>

          <div className="mt-10 h-[2px] w-24 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />

        </div>

        {/* ─── RIGHT SIDE (USP FLOW) ─── */}
        <div className="relative flex flex-col gap-32">

          {/* vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-200 via-red-200 to-pink-200" />

          {points.map((item, i) => {
            const ref = useRef<HTMLDivElement | null>(null);
            const inView = useInView(ref, { margin: "-40%" });

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0.25, y: 40 }
                }
                transition={{ duration: 0.6 }}
                className="relative pl-10"
              >
                {/* active dot */}
                <div
                  className={`absolute left-[-6px] top-2 w-3 h-3 rounded-full transition-all duration-300 ${
                    inView
                      ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125 shadow-lg"
                      : "bg-neutral-300"
                  }`}
                />

                {/* step number */}
                <div className="text-xs tracking-widest text-neutral-300 mb-3 font-mono">
                  0{i + 1}
                </div>

                {/* title */}
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 ${
                    inView ? "text-neutral-900" : "text-neutral-400"
                  }`}
                >
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-neutral-500 leading-relaxed max-w-md">
                  {item.desc}
                </p>

                {/* underline glow */}
                <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-orange-500 to-transparent opacity-70" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
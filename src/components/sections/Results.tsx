"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients", value: 120, suffix: "+" },
  { label: "Revenue Generated", value: 2, prefix: "$", suffix: "M+" },
  { label: "Followers Gained", value: 500, suffix: "K+" },
  { label: "Leads Generated", value: 10, suffix: "K+" },
];

// Counter animation hook
const useCounter = (end: number, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

const Results = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-gray-800"
        >
          The Results Our Clients See
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4 max-w-2xl mx-auto"
        >
          We help businesses achieve measurable growth through proven digital strategies and performance-driven execution.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const count = useCounter(stat.value);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative p-6 rounded-2xl 
                bg-white/40 backdrop-blur-xl border border-white/30 
                shadow-md hover:shadow-xl hover:-translate-y-2 
                transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-orange-200/0 group-hover:bg-orange-200/20 blur-xl transition-all duration-500" />

                {/* Number */}
                <h3 className="relative text-3xl md:text-4xl font-heading font-bold tracking-tight 
                bg-gradient-to-r from-orange-500 to-orange-400 
                bg-clip-text text-transparent">
                  {stat.prefix}
                  {count}
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="relative text-sm text-gray-600 mt-2">
                  {stat.label}
                </p>

                {/* Underline */}
                <div className="relative mt-4 h-[2px] w-0 bg-orange-500 group-hover:w-10 transition-all duration-300 mx-auto" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type Problem = {
  title: string;
  description: string;
  icon: string;
};

const problems: Problem[] = [
  {
    title: "Low Conversions",
    description: "Visitors come, but they don’t take action or become paying customers.",
    icon: "📉",
  },
  {
    title: "Outdated Design",
    description: "Your website looks old, untrustworthy, and hurts first impressions.",
    icon: "🎨",
  },
  {
    title: "Slow Loading Speed",
    description: "Pages take too long to load, causing users to leave before engaging.",
    icon: "🐢",
  },
  {
    title: "Not Mobile Optimized",
    description: "Your website breaks or feels unusable on phones and tablets.",
    icon: "📱",
  },

  // 🔥 HIGH-IMPACT REAL WORLD ISSUES

  {
    title: "Poor SEO Visibility",
    description: "Your business doesn’t appear on Google when customers are searching.",
    icon: "🔍",
  },
  {
    title: "Confusing User Journey",
    description: "Visitors don’t know where to click, what to do, or how to buy.",
    icon: "🧭",
  },
  {
    title: "Weak Branding",
    description: "Your website doesn’t clearly communicate trust or brand identity.",
    icon: "⚠️",
  },
  {
    title: "High Bounce Rate",
    description: "Users land on your site and leave within seconds without exploring.",
    icon: "🚪",
  },
  {
    title: "No Clear Call-To-Action",
    description: "Users are not guided toward booking, buying, or contacting you.",
    icon: "🧨",
  },
  {
    title: "Inconsistent UI/UX",
    description: "Design feels scattered across pages, reducing credibility.",
    icon: "🧩",
  },
  {
    title: "No Lead Tracking",
    description: "You don’t know where your customers are coming from or what works.",
    icon: "📊",
  },
  {
    title: "Weak Competitor Presence",
    description: "Your competitors look more professional and capture your traffic.",
    icon: "🏁",
  },
];

export default function WhatWeSolve(): JSX.Element {
  return (
    <section className="relative py-28 px-6 bg-white text-neutral-900 overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-center max-w-3xl mx-auto">
  
  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
    Your Website Might Be{" "}
    <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
      Costing You Customers
    </span>
  </h2>

  <div className="mt-6 flex justify-center">
    <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
  </div>

  <p className="mt-6 text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl mx-auto">
    Most businesses lose customers silently due to hidden design, performance, and conversion issues that go unnoticed.
  </p>
</div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* subtle red glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10 flex gap-4 items-start">
                
                {/* Icon */}
                <div className="text-3xl">
                  {problem.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* animated “issue pulse” */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
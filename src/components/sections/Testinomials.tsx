"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Agarwal",
    role: "Founder, D2C Apparel Brand (Mumbai)",
    text: "Our website redesign and performance marketing helped us scale from 200 to 800+ monthly orders in just 3 months. The team really understands D2C growth.",
    avatar: "https://i.pravatar.cc/100?img=12",
    emoji: "🚀",
  },
  {
    name: "Neha Kapoor",
    role: "Co-founder, EdTech Startup (Bangalore)",
    text: "They completely transformed our product UX and onboarding flow. We saw a 40% increase in user retention within weeks.",
    avatar: "https://i.pravatar.cc/100?img=32",
    emoji: "📈",
  },
  {
    name: "Amit Verma",
    role: "Director, Real Estate Firm (Delhi NCR)",
    text: "Leads quality improved drastically after their landing page and ad funnel optimization. We’re closing better deals now.",
    avatar: "https://i.pravatar.cc/100?img=15",
    emoji: "💼",
  },
  {
    name: "Priya Nair",
    role: "Marketing Head, Healthcare Brand (Kochi)",
    text: "Professional, responsive, and very strategic. They helped us build a strong digital presence from scratch.",
    avatar: "https://i.pravatar.cc/100?img=47",
    emoji: "✨",
  },
  {
    name: "Karan Malhotra",
    role: "Founder, SaaS Startup (Pune)",
    text: "From design to deployment, everything was smooth and well-executed. The product feels premium and performs flawlessly.",
    avatar: "https://i.pravatar.cc/100?img=5",
    emoji: "⚡",
  },
];

const Stars = () => (
  <div className="flex gap-1 text-orange-400 mt-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-4">
          Real feedback from real clients who experienced real growth ✨
        </p>
      </div>

      {/* Marquee */}
      <div className="mt-16 space-y-8 relative z-10">

        {/* Row 1 */}
        <div className="overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 w-max group-hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[320px] p-6 rounded-2xl 
                bg-white/40 backdrop-blur-xl 
                border border-white/30 
                shadow-md hover:shadow-xl 
                transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-heading font-semibold tracking-tight text-gray-800 flex items-center gap-1">
                      {t.name} <span>{t.emoji}</span>
                    </h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <Stars />

                {/* Text */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  “{t.text}”
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="overflow-hidden group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 w-max group-hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[320px] p-6 rounded-2xl 
                bg-white/40 backdrop-blur-xl 
                border border-white/30 
                shadow-md hover:shadow-xl 
                transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-heading font-semibold tracking-tight text-gray-800 flex items-center gap-1">
                      {t.name} <span>{t.emoji}</span>
                    </h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <Stars />

                {/* Text */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  “{t.text}”
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
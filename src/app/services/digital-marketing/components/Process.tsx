"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Research & Audit",
    desc: "We analyze your brand, competitors, audience behavior, and identify hidden growth opportunities.",
    icon: Search,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Strategy Planning",
    desc: "We build a high-impact marketing strategy focused on funnels, messaging, and conversions.",
    icon: Target,
    gradient: "from-amber-400 to-orange-600",
  },
  {
    title: "Campaign Execution",
    desc: "We launch performance-driven campaigns across Google, Meta, and social platforms.",
    icon: Rocket,
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "Optimization & Scaling",
    desc: "We continuously optimize ads and funnels to reduce cost per lead and maximize ROI.",
    icon: TrendingUp,
    gradient: "from-orange-500 to-pink-500",
  },
];

export default function CurvedProcess() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* warm glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px]" />
      </div>

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Process
          </span>
        </h2>

        <p className="mt-5 text-slate-500 text-base">
          A performance-driven system that turns marketing spend into measurable growth.
        </p>
      </div>

      {/* PROCESS FLOW */}
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-200 via-red-200 to-pink-200 -translate-x-1/2" />

        <div className="flex flex-col gap-20">

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isRight = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center w-full relative"
              >

                {/* CONTENT */}
                <div
                  className={`w-full flex ${
                    isRight ? "justify-end pr-10" : "justify-start pl-10"
                  }`}
                >
                  <div className="relative max-w-md">

                    {/* step label */}
                    <div className="flex items-center gap-2 mb-2 text-orange-400 text-xs uppercase tracking-widest font-medium">
                      <span>Step {i + 1}</span>
                      <span>→</span>
                    </div>

                    {/* card */}
                    <div className="group bg-white/80 backdrop-blur-xl border border-orange-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-2xl p-6 hover:shadow-[0_25px_70px_-20px_rgba(249,115,22,0.35)] transition-all duration-300">

                      <div className="flex items-center gap-3 mb-3">

                        {/* icon */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${step.gradient} shadow-md`}
                        >
                          <Icon size={18} />
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>

                    </div>

                  </div>
                </div>

                {/* center node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg" />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
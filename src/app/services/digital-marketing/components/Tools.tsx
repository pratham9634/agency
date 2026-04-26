"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  MousePointerClick,
  BarChart3,
  Globe,
  Target,
  Shield,
  Workflow,
} from "lucide-react";

const stacks = [
  {
    title: "Search & SEO",
    icon: <Search className="w-5 h-5 text-orange-500" />,
    color: "from-orange-500 to-red-500",
    description: "Rank higher on Google and drive consistent organic traffic.",
    items: ["Google Search Console", "Ahrefs", "SEMrush", "Ubersuggest", "Keyword Planner"],
    className: "md:col-span-2",
  },
  {
    title: "Paid Advertising",
    icon: <MousePointerClick className="w-5 h-5 text-pink-500" />,
    color: "from-pink-500 to-rose-500",
    description: "High-performance ad campaigns across all major platforms.",
    items: ["Google Ads", "Meta Ads", "Instagram Ads", "YouTube Ads", "Performance Max"],
    className: "md:col-span-1",
  },
  {
    title: "Analytics & Tracking",
    icon: <BarChart3 className="w-5 h-5 text-cyan-500" />,
    color: "from-cyan-500 to-blue-500",
    description: "Deep insights to understand user behavior and improve ROI.",
    items: ["GA4", "Tag Manager", "Hotjar", "Meta Pixel", "Looker Studio"],
    className: "md:col-span-1",
  },
  {
    title: "Growth Optimization",
    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    color: "from-emerald-500 to-green-500",
    description: "Continuous testing and scaling for maximum conversions.",
    items: ["A/B Testing", "Funnels", "CRO Tools", "Heatmaps", "Conversion Tracking"],
    className: "md:col-span-2",
  },
];

function ToolCard({ stack }: { stack: typeof stacks[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 ${stack.className}`}
    >
      {/* glowing background */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${stack.color} opacity-[0.12] blur-2xl rounded-bl-full pointer-events-none group-hover:opacity-[0.18] transition`}
      />

      <div className="relative z-10">

        {/* icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition">
          {stack.icon}
        </div>

        {/* title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {stack.title}
        </h3>

        {/* description */}
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {stack.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {stack.items.map((item) => (
            <span
              key={item}
              className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-white transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Tools() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
          >
            Tools That{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </motion.h2>

          <p className="mt-5 text-slate-500 text-base leading-relaxed">
            We use powerful marketing platforms to generate leads, increase conversions, and scale businesses faster.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((s, i) => (
            <ToolCard key={i} stack={s} />
          ))}
        </div>

        {/* TRUST LINE */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-10 text-slate-400 text-sm">

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-orange-500" />
            Multi-Channel Marketing
          </div>

          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-pink-500" />
            Precision Targeting
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-500" />
            Secure Tracking
          </div>

          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-emerald-500" />
            Automated Growth Systems
          </div>

        </div>

      </div>
    </section>
  );
}
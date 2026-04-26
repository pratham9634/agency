"use client";

import { motion } from "framer-motion";
import React from "react";

const results = [
  {
    label: "SaaS Lead Growth",
    value: "+589%",
    context: "B2B SaaS company in 6 months",
    sub: "Scaled paid + organic funnel performance",
    before: "120 leads/month",
    after: "830+ leads/month",
    color: "from-orange-500 to-red-500",
  },
  {
    label: "Ad Campaign ROI",
    value: "4.3x ROAS",
    context: "E-commerce fashion brand",
    sub: "Optimized Meta + Google Ads funnel",
    before: "1.2x ROAS",
    after: "4.3x ROAS",
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Organic Growth",
    value: "+1,234%",
    context: "Content-driven SEO strategy",
    sub: "Authority building + keyword scaling",
    before: "2K visits/month",
    after: "27K+ visits/month",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Results() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* soft grid background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-slate-900"
          >
            Real Growth Stories,
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Not Just Numbers
            </span>
          </motion.h2>

          <p className="mt-5 text-slate-500 text-base">
            Every result is tracked, measured, and validated through real campaigns.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-2xl transition-all overflow-hidden"
            >

              {/* glow */}
              <div
                className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${r.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition`}
              />

              {/* badge */}
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                Verified Case Study
              </div>

              {/* value */}
              <h3 className="text-3xl font-heading font-bold tracking-tight text-slate-900 mt-3">
                {r.value}
              </h3>

              {/* label */}
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {r.label}
              </p>

              {/* context */}
              <p className="text-xs text-slate-500 mt-1">
                {r.context}
              </p>

              {/* sub */}
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {r.sub}
              </p>

              {/* BEFORE / AFTER BLOCK */}
              <div className="mt-5 flex items-center justify-between text-xs">

                <div>
                  <p className="text-slate-400">Before</p>
                  <p className="font-semibold text-slate-700">{r.before}</p>
                </div>

                <div className="w-10 h-px bg-slate-200" />

                <div className="text-right">
                  <p className="text-slate-400">After</p>
                  <p className="font-semibold text-slate-900">{r.after}</p>
                </div>

              </div>

              {/* progress bar */}
              <div className="mt-5 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2 }}
                  className={`h-full bg-gradient-to-r ${r.color}`}
                />
              </div>

            </motion.div>
          ))}

        </div>

        {/* TRUST FOOTER */}
        <div className="mt-16 text-center text-sm text-slate-400">
          All results are tracked using GA4, Ads Manager & CRM attribution systems
        </div>

      </div>
    </section>
  );
}
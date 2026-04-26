"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Globe, 
  Cpu, 
  Layers, 
  Workflow 
} from "lucide-react";

const stacks = [
  {
    title: "Frontend Experience",
    icon: <Globe className="w-5 h-5 text-indigo-600" />,
    color: "from-indigo-600 to-violet-600",
    description: "Immersive, high-performance user interfaces.",
    items: ["Next.js 15", "React", "TypeScript", "Tailwind", "Framer Motion"],
    className: "md:col-span-2",
  },
  {
    title: "Backend Logic",
    icon: <Server className="w-5 h-5 text-emerald-600" />,
    color: "from-emerald-600 to-teal-600",
    description: "Resilient server-side architecture.",
    items: ["Node.js", "NestJS", "Go", "GraphQL", "WebSockets"],
    className: "md:col-span-1",
  },
  {
    title: "Data Persistence",
    icon: <Database className="w-5 h-5 text-orange-600" />,
    color: "from-orange-600 to-amber-600",
    description: "Optimized storage and caching.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
    className: "md:col-span-1",
  },
  {
    title: "Infrastructure",
    icon: <Cloud className="w-5 h-5 text-blue-600" />,
    color: "from-blue-600 to-cyan-600",
    description: "Automated scaling and edge delivery.",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    className: "md:col-span-2",
  },
];

function TechCard({ stack }: { stack: typeof stacks[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 ${stack.className}`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(15, 23, 42, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
            {stack.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
            {stack.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-[240px]">
            {stack.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.items.map((item) => (
            <span
              key={item}
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-white group-hover:border-slate-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stack.color} opacity-[0.03] rounded-bl-full pointer-events-none group-hover:opacity-[0.07] transition-opacity`} />
    </motion.div>
  );
}

export default function TechEcosystem() {
  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-4 block"
            >
              Industry Standard Stacks
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[0.9]"
            >
              The technology behind <br />
              <span className="text-slate-400">your future product.</span>
            </motion.h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l-2 border-slate-200 pl-6">
            We leverage a precision-engineered ecosystem to ensure scalability, security, and world-class performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((s, i) => (
            <TechCard key={i} stack={s} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex items-center gap-2 text-slate-900 font-bold"><Code2 className="w-5 h-5"/> Modular</div>
          <div className="flex items-center gap-2 text-slate-900 font-bold"><Layers className="w-5 h-5"/> Scalable</div>
          <div className="flex items-center gap-2 text-slate-900 font-bold"><Cpu className="w-5 h-5"/> Efficient</div>
          <div className="flex items-center gap-2 text-slate-900 font-bold"><Workflow className="w-5 h-5"/> Automated</div>
        </motion.div>
      </div>
    </section>
  );
}
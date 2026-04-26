"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    title: "Strategy & Planning",
    desc: "We define your business goals, analyze competitors, and create a structured digital roadmap focused on growth, scalability, and user impact.",
    icon: Search,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "UX/UI Design",
    desc: "We design clean, modern, and conversion-focused interfaces that improve user experience, engagement, and brand perception across all devices.",
    icon: Palette,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Development",
    desc: "We build fast, scalable, and SEO-friendly web applications using modern technologies, ensuring performance, security, and maintainability.",
    icon: Code,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Testing & Launch",
    desc: "We rigorously test performance, responsiveness, and security before deploying a fully optimized, production-ready solution.",
    icon: Rocket,
    gradient: "from-purple-400 to-pink-500",
  },
]

export default function CurvedProcess() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 blur-[120px] opacity-50 rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-5xl font-heading font-semibold tracking-tight text-gray-900">
          Our Development <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Process
          </span>
        </h2>

        <p className="mt-5 text-gray-500">
          A structured flow that turns ideas into scalable digital products.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Curved Path (premium soft stroke) */}
        <svg
          className="absolute top-10 left-0 w-full h-[250px]"
          viewBox="0 0 1000 200"
          fill="none"
        >
          <path
            d="M0,120 Q500,-40 1000,120"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >

                {/* Floating node */}
                <div className="relative mb-10">

                  {/* Glow behind block */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-2xl opacity-30 rounded-2xl`} />

                  {/* Main block */}
                  <div className={`relative w-28 h-28 rounded-2xl bg-gradient-to-br ${step.gradient} 
                    shadow-lg flex items-center justify-center text-white
                    transform hover:scale-105 transition-all duration-300`}>

                    <Icon size={38} strokeWidth={1.5} />
                  </div>

                  {/* small connector dot */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-gray-300 shadow-sm" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-heading font-semibold text-gray-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 max-w-[220px]">
                  {step.desc}
                </p>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
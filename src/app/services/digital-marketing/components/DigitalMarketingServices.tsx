"use client"

import React from "react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import {
  Search,
  Target,
  TrendingUp,
  MousePointerClick,
  Megaphone,
  BarChart3,
  ShieldCheck,
  Zap,
  LineChart,
  Globe,
} from "lucide-react"

const DigitalMarketingServices = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden text-gray-900">

      {/* Warm ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 blur-[130px] opacity-70 rounded-full" />
      </div>

      {/* Side text */}
      <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-xs tracking-widest text-gray-400 rotate-[-90deg]">
        LEADS • CONVERSIONS • SCALE • GROWTH
      </div>

      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 text-xs tracking-widest text-gray-400 rotate-90">
        PERFORMANCE MARKETING SYSTEM
      </div>

      {/* HEADER */}
      <div className="relative text-center mb-16">

        <div className="absolute inset-0 flex justify-center -top-10">
          <div className="w-[500px] h-[200px] bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 blur-3xl opacity-50 rounded-full" />
        </div>

        <h3 className="relative text-4xl md:text-5xl font-semibold tracking-tight">

          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
            bg-clip-text text-transparent">
            Digital Marketing Services
          </span>

        </h3>

        <p className="relative mt-5 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">

          We build{" "}
          <span className="text-gray-900 font-medium">performance-driven marketing systems</span>{" "}
          that focus on{" "}

          <span className="relative font-medium text-gray-900">
            leads
            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-orange-200/60 blur-sm -z-10" />
          </span>,{" "}

          <span className="relative font-medium text-gray-900">
            conversions
            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-red-200/60 blur-sm -z-10" />
          </span>, and{" "}

          <span className="relative font-medium text-gray-900">
            revenue growth
            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-pink-200/60 blur-sm -z-10" />
          </span>.

        </p>
      </div>

      {/* ORBIT AREA */}
      <div className="relative flex items-center justify-center h-[650px]">

        {/* Background icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Megaphone className="absolute left-[15%] top-[20%] text-gray-200 w-6 h-6" />
          <BarChart3 className="absolute right-[18%] top-[30%] text-gray-200 w-6 h-6" />
          <LineChart className="absolute left-[25%] bottom-[20%] text-gray-200 w-5 h-5" />
          <Globe className="absolute right-[25%] bottom-[25%] text-gray-200 w-6 h-6" />
        </div>

        {/* CENTER CORE */}
        <div className="z-10 relative w-44 h-44 rounded-full flex items-center justify-center text-center">

          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-200 via-red-200 to-pink-200 blur-3xl opacity-50" />

          <div className="absolute inset-0 rounded-full border border-white/40 shadow-[0_0_60px_-15px_rgba(249,115,22,0.25)]" />

          <div className="relative w-full h-full rounded-full 
            bg-white/40 backdrop-blur-3xl 
            border border-white/40
            shadow-xl
            flex items-center justify-center">

            <div className="text-center px-6">

              <div className="mx-auto mb-3 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg" />

              <h4 className="text-sm font-semibold text-gray-900">
                Growth Marketing
              </h4>

              <p className="text-xs text-gray-500 mt-1">
                Performance-Driven Engine
              </p>

            </div>
          </div>

          <div className="absolute top-6 left-10 w-16 h-16 bg-white/40 blur-2xl rounded-full opacity-60" />

        </div>

        {/* INNER ORBIT */}
        <OrbitingCircles radius={140} speed={0.55}>
          <ServiceItem icon={<MousePointerClick />} title="Paid Ads" desc="High-converting Google & Meta campaigns." />
          <ServiceItem icon={<Target />} title="Targeting" desc="Precision audience segmentation." />
          <ServiceItem icon={<Zap />} title="CTR Boost" desc="Click-through optimization systems." />
        </OrbitingCircles>

        {/* OUTER ORBIT */}
        <OrbitingCircles radius={240} reverse speed={0.35}>
          <ServiceItem icon={<Search />} title="SEO" desc="Rank higher & dominate search." />
          <ServiceItem icon={<Megaphone />} title="Brand Awareness" desc="Build strong digital presence." />
          <ServiceItem icon={<TrendingUp />} title="Scaling" desc="Turn campaigns into growth engines." />
          <ServiceItem icon={<ShieldCheck />} title="Trust Signals" desc="Improve credibility & conversions." />
          <ServiceItem icon={<BarChart3 />} title="Analytics" desc="Data-driven decision making." />
        </OrbitingCircles>

      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-400">
          We don’t just run ads — we build revenue systems.
        </p>
      </div>

    </section>
  )
}

/* SERVICE ITEM */
const ServiceItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) => {
  return (
    <div className="group relative w-44 h-14 flex items-center justify-center">

      <div className="flex items-center gap-2 px-4 py-2 rounded-full
        bg-white/70 backdrop-blur-xl
        border border-gray-200
        shadow-sm
        group-hover:shadow-lg
        group-hover:scale-[1.05]
        transition-all duration-300">

        <span className="text-gray-700">{icon}</span>

        <span className="text-sm font-medium text-gray-800">
          {title}
        </span>
      </div>

      {/* hover card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-14 w-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none z-20">

        <div className="rounded-xl p-3 text-xs text-gray-600
          bg-white border border-gray-200 shadow-xl">

          {desc}
        </div>
      </div>

    </div>
  )
}

export default DigitalMarketingServices
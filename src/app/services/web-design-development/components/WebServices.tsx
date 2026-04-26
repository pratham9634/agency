import React from "react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import {
  Palette,
  Code,
  ShoppingCart,
  Search,
  Rocket,
  Gauge,
  Shield,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react"

const WebServices = () => {
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden text-gray-900">

      {/* Ambient Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 blur-[130px] opacity-60 rounded-full" />
      </div>

      {/* Floating Side Text (Left) */}
      <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-xs tracking-widest text-gray-400 rotate-[-90deg]">
        BUILD • SCALE • OPTIMIZE • GROW
      </div>

      {/* Floating Side Text (Right) */}
      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 text-xs tracking-widest text-gray-400 rotate-90">
        MODERN WEB EXPERIENCES
      </div>

      {/* Header */}
<div className="relative text-center mb-16">

  {/* Ambient glow behind text */}
  <div className="absolute inset-0 flex justify-center -top-10">
    <div className="w-[500px] h-[200px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 blur-3xl opacity-40 rounded-full" />
  </div>

  {/* Title */}
  <h3 className="relative text-4xl md:text-5xl font-heading font-semibold tracking-tight">

    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
      bg-clip-text text-transparent drop-shadow-sm">
      Our Web Services
    </span>

  </h3>

  {/* Description */}
  <p className="relative mt-5 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">

    We design and develop{" "}
    <span className="text-gray-900 font-medium">high-performance digital products</span>{" "}
    with a focus on{" "}

    <span className="relative font-medium text-gray-900">
      design clarity
      <span className="absolute left-0 bottom-0 w-full h-[6px] bg-indigo-200/60 blur-sm -z-10" />
    </span>,{" "}

    <span className="relative font-medium text-gray-900">
      scalability
      <span className="absolute left-0 bottom-0 w-full h-[6px] bg-purple-200/60 blur-sm -z-10" />
    </span>, and{" "}

    <span className="relative font-medium text-gray-900">
      business growth
      <span className="absolute left-0 bottom-0 w-full h-[6px] bg-pink-200/60 blur-sm -z-10" />
    </span>.

  </p>
</div>

      {/* Orbit Area */}
      <div className="relative flex items-center justify-center h-[650px]">

        {/* Floating Decorative Icons (Background Layer) */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute left-[15%] top-[20%] text-gray-200 w-6 h-6" />
          <Layers className="absolute right-[18%] top-[30%] text-gray-200 w-6 h-6" />
          <Zap className="absolute left-[25%] bottom-[20%] text-gray-200 w-5 h-5" />
          <Gauge className="absolute right-[25%] bottom-[25%] text-gray-200 w-6 h-6" />
        </div>

        {/* Center Core */}
<div className="z-10 relative w-42 h-42 rounded-full flex items-center justify-center text-center">

  {/* Outer soft glow */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 blur-3xl opacity-40" />

  {/* Glass ring border */}
  <div className="absolute inset-0 rounded-full border border-white/40 shadow-[0_0_60px_-15px_rgba(99,102,241,0.25)]" />

  {/* Inner glass layer */}
  <div className="relative w-full h-full rounded-full 
    bg-white/30 backdrop-blur-3xl 
    border border-white/40
    shadow-xl
    flex items-center justify-center">

    <div className="text-center px-6">

      {/* Accent glow dot */}
      <div className="mx-auto mb-3 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-300" />

      <h4 className="text-sm font-heading font-semibold tracking-tight text-gray-900">
        Web Development
      </h4>

      <p className="text-xs text-gray-500 mt-1 leading-snug">
        End-to-End Digital Services
      </p>

    </div>
  </div>

  {/* Subtle inner highlight (light reflection effect) */}
  <div className="absolute top-6 left-10 w-16 h-16 bg-white/40 blur-2xl rounded-full opacity-60" />

</div>

        {/* Inner Orbit */}
        <OrbitingCircles radius={140} speed={0.55}>
          <ServiceItem icon={<Palette />} title="UI/UX Design" desc="Clean, conversion-focused interfaces." />
          <ServiceItem icon={<Code />} title="Web Dev" desc="Modern full-stack applications." />
          <ServiceItem icon={<Zap />} title="Performance" desc="Speed-optimized experiences." />
        </OrbitingCircles>

        {/* Outer Orbit */}
        <OrbitingCircles radius={240} reverse speed={0.35}>
          <ServiceItem icon={<Search />} title="SEO" desc="Rank higher & increase visibility." />
          <ServiceItem icon={<ShoppingCart />} title="E-commerce" desc="High-converting online stores." />
          <ServiceItem icon={<Rocket />} title="Scaling" desc="Built to grow with your business." />
          <ServiceItem icon={<Shield />} title="Security" desc="Safe, stable & protected systems." />
          <ServiceItem icon={<Gauge />} title="Optimization" desc="System performance tuning." />
        </OrbitingCircles>

      </div>

      {/* Bottom Supporting Line */}
      <div className="relative text-center mt-10">
        <p className="text-sm text-gray-400 tracking-wide">
          Minimal design. Maximum performance. Built for scale.
        </p>
      </div>

    </section>
  )
}

/* Service Pill */
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
        group-hover:scale-[1.04]
        transition-all duration-300">

        <span className="text-gray-700">{icon}</span>

        <span className="text-sm font-heading font-medium text-gray-800">
          {title}
        </span>
      </div>

      {/* Hover Detail */}
      <div className="absolute left-1/2 -translate-x-1/2 top-14 w-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none z-20">

        <div className="rounded-xl p-3 text-xs text-gray-600 leading-snug
          bg-white
          border border-gray-200
          shadow-xl font-sans">

          {desc}
        </div>
      </div>

    </div>
  )
}

export default WebServices
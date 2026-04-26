"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Megaphone,
  Globe,
  Palette,
  Smartphone,
  PenTool,
  Video,
  Layout,
  Search,
  FileEdit,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    icon: Megaphone,
    href: "/services/digital-marketing",
    description:
      "Grow your brand with data-driven marketing strategies and targeted campaigns.",
  },
  {
    id: 2,
    title: "Web Design & Development",
    icon: Globe,
    href: "/services/web-development",
    description:
      "Modern, responsive websites built for performance and conversions.",
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: Palette,
    href: "/services/graphic-design",
    description:
      "Creative visuals that elevate your brand identity and recognition.",
  },
  {
    id: 4,
    title: "App Development",
    icon: Smartphone,
    href: "/services/app-development",
    description:
      "Scalable mobile apps with seamless user experiences.",
  },
  {
    id: 5,
    title: "Content Creation",
    icon: PenTool,
    href: "/services/content-creation",
    description:
      "Engaging content that builds trust and drives engagement.",
  },
  {
    id: 6,
    title: "Video Editing",
    icon: Video,
    href: "/services/video-editing",
    description:
      "High-quality video editing that captures attention and tells your story.",
  },
  {
    id: 7,
    title: "UI/UX Design",
    icon: Layout,
    href: "/services/ui-ux",
    description:
      "User-focused design for better usability and experience.",
  },
  {
    id: 8,
    title: "SEO Optimization",
    icon: Search,
    href: "/services/seo",
    description:
      "Boost rankings and drive organic traffic with proven SEO strategies.",
  },
  {
    id: 9,
    title: "Content Optimization",
    icon: FileEdit,
    href: "/services/content-optimization",
    description:
      "Optimize content for better reach, clarity, and conversions.",
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-linear-to-b from-white via-orange-50/40 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-16 px-4 relative z-10">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Solutions Designed for Growth
        </h2>
        <p className="text-gray-500 mt-4">
          We deliver powerful digital solutions to help your business scale and succeed.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10">
        {servicesData.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => router.push(service.href)}
              className="group cursor-pointer p-6 rounded-2xl 
              bg-white/40 backdrop-blur-xl border border-white/30 
              shadow-md hover:shadow-2xl 
              hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-orange-200/0 group-hover:bg-orange-200/20 blur-xl transition-all duration-500" />

              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-5 
              group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Icon size={24} />
              </div>

              {/* Title */}
              <h3 className="relative text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="relative mt-4 h-[2px] w-0 bg-orange-500 group-hover:w-12 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
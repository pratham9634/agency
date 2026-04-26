"use client";

import React, { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "GreenField International School",
    category: "Education Platform",
    desc: "Redesigned their end-to-end admissions journey — mobile-first inquiry flow, smart notice board, and conversion-optimised landing pages that turned visitors into applicants.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80",
    result: "+3× admission inquiries",
    tags: ["Admissions Portal", "Mobile-first", "CMS"],
    label: "Education · 2024",
    num: "01",
    link: "#",
  },
  {
    title: "Urban Kart Online Storefront",
    category: "E-Commerce Platform",
    desc: "Rebuilt the product discovery and checkout flow end-to-end. A/B tested hero sections, reduced steps to purchase from 6 to 2, and integrated a loyalty system to increase repeat buyers.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    result: "+42% conversion rate",
    tags: ["Checkout Redesign", "A/B Testing", "Loyalty"],
    label: "E-Commerce · 2024",
    num: "02",
    link: "#",
  },
  {
    title: "Helping Hands NGO Platform",
    category: "Non-Profit Website",
    desc: "Built an emotionally resonant storytelling platform with recurring donation flows, real-time campaign dashboards, and impact counters that kept donors engaged long after the first visit.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80",
    result: "2.5× year-on-year donations",
    tags: ["Donor UX", "Storytelling", "Campaigns"],
    label: "NGO · 2023",
    num: "03",
    link: "#",
  },
  {
    title: "Spice Hub Restaurant Group",
    category: "Restaurant & Hospitality",
    desc: "Created a menu-first digital experience with integrated reservation system, Google Maps optimisation, and mobile pages built to convert local search intent into table bookings.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    result: "+60% table reservations",
    tags: ["Reservations", "Menu UX", "Local SEO"],
    label: "Hospitality · 2023",
    num: "04",
    link: "#",
  },
];

/* ─── per-project row ─── */
function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { amount: 0.35, once: false });

  return (
    <div
      ref={rowRef}
      className={`
        grid grid-cols-1 md:grid-cols-2 items-start
        border-b border-neutral-100 last:border-b-0
      `}
      style={{ minHeight: "520px" }}
    >
      {/* ── IMAGE (sticky) ── */}
      <div
        className={`
          relative py-10 px-6
          ${isEven ? "md:pr-10 md:pl-0" : "md:pl-10 md:pr-0 md:order-2"}
        `}
      >
        <div className="sticky top-10">
          {/* frame */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.04]"
            />

            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

            {/* frosted label bottom-left */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wide text-white"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "0.5px solid rgba(255,255,255,0.22)" }}>
              {project.label}
            </div>

            {/* counter top-right */}
            <div className="absolute top-4 right-4 text-[11px] font-bold tracking-widest text-white/50 font-mono">
              {project.num} / 0{projects.length}
            </div>
          </div>

          {/* accent line below image */}
          <div className="mt-4 h-[1.5px] rounded-full"
            style={{ background: "linear-gradient(90deg, #f97316, #ec4899, transparent)" }} />
        </div>
      </div>

      {/* ── DETAIL (scrollable) ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 18 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        className={`
          relative py-10 px-6 flex flex-col justify-center
          ${isEven ? "md:pl-10 md:pr-0" : "md:pr-10 md:pl-0 md:order-1"}
        `}
      >
        {/* timeline spine */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[1.5px] opacity-20"
          style={{ background: "linear-gradient(to bottom, #f97316, #ec4899, #8b5cf6)" }}
        />
        <div
          className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#f9f8f6]"
          style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
        />

        {/* category */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-[1.5px] rounded-full"
            style={{ background: "linear-gradient(90deg,#f97316,#ec4899)" }} />
          <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-orange-500">
            {project.category}
          </span>
        </div>

        {/* title */}
        <h3
          className="text-2xl md:text-[1.75rem] font-heading font-semibold leading-tight tracking-tight text-neutral-900 mb-4"
        >
          {project.title}
        </h3>

        {/* desc */}
        <p className="text-sm text-neutral-500 leading-[1.8] font-light mb-6 max-w-sm">
          {project.desc}
        </p>

        {/* result card */}
        <div
          className="flex items-center gap-4 bg-white rounded-2xl p-4 mb-5 max-w-xs border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
        >
          <div
            className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-base"
            style={{ background: "linear-gradient(135deg,#fff7ed,#fce7f3)" }}
          >
            📈
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium mb-0.5">
              Key Result
            </p>
            <p className="text-[15px] font-heading font-bold text-neutral-900 tracking-tight">
              {project.result}
            </p>
          </div>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full text-neutral-500 font-medium border border-neutral-200"
              style={{ background: "#f5f2ee" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            className="text-[12px] font-semibold text-orange-500 flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
          >
            View Live Website   
            <span className="text-sm">→</span>
          </a>
          <span className="text-neutral-200 text-sm select-none">|</span>
          <button className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors duration-200">
            Screenshots
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── main section ─── */
export default function Projects(): JSX.Element {
  return (
    <>
      <section className="relative bg-[#f9f8f6] py-24 overflow-hidden">
        {/* ── heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-6 mb-20"
        >
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-neutral-400 border border-neutral-200 bg-white px-4 py-1.5 rounded-full mb-5 font-medium">
            <span className="w-[5px] h-[5px] rounded-full"
              style={{ background: "linear-gradient(135deg,#f97316,#ec4899)" }} />
            Selected Work
          </div>

          <h2
            className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-neutral-900 leading-tight"
          >
            Projects That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#f97316,#ec4899,#8b5cf6)" }}
            >
              Drive Real Results
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 text-base font-light leading-relaxed max-w-sm mx-auto">
            Scroll through real-world transformations — each image sticks while you read its full story.
          </p>
        </motion.div>

        {/* ── project rows ── */}
        <div className="max-w-5xl mx-auto px-6">
          {projects.map((project, i) => (
            <ProjectRow key={i} project={project} index={i} />
          ))}
        </div>

        {/* ── load more button ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-20 px-6"
        >
          {/* subtle divider above */}
          <div className="flex items-center gap-4 w-full max-w-xs mb-2">
            <div className="flex-1 h-[0.5px] bg-neutral-200" />
            <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-300 font-medium">
              {projects.length} of 12 projects
            </span>
            <div className="flex-1 h-[0.5px] bg-neutral-200" />
          </div>

          <a
            href="#"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm font-heading font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #f97316, #ec4899)",
              color: "#fff",
              letterSpacing: "-0.01em",
              boxShadow: "0 4px 24px rgba(249,115,22,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 36px rgba(249,115,22,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 24px rgba(249,115,22,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            {/* shimmer sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
              }}
            />

            {/* grid icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="9" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="1" y="9" width="5" height="5" rx="1" fill="white" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" />
            </svg>

            View All Projects

            <span className="text-white/70 transition-all duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="text-[32px] text-neutral-400 font-light">
            See more websites we've built for various industries
          </p>
        </motion.div>
      </section>
    </>
  );
}
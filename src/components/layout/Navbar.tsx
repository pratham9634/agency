"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Icons ---
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const servicesItems = [{
  title:"Web Design & Development",
  path: "/web-design-development"
}, {
  title: "Digital Marketing",
  path: "/digital-marketing"
}, {
  title: "Branding",
  path: "/branding"
}, {
  title: "UI/UX",
  path: "/ui-ux"
}, {
  title: "SEO",
  path: "/seo"
}];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
        <nav
          className={`w-full max-w-6xl flex items-center justify-between rounded-2xl border transition-all duration-500 pointer-events-auto
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2 px-6"
              : "bg-white/50 backdrop-blur-lg border-neutral-200/50 py-4 px-6 sm:px-8"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-tight text-neutral-900">
            AGENCY<span className="text-orange-600">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition
                ${
                  pathname?.includes("/services")
                    ? "text-orange-700"
                    : "text-neutral-800 hover:text-orange-600"
                }`}
              >
                Services
                <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 bg-white/70 backdrop-blur-xl border border-neutral-200 rounded-2xl shadow-lg p-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={`/services/${item.path}`}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:text-orange-600 hover:bg-neutral-50 rounded-lg transition"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            {[
              { name: "Work", path: "/work" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-semibold transition group
                ${
                  isActive(link.path)
                    ? "text-orange-700"
                    : "text-neutral-800 hover:text-orange-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-600 transition-all duration-300
                  ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 transition"
            >
              Let's Collaborate
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-800 hover:text-orange-600"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden
        ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          {/* Services */}
          <div className="mb-6">
            <p className="text-xs font-bold text-neutral-400 uppercase mb-3">
              Services
            </p>
            {servicesItems.map((item) => (
              <Link
                key={item.title}
                href={`/services/${item.path}`}
                className="block text-2xl font-bold text-neutral-800 hover:text-orange-600 py-1"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Other Links */}
          {[
            { name: "Work", path: "/work" },
            { name: "About", path: "/about" },
            { name: "Blog", path: "/blog" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-3xl font-bold py-2
              ${
                isActive(link.path)
                  ? "text-orange-700"
                  : "text-neutral-800 hover:text-orange-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              className="block text-center w-full py-4 text-lg font-bold text-white bg-orange-600 rounded-2xl"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
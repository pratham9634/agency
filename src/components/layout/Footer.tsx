"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-500 hover:text-white transition">
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/footer.png" alt="footer" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* 🔥 CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
            Let’s build something amazing together
          </h2>
          <p className="text-gray-300 mt-3">
            Ready to grow your brand? Let’s start your next project today.
            
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-orange-600 rounded-full uppercase tracking-wide text-sm font-medium hover:bg-orange-700 transition"
          >
            Start a Project 🚀
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <h2 className="text-2xl font-heading font-semibold tracking-tight mb-4">
              AGENCY<span className="text-orange-500">.</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We build modern digital experiences that help brands grow and stand out. We have one of the best professionals young team and We are providing innovative and creative solutions for your business that how to grow it faster on Internet Era.
            </p>

            <div className="flex gap-4 mt-6">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaTwitter /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaLinkedin /></SocialIcon>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold tracking-tight mb-4">Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm font-semibold">
              {["Web Design", "Branding", "UI/UX", "SEO", "Marketing"].map((item) => (
                <li key={item}>
                  <Link href={`/services/${item}`} className="hover:text-orange-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Location */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-heading font-semibold tracking-tight mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300 text-sm font-semibold">
                {["about", "blog", "contact"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`} className="hover:text-orange-400">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold tracking-tight mb-4">Location</h3>
              <p className="text-sm text-gray-300 font-semibold">
                New Delhi, India <br />
                110001 <br />
                hello@agency.com <br />
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* 📩 Newsletter */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-heading font-semibold tracking-tight mb-3">
            Subscribe to our newsletter
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none"
            />
            <button className="px-6 py-3 bg-orange-600 rounded-xl uppercase tracking-wide text-sm font-medium hover:bg-orange-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AGENCY. All rights reserved.</p>

          {/* ⚖️ Legal */}
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
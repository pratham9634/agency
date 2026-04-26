import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/posters/web-poster.png"
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
          Where Ideas Become
          <span className="block italic font-light text-orange-400">
            Digital Products
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
          We design and develop High-Converting Websites That Turn Visitors into Customers and applications 
          that turn vision into scalable, real-world experiences.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-row gap-6 justify-center">
          
          <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-xl">
            Start a Project
          </button>

          <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300">
            View Work
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
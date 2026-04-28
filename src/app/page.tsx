import { Metadata } from 'next'
import Cta from '@/components/sections/Cta'
import HeroSection from '@/components/sections/HeroSection'
import Offers from '@/components/sections/Offers'
import Process from '@/components/sections/Process'
import Results from '@/components/sections/Results'
import Services from '@/components/sections/Services'
import Testinomials from '@/components/sections/Testinomials'
import TrustBar from '@/components/sections/TrustBar'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50 gap-2 overflow-x-hidden">

      <HeroSection />
      <TrustBar />
      <Services/>
      <Results/>
      <WhyChooseUs/>
      <Process/>
      <Testinomials/>
      <Offers/>
      <Cta/>
      
    </main>
  )
}

export const metadata: Metadata = {
  title: "Home",
  description: "Transform your business with our premium digital marketing, SEO, and web development services. Let's scale together.",
  keywords: ["Best Marketing Agency", "Digital Marketing Experts", "Web Design Agency", "SEO Optimization", "PPC Campaigns", "Full-service Agency"],
  openGraph: {
    title: "Home | .Agency.",
    description: "Transform your business with our premium digital marketing, SEO, and web development services. Let's scale together.",
    url: "/",
  },
}

export default page
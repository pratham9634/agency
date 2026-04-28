import { Metadata } from 'next'
import React from 'react'
import Hero from './components/Hero'
import Cta from '@/components/sections/Cta'
import FAQ from '@/components/sections/Faq'
import Testimonials from '@/components/sections/Testinomials'
import Process from './components/Process'
import DigitalMarketingServices from './components/DigitalMarketingServices'
import Tools from './components/Tools'
import Results from './components/Results'

const page = () => {
  return (
     <main className="flex flex-col min-h-screen bg-neutral-50 gap-2 overflow-x-hidden">
      <Hero />
      <DigitalMarketingServices/>
      <Results/>
      <Process/>
      <Tools/>
      <Testimonials/>
      <FAQ/>
      <Cta/>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: "Accelerate your growth with our data-driven digital marketing services including SEO, PPC, Social Media, and Content Marketing.",
  keywords: ["Digital Marketing Services", "SEO Services", "PPC Management", "Social Media Marketing", "Content Marketing", "B2B Marketing"],
  openGraph: {
    title: "Digital Marketing Services | .Agency.",
    description: "Accelerate your growth with our data-driven digital marketing services including SEO, PPC, Social Media, and Content Marketing.",
    url: "/services/digital-marketing",
  },
}

export default page
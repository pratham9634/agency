import { Metadata } from 'next'
import React from 'react'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Approach from './components/Approach'
import Vision from './components/Vision'
import Founder from './components/Founder'
import Cta from '@/components/sections/Cta'
import Testimonials from '@/components/sections/Testinomials'
const page = () => {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Founder />
      <Vision />
      <Approach />
      <Testimonials/>
      <Cta/>
    </main>
  )
}

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, vision, and the team driving .Agency. We are passionate about engineering growth and impactful digital solutions.",
  keywords: ["About .Agency.", "Our Team", "Marketing Experts", "Digital Agency Mission", "Growth Engineers"],
  openGraph: {
    title: "About Us | .Agency.",
    description: "Learn about our mission, vision, and the team driving .Agency. We are passionate about engineering growth and impactful digital solutions.",
    url: "/about",
  },
}

export default page
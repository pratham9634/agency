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

export default page
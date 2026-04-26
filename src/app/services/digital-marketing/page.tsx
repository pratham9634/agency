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

export default page
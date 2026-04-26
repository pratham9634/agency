import React from 'react'
import Hero from './components/Hero'
import Cta from '@/components/sections/Cta'
import FAQ from '@/components/sections/Faq'
import Testimonials from '@/components/sections/Testinomials'
import WhatWeSolve from './components/WhatWeSolve'
import WebServices from './components/WebServices'
import WebProcess from './components/WebProcess'
import Projects from './components/Projects'
import Techs from './components/Techs'

const page = () => {
  return (
    <main className='bg-background text-foreground overflow-x-hidden'>
      <Hero />
      <WhatWeSolve />
      <WebServices />
      <WebProcess />
      <Techs/>
      <Projects />
      <Testimonials />
      <FAQ />
      <Cta />
    </main>
  )
}

export default page
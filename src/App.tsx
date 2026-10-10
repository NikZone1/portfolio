'use client'

import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'

export default function App() {


  return (
    <>
      <main>
        <Header />
        <Hero />
        <Projects />
      <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

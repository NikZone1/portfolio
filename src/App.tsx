'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SectionWrapper from './components/SectionWrapper'
import DarkVeil from './components/DarkVeil';
import TerminalIntro from "./components/TerminalIntro";

export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
        <DarkVeil />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4 space-y-16">
            <SectionWrapper id="projects">
              <Projects />
            </SectionWrapper>
            <SectionWrapper id="skills">
              <Skills />
            </SectionWrapper>
            <SectionWrapper id="contact">
              <Contact />
            </SectionWrapper>
          </div>
        </main>
        <TerminalIntro />
      </div>
    </div>
  )
}


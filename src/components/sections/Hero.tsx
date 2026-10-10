import { motion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-grid" />
    <div className="hero-inner">
      <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}><span className="first-name">Nikhil</span><br /><em>Sindhe.</em></motion.h1>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }} className="hero-bottom"><p>{portfolioData.intro}</p><a href="#projects" className="round-link"><ArrowDownRight size={27} /></a></motion.div>
      <div className="hero-meta"><span className="availability"><span className="live-dot" /> Open for new opportunities</span><div><a href={portfolioData.contact.github} aria-label="Github"><Github size={18} /></a><a href={portfolioData.contact.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a></div></div>
    </div>
    <motion.div className="portrait-shell" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35, duration: .8 }}>
      <div className="portrait-glow" /><div className="portrait-placeholder"><img src="/nikhil-sindhe.png" alt="Nikhil D Sindhe" /></div>
    </motion.div>
    <div className="vertical-mark">BACKEND SYSTEMS * AI-POWERED APPLICATIONS * DEVOPS </div>
  </section>
}

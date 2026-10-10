import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolioData } from '../../data/portfolio'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [open, setOpen] = useState(false)
  const links = ['Projects', 'Journey', 'Skills']
  const target = (link: string) => link === 'Projects' ? 'projects' : link === 'Journey' ? 'journey' : 'skills'
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-shell">
      <a href="/" className="monogram" aria-label="Back to home"><img src="/logo.png" alt="Nikhil Sindhe logo" /></a>
      <nav className="desktop-nav">{links.map(link => <a key={link} href={`#${target(link)}`}>{link}</a>)}</nav>
      <a className="nav-cta" href={portfolioData.contact.resume} download>Resume <Download size={14} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mobile-nav">{links.map(link => <a onClick={() => setOpen(false)} key={link} href={`#${target(link)}`}>{link}</a>)}</motion.nav>}</AnimatePresence>
  </header>
}

import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export default function Contact() {
  return <footer id="contact" className="contact section-pad">
    <span className="section-index">03 / Contact</span>
    <h2>Have a project<br /><i>or idea to explore?</i></h2>
    <a className="email-link" href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}<ArrowUpRight /></a>
    <div className="footer-bottom"><p>© 2026 Nikhil Sindhe</p><div><a href={portfolioData.contact.github} aria-label="Github"><Github /></a><a href={portfolioData.contact.linkedin} aria-label="LinkedIn"><Linkedin /></a></div><a href="/" className="back-top">Back to top ↑</a></div>
  </footer>
}

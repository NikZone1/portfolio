import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export default function Projects() {
  return <section id="projects" className="projects section-pad">
    <div className="section-head"><span className="section-index">01 / Projects</span><h2>Things I’ve<br /><i>built.</i></h2><p>A small collection of projects where I explored useful ideas, backend systems, and practical development tools.</p></div>
    <div className="project-list project-index">
      {portfolioData.projects.map((project, index) => <motion.article key={project.title} className="project-row" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
        <span className="project-number">{project.number}</span><div className="row-title"><span>{project.type}</span>{project.title === 'CodeSense' ? <img className="codesense-logo" src="/codesense.png" alt="CodeSense" /> : <h3>{project.title}</h3>}</div><p>{project.description}</p><div className="row-tech">{project.techStack.map(tech => <b key={tech}>{tech}</b>)}</div>{project.github !== '#' && <a href={project.github} target="_blank" rel="noreferrer" className="project-arrow" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={21} /></a>}
      </motion.article>)}
    </div>
  </section>
}

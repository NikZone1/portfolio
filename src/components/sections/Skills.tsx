import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export default function Skills() {
  return <section id="skills" className="skills section-pad">
    <div className="skills-intro"><span className="section-index">03 / Skills</span><h2>Built for the<br /><i>backend.</i></h2><p>My strongest interest is backend development: designing APIs, working with data, improving reliability, and shipping applications that solve real problems.</p></div>
    <div className="skill-grid">{portfolioData.skills.map((group, index) => <motion.article key={group.category} className="skill-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span>{group.number}</span><h3>{group.category}</h3><div>{group.items.map(item => <b key={item}>{item}</b>)}</div></motion.article>)}</div>
  </section>
}

import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export default function Experience() {
  return <section id="journey" className="experience section-pad">
    <div className="experience-title"><span className="section-index">02 / Journey</span><h2>Learning by<br /><i>building.</i></h2><p>Experience across application development, backend services, automation, and team workflows.</p></div>
    <div className="experience-list">{portfolioData.experience.map((item, index) => <motion.article key={item.period} className="experience-item" initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .09 }}>
      <span className="experience-period">{item.period}</span><div><h3>{item.role}</h3><h4>{item.company}</h4></div><div className="experience-detail"><p>{item.summary}</p><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div><span className="experience-count">0{index + 1}</span>
    </motion.article>)}</div>
  </section>
}

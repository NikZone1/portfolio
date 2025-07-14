import { motion } from 'framer-motion'
import { Terminal, Database, Code, Globe, Box, Server, Cpu, Trello, GitBranch, Cloud, Radio, Network } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'text-yellow-500' },
  { name: 'SQL', icon: Database, color: 'text-blue-500' },
  { name: 'HTML', icon: Code, color: 'text-orange-500' },
  { name: 'CSS', icon: Globe, color: 'text-blue-400' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
  { name: 'React', icon: Code, color: 'text-blue-600' },
  { name: 'Vite', icon: Box, color: 'text-purple-500' },
  { name: 'Flask', icon: Server, color: 'text-gray-600' },
  { name: 'Django', icon: Server, color: 'text-green-600' },
  { name: 'Selenium', icon: Cpu, color: 'text-green-500' },
  { name: 'Jenkins', icon: Box, color: 'text-red-500' },
  { name: 'Jira', icon: Trello, color: 'text-blue-500' },
  { name: 'Docker', icon: Box, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: Box, color: 'text-indigo-500' },
  { name: 'Azure', icon: Cloud, color: 'text-blue-700' },
  { name: 'Kafka', icon: Radio, color: 'text-purple-600' },
  { name: 'REST API', icon: Network, color: 'text-pink-500' },
  { name: 'Linux', icon: Terminal, color: 'text-gray-700' },
  { name: 'GitHub', icon: GitBranch, color: 'text-gray-700' },
  { name: 'Git', icon: GitBranch, color: 'text-red-500' },
]


export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <div className={`p-2 rounded-full ${skill.color} bg-opacity-20 dark:bg-opacity-30 group-hover:bg-opacity-30 dark:group-hover:bg-opacity-40 transition-colors`}>
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


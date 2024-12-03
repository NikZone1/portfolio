'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github } from 'lucide-react'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: 'https://github.com/username/project-one',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project Two',
    description: 'Mobile-first responsive website with modern animations',
    details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: 'https://github.com/username/project-two',
    tech: ['React', 'Tailwind CSS', 'Framer Motion']
  }
]

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="pt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        My Projects
      </motion.h2>
      <div className="grid gap-8 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-600 dark:text-gray-300">{project.details}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

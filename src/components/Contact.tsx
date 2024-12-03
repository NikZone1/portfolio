import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/NikZone1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nikhilsindhe', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/nxk.hxl/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:nikhil.sindhe123@gmail.com', label: 'Email' }
]

export default function Contact() {
  return (
    <section id="contact" className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Let's Connect
      </motion.h2>
      <div className="flex justify-center items-center gap-8">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors"
          >
            <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}


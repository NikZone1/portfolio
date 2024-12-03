import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
}

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } })
    } else {
      controls.start({ opacity: 0.5, transition: { duration: 0.5 } })
    }
  }, [isInView, controls])

  return (
    <motion.section
      ref={ref}
      id={id}
      animate={controls}
      initial={{ opacity: 0.5 }}
      className="py-16"
    >
      {children}
    </motion.section>
  )
}


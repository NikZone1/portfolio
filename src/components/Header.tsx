import { Sun, Moon, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold as needed
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
    ${scrolled
      ? "backdrop-blur-lg" // frosted glass on scroll
      : "backdrop-blur-0 bg-transparent" // fully transparent at top
    }
  `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center h-20">
          {/* Left: Logo or empty */}
          <div className="w-1/3 flex items-center">
            {/* Logo here, or leave empty */}
          </div>
          {/* Center: Nav */}
          <nav className="w-1/3 flex justify-center space-x-12">
            {['Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-xl text-white hover:text-green-600"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          {/* Right: Resume button */}
          <div className="w-1/3 flex justify-end items-center">
            {/* Resume button here */}
            <motion.a
              href="https://drive.google.com/file/d/1YYt_kK7O6iFIwvfu5PEhs5VcxgIyVC6k/view?usp=sharing"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-black hover:text-white"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}




import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

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
        <div className="flex flex-col md:flex-row items-center h-auto md:h-20">
          {/* Left: Logo or empty */}
          <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start mb-2 md:mb-0">
            {/* Logo here, or leave empty */}
          </div>
          {/* Center: Nav */}
          <nav className="w-full md:w-1/3 flex justify-center space-x-6 md:space-x-12 mb-2 md:mb-0">
            {['Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl text-white hover:text-green-600"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          {/* Right: Resume button */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
            <motion.a
              href="https://drive.google.com/file/d/15qyxWFkgildeNiFO3vvmPwy2SglhRqvw/view?usp=sharing"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-black hover:text-white mt-2 md:mt-0"
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




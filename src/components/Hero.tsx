import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SplitText from "./SplitterText";
import TerminalIntro from "./TerminalIntro";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-8 relative"
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 -mt-20">
        {/* Left: Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left pb-6 md:pb-0"
        >
          <div
            style={{ fontFamily: "'Montserrat', Inter, Arial, sans-serif" }}
            className="pb-10"
          >
            <SplitText
              text={'<span class="text-green-600">Hello</span>, you!'}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.35] pb-8 border-b-4 border-transparent"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={() => {
                console.log("All letters have animated!");
              }}
            />
          </div>
        </motion.div>
        {/* Right: Terminal Intro */}
        <div className="w-full flex justify-center md:flex-1 md:justify-center">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
            <TerminalIntro />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-24 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={scrollToProjects}
      >
        <ChevronDown className="w-12 h-12 text-green-600 animate-bounce" />
      </motion.div>
    </section>
  );
}

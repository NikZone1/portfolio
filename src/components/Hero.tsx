import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      className="min-h-screen flex flex-col justify-between relative"
    >
      <div className="flex-grow flex items-center">
        <div className="w-full max-w-4xl mx-auto px-4 pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
           <div className="px-1/4 pt-1/8">
  <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400">Hi There!</h2>
  <h1 className="mt-2 text-6xl md:text-8xl font-bold text-gray-900 dark:text-white">
    I am <span className="text-green-600">Nikhil.</span>
  </h1>
</div>


            <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              {/* ggs */}
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 cursor-pointer"
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

import { useEffect, useState } from "react";

const introText = "I'm Nikhil! A passionate developer specializing in Software & Web Development, DevOps, Cloud and Automation.<br/>Welcome to my portfolio.";

export default function TerminalIntro() {
  const [visible, setVisible] = useState(true);

  // Hide when not in home section
  useEffect(() => {
    function onScroll() {
      const home = document.getElementById("home");
      if (!home) return;
      const rect = home.getBoundingClientRect();
      setVisible(rect.bottom > 0 && rect.top < window.innerHeight);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex-1 flex justify-center w-full md:ml-16">
      <TerminalIntro />
    </div>
  );
}

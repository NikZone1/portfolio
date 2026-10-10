let terminalHasAnimated = false;

import { useEffect, useState } from "react";

const introText = "I'm Nikhil! A passionate developer specializing in Software & Web Development, DevOps, Cloud and Automation.<br/>Welcome to my portfolio.";

export default function TerminalIntro() {
  const [visible, setVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!terminalHasAnimated) {
      setShouldAnimate(true);
      terminalHasAnimated = true;
    }
  }, []);

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

  return (
    <div
      className={`terminal-intro${shouldAnimate ? ' fade-in' : ''}`}
      style={{ visibility: visible ? 'visible' : 'hidden', pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="terminal-bar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
      </div>
      <div className="terminal-content">
        <span className="terminal-prompt">$</span>{' '}
        <span dangerouslySetInnerHTML={{ __html: introText }} />
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}

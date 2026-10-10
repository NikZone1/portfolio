export const portfolioData = {
  name: "Nikhil D Sindhe",
  role: "Software Developer",
  intro: "Backend Developer focused on building scalable, high-performance systems. I design robust APIs, optimize system performance, and build production-grade backend solutions with real-world impact.",
  availability: "Open to select opportunities",
  skills: [
    { category: "Programming", number: "01", items: ["JavaScript", "Python", "SQL", "Java"] },
    { category: "Backend", number: "02", items: ["Node.js", "Express.js", "Flask", "Django"] },
    { category: "Data", number: "03", items: ["MongoDB", "PostgreSQL", "Redis", "Kafka"] },
    { category: "Cloud & DevOps", number: "04", items: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "Nginx"] }
  ],
  experience: [
    {
      period: "Nov 2025 — Present", role: "Backend Developer", company: "Skysecure Technologies Private Limited · Bengaluru", summary: "Building production backend services for security-focused platforms.",
      highlights: ["Develop scalable REST APIs designed for high-volume traffic, reliability, and maintainability.", "Built a real-time wallet and usage-tracking system for AI token consumption, coin-based billing, and live dashboard visibility.", "Integrated Microsoft Graph APIs and Entra ID app registration for Zero Trust and DPDP assessments, automating tenant-data reports.", "Improved API response times by 20–30% with Redis caching and BullMQ asynchronous job processing; deployed services with Nginx on Azure.", "Developed backend features for admin panels and marketplace workflows, including products, reviews, and system controls."]
    },
    {
      period: "Sep 2024 — Feb 2025", role: "Software Developer Intern", company: "Emeelan Solutions Pvt Ltd · Bengaluru", summary: "Worked across application development, automation, and cloud-native services.",
      highlights: ["Built an Electron and React AI chatbot for interactive database querying, reducing query time by 40%.", "Automated Jira workflows and Jenkins CI/CD pipelines with Slack notifications, reducing manual effort by 75%.", "Managed containerized microservices with Docker and Kubernetes, connecting Kafka and PostgreSQL for event-driven workflows."]
    },
    {
      period: "2021 — 2025", role: "B.E. Information Science & Engineering", company: "Sri Venkateshwara College of Engineering · Bengaluru", summary: "CGPA: 8.8 · Built a foundation in software development, databases, cloud tooling, and practical problem solving.",
      highlights: ["Bachelor of Engineering in Information Science & Engineering."]
    }
  ],
  projects: [
    { number: "01", title: "CodeSense", type: "AI-powered code reviewer", description: "An automated code-review platform that delivers context-aware feedback on performance, errors, structure, security, and optimization across multiple languages.", techStack: ["React", "Flask", "Ollama", "LLaMA 3.2", "GitHub Actions"], github: "https://github.com/NikZone1/codesense", tone: "violet" },
    { number: "02", title: "House Hunt Hero", type: "ML house price prediction", description: "A machine-learning project that predicts house prices using Linear Regression, RMSE, feature engineering, and data visualization.", techStack: ["Python", "NumPy", "Pandas", "Flask"], github: "#", tone: "lime" },
    { number: "03", title: "E-commerce test automation", type: "QA automation", description: "A scalable automation suite for functional tests, checkout flows, billing updates, test data creation, logging, and reporting.", techStack: ["Java", "Selenium WebDriver"], github: "#", tone: "orange" }
  ],
  contact: { email: "nikhil.sindhe123@gmail.com", github: "https://github.com/NikZone1", linkedin: "https://www.linkedin.com/in/nikhilsindhe/", resume: "/Nikhil-D-Sindhe_Resume.pdf" }
}

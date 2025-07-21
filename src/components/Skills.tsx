import { Terminal, Database, Code, Globe, Box, Server, Cpu, Trello, GitBranch, Cloud, Radio, Network } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: Terminal, color: 'text-yellow-500' },
  { name: 'SQL', icon: Database, color: 'text-blue-500' },
  { name: 'HTML', icon: Code, color: 'text-orange-500' },
  { name: 'CSS', icon: Globe, color: 'text-blue-400' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
  { name: 'React', icon: Code, color: 'text-blue-600' },
  { name: 'Vite', icon: Box, color: 'text-purple-500' },
  { name: 'Flask', icon: Server, color: 'text-gray-600' },
  { name: 'Django', icon: Server, color: 'text-green-600' },
  { name: 'Selenium', icon: Cpu, color: 'text-green-500' },
  { name: 'Jenkins', icon: Box, color: 'text-red-500' },
  { name: 'Jira', icon: Trello, color: 'text-blue-500' },
  { name: 'Docker', icon: Box, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: Box, color: 'text-indigo-500' },
  { name: 'Azure', icon: Cloud, color: 'text-blue-700' },
  { name: 'Kafka', icon: Radio, color: 'text-purple-600' },
  { name: 'REST API', icon: Network, color: 'text-pink-500' },
  { name: 'Nginx', icon: Server, color: 'text-green-500' },
  { name: 'Linux', icon: Terminal, color: 'text-gray-700' },
  { name: 'GitHub', icon: GitBranch, color: 'text-gray-700' },
  { name: 'Git', icon: GitBranch, color: 'text-red-500' },
];

function splitSkills(skills: Skill[]): [Skill[], Skill[], Skill[]] {
  const rows: [Skill[], Skill[], Skill[]] = [[], [], []];
  skills.forEach((skill: Skill, i: number) => {
    rows[i % 3].push(skill);
  });
  return rows;
}

const [row1, row2, row3] = splitSkills(skills);

interface MarqueeRowProps {
  skills: Skill[];
  reverse?: boolean;
  duration?: number;
}

function MarqueeRow({ skills, reverse = false, duration = 20 }: MarqueeRowProps) {
  const repeatedSkills = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className={`flex gap-6 min-w-max marquee-row ${reverse ? 'marquee-reverse' : 'marquee'}`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedSkills.map((skill, idx) => (
          <div
            key={skill.name + idx}
            className="flex flex-col items-center gap-2 p-4 rounded-xl  backdrop-blur-md shadow-xl border border-white/10 min-w-[140px]"
          >
            <div className={`p-3 rounded-full ${skill.color} bg-white/10 icon-float`}>
              <skill.icon className={`w-8 h-8 ${skill.color}`} />
            </div>
            <span className="text-sm font-semibold text-white drop-shadow">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-8 relative overflow-hidden bg-transparent">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee {
          animation: marquee linear infinite;
        }
        .marquee-reverse {
          animation: marquee linear infinite;
          animation-direction: reverse;
        }
        .icon-float {
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .skills-fade-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 25%,
            black 75%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 25%,
            black 75%,
            transparent 100%
          );
        }
      `}</style>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
        Skills
      </h2>
      <div className="relative w-full">
        <div className="skills-fade-mask">
          <div className="space-y-6">
            <MarqueeRow skills={row1} reverse={false} duration={22} />
            <MarqueeRow skills={row2} reverse={true} duration={18} />
            <MarqueeRow skills={row3} reverse={false} duration={20} />
          </div>
        </div>
      </div>
    </section>
  );
}


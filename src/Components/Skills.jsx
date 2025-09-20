import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFigma, SiVite, SiTypescript, SiNextdotjs, SiJavascript, SiFlask } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact size={65} className="text-[#61DBFB]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={65} className="text-[#38BDF8]" /> },
    { name: "JavaScript", icon: <SiJavascript size={65} className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 size={65} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={65} className="text-blue-500" /> },
    { name: "Git / GitHub", icon: <FaGitAlt size={65} className="text-orange-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={65} className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs size={65} className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql size={65} className="text-blue-600" /> },
    { name: "Figma", icon: <SiFigma size={65} className="text-pink-500" /> },
    { name: "Vite", icon: <SiVite size={65} className="text-purple-500" /> },
    { name: "TypeScript", icon: <SiTypescript size={65} className="text-blue-400" /> },
    { name: "Python", icon: <FaPython size={65} className="text-yellow-300" /> },
    { name: "Flask", icon: <SiFlask size={65} className="text-white" /> },
    { name: "Docker", icon: <FaDocker size={65} className="text-blue-400" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-dark-bg px-6 py-16 min-h-screen flex flex-col items-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Tech Stack
      </h2>

      {/* Mechanical Keyboard Grid */}
      <div className="relative [transform:rotateX(25deg)_rotateY(-15deg)] perspective-1000">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center justify-center space-y-2 w-40 h-40 
                         bg-gradient-to-b from-[#1B263B] to-[#0D1B2A] 
                         border border-[#1E2A3A] rounded-xl
                         shadow-[0_12px_0_0_#1E2A3A,0_20px_30px_rgba(0,0,0,0.9)] 
                         hover:translate-y-[8px] hover:shadow-[0_6px_0_0_#1E2A3A,0_12px_20px_rgba(0,0,0,0.7)] 
                         transition-all duration-300 overflow-hidden"
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                               translate-x-[-100%] animate-shine" />

              {skill.icon}
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shine Animation Keyframes */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(150%); }
          100% { transform: translateX(150%); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;

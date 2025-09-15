import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 92 },
  { name: "TailwindCSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 93 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git / GitHub", level: 90 },
  { name: "Next.js", level: 87 },
  { name: "Node.js", level: 80 },
  { name: "PHP / MySQL", level: 85 },
  { name: "Figma", level: 84 },
  { name: "Vite", level: 87 },
  { name: "TypeScript", level: 82 },
  { name: "Python (Flask/Django)", level: 81 },
  { name: "AI / IoT Integration", level: 78 },
  { name: "SQL (SQLite, MySQL)", level: 83 },
];

function Skills() {
  return (
    <section id="skills" className="bg-dark-bg px-6 py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          A focused list of the technologies I use most and how confident I am with each — based on real projects and hands-on work.
        </p>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#0D1B2A]/70 p-6 rounded-xl shadow-lg border border-[#58A6FF]/20"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-[#58A6FF] font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] h-3 rounded-full shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

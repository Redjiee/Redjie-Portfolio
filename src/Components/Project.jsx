import { motion } from "framer-motion";
import traffic from "../assets/traffic.png";
import matlab from "../assets/matlab.png";
import papel from "../assets/papel.png";
import drivline from "../assets/drivline.png";
import gosend from "../assets/gosend.png";

const projects = [
  {
    title: "AI + IoT Traffic Management System",
    description:
      "Smart traffic control using predictive analysis, RoboFlow, and Raspberry Pi.",
    image: traffic,
    stack: ["AI", "IoT", "Raspberry Pi", "Roboflow"],
  },
  {
    title: "GoSend Digital Wallet",
    description:
      "A mobile e-wallet like GCash with QR payments, bills, and peer-to-peer transfers.",
    image: gosend,
    stack: ["React", "Node.js", "TailwindCSS", "MySQL"],
  },
  {
    title: "Trucking Business Assistant App",
    description:
      "Driver attendance, real-time scheduling, and notifications for trucking operations.",
    image: drivline,
    link: "https://github.com/Redjiee/Driveline",
    stack: ["React", "Flask", "MySQL", "TailwindCSS"],
  },
  {
    title: "MP3 Signal Analysis in MATLAB",
    description:
      "Audio file sampling and quantization to understand digital signal processing.",
    image: matlab,
    stack: ["MATLAB", "Signal Processing"],
  },
  {
    title: "Research Paper: AI Traffic Control System",
    description:
      "Published on WordPress — a study on intelligent traffic systems using AI and IoT.",
    image: papel,
    link: "https://dejesusredjie12.wordpress.com",
    stack: ["AI", "IoT", "Research", "WordPress"],
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-dark-bg text-gray-200"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((p, i) => {
          const cardContent = (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#0D1B2A]/70 border border-[#58A6FF]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#58A6FF] mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-4">{p.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.stack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-[#1e2a47] text-[#58A6FF] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );

          return p.link ? (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {cardContent}
            </a>
          ) : (
            <div key={i}>{cardContent}</div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;

import { motion } from "framer-motion";
import profilePic from "../assets/Gradp.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-dark-bg px-6 py-16"
    >
      <div className="max-w-6xl grid md:grid-cols-3 gap-12 items-center">
        {/* Left Side Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center md:text-right"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Who Am I?
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-white text-lg leading-relaxed"
          >
            Hi, I’m <span className="text-[#58A6FF] font-semibold">Redjie Mhar De Jesus</span>. Blending engineering with creativity to solve real-world problems, I build intelligent systems and <span className="font-semibold">web applications</span> powered by <span className="font-semibold">AI</span>, <span className="font-semibold">IoT</span>, and predictive analysis — from traffic and waste solutions to modern apps and automation.
          </motion.p>
        </motion.div>

        {/* Center Image + View Resume Button */}
        <motion.div
          animate={{ y: [-5, 5, -5] }} // continuous bouncing
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <img
            src={profilePic}
            alt="Redjie Mhar De Jesus"
            className="w-72 h-96 md:w-80 md:h-[28rem] rounded-lg border-2 border-[#58A6FF]/50 shadow-lg object-cover"
          />

          {/* View Resume Button */}
          <a
            href="/resume.pdf" // Place your resume.pdf in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            View Resume
          </a>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center md:text-left"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-white text-lg leading-relaxed mb-6"
          >
            I am a Computer Engineering graduate with a strong passion for <span className="font-semibold">AI</span>, <span className="font-semibold">IoT</span>, and modern software development. My expertise lies in <span className="font-semibold">web development</span>, where I design and build efficient, user-friendly applications that address real-world challenges. I enjoy solving problems through <span className="font-semibold">coding</span> and creating digital solutions that blend engineering with creativity.<br /><br />
            Outside of technology, I enjoy traveling and spending time with my dog — always exploring new experiences that inspire fresh ideas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

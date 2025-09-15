import { motion } from "framer-motion";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import cert7 from "../assets/cert7.png";

const certificates = [
  { title: "Introduction to IoT and Digital Transformation", image: cert1 },
  { title: "AI Fundamentals with IBM SkillsBuild", image: cert2 },
  { title: "8th CPE Challenge and General Assembly", image: cert3 },
  { title: "Seminar: From Code To Community Impact in the Digital Era...", image: cert4 },
  { title: "Seminar: Python-Powered Robotics", image: cert5 },
  { title: "ALAB Interactive Robotic Museum Tour", image: cert6 },
  { title: "Empowering Professinals: Megatronics and Automation", image: cert7 },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 px-6 max-w-6xl mx-auto bg-dark-bg text-dark-text"
    >
      <h2 className="text-3xl font-semibold text-center mb-10 text-white">
        Certificates & Seminars
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {certificates.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-dark-accent"
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-dark-accent">
                {c.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;

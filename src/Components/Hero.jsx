import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("about"); // change to your target section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex h-screen items-center justify-center bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Hi, I’m</span>{" "}
          <ReactTyped
            strings={["Redjie De Jesus", "a Web Developer", "a Programmer"]}
            typeSpeed={80}
            backSpeed={50}
            showCursor={true}
            cursorChar="|"
            loop={true}
            className="text-[#3B82F6]" // bright blue for your name/role
          />
        </h1>
        <p className="text-dark-secondary mb-6 text-lg md:text-xl">
          Welcome to my portfolio — here you’ll find my projects and skills.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToSection}
          className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;

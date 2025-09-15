import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4ovxt9h",       // ✅ Your Service ID
        "template_ylavaw8",      // ✅ Your Template ID
        form.current,
        "72zVWJFbgiXdd-J5c"      // ✅ Your Public Key
      )
      .then(
        () => {
          toast.success("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-dark-bg text-dark-text px-6 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Let’s connect! You can reach out via the form below or directly through my email and socials.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6 bg-[#0D1B2A]/70 p-8 rounded-xl shadow-lg border border-[#58A6FF]/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
          ></textarea>
          
          {/* Submit Button with Spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#58A6FF] text-white hover:bg-[#3B82F6] shadow-md"
            }`}
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="mailto:dejesusredjie12@gmail.com"
            className="text-[#58A6FF] hover:text-white text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Redjiee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58A6FF] hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/redjie-de-jesus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58A6FF] hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

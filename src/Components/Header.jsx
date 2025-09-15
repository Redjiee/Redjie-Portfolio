import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0D1117]/80 backdrop-blur-md border-b border-[#58A6FF]/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name with Typing Effect */}
        <h1 className="text-xl font-bold text-[#58A6FF]">
          <Typewriter
            words={["Redjie De Jesus"]} 
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#about" className="hover:text-[#58A6FF]">About</a>
          <a href="#skills" className="hover:text-[#58A6FF]">Skills</a>
          <a href="#projects" className="hover:text-[#58A6FF]">Projects</a>
          <a href="#certificates" className="hover:text-[#58A6FF]">Certificates</a>
          <a href="#contact" className="hover:text-[#58A6FF]">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#58A6FF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1117] border-t border-[#58A6FF]/20">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-300">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

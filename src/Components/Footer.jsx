function Footer() {
  return (
    <footer className="w-full bg-[#0D1117] border-t border-[#58A6FF]/20 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© {new Date().getFullYear()} Redjie Mhar De Jesus. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Redjiee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58A6FF]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/redjie-de-jesus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58A6FF]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dejesusredjie12@gmail.com"
            className="hover:text-[#58A6FF]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

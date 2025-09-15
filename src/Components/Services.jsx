import { Code2, PenTool, Cpu } from "lucide-react";

function Services() {
  return (
    <section className="bg-dark-bg py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        What I Do
      </h2>
      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
          <Code2 className="mx-auto mb-4 h-10 w-10 text-dark-accent" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-400">
            Creating responsive, scalable, and modern web apps using React, Tailwind, and other full-stack tools.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
          <PenTool className="mx-auto mb-4 h-10 w-10 text-dark-accent" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-400">
            Designing clean, user-friendly interfaces that are easy to navigate and visually appealing.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
          <Cpu className="mx-auto mb-4 h-10 w-10 text-dark-accent" />
          <h3 className="text-xl font-bold mb-2">Technical Solutions</h3>
          <p className="text-gray-400">
            Building smart solutions with efficient code and automation for real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

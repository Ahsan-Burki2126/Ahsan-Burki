import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiThreejs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { id: 1, name: "HTML", icon: <FaHtml5 />, color: "text-red-500" },
  { id: 2, name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400" },
  { id: 3, name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { id: 4, name: "React", icon: <FaReact />, color: "text-blue-300" },
  { id: 5, name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-300" },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  { id: 7, name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
  { id: 8, name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
  { id: 9, name: "Three.js", icon: <SiThreejs />, color: "text-green-300" },
  {
    id: 10,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue to-dark-blue text-white px-6 md:px-16 py-12 md:py-20 font-mono overflow-hidden">
      {/* Background Text for Depth */}
      {["TECH", "STACK", "TOOLS", "FRAMEWORKS"].map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 0.1, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute font-extrabold opacity-10 text-[12vw] md:text-[9vw] text-purple"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple to-white bg-clip-text text-transparent"
      >
        My Frontend <span className="text-purple">Tech Stack</span>
      </motion.h2>

      <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
        These are the **technologies, frameworks, and tools** I use to build
        stunning, high-performance web applications.
      </p>

      {/* Tech Stack Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-purple-500 transition-all"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            <h3 className="text-lg font-semibold mt-3">{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

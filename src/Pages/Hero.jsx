import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, Facebook, Instagram, Dribbble } from "lucide-react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.png"; // Ensure correct image path

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-screen min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-b from-blue to-dark-blue text-white px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 font-mono overflow-hidden">
      {/* Multiple Background Text for Layered Depth */}
      {["DESIGN", "CODE", "CREATE", "INNOVATE"].map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 0.1, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute font-extrabold opacity-10 text-[12vw] md:text-[9vw] text-purple"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 60}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 text-center lg:text-left flex flex-col justify-center"
      >
        {/* Mobile-Only Engaging Intro */}
        <p className="block lg:hidden text-md sm:text-lg text-gray-300 mb-2">
          Hey there! 👋 Welcome to my space.
        </p>
        <p className="block lg:hidden text-xl sm:text-2xl font-semibold text-purple mb-2">
          Looking for a creative mind?
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide leading-tight">
          {/* Mobile-Only Unique Intro */}
          <span className="block lg:hidden text-sm text-gray-400 mb-2">
            You’ve just found one! 🚀
          </span>
          HELLO, I'M
          <br />
          <span className="text-purple font-ubuntu">AHSAN</span> <br />
          <span className="text-purple font-ubuntu">
            BURKI <span className="font-londrina">...</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-4 font-medium">
          A <span className="font-bold text-white">Creative Web Designer</span>{" "}
          based in <span className="font-bold text-purple">PAKISTAN</span>
        </p>

        {/* Call to Action */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <button className="relative bg-gradient-to-r from-purple to-blue text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 flex items-center gap-2 m-auto lg:m-0 glow-effect">
            Work with ME →
          </button>
        </motion.div>

        {/* Contact Info */}
        <div className="hidden md:flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-6 mt-6 text-sm md:text-lg">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Phone className="text-purple" size={20} />
            <span>+92 312 9095755</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Mail className="text-purple" size={20} />
            <span>ahsanburki1819@gmail.com</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image - More Engaging */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center lg:w-1/2"
      >
        {/* Animated Background Effect */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center -z-0"
        >
          <div className="w-40 h-40 md:w-60 md:h-60 lg:w-96 lg:h-96 bg-gradient-to-br from-purple to-blue rounded-full opacity-70 -z-10"></div>
        </motion.div>

        {/* Floating Profile Image */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={Profile}
          alt="Ahsan Burki"
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-auto lg:h-auto rounded-full object-cover floating-image z-10"
        />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-4 hidden"
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="bg-white text-purple p-3 rounded-full hover:bg-purple hover:text-white transition duration-300 shadow-md"
        >
          <Dribbble size={18} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="bg-white text-purple p-3 rounded-full hover:bg-purple hover:text-white transition duration-300 shadow-md"
        >
          <Instagram size={18} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="bg-white text-purple p-3 rounded-full hover:bg-purple hover:text-white transition duration-300 shadow-md"
        >
          <Facebook size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

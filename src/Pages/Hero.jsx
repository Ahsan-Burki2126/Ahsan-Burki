import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, Facebook, Instagram, Dribbble } from "lucide-react";
import Profile from "../assets/Profile.png"; // Ensure correct path for your image

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation runs once
    });
  }, []);

  return (
    <section className="relative w-screen h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-br from-blue to-dark-blue text-white px-2 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      {/* Left Content */}
      <div
        className="text-center md:text-left flex-1"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h1 className="text-center md:text-center lg:text-left text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide leading-tight font-ubuntu">
          MY NAME <br />
          is <span className="text-purple font-montserrat">AHSAN</span> <br />
          <span className="text-purple font-montserrat">BURKI...</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-medium">
          <span className="font-bold text-white">Web Designer</span> based in{" "}
          <span className=" font-bold text-purple">PAKISTAN</span>
        </p>
        {/* Button - Responsive */}
        <div className="mt-6">
          <button className="bg-gradient-to-r from-purple to-blue   hover:bg-purple text-white px-6 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md text-sm md:text-lg lg:text-xl font-semibold transition duration-300 flex items-center gap-2 m-auto md:m-auto lg:m-0">
            Work with ME →
          </button>
        </div>
        {/* Contact Info */}
        <div className="hidden md:flex lg:flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-4 md:gap-6 mt-6 text-sm md:text-lg">
          <div className="flex items-center gap-2">
            <Phone className="text-purple" size={18} md:size={20} />
            <span>+92 312 9095755</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-purple" size={18} md:size={20} />
            <span>ahsanburki1819@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Image - Responsive */}
      <div
        className="relative flex justify-center mb-10 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-purple to-blue rounded-full opacity-70 -z-10"></div>
        <img
          src={Profile}
          alt="Lilon Macwan"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-auto lg:h-auto rounded-full object-cover"
        />
      </div>

      {/* Social Links - Position Responsive */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-4 hidden">
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Dribbble size={18} />
        </a>
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Instagram size={18} />
        </a>
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Facebook size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

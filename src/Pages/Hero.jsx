import React, { useEffect } from "react";
import { Phone, Mail, Facebook, Instagram, Dribbble } from "lucide-react";
import Profile from "../assets/Profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-blue to-dark-blue text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 md:py-12 lg:py-24 font-montserrat">
      {/* Left Content */}
      <div
        className="text-center md:text-center lg:text-left lg:flex-1 h-full w-full flex flex-col justify-center gap-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold tracking-wide leading-tight mt-12 lg:mt-0 sm:mt-0">
          MY NAME IS <br />
          <span className="text-purple font-montserrat font-extrabold">
            AHSAN BURKI...
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4">
          <span className="font-bold">Web Developer</span> based in
          <span className="text-purple font-bold"> Pakistan</span>
        </p>
        {/* Button */}
        <div className="mt-6">
          <button className="bg-gradient-to-r from-purple to-dark-blue hover:bg-purple text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md text-base sm:text-lg md:text-xl font-semibold transition duration-300">
            Work with ME →
          </button>
        </div>
        {/* Contact Info */}
        <div className="hidden lg:flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 text-lg">
          <div className="flex items-center gap-2">
            <Phone className="text-purple" size={24} />
            <span className="text-base md:text-lg lg:text-xl">
              +92 312 9095755
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-purple" size={24} />
            <span className="text-base md:text-lg lg:text-xl">
              ahsanburki1819@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="relative flex justify-center items-center mt-4 sm:mt-6 lg:mt-0"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple to-dark-blue rounded-full opacity-70 -z-10"></div>
        <img
          src={Profile}
          alt="Ahsan Burki"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover shadow-lg rounded-full lg:rounded-none"
        />
      </div>

      {/* Social Links */}
      <div className="hidden absolute right-10 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-4">
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Dribbble size={20} />
        </a>
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          className="bg-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Facebook size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Phone, Mail, Facebook, Instagram, Dribbble } from "lucide-react";
import Profile from "../assets/Profile.png";
const Hero = () => {
  return (
    <section className="relative w-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue to-dark-blue text-white px-10 py-16 lg:py-24 lg:px-5">
      {/* Left Content */}
      <div className=" text-center md:text-left lg:text-left  flex-1">
        <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold  tracking-widest lg:tracking-wide">
          MY NAME <br />
          is Ahsan <br />
          <span className="text-purple">Burki...</span>
        </h1>
        <p className="text-3xl mt-4 ">
          <span className="font-bold ">Web Developer</span> based in{" "}
          <span className="text-purple font-bold">Pakistan</span>
        </p>
        {/* Button */}
        <div className="mt-6">
          <button className="bg-gradient-to-r from-purple to-dark-blue hover:bg-purtext-purple text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300">
            Work with ME →
          </button>
        </div>
        {/* Contact Info */}
        <div className="flex items-center gap-6 mt-6 text-lg">
          <div className="flex items-center gap-2">
            <Phone className="text-purple" size={20} />
            <span>+92 312 9095755</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-purple" size={20} />
            <span>ahsanburki1819@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#c7955a] rounded-full opacity-70 -z-10"></div>
        <img
          src={Profile}
          alt="Ahsan Burki"
          className="w-auto h-auto rounded-lg"
        />
      </div>

      {/* Social Links */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <a
          href="#"
          className="bg-purtext-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Dribbble size={18} />
        </a>
        <a
          href="#"
          className="bg-purtext-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Instagram size={18} />
        </a>
        <a
          href="#"
          className="bg-purtext-purple text-white p-3 rounded-full hover:bg-white hover:text-purple transition duration-300"
        >
          <Facebook size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

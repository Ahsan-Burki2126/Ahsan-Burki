import { Mail, MapPin, Phone, CircleUserRound } from "lucide-react";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../assets/Profile.png";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation runs once
    });
  }, []);
  return (
    <div className="bg-gradient-to-b w-full from-blue to-dark-blue p-12 text-white font-ubuntu flex justify-center">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="relative w-72 lg:h-[100%] flex-shrink-0">
          <img
            data-aos="fade-up"
            data-aos-delay="1000"
            src={Profile}
            alt="Lilon Macwan"
            className="rounded-full w-full h-full object-cover border-8 border-purple-500 shadow-lg"
          />
        </div>
        {/* Left Section */}
        <div
          className="flex-1 text-left"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <h1 className="text-6xl text-centeR lg:text-start lg:text-6xl lg:leading-relaxed  font-bold text-purple  font-montserrat">
            Hello and Welcome!
          </h1>

          <div className="mt-6 flex flex-col lg:flex-row gap-2 lg:gap-20  text-lg">
            <div className="flex flex-col gap-2">
              <div className="flex  items-center gap-3 font-semibold">
                <Phone className="text-purple" size={22} />
                <span>+92 312 9095755</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <Mail className="text-purple" size={22} />
                <span>ahsanburki1819@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 font-semibold">
                <CircleUserRound className="text-purple" size={22} />
                <span>Ahsan Burki</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <MapPin className="text-purple" size={22} />
                <span>Islamabad,Pakistan</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 my-6"></div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                3+
              </h3>
              <p className="text-md text-gray font-semibold">
                Years Experience...
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                50+
              </h3>
              <p className="text-md text-gray font-semibold">
                Clients Worldwide...
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray leading-relaxed">
            Hello there! My name is{" "}
            <span className="text-purple">Ahsan Burki</span>. I am a web
            designer & developer, and I'm very passionate and dedicated to my
            work.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mt-6 shadow-lg ">
            <p className="text-lg font-semibold text-white leading-tight">
              <span className="text-3xl text-purple">“</span>Passionate about
              turning designs into high-performance websites and applications.`I
              focus on intuitive user experiences, clean code, and innovative
              solutions to help brands and businesses succeed online.
              <span className="text-3xl text-purple">”</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Mail, MapPin, Phone, CircleUserRound, Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../assets/Profile.png";

const About = () => {
  const rightSectionRef = useRef(null);
  const [rightSectionHeight, setRightSectionHeight] = useState("auto");

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    const adjustHeight = () => {
      if (rightSectionRef.current && window.innerWidth >= 1024) {
        setRightSectionHeight(`${rightSectionRef.current.clientHeight}px`);
      } else {
        setRightSectionHeight("auto");
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue to-dark-blue w-full p-6 sm:p-12 text-white font-mono flex justify-center ">
      <div className="max-w-5xl w-full flex flex-col-reverse lg:flex-row-reverse items-center lg:items-stretch gap-12">
        {/* Right Section (Text Content) */}
        <div ref={rightSectionRef} className="flex-1 text-left px-4 sm:px-0">
          <h1
            className="text-4xl sm:text-6xl text-center lg:text-left font-bold font-mono"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            Hello and <span className="text-purple">Welcome!</span>
          </h1>

          <div
            className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-10 text-lg"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 sm:gap-3 font-semibold">
                <Phone className="text-purple" size={22} />
                <span>+92 312 9095755</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 font-semibold">
                <Mail className="text-purple" size={22} />
                <span>ahsanburki1819@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 sm:gap-3 font-semibold">
                <CircleUserRound className="text-purple" size={22} />
                <span>Ahsan Burki</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 font-semibold">
                <MapPin className="text-purple" size={22} />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          <div
            className="border-t border-purple my-6"
            data-aos="fade-in"
            data-aos-delay="700"
          ></div>

          <div
            className="flex flex-col sm:flex-row gap-6 sm:gap-12"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                3+
              </h3>
              <p className="text-md text-gray font-semibold">
                Years Experience...
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                50+
              </h3>
              <p className="text-md text-gray font-semibold">
                Clients Worldwide...
              </p>
            </div>
          </div>

          <p
            className="mt-6 text-md sm:text-lg text-gray leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="1200"
          >
            Hello there! My name is{" "}
            <span className="text-purple">Ahsan Burki</span>. I am a web
            designer & developer, and I'm very passionate and dedicated to my
            work.
          </p>

          <div
            className="bg-gray-900 p-6 rounded-lg mt-6 shadow-lg"
            data-aos="fade-in"
            data-aos-delay="1400"
          >
            <p className="text-lg font-semibold text-white leading-tight">
              <span className="text-3xl text-purple">“</span>Passionate about
              turning designs into high-performance websites and applications. I
              focus on intuitive user experiences, clean code, and innovative
              solutions to help brands and businesses succeed online.
              <span className="text-3xl text-purple">”</span>
            </p>
          </div>
        </div>

        {/* Left Section (Profile Image & CV) */}
        <div
          className="relative flex flex-col items-center gap-6 w-full sm:w-64 lg:w-80 flex-shrink-0"
          style={{ height: rightSectionHeight }}
        >
          <div
            className="relative w-full rounded-lg sm:rounded-full p-1 sm:p-2 bg-gradient-to-r from-purple to-blue"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              src={Profile}
              alt="Ahsan Burki"
              className="w-full h-auto object-cover shadow-lg rounded-lg sm:rounded-full"
            />
          </div>

          <h1
            className="mt-2 text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-purple to-white bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Ahsan Burki
          </h1>

          <a
            href="/path-to-cv.pdf"
            download="Ahsan_Burki_CV.pdf"
            className="px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-purple to-blue flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

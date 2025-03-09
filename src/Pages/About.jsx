import { Mail, MapPin, Phone, Code, Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className="relative bg-gradient-to-b from-blue to-dark-blue w-full min-h-screen flex justify-center items-center p-6 sm:p-12 text-white font-mono overflow-hidden">
      {/* Background Floating Text */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-6xl sm:text-8xl font-bold text-gray-900 opacity-10 pointer-events-none animate-floating"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          Ahsan Burki
        </span>
      ))}

      <div className="max-w-5xl w-full flex flex-col-reverse lg:flex-row-reverse items-center lg:items-stretch gap-12">
        {/* Right Section (Text Content) */}
        <div ref={rightSectionRef} className="flex-1 text-left px-4 sm:px-0">
          <h1
            className="text-4xl sm:text-6xl text-center lg:text-left font-bold font-mono"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            Hello, I'm <span className="text-purple">Ahsan Burki</span>
          </h1>

          <p
            className="mt-4 text-md sm:text-lg text-gray leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="900"
          >
            A passionate{" "}
            <span className="text-purple">Front-End Developer</span> who thrives
            on building stunning, fast, and accessible web interfaces. I
            specialize in crafting user-friendly digital experiences that are
            interactive, efficient, and visually appealing.
          </p>

          <div
            className="border-t border-purple my-6"
            data-aos="fade-in"
            data-aos-delay="700"
          ></div>

          <div
            className="grid grid-cols-2 sm:flex gap-4 sm:gap-10 text-lg"
            data-aos="fade-up"
            data-aos-delay="1000"
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

          <h2
            className="text-2xl font-bold text-purple mb-4"
            data-aos="fade-left"
            data-aos-delay="1100"
          >
            Tech Stack & Tools
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-md text-gray font-semibold"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TailwindCSS",
              "Bootstrap",
              "EJS",
              "Framer Motion",
              "Magic UI",
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg shadow-lg"
              >
                <Code className="text-purple" size={20} />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          <div className="mt-8" data-aos="fade-up" data-aos-delay="1300">
            <a
              href="/path-to-cv.pdf"
              download="Ahsan_Burki_CV.pdf"
              className="px-6 py-3 text-lg w-52 font-semibold text-white rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-purple to-blue flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .animate-floating {
          animation: floating 6s infinite ease-in-out alternate;
        }
      `}</style>
    </div>
  );
};

export default About;

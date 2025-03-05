import { Mail, MapPin, Phone } from "lucide-react";
import Profile from "../assets/Profile.png";
const About = () => {
  return (
    <div className="bg-gradient-to-b w-full from-blue to-dark-blue p-12 text-white font-ubuntu flex justify-center">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="relative w-72 lg:h-[100%] flex-shrink-0">
          <img
            src={Profile}
            alt="Lilon Macwan"
            className="rounded-full w-full h-full object-cover border-8 border-purple-500 shadow-lg"
          />
        </div>
        {/* Left Section */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl lg:text-7xl leading-relaxed bg-gradient-to-r from-purple to-white font-bold text-transparent bg-clip-text font-londrina">
            Hello and Welcome!
          </h1>

          <div className="mt-6 flex flex-col lg:flex-row gap-3 lg:gap-20  text-lg">
            <div className="flex flex-col gap-3">
              <div className="flex  items-center gap-3 font-semibold">
                <Phone className="text-purple" size={22} />
                <span>+123 45 666 7788</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <Mail className="text-purple" size={22} />
                <span>lilonesigner@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 font-semibold">
                <MapPin className="text-purple" size={22} />
                <span>California, USA</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <MapPin className="text-purple" size={22} />
                <span>California, USA</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 my-6"></div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                10+
              </h3>
              <p className="text-md text-gray-300 font-semibold">
                Years Experience...
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple to-white text-transparent bg-clip-text">
                50+
              </h3>
              <p className="text-md text-gray-300 font-semibold">
                Clients Worldwide...
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Hello there! My name is{" "}
            <span className="text-purple-400">Lilon Macwan</span>. I am a web
            designer & developer, and I'm very passionate and dedicated to my
            work.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mt-6 shadow-lg">
            <p className="text-lg font-semibold text-white leading-relaxed">
              <span className="text-3xl text-purple-400">“</span>Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Faucibus sed sit
              ultrices et sed metus sollicitudin.
              <span className="text-3xl text-purple-400">”</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

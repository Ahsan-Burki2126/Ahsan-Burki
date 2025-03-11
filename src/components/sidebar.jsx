import React, { useState } from "react";
import navbarData from "../data/constants";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar Toggle Button */}
      <div
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple p-3 rounded-full shadow-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <Menu size={28} className="text-white" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed h-[100%] w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] flex flex-col justify-between bg-dark-blue text-white pt-8 font-mono z-40 transition-all duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:flex lg:w-[20%] lg:min-h-screen`}
      >
        {/* Logo Section */}
        <div className="px-6 mt-6 lg:mt-0">
          <a href="./index.html">
            <h1 className="font-montserrat text-purple text-3xl sm:text-4xl font-bold">
              BuRki.
            </h1>
          </a>
        </div>

        {/* Navigation Menu */}
        <ul className="flex flex-1 mt-10 lg:mt-14 flex-col space-y-5 px-6">
          {navbarData.map((item) => (
            <li key={item.id} className="w-full">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `relative font-semibold text-xl sm:text-2xl px-4 py-2 block transition-all duration-500 ease-in-out ${
                    isActive
                      ? "text-purple before:absolute before:right-0 before:top-1/2 before:h-1 before:w-[60px] sm:before:w-[80px] before:bg-gradient-to-l before:from-purple before:to-blue before:transition-all before:duration-500 before:scale-100"
                      : "text-gray-300 before:absolute before:right-0 before:top-1/2 before:h-1 before:w-[0px] before:bg-gradient-to-l before:from-purple before:to-blue before:transition-all before:duration-500 before:scale-0"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 py-6">
          <a
            href="#"
            className="bg-purple p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <Twitter size={22} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="bg-purple p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <Facebook size={22} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="bg-purple p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <Linkedin size={22} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="bg-purple p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <Github size={22} strokeWidth={1.2} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

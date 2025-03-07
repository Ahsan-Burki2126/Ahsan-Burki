import React from "react";
import navbarData from "../data/constants";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
function Sidebar() {
  return (
    <div className="hidden  h-screen border-l border-red-950 w-[20%] md:hidden lg:flex flex-col justify-between bg-dark-blue text-white pt-10 font-mono sticky">
      {/* Logo Section */}
      <div className="logo text-3xl font-bold px-6">
        <a href="./index.html">
          <h1 className="font-montserrat text-purple text-4xl">BuRki.</h1>
        </a>
      </div>

      {/* Navigation Menu */}
      <ul className=" flex flex-1 my-20 justify-start gap-6 items-start flex-col font-mono">
        {navbarData.map((item) => (
          <li key={item.id} className="w-full ">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `relative font-semibold text-2xl px-6 py-2 block transition-all duration-500 ease-in-out ${
                  isActive
                    ? "text-purple before:absolute before:right-0 before:top-1/2 before:h-1 before:w-[80px] before:bg-gradient-to-l before:from-purple before:to-blue before:transition-all before:duration-500 before:scale-100"
                    : "text-gray-300 before:absolute before:right-0 before:top-1/2 before:h-1 before:w-[0px] before:bg-gradient-to-l before:from-purple before:to-blue before:transition-all before:duration-500 before:scale-0"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 py-8">
        <a href="" className="bg-purple p-2 rounded-3xl">
          <Twitter size={25} strokeWidth={1.2} />
        </a>
        <a href="" className="bg-purple p-2 rounded-3xl">
          <Facebook size={25} strokeWidth={1.2} />
        </a>
        <a href="" className="bg-purple p-2 rounded-3xl">
          <Linkedin size={25} strokeWidth={1.2} />
        </a>
        <a href="" className="bg-purple p-2 rounded-3xl">
          <Github size={25} strokeWidth={1.2} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

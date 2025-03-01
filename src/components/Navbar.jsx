import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import navbarData from "../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar (Fixed at the top) */}
      <nav className="sticky top-0 left-0 w-full bg-blue text-white flex items-center justify-between px-6 py-4 z-50 md:hidden">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="./index.html">BuRki.</a>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Sidebar (Slide-in on Mobile) */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-dark-blue text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={30} />
        </button>

        {/* Sidebar Content */}
        <div className="pt-16 px-6">
          {/* Logo */}
          <div className="text-3xl font-bold mb-8">
            <a href="./index.html">BuRki.</a>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-6">
            {navbarData.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import navbarData from "../data/constants";
import { Home, User, Briefcase, FileText, MessageSquare } from "lucide-react";

const FooterNav = () => {
  return (
    <>
      {/* Spacer div to push content above navbar */}
      <div className="h-16 lg:hidden"></div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 py-2 px-4 flex justify-around items-center z-50 border-t border-gray-800 shadow-lg bg-dark-blue">
        {navbarData.map((item, index) => {
          // Assigning icons dynamically based on index (modify as needed)
          const icons = [Home, User, Briefcase, FileText, MessageSquare];
          const IconComponent = icons[index] || Home;

          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `relative flex flex-col items-center text-sm transition-all duration-300 py-3 ${
                  isActive ? "text-white" : "text-gray-500"
                }`
              }
            >
              <IconComponent size={24} />
              <span className="mt-1 text-xs">{item.title}</span>

              {/* Gradient Underline Effect (Now Works Properly) */}
              <span
                className={`absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[40%] h-[3px] rounded-full transition-all duration-300 ${
                  window.location.pathname === item.link
                    ? "bg-gradient-to-r from-purple to-blue opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default FooterNav;

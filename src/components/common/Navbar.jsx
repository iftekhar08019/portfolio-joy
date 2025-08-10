import React from "react";
import { NavLink } from "react-router";
import { FiHome, FiFolder, FiBookOpen, FiMail } from "react-icons/fi";
import logo from "../../assets/iftekhar_logo.png";

const navItems = [
  { to: "/", label: "Home", Icon: FiHome },
  { to: "/projects", label: "Projects", Icon: FiFolder },
  { to: "/blogs", label: "Blogs", Icon: FiBookOpen },
  { to: "/contact", label: "Contact", Icon: FiMail },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 pt-4 lg:pt-6 pb-3 lg:pb-5 px-3 lg:px-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
        {/* Menu Container - Left side on desktop, centered on mobile */}
        <nav aria-label="Primary" className="flex justify-center lg:justify-start">
          <div className="flex items-center gap-4 lg:gap-8 px-10 py-3 lg:px-10 lg:py-3 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-full lg:backdrop-blur-none lg:bg-transparent lg:border-none lg:hover:border-none">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.label}
                title={item.label}
                className={({ isActive }) =>
                  [
                    "relative flex flex-col items-center justify-center transition-colors",
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-flex flex-col items-center justify-center">
                    <item.Icon className="text-[28px] lg:text-[26px] mb-2 lg:mb-1" />
                    <span className="text-[12px] lg:text-xs font-medium">{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 lg:-bottom-2 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-white rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
        
        {/* Logo - Only visible on desktop, right side */}
        <div className="hidden lg:block w-16 h-16">
          <a href="/" className="block backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 hover:border-white/20 transition-all duration-300">
            <img src={logo} alt="Logo" className="object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

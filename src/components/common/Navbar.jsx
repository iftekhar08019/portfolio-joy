import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/iftekhar_logo.png"
const Navbar = () => {
  return (
    <div className="text-xs lg:text-base flex justify-between items-center pt-8 pb-5 px-5 sticky top-0 z-50 bg-[#1d232a]">
      <div className="flex gap-5 justify-start items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/interest"}>Interest</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div className="w-8 h-8 lg:w-12  lg:h-12">
        <a href="/">
          <img src={logo} alt="Logo" className="object-contain" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

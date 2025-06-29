import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

const Skill = () => {
  return (
    <div className="mt-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
        Skills
      </h1>
      <div className="border-gray-700 border-2 rounded-md p-5 flex flex-wrap gap-4 mt-8 justify-center items-center">
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaHtml5 className="text-4xl text-orange-600 mb-4 transition-transform duration-300 hover:scale-150" />
          HTML5
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaCss3Alt className="text-4xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-150" />
          CSS3
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaJs className="text-4xl text-yellow-500 mb-4 transition-transform duration-300 hover:scale-150" />
          JavaScript
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaReact className="text-4xl text-blue-500 mb-4 transition-transform duration-300 hover:scale-150" />
          React
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <SiMongodb className="text-4xl text-green-600 mb-4 transition-transform duration-300 hover:scale-150" />
          MongoDB
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaNodeJs className="text-4xl text-green-700 mb-4 transition-transform duration-300 hover:scale-150" />
          Node.js
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <SiFirebase className="text-4xl text-yellow-600 mb-4 transition-transform duration-300 hover:scale-150" />
          Firebase
        </h1>
      </div>
    </div>
  );
};

export default Skill;

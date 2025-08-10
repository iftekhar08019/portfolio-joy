import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

const Skill = () => {
  return (
    <div className="mt-6 lg:mt-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
        Skills
      </h1>
      <div className="border-gray-700 border-2 rounded-md p-3 lg:p-5 flex flex-wrap gap-3 lg:gap-4 mt-6 lg:mt-8 justify-center items-center">
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaHtml5 className="text-3xl lg:text-4xl text-orange-600 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">HTML5</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaCss3Alt className="text-3xl lg:text-4xl text-blue-600 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">CSS3</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaJs className="text-3xl lg:text-4xl text-yellow-500 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">JavaScript</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaReact className="text-3xl lg:text-4xl text-blue-500 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">React</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <SiMongodb className="text-3xl lg:text-4xl text-green-600 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">MongoDB</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <FaNodeJs className="text-3xl lg:text-4xl text-green-700 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">Node.js</span>
        </h1>
        <h1 className="flex flex-col items-center rounded-md transition-transform duration-300 hover:scale-110">
          <SiFirebase className="text-3xl lg:text-4xl text-yellow-600 mb-2 lg:mb-4 transition-transform duration-300 hover:scale-150" />
          <span className="text-sm lg:text-base">Firebase</span>
        </h1>
      </div>
    </div>
  );
};

export default Skill;

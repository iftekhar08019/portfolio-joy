import React from "react";
import { CiGlobe } from "react-icons/ci";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import recipeImg from "../../assets/reciepe1.png"

const ProjectsCard = () => {
  return (
    <div>
      <div className="border-gray-700 border-2 rounded-md p-3 lg:p-5 space-y-3 lg:space-y-5">
          <img
            src={recipeImg}
            alt=""
            className="w-full h-auto"
          />
        <h1 className="text-lg lg:text-xl font-semibold">Recipe Ripple</h1>
        <p className="text-gray-300 text-xs lg:text-sm">
          Recipe Ripple is a full-stack recipe management platform where users can explore, add, and manage recipes with secure authentication. The site features dynamic routing, user roles (admin/user), and interactive UI built using React and TailwindCSS.
        </p>
        <div className="flex gap-2 items-center text-xs flex-wrap">
          <h4 className="bg-gray-700 p-1 lg:p-2 rounded-md flex items-center gap-1 text-xs">
            <FaReact className="text-cyan-400" /> React
          </h4>
          <h4 className="bg-gray-700 p-1 lg:p-2 rounded-md flex items-center gap-1 text-xs">
            <FaNodeJs className="text-green-500" /> Node.js
          </h4>
          <h4 className="bg-gray-700 p-1 lg:p-2 rounded-md flex items-center gap-1 text-xs">
            <DiMongodb className="text-green-600" /> MongoDB
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 mt-3">
          <a
            href="https://recipe-ripple.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <CiGlobe />
            <span className="ml-1">Live Site</span>
          </a>
          <a
            href="https://github.com/iftekhar08019/recipe_ripple_client"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <CiGlobe />
            <span className="ml-1">Client Repo</span>
          </a>
          <a
            href="https://github.com/iftekhar08019/recipe_ripple_server"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <CiGlobe />
            <span className="ml-1">Server Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

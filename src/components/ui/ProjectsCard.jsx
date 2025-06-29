import React from "react";
import { CiGlobe } from "react-icons/ci";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";

const ProjectsCard = () => {
  return (
    <div>
      <div className="border-gray-700 border-2 rounded-md p-5 space-y-5">
        <img
          src="https://uploads-ssl.webflow.com/62f375fa349867308a2e90dc/63071517602d4c6fb287656d_Portfolio%20Free%20Webflow%20Template%20Thumbnail.png"
          alt=""
        />
        <h1>Project Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          facilis nostrum beatae perferendis? Quae commodi eius mollitia
          assumenda, saepe quos. Mollitia dolores tenetur natus doloribus quasi
          consectetur sapiente libero vero.
        </p>
        <div className="flex gap-2 items-center text-xs flex-wrap">
          <h4 className="bg-gray-700 p-2 rounded-md">
            <FaReact /> React{" "}
          </h4>
          <h4 className="bg-gray-700 p-2 rounded-md">
            <FaNodeJs /> Node.js{" "}
          </h4>
          <h4 className="bg-gray-700 p-2 rounded-md">
            <DiMongodb /> MongoDB{" "}
          </h4>
          <h4 className="bg-gray-700 p-2 rounded-md">
            <FaNodeJs /> Node.js{" "}
          </h4>
          <h4 className="bg-gray-700 p-2 rounded-md">
            <DiMongodb /> MongoDB{" "}
          </h4>
        </div>

        <div className="flex gap-2 mt-3">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center">
            <CiGlobe />
            <span className="ml-1">Live Link</span>
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center">
            <CiGlobe />
            <span className="ml-1">Live Link</span>
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center">
            <CiGlobe />
            <span className="ml-1">Live Link</span>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default ProjectsCard;

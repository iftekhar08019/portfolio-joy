import React from "react";
import bannerImg from "../../assets/joy.jpg";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import { FaGithub, FaLinkedinIn} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="space-y-4">
        <h1 className="lg:text-5xl font-bold hero-heading">
          Hi JOY here{" "}
          <span class="inline-block origin-bottom hover:animate-wave">👋</span>
        </h1>
        <p className="font-medium">MERN Stack Developer based in Germany🇩🇪</p>
        <br />
        <p className="font-medium">
          Medical engineering taught me precision. Full-stack web dev <br />
          lets me apply it.
        </p>
        <br />
        <div className="flex gap-3 justify-start items-center">
          <button class="hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow">
            Resume <FaFileDownload className="inline"></FaFileDownload>
          </button>
          <button><FaLinkedinIn size="25px"></FaLinkedinIn></button>
          <button><FaGithub size="25px"></FaGithub></button>
          <button><FaEnvelope size="25px"></FaEnvelope></button>
        </div>
      </div>
      <div className="relative w-1/4 hover-trigger overflow-hidden">
        <img src={bannerImg} alt="" className="rounded-2xl block w-full" />

        {/* Centered, absolute, initially hidden: */}
        <h1 className="absolute text-6xl bottom-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-400 ease-in-out z-10">
          🕶️
        </h1>

        <div className="border-overlay absolute inset-0 pointer-events-none rounded-2xl">
          <div className="bottom-bar"></div>
          <div className="left-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

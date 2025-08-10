import React from "react";
import bannerImg from "../../assets/joy.jpg";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-row flex-col gap-6 lg:gap-10 justify-center items-center">
      <div className="relative lg:w-1/4 w-1/2 mx-auto lg:mx-0 hover-trigger overflow-hidden my-5">
        <img src={bannerImg} alt="" className="rounded-2xl block w-full" />
        <div className="border-overlay absolute inset-0 pointer-events-none rounded-2xl">
          <div className="bottom-bar"></div>
          <div className="left-bar"></div>
        </div>
      </div>
      <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
          Hi, <br /> Iftekhar here{" "}
          <span className="inline-block origin-bottom hover:animate-wave">
            👋
          </span>
        </h1>
        <p className="font-medium text-sm lg:text-base">MERN Stack Developer based in Germany🇩🇪</p>
        <br />
        <p className="font-medium text-sm lg:text-base">
          Medical engineering taught me precision. Full-stack web dev <br className="hidden lg:block" />
          lets me apply it.
        </p>
        <br />
        <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-start items-center">
          <a
            href="https://drive.google.com/file/d/1TG4lkvM4T0RLMI2Dw-ex1lr4L00y49o2/view?usp=drive_link"
            target="_blank"
            className="hover:bg-gray-100 hover:text-black py-2 px-4 border border-gray-400 rounded shadow cursor-pointer text-sm lg:text-base"
          >
            Resume <FaFileDownload className="inline"></FaFileDownload>
          </a>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/mdiftekharulalam21/"
              target="_blank"
              className="cursor-pointer hover:text-gray-400"
            >
              <FaLinkedinIn size="20px" className="lg:hidden"></FaLinkedinIn>
              <FaLinkedinIn size="25px" className="hidden lg:inline"></FaLinkedinIn>
            </a>
            <a
              href="https://github.com/iftekhar08019"
              target="_blank"
              className="cursor-pointer hover:text-gray-400"
            >
              <FaGithub size="20px" className="lg:hidden"></FaGithub>
              <FaGithub size="25px" className="hidden lg:inline"></FaGithub>
            </a>
            <a
              href="mailto:iftekhar08019@gmail.com"
              target="_blank"
              className="cursor-pointer hover:text-gray-400"
            >
              <FaEnvelope size="20px" className="lg:hidden"></FaEnvelope>
              <FaEnvelope size="25px" className="hidden lg:inline"></FaEnvelope>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

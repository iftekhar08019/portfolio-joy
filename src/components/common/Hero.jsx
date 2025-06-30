import React from "react";
import bannerImg from "../../assets/joy.jpg";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-row flex-col gap-10 justify-center items-center">
      <div className="relative lg:w-1/4 w-[45%] hover-trigger overflow-hidden my-5">
        <img src={bannerImg} alt="" className="rounded-2xl block w-full" />
        <div className="border-overlay absolute inset-0 pointer-events-none rounded-2xl">
          <div className="bottom-bar"></div>
          <div className="left-bar"></div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
          Hi, <br /> Iftekhar here{" "}
          <span className="inline-block origin-bottom hover:animate-wave">
            👋
          </span>
        </h1>
        <p className="font-medium">MERN Stack Developer based in Germany🇩🇪</p>
        <br />
        <p className="font-medium">
          Medical engineering taught me precision. Full-stack web dev <br />
          lets me apply it.
        </p>
        <br />
        <div className="flex gap-3 justify-start items-center">
          <a
            href="https://drive.google.com/file/d/1TG4lkvM4T0RLMI2Dw-ex1lr4L00y49o2/view?usp=drive_link"
            target="_blank"
            className="hover:bg-gray-100 hover:text-black py-2 px-4 border border-gray-400 rounded shadow cursor-pointer"
          >
            Resume <FaFileDownload className="inline"></FaFileDownload>
          </a>
          <a
            href="https://www.linkedin.com/in/mdiftekharulalam21/"
            target="_blank"
            className="cursor-pointer hover:text-gray-400"
          >
            <FaLinkedinIn size="25px"></FaLinkedinIn>
          </a>
          <a
            href="https://github.com/iftekhar08019"
            target="_blank"
            className="cursor-pointer hover:text-gray-400"
          >
            <FaGithub size="25px"></FaGithub>
          </a>
          <a
            href="mailto:iftekhar08019@gmail.com"
            target="_blank"
            className="cursor-pointer hover:text-gray-400"
          >
            <FaEnvelope size="25px"></FaEnvelope>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

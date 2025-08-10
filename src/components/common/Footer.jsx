import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/iftekhar_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="flex justify-between items-center py-12 pb-5 px-5 bg-[#1d232a]">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10">
                        <img src={logo} alt="Logo" className="object-contain" />
                    </div>
                    <div className="text-xs lg:text-base">
                        <p>&copy; {currentYear}</p>
                    </div>
                </div>
                <div className="flex space-x-4">
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
            </footer>
        </div>
    );
};

export default Footer;

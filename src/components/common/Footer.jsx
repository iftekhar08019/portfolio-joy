import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="flex justify-between items-center py-12 pb-5 px-5 sticky top-0 z-50 bg-[#1d232a]">
                <div className="text-xs lg:text-base">
                    <p>&copy; {currentYear} Md Iftekharul Alam</p>
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

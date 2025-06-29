import React, { useState } from "react";
import DuoneosLogo from "../../assets/duoneos_logo.jpeg";
const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div>
      <div className="flex justify-around lg:gap-15 bg-gray-700 text-gray-400 rounded-md p-1 mt-8">
        <button
          className={`rounded-md px-10 lg:px-30 ${
            activeTab === "work" ? "bg-gray-900 text-white font-bold px-10 lg:px-30" : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          Experience
        </button>
        <button
          className={`p-2 rounded-md px-10 lg:px-30 ${
            activeTab === "education"
              ? "bg-gray-900 text-white font-bold px-10 lg:px-30"
              : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div className="mt-4 border-1 border-gray-700 p-5 rounded-md">
        {activeTab === "work" ? (
          <div className="flex items-start gap-5 ">
            <div className="bg-gray-700 p-1 rounded-md w-10 h-10 flex-shrink-0">
              <img
                src={DuoneosLogo}
                className="w-full h-full object-cover rounded-md"
                alt="Duoneos Logo"
              />
            </div>
            <div>
              <div className="text-sm text-gray-400">
                <p>May 2021 - October 2021 </p>
                <h2 className="text-base font-bold text-white">Duoneos</h2>
                <p>Frontend Developer Intern</p>
              </div>
              <ul className="list-disc pl-3 mt-3 space-y-2 text-sm text-gray-100">
                <li>Developed user-friendly web applications using React</li>
                <li>
                  Collaborated with designers to implement responsive UI/UX
                </li>
                <li>
                  Participated in code reviews and contributed to team knowledge
                  sharing
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex items-start gap-5 ">
              <div className="bg-gray-700 p-1 rounded-md w-10 h-10 flex-shrink-0">
                <img
                  src={
                    "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/11/friedrich-alexander-universitaet-fau-logo-b.jpg"
                  }
                  className="w-full h-full object-cover rounded-md"
                  alt="University Logo"
                />
              </div>
              <div>
                <div className="text-sm text-gray-400">
                  <p>April 2021 - April 2025 </p>
                  <h2 className="text-base font-bold text-white">
                    Friedrich-Alexander-Universität Erlangen-Nürnberg
                  </h2>
                  <p>Master of Science (M.Sc.) in Medical Engineering</p>
                </div>
                <ul className="list-disc pl-3 mt-3 text-sm space-y-2 text-gray-100">
                  <li>
                    Graduated with a strong academic record, focusing on medical
                    game development and real-time server integration
                  </li>
                  <li>
                    Developed a Flutter-based mobile medical game in a team
                    project, enabling real-time smartwatch data transfer to
                    Unity via Flutter
                  </li>
                  <li>
                    Built a Node.js WebSocket server for real-time communication
                    between OpenSim and Unity during thesis work on
                    biomechanical simulation
                  </li>
                </ul>
              </div>
            </div>
                        <div className="flex items-start gap-5 ">
              <div className="bg-gray-700 p-1 rounded-md w-10 h-10 flex-shrink-0">
                <img
                  src={
                    "https://scientificbangladesh.com/wp-content/uploads/2020/01/80c01bbf9c917e68c33473270e635ffe.jpeg"
                  }
                  className="w-full h-full object-cover rounded-md"
                  alt="University Logo"
                />
              </div>
              <div>
                <div className="text-sm text-gray-400">
                  <p>January 2015 - April 2019 </p>
                  <h2 className="text-base font-bold text-white">
                    University of Chittagong
                  </h2>
                  <p>Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering</p>
                </div>
                <ul className="list-disc pl-3 mt-3 text-sm space-y-2 text-gray-100">
                  <li>
                    Built a solid foundation in electronics, signal processing, and embedded systems through core engineering courses
                  </li>
                  <li>
                   Completed academic projects involving circuit design, microcontroller programming, and data analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;

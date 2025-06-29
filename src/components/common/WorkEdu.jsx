import React, { useState } from "react";
import DuoneosLogo from "../../assets/duoneos_logo.jpeg";
const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div>
      <div className="flex justify-around gap-15 bg-gray-700 text-gray-400 rounded-md p-1 mt-8">
        <button
          className={`rounded-md px-30 ${
            activeTab === "work" ? "bg-gray-900 text-white font-bold px-30" : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          Experience
        </button>
        <button
          className={`p-2 rounded-md px-30 ${
            activeTab === "education"
              ? "bg-gray-900 text-white font-bold px-30"
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
            <div className="bg-gray-700 p-1 rounded-md">
              <img
                src={DuoneosLogo}
                className="w-10 rounded-md"
                alt="Duoneos Logo"
              />
            </div>
            <div>
              <div className="text-sm text-gray-400">
                <p>May 2021 - October 2021 </p>
                <h2 className="text-base font-bold text-white">Duoneos</h2>
                <p>Frontend Developer Intern</p>
              </div>
              <ul className="list-disc pl-3 mt-3 text-gray-100">
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
          <div className="flex items-start gap-5 ">
            <div className="bg-gray-700 p-1 rounded-md">
              <img
                src={DuoneosLogo}
                className="w-10 rounded-md"
                alt="Duoneos Logo"
              />
            </div>
            <div>
              <div className="text-sm text-gray-400">
                <p>May 2021 - October 2021 </p>
                <h2 className="text-base font-bold text-white">Duoneos</h2>
                <p>Frontend Developer Intern</p>
              </div>
              <ul className="list-disc pl-3 mt-3 text-gray-100">
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
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;

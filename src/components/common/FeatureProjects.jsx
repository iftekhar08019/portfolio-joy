import React from "react";
import ProjectsCard from "../ui/ProjectsCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const FeatureProjects = () => {
  return (
    <div className="mt-6 lg:mt-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">Feature Projects</h1>
        <Link to="/projects" className="flex items-center gap-2 hover:text-gray-300 text-sm lg:text-base">
          <span>View All</span>
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 mt-6 lg:mt-8">
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default FeatureProjects;

import React from "react";
import ProjectsCard from "../ui/ProjectsCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const FeatureProjects = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center ">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">Feature Projects</h1>
        <Link to="/projects" className="flex items-center gap-2 hover:text-gray-300">
          <span>View All</span>
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default FeatureProjects;

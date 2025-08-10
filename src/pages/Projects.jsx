import React from "react";
import ProjectsCard from "../components/ui/ProjectsCard";

const Projects = () => {
  return (
    <div className="my-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 mt-6 lg:mt-8">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Projects;

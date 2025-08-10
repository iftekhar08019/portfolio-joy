import React, { useState, useEffect } from "react";
import ProjectsCard from "../components/ui/ProjectsCard";
import useAxios from "../hooks/useAxios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/projects');
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [axios]);

  if (loading) {
    return (
      <div className="my-8">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
          My Projects
        </h1>
        <div className="mt-6 lg:mt-8 text-center">
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
          My Projects
        </h1>
        <div className="mt-6 lg:mt-8 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 mt-6 lg:mt-8">
        {projects.map((project) => (
          <ProjectsCard key={project._id.$oid} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

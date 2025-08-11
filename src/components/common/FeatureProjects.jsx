import React, { useState, useEffect } from "react";
import ProjectsCard from "../ui/ProjectsCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading Animation.json";

const FeatureProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/projects');
        // Sort projects by date to get the latest ones first
        const sortedProjects = response.data.sort((a, b) => {
          // If projects have a date field, sort by it (newest first)
          if (a.date && b.date) {
            return new Date(b.date) - new Date(a.date);
          }
          // If no date field, keep original order (assuming API returns in chronological order)
          return 0;
        });
        setProjects(sortedProjects);
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
      <div className="mt-6 lg:mt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
          <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">Latest Projects</h1>
          <Link to="/projects" className="flex items-center gap-2 hover:text-gray-300 text-sm lg:text-base">
            <span>View All</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="mt-6 lg:mt-8 flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
          <p className="text-gray-400 mt-4 text-center">Loading latest projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 lg:mt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
          <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">Latest Projects</h1>
          <Link to="/projects" className="flex items-center gap-2 hover:text-gray-300 text-sm lg:text-base">
            <span>View All</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="mt-6 lg:mt-8 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 lg:mt-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">Latest Projects</h1>
        <Link to="/projects" className="flex items-center gap-2 hover:text-gray-300 text-sm lg:text-base">
          <span>View All</span>
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 mt-6 lg:mt-8">
        {projects.slice(0, 2).map((project) => (
          <ProjectsCard key={project._id.$oid} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProjects;

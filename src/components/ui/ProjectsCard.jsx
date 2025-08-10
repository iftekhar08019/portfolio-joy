import React, { useEffect, useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  const imageRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imageContainer = imageRef.current;
    if (!imageContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (imageContainer.scrollTop >= imageContainer.scrollHeight - imageContainer.clientHeight) {
          // Reset to top when reaching bottom
          imageContainer.scrollTop = 0;
        } else {
          imageContainer.scrollTop += 1;
        }
      }, 50); // Adjust speed here (lower = faster)
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    // Start scrolling on mount
    startScrolling();

    // Pause on hover
    imageContainer.addEventListener('mouseenter', stopScrolling);
    imageContainer.addEventListener('mouseleave', startScrolling);

    // Cleanup
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
      imageContainer.removeEventListener('mouseenter', stopScrolling);
      imageContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Technology icon mapping
  const getTechIcon = (techName) => {
    const techMap = {
      'React': FaReact,
      'Node.js': FaNodeJs,
      'MongoDB': DiMongodb,
      'Express.js': FaNodeJs,
      'Firebase': DiMongodb,
      'Tailwind CSS': FaReact,
      'Vercel': CiGlobe,
      'Lottie + Typewriter': FaReact,
      'JavaScript': FaReact,
      'TypeScript': FaReact,
      'HTML': CiGlobe,
      'CSS': CiGlobe,
      'Python': FaNodeJs,
      'Django': FaNodeJs,
      'PostgreSQL': DiMongodb,
      'MySQL': DiMongodb,
      'Redis': DiMongodb,
      'GraphQL': FaNodeJs,
      'REST API': CiGlobe,
      'JWT': FaNodeJs,
      'OAuth': FaNodeJs,
      'Docker': CiGlobe,
      'AWS': CiGlobe,
      'Google Cloud': CiGlobe,
      'Netlify': CiGlobe,
      'Git': FaGithub,
      'GitHub': FaGithub,
      'GitLab': FaGithub,
      'Bitbucket': FaGithub,
      'npm': FaNodeJs,
      'yarn': FaNodeJs,
      'Webpack': FaNodeJs,
      'Babel': FaNodeJs,
      'ESLint': FaNodeJs,
      'Prettier': FaNodeJs,
      'Jest': FaNodeJs,
      'Cypress': FaNodeJs,
      'Storybook': FaReact,
      'Material-UI': FaReact,
      'Ant Design': FaReact,
      'Bootstrap': CiGlobe,
      'Sass': CiGlobe,
      'Less': CiGlobe,
      'Redux': FaReact,
      'Zustand': FaReact,
      'React Query': FaReact,
      'Axios': FaNodeJs,
      'Fetch API': CiGlobe,
      'Socket.io': FaNodeJs,
      'WebRTC': CiGlobe,
      'PWA': CiGlobe,
      'Service Workers': CiGlobe,
      'IndexedDB': DiMongodb,
      'LocalStorage': DiMongodb
    };
    return techMap[techName] || CiGlobe;
  };

  // Technology color mapping
  const getTechColor = (techName) => {
    const colorMap = {
      'React': 'text-cyan-400',
      'Node.js': 'text-green-500',
      'MongoDB': 'text-green-600',
      'Express.js': 'text-green-500',
      'Firebase': 'text-yellow-500',
      'Tailwind CSS': 'text-blue-400',
      'Vercel': 'text-black',
      'Lottie + Typewriter': 'text-purple-400',
      'JavaScript': 'text-yellow-400',
      'TypeScript': 'text-blue-500',
      'HTML': 'text-orange-500',
      'CSS': 'text-blue-400',
      'Python': 'text-blue-600',
      'Django': 'text-green-700',
      'PostgreSQL': 'text-blue-600',
      'MySQL': 'text-blue-500',
      'Redis': 'text-red-500',
      'GraphQL': 'text-pink-500',
      'REST API': 'text-gray-400',
      'JWT': 'text-purple-500',
      'OAuth': 'text-blue-600',
      'Docker': 'text-blue-500',
      'AWS': 'text-yellow-600',
      'Google Cloud': 'text-blue-500',
      'Netlify': 'text-green-400',
      'Git': 'text-orange-500',
      'GitHub': 'text-gray-300',
      'GitLab': 'text-orange-500',
      'Bitbucket': 'text-blue-500',
      'npm': 'text-red-500',
      'yarn': 'text-blue-400',
      'Webpack': 'text-blue-600',
      'Babel': 'text-yellow-500',
      'ESLint': 'text-purple-500',
      'Prettier': 'text-pink-400',
      'Jest': 'text-red-600',
      'Cypress': 'text-green-500',
      'Storybook': 'text-pink-500',
      'Material-UI': 'text-blue-500',
      'Ant Design': 'text-blue-600',
      'Bootstrap': 'text-purple-500',
      'Sass': 'text-pink-500',
      'Less': 'text-blue-400',
      'Redux': 'text-purple-600',
      'Zustand': 'text-yellow-500',
      'React Query': 'text-green-400',
      'Axios': 'text-blue-500',
      'Fetch API': 'text-gray-400',
      'Socket.io': 'text-blue-500',
      'WebRTC': 'text-green-500',
      'PWA': 'text-blue-500',
      'Service Workers': 'text-yellow-500',
      'IndexedDB': 'text-green-500',
      'LocalStorage': 'text-blue-400'
    };
    return colorMap[techName] || 'text-gray-400';
  };

  return (
    <div>
      <div className="border-gray-700 border-2 rounded-md p-3 lg:p-4 space-y-2 lg:space-y-3 h-full flex flex-col">
        {/* Auto-scrolling image container */}
        <div 
          ref={imageRef}
          className="w-full h-32 lg:h-40 overflow-hidden rounded-md relative group flex-shrink-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ minHeight: '100%' }}
          />
          {/* Scroll indicator overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              Scroll to explore
            </div>
          </div>
        </div>

        <h1 className="text-lg lg:text-xl font-semibold text-center flex-shrink-0">{project.title}</h1>
        <div className="relative flex-1 flex flex-col">
          <p className={`text-gray-300 text-xs lg:text-sm text-center flex-1 ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {project.description}
          </p>
          {project.description.length > 100 && (
            <button
              onClick={toggleDescription}
              className=" hover:text-blue-300 text-xs focus:outline-none text-center block mx-auto mt-1 flex-shrink-0"
            >
              {isExpanded ? '...show less' : '...read more'}
            </button>
          )}
        </div>
        <div className="flex gap-1.5 lg:gap-2 items-center text-xs flex-wrap justify-center flex-shrink-0">
          {project.technologies.map((tech, index) => {
            const IconComponent = getTechIcon(tech.name);
            const iconColor = getTechColor(tech.name);
            
            return (
              <h4 key={index} className="bg-gray-700 p-1 lg:p-1.5 rounded-md flex items-center gap-1 text-xs">
                <IconComponent className={iconColor} /> {tech.name}
              </h4>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-1.5 lg:gap-2 mt-2 justify-center flex-shrink-0">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <CiGlobe />
            <span className="ml-1">Live Site</span>
          </a>
          <a
            href={project.links.client}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <FaGithub />
            <span className="ml-1">Client</span>
          </a>
          <a
            href={project.links.server}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded inline-flex items-center justify-center"
          >
            <FaGithub />
            <span className="ml-1">Server</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

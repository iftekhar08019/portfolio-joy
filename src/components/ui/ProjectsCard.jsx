import React, { useEffect, useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  const imageRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCodeTooltip, setShowCodeTooltip] = useState(false);
  const [showTechTooltip, setShowTechTooltip] = useState(false);

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

  return (
    <div className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] group h-full flex flex-col">
      {/* Auto-scrolling image container */}
      <div 
        ref={imageRef}
        className="w-full h-40 lg:h-48 overflow-hidden relative group/image flex-shrink-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover/image:scale-105"
          style={{ minHeight: '100%' }}
        />
        {/* Scroll indicator overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-2 left-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white text-xs px-2 py-1 rounded-lg">
            Scroll to explore
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-5 flex-1 flex flex-col">
        {/* Title */}
        <h1 className="text-lg lg:text-xl font-semibold text-center text-white group-hover:text-blue-200 transition-colors duration-300 mb-3">
          {project.title}
        </h1>
        
        {/* Description */}
        <div className="flex-1 mb-4">
          <p className={`text-gray-300 text-sm text-center leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {project.description}
          </p>
          {project.description.length > 120 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 hover:text-blue-300 text-xs focus:outline-none text-center block mx-auto mt-2 transition-colors duration-300"
            >
              {isExpanded ? '...show less' : '...read more'}
            </button>
          )}
        </div>

        {/* Compact Tech Stack - Show only first 6 technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {project.technologies.slice(0, 6).map((tech, index) => {
              const IconComponent = getTechIcon(tech.name);
              
              return (
                <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/20 px-2 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-gray-200 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  <IconComponent className="text-white text-sm" /> 
                  <span className="text-xs">{tech.name}</span>
                </div>
              );
            })}
          </div>
          {project.technologies.length > 6 && (
            <div className="relative">
              <button
                onMouseEnter={() => setShowTechTooltip(true)}
                onMouseLeave={() => setShowTechTooltip(false)}
                className="text-center text-gray-400 text-xs mt-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                +{project.technologies.length - 6} more technologies
              </button>
              
              {/* Tech Stack Tooltip */}
              {showTechTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-[9999] pointer-events-none">
                  <div className="backdrop-blur-lg bg-black/80 border border-white/50 rounded-xl p-3 shadow-2xl shadow-black/50 min-w-48">
                    <div className="text-xs text-white font-medium mb-2 text-center">Remaining Technologies:</div>
                    <div className="flex flex-wrap gap-1.5 max-w-48">
                      {project.technologies.slice(6).map((tech, index) => {
                        const IconComponent = getTechIcon(tech.name);
                        return (
                          <div key={index} className="backdrop-blur-sm bg-white/20 border border-white/50 px-2 py-1 rounded-lg flex items-center gap-1 text-xs text-white">
                            <IconComponent className="text-white text-xs" /> 
                            <span className="text-xs">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-center mt-auto">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-white/5 border border-white/20 text-white text-xs py-2 px-3 rounded-lg inline-flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group/btn flex-1"
          >
            <CiGlobe className="group-hover/btn:text-blue-200 transition-colors duration-300 mr-1.5" />
            <span className="group-hover/btn:text-blue-200 transition-colors duration-300">Live</span>
          </a>
          
          {/* Code Button with Tooltip */}
          <div className="relative flex-1">
            <button
              onClick={() => setShowCodeTooltip(!showCodeTooltip)}
              className="w-full backdrop-blur-sm bg-white/5 border border-white/20 text-white text-xs py-2 px-3 rounded-lg inline-flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group/btn"
            >
              <FaGithub className="group-hover/btn:text-blue-200 transition-colors duration-300 mr-1.5" />
              <span className="group-hover/btn:text-blue-200 transition-colors duration-300">Code</span>
            </button>
            
            {/* Code Options Tooltip */}
            {showCodeTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-[9999] pointer-events-none">
                <div className="backdrop-blur-lg bg-black/80 border border-white/50 rounded-xl p-3 shadow-2xl shadow-black/50 min-w-32">
                  <div className="text-xs text-white font-medium mb-2 text-center">Code Options:</div>
                  <div className="space-y-2">
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block backdrop-blur-sm bg-white/20 border border-white/50 text-white text-xs py-2 px-3 rounded-lg text-center hover:bg-white/30 hover:border-white/60 transition-all duration-300 pointer-events-auto"
                    >
                      <FaGithub className="inline mr-1.5" />
                      Client Code
                    </a>
                    {project.links.server && (
                      <a
                        href={project.links.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block backdrop-blur-sm bg-white/20 border border-white/50 text-white text-xs py-2 px-3 rounded-lg text-center hover:bg-white/30 hover:border-white/60 transition-all duration-300 pointer-events-auto"
                      >
                        <FaGithub className="inline mr-1.5" />
                        Server Code
                      </a>
                    )}
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

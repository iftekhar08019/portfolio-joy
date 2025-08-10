import React from "react";
import { FaMedium, FaCalendar, FaClock, FaExternalLinkAlt, FaUser } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  // Format the publish date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] group">
      <div className="p-6 lg:p-8">
        {/* Header with Platform and Author */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg backdrop-blur-sm border border-green-500/20">
              <FaMedium className="text-green-400 text-lg" />
            </div>
            <span className="text-green-400 text-sm font-medium">Medium</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <FaUser className="text-blue-400" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors duration-300">
          {blog.title}
        </h2>

        {/* Summary */}
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
          {blog.summary}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-3 mb-8">
          {blog.topic.map((topic, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 text-xs rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Footer with Meta and CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-500/10 rounded-md backdrop-blur-sm border border-blue-500/20">
                <FaCalendar className="text-blue-400 text-sm" />
              </div>
              <span>{formatDate(blog.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-purple-500/10 rounded-md backdrop-blur-sm border border-purple-500/20">
                <FaClock className="text-purple-400 text-sm" />
              </div>
              <span>{blog.readTime}</span>
            </div>
          </div>

          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 backdrop-blur-lg bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 group/btn"
          >
            <span className="group-hover/btn:text-blue-200 transition-colors duration-300">Read Article</span>
            <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

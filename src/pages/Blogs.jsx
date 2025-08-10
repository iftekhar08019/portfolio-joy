import React, { useState, useEffect } from "react";
import { FaMedium, FaExternalLinkAlt } from "react-icons/fa";
import BlogCard from "../components/ui/BlogCard";
import useAxios from "../hooks/useAxios";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading Animation.json";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/blogs');
        setBlogs(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axios]);

  if (loading) {
    return (
      <div className="my-8">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
          My Blog Posts
        </h1>
        <p className="text-gray-400 text-center mt-4 lg:text-lg max-w-3xl mx-auto">
          Sharing my knowledge and experiences in web development, React, and modern JavaScript technologies.
        </p>
        <div className="mt-8 lg:mt-12 flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
          <p className="text-gray-400 mt-4 text-center">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8">
        <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
          My Blog Posts
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
        My Blog Posts
      </h1>
      <p className="text-gray-400 text-center mt-4 lg:text-lg max-w-3xl mx-auto">
        Sharing my knowledge and experiences in web development, React, and modern JavaScript technologies.
      </p>

      <div className="mt-8 lg:mt-12">
        {blogs.length > 0 ? (
          <div className="grid gap-6 lg:gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id.$oid} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
          </div>
        )}

        {/* Coming Soon Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] group">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <FaMedium className="text-white text-3xl group-hover:text-blue-200 transition-colors duration-300" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
              More Articles Coming Soon!
            </h3>
            <p className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
              I'm constantly learning and sharing my knowledge. Follow me on Medium to stay updated with the latest articles on React, JavaScript, and web development best practices.
            </p>
            <a
              href="https://medium.com/@iftekhar08019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 backdrop-blur-lg bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 group/btn"
            >
              <span className="group-hover/btn:text-blue-200 transition-colors duration-300">Follow on Medium</span>
              <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

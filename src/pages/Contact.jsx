import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hvfajut",
        "template_tuy9bmo",
        e.target,
        "0fL7lNMrdA9FRnGAE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contactOptions = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "iftekhar08019@gmail.com",
      link: "mailto:iftekhar08019@gmail.com",
      color: "text-red-400 hover:text-red-300",
      bgColor: "bg-red-500/10 hover:bg-red-500/20"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/iftekhar08019",
      link: "https://github.com/iftekhar08019",
      color: "text-gray-300 hover:text-white",
      bgColor: "bg-gray-700/50 hover:bg-gray-600/50"
    },
    {
      icon: FaLinkedinIn,
      title: "LinkedIn",
      value: "linkedin.com/in/mdiftekharulalam21",
      link: "https://www.linkedin.com/in/mdiftekharulalam21/",
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+49 1786314647",
      link: "https://wa.me/491786314647",
      color: "text-green-400 hover:text-green-300",
      bgColor: "bg-green-500/10 hover:bg-green-500/20"
    }
  ];

  return (
    <div className="my-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading text-center">
        Say hello or send me a message
      </h1>
      <p className="text-gray-400 text-center mt-4 lg:text-lg">
        I'd love to hear from you! Feel free to reach out through any of these channels.
      </p>

      {/* Contact Options */}
      <div className="mt-8 lg:mt-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6 lg:mb-8">
          Contact Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target={option.title !== "Email" ? "_blank" : "_self"}
              rel={option.title !== "Email" ? "noopener noreferrer" : ""}
              className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl p-4 lg:p-6 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4">
                <div className={`${option.color} text-2xl lg:text-3xl`}>
                  <option.icon />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{option.title}</h3>
                  <p className="text-gray-300 text-sm lg:text-base">{option.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 lg:mt-16">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6 lg:mb-8">
          Send Me a Message
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                  placeholder="Type your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full backdrop-blur-lg bg-white/5 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 group"
              >
                <span className="group-hover:text-blue-200 transition-colors duration-300">Send Message</span>
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 backdrop-blur-sm bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                <p className="text-green-400 font-medium">
                  ✅ Your message has been submitted successfully! I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

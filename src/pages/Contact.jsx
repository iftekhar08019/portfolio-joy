import React, { useState } from "react";
import emailjs from "emailjs-com";

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

  return (
    <div className="my-8">
      <h1 className="lg:text-4xl text-2xl font-semibold hero-heading">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="mt-6 lg:mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full border-2 border-gray-400 hover:bg-gray-700 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="alert mt-4 text-center text-green-500">
          <p>Your message has been submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

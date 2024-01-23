import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitSuccess(true);

        // Clear the success message after 2 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitSuccess(false);
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-16" id="contact">
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
        <div className="  bg-white p-8 rounded-lg shadow-md w-full">
          {submitSuccess && (
            <div className="text-2xl font-bold mb-6 text-green-600">
              Thank you! for your apprication.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800">
                Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-800">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                name="subject"
                className="w-full p-2 border rounded-md"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                name="message"
                rows="4"
                className="w-full p-2 border rounded-md"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              {submitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Footer Section with Social Icons */}
        <div className="mt-8 text-center h-full">
          <p className="text-slate-300">Connect with me on social media</p>
          <div className="flex justify-center mt-4">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/durga-gairhe"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-slate-300 hover:text-blue-500 transition duration-300"
            >
              LinkedIn
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/dpgaire"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-slate-300 hover:text-blue-400 transition duration-300"
            >
              GitHub
            </a>

            {/* Twitter Link */}
            <a
              href="https://www.instagram.com/dpgaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-slate-300 hover:text-blue-400 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

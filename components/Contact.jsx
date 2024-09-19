import React, { useState } from "react";
import { SubmitButton } from "./ui/Button";
import SocialLinks from "./SocialLinks";
import PageHeader from "./PageHeader";
import { HEADER_CONTENT } from "@/data";

const { content, email, footerDescription } = HEADER_CONTENT;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [error, setError] = useState(null);

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
          "API-key": process.env.DATA_API_KEY,
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
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitSuccess(false);
        setError("Something went wrong. Please try again.");
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitSuccess(false);
      setError("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-4 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <PageHeader
        title="Contact me"
        content={content}
        email={email}
        footerDescription={footerDescription}
      >
        <SocialLinks />
      </PageHeader>
      <div className=" font-poppins  bg-white max-w-[992px] mx-auto mb-4 p-2 lg:p-4 rounded-lg shadow-md w-full">
        <h2 className="text-3xl font-bold text-[#4F4F4F] text-center my-2">
          Get In Touch
        </h2>
        {submitSuccess && (
          <div className="text-2xl font-bold mb-6 text-green-600">
            Thank you! for your apprication.
          </div>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="text-left p-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 ">
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
          <SubmitButton text="Send Now" submitting={submitting} />
        </form>
      </div>
    </div>
  );
};

export default Contact;

// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black py-16" id="contact">
      <section className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
        {/* Contact Form */}
        <div className="  bg-white p-8 rounded-lg shadow-md w-full">
          {/* <h2 className="text-2xl font-bold mb-6">Contact Me</h2> */}
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" placeholder="Your Name" required />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" placeholder="Your Email" required />
            </div>

             {/* Message Field */}
             <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-800">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full p-2 border rounded-md" placeholder="Subject" required />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded-md" placeholder="Your Message" required></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </div>

        {/* Footer Section with Social Icons */}
        <div className="mt-8 text-center h-full">
          <p className="text-slate-300">Connect with me on social media</p>
          <div className="flex justify-center mt-4">
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="mx-4 text-slate-300 hover:text-blue-500 transition duration-300">
              LinkedIn
            </a>

            {/* GitHub Link */}
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="mx-4 text-slate-300 hover:text-blue-400 transition duration-300">
              GitHub
            </a>

            {/* Twitter Link */}
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="mx-4 text-slate-300 hover:text-blue-400 transition duration-300">
              Twitter
            </a>
          </div>
          </div>
      </section>
    </section>
  );
};

export default Contact;

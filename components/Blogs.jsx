import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LinkButton } from "./ui/Button";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div id="blogs" className="main_section">
      <section className="container mx-auto mt-8">
        <h2 className="main__heading">Blogs</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg p-2 lg:p-4 shadow-md">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />

              {/* Blog Title and Description */}
              <h2 className="text-lg font-semibold mb-2 font-sans">{blog.title}</h2>
              <p className="text-gray-600 mb-4 font-serif">{blog.description}</p>
              {/* <div className="flex justify-center h-auto w-full">
              <LinkButton href={blog.githubUrl} content="View Details"/>

              </div> */}
              {/* Icons for Viewing Project and GitHub Repository */}
              <div className="flex justify-between">
                <Link href={blog.projectUrl}>
                  <span className="text-black hover:text-blue-700">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Link href={blog.githubUrl}>
                  <span
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaGithub className="text-xl cursor-pointer" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

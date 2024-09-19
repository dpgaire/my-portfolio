import React from "react";
import PageHeader from "./PageHeader";
import { HEADER_CONTENT } from "@/data";
import SocialLinks from "./SocialLinks";
import { SubmitButton } from "./ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const { content, email, footerDescription } = HEADER_CONTENT;

const Blog = ({ blogs }) => {
  return (
    <div className="py-12 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <PageHeader
        title="Blogs"
        content={content}
        email={email}
        footerDescription={footerDescription}
      >
        <SocialLinks />
        <div className="inline-flex space-x-2 mx-auto py-2">
          <SubmitButton text="Hire me" />
        </div>
      </PageHeader>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 text-left">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg p-2 lg:p-4 shadow-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4 ">{blog.description}</p>
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
    </div>
  );
};

export default Blog;

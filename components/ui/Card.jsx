import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({ image, title, description, githubUrl, projectUrl }) => {
  return (
    <div className="bg-white rounded-lg p-2 lg:p-4 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 ">{description}</p>
      <div className="flex justify-between">
        <Link href={projectUrl}>
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
        <Link href={githubUrl}>
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
  );
};

export default Card;

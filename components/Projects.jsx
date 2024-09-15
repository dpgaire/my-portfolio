import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SubmitButton } from "./ui/Button";

const Projects = ({ projects }) => {
  return (
    <div className="py-12 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="mt-2 flex flex-col gap-2 ">
        <p>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to{" "}
          <code className="text-blue-800 cursor-pointer underline">
            gairhedurga13@gmail.com
          </code>
        </p>
        <p>Want to get connected? Follow me on the social channels below.</p>
        <div className="inline-flex space-x-2 mx-auto py-2">
          <SubmitButton text="Hire me" />
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 text-left">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-2 lg:p-4 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 ">{project.description}</p>
            <div className="flex justify-between">
              <Link href={project.projectUrl}>
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
              <Link href={project.githubUrl}>
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

export default Projects;

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="main_section">
      <section className="container mx-auto mt-8">
        <h2 className="main__heading">Projects</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-2 lg:p-4 shadow-md">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />

              {/* Project Title and Description */}
              <h2 className="text-lg font-semibold mb-2 font-sans">{project.title}</h2>
              <p className="text-gray-600 mb-4 font-serif">{project.description}</p>

              {/* Icons for Viewing Project and GitHub Repository */}
              <div className="flex justify-between">
                {/* View Project Icon */}
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

                {/* GitHub Icon */}
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
      </section>
    </div>
  );
};

export default Projects;

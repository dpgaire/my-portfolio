import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  projectUrl,
  githubUrl,
}) {
  return (
    <div className="max-w-sm  text-left rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Project Image"
      />
      <div className="mt-2 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

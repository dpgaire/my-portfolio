
import React from 'react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce website built with React, Node.js, and MongoDB.',
      image: '/images/background.png',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
  ];

  return (
    <div id="projects" className="bg-black pt-16 pb-8">
    <section className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-md" />

            {/* Project Title and Description */}
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Icons for Viewing Project and GitHub Repository */}
            <div className="flex justify-between">
              {/* View Project Icon */}
              <Link href={project.projectUrl}>
                <span  className="text-blue-500 hover:text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>

              {/* GitHub Icon */}
              <Link href={project.githubUrl}>
                <span target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-18C5.686 1 2 4.686 2 9c0 3.766 2.685 6.918 6.234 7.729.47.086.64-.204.64-.454 0-.224-.008-.824-.012-1.616-2.572.47-3.116-1.238-3.116-1.238-.42-1.072-1.028-1.358-1.028-1.358-.84-.573.064-.563.064-.563.932.065 1.424.96 1.424.96.828 1.42 2.176 1.01 2.708.772.084-.596.324-1.01.588-1.242-2.06-.234-4.22-1.03-4.22-4.582 0-1.01.36-1.834.96-2.48-.1-.236-.416-1.176.092-2.448 0 0 .776-.248 2.544.95a8.79 8.79 0 012.264-.304 8.8 8.8 0 012.264.304c1.768-1.198 2.544-.95 2.544-.95.508 1.272.192 2.212.092 2.448.6.646.96 1.47.96 2.48 0 3.557-2.162 4.344-4.228 4.572.332.286.632.846.632 1.704 0 1.23-.012 2.222-.012 2.524 0 .25.168.543.648.452C17.315 15.918 20 12.766 20 9c0-4.314-3.686-8-8-8z"></path>
                  </svg>
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

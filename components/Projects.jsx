// components/Projects.js
const Projects = () => {
    // Replace this array with your real data
    const projects = [
      { name: "Project 1", description: "Project description.", technologies: ["React", "Node.js"], link: "#" },
      { name: "Project 2", description: "Project description.", technologies: ["Next.js", "Tailwind CSS"], link: "#" },
    ];
  
    return (
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-200 px-2 py-1 text-sm text-gray-600 rounded mr-2">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  
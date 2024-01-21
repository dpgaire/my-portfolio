// components/Experiences.js
const Experiences = () => {
    // Replace this array with your real data
    const experiences = [
      { title: "Job Title 1", company: "Company 1", duration: "Jan 2022 - Present", description: "Responsibilities and achievements." },
      { title: "Job Title 2", company: "Company 2", duration: "Jun 2020 - Dec 2021", description: "Responsibilities and achievements." },
    ];
  
    return (
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <p className="text-gray-800">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Experiences;
  
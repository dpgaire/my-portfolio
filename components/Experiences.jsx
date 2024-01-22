// components/Experience.js
import React from 'react';

const Experience = () => {
  // Sample data for two work experiences
  const experiences = [
    {
      company: 'Tech Innovators',
      jobTitle: 'Senior Software Engineer',
      duration: 'Jan 2021 - Present',
      responsibilities: [
        'Lead a team of developers in building innovative software solutions.',
        'Collaborated with cross-functional teams to deliver high-quality products.',
        'Implemented new features and optimized existing code for improved performance.',
        'Conducted code reviews to ensure code quality and adherence to best practices.',
        'Provided technical guidance and mentorship to junior team members.',
      ],
    },
    {
      company: 'CodeCrafters Inc.',
      jobTitle: 'Software Engineer',
      duration: 'Jun 2018 - Dec 2020',
      responsibilities: [
        'Contributed to the development of cutting-edge web applications.',
        'Collaborated with UX/UI designers to implement intuitive user interfaces.',
        'Performed system testing and debugging of applications.',
        'Participated in Agile development processes and sprint planning.',
        'Maintained and updated documentation for code and processes.',
      ],
    },
    {
      company: 'Tech Innovators',
      jobTitle: 'Senior Software Engineer',
      duration: 'Jan 2021 - Present',
      responsibilities: [
        'Lead a team of developers in building innovative software solutions.',
        'Collaborated with cross-functional teams to deliver high-quality products.',
        'Implemented new features and optimized existing code for improved performance.',
        'Conducted code reviews to ensure code quality and adherence to best practices.',
        'Provided technical guidance and mentorship to junior team members.',
      ],
    },
  ];

  return (
    <div className="bg-black pt-16 " id="experience">
    <section className="container mx-auto mt-8 ">
    <h2 className="text-2xl font-bold mb-4 text-white">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className={`flex items-center mb-8 bg-slate-100 rounded-lg p-8 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
            {/* Work Experience Details */}
            <div className="text-black p-2">
              <h3 className="text-lg font-semibold mb-2">{experience.jobTitle}</h3>
              <p className="text-gray-600">{experience.company} | {experience.duration}</p>
              <ul className="text-gray-600 list-decimal">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li className='px-1 ' key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Experience;

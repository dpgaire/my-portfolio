// components/Experience.js
import React from 'react';

const Experience = () => {
  // Sample data for two work experiences
  const experiences = [
    {
      company: 'Phoenix Solution Pvt. Ltd',
      jobTitle: 'Junior Front-end Developer(React.js)',
      duration: 'July 2021 -June 2022',
      responsibilities: [
        'Developed responsive web applications using React.js, HTML, and Bootstrap 5',
        'Collaborated closely with UI/UX designers, software developers, and QA resources throughout the systems development life cycle.',
        'Implemented new features and optimized existing code for improved performance.',
        'Designed and developed pages and reusable components.',
        'Gained experience in the complete front-end development process.',
      ],
    },
    {
      company: 'Dibtech Pvt Limited.',
      jobTitle: 'Frontend Developer',
      duration: 'Jun 2022 - Dec 2020',
      responsibilities: [
        'Collaborated with the development team to discuss user interface ideas and applications.',
        'Reviewed application requirements and interface designs.',
        'Implemented highly responsive user interface components using React concepts.',
        'Demonstrated strong communication and troubleshooting skills.',
        'Developed and implemented front-end architecture to support user interface concepts.',
      ],
    },
    {
      company: 'Moru Digital Wallet ',
      jobTitle: 'Senior Front-end Developer (Scrum Master)',
      duration: 'Dec 2022 - Present',
      responsibilities: [
        'Currently serving as a Senior Front-end Developer and Scrum Master.',
        'Responsible for adding features and translating business requirements into technical specifications.',
        'Takes on the role of a scrum master, facilitating agile processes and ensuring smooth project management.',
        'Acts as a bridge between the business team and the development team.',
        'Assigns technical tasks to other developers, providing leadership in implementing solutions',
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
              <ul className="text-gray-600 list-disc">
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

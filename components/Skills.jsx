// components/Skills.js
import React from 'react';

const Skills = () => {
  // Sample skills data
  const skills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'SASS/SCSS',
    'Responsive Design',
    'RESTful APIs',
    'Git/GitHub',
    'Webpack',
    'Redux',
    'SQL',
    'MongoDB',
    'Express.js',
    'GraphQL',
    'Jest/Testing Library',
    'Agile/Scrum',
    'UI/UX Design',
    'TypeScript',
    'Next.js',
  ];
  

  return (
    <div className="bg-gray-600 pt-8 h-[300px]">
    <section className="container mx-auto mt-8 ">
      <h2 className="text-2xl text-white font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full text-center cursor-pointer hover:bg-blue-700 transition duration-300">
            {skill}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skills;

// components/Experience.js
import React, { useEffect, useState } from 'react';

const Experience = () => {
 
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/api/experiences') 
      .then((response) => response.json())
      .then((data) => setExperiences(data.experiences))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

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

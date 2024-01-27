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
    <div className="main_section" id="experiences">
    <section className="container mx-auto mt-8 ">
    <h2 className="main__heading">Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className={`flex items-center mb-8 bg-[#7844E9] rounded-lg px-6 py-2 lg:px-8 lg:py-4 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
            {/* Work Experience Details */}
            <div className="text-white lg:p-2 text-left">
              <h2 className="lg:text-2xl font-bold text-lg text-white mb-2">{experience.jobTitle}</h2>
              <h3 className="text-white font-bold text-sm lg:text-lg font-serif">{experience.company} | {experience.duration}</h3>
              <ul className="text-white mt-2 lg:ml-8 font-serif list-disc">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li className='px-1' key={idx}>{responsibility}</li>
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

import React, { useEffect, useState } from 'react';

const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills') 
      .then((response) => response.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);
  

  return (
    <div id="skills" className="bg-black pt-16 pb-4">
    <section className="container mx-auto mt-8 ">
      <h2 className="text-2xl text-white font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

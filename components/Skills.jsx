
const Skills = ({ skills }) => {
  return (
    <div id="skills" className="main_section h-screen font-serif">
    <section className="container mx-auto mt-8 ">
      <h2 className="main__heading">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#7844E9] text-white px-4 py-2 rounded-full text-center cursor-pointer hover:bg-[#7844e9dd] transition duration-300">
            {skill}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skills;

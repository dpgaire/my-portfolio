// components/Skills.js
const Skills = () => {
    // Replace this array with your real data
    const skills = {
      "Programming Languages": ["JavaScript", "HTML", "CSS"],
      "Web Technologies": ["React", "Node.js", "Next.js"],
      "Tools": ["Git", "VSCode"],
    };
  
    return (
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <ul className="list-disc list-inside">
              {items.map((skill, index) => (
                <li key={index} className="text-gray-800">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  };
  
  export default Skills;
  
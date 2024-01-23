
const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce website built with React, Node.js, and MongoDB.',
      image: '/images/background.png',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with user authentication, built using MERN stack.',
      image: '/images/background.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project2',
    },
  ];
  
  export default (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json({ projects });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  
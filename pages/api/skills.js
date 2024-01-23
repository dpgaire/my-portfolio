
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
    'TypeScript',
    'Next.js',
  ];
  
  export default (req, res) => {
    if (req.method === 'GET') {
      // Return the skills data in the desired format
      res.status(200).json({ skills });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  
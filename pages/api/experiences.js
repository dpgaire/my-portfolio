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
  
  export default (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json({ experiences });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  
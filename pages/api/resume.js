const resumeData = [
  {
    company: "Moru Digital Wallet ",
    title: "Senior Front-end Developer (Scrum Master)",
    duration: "Dec 2022 - Present",
    responsibilities: [
      "Currently serving as a Senior Front-end Developer and Scrum Master.",
      "Responsible for adding features and translating business requirements into technical specifications.",
      "Leads the front-end team, ensuring that best practices are followed.",
      "Takes on the role of scrum master, facilitating agile processes and ensuring smooth project management.",
      "Acts as a bridge between the business team and the development team.",
      "Assigns technical tasks to other developers, providing leadership in implementing solutions.",
      "Streamlined the development process by introducing code reviews and setting up CI/CD pipelines.",
      "Ensures timely delivery of key product features, coordinating with cross-functional teams.",
    ],
  },
  {
    company: "Dibtech Pvt Limited.",
    title: "Frontend Developer",
    duration: "Jun 2022 - Dec 2022",
    responsibilities: [
      "Collaborated with the development team to discuss user interface ideas and applications.",
      "Reviewed application requirements and interface designs.",
      "Implemented highly responsive user interface components using React concepts.",
      "Demonstrated strong communication and troubleshooting skills.",
      "Developed and implemented front-end architecture to support user interface concepts.",
      "Optimized application performance, reducing load times by 25%.",
      "Worked with RESTful APIs and integrated them seamlessly into front-end components.",
      "Participated in code reviews and pair programming sessions to enhance code quality.",
    ],
  },

  {
    company: "Phoenix Solution Pvt. Ltd",
    title: "Junior Front-end Developer",
    duration: "July 2021 -June 2022",
    responsibilities: [
      "Developed responsive web applications using React.js, HTML, and Bootstrap 5.",
      "Collaborated closely with UI/UX designers, software developers, and QA resources.",
      "Implemented new features and optimized existing code for improved performance.",
      "Designed and developed pages and reusable components.",
      "Gained experience in the complete front-end development process.",
      "Learned the importance of accessibility and performance optimization in web development.",
      "Participated in daily standups and sprint planning sessions.",
      "Refined skills in JavaScript, CSS, and front-end development tools.",
    ],
  },
];

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ resumeData });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

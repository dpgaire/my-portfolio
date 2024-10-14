const projects = [
  {
    title: "Code Log",
    description:
      "A React app for logging and managing code snippets with syntax highlighting, allowing users to easily add, edit, and delete entries",
    image: "/images/code-log.jpg",
    projectUrl: "https://code-log-dp.vercel.app/",
    githubUrl: "https://github.com/dpgaire/code-log",
  },
  {
    title: "Social Media App",
    description:
      "A social platform for connecting users, sharing media, and building communities with real-time chat.",
    image: "/images/background.png",
    projectUrl: "https://example.com/socialmedia",
    githubUrl: "https://github.com/example/socialmedia",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity application designed to help users track tasks, set reminders, and boost efficiency.",
    image: "/images/background.png",
    projectUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/example/taskmanager",
  },
  {
    title: "Fitness Tracker",
    description:
      "An app to monitor workouts, track progress, and suggest personalized training routines based on data.",
    image: "/images/background.png",
    projectUrl: "https://example.com/fitnesstracker",
    githubUrl: "https://github.com/example/fitnesstracker",
  },
  {
    title: "Recipe Finder",
    description:
      "A culinary platform allowing users to find recipes based on ingredients, diet, and cuisine preferences.",
    image: "/images/background.png",
    projectUrl: "https://example.com/recipefinder",
    githubUrl: "https://github.com/example/recipefinder",
  },
];

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ projects });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

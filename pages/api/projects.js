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
    title: "Code Vulnerability Scanner",
    description:
      "The Vulnerability Scanner for Visual Studio Code detects security threats in JavaScript code, enhancing your codebase's overall safety and integrity.",
    image: "/images/vulnerability-scanner.jpg",
    projectUrl:
      "https://marketplace.visualstudio.com/items?itemName=DurgaGairhe.vulnerability-scanner",
    githubUrl: "https://github.com/dpgaire/vulnerability-scanner",
  },
];

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ projects });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

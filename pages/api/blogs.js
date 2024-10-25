const blogData = [
  {
    id: 1,
    title: "How the Web Works for Developers",
    date: new Date("2024-10-24"),
    description:
      "This blog provides a clear and simple explanation of how the web works for developers, breaking down the main components and how they interact to create functional websites. Here’s a closer look at frontend, backend, and database with real-life examples.",
    metadescription: `This is for short description`,
    image: "/images/background.png",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    date: new Date("2020-02-10"),
    description:
      "Vivamus at augue eget arcu dictum varius duis at consectetur lorem.",
    image: "/images/background.png",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    date: new Date("2020-03-15"),
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    image: "/images/background.png",
  },
  {
    id: 4,
    title: "JavaScript ES6 Features",
    date: new Date("2020-04-12"),
    description:
      "Amet est placerat in egestas erat imperdiet sed euismod nisi porta.",
    image: "/images/background.png",
  },
];

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ blogData });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

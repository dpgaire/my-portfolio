const myInfo = {
  title: "Hi, I'm Durga Gairhe",
  degination: "Software Engineer",
  description:
    "High level experience in web design and development knowledge with producing quality work.",
  profile_image: "/images/durga.png",
};

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ myInfo });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

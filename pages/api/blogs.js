import { blogData } from "@/data/blogs";

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ blogData });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

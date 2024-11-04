import { blogData } from "@/data/blogs";

export default (req, res) => {
  if (req.method === "GET") {
    const { blogId } = req.query;

    if (blogId) {
      const blog = blogData.find((b) => b.id === parseInt(blogId));
      if (blog) {
        res.status(200).json(blog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    } else {
      res.status(200).json({ blogData });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

import BlogDetail from "@/components/BlogDetails";
import Head from "next/head";

const blog = {
  title: "Understanding Microinteractions",
  author: "Durga Gairhe",
  authorImage: "/images/durga.png", // Author image
  date: new Date("2020-01-20"),
  category: "User Experience",
  image: "/images/background.png",
  description: `<h1>The Web: A Bridge Between Users and Information</h1><p>The web functions as a bridge between users and the information they need. For developers, building websites and applications involves three core parts: <strong>Frontend (Client-Side)</strong>, <strong>Backend (Server-Side)</strong>, and <strong>Database</strong>. Each part plays a unique role, and together they create a seamless web experience. Let's look at each part with examples.</p><h2>1. <strong>Frontend (Client-Side)</strong></h2><p>The frontend is what users see and interact with on a website. It includes the visual parts like text, images, buttons, forms, and any content that users can click or type into. Think of it as the “face” of the website.</p><ul><li><strong>Example</strong>: Imagine a social media profile page. The frontend includes the profile picture, the 'Like' button, comments, and anything users see and use. Developers build this layer using HTML (for structure), CSS (for design), and JavaScript (for interactions like clicking buttons or updating content without refreshing the page).</li></ul><h2>2. <strong>Backend (Server-Side)</strong></h2><p>The backend is like the 'brain' behind the scenes. When users take actions on the frontend, such as clicking 'submit' on a form, the backend receives these actions, processes them, and decides what to do next.</p><ul><li><strong>Example</strong>: On a social media site, when a user clicks 'Post' to share a new status, the backend takes this information and saves it. It may also notify the user’s followers. Programming languages like Python, Ruby, and Node.js are popular choices for backend development. The backend handles things like user login, checking permissions, and other business logic.</li></ul><h2>3. <strong>Database</strong></h2><p>The database is where all the information is stored. Think of it as a digital filing cabinet where everything the user shares is saved and organized. When the backend needs to retrieve or save information, it talks to the database.</p><ul><li><strong>Example</strong>: When users log in, the backend checks the database to see if the user’s email and password match. Similarly, when a user views their profile, the backend retrieves their posts, pictures, and comments from the database and sends them to the frontend for display. Common databases include MySQL, PostgreSQL, and MongoDB.</li></ul><h2><strong>How it All Works Together</strong></h2><p>Here’s how these three parts connect:</p><ol><li><strong>User Action (Request)</strong>: A user enters a URL (like 'www.example.com') or clicks a button. This action sends a request to the server (backend).</li><li><strong>Processing</strong>: The backend receives this request, processes it, and, if needed, retrieves data from the database.</li><li><strong>Response</strong>: Once the backend gathers the necessary information, it sends the response back to the frontend, where it’s displayed for the user.</li></ol><p><strong>Example</strong>: Imagine an online store. A user clicks 'Add to Cart' on a product. This action:</p><ul><li>Sends a request to the backend.</li><li>The backend then updates the user’s cart in the database.</li><li>The updated cart information is sent back to the frontend and displayed in real-time for the user.</li></ul><p>This process happens within seconds, making the web feel fast and responsive. For developers, understanding how these parts work together helps create websites that are user-friendly, efficient, and scalable.</p>`,
};

export default function Blogs() {
  //   console.log("blogData", blogData);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <BlogDetail blog={blog} />
    </>
  );
}

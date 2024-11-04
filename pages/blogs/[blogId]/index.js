// [blogId]
import BlogDetail from "@/components/BlogDetails";
import Head from "next/head";

export default function Blogs({ blog }) {
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

export async function getServerSideProps(context) {
  const { blogId } = context.params; // Get the blogId from the URL parameters

  // Replace this with your actual API endpoint
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blogId}`
  );

  if (!res.ok) {
    // Handle error (e.g., return a 404 page)
    return {
      notFound: true,
    };
  }

  const blog = await res.json(); // Parse the JSON response

  return {
    props: {
      blog, // Pass the fetched blog data to the component
    },
  };
}

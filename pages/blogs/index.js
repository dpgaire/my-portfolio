import React from "react";
import BlogComponent from "../../components/Blog";
import Head from "next/head";

export default function Blogs({ blogData }) {
  console.log("blogData", blogData);
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <BlogComponent blogs={blogData} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs"); // Replace with your API endpoint
  const { blogData } = await res.json();
  return {
    props: {
      blogData,
    },
  };
}

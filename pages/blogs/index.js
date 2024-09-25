import React from "react";
import BlogComponent from "../../components/Blog";
import Head from "next/head";

export default function Blogs({ blogData }) {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);

  const { blogData } = await res.json();
  return {
    props: {
      blogData,
    },
  };
}

import React from "react";
import ProjectsComponent from "../components/Projects";
import Head from "next/head";

export default function Blogs({ projects }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <ProjectsComponent projects={projects} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/projects"); // Replace with your API endpoint
  const { projects } = await res.json();
  return {
    props: {
      projects,
    },
  };
}
import Head from "next/head";
import ProjectsComponent from "../components/Projects";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <ProjectsComponent projects={projects} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const { projects } = await res.json();
  return {
    props: {
      projects,
    },
  };
}

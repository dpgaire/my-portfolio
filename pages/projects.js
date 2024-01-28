import Head from "next/head";
import ProjectsComponent from "../components/Projects";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content={
            "Lost's of projects"
          }
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <section className="page_section">
        <ProjectsComponent projects={projects}/>
      </section>
    </>
  );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/projects'); // Replace with your API endpoint
    const { projects } = await res.json();
    return {
      props: {
        projects,
      },
    };
  }
  

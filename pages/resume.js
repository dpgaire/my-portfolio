import Head from "next/head";
import ResumeComponent from "@/components/Resume";

export default function Resume({ projects }) {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content={
            "Lost's of projects"
          }
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
        <ResumeComponent />
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
  

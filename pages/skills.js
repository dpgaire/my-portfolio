import Head from "next/head";
import SkillsComponent from "../components/Skills";

export default function Skills({ skills }) {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta
          name="description"
          content={
            "Lost's of skills"
          }
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <div className="page_section">
        <SkillsComponent skills={skills}/>
      </div>
    </>
  );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/skills'); // Replace with your API endpoint
    const { skills } = await res.json();
  
    return {
      props: {
        skills,
      },
    };
  }
  

import Head from "next/head";
import ResumeComponent from "@/components/Resume";

export default function Resume({ resumeData }) {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content={"Lost's of projects"} />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <ResumeComponent resumeData={resumeData} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resume`);
  const { resumeData } = await res.json();
  return {
    props: {
      resumeData,
    },
  };
}

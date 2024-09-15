import Head from "next/head";
import Introduction from "@/components/Introduction";

export default function Home({ myInfo }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content={"Excellent attitude to learn new things"}
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <section className="flex-center min-h-screen font-serif  bg-cover bg-intro-back">
        <Introduction myInfo={myInfo} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/intoduction"); // Replace with your API endpoint
  const { myInfo } = await res.json();

  return {
    props: {
      myInfo,
    },
  };
}

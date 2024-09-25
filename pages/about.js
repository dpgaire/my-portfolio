import Head from "next/head";
import Introduction from "@/components/Introduction";

export default function About({ myInfo }) {
  return (
    <>
      <Head>
        <title>About Me</title>
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/intoduction`
  );

  const { myInfo } = await res.json();

  return {
    props: {
      myInfo,
    },
  };
}

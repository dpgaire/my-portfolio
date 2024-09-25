import Experiences from "../components/Experiences";

import Head from "next/head";

export default function Experience({ experiences }) {
  return (
    <>
      <Head>
        <title>Experiences</title>
        <meta
          name="description"
          content={"Excellent attitude to learn new things"}
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <section className="page_section">
        <Experiences experiences={experiences} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`
  );

  const { experiences } = await res.json();
  return {
    props: {
      experiences,
    },
  };
}

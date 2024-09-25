import Head from "next/head";
import ContactComponent from "../components/Contact";


export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content={
            "Contact Me Here"
          }
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
        <ContactComponent/>
    </>
  );
}


  

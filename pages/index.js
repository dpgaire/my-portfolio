import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Chat from "@/components/Chat";
import Head from "next/head";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Durga Gairhe</title>
        <meta
          name="description"
          content={
            "High level experience in web design and development knowledge with producing quality work."
          }
        />
        <meta property="og:title" content={"Hi, I'm Durga Gairhe"} />
      </Head>
      <div className="relative font-sans">
        {/* <Chat/> */}
        <Navbar />
        <Introduction />
        <Experiences />
        <Skills />
        <Projects />
        <Blogs/>
        <Contact />
      </div>
    </>
  );
}

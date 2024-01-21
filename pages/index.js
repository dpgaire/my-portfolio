import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
        <Introduction />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
    </>
  );
}

import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="relative font-sans">
      {/* <Chat/> */}
      <Navbar />
      <Introduction />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

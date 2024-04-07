import { FaLinkedin } from "react-icons/fa6";
import {
  FaGithub,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaFileCode,
} from "react-icons/fa";
import { MdOutlineWeb, MdContactMail } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";

const NAV_LINKS_HEAD = [
  {
    title: "About",
    icon: <FaUser />,
  },
  {
    title: "Experiences",
    icon: <FaLaptopCode />,
  },
  {
    title: "Skills",
    icon: <FaTools />,
  },
  {
    title: "Projects",
    icon: <MdOutlineWeb />,
  },
  {
    title: "Contact",
    icon: <MdContactMail />,
  },
];

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
      <div className="min-h-screen flex font-poppins">
        <header className="w-64 fixed h-full bg-primary text-primaryText">
          {/* Intro */}
          <div className="text-center text-primaryText ">
            <h1 className="text-3xl font-bold  pt-4 ">
              Durga Gairhe
            </h1>
            <div className="flex flex-col py-6 px-4">
              <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto mb-4">
                <img
                  src={"/images/profile-pic.png"}
                  alt="Profile"
                  className="w-full p-2 h-full rounded-full mx-auto "
                />
              </div>
              <span className="text-sm font-medium mb-3">
                Hi, my name is Durga Gairhe and I'm a senior software engineer.
                Welcome to my personal website!
              </span>
              <div className="inline-flex space-x-2 mx-auto py-2">
                <Link
                  href="https://www.linkedin.com/in/durga-gairhe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl cursor-pointer bg-transparent  border-none" />
                </Link>
                <Link
                  href="https://github.com/dpgaire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl cursor-pointer bg-transparent " />
                </Link>
              </div>
              <div className="flex flex-start flex-col gap-2 my-4 mx-4">
                {NAV_LINKS_HEAD.map((section, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center cursor-pointer space-x-2 text-primaryText hover:text-black transition-all ease-out duration-400"
                  >
                    {section.icon}
                    <Link
                      key={section}
                      href={`/${section.title.toLowerCase()}`}
                      className=" font-bold py-2"
                    >
                      {section.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="font-poppins flex-1 min-w-0 pl-72  overflow-auto bg-[#FAFAFA] px-2">
          <div className="py-12 text-[#4F4F4F] text-center max-w-[820px] mx-auto">
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="mt-2 flex flex-col gap-2 ">
              <p>
                Interested in hiring me for your project or just want to say hi?
                You can fill in the contact form below or send me an email to <code className="text-blue-800 cursor-pointer underline">gairhedurga13@gmail.com</code>
              </p>
              <p>Want to get connected? Follow me on the social channels below.</p>
              <div className="inline-flex space-x-2 mx-auto py-2">
                <Link
                  href="https://www.linkedin.com/in/durga-gairhe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl cursor-pointer bg-transparent  border-none" />
                </Link>
                <Link
                  href="https://github.com/dpgaire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl cursor-pointer bg-transparent " />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}



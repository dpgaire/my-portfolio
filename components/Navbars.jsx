import Link from "next/link";
import {
  FaGithub,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaFileCode,
} from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdOutlineWeb, MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/router";

const Navbars = () => {
  const router = useRouter();
  return (
    <header className="w-64 fixed h-full font-poppins bg-secondaryText text-primaryText">
      {/* Intro */}
      <div className="text-center text-primaryText ">
        <h1 className="text-3xl font-bold  pt-4 ">Durga Gairhe</h1>
        <div className="flex flex-col py-6 px-4">
          <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto mb-4">
            <img
              src={"/images/durga.png"}
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
              <FaLinkedin className="text-xl cursor-pointer bg-transparent border-none hover:scale-125 transition ease-in-out delay-100" />
            </Link>
            <Link
              href="https://github.com/dpgaire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl cursor-pointer bg-transparent hover:scale-125 transition ease-in-out delay-100" />
            </Link>
          </div>
          <div className="flex flex-start flex-col gap-2 mt-4 pl-8">
            {NAV_LINKS_HEAD.map((section, index) => (
              <div
                key={index}
                className={`nav_bar_section mt-1 border border-transparent px-2 ${
                  router.pathname === `${section.path}`
                    ? "active"
                    : "hover:border hover:bg-primary hover:text-white"
                }`}
              >
                {section.icon}
                <Link
                  key={section}
                  href={`${section.path}`}
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
  );
};

export default Navbars;

const NAV_LINKS_HEAD = [
  {
    title: "About",
    path: "/",
    icon: <FaUser />,
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <FaFileCode />,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <BsLayoutTextSidebar />,
  },
  // {
  //   title: "Skills",
  //   icon: <FaTools />,
  // },
  {
    title: "Projects",
    path: "/projects",
    icon: <MdOutlineWeb />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdContactMail />,
  },
];

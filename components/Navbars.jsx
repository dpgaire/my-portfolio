import Link from "next/link";
import {
  FaGithub,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaFileCode,
} from "react-icons/fa";
import { MdOutlineWeb, MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/router";


const Navbars = () => {
const router = useRouter()
  return (
    <header className="w-64 fixed h-full font-poppins bg-secondaryText text-primaryText">
      {/* Intro */}
      <div className="text-center text-primaryText ">
        <h1 className="text-3xl font-bold  pt-4 ">Durga Gairhe</h1>
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
          <div className="flex flex-start flex-col gap-2 mt-4 pl-8">
            {NAV_LINKS_HEAD.map((section, index) => (
              <div
                key={index}
                className={`nav_bar_section mt-1 ${router.pathname === `/${section.title.toLowerCase()}` ? 'active' : ''}` }
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
  );
};

export default Navbars;

const NAV_LINKS_HEAD = [
    {
      title: "About",
      icon: <FaUser />,
    },
    {
      title: "Resume",
      icon: <FaFileCode />,
    },
    // {
    //   title: "Experiences",
    //   icon: <FaLaptopCode />,
    // },
    // {
    //   title: "Skills",
    //   icon: <FaTools />,
    // },
    {
      title: "Projects",
      icon: <MdOutlineWeb />,
    },
    {
      title: "Contact",
      icon: <MdContactMail />,
    },
  ];

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

const NAV_LINKS = [
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

const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/durga-gairhe",
    icon: FaLinkedin,
  },
  {
    url: "https://github.com/dpgaire",
    icon: FaGithub,
  },
];

const HEADER_CONTENT = {
  content: `Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to`,
  email: "gairhedurga13@gmail.com",
  footerDescription:
    "Want to get connected? Follow me on the social channels below.",
};

export { NAV_LINKS, SOCIAL_LINKS, HEADER_CONTENT };

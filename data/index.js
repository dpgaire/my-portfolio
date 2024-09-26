import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaPhone,
  FaGraduationCap,
  FaSadCry,
  FaTools,
  FaLaptopCode,
  FaFileCode,
  FaUser,
} from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdOutlineWeb, MdContactMail } from "react-icons/md";

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

// Configuration for the form fields
const formConfig = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your Name",
    fieldType: "input",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Your Email",
    fieldType: "input",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject",
    fieldType: "input",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your Message",
    type: "text",
    fieldType: "textarea",
    required: true,
  },
];

export {
  NAV_LINKS,
  SOCIAL_LINKS,
  HEADER_CONTENT,
  formConfig,
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaPhone,
  FaGraduationCap,
  FaSadCry,
  FaTools,
  FaLaptopCode,
  FaFileCode,
  MdOutlineWeb,
  MdContactMail,
  BsLayoutTextSidebar,
  ImLocation,
  AiFillMail,
  GiHamburgerMenu,
  MdOutlineClose,
};

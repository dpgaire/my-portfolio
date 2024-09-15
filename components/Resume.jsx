import React from "react";
import { SubmitButton } from "./ui/Button";
import { FaPhone, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="py-12 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Online Resume</h1>
      <div className="mt-2 flex flex-col gap-2 ">
        <div className="inline-flex space-x-2 mx-auto py-2">
          <SubmitButton text="Download PDF Version" />
        </div>
      </div>
      <div className="h-auto bg-white shadow-lg mt-4 text-center flex flex-col gap-3">
        <div className="flex justify-between items-center p-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-tersaryText">
              Durga Gairhe
            </h1>
            <p className="text-lg text-secondaryText">
              Senior Software Engineer
            </p>
          </div>
          <div className="flex flex-col space-y-2 border-tersaryText border-l-2">
            <div className="p-2 flex flex-col gap-2">
              <span className="flex items-center space-x-1">
                <FaPhone />
                <span>+9779846724440</span>
              </span>
              <span className="flex items-center space-x-1">
                <AiFillMail />
                <span>gairhedurga13@gmail.com</span>
              </span>
              <span className="flex items-center space-x-1">
                <ImLocation />
                <span>Kathmandu,Nepal</span>
              </span>
              {/* <div><IoIosMail/>gairhedurga13@gmail.com</div>
          <div><FaLocationDot/> Kathmandu Nepal</div> */}
            </div>
          </div>
        </div>

        <div className="inline-flex space-x-2 gap-4 px-8">
          {/* <div className=""> */}
          <img
            className="w-24 h-24 rounded-full"
            src="/images/durga.png"
            alt="profile-image"
          />
          <p className="flex-1 text-left text-sm">
            Summarise your career here. You can make a PDF version of your
            resume using our free Sketch template here. Donec quam felis,
            ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu.
          </p>
          {/* </div> */}
        </div>
        <div className="flex mt-4 gap-2 px-8">
          <div className="border-tersaryText border-r-2">
            <div className="border-tersaryText border-l-4 text-left">
              <h2 className="pl-2 text-lg font-bold text-tersaryText">
                Work Experience
              </h2>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-left">
              <h3 className="font-bold">Senior Software Engineer </h3>
              <p>
                Role description goes here ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis.
              </p>
              <ul className="list-disc pl-6">
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-left">
              <h3 className="font-bold">Senior Software Engineer </h3>
              <p>
                Role description goes here ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis.
              </p>
              <ul className="list-disc pl-6">
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-left">
              <h3 className="font-bold">Senior Software Engineer </h3>
              <p>
                Role description goes here ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis.
              </p>
              <ul className="list-disc pl-6">
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex flex-col gap-2">
              <div className="border-tersaryText border-l-4 text-left">
                <h2 className="pl-2 text-lg font-bold text-tersaryText">
                  Skills
                </h2>
              </div>
              <h3 className="font-bold text-sm text-left">Technical</h3>
              {skills.map((item, index) => (
                <p className="text-left" key={index}>
                  {item}
                </p>
              ))}
            </div>
            {/* <div className=" flex flex-col gap-2">
              <div className="border-tersaryText border-l-4 text-left">
                <h2 className="pl-2 text-lg font-bold text-tersaryText">
                  Education
                </h2>
              </div>
              <p className="text-left">
                MSc in Computer Science University College London 2010 - 2011
              </p>

              <p className="text-left">
                {" "}
                BSc Maths and Physics Imperial College London 2007 - 2010
              </p>
            </div> */}
            <div className=" flex flex-col gap-2">
              <div className="border-tersaryText border-l-4 text-left">
                <h2 className="pl-2 text-lg font-bold text-tersaryText">
                  Language
                </h2>
              </div>
              <p className="text-left">English</p>
              <p className="text-left">Nepali</p>
              <p className="text-left"> Hindi</p>
            </div>
          </div>
        </div>
        <div className="inline-flex space-x-2 mx-auto p-4">
          <Link
            href="https://www.linkedin.com/in/durga-gairhe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedin className="text-xl cursor-pointer bg-transparent  border-none" />
            https://www.linkedin.com/in/durga-gairhe
          </Link>
          <Link
            href="https://github.com/dpgaire"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub className="text-xl cursor-pointer bg-transparent " />
            https://github.com/dpgaire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "SASS/SCSS",
  "Responsive Design",
  "RESTful APIs",
  "Git/GitHub",
];

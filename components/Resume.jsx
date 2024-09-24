import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import html2canvas from "html2canvas";

import Link from "next/link";

import { Modal, SubmitButton } from "./ui";

const Resume = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const resumeRef = useRef(null); // Reference to the resume content

  // Function to capture the resume as an image and download it as a PDF
  const handleDownloadPDF = () => {
    const input = resumeRef.current;

    // Disable shadow, padding, and margins for clean capture
    input.style.boxShadow = "none";

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Durga_Gairhe_Resume.pdf");

      // Restore original styles after PDF generation
      input.style.boxShadow = "";
    });
  };

  // Function to preview the PDF in a new tab
  const handlePreviewPDF = () => {
    const input = resumeRef.current;

    // Disable shadow, padding, and margins for clean capture
    input.style.boxShadow = "none";

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      const pdfBlob = pdf.output("bloburl"); // Get the PDF as a blob URL
      window.open(pdfBlob); // Open the PDF in a new tab for preview

      // Restore original styles after PDF generation
      input.style.boxShadow = "";
    });
  };

  return (
    <div className="py-12 text-gray-800 text-center max-w-6xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-8">Online Resume</h1>

      <div className="flex justify-center mb-6">
        <SubmitButton
          onClick={() => setModalOpen(true)}
          text="Download PDF Version"
        />
      </div>

      {/* Modal for Download or Preview */}
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onDownload={handleDownloadPDF}
          onPreview={handlePreviewPDF}
        />
      )}
      <div
        ref={resumeRef}
        className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-600">Durga Gairhe</h1>
            <p className="text-lg text-gray-600">Senior Software Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3 mt-6 md:mt-0">
            <ContactDetail icon={<FaPhone />} detail="+9779846724440" />
            <ContactDetail
              icon={<AiFillMail />}
              detail="gairhedurga13@gmail.com"
            />
            <ContactDetail icon={<ImLocation />} detail="Kathmandu, Nepal" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            src="/images/durga.png"
            alt="profile-image"
          />
          <p className="flex-1 text-left text-lg">
            I’m a positive and eager-to-learn developer with a “do-it-yourself”
            approach to problem-solving. I thrive in fast-paced environments,
            constantly seeking out ways to improve my skills and add value to
            the team. With years of experience in front-end development, I’m
            passionate about building scalable web applications that provide
            seamless user experiences.
          </p>
        </div>

        {/* Work Experience Section */}
        <Section title="Work Experience">
          <WorkExperience
            title="Senior Front-end Developer (Scrum Master)"
            company="Moru Digital Wallet"
            duration="Dec 2022 - Present"
            responsibilities={[
              "Currently serving as a Senior Front-end Developer and Scrum Master.",
              "Responsible for adding features and translating business requirements into technical specifications.",
              "Leads the front-end team, ensuring that best practices are followed.",
              "Takes on the role of scrum master, facilitating agile processes and ensuring smooth project management.",
              "Acts as a bridge between the business team and the development team.",
              "Assigns technical tasks to other developers, providing leadership in implementing solutions.",
              "Streamlined the development process by introducing code reviews and setting up CI/CD pipelines.",
              "Ensures timely delivery of key product features, coordinating with cross-functional teams.",
            ]}
          />
          <WorkExperience
            title="Frontend Developer"
            company="Dibtech Pvt Limited"
            duration="Jun 2022 - Dec 2022"
            responsibilities={[
              "Collaborated with the development team to discuss user interface ideas and applications.",
              "Reviewed application requirements and interface designs.",
              "Implemented highly responsive user interface components using React concepts.",
              "Demonstrated strong communication and troubleshooting skills.",
              "Developed and implemented front-end architecture to support user interface concepts.",
              "Optimized application performance, reducing load times by 25%.",
              "Worked with RESTful APIs and integrated them seamlessly into front-end components.",
              "Participated in code reviews and pair programming sessions to enhance code quality.",
            ]}
          />
          <WorkExperience
            title="Junior Front-end Developer"
            company="Phoenix Solution Pvt. Ltd"
            duration="July 2021 - June 2022"
            responsibilities={[
              "Developed responsive web applications using React.js, HTML, and Bootstrap 5.",
              "Collaborated closely with UI/UX designers, software developers, and QA resources.",
              "Implemented new features and optimized existing code for improved performance.",
              "Designed and developed pages and reusable components.",
              "Gained experience in the complete front-end development process.",
              "Learned the importance of accessibility and performance optimization in web development.",
              "Participated in daily standups and sprint planning sessions.",
              "Refined skills in JavaScript, CSS, and front-end development tools.",
            ]}
          />
        </Section>

        {/* Skills, Education & Languages */}
        <div className="flex flex-col md:flex-row gap-6">
          <Section title="Skills">
            <div className="text-left">
              <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <ProgressBar percentage={skill.percentage} />
                </div>
              ))}
            </div>
          </Section>
          <Section title="Education">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                {/* Icon for the degree */}
                <div className="text-blue-600">
                  <FaGraduationCap className="h-6 w-6" />
                </div>

                {/* Education details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bachelors in Information Technology
                  </h3>
                  <p className="text-gray-600">
                    Softwarica College of IT and E-Commerce, Kathmandu <br />
                    <span className="italic">
                      September 2017 - November 2020
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                {/* Icon for the degree */}
                <div className="text-blue-600">
                  <FaGraduationCap className="h-6 w-6" />
                </div>

                {/* Education details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Intermediate (Science)
                  </h3>
                  <p className="text-gray-600">
                    Millennium Higher Secondary School, Tansen Palpa <br />
                    <span className="italic">May 2014 - October 2016</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* Icon for the degree */}
                <div className="text-blue-600">
                  <FaGraduationCap className="h-6 w-6" />
                </div>

                {/* SLC (School Leaving Certificate) */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    School Leaving Certificate (SLC)
                  </h3>
                  <p className="text-gray-600">
                    Adarsha Higher Secondary Boarding School, Galyang Syangja{" "}
                    <br />
                    <span className="italic">April 2005 - May 2013</span>
                  </p>
                </div>
              </div>
            </div>
          </Section>
          <Section title="Languages">
            <p className="text-left">English</p>
            <p className="text-left">Nepali</p>
            <p className="text-left">Hindi</p>
          </Section>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <SocialLink
            href="https://www.linkedin.com/in/durga-gairhe"
            icon={<FaLinkedin className="text-blue-600" />}
            text="LinkedIn"
          />
          <SocialLink
            href="https://github.com/dpgaire"
            icon={<FaGithub className="text-black" />}
            text="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

const ContactDetail = ({ icon, detail }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{detail}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="w-full text-left">
    <div className="border-l-4 border-blue-500 pl-4 mb-4">
      <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
    </div>
    <div>{children}</div>
  </div>
);

const WorkExperience = ({ title, company, duration, responsibilities }) => (
  <div className="mb-6">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-600 font-bold text-sm">
      {company} | {duration}
    </p>
    <ul className="list-disc pl-5">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, icon, text }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center gap-2 cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  </Link>
);

const ProgressBar = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-blue-600 h-2.5 rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

export default Resume;

const skills = [
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "HTML5", percentage: 95 },
  { name: "CSS3", percentage: 90 },
  { name: "SASS/SCSS", percentage: 85 },
  { name: "Responsive Design", percentage: 90 },
  { name: "RESTful APIs", percentage: 85 },
  { name: "Git/GitHub", percentage: 80 },
];

import PageHeader from "./PageHeader";
import SocialLinks from "./SocialLinks";
import { HEADER_CONTENT } from "@/data";
import { Card, SubmitButton } from "./ui";

const { content, email, footerDescription } = HEADER_CONTENT;

const Projects = ({ projects }) => {
  return (
    <div className="py-12 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <PageHeader
        title="Projects"
        content={content}
        email={email}
        footerDescription={footerDescription}
      >
        <SocialLinks />
        <div className="inline-flex space-x-2 mx-auto py-2">
          <SubmitButton text="Hire me" />
        </div>
      </PageHeader>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 text-left">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

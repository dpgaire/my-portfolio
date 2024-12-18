import PageHeader from "./PageHeader";
import SocialLinks from "./SocialLinks";
import { HEADER_CONTENT } from "@/data";
import { SubmitButton } from "./ui";
import { ProjectCard } from "./ui/cards";
import Link from "next/link";

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
          <Link href="/contact" replace>
            <SubmitButton text="Hire me" />
          </Link>
        </div>
      </PageHeader>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 text-left md:p-0 p-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

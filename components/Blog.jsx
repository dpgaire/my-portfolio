import React from "react";
import PageHeader from "./PageHeader";
import { HEADER_CONTENT } from "@/data";
import SocialLinks from "./SocialLinks";
import { Card, SubmitButton } from "./ui";

const { content, email, footerDescription } = HEADER_CONTENT;

const Blog = ({ blogs }) => {
  return (
    <div className="py-12 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <PageHeader
        title="Blogs"
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
        {blogs.map((blog, index) => (
          <Card
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            githubUrl={blog.githubUrl}
            projectUrl={blog.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

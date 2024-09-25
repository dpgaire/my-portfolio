import React from "react";
import PageHeader from "./PageHeader";
import { HEADER_CONTENT } from "@/data";
import SocialLinks from "./SocialLinks";
import { SubmitButton } from "./ui";
import { BlogCard } from "./ui/cards";

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
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import PageHeader from "./PageHeader";
import { HEADER_CONTENT } from "@/data";
import SocialLinks from "./SocialLinks";
import { SubmitButton } from "./ui";
import { BlogCard } from "./ui/cards";
import BlogLists from "./skeletons/BlogLists";
import Link from "next/link";

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
          <Link href="/contact" replace>
            <SubmitButton text="Hire me" />
          </Link>
        </div>
      </PageHeader>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-0 p-2">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          <BlogLists key={index} />
        ))} */}
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

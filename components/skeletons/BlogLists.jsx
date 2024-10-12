import React from "react";

const BlogLists = () => {
  return (
    <div className="lg:max-w-sm text-left rounded-lg overflow-hidden shadow-lg bg-white animate-pulse">
      {/* <div className="h-48 bg-gray-200"></div> Placeholder for the image */}
      <div className="mt-2 p-6">
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>{" "}
        {/* Title placeholder */}
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/4"></div>{" "}
        {/* Date placeholder */}
        <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>{" "}
        {/* Description placeholder */}
        <div className="mt-4 flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>{" "}
          {/* Read Full Blog placeholder */}
          <div className="bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full text-xs w-16 h-4"></div>{" "}
          {/* Blog label placeholder */}
        </div>
      </div>
    </div>
  );
};

export default BlogLists;

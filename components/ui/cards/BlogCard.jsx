import Link from "next/link";

export default function BlogCard({ id, title, date, description, image }) {
  return (
    <div className="lg:max-w-sm text-left rounded-lg overflow-hidden shadow-lg bg-white">
      {/* <img className="w-full h-48 object-cover" src={image} alt="Blog Image" /> */}
      <div className="mt-2 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {new Date(date).toDateString()}
        </p>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link href={`/blogs/${id}`} className="text-indigo-600 font-semibold">
            Read Full Blog
          </Link>
          <span className="bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full text-xs">
            Blog
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetail({ blog }) {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-8">
      {/* Blog Container */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Author and Date Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={blog.authorImage}
              alt="Author"
            />
            <div>
              <p className="text-lg font-semibold text-gray-700">
                {blog.author}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(blog.date).toDateString()}
              </p>
            </div>
          </div>
          <div>
            <span className="bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full text-xs">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Blog Image */}
        <div className="h-full w-full mb-6">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={blog.image}
            alt="Blog"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{blog.title}</h1>

        {/* Blog Description */}
        {/* <p className="text-lg text-gray-700 leading-relaxed">
          {blog.description}
        </p> */}
        <div
          className="text-lg text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </div>
  );
}

// pages/404.js

import Link from "next/link";
import { FaSadCry } from "../data";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#7844E9] to-[#4F4F4F]  text-white text-center">
      <FaSadCry className="text-6xl mb-4" />
      <h1 className="lg:text-5xl text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 lg:text-lg text-sm p-1">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        className="mt-6 px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition"
        href="/"
        replace
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;

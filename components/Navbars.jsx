import Link from "next/link";
import { useRouter } from "next/router";

import SocialLinks from "./SocialLinks";
import { NAV_LINKS } from "@/data";

const Navbars = () => {
  const router = useRouter();
  return (
    <header className="w-64 fixed h-full font-poppins bg-secondaryText text-primaryText">
      {/* Intro */}
      <div className="text-center text-primaryText ">
        <h1 className="text-3xl font-bold  pt-4 ">Durga Gairhe</h1>
        <div className="flex flex-col py-6 px-4">
          <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto mb-4">
            <img
              src={"/images/durga.png"}
              alt="Profile"
              className="w-full p-2 h-full rounded-full mx-auto "
            />
          </div>
          <span className="text-sm font-medium mb-3">
            Hi, my name is Durga Gairhe and I'm a senior software engineer.
            Welcome to my personal website!
          </span>
          <SocialLinks />
          <div className="flex flex-start flex-col gap-2 mt-4 pl-8">
            {NAV_LINKS.map((section, index) => (
              <div
                key={index}
                className={`nav_bar_section mt-1 border border-transparent px-2 ${
                  router.pathname === `${section.path}`
                    ? "active"
                    : "hover:border hover:bg-primary hover:text-white"
                }`}
              >
                {section.icon}
                <Link
                  key={section}
                  href={`${section.path}`}
                  className=" font-bold py-2"
                >
                  {section.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbars;

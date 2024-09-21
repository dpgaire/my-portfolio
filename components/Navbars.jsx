import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons
import SocialLinks from "./SocialLinks";
import { NAV_LINKS } from "@/data";

const Navbars = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State for mobile navbar

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navbar */}
      <header
        className={`lg:hidden fixed top-0 left-0 ${
          isOpen && "bottom-0"
        } w-full bg-secondaryText text-primaryText z-50 shadow-md`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Durga Gairhe</h1>
          <button onClick={toggleNavbar} aria-label="Toggle Navigation">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center bg-secondaryText transition-all duration-300 ease-in-out">
            <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-2">
              <img
                src={"/images/durga.png"}
                alt="Profile"
                className="w-full h-full rounded-full mx-auto"
              />
            </div>
            <span className="text-xs font-medium mb-2 text-center px-4">
              Hi, I'm Durga Gairhe, a senior software engineer. Welcome!
            </span>
            <SocialLinks />
            <div className="flex flex-col items-start mt-2">
              {NAV_LINKS.map((section, index) => (
                <div
                  onClick={() => {
                    router.push(`${section.path}`);
                    setIsOpen(false); // Close the menu after selecting a link
                  }}
                  key={index}
                  className={`nav_bar_section mt-1 border border-transparent px-4 py-2 rounded hover:bg-primary hover:text-white ${
                    router.pathname === `${section.path}` ? "active" : ""
                  }`}
                >
                  {section.icon}
                  <span className="font-bold text-sm">{section.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Desktop Navbar */}
      <header className="hidden lg:block w-64 fixed h-full font-poppins bg-secondaryText text-primaryText shadow-lg">
        <div className="text-center text-primaryText">
          <h1 className="text-3xl font-bold pt-4">Durga Gairhe</h1>
          <div className="flex flex-col py-6 px-4">
            <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto mb-4">
              <img
                src={"/images/durga.png"}
                alt="Profile"
                className="w-full p-2 h-full rounded-full mx-auto"
              />
            </div>
            <span className="text-sm font-medium mb-3">
              Hi, my name is Durga Gairhe and I'm a senior software engineer.
              Welcome to my personal website!
            </span>
            <SocialLinks />
            <div className="flex flex-start flex-col gap-2 mt-4">
              {NAV_LINKS.map((section, index) => (
                <div
                  onClick={() => router.push(`${section.path}`)}
                  key={index}
                  className={`nav_bar_section mt-1 border border-transparent px-4 py-2 rounded hover:bg-primary hover:text-white ${
                    router.pathname === `${section.path}` ? "active" : ""
                  }`}
                >
                  {section.icon}
                  <span className="font-bold py-2">{section.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbars;

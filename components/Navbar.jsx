// components/Navbar.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu,GiCrossMark } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Function to toggle right-side navigation visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Close the modal when the right-side navigation is opened
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Change background color when user scrolls down
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      } transition duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 relative">
        {/* Logo */}
        <div
          onClick={() => setIsTooltipVisible(!isTooltipVisible)}
          className="text-white font-bold text-lg cursor-pointer "
        >
          Durga<span className="text-red-500">G</span>
          {isTooltipVisible && (
            <div className="absolute bg-gray-800 text-white p-2 rounded shadow bottom-[-40px] left-0">
              Thank you for liking me.
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleNav}
          />
        </div>

        {/* {isNavOpen && (
          <div className="md:hidden absolute top-0 right-0 h-full bg-gray-800 text-white p-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Experience
              </a>
              <a href="#" className="hover:text-gray-300">
                Skills
              </a>
              <a href="#" className="hover:text-gray-300">
                Projects
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        )} */}

        {isNavOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40">
            <div className="flex justify-end p-4">
              {/* Cross Icon to Close Navigation Overlay */}
              <GiCrossMark
                className="text-gray-800 text-2xl cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                Experience
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                Skills
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                Projects
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 py-2">
                Contact
              </a>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Experience
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Skills
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

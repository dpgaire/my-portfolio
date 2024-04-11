import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Confetti from "react-dom-confetti";
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// Constants
const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 170,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#ff0000", "#00ff00", "#0000ff"],
};

const NAV_LINKS = ["About", "Experiences", "Skills", "Projects","Blogs", "Contact"];

// To optimize the performance of your component
const useDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(
    (...args) => {
      let timeoutId;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};

// NavbarLogo component
const NavbarLogo = ({ onClick, isTooltipVisible, confetti }) => (
  <div
    className="text-white font-bold font-sans text-2xl cursor-pointer "
    onClick={onClick}
  >
    <span className="text-[#7844E9] text-4xl">d</span>
    urga<span className="text-[#7844E9] text-4xl">G</span>
    {isTooltipVisible && (
      <div className="absolute text-lg bg-gray-800 text-white p-2 rounded shadow bottom-[-40px] left-0">
        Thank you for liking me.
        <span>
          <MdOutlineClose className="bg-black  rounded-full absolute shadow-white top-[-10px] right-[-5px]" />
        </span>
      </div>
    )}
    <Confetti active={confetti} config={confettiConfig} />
  </div>
);

// MobileNavigation component
const MobileNavigation = ({ closeNav }) => (
  <div className="md:hidden fixed inset-0 bg-[#7844E9] z-40">
    <div className="flex justify-end p-4">
      {/* Cross Icon to Close Navigation Overlay */}
      <MdOutlineClose
        onClick={closeNav}
        className="rounded-full text-white text-2xl cursor-pointer"
      />
    </div>
    <div className="text-center text-white z-10">
      {/* Cube-like Structure (Profile Picture) */}
      <div className="lg:w-32 lg:h-32 w-28 h-28 bg-[#7844E9] rounded-full mx-auto ">
        <img
          src={"/images/my-profile.png"}
          alt="Profile"
          className="w-full p-2  rounded-full mx-auto mb-4"
        />
      </div>
      <div className="inline-flex flex-end space-x-2 mt-10">
        <Link
          href="https://www.linkedin.com/in/durga-gairhe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl cursor-pointer bg-transparent text-white border-none" />
        </Link>
        <Link
          href="https://github.com/dpgaire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl cursor-pointer bg-transparent text-white" />
        </Link>
      </div>
    </div>
    <div className="flex-center flex-col mt-2">
      {NAV_LINKS.map((section) => (
        <Link
          key={section}
          href={`#${section.toLowerCase()}`}
          onClick={closeNav}
          className="text-white py-2 hover:text-gray-300 wi font-bold "
        >
          {section}
        </Link>
      ))}
    </div>
  </div>
);

// NavbarLinks component
const NavbarLinks = ({ closeNav }) => (
  <div className="hidden md:flex space-x-4 items-center font-sans">
    {NAV_LINKS.map((section) => (
      <Link
        key={section}
        href={`#${section.toLowerCase()}`}
        onClick={closeNav}
        className="nav-links"
      >
        {section}
      </Link>
    ))}
    <div className="inline-flex flex-end space-x-2">
      <Link
        href="https://www.linkedin.com/in/durga-gairhe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-xl cursor-pointer bg-transparent text-[#7844E9] border-none" />
      </Link>
      <Link
        href="https://github.com/dpgaire"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-xl cursor-pointer bg-transparent text-white" />
      </Link>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const debouncedHandleScroll = useDebouncedCallback((scrollPosition) => {
    if (scrollPosition > 50) {
      setIsScrolled(true);
      setIsTooltipVisible(false);
    } else {
      setIsScrolled(false);
    }
  }, 200);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
    setConfetti(true);isScrolled
    setTimeout(() => {
      setConfetti(false);
    }, 2000);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    debouncedHandleScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
    <nav
      className={`fixed w-full px-2 z-50 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      } transition duration-400 font-sans`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 relative">
        {/* Logo */}
        <NavbarLogo
          onClick={toggleTooltip}
          isTooltipVisible={isTooltipVisible}
          confetti={confetti}
        />
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
        {/* Mobile Navigation */}
        {isNavOpen && (
          <MobileNavigation
            isOpen={isNavOpen}
            closeNav={() => setIsNavOpen(false)}
          />
        )}
        {/* Navigation Links */}
        <NavbarLinks closeNav={() => setIsNavOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import Confetti from "react-dom-confetti";

// Constants
const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#ff0000", "#00ff00", "#0000ff"],
};

const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Contact"];

// NavbarLogo component
const NavbarLogo = ({ onClick, isTooltipVisible, confetti }) => (
  <div
    className="text-white font-bold text-lg cursor-pointer "
    onClick={onClick}
  >
    Durga<span className="text-red-500">G</span>
    {isTooltipVisible && (
      <div className="absolute bg-gray-800 text-white p-2 rounded shadow bottom-[-40px] left-0">
        Thank you for liking me.
      </div>
    )}
    <Confetti active={confetti} config={confettiConfig} />
  </div>
);

// MobileNavigation component
const MobileNavigation = ({ closeNav }) => (
  <div className="md:hidden fixed inset-0 bg-gray-800 z-40">
    <div className="flex justify-end p-4">
      {/* Cross Icon to Close Navigation Overlay */}
      <GiCrossMark
        className="text-white text-2xl cursor-pointer"
        onClick={closeNav}
      />
    </div>
    <div className="flex flex-col items-center justify-center h-full">
      {NAV_LINKS.map((section) => (
        <Link
          key={section}
          href={`#${section.toLowerCase()}`}
          onClick={closeNav}
          className="text-white py-2 hover:text-gray-300 "
        >
          {section}
        </Link>
      ))}
    </div>
  </div>
);

// NavbarLinks component
const NavbarLinks = ({ closeNav }) => (
  <div className="hidden md:flex space-x-4">
    {NAV_LINKS.map((section) => (
      <Link
        key={section}
        href={`#${section.toLowerCase()}`}
        onClick={closeNav}
        className="text-white hover:text-gray-300"
      >
        {section}
      </Link>
    ))}
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
        setIsTooltipVisible(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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

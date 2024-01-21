// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-20">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div className="text-white">
          <span className="text-xl font-bold cursor-pointer">DurgaG</span>
        </div>
        {/* Navigation links */}
        <div className="flex items-center">
          <Link href="#" className="text-white mr-4">About</Link>
          <Link href="#" className="text-white mr-4">Experience</Link>
          <Link href="#" className="text-white mr-4">Skills</Link>
          <Link href="#" className="text-white mr-4">Projects</Link>
          <Link href="#" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

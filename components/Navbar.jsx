// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-white">Home</Link>
        <Link href="#" className="text-white">About</Link>
        <Link href="#" className="text-white">Experience</Link>
        <Link href="#" className="text-white">Skills</Link>
        <Link href="#" className="text-white">Projects</Link>
        <Link href="#" className="text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

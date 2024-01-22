// components/Introduction.js
import Link from 'next/link';


const Introduction = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/images/background.png')" }}>
      <div className="text-center text-white z-10">
        {/* Cube-like Structure (Profile Picture) */}
        <div className="w-32 h-32 bg-indigo-500 rounded-full mx-auto mb-4">
        <img src="/images/profile-pic.png" alt="Profile" className="w-full h-full rounded-full mx-auto mb-4" />
        </div>
        {/* Title and Subtitle */}
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Durga Gairhe.</h1>
        <h2 className="text-xl mb-4">Software Engineer</h2>

        {/* Description */}
        <p className="text-lg mb-8 max-w-md mx-auto">High level experience in web design and development knowledge producing quality work.</p>

        {/* Call-to-action button */}
        <Link  href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">View Projects</Link>
      </div>

      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Introduction;

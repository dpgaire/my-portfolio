import { useEffect, useState } from 'react';
import { LinkButton } from './ui/Button';
import IntroSkeleton from './skeletons/Intro';


const Introduction = () => {

  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/intoduction')
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.myInfo);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); 
      });
  }, []); 

  if (isLoading) {
    return <section id="about" className="h-screen flex items-center justify-center bg-cover bg-center relative bg-intro-back"><IntroSkeleton/></section>;
  }

  return (
    <section id="about" className="lg:h-screen h-[90vh] flex items-center justify-center bg-cover bg-center relative bg-intro-back" >
      <div className="text-center text-white z-10">
        {/* Cube-like Structure (Profile Picture) */}
        <div className="lg:w-32 lg:h-32 w-28 h-28 bg-[#7844E9] rounded-full mx-auto mb-4">
        <img src={'/images/profile-pic.png'} alt="Profile" className="w-full p-2 h-full rounded-full mx-auto mb-4" />
        </div>
        {/* Title and Subtitle */}
        <h1 className="intro__heading">{profile.title}</h1>
        <h2 className="lg:text-xl text-lg mb-2 font-bold font-serif">{profile.degination}</h2>
        {/* Description */}
        <p className="text-md mb-4 max-w-md mx-auto font-serif leading-7">{profile.description}</p>
        {/* Call-to-action button */}
        <LinkButton href={'#projects'} content="View Projects"/>
        {/* <Link  href="#projects" className="bg-[#7844E9] text-white px-4 py-2 rounded-full hover:bg-[#7844e9df] transition duration-300">View Projects</Link> */}
      </div>
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Introduction;

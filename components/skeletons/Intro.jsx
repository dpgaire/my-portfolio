import React from "react";

const Intro = () => {
  return (
    <div className="text-center text-white z-10">
      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse">
      </div>
      <h1 className="intro__heading animate-pulse">Loading Title</h1>
      <h2 className="text-xl mb-2 font-bold font-serif animate-pulse">
        Loading Subtitle
      </h2>
      <p className="text-lg mb-4 max-w-md mx-auto font-serif animate-pulse">
        Loading Description
      </p>
      <div className="w-32 h-10 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse"></div>
    </div>
  );
};

export default Intro;

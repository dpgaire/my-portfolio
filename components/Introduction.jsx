"use client";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaTerminal,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQrcode,
  FaUserCog,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import {
  SiElectron,
  SiNextdotjs,
  SiVisualstudiocode,
  SiPostman,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { useRouter } from "next/router";

const Introduction = ({ myInfo }) => {
  const router = useRouter();

  return (
    <div className="relative w-full">
      {/* Rotating Icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Wrapper for rotation */}
        <div className="relative w-[700px] h-[700px]">
          {/* Rotating Circle with evenly spaced icons */}
          <div className="absolute w-full h-full animate-spin-slow rounded-full">
            {/* Icon Wrapper */}
            <FaReact
              className="absolute text-blue-500 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -300px)",
              }}
            />
            <SiElectron
              className="absolute text-blue-700 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(250px, -150px)",
              }}
            />
            <SiVisualstudiocode
              className="absolute text-blue-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(250px, 150px)",
              }}
            />
            <SiNextdotjs
              className="absolute text-gray-900 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 300px)",
              }}
            />
            <FaCss3Alt
              className="absolute text-blue-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-250px, 150px)",
              }}
            />
            <FaNodeJs
              className="absolute text-green-500 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-250px, -150px)",
              }}
            />
            <SiPostman
              className="absolute text-orange-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(50px, -250px)",
              }}
            />
            {/* New Icons */}
            <FaPython
              className="absolute text-yellow-400 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-150px, -250px)",
              }}
            />
            <FaTerminal
              className="absolute text-gray-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(150px, -250px)",
              }}
            />
            <SiRedux
              className="absolute text-purple-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(250px, -50px)",
              }}
            />
            <SiMongodb
              className="absolute text-green-600 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(150px, 250px)",
              }}
            />
            <FaUserCog
              className="absolute text-red-500 text-4xl"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-150px, 250px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Identity Card */}
      <div className="relative bg-white max-w-[400px] w-full mx-auto p-6 rounded-xl shadow-xl border-2 border-gray-300 overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 z-10">
        {/* Top Section for Logo */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-gray-400 to-brown-500 text-white flex items-center justify-center">
          <span className="font-bold">Durga Gairhe</span>
        </div>

        {/* Profile Picture */}
        <div className="w-20 h-24 mx-auto mt-16 mb-4 rounded-md overflow-hidden shadow-md border-2 border-gray-300">
          <img
            src={myInfo?.profile_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Designation */}
        <h1 className="text-lg font-semibold text-gray-800">{myInfo?.title}</h1>
        <h2 className="text-sm font-medium text-gray-600 mb-2">
          {myInfo?.degination}
        </h2>

        {/* Contact Information */}
        <div className="text-sm text-gray-600 mb-4 flex flex-col items-center justify-start">
          <p className="flex items-center justify-center mb-1">
            <FaPhone className="mr-2" /> {myInfo?.phone || "+9779846724440"}
          </p>
          <p className="flex items-center justify-center mb-1">
            <FaEnvelope className="mr-2" />{" "}
            {myInfo?.email || "email@example.com"}
          </p>
          <p className="flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />{" "}
            {myInfo?.location || "Kathmandu, Nepal"}
          </p>
        </div>

        {/* QR Code Placeholder */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <FaLinkedinIn className="text-xl text-gray-500" />
          <FaGithub className="text-xl text-gray-500" />
        </div>

        {/* Bottom Curved Background for the Style */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-400 to-brown-500"></div>
      </div>
    </div>
  );
};

export default Introduction;

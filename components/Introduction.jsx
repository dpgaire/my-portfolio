import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaTerminal,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
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
import SocialLinks from "./SocialLinks";

const Introduction = ({ myInfo }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[700px] h-[700px] shadow-lg border">
          <div className="absolute w-full h-full animate-spin-slow rounded-full">
            {/* Icons rotating around the card */}
            <FaReact
              className="absolute text-blue-500 text-4xl"
              style={{
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiElectron
              className="absolute text-blue-700 text-4xl"
              style={{
                top: "30%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiVisualstudiocode
              className="absolute text-blue-600 text-4xl"
              style={{
                top: "50%",
                left: "90%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiNextdotjs
              className="absolute text-gray-900 text-4xl"
              style={{
                top: "80%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <FaCss3Alt
              className="absolute text-blue-600 text-4xl"
              style={{
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <FaNodeJs
              className="absolute text-green-500 text-4xl"
              style={{
                top: "80%",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiPostman
              className="absolute text-orange-600 text-4xl"
              style={{
                top: "50%",
                left: "10%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <FaPython
              className="absolute text-yellow-400 text-4xl"
              style={{
                top: "30%",
                left: "20%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <FaTerminal
              className="absolute text-gray-600 text-4xl"
              style={{
                top: "30%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiRedux
              className="absolute text-purple-600 text-4xl"
              style={{
                top: "50%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <SiMongodb
              className="absolute text-green-600 text-4xl"
              style={{
                top: "70%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <FaUserCog
              className="absolute text-red-500 text-4xl"
              style={{
                top: "70%",
                left: "30%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Identity Card as the "Sun" */}
      <div className="relative bg-black text-white max-w-[370px] w-full mx-auto p-6 transform lg:rotate-[15deg] transition-transform duration-500 ease-out hover:scale-110 hover:rotate-0 z-10">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-gray-400 to-gray-700 text-white flex items-center justify-center">
          <span className="font-bold">Durga Gairhe</span>
        </div>

        <div className="w-20 h-24 mx-auto mt-16 mb-4 rounded-md overflow-hidden shadow-md border-2 border-gray-300">
          <img
            src={myInfo?.profile_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-lg font-semibold text-center">{myInfo?.title}</h1>
        <h2 className="text-sm font-medium mb-2 text-center">
          {myInfo?.degination}
        </h2>

        <div className="text-sm mb-4 flex flex-col items-center">
          <p className="flex items-center justify-start mb-1">
            <a
              href={`tel:${myInfo?.phone || "+9779846724440"}`}
              className="flex items-center"
            >
              <FaPhone className="mr-2" />
              <span>{myInfo?.phone || "+9779846724440"}</span>
            </a>
          </p>
          <p className="flex items-center mb-1">
            <a
              href={`mailto:${myInfo?.email || "gairhedurga13@gmail.com"}`}
              target="_blank"
              className="flex items-center"
            >
              <FaEnvelope className="mr-2" />
              <span>{myInfo?.email || "gairhedurga13@gmail.com"}</span>
            </a>
          </p>

          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />{" "}
            {myInfo?.location || "Kathmandu, Nepal"}
          </p>
        </div>
        <div className="flex justify-center items-center mt-4 gap-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

"use client";
import { useRouter } from "next/router";
import { SubmitButton } from "./ui";

const Introduction = ({ myInfo }) => {
  const router = useRouter();
  return (
    <div
      // className="text-center text-white z-10"
      className=" font-poppins text-center  bg-white max-w-[992px] text-secondaryText mx-auto mb-4 p-2 lg:p-4 rounded-lg shadow-md w-full"
    >
      <div className="lg:w-32 lg:h-32 w-28 h-28 bg-primary rounded-full mx-auto mb-4">
        <img
          src={myInfo?.profile_image}
          alt="Profile"
          className="w-full p-2 h-full rounded-full mx-auto mb-4"
        />
      </div>
      <h1 className="intro__heading">{myInfo?.title}</h1>
      <h2 className="lg:text-xl text-lg mb-2 font-bold font-serif">
        {myInfo?.degination}
      </h2>
      <p className="text-md mb-4 max-w-md mx-auto font-serif leading-7">
        {myInfo?.description}
      </p>
      <SubmitButton
        text="View Projects"
        onClick={() => router.push("/projects")}
      />
    </div>
  );
};

export default Introduction;

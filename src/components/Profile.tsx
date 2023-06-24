import React from "react";
import { FaGithub, FaNodeJs, FaAtom, FaLeaf, FaLink } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <img
        src="https://i.pinimg.com/originals/8d/0a/67/8d0a678c64ba4718e01d9704126a44e5.jpg"
        alt="pfp"
        className="mx-auto rounded-full mb-5 w-60 md:w-56"
      />
      <h1 className="text-4xl md:text-5xl mt-3 dark:text-white mb-1 md:mb-3  text-center font-bold">
        Lakshmi Chaitanya
      </h1>
      <p className="text-[15px] mt-2 text-[#d6d3d1] text-center md:text-xl mb-3 font-medium">
        Software Engineer &amp; Web Developer{" "}
      </p>
    </div>
  );
}

export default Profile;

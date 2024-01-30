import React from "react";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";

const hero = () => {
  return (
    <div className="flex flex-col p-10 md:flex-row">
      <div className="text-center p-10 py-10 md:w-1/2 md:ml-auto md:text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-300">
          Blerton Krasniqi
        </h2>
        <br />
        <h3 className="text-2xl font-medium py-2">Web Developer</h3>
        <p className="text-medium py-5 leading-8 text-gray-800  dark:text-white">
          Hi, I&apos;m a passionate Web Developer with an eye for detail and a
          love for all things digital. I have a strong understanding of both
          front-end and back-end development, and I am excited to put my skills
          to use in a professional setting. I am a quick learner and a team
          player, and I am confident that I can be a valuable asset to any web
          development team.
        </p>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-full md:w-80 h-80 mt-20 overflow-hidden">
        <Image
          src={deved}
          alt="Developer Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default hero;

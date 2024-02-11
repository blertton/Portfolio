"use client";
import React from "react";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import { Reveal } from "@/app/Reveal/Reveal";
import myGif from "../../public/7kmF.gif";

const hero = () => {
  return (
    <div id="#hero" className="flex flex-col p-10 md:flex-row">
      <div className="text-center p-10 py-10 md:w-1/2 md:ml-auto md:text-center">
        <Reveal width="100%">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-300">
            Blerton Krasniqi
          </h2>
        </Reveal>
        <br />
        <Reveal width="100%">
          <h3 className="text-2xl font-medium py-2 dark:text-white">
            Web Developer
          </h3>
        </Reveal>
        <Reveal width="100%">
          <p className="text-medium py-5 leading-8 dark:text-white">
            Hi, I&apos;m a passionate Web Developer with an eye for detail and a
            love for all things digital. I have a strong understanding of both
            front-end and back-end development, and I am excited to put my
            skills to use in a professional setting. I am a quick learner and a
            team player, and I am confident that I can be a valuable asset to
            any web development team.
          </p>
        </Reveal>
      </div>{" "}
      <div className="relative bg-gradient-to-b from-gray-900 mx-auto rounded-full w-full md:w-80 h-80 mt-14 overflow-hidden">
        <Image src={myGif} alt="my gif" className=" bg-none h-80 " />
      </div>
    </div>
  );
};

export default hero;

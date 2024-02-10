import React from "react";
import work from "../data/work";
import { Reveal } from "@/app/Reveal/Reveal";

const Work = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        id="work"
        className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-teal-600 sm:text-4xl md:mx-auto ">
            <span className="relative inline-block">
              <Reveal width="100%">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                    width="52"
                    height="24"
                  />
                </svg>
              </Reveal>
              <Reveal width="100%">
                <span className="relative dark:text-teal-300">
                  My Experience
                </span>
              </Reveal>
            </span>
          </h2>
        </div>
        <Reveal width="100%">
          <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {work.map((workEntry, index) => (
              <div key={index} className="text-center ">
                <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 dark:text-white mt-10">
                  {workEntry.title}
                </h6>
                {workEntry.skills.map((skill, skillIndex) => (
                  <p
                    key={skillIndex}
                    className="max-w-md mb-3 text-sm text-gray-900 mx-auto dark:text-white"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import Image from "next/image";
import projects from "../data/projects";


const Projects = () => {
  return (
    <div id="projects">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">My Projects</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800} // Adjust width as needed
                height={500} // Adjust height as needed
                className="object-cover w-full h-64"
              />
              <div className="p-5 flex flex-col bg-white flex-1">
                <h1 className="inline-block text-teal-600 mb-3 text-2xl font-bold leading-5">
                  {project.title}
                </h1>
                <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                  {project.subTitle}
                </h2>
                <p className="mb-2 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                    Technologies:
                  </h2>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap mt-auto space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex bg-gradient-to-b from-teal-400 rounded-full px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-black"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

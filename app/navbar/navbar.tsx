import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const navbar = () => {
  return (
    <nav className="py-10  mb-12 flex justify-between">
      <h1 className="text-xl font-semibold font-burtons">Blerton Krasniqi</h1>
      <ul className="flex items-center space-x-5">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-300 to-teal-200 font-semibold p-2 rounded-lg "
            href="https://drive.google.com/file/d/1mRM8iS7e2_Wi2puJCrEjk7aSPVxR0YjF/view?usp=drive_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;

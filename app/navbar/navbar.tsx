import React from "react";
import Theme from "../Theme";

const Navbar = () => {
  return (
    <nav className="py-5 md:py-10 mb-12 flex flex-col md:flex-row justify-between w-auto dark:bg-medium">
      <h1 className="text-xl font-semibold font-burtons dark:text-white mb-4 md:mb-0">
        Blerton Krasniqi
      </h1>
      <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 dark:text-white">
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
        <div>
          <Theme />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

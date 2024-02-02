"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Theme from "../Theme";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`py-5 md:py-10 mb-12 flex flex-col md:flex-row justify-between w-auto dark:bg-medium ${
        isMobile && menuOpen ? "md:hidden" : ""
      }`}
    >
      <h1 className="text-xl font-semibold font-burtons dark:text-white mb-4 md:mb-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5">
        Blerton Krasniqi
      </h1>
      {isMobile && (
        <button className="md:hidden mb-2" onClick={handleMenuToggle}>
          <MenuIcon />
        </button>
      )}
      <ul
        className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 dark:text-white ${
          isMobile ? (menuOpen ? "md:flex" : "hidden") : "md:flex"
        }`}
      >
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
          <a href="#socials">Contact</a>
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

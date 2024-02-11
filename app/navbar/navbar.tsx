"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import Theme from "../Theme";
import Image from "next/image";
import menu from "../../public/4188525.png";
import teal from "../../public/teal.png";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <nav
      className={` py-5 md:py-10 mb-12 md:px-32 flex flex-col md:flex-row justify-between w-auto dark:bg-medium ${
        isMobile && menuOpen ? "md:hidden" : ""
      }`}
    >
      <h1 className="text-xl font-semibold font-burtons dark:text-white mb-4 md:mb-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5">
        <a href="/"> Blerton Krasniqi</a>
      </h1>
      {isMobile && (
        <motion.div
          className="md:hidden flex justify-center mb-2 items-center cursor-pointer"
          onClick={handleMenuToggle}
        >
          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                key="teal"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Image src={teal} width={30} height={30} alt="menu" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Image src={menu} width={30} height={30} alt="menu" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
      <AnimatePresence>
        {(isMobile || !menuOpen) && (
          <ul
            className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 dark:text-white ${
              isMobile ? (menuOpen ? "md:flex" : "hidden") : "md:flex"
            }`}
          >
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <a href="#skills">Skills</a>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <a href="#work">Experience</a>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <a href="#socials">Contact</a>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <a
                className="bg-gradient-to-r from-cyan-300 to-teal-200 font-semibold p-2 rounded-lg "
                href="https://drive.google.com/file/d/1mRM8iS7e2_Wi2puJCrEjk7aSPVxR0YjF/view?usp=drive_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </motion.li>
            <motion.div
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Theme />
            </motion.div>
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

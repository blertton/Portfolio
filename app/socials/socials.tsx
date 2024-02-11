import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Reveal } from "@/app/Reveal/Reveal";

const socials = () => {
  return (
    <div
      id="socials"
      className="flex justify-center gap-10 py-16 text-gray-600 dark:text-white my-14"
    >
      <div className="flex justify-center gap-10 text-gray-600 dark:text-white">
        <Reveal width="100%">
          <a
            href="https://www.linkedin.com/in/blertonkrasniqi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-6xl h-16 w-16" />
          </a>
        </Reveal>
        <Reveal width="100%">
          <a
            href="https://github.com/blertton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="text-6xl h-16 w-16" />
          </a>
        </Reveal>
        <Reveal width="100%">
          <a
            href="mailto:blerton.krasniq@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon className="text-6xl h-16 w-16" />
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default socials;

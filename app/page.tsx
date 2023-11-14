import { MdOutlineDarkMode } from "react-icons/md";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import Skills from "./skills/index";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Projects from "./projects/index";
import Footer from "./footer/index";
import Work from "./work/index";

const Home = () => {
  return (
    <div>
      <div className="bg-white md:px-32">
        <div className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold font-burtons">
              Blerton Krasniqi
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-300 to-teal-200 font-semibold p-2 rounded-lg ml-8"
                  href="https://drive.google.com/file/d/1mRM8iS7e2_Wi2puJCrEjk7aSPVxR0YjF/view?usp=drive_link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col p-10 md:flex-row">
            <div className="text-center p-10 py-10 md:w-1/2 md:ml-auto md:text-center">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">
                Blerton Krasniqi
              </h2>
              <br />
              <h3 className="text-2xl font-medium py-2">Web Developer</h3>
              <p className="text-medium py-5 leading-8 text-gray-800">
                Hi, I&apos;m a passionate Web Developer with an eye for detail
                and a love for all things digital. I have a strong
                understanding of both front-end and back-end development, and I
                am excited to put my skills to use in a professional setting. I
                am a quick learner and a team player, and I am confident that I
                can be a valuable asset to any web development team.
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
          <div className="flex justify-center gap-10 py-16 text-gray-600">
            <a
              href="https://www.linkedin.com/in/blertonkrasniqi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="text-6xl" />
            </a>
            <a
              href="https://github.com/blertton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="text-6xl" />
            </a>
            <a
              href="mailto:blerton.krasniq@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon className="text-6xl" />
            </a>
          </div>
          <Skills />
          <Work />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
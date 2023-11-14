import HtmlIcon from "@mui/icons-material/Html";
import CodeIcon from '@mui/icons-material/Code';
import HandymanIcon from "@mui/icons-material/Handyman";

const skills = [
  {
    icon: <HtmlIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "FrontEnd",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TailwindCSS",
      "APIs",
      "MaterialUI",
    ],
  },
  {
    icon: <CodeIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "BackEnd",
    skills: [
      "C#",
      ".Net",
      "NodeJS",
      "Express",
      "MySQL",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VSCode",
      "Postman",
    ],
  }
];

export default skills;
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
      "Angular",
      "MaterialUI",
    ],
  },
  {
    icon: <CodeIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "BackEnd",
    skills: [
      "NodeJS",
      "Express",
      "SQL",
      "MongoDB",
      "ProgressSQL",
      "Python"
    ],
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "Tools",
    skills: [
      "Model-viewer",
      "Firebase",
      "Google Cloud",
      "Git",
      "GitHub",
      "VSCode",
      "Postman",
    ],
  }
];

export default skills;
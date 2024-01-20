import upwork from "assets/images/logos/upwork.png";
import token from "assets/images/logos/token.jpg";
import arcelik from "assets/images/logos/arcelik.png";
import UniLogo from "assets/images/logos/odtu.jpg";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import sass from "assets/images/skills/sass.svg";
import postgres from "assets/images/skills/postgresql.png";
import heroku from "assets/images/skills/heroku.png";
import render from "assets/images/skills/render.svg";
import aws from "assets/images/skills/aws.png";

export const companies = [
  {
    title: "Upwork",
    alt: "Upwork image",
    role: "Freelance Full-stack software engineer",
    skills: [
      "react",
      "django-rest-framework",
      "javascript",
      "python",
      "postgreSQL",
      "render",
    ],
    period: "2023 - Present",
    logo: upwork,
  },
  {
    title: "Arçelik",
    alt: "Arçelik image",
    role: "System Design Intern",
    skills: ["siemens NX", "ansys", "minitab"],
    period: "2022 - 2022",
    logo: arcelik,
  },
  {
    title: "Token Financial Technologies",
    alt: "Token image",
    role: "Mechanical Design Intern",
    skills: ["siemens NX", "ansys"],
    period: "2021 - 2021",
    logo: token,
  },
];

export const institutes = [
  {
    short_title: "METU - ODTÜ",
    title: "Middle East Technical University",
    alt: "ODTU logo",
    role: "B.Sc in Mechanical Engineering",
    skills: [
      "web development",
      "machine learning (AI/ML)",
      "control systems design",
    ],
    period: "2019 - 2023",
    startingYear: "2019",
    logo: UniLogo,
  },
];

export const skills = [
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },

  {
    name: "Python",
    description: "Web development",
    link: "https://www.python.org/",
    type: "development",
    image: python,
  },
  {
    name: "JavaScript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    name: "TypeScript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  {
    name: "SASS",
    description: "Web design",
    link: "https://sass-lang.com",
    type: "design",
    image: sass,
  },
  {
    name: "PostgreSQL",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres,
  },

  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku,
  },
  {
    name: "Render",
    description: "Devops",
    link: "https://render.com/",
    type: "devops",
    image: render,
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws,
  },
  {
    name: "Visual Studio Code",
    description: "IDE",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma,
  },
];

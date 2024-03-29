import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
} from "devicons-react";

export const githubProjectsURL =
  "https://api.github.com/users/MishanPoudel/repos";

const githubLink = "https://github.com/MishanPoudel";

export const profileDescription = [
  "As a passionate frontend developer, I thrive on the creative challenge of crafting visually stunning and user-friendly interfaces. Currently, I'm expanding my skill set by delving into the world of backend development, exploring the realms of Node.js and Express.js.",
  "My journey in the realm of coding has been a thrilling adventure. From mastering HTML, CSS, and JavaScript to diving into advanced frontend frameworks like React.js, I've always had a hunger for knowledge and a drive to push my boundaries.",
  "Now, as I embark on my journey into backend development, I'm excited to unravel the mysteries of server-side scripting and database management. Node.js and Express.js have become my companions on this new leg of the journey, and I'm relishing every moment of the learning process.",
  "At the heart of it all, I'm a coder at heart, finding joy in the elegant solutions and the intricate dance of algorithms. Whether it's frontend magic or backend wizardry, I approach each line of code with enthusiasm and dedication.",
  "As I continue to grow and evolve as a developer, my ultimate goal is to become a versatile full-stack engineer, bridging the gap between frontend and backend seamlessly. With each project, I inch closer to realizing this dream, armed with curiosity, determination, and a love for all things code.",
];

export const workExperienceTemplate = [
  {
    key: 1,
    company: "", // Add company name here
    description: [
      "", // Add description points here
    ],
    duration: "", // Add duration here
    designation: "", // Add designation here
    type: "work",
  },
];

export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["Next.JS", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/Portfolio`,
    liveURL: "https://portfolio-vert-one-79.vercel.app/",
  },
  {
    name: "Emoji-TicTacToe",
    techUsed: ["React", "TailwindCSS"],
    description:
      "Emoji TicTacToe adds a fun twist to the classic game with colorful emojis, offering single and local multiplayer modes, responsive design, and captivating animations.",
    githubLink: `${githubLink}/Emoji-TicTacToe`,
    liveURL: "https://emoji-tic-tac-toe.vercel.app/",
  },
  {
    name: "GTA-VI(Early Access)",
    techUsed: ["Python"],
    description:
      "Explore chaos in GTA VI(Early Access), a Python and Ursina-powered open-world adventure. Engage in a gripping narrative, experience dynamic gameplay, and unlock exclusive updates. Navigate the urban jungle and gear up for the thrill! ",
    githubLink: `${githubLink}/GTA-VI-Early-Access-`,
    liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "NYX",
    techUsed: ["HTML", "CSS", "JavaScript"],
    description:
      "NYX is a sleek Website Blocker that empowers users to block distracting websites for set durations, promoting productivity and focus.",
    githubLink: `${githubLink}/nyx`,
    liveURL: `${githubLink}/nyx`,
  },
];

export const educationExperience = [
  {
    key: 1,
    institution: "Kathmandu Valley College",
    graduation: "May 2023",
    degree: "XII",
    type: "education",
  },
  {
    key: 2,
    institution: "Little Angels' School",
    graduation: "Aug 2021",
    degree: "X",
    type: "education",
  },
];

export const navLinks = [
  {
    key: 1,
    link: "home",
    url: "/",
  },
  {
    key: 2,
    link: "experience",
    url: "/experience",
  },
  {
    key: 3,
    link: "projects",
    url: "/projects",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 1,
    name: "Python",
    type: "language",
    icon: PythonOriginal ? (
      <PythonOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 13,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 14,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  {
    key: 15,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
];
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/mishanpoudel/",
  github: githubLink,
};

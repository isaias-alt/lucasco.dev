import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeIcon, Link, PenLine } from "lucide-react";

export const DATA = {
  name: "Lucas Casco",
  initials: "LC",
  url: "https://lucasco.dev",
  location: "Paraguay",
  locationLink: "https://www.google.com/maps/place/paraguay",
  description: "Frontend Developer from Paraguay with +3 years of experience.",
  summary:
    "My journey in programming started in 2017, during my college years. Together with two colleagues, i developed my first video game: a 2D platform game that managed to obtain second place in a local competition. This experience was eye-opening, giving me my first idea of ​​the potential that technology had to create unique and exciting experiences. In 2018, motivated by the previous project, I created another video game again, which reaffirmed my interest in software development. However, starting college in 2019, my dedication to programming was not as deep. It was during the pandemic that I decided to take learning software development seriously, and in that process I discovered a true passion that drove me to deepen my knowledge and skills.",
  avatarUrl: "/me.webp",
  skills: [
    "React.js",
    "Next.js",
    "Astro",
    "TailwindCSS",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/notes", icon: PenLine, label: "Notes" },

  ],
  contact: {
    email: "cascolucasisaias@gmail.com",
    socials: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucascodev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/isaias-alt/",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lucascodev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "",
      start: "Jun 2021",
      end: "Present",
      description:
        "For the last few years, I have worked as a freelance frontend developer, specializing in creating frontend technologies that allow companies and businesses to showcase and market their products with exceptional effectiveness.",
    },
  ],
  projects: [
    {
      title: "CodeQuizz",
      href: "https://code-quizz.vercel.app/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Code Quizz is an interactive web application that allows users to answer code-related questions in various programming languages.",
      technologies: [
        "React.js",
        "Typescript",
        "MaterialUI",
        "Zustand",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://code-quizz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/isaias-alt/code-quizz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/code-quizz.webp",
      video: "",
    },
    {
      title: "STI UCSI",
      href: "https://sti-ucsi.vercel.app/",
      dates: "May 2024 - Jun 2024",
      active: false,
      description:
        "The website displays the Catholic University seminar. Shows the speakers, their topics and the calendar of events",
      technologies: [
        "Astro",
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sti-ucsi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/isaias-alt/sti-ucsi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sti-ucsi.webp",
      video: "",
    },
  ],
  education: [
    {
      school: "Universidad Católica Nuestra Señora de la Asunción",
      href: "https://www.universidadcatolica.edu.py/",
      degree: "Engineering Informatic",
      start: "2019",
      end: "Current",
    },
    {
      school: `Colegio Nacional "Prof.: Luciano Bordón"`,
      href: "https://datos.mec.gov.py/doc/establecimientos/0807003",
      degree: "Informatic Technician",
      start: "2016",
      end: "2019",
    }
  ],
} as const;

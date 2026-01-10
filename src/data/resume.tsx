import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeIcon } from "lucide-react";

export const URL = "https://lucasco.dev";

export const DATA = {
  name: "Lucas Casco",
  initials: "LC",
  url: URL,
  location: "Paraguay",
  locationLink: "https://www.google.com/maps/place/paraguay",
  description: "Software Developer from Paraguay with 4 years of experience.",
  summary:
    "My journey in programming started in **2017**, during my college years. Together with two colleagues, **i developed my first video game: a 2D platform game that managed to obtain second place in a local competition**. This experience was eye-opening, giving me my first idea of ​​the potential that technology had to create unique and exciting experiences. In 2018, motivated by the previous project, I created another video game again, which **reaffirmed my interest in software development**. However, starting college in 2019, my dedication to programming was not as deep. It was during the pandemic that I decided to take learning software development seriously, and in that process **I discovered a true passion that drove me to deepen my knowledge and skills**.",
  avatarUrl: "/me.webp",
  skills: [
    "Next.js",
    "React.js",
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
  ],
  contact: {
    socials: {
      LinkedIn: {
        name: "LinkedIn",
        url: `${URL}/linkedin`,
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: `${URL}/github`,
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: `${URL}/x`,
        icon: Icons.x,

        navbar: true,
      },
      Bluesky: {
        name: "Bluesky",
        url: `${URL}/bluesky`,
        icon: Icons.bluesky,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "SODEP S.A.",
      href: "https://sodep.com.py/",
      badges: [],
      location: "Remote",
      title: "Frontend Web Developer",
      logoUrl: "",
      start: "Nov 2024",
      end: "Present",
      description:
        "Currently, I work as a frontend developer, specialized in Next.js, React.js, TypeScript and TailwindCSS to create scalable and optimized interfaces. My responsibilities include implementing and improving functionalities, documenting code following good practices, complying with quality conventions, and resolving technical issues. I work as a team using Kanban methodologies and helping to accelerate the progress of the project since I joined.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "",
      start: "Jun 2021",
      end: "Nov 2024",
      description:
        "I have worked as a freelancer offering solutions to help companies and businesses display and market their products effectively.",
    },
  ],
  projects: [
    {
      title: "Creacionix AI",
      href: "https://creacionix-ai.vercel.app/",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Creacionix AI is a web application that uses generative AI to generate content based on user input.",
      technologies: [
        "Next.js",
        "Gemini API",
        "Typescript",
        "Shadcn/ui",
        "Drizzle",
        "Clerk",
        "Neon",
      ],
      links: [
        {
          type: "Website",
          href: "https://creacionix-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/isaias-alt/creacionix-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/creacionix-ai.webp",
      video: "",
    },
    {
      title: "Format-X",
      href: "https://format-your-x.vercel.app/",
      dates: "Aug 2025 - Aug 2025",
      active: true,
      description:
        "Format-X is a powerful tool for converting between different data formats: JSON, XML, YAML, CSV, and plain text.",
      technologies: [
        "Next.js",
        "Typescript",
        "Shadcn/ui",
        "Monaco Editor",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://format-your-x.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/isaias-alt/format-x",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/format-x.webp",
      video: "",
    },
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
      technologies: ["Astro", "React.js", "Typescript", "TailwindCSS"],
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
      href: "",
      degree: "Informatic Technician",
      start: "2016",
      end: "2018",
    },
  ],
} as const;

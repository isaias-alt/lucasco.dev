export type Link = { label: string; href: string };

export type ContactLink = Link & { hint: string };

export type ExperienceProject = {
  name: string;
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  intro?: string;
  projects?: ExperienceProject[];
};

export type Project = {
  name: string;
  year: string;
  tag: string;
  description: string;
  stack: string[];
  image?: string; // ruta en /public; ausente hasta que exista el asset
  imagePosition?: string; // CSS object-position; default "center"
  links: Link[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Resume = {
  name: string;
  greeting: string;
  headline: string; // puede contener un salto de línea
  summary: string;
  meta: string[]; // los tres badges del hero
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: string[];
  about: string[]; // un string por párrafo
  avatar: string;
  contactHeadline: string;
  contactSub: string;
  contact: ContactLink[];
  social: Link[]; // footer
};

export const resume: Resume = {
  name: "Lucas Casco",
  greeting: "Hey, I'm Lucas.",
  headline: "Software engineer.",
  summary:
    "I work across the stack on **banking and fintech** products in production, and I build and ship my own **SaaS** end to end. From the database to the PDF the user downloads.",
  meta: ["Paraguay / Remote", "4+ years"],
  experience: [
    {
      role: "Software Developer",
      company: "SODEP S.A.",
      period: "Nov 2024 - Present",
      intro:
        "Building production software for banking and fintech clients across the stack.",
      projects: [
        {
          name: 'Aquí Pago - "Mi Tienda" module',
          description:
            "Shipped a new Next.js module as a microfrontend inside an existing PHP app, with a shared session between both so users move between them without logging in again. Built stock management and payment collection.",
        },
        {
          name: "Banco Basa - Banking CRM",
          description:
            "Client onboarding, account creation and card issuance. Built a Fastify proxy between the CRM and the bank's APIs that handles authentication and the encryption/decryption layer for requests and responses, and used Redis idempotency keys so critical onboarding flows are safe to retry.",
        },
        {
          name: "Banco Interfisa - Business Banking Web",
          description:
            "Frontend for high-complexity business banking flows: loan payments, receipt history and supplier management. Delivered on the committed timeline.",
        },
      ],
    },
    {
      role: "Fullstack Developer - Freelance",
      company: "Independent",
      period: "2021 - 2024",
      intro:
        "Web solutions for clients across different domains, under NDA. React, Next.js and Node.js.",
    },
  ],
  projects: [
    {
      name: "NutriOne",
      year: "2024 - present",
      tag: "Clinical SaaS · built solo, end to end",
      description:
        "Patient records, anthropometric tracking, meal-plan builder and PDF export for nutrition professionals. I own every layer: data model, API, interface, deploy.",
      stack: ["Next.js", "Nest.js", "PostgreSQL", "Prisma"],
      image: "/projects/nutrione.webp",
      links: [{ label: "Website", href: "https://nutrione.com.py" }],
    },
    {
      name: "socratic-duck",
      year: "2025",
      tag: "Claude Code skill · published",
      description:
        "An agent skill that pressure-tests architectural decisions before you commit to them, through Socratic questioning, and writes a structured decision log.",
      stack: ["Claude Code", "skills.sh"],
      image: "/projects/socratic-duck.webp",
      links: [
        { label: "Website", href: "https://skills.lucasco.dev" },
        { label: "Source", href: "https://github.com/isaias-alt/skills" },
      ],
    },
    {
      name: "Format-X",
      year: "2025",
      tag: "Developer tool",
      description:
        "Convert between JSON, XML, YAML, CSV and plain text in the browser, with a live editor.",
      stack: ["Next.js", "Monaco", "TypeScript"],
      image: "/projects/format-x.webp",
      imagePosition: "20% center",
      links: [
        { label: "Demo", href: "https://format-your-x.vercel.app/" },
        { label: "Source", href: "https://github.com/isaias-alt/format-x" },
      ],
    },
    {
      name: "Creacionix AI",
      year: "2024",
      tag: "Generative AI app",
      description:
        "Content generation from user input, built on the Gemini API.",
      stack: ["Next.js", "Gemini", "Drizzle"],
      image: "/projects/creacionix-ai.webp",
      links: [
        { label: "Demo", href: "https://creacionix-ai.vercel.app/" },
        {
          label: "Source",
          href: "https://github.com/isaias-alt/creacionix-ai",
        },
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Católica Ntra. Sra. de la Asunción",
      degree: "Computer Engineering",
      period: "2019 - present",
    },
    {
      institution: 'Colegio Nacional "Prof. Luciano Bordón"',
      degree: "Computer Technician",
      period: "2016 - 2018",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Astro",
    "Node.js",
    "Nest.js",
    "Fastify",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Tailwind CSS",
    "Docker",
  ],
  about: [
    "I got into programming in **2017**, building a 2D platformer with two classmates that took **second place at a national contest**. That was the moment it clicked: software could make things people actually want to use.",
    "I took it seriously during the pandemic and haven't stopped since. Outside the editor I'm self-taught in philosophy and pulled toward cinema. I think about systems the way you'd think about a cut: get the structure right first, then worry about the rhythm.",
  ],
  avatar: "/me.webp",
  contactHeadline: "Let's talk.",
  contactSub:
    "Open to mid-level fullstack roles, remote. The fastest way to reach me is a direct message.",
  contact: [
    {
      label: "LinkedIn",
      href: "https://lucasco.dev/linkedin",
      hint: "lucascodev",
    },
    {
      label: "GitHub",
      href: "https://github.com/isaias-alt",
      hint: "isaias-alt",
    },
    { label: "X", href: "https://lucasco.dev/x", hint: "@lucascodev" },
    {
      label: "Email",
      href: "mailto:cascolucasisaias@gmail.com",
      hint: "say hi",
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://lucasco.dev/linkedin" },
    { label: "GitHub", href: "https://github.com/isaias-alt" },
    { label: "X", href: "https://lucasco.dev/x" },
  ],
};

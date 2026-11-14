import type { Locale } from "@/lib/i18n";

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

const skills = [
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
];

const avatar = "/me.webp";

const social: Link[] = [
  { label: "LinkedIn", href: "https://lucasco.dev/linkedin" },
  { label: "GitHub", href: "https://github.com/isaias-alt" },
  { label: "X", href: "https://lucasco.dev/x" },
];

const contactHrefs = {
  linkedin: "https://lucasco.dev/linkedin",
  github: "https://github.com/isaias-alt",
  x: "https://lucasco.dev/x",
  email: "mailto:cascolucasisaias@gmail.com",
};

const en: Resume = {
  name: "Lucas Casco",
  greeting: "Hey, I'm Lucas.",
  headline: "Software engineer.",
  summary:
    "I design and build APIs, integrate existing systems, and develop user interfaces and business workflows for banking and fintech products. I also build and ship my own software products end to end.",
  meta: ["Paraguay / Remote", "5 years"],
  experience: [
    {
      role: "Software Engineer",
      company: "SODEP S.A.",
      period: "Nov 2024 - Jul 2026",
      intro:
        "Building production software for banking and fintech clients.",
      projects: [
        {
          name: 'Aquí Pago - "Mi Tienda" module',
          description:
            "Built the shared session between a PHP app and a new Next.js microfrontend, integrating with the existing middleware so users move between both without logging in again. Also shipped stock management and payment collection.",
        },
        {
          name: "Banco Basa - Banking CRM",
          description:
            "Added Redis idempotency keys so critical onboarding flows are safe to retry, and built onboarding, account creation and card issuance on top. Designed a Fastify proxy between the CRM and the bank's APIs: authentication and the encryption/decryption layer for every request and response.",
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
        "Web solutions for clients across different domains, under NDA. Integrated payment gateways (Stripe, Bancard, Pagopar) end to end: checkout flows and payment confirmation webhooks, with React, Next.js and Node.js.",
    },
  ],
  projects: [
    {
      name: "NutriOne",
      year: "2024 - present",
      tag: "Clinical SaaS · co-created, backend built alone",
      description:
        "Co-created the product and designed and built the API alone: Nest.js, Prisma and Redis for patient records, anthropometric tracking, meal plans and PDF export. Also built the MVP frontend.",
      stack: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Prisma"],
      image: "/projects/nutrione.webp",
      links: [{ label: "Website", href: "https://nutrione.com.py" }],
    },
    {
      name: "Vexillum",
      year: "2026",
      tag: "Developer tool · AI agent orchestration",
      description:
        "A Go CLI that orchestrates coding agents from the terminal: a commander dispatches soldiers into isolated git worktrees, and a sentinel wakes it only when one settles. I use it to develop NutriOne's current iteration.",
      stack: ["Go", "Claude Code"],
      image: "/projects/vexillum.webp",
      links: [
        { label: "Website", href: "https://vx.lucasco.dev" },
        { label: "Source", href: "https://github.com/isaias-alt/vexillum" },
      ],
    },
    {
      name: "Creacionix AI",
      year: "2024",
      tag: "Generative AI app · open source",
      description:
        "Text generation platform with 25+ templates built on the Google Gemini API. Designed, built and deployed solo; open source on GitHub.",
      stack: ["Next.js", "Gemini", "Clerk", "Drizzle"],
      image: "/projects/creacionix-ai.webp",
      links: [
        { label: "Demo", href: "https://creacionixai.lucasco.dev" },
        {
          label: "Source",
          href: "https://github.com/isaias-alt/creacionix-ai",
        },
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
  skills,
  about: [
    "I got into programming in **2017**, building a 2D platformer with two classmates that took **second place at a national contest**. That was the moment it clicked: software could make things people actually want to use.",
    "I took it seriously during the pandemic and haven't stopped since. Outside the editor I'm self-taught in philosophy and pulled toward cinema. I think about systems the way you'd think about a cut: get the structure right first, then worry about the rhythm.",
  ],
  avatar,
  contactHeadline: "Let's talk.",
  contactSub:
    "Open to mid-level fullstack roles, remote. The fastest way to reach me is a direct message.",
  contact: [
    {
      label: "LinkedIn",
      href: contactHrefs.linkedin,
      hint: "lucascodev",
    },
    {
      label: "GitHub",
      href: contactHrefs.github,
      hint: "isaias-alt",
    },
    { label: "X", href: contactHrefs.x, hint: "@lucascodev" },
    {
      label: "Email",
      href: contactHrefs.email,
      hint: "say hi",
    },
  ],
  social,
};

const es: Resume = {
  name: "Lucas Casco",
  greeting: "Hola, soy Lucas.",
  headline: "Ingeniero de software.",
  summary:
    "Diseño e implemento APIs, integro sistemas existentes y desarrollo interfaces de usuario y flujos de negocio para productos de banca y fintech. También construyo y despliego mis propios productos de software de punta a punta.",
  meta: ["Paraguay / Remoto", "5 años"],
  experience: [
    {
      role: "Ingeniero de Software",
      company: "SODEP S.A.",
      period: "Nov 2024 - Jul 2026",
      intro:
        "Desarrollo software en producción para clientes de banca y fintech.",
      projects: [
        {
          name: 'Aquí Pago - módulo "Mi Tienda"',
          description:
            "Construí la sesión compartida entre una aplicación PHP y un microfrontend nuevo en Next.js, integrándome con el middleware existente para que el usuario pase de uno a otro sin volver a iniciar sesión. También desarrollé la gestión de stock y los cobros.",
        },
        {
          name: "Banco Basa - CRM bancario",
          description:
            "Sumé idempotency keys en Redis para que los flujos críticos de alta sean seguros de reintentar, y construí sobre eso el alta de clientes, la apertura de cuentas y la emisión de tarjetas. Diseñé un proxy en Fastify entre el CRM y las APIs del banco: autenticación y la capa de cifrado y descifrado de cada request y response.",
        },
        {
          name: "Banco Interfisa - Banca Empresa Web",
          description:
            "Frontend de flujos de alta complejidad en banca empresarial: pagos de préstamos, historial de comprobantes y gestión de proveedores. Entregado en el plazo comprometido.",
        },
      ],
    },
    {
      role: "Desarrollador Fullstack - Freelance",
      company: "Independiente",
      period: "2021 - 2024",
      intro:
        "Soluciones web para clientes de distintos dominios, bajo NDA. Integré pasarelas de pago (Stripe, Bancard, Pagopar) de punta a punta: flujos de checkout y webhooks de confirmación de pago, con React, Next.js y Node.js.",
    },
  ],
  projects: [
    {
      name: "NutriOne",
      year: "2024 - actualidad",
      tag: "SaaS clínico · co-creado, backend en solitario",
      description:
        "Co-creé el producto y diseñé y construí la API en solitario: Nest.js, Prisma y Redis para historia clínica, seguimiento antropométrico, planes nutricionales y exportación a PDF. También desarrollé el frontend del MVP.",
      stack: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Prisma"],
      image: "/projects/nutrione.webp",
      links: [{ label: "Sitio", href: "https://nutrione.com.py" }],
    },
    {
      name: "Vexillum",
      year: "2026",
      tag: "Herramienta de desarrollo · orquestación de agentes de IA",
      description:
        "CLI en Go que orquesta agentes de código desde la terminal: un comandante manda soldados a worktrees aislados y un centinela lo despierta solo cuando uno termina. Es la herramienta con la que desarrollo la iteración actual de NutriOne.",
      stack: ["Go", "Claude Code"],
      image: "/projects/vexillum.webp",
      links: [
        { label: "Sitio", href: "https://vx.lucasco.dev" },
        { label: "Código", href: "https://github.com/isaias-alt/vexillum" },
      ],
    },
    {
      name: "Creacionix AI",
      year: "2024",
      tag: "App de IA generativa · código abierto",
      description:
        "Plataforma de generación de texto con 25+ plantillas sobre la API de Google Gemini. Diseñada, construida y desplegada en solitario; código abierto en GitHub.",
      stack: ["Next.js", "Gemini", "Clerk", "Drizzle"],
      image: "/projects/creacionix-ai.webp",
      links: [
        { label: "Sitio", href: "https://creacionixai.lucasco.dev" },
        {
          label: "Código",
          href: "https://github.com/isaias-alt/creacionix-ai",
        },
      ],
    },
    {
      name: "Format-X",
      year: "2025",
      tag: "Herramienta de desarrollo",
      description:
        "Conversión entre JSON, XML, YAML, CSV y texto plano en el navegador, con editor en vivo.",
      stack: ["Next.js", "Monaco", "TypeScript"],
      image: "/projects/format-x.webp",
      imagePosition: "20% center",
      links: [
        { label: "Demo", href: "https://format-your-x.vercel.app/" },
        { label: "Código", href: "https://github.com/isaias-alt/format-x" },
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Católica Ntra. Sra. de la Asunción",
      degree: "Ingeniería Informática",
      period: "2019 - actualidad",
    },
    {
      institution: 'Colegio Nacional "Prof. Luciano Bordón"',
      degree: "Técnico en Informática",
      period: "2016 - 2018",
    },
  ],
  skills,
  about: [
    "Empecé a programar en **2017**, con un platformer 2D que hicimos con dos compañeros y que salió **segundo en un concurso nacional**. Ahí fue el clic: el software podía construir cosas que la gente realmente quiere usar.",
    "Me lo tomé en serio durante la pandemia y no paré más. Fuera del editor soy autodidacta en filosofía y me tira el cine. Pienso los sistemas como se piensa un montaje: primero la estructura, después el ritmo.",
  ],
  avatar,
  contactHeadline: "Hablemos.",
  contactSub:
    "Abierto a roles fullstack semi-senior, remoto. La forma más rápida de contactarme es un mensaje directo.",
  contact: [
    {
      label: "LinkedIn",
      href: contactHrefs.linkedin,
      hint: "lucascodev",
    },
    {
      label: "GitHub",
      href: contactHrefs.github,
      hint: "isaias-alt",
    },
    { label: "X", href: contactHrefs.x, hint: "@lucascodev" },
    {
      label: "Email",
      href: contactHrefs.email,
      hint: "escríbeme",
    },
  ],
  social,
};

export const resumes: Record<Locale, Resume> = { en, es };

export function getResume(locale: Locale): Resume {
  return resumes[locale];
}

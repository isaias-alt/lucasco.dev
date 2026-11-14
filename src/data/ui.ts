import type { Locale } from "@/lib/i18n";

export type UiStrings = {
  nav: {
    experience: string;
    projects: string;
    about: string;
    contact: string;
    blog: string;
  };
  heroCv: string;
  languageAria: string;
  languageNames: Record<Locale, string>;
  sections: {
    experience: string;
    projects: string;
    education: string;
    skills: string;
    about: string;
    contact: string;
  };
  copied: string;
};

export const ui: Record<Locale, UiStrings> = {
  en: {
    nav: {
      experience: "experience",
      projects: "projects",
      about: "about",
      contact: "contact",
      blog: "blog",
    },
    heroCv: "view cv",
    languageAria: "Language",
    languageNames: { en: "English", es: "Spanish" },
    sections: {
      experience: "Work Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      about: "About",
      contact: "Get in Touch",
    },
    copied: "copied",
  },
  es: {
    nav: {
      experience: "experiencia",
      projects: "proyectos",
      about: "sobre mí",
      contact: "contacto",
      blog: "blog",
    },
    heroCv: "ver cv",
    languageAria: "Idioma",
    languageNames: { en: "Inglés", es: "Español" },
    sections: {
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      skills: "Stack técnico",
      about: "Sobre mí",
      contact: "Contacto",
    },
    copied: "copiado",
  },
};

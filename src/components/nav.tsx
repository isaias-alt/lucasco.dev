import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import { cvHref, type Locale } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

const navLinkClassName =
  "font-mono text-[13px] text-fog transition-colors duration-150 hover:text-bone";

export function Nav({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];

  const navLinks = [
    { href: "#experience", label: strings.nav.experience },
    { href: "#projects", label: strings.nav.projects },
    { href: "#about", label: strings.nav.about },
    { href: "#contact", label: strings.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[780px] items-center justify-between gap-4 px-6 py-3.5">
        <span className="whitespace-nowrap font-mono text-sm font-medium text-bone">
          {resume.name}
        </span>
        <div className="flex items-center gap-4">
          <div className="hidden gap-5 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClassName}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://blog.lucasco.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline ${navLinkClassName}`}
          >
            {strings.nav.blog}
          </a>
          <a
            href={cvHref(locale)}
            className="rounded-[3px] border border-line px-2.5 py-[5px] font-mono text-[11px] text-bone transition-colors duration-150 hover:border-steel-dim"
          >
            {strings.nav.cv}
          </a>
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </nav>
  );
}

import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

const footerLinkClassName =
  "font-mono text-[11px] text-fog transition-colors duration-150 hover:text-bone";

export function Footer({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];

  return (
    <footer className="border-t border-line px-0 py-6 pb-12">
      <div className="mx-auto flex max-w-[780px] flex-wrap items-center justify-between gap-3 px-6">
        <span className="font-mono text-[11px] text-fog">
          {resume.name} · 2026
        </span>
        <a
          href="https://blog.lucasco.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={footerLinkClassName}
        >
          {strings.nav.blog}
        </a>
      </div>
    </footer>
  );
}

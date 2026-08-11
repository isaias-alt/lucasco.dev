import { resume } from "@/data/resume";

const footerLinkClassName =
  "font-mono text-[11px] text-fog transition-colors duration-150 hover:text-bone";

export function Footer() {
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
          blog
        </a>
      </div>
    </footer>
  );
}

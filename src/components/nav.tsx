import { resume } from "@/data/resume";

const NAV_LINKS = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

const navLinkClassName =
  "font-mono text-[13px] text-fog transition-colors duration-150 hover:text-bone";

export function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[780px] items-center justify-between px-6 py-3.5">
        <span className="font-mono text-sm font-medium text-bone">
          {resume.name}
        </span>
        <div className="flex items-center gap-5">
          <div className="hidden gap-5 sm:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClassName}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://blog.lucasco.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClassName}
          >
            blog
          </a>
        </div>
      </div>
    </nav>
  );
}

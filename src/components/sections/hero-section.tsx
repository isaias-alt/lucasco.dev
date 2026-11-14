import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import { cvHref, type Locale } from "@/lib/i18n";
import { renderWithBold } from "@/lib/render-with-bold";
import { renderWithAccentPeriod } from "@/lib/render-with-accent-period";

function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];
  const headlineLines = resume.headline.split("\n");

  return (
    <header className="hero-header pb-[clamp(48px,8vh,72px)] pt-[clamp(72px,14vh,130px)]">
      <div className="mb-[18px] font-mono text-sm text-steel">
        {resume.greeting}
      </div>
      <h1 className="hero-title mb-6 font-display font-extrabold leading-[0.98] tracking-[-0.04em] text-bone">
        {headlineLines.map((line, i) => (
          <span key={line}>
            {renderWithAccentPeriod(line)}
            {i < headlineLines.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="max-w-[46ch] text-[17px] text-fog">
        {renderWithBold(resume.summary)}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        {resume.meta.map((item) => (
          <span
            key={item}
            className="flex items-center gap-[7px] font-mono text-xs text-fog"
          >
            <span
              aria-hidden="true"
              className="inline-block h-[5px] w-[5px] rounded-full bg-steel"
            />
            {item}
          </span>
        ))}
        <a
          href={cvHref(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-bone underline decoration-steel-dim underline-offset-[3px] transition-colors duration-150 hover:decoration-bone"
        >
          {strings.heroCv}
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}

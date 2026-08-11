import { resume } from "@/data/resume";
import { renderWithBold } from "@/lib/render-with-bold";

export function HeroSection() {
  const headlineLines = resume.headline.split("\n");

  return (
    <header className="pb-[clamp(48px,8vh,72px)] pt-[clamp(72px,14vh,130px)]">
      <div className="mb-[18px] font-mono text-sm text-steel">
        {resume.greeting}
      </div>
      <h1 className="mb-6 font-display text-[clamp(40px,8vw,72px)] font-extrabold leading-[0.98] tracking-[-0.04em] text-bone">
        {headlineLines.map((line, i) => (
          <span key={line}>
            {line}
            {i < headlineLines.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="max-w-[46ch] text-[17px] text-fog">
        {renderWithBold(resume.summary)}
      </p>
      <div className="mt-7 flex flex-wrap gap-5">
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
      </div>
    </header>
  );
}

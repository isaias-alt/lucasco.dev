import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";
import { renderWithBold } from "@/lib/render-with-bold";

export function AboutSection() {
  return (
    <section id="about" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="05" title="About" />
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-[130px_1fr] sm:gap-8">
        <div className="flex h-[130px] w-[130px] items-center justify-center rounded-[3px] border border-line bg-surface-2 p-2 text-center font-mono text-[10px] text-steel-dim">
          [ PHOTO ]
        </div>
        <div>
          {resume.about.map((paragraph, i) => (
            <p
              key={i}
              className="mb-3.5 max-w-[60ch] text-[15px] leading-[1.7] text-fog last:mb-0"
            >
              {renderWithBold(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";

export function EducationSection() {
  return (
    <section id="education" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="03" title="Education" />
      {resume.education.map((edu) => (
        <div
          key={edu.institution}
          className="flex flex-wrap items-baseline justify-between gap-1.5 border-b border-line py-4 last:border-b-0"
        >
          <div>
            <div className="font-display text-base font-semibold text-bone">
              {edu.institution}
            </div>
            <div className="mt-0.5 text-sm text-fog">{edu.degree}</div>
          </div>
          <span className="font-mono text-xs text-fog">{edu.period}</span>
        </div>
      ))}
    </section>
  );
}

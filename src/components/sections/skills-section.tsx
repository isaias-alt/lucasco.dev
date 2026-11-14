import { SectionLabel } from "@/components/section-label";
import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function SkillsSection({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];

  return (
    <section id="skills" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="04" title={strings.sections.skills} />
      <div className="flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-sm border border-line bg-surface px-3.5 py-2 font-mono text-[13px] text-bone transition-colors duration-150 hover:border-steel-dim"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

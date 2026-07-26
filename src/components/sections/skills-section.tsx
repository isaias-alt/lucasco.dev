import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";

export function SkillsSection() {
  return (
    <section id="skills" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="04" title="Skills" />
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

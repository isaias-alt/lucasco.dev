import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";

export function WorkSection() {
  return (
    <section id="experience" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="01" title="Work Experience" />
      {resume.experience.map((job) => (
        <div
          key={job.company}
          className="relative mb-9 border-l border-line pl-6 last:mb-0 before:absolute before:-left-[4px] before:top-[6px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-steel before:content-['']"
        >
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-1.5">
            <span className="font-display text-[19px] font-bold text-bone">
              {job.role}
            </span>
            <span className="font-mono text-xs text-fog">{job.period}</span>
          </div>
          <div className="mb-3.5 font-mono text-[13px] text-steel">
            {job.company}
          </div>
          {job.intro && (
            <p className="mb-4 max-w-[60ch] text-[15px] text-fog">
              {job.intro}
            </p>
          )}
          {job.projects?.map((project) => (
            <div
              key={project.name}
              className="mb-3 border-l border-line pl-4 last:mb-0"
            >
              <div className="font-mono text-[13px] font-medium text-bone">
                {project.name}
              </div>
              <div className="mt-[3px] max-w-[58ch] text-sm text-fog">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

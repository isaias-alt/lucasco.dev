import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import type { Locale } from "@/lib/i18n";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];

  return (
    <section id="projects" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="02" title={strings.sections.projects} />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line">
        {resume.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

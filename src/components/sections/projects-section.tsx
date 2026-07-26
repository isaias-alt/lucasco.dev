import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="02" title="Projects" />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line">
        {resume.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

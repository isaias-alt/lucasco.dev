import type { Project } from "@/data/resume";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 bg-bg sm:grid-cols-[200px_1fr]">
      <div className="flex aspect-video items-center justify-center border-b border-line bg-surface-2 p-2.5 text-center font-mono text-[11px] text-steel-dim sm:aspect-[16/10] sm:border-b-0 sm:border-r">
        [ SCREENSHOT {project.name} ]
      </div>
      <div className="flex flex-col px-6 py-[22px]">
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <span className="font-display text-[21px] font-bold text-bone">
            {project.name}
          </span>
          <span className="whitespace-nowrap font-mono text-[11px] text-fog">
            {project.year}
          </span>
        </div>
        <div className="mb-2.5 font-mono text-xs text-steel">
          {project.tag}
        </div>
        <p className="max-w-[56ch] flex-1 text-sm leading-[1.6] text-fog">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-line px-2 py-[3px] font-mono text-[10px] text-fog"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3.5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-steel-dim pb-0.5 font-mono text-xs text-bone transition-colors duration-150 hover:border-bone"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

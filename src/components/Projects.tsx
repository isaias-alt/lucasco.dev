import { PROJECTS } from "@/data/projects"
import ArrowRight from "./icons/ArrowRight"
import ProjectCard from "./ProjectCard"
import Link from "next/link"

const Projects = () => {
  return (
    <section className="pt-14">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Projects</h2>
        <Link
          href="/projects"
          className="group flex items-center space-x-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 duration-100 hover:text-black dark:hover:text-white"
        >
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            More
          </span>
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div role="contentinfo" className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2">
        {
          PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              url={project.url}
              githubUrl={project.githubUrl}
              image={project.image}
              priority={index === 0}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects
import { PROJECTS } from "@/data/projects"
import ArrowRight from "./icons/ArrowRight"
import Image from "next/image"
import ArrowRightUp from "./icons/ArrowRightUp"
import GitHubCode from "./icons/GitHubCode"

const Projects = () => {
  return (
    <section className="pt-14">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Projects</h2>
        <a
          href="/projects"
          className="group flex items-center space-x-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 duration-100 hover:text-black dark:hover:text-white"
        >
          <span
            className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100"
          >
            More
          </span>
          <span
            className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100"
          >
            <ArrowRight />
          </span>
        </a>
      </div>

      <div role="contentinfo" className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2">
        {
          PROJECTS.map(({ title, description, tags, url, githubUrl, image }, index) => (
            <article key={index} className="relative flex flex-col rounded-md border border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800">
              <div className="w-full">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={500}
                  className="object-cover w-full h-48 rounded-md transition duration-500 sm:h-full md:scale-80 md:group-hover:scale-90"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between space-x-[10px]">
                <a
                  href={url}
                  target="_blank"
                  className="text-xl pt-4 group flex items-center justify-between font-medium decoration-neutral-600 decoration-dotted underline-offset-[5px] hover:underline"
                >
                  {title}
                  <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[1.5px] duration-200 m-1">
                    <ArrowRightUp className="w-4 h-4" />
                  </span>
                </a>
                <a className="pt-4" href={githubUrl} target="_blank">
                  <GitHubCode />
                </a>
              </div>

              <div className="flex flex-wrap mt-2 space-x-2">
                {tags?.map((tag, index) => (
                  <span key={index} className="text-xs py-1 px-2 cursor-default rounded-md border border-neutral-300 bg-neutral-200/50 font-mono font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-2 opacity-80 text-prety">{description}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
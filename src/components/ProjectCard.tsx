"use client"

import Image from "next/image";
import ArrowRightUp from "./icons/ArrowRightUp";
import GitHubCode from "./icons/GitHubCode";
import useProjectCardHover from "@/hooks/useProjectCardHover";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  githubUrl?: string;
  image: string;
  priority: boolean;
}

const ProjectCard = ({ title, description, tags, url, githubUrl, image, priority }: ProjectCardProps) => {
  const { divRef, position, opacity } = useProjectCardHover()

  return (
    <div role="contentinfo" ref={divRef}>
      <article className="relative flex flex-col rounded-md border border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800">
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity: opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 60%)`,
          }}
        />
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            width={300}
            height={500}
            className="object-cover w-full h-48 rounded-md transition duration-500 sm:h-full md:scale-80 md:group-hover:scale-90"
            priority={priority}
          />
        </div>
        <div className="flex items-center justify-between space-x-[10px]">
          {url && (
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
          )}
          {githubUrl && (
            <a className="pt-4" href={githubUrl} target="_blank">
              <GitHubCode />
            </a>
          )}
        </div>

        {tags && (
          <div className="flex flex-wrap mt-2 space-x-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs py-1 px-2 cursor-default rounded-md border border-neutral-300 bg-neutral-200/50 font-mono font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="mt-2 opacity-80 text-prety">{description}</p>
      </article>
    </div>
  );
};

export default ProjectCard;

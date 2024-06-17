import ArrowRightUp from "./icons/ArrowRightUp"

interface Props {
  date: string
  role: string
  aboutRole: string
  company?: string
  companyUrl?: string
}

const ExperienceItem: React.FC<Props> = ({ date, role, aboutRole, company, companyUrl }) => {
  return (
    <li className="ms-5 mt-1">
      <div
        className="absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800"
      >
      </div>
      <time
        className="mb-2 font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400"
      >
        {date}
      </time>
      <div className="mt-2 flex flex-col space-y-0.5">
        <h3
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {role}
        </h3>
        {
          company && (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener"
              className="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
            >
              <span>{company}</span>
              <ArrowRightUp className="w-4 h-4 ml-1 duration-150 group-hover:translate-x-[1.5px]" />
            </a>
          )
        }
      </div>
      <p className="mt-3 text-pretty text-sm dark:text-neutral-400">
        {aboutRole}
      </p>
    </li>
  )
}

export default ExperienceItem
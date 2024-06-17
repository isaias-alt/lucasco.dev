import ExperienceItem from './ExperienceItem'
import { EXPERIENCE } from '@/data/experience'


const Experience = () => {
  return (
    <section className="flex flex-col space-y-4 py-14">

      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-medium">Experience</h2>
      </div>

      <ol className="relative space-y-6 border-s-2 border-neutral-300 dark:border-neutral-800">
        {
          EXPERIENCE.map((experience) => (
            <ExperienceItem 
              key={experience.role} 
              date={experience.date} 
              role={experience.role} 
              aboutRole={experience.aboutRole} 
            />
          ))
        }
      </ol>

    </section>
  )
}

export default Experience
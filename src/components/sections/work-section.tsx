import BlurFade from "@/components/magicui/blur-fade";
import { WorkCard } from "@/components/work-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <WorkCard
              key={work.company}
              position={work.title}
              company={work.company}
              href={work.href}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

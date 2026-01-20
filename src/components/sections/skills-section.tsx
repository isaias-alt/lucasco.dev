import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY, getBlurFadeDelay } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={getBlurFadeDelay(10, id)}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

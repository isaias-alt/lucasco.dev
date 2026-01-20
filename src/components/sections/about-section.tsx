import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-2xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-base dark:prose-invert prose-strong:text-blue-500">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}

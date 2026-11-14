import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { getResume } from "@/data/resume";
import { ui } from "@/data/ui";
import type { Locale } from "@/lib/i18n";
import { renderWithBold } from "@/lib/render-with-bold";

export function AboutSection({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const strings = ui[locale];

  return (
    <section id="about" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="05" title={strings.sections.about} />
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-[130px_1fr] sm:gap-8">
        <div className="relative h-[130px] w-[130px] overflow-hidden rounded-[3px] border border-line bg-surface-2">
          <Image
            src={resume.avatar}
            alt={resume.name}
            width={130}
            height={130}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          {resume.about.map((paragraph, i) => (
            <p
              key={i}
              className="mb-3.5 max-w-[60ch] text-[15px] leading-[1.7] text-fog last:mb-0"
            >
              {renderWithBold(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

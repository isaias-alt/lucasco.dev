import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkSection } from "@/components/sections/work-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { resolveLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);

  if (!locale) notFound();

  return (
    <main className="flex min-h-[100dvh] flex-col">
      <HeroSection locale={locale} />
      <WorkSection locale={locale} />
      <ProjectsSection locale={locale} />
      <EducationSection locale={locale} />
      <SkillsSection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}

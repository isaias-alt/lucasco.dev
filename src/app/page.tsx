import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkSection } from "@/components/sections/work-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

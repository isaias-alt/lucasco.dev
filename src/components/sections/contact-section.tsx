import { SectionLabel } from "@/components/section-label";
import { resume } from "@/data/resume";

export function ContactSection() {
  return (
    <section id="contact" className="py-[clamp(48px,8vh,80px)]">
      <SectionLabel index="06" title="Get in Touch" />
      <h3 className="mb-3.5 font-display text-[clamp(28px,5vw,44px)] font-extrabold tracking-[-0.03em] text-bone">
        {resume.contactHeadline}
      </h3>
      <p className="mb-7 max-w-[48ch] text-base text-fog">
        {resume.contactSub}
      </p>
      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
        {resume.contact.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between gap-4 border-b border-line py-4 pr-5 font-mono text-sm text-bone transition-colors duration-150 hover:text-steel"
            >
              {link.label}
              <span className="text-fog">{link.hint}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

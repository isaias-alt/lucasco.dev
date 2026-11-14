import Link from "next/link";
import { ui } from "@/data/ui";
import {
  localeHref,
  localeLabels,
  locales,
  type Locale,
} from "@/lib/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  return (
    <div
      role="group"
      aria-label={ui[locale].languageAria}
      className="inline-flex items-center divide-x divide-line overflow-hidden rounded-[3px] border border-line font-mono text-[11px]"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={localeHref(item)}
            hrefLang={item}
            aria-current={active ? "true" : undefined}
            aria-label={ui[locale].languageNames[item]}
            className={
              active
                ? "bg-surface-2 px-2.5 py-[5px] text-bone"
                : "px-2.5 py-[5px] text-fog transition-colors duration-150 hover:text-bone"
            }
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}

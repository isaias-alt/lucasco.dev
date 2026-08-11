"use client";

import { useState, type MouseEvent } from "react";
import { openEmailCompose } from "@/lib/open-email-compose";

const linkClassName =
  "flex items-center justify-between gap-4 border-b border-line py-4 pr-5 font-mono text-sm text-bone transition-colors duration-150 hover:text-steel";

export function EmailContactLink({
  email,
  label,
  hint,
}: {
  email: string;
  label: string;
  hint: string;
}) {
  const [copied, setCopied] = useState(false);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    openEmailCompose(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={linkClassName}>
      {label}
      <span className="text-fog">{copied ? "copied" : hint}</span>
    </a>
  );
}

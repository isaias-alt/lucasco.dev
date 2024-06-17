import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import { ComponentType } from "react";

interface SocialLink {
  name: string
  url: string
  icon: ComponentType
}

export const SOCIALS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lucascodev',
    icon: LinkedIn
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/lucascodev',
    icon: Twitter
  },
  {
    name: 'GitHub',
    url: 'https://github.com/isaias-alt',
    icon: GitHub
  }
]
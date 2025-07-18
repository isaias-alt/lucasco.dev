# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Lucas Casco's personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The site features a blog system with MDX content, project showcase, and modern animations.

## Common Commands

```bash
# Development
pnpm dev                   # Start development server on localhost:3000
pnpm build                 # Build for production
pnpm start                 # Start production server
pnpm lint                  # Run ESLint
pnpm type-check            # Run TypeScript type checking
```

## Architecture

### Core Technologies
- **Next.js 15.1.4** with App Router for routing and SSR
- **TypeScript** with strict mode for type safety
- **Tailwind CSS** with custom design system using CSS variables
- **shadcn/ui** components built on Radix UI primitives
- **Framer Motion** for animations and transitions

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
  - `src/components/ui/` - shadcn/ui base components
  - `src/components/magicui/` - Custom animation components
- `src/data/` - Static data (resume, projects) as TypeScript modules
- `src/lib/` - Utility functions and helpers
- `content/` - MDX blog posts with frontmatter
- `public/` - Static assets

### Import Aliases
Use `@/` for imports from the `src/` directory:
```typescript
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"
```

## Content Management

### Blog Posts
- Located in `content/[slug]/index.mdx`
- Use frontmatter for metadata (title, publishedAt, summary, etc.)
- Syntax highlighting via Shiki
- Cached using React's `cache()` function

### Static Data
- Resume/profile data in `src/data/resume.tsx` as typed constants
- Use `as const` assertions for immutable data
- Export named constants for reusability

## Component Patterns

### shadcn/ui Components
- Consistent component API with variants using `class-variance-authority`
- Compound components (Card.Header, Card.Content, Card.Footer)
- Dark/light theme support via CSS variables

### Animation Patterns
- Use `BlurFade` component for consistent enter animations
- Stagger animations with incremental `delay` props
- `useInView` hook for scroll-triggered animations

### Styling Conventions
- Tailwind utility classes for styling
- CSS custom properties for theming (`--primary`, `--muted`, etc.)
- `cn()` utility for conditional class merging

## Data Fetching

### Blog System
```typescript
// Get all posts (cached)
const posts = await getBlogPosts()

// Get single post by slug
const post = await getBlogPosts().find(post => post.slug === slug)
```

## Development Notes

- TypeScript strict mode is enabled
- Console statements are removed in production builds
- Package imports are optimized for `lucide-react` and `framer-motion`
- Uses Vercel for deployment with custom redirects configured
- No testing framework currently configured
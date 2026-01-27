import { Icons } from "./icons";

export function EditOnGitHub({ slug }: { slug: string }) {
  return (
    <a
      href={`https://github.com/isaias-alt/lucasco.dev/blob/main/content/${slug}/index.mdx`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
    >
      <Icons.github className="size-4" />
      Edit on GitHub
    </a>
  );
}

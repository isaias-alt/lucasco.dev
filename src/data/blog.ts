import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const getMDXDirectories = (dir: string) => {
  return fs
    .readdirSync(dir)
    .filter((subdir) => fs.statSync(path.join(dir, subdir)).isDirectory());
};

export const markdownToHTML = async (markdown: string) => {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "github-dark",
      },
      defaultLang: "markdown",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
};

export const getPost = cache(async (slug: string) => {
  try {
    const filePath = path.join("content", slug, "index.mdx");
    const source = await fs.promises.readFile(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);

    return { source: content, metadata, slug };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
});

export const getAllPosts = (dir: string) => {
  const mdxDirs = getMDXDirectories(dir);
  return Promise.all(
    mdxDirs.map(async (slug: string) => {
      const post = await getPost(slug);
      if (!post) return null;
      const { metadata, source } = post;
      return {
        metadata,
        slug,
        source,
      };
    })
  );
};

export const getBlogPosts = cache(async () => {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const directories = await fs.promises.readdir(contentDir);

    const posts = await Promise.allSettled(
      directories.map((slug) => getPost(slug))
    );

    return posts
      .filter(
        (
          result
        ): result is PromiseFulfilledResult<
          NonNullable<Awaited<ReturnType<typeof getPost>>>
        > => result.status === "fulfilled" && result.value !== null
      )
      .map((result) => result.value);
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
});

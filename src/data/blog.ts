import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function getMDXDirectories(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((subdir) => fs.statSync(path.join(dir, subdir)).isDirectory());
}

export async function markdownToHtml(markdown: string) {
  const p = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", slug, `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHtml(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

export async function getAllPosts(dir: string) {
  const mdxDirs = getMDXDirectories(dir);
  return Promise.all(
    mdxDirs.map(async (slug) => {
      const { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

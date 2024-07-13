import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/date";
import ArrowRightUp from "@/components/icons/ArrowRightUp";
import { Metadata } from "next";
import Header from "@/components/Header";
import Markdown from "markdown-to-jsx";

const postsDirectory = path.join(process.cwd(), "src/posts");

interface Props {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
}

async function getPostData(slug: string): Promise<Props> {
  const fullPath = path.join(postsDirectory, slug, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    content: matterResult.content,
  };
}

export async function generateStaticParams() {
  const postsDirectories = fs.readdirSync(postsDirectory);
  return postsDirectories.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      type: "article",
      title: `${postData.title} - Lucas Casco`,
      description: postData.description,
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug);

  const twitterText = `I just read "${postData.title}" by @lucascodev. \n\nCheck it out! https://lucasco.dev/blog/${postData.slug}`;
  const editOnGitHubUrl = `https://github.com/isaias-alt/lucasco.dev/blob/main/src/posts/${postData.slug}/index.md`;
  const shareOnTwitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    twitterText
  )}`;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <div className="mt-7 flex flex-col space-y-2">
        <h1 className="font-bold tracking-tighter text-5xl">
          {postData.title}
        </h1>
      </div>
      <div className="flex items-center justify-between pt-3 text-sm ">
        <div className="flex items-center">
          <time
            className="flex items-center text-base text-neutral-800 dark:text-neutral-400"
            dateTime={postData.date}
          >
            <span className="font-mono">{formatDate(postData.date)}</span>
          </time>
        </div>
      </div>
      <article className="pb-5 prose w-full max-w-full text-pretty">
        <Markdown>{postData.content}</Markdown>
      </article>
      <div className="flex items-center justify-between border-t border-neutral-300 pt-4 text-sm dark:border-neutral-700">
        <a
          href={editOnGitHubUrl}
          className="flex items-center space-x-1 text-neutral-700 transition-colors duration-200 ease-in-out hover:text-black dark:text-neutral-300 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            Edit on GitHub
          </span>
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            <ArrowRightUp className="w-4 h-4 ml-1" />
          </span>
        </a>
        <a
          href={shareOnTwitterUrl}
          className="flex items-center space-x-1 text-neutral-700 transition-colors duration-200 ease-in-out hover:text-black dark:text-neutral-300 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            Share on Twitter
          </span>
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            <ArrowRightUp className="w-4 h-4 ml-1" />
          </span>
        </a>
      </div>
    </main>
  );
};

export default Post;

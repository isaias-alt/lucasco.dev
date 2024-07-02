import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Markdown from 'react-markdown';
import { formatDate } from '@/utils/date';
import ArrowRightUp from '@/components/icons/ArrowRightUp';
import ClockIcon from '@/components/icons/ClockIcon';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export const getStaticPaths: GetStaticPaths = () => {
  const postsDirectories = fs.readdirSync(postsDirectory);
  const paths = postsDirectories.map((dir) => ({
    params: { slug: dir },
  }));

  console.log(paths)

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const fullPath = path.join(postsDirectory, params?.slug as string, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    props: {
      postData: {
        slug: params?.slug as string,
        ...matterResult.data,
        content: matterResult.content,
      },
    },
  };
};

const Post = ({ postData }: { postData: { title: string; date: string; content: string; description: string; slug: string } }) => {
  return (
    <>
      <Head>
        <title>{postData.title} - Lucas Casco</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${postData.title} - Lucas Casco`} />
        <meta property="og:description" content={postData.description} />
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <div className="mt-7 flex flex-col space-y-2">
          <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">{postData.title}</h2>
          <p className="text-neutral-800 dark:text-neutral-400">{postData.description}</p>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-300 py-4 text-sm dark:border-neutral-800">
          <div className="flex items-center space-x-3">
            <time className="flex items-center space-x-2 text-neutral-800 dark:text-neutral-400" dateTime={postData.date}>
              <ClockIcon size="14" />
              <span className="font-mono">{formatDate(postData.date)}</span>
            </time>
          </div>
          <a
            href={`https://github.com/isaias-alt/lucasco.dev/blob/main/src/posts/${postData.slug}/index.md`}
            className="flex items-center space-x-1 text-neutral-600 transition-colors duration-200 ease-in-out hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Edit on GitHub</span>
            <ArrowRightUp size="14" />
          </a>
        </div>
        <article className="pb-5 prose prose-neutral prose-quoteless w-full max-w-full text-pretty dark:prose-invert">
          <Markdown>{postData.content}</Markdown>
        </article>
      </main>
    </>
  );
};

export default Post;

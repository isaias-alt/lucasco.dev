import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import PostActions from "@/components/blog/PostActions";

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
      images: [
        {
          url: 'https://lucasco.dev/og.png',
        },
      ]
    }
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <PostHeader title={postData.title} date={postData.date} />
      <PostContent content={postData.content} />
      <PostActions title={postData.title} slug={postData.slug} />
    </main>
  );
};

export default Post;

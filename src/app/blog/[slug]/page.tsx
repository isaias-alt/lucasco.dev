import { Metadata } from "next";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import PostActions from "@/components/blog/PostActions";
import { getAllPostsSlugs, getPostData } from "@/services/posts";

export async function generateStaticParams() {
  return getAllPostsSlugs();
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

import { Metadata } from "next";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import PostActions from "@/components/blog/PostActions";
import { getAllPostsSlugs, getPostData } from "@/services/posts";
import { getPostMetadata } from "@/utils/getPostMetadata";

export async function generateStaticParams() {
  return getAllPostsSlugs();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return getPostMetadata(params.slug);
}


const Post = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug);

  return (
    <main>
      <PostHeader title={postData.title} date={postData.date} />
      <PostContent content={postData.content} />
      <PostActions title={postData.title} slug={postData.slug} />
    </main>
  );
};

export default Post;

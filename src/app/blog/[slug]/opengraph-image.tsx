import { getPost } from "@/data/blog";
import { size, contentType, generatePostImage } from "@/og/generateImage";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const alt = "Lucas Casco - Blog Post";
export { size, contentType };

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);

  if (!slug) return notFound();

  const post = await getPost(slug);

  if (!post) return notFound();

  return generatePostImage({ title: post.metadata.title });
}

export async function generateStaticParams() {
  const { getBlogPosts } = await import("@/data/blog");
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

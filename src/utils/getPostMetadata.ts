import { getPostData } from "@/services/posts";
import { Metadata } from "next";

export const getPostMetadata = async (slug: string): Promise<Metadata> => {
  const postData = await getPostData(slug);
  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      type: 'article',
      title: `${postData.title} | Lucas Casco`,
      description: postData.description,
      images: [
        {
          url: 'https://lucasco.dev/og.png',
        },
      ],
    },
  };
};

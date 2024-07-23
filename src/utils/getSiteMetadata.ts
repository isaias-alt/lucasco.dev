import type { Metadata } from 'next';

export const getSiteMetadata = (): Metadata => {
  return {
    title: "Lucas Casco - Personal website",
    description: "Frontend Developer specialized in creating unique and amazing applications.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://lucasco.dev",
      title: "Lucas Casco - Personal website",
      description: "Frontend Developer specialized in creating unique and amazing applications.",
      images: [
        {
          url: "https://lucasco.dev/og.png",
          width: 1200,
          height: 630,
          alt: "Lucas Casco - Personal website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lucas Casco - Personal website",
      creator: "@lucascascodev",
      description: "Frontend Developer specialized in creating unique and amazing applications.",
      images: [
        {
          url: "https://lucasco.dev/og.png",
          width: 1200,
          height: 630,
          alt: "Lucas Casco - Personal website",
        },
      ],
    },
  };
};

export type MetadataParams = {
  title: string;
  description?: string;
  urlPath?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description = "Buy premium products at our online store.",
  urlPath = "/",
  image = "/default-og.png",
}: MetadataParams) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url: `${baseUrl}${urlPath}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

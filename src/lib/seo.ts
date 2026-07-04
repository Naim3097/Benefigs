import type { Metadata } from "next";
import { site } from "./site";
import { absoluteUrl } from "./utils";

export const siteMetadataBase = new URL(site.url);

/** Default, reusable metadata factory. Every page composes its own from this. */
export function buildMetadata({
  title,
  description,
  path = "/",
  absoluteTitle = false,
  noindex = false,
  keywords,
  type = "website",
  images,
}: {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
  keywords?: string[];
  type?: "website" | "article" | "product";
  images?: { url: string; alt: string }[];
}): Metadata {
  const canonical = absoluteUrl(path, site.url);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: type === "product" ? "website" : type,
      url: canonical,
      siteName: site.name,
      title,
      description,
      locale: "en_MY",
      ...(images ? { images: images.map((i) => ({ url: i.url, alt: i.alt })) } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

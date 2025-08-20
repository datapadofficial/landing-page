import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getSpanishPostBySlug,
  getSpanishPostSlugs,
} from "@/lib/spanish-blog-utils";
import { BlogPostContent } from "@/app/blog/[slug]/blog-post-content";
import { MDXContent } from "@/app/blog/[slug]/mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { BlogPost } from "@/types/blog-post";

// Type for Spanish blog posts with additional fields
type SpanishBlogPost = BlogPost & {
  originalEnglishSlug?: string;
  language?: string;
};

interface SpanishBlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SpanishBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getSpanishPostBySlug(slug)) as SpanishBlogPost | null;

  if (!post) {
    return {
      title: "Artículo No Encontrado - Datapad",
      description: "El artículo solicitado no se pudo encontrar.",
    };
  }

  const siteUrl = "https://datapad.io";
  const postUrl = `${siteUrl}/es/blog/${slug}`;

  // Use SEO-specific fields if available, fallback to regular fields
  const metaTitle = post.seoTitle || post.title;
  const metaDescription = post.seoDescription || post.description;
  const ogImage = post.image;
  const publishedDate = post.date;
  const modifiedDate = post.lastModified || post.date;

  // Generate article keywords from tags and content
  const keywords = [
    ...(post.tags || []),
    "análisis de datos",
    "inteligencia empresarial",
    "analítica de IA",
    "Datapad",
  ];

  return {
    title: metaTitle,
    description: metaDescription,
    authors: post.author
      ? [{ name: post.author }]
      : [{ name: "Equipo Datapad" }],
    keywords: keywords.join(", "),
    creator: "Datapad",
    publisher: "Datapad",
    robots:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    category: "Tecnología",

    // OpenGraph
    openGraph: {
      type: "article",
      url: postUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: "Blog Datapad",
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: [post.author || "Equipo Datapad"],
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: metaTitle,
              type: "image/png",
            },
          ]
        : [],
      locale: "es_ES",
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      site: "@datapad",
      creator: "@datapad",
      title: metaTitle,
      description: metaDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: metaTitle,
            },
          ]
        : [],
    },

    // Additional article metadata
    other: {
      "article:author": post.author || "Equipo Datapad",
      "article:published_time": publishedDate,
      "article:modified_time": modifiedDate,
      "article:section": "Tecnología",
    },

    // Canonical URL
    alternates: {
      canonical: postUrl,
      languages: {
        "es-ES": postUrl,
        "en-US": post.originalEnglishSlug
          ? `${siteUrl}/blog/${post.originalEnglishSlug}`
          : postUrl,
      },
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getSpanishPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function SpanishBlogPostPage({
  params,
}: SpanishBlogPostPageProps) {
  const { slug } = await params;
  const post = (await getSpanishPostBySlug(slug)) as SpanishBlogPost | null;

  if (!post) {
    notFound();
  }

  const siteUrl = "https://datapad.io";
  const postUrl = `${siteUrl}/es/blog/${slug}`;

  // Generate JSON-LD structured data for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription || post.description,
    image: post.image
      ? [post.image]
      : [`${siteUrl}/images/datapad-og-default.png`],
    author: {
      "@type": "Person",
      name: post.author || "Equipo Datapad",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Datapad",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/datapad-logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags
      ? post.tags.join(", ")
      : "análisis de datos, inteligencia empresarial, IA",
    articleSection: "Tecnología",
    inLanguage: "es-ES",
    isAccessibleForFree: true,
    ...(post.featured && {
      potentialAction: {
        "@type": "ReadAction",
        target: postUrl,
      },
    }),
  };

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress color="primary" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPostContent post={post} slug={slug}>
        <MDXContent content={post.content} />
      </BlogPostContent>
    </>
  );
}

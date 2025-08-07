import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Datapad",
      description: "The requested blog post could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const postUrl = `${siteUrl}/blog/${slug}`;

  // Use SEO-specific fields if available, fallback to regular fields
  const metaTitle = post.seoTitle || post.title;
  const metaDescription = post.seoDescription || post.description;
  const ogImage = post.image;
  const publishedDate = post.date;
  const modifiedDate = post.lastModified || post.date;

  // Generate article keywords from tags and content
  const keywords = [
    ...(post.tags || []),
    "data analytics",
    "business intelligence",
    "AI analytics",
    "Datapad",
  ];

  return {
    title: metaTitle,
    description: metaDescription,
    authors: post.author ? [{ name: post.author }] : [{ name: "Datapad Team" }],
    keywords: keywords.join(", "),
    category: "Technology",

    // Open Graph metadata
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: postUrl,
      siteName: "Datapad Blog",
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: post.author ? [post.author] : ["Datapad Team"],
      section: "Technology",
      tags: post.tags || [],
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: post.imageAlt || post.title,
              type: "image/png",
            },
          ]
        : [
            {
              url: `${siteUrl}/images/datapad-og-default.png`,
              width: 1200,
              height: 630,
              alt: "Datapad - AI Data Analytics Platform",
              type: "image/png",
            },
          ],
    },

    // Twitter Card metadata
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
              alt: post.imageAlt || post.title,
            },
          ]
        : [
            {
              url: `${siteUrl}/images/datapad-twitter-card.png`,
              alt: "Datapad - AI Data Analytics Platform",
            },
          ],
    },

    // Additional SEO metadata
    robots: {
      index: !post.hideInBlog,
      follow: true,
      googleBot: {
        index: !post.hideInBlog,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Article-specific metadata
    other: {
      "article:author": post.author || "Datapad Team",
      "article:published_time": publishedDate,
      "article:modified_time": modifiedDate,
      "article:section": "Technology",
      "article:tag": (post.tags || []).join(","),
    },

    // Canonical URL
    alternates: {
      canonical: postUrl,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://datapad.io";
  const postUrl = `${siteUrl}/blog/${slug}`;

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
      name: post.author || "Datapad Team",
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
      : "data analytics, business intelligence, AI",
    articleSection: "Technology",
    inLanguage: "en-US",
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="mb-6">
            {/* Featured badge */}
            {post.featured && (
              <Badge variant="default" className="mb-4">
                Featured Article
              </Badge>
            )}

            {/* Popular badge */}
            {post.popular && (
              <Badge variant="outline" className="mb-4 ml-2">
                Popular
              </Badge>
            )}

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-xl text-muted-foreground mb-4">
                {post.description}
              </p>
            )}

            {/* Hero image */}
            {post.image && post.showImage && (
              <div className="mb-6 relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date} itemProp="datePublished">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.author && (
                <span
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  by <span itemProp="name">{post.author}</span>
                </span>
              )}
              {post.lastModified && post.lastModified !== post.date && (
                <span>
                  • Updated{" "}
                  <time dateTime={post.lastModified} itemProp="dateModified">
                    {new Date(post.lastModified).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </span>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" itemProp="keywords">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Separator className="mb-8" />
        </div>

        <article
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-optimized"
          itemScope
          itemType="https://schema.org/Article"
        >
          <meta itemProp="headline" content={post.title} />
          <meta
            itemProp="description"
            content={post.seoDescription || post.description}
          />
          <meta itemProp="datePublished" content={post.date} />
          <meta
            itemProp="dateModified"
            content={post.lastModified || post.date}
          />
          <div itemProp="articleBody">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </>
  );
}

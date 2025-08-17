import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Blog - Datapad | AI-Powered Data Analytics Insights",
  description:
    "Stay updated with the latest insights on AI-powered data analytics, business intelligence, KPIs, and autonomous data analysis. Expert tips and trends from Datapad.",
  keywords: [
    "data analytics blog",
    "AI analytics insights",
    "business intelligence tips",
    "KPI tracking",
    "data visualization",
    "autonomous analytics",
    "datapad blog",
  ],
  authors: [{ name: "Datapad Team" }],
  creator: "Datapad",
  publisher: "Datapad",
  alternates: {
    canonical: "https://datapad.io/blogs",
  },
  openGraph: {
    title: "Blog - Datapad | AI-Powered Data Analytics Insights",
    description:
      "Stay updated with the latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    url: "https://datapad.io/blogs",
    siteName: "Datapad",
    type: "website",
    images: [
      {
        url: "https://datapad.io/images/datapad-og-default.png",
        width: 1200,
        height: 630,
        alt: "Datapad Blog - AI-Powered Data Analytics Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Datapad | AI-Powered Data Analytics Insights",
    description:
      "Stay updated with the latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    images: ["https://datapad.io/images/datapad-og-default.png"],
  },
};

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const siteUrl = "https://datapad.io";

  // Generate JSON-LD structured data for the blogs page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Datapad Blog",
    description:
      "Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    url: `${siteUrl}/blogs`,
    publisher: {
      "@type": "Organization",
      name: "Datapad",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/datapad-logo.png`,
      },
    },
    mainEntity: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription || post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.lastModified || post.date,
      author: {
        "@type": "Person",
        name: post.author || "Datapad Team",
      },
      image: post.image || `${siteUrl}/images/datapad-og-default.png`,
      keywords: post.tags
        ? post.tags.join(", ")
        : "data analytics, AI, business intelligence",
    })),
  };

  // Get featured post (first post or first featured post)
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  // Get remaining posts for the list
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  if (!featuredPost) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">No blog posts available yet.</p>
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section - Based on blog14.tsx */}
      <section className="py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-medium md:text-6xl">
              Insights and Trends Blog
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Stay updated with the latest insights on AI-powered data
              analytics, business intelligence, and autonomous data analysis.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
              <Image
                src={
                  featuredPost.image ||
                  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                }
                alt={featuredPost.imageAlt || featuredPost.title}
                width={600}
                height={400}
                className="aspect-video rounded-lg object-cover"
              />
              <div className="flex flex-col items-start gap-4">
                <Badge variant="secondary" className="shrink">
                  {featuredPost.tags && featuredPost.tags.length > 0
                    ? featuredPost.tags[0]
                    : "Data Analytics"}
                </Badge>
                <h2 className="text-2xl font-semibold text-balance md:max-w-lg lg:text-3xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground md:max-w-lg">
                  {featuredPost.description}
                </p>
              </div>
            </div>
            <p className="text-2xl font-medium md:text-3xl">Popular Posts</p>
            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
              {otherPosts.slice(0, 3).map((post) => (
                <div
                  key={post.slug}
                  className="flex flex-col items-start gap-4"
                >
                  <Image
                    src={
                      post.image ||
                      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    }
                    alt={post.imageAlt || post.title}
                    width={400}
                    height={300}
                    className="aspect-video rounded-lg object-cover"
                  />
                  <Badge variant="secondary" className="shrink">
                    {post.tags && post.tags.length > 0
                      ? post.tags[0]
                      : "Data Analytics"}
                  </Badge>
                  <h3 className="text-xl font-semibold text-balance md:max-w-md">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground md:max-w-md">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* List Section - Based on blog29.tsx */}
      {otherPosts.length > 3 && (
        <section className="bg-background py-16">
          <div className="container">
            <h1 className="mb-10 px-6 text-left text-4xl font-bold tracking-tighter text-foreground sm:text-6xl">
              All Posts
            </h1>

            <section className="mt-10 space-y-6 md:mt-18">
              {otherPosts.slice(3).map((post, index) => (
                <React.Fragment key={post.slug}>
                  <Card className="border-none shadow-none">
                    <CardContent className="">
                      <div className="relative w-full">
                        <p className="text-sm tracking-tight text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>

                        <h2 className="mt-2 text-lg font-medium tracking-tight text-foreground md:text-2xl">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        <p className="md:text-md mt-4 text-sm text-muted-foreground md:pr-24 xl:pr-32">
                          {post.description}
                        </p>

                        <div className="mt-4 flex w-9/10 flex-wrap items-center gap-2">
                          {post.tags && post.tags.length > 0 ? (
                            post.tags.slice(0, 5).map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="h-6 rounded-md"
                              >
                                <span className="text-md font-medium text-muted-foreground">
                                  {tag}
                                </span>
                              </Badge>
                            ))
                          ) : (
                            <Badge
                              variant="secondary"
                              className="h-6 rounded-md"
                            >
                              <span className="text-md font-medium text-muted-foreground">
                                Data Analytics
                              </span>
                            </Badge>
                          )}
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="secondary"
                            className="absolute -right-3 -bottom-1 flex h-10 w-10 items-center justify-center rounded-full transition-all ease-in-out hover:rotate-45 md:bottom-14"
                          >
                            <ArrowUpRightIcon />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {index < otherPosts.slice(3).length - 1 && (
                    <Separator className="h-px w-full" />
                  )}
                </React.Fragment>
              ))}
            </section>
          </div>
        </section>
      )}
    </>
  );
}

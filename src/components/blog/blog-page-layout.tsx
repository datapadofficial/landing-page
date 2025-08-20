import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BlogPost } from "@/types/blog-post";

interface BlogPageLayoutProps {
  posts: BlogPost[];
  siteUrl: string;
  basePath: string; // e.g., "/blog" or "/es/blog"
  translations: {
    headerTitle: string;
    headerDescription: string;
    popularPosts: string;
    allPosts: string;
    noPosts: string;
    noPostsDescription: string;
    defaultTag: string;
  };
}

export function BlogPageLayout({
  posts,
  siteUrl,
  basePath,
  translations,
}: BlogPageLayoutProps) {
  // Get featured post (first post or first featured post)
  const featuredPost =
    posts.find((post) => post.slug === "conversational-analytics-guide-2025") ||
    posts[0];

  // Get remaining posts for the list
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  if (!featuredPost) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{translations.noPosts}</h1>
        <p className="text-muted-foreground">
          {translations.noPostsDescription}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Header Section - Based on blog14.tsx */}
      <section className="py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-medium md:text-6xl">
              {translations.headerTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {translations.headerDescription}
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
                    : translations.defaultTag}
                </Badge>
                <h2 className="text-2xl font-semibold text-balance md:max-w-lg lg:text-3xl">
                  <Link
                    href={`${basePath}/${featuredPost.slug}`}
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
            <p className="text-2xl font-medium md:text-3xl">
              {translations.popularPosts}
            </p>
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
                      : translations.defaultTag}
                  </Badge>
                  <h3 className="text-xl font-semibold text-balance md:max-w-md">
                    <Link
                      href={`${basePath}/${post.slug}`}
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
              {translations.allPosts}
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
                            href={`${basePath}/${post.slug}`}
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
                                {translations.defaultTag}
                              </span>
                            </Badge>
                          )}
                        </div>

                        <Link href={`${basePath}/${post.slug}`}>
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

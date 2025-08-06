import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Datapad",
    };
  }

  return {
    title: `${post.title} - Datapad Blog`,
    description: post.description,
    authors: post.author ? [{ name: post.author }] : undefined,
    publishedTime: post.date,
    keywords: post.tags,
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl text-muted-foreground mb-4">
              {post.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && <span>by {post.author}</span>}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Separator className="mb-8" />
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}

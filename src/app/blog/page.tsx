import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog - Datapad",
  description:
    "Latest insights on data analytics, AI, and business intelligence from the Datapad team.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest insights on data analytics, AI, and business intelligence.
        </p>
      </div>
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No posts yet</h2>
          <p className="text-muted-foreground">
            Check back soon for the latest insights from our team.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                        legacyBehavior>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.author && <span>by {post.author}</span>}
                </div>
              </CardHeader>
              {post.tags && post.tags.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

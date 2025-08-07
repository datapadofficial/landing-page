import Link from "next/link";
import Image from "next/image";
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
  title: "Blog - AI Data Analytics Insights | Datapad",
  description:
    "Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis. Learn from industry experts about modern data strategies and tools.",
  keywords: [
    "data analytics blog",
    "AI analytics insights",
    "business intelligence articles",
    "data science tutorials",
    "autonomous AI",
    "data visualization",
    "analytics tools",
    "Datapad blog",
  ].join(", "),
  openGraph: {
    title: "Blog - AI Data Analytics Insights | Datapad",
    description:
      "Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    url: "https://datapad.io/blog",
    siteName: "Datapad",
    type: "website",
    images: [
      {
        url: "https://datapad.io/images/datapad-blog-og.png",
        width: 1200,
        height: 630,
        alt: "Datapad Blog - AI Data Analytics Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@datapad",
    title: "Blog - AI Data Analytics Insights | Datapad",
    description:
      "Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    images: ["https://datapad.io/images/datapad-blog-twitter.png"],
  },
  alternates: {
    canonical: "https://datapad.io/blog",
    types: {
      "application/rss+xml": "https://datapad.io/blog/feed.xml",
    },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const siteUrl = "https://datapad.io";

  // Generate JSON-LD structured data for the blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Datapad Blog",
    description:
      "Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    url: `${siteUrl}/blog`,
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

  // Separate featured and popular posts
  const featuredPosts = posts.filter((post) => post.featured);
  const popularPosts = posts.filter((post) => post.popular && !post.featured);
  const regularPosts = posts.filter((post) => !post.featured && !post.popular);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Latest insights on data analytics, AI, and business intelligence.
          </p>

          {/* RSS Feed Link */}
          <div className="mt-4">
            <Link
              href="/blog/feed.xml"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📡 Subscribe to RSS Feed
            </Link>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No posts yet</h2>
            <p className="text-muted-foreground">
              Check back soon for the latest insights from our team.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                <div className="grid gap-6">
                  {featuredPosts.map((post) => (
                    <Card
                      key={post.slug}
                      className="hover:shadow-md transition-shadow border-primary/20"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="default">Featured</Badge>
                              {post.popular && (
                                <Badge variant="outline">Popular</Badge>
                              )}
                            </div>
                            <CardTitle className="text-2xl mb-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base">
                              {post.description}
                            </CardDescription>
                          </div>
                          {post.image && post.showImage && (
                            <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image
                                src={post.image}
                                alt={post.imageAlt || post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 128px"
                              />
                            </div>
                          )}
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
              </section>
            )}

            {/* Popular Posts */}
            {popularPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Popular Articles</h2>
                <div className="grid gap-6">
                  {popularPosts.map((post) => (
                    <Card
                      key={post.slug}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="mb-2">
                              <Badge variant="outline">Popular</Badge>
                            </div>
                            <CardTitle className="text-2xl mb-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base">
                              {post.description}
                            </CardDescription>
                          </div>
                          {post.image && post.showImage && (
                            <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image
                                src={post.image}
                                alt={post.imageAlt || post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 128px"
                              />
                            </div>
                          )}
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
              </section>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
                <div className="grid gap-6">
                  {regularPosts.map((post) => (
                    <Card
                      key={post.slug}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base">
                              {post.description}
                            </CardDescription>
                          </div>
                          {post.image && post.showImage && (
                            <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image
                                src={post.image}
                                alt={post.imageAlt || post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 128px"
                              />
                            </div>
                          )}
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
              </section>
            )}
          </div>
        )}
      </div>
    </>
  );
}

import { getAllPosts } from "@/lib/blog-utils";
import { BlogPageLayout } from "@/components/blog/blog-page-layout";

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

  const translations = {
    headerTitle: "Insights and Trends Blog",
    headerDescription:
      "Stay updated with the latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis.",
    popularPosts: "Popular Posts",
    allPosts: "All Posts",
    noPosts: "Blog",
    noPostsDescription: "No blog posts available yet.",
    defaultTag: "Data Analytics",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPageLayout
        posts={posts}
        siteUrl={siteUrl}
        basePath="/blog"
        translations={translations}
      />
    </>
  );
}

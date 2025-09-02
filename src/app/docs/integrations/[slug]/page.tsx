import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getIntegrationDocBySlug, getIntegrationDocSlugs } from "@/lib/integration-doc-utils";
import { IntegrationDocContent } from "@/components/docs/integration-doc-content";
import { IntegrationMDXContent } from "@/components/docs/integration-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

interface IntegrationDocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: IntegrationDocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getIntegrationDocBySlug(slug);

  if (!doc) {
    return {
      title: "Integration Not Found - Datapad",
      description: "The requested integration documentation could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const docUrl = `${siteUrl}/docs/integrations/${slug}`;

  // Use SEO-specific fields if available, fallback to regular fields
  const metaTitle = doc.seoTitle || `${doc.title} Integration | Datapad`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: "Datapad Team" }],
    keywords: [
      doc.title,
      "integration",
      "Datapad",
      doc.category,
      "data analytics",
      "business intelligence",
      "AI analytics",
    ].join(", "),
    category: "Technology",

    // Open Graph metadata
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: docUrl,
      siteName: "Datapad Docs",
      type: "article",
      authors: ["Datapad Team"],
      section: "Integration Documentation",
      tags: [doc.title, doc.category, "integration"],
      images: [
        {
          url: `${siteUrl}/images/datapad-og-integrations.png`,
          width: 1200,
          height: 630,
          alt: `${doc.title} Integration - Datapad`,
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
      images: [
        {
          url: `${siteUrl}/images/datapad-twitter-integrations.png`,
          alt: `${doc.title} Integration - Datapad`,
        },
      ],
    },

    // Additional SEO metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Article-specific metadata
    other: {
      "article:author": "Datapad Team",
      "article:section": "Integration Documentation",
      "article:tag": [doc.title, doc.category, "integration"].join(","),
    },

    // Canonical URL
    alternates: {
      canonical: docUrl,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getIntegrationDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function IntegrationDocPage({ params }: IntegrationDocPageProps) {
  const { slug } = await params;
  const doc = await getIntegrationDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const siteUrl = "https://datapad.io";
  const docUrl = `${siteUrl}/docs/integrations/${slug}`;

  // Generate JSON-LD structured data for the integration documentation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.seoDescription || doc.description,
    image: doc.icon ? [doc.icon] : [`${siteUrl}/images/datapad-og-default.png`],
    author: {
      "@type": "Organization",
      name: "Datapad Team",
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
    datePublished: doc.lastModified || new Date().toISOString(),
    dateModified: doc.lastModified || new Date().toISOString(),
    url: docUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": docUrl,
    },
    keywords: [doc.title, doc.category, "integration", "Datapad"].join(", "),
    articleSection: "Integration Documentation",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "SoftwareApplication",
      name: doc.title,
      category: doc.category,
      url: doc.website,
    },
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

      <IntegrationDocContent doc={doc}>
        <IntegrationMDXContent content={doc.content} />
      </IntegrationDocContent>
    </>
  );
}

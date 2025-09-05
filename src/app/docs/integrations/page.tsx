import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getIntegrationsOverview } from "@/lib/integrations-overview-utils";
import { IntegrationsOverviewContent } from "@/components/docs/integrations-overview-content";
import { IntegrationsOverviewMDXContent } from "@/components/docs/integrations-overview-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getIntegrationsOverview();

  if (!doc) {
    return {
      title: "Integrations Not Found - Datapad",
      description: "The integrations page could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const docUrl = `${siteUrl}/docs/integrations`;

  // Use SEO-specific fields if available, fallback to regular fields
  const metaTitle = doc.seoTitle || `${doc.title} | Datapad Docs`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: "Datapad Team" }],
    keywords: doc.keywords?.join(", ") || "integrations, data sources, databases, analytics, CRM, marketing tools",
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
      tags: ["integrations", "data sources", "databases"],
      images: [
        {
          url: `${siteUrl}/images/datapad-og-integrations.png`,
          width: 1200,
          height: 630,
          alt: `${doc.title} - Datapad`,
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
          alt: `${doc.title} - Datapad`,
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

    // Canonical URL
    alternates: {
      canonical: docUrl,
    },
  };
}

export default async function IntegrationsPage() {
  const doc = await getIntegrationsOverview();

  if (!doc) {
    notFound();
  }

  const siteUrl = "https://datapad.io";
  const docUrl = `${siteUrl}/docs/integrations`;

  // Generate JSON-LD structured data for the integrations page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.seoDescription || doc.description,
    image: [`${siteUrl}/images/datapad-og-integrations.png`],
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
    keywords: doc.keywords?.join(", ") || "integrations, data sources",
    articleSection: "Integration Documentation",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "SoftwareApplication",
      name: "Datapad Integrations",
      category: "BusinessApplication",
      description: "50+ data source integrations for business analytics",
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

      <IntegrationsOverviewContent doc={doc}>
        <IntegrationsOverviewMDXContent content={doc.content} />
      </IntegrationsOverviewContent>
    </>
  );
}
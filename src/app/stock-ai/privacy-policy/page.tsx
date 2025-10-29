import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getLegalDocumentBySlug } from "@/lib/legal-utils";
import { LegalPageContent } from "@/components/legal-page";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";

const SLUG = "stock-ai-privacy-policy";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocumentBySlug(SLUG);

  if (!document) {
    return {
      title: "Stock AI Privacy Policy - Datapad",
      description: "Privacy policy for Stock AI - Trends & Analysis mobile app.",
    };
  }

  const siteUrl = "https://datapad.io";
  const pageUrl = `${siteUrl}/stock-ai/privacy-policy`;

  const metaTitle = document.seoTitle || document.title;
  const metaDescription = document.seoDescription || document.description;

  return {
    title: metaTitle,
    description: metaDescription,

    // Open Graph metadata
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: pageUrl,
      siteName: "Datapad",
      type: "website",
    },

    // Twitter Card metadata
    twitter: {
      card: "summary",
      site: "@datapad",
      title: metaTitle,
      description: metaDescription,
    },

    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },

    // Robots
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function StockAIPrivacyPolicyPage() {
  const document = await getLegalDocumentBySlug(SLUG);

  if (!document) {
    notFound();
  }

  return (
    <LegalPageContent
      document={document}
      slug={SLUG}
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Stock AI", link: "/stock-ai/support" },
        { label: "Privacy Policy", link: "/stock-ai/privacy-policy" },
      ]}
    >
      <MDXRemote source={document.content} components={getMDXComponents({})} />
    </LegalPageContent>
  );
}

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getLegalDocumentBySlug } from "@/lib/legal";
import { LegalPageContent } from "@/components/legal-page";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";

const SLUG = "privacy-policy";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocumentBySlug(SLUG);

  if (!document) {
    return {
      title: "Privacy Policy - Datapad",
      description: "Datapad's privacy policy and data protection practices.",
    };
  }

  const siteUrl = "https://datapad.io";
  const pageUrl = `${siteUrl}/${SLUG}`;

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

export default async function PrivacyPolicyPage() {
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
        { label: "Legal", link: "/legal" },
        { label: document.title, link: `/${SLUG}` },
      ]}
    >
      <MDXRemote source={document.content} components={getMDXComponents({})} />
    </LegalPageContent>
  );
}

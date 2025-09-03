import { getFeaturesOverviewDoc } from "@/lib/features-overview-utils";
import { FeaturesOverviewContent } from "@/components/docs/features-overview-content";
import { FeaturesOverviewMDXContent } from "@/components/docs/features-overview-mdx-content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getFeaturesOverviewDoc();

  if (!doc) {
    return {
      title: "Features - Datapad",
      description: "Comprehensive feature overview of Datapad's AI-powered business intelligence platform.",
    };
  }

  const metaTitle = doc.seoTitle || `${doc.title} | Datapad`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function FeaturesPage() {
  const doc = await getFeaturesOverviewDoc();

  if (!doc) {
    notFound();
  }

  return (
    <FeaturesOverviewContent doc={doc}>
      <FeaturesOverviewMDXContent content={doc.content} />
    </FeaturesOverviewContent>
  );
}
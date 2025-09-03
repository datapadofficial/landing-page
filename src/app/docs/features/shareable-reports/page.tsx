import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getFeatureDocBySlug } from "@/lib/feature-doc-utils";
import { FeatureDocContent } from "@/components/docs/feature-doc-content";
import { FeatureMDXContent } from "@/components/docs/feature-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const FEATURE_SLUG = "shareable-reports";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getFeatureDocBySlug(FEATURE_SLUG);

  if (!doc) {
    return {
      title: "Feature Not Found - Datapad",
      description: "The requested feature could not be found.",
    };
  }

  const metaTitle = doc.seoTitle || `${doc.title} | Datapad`;
  const metaDescription = doc.seoDescription || doc.shortDescription;

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function ShareableReportsPage() {
  const doc = await getFeatureDocBySlug(FEATURE_SLUG);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <ScrollProgress color="primary" />
      <FeatureDocContent doc={doc}>
        <FeatureMDXContent content={doc.content} />
      </FeatureDocContent>
    </>
  );
}
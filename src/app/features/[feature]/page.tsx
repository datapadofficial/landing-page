import { getFeatureDocBySlug, getFeatureDocSlugs } from "@/lib/feature-doc-utils";
import { notFound } from "next/navigation";
import { FeatureDocContent } from "@/components/docs/feature-doc-content";
import { FeatureMDXContent } from "@/components/docs/feature-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

interface FeaturePageProps {
  params: Promise<{
    feature: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getFeatureDocSlugs();
  return slugs.map((slug) => ({
    feature: slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps) {
  const { feature: featureSlug } = await params;
  const doc = await getFeatureDocBySlug(featureSlug);

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
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
    },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { feature: featureSlug } = await params;
  const doc = await getFeatureDocBySlug(featureSlug);

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

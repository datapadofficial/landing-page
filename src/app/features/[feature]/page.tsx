import { getFeatureBySlug, getAllFeatures } from "@/lib/feature-utils";
import { notFound } from "next/navigation";
import { FeatureContent } from "@/components/features/feature-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

interface FeaturePageProps {
  params: Promise<{
    feature: string;
  }>;
}

export async function generateStaticParams() {
  const features = getAllFeatures();
  return features.map((feature) => ({
    feature: feature.slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps) {
  const { feature: featureSlug } = await params;
  const feature = getFeatureBySlug(featureSlug);

  if (!feature) {
    return {
      title: "Feature Not Found - Datapad",
      description: "The requested feature could not be found.",
    };
  }

  const metaTitle = `${feature.title} | Datapad`;
  const metaDescription = feature.shortDescription;

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
  const feature = getFeatureBySlug(featureSlug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <ScrollProgress color="primary" />
      <FeatureContent feature={feature} />
    </>
  );
}

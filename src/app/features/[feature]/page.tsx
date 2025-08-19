import { getFeatureBySlug, getAllFeatures } from "@/lib/feature-utils";
import { notFound } from "next/navigation";
import { FeatureHero } from "@/components/features/feature-hero";
import { AppVideoPreview } from "@/components/creatives/app-video-preview";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HowItWorksSection } from "@/components/how-it-works-section";

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
      title: "Feature Not Found",
    };
  }

  return {
    title: `${feature.title} - Datapad Features`,
    description: feature.shortDescription,
    openGraph: {
      title: `${feature.title} - Datapad Features`,
      description: feature.shortDescription,
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
      {/* Breadcrumb Navigation */}
      <section className="pt-16 sm:pt-24">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/features">Features</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{feature.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Feature Hero */}
      <FeatureHero feature={feature} />

      {/* Video Preview Section */}
      <AppVideoPreview videoUrl={feature.videoUrl} />

      {/* How It Works Section */}
      <HowItWorksSection
        steps={feature.steps}
        title={<h1>How {feature.title} Works</h1>}
        description={feature.shortDescription}
      />
    </>
  );
}

import { getFeatureBySlug, getAllFeatures } from "@/lib/features";
import { notFound } from "next/navigation";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureDetails } from "@/components/feature-details";
import { FeatureBenefits } from "@/components/feature-benefits";
import { FeatureUseCases } from "@/components/feature-use-cases";
import { FeatureCTA } from "@/components/feature-cta";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

      {/* Feature Details */}
      <FeatureDetails feature={feature} />

      {/* Feature Benefits */}
      <FeatureBenefits feature={feature} />

      {/* Feature Use Cases */}
      <FeatureUseCases feature={feature} />

      {/* Feature CTA */}
      <FeatureCTA feature={feature} />
    </>
  );
}

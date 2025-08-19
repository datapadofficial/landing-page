import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCompetitorById, getAllCompetitors } from "@/lib/competitor-utils";

import { VsHero } from "@/components/vs/vs-hero";
import { VsComparisonTable } from "@/components/vs/vs-comparison-table";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { MainLogos } from "@/components/main-logos";
import { MainCTA } from "@/components/main-cta";
import { Faq2 } from "@/components/faq2";
import { AIDataAgentSection } from "@/components/ai-data-agent";

interface CompetitorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CompetitorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitorById(slug);

  if (!competitor) {
    return {
      title: "Competitor Not Found - Datapad",
      description: "The requested competitor comparison could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const pageUrl = `${siteUrl}/vs/${slug}`;

  return {
    title: competitor.metadata.title,
    description: competitor.metadata.description,
    keywords: [
      competitor.name,
      "comparison",
      "vs",
      "analytics",
      "business intelligence",
      "Datapad",
    ].join(", "),

    // Open Graph metadata
    openGraph: {
      title: competitor.metadata.openGraph.title,
      description: competitor.metadata.openGraph.description,
      url: pageUrl,
      siteName: "Datapad",
      type: competitor.metadata.openGraph.type as "website",
      images: [
        {
          url: `${siteUrl}/images/datapad-logo.svg`,
          width: 1200,
          height: 630,
          alt: `${competitor.name} vs Datapad Comparison`,
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      site: "@datapad",
      title: competitor.metadata.openGraph.title,
      description: competitor.metadata.openGraph.description,
      images: [`${siteUrl}/images/datapad-logo.svg`],
    },

    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
  };
}

export async function generateStaticParams() {
  const competitors = getAllCompetitors();
  return competitors.map((competitor) => ({
    slug: competitor.id,
  }));
}

export default async function CompetitorPage({ params }: CompetitorPageProps) {
  const { slug } = await params;
  const competitor = getCompetitorById(slug);

  if (!competitor) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName={competitor.name}
        competitorLogo={competitor.logo}
        subtitle={competitor.subtitle}
        ctaText={competitor.ctaText}
        badgeText={competitor.badgeText}
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName={competitor.name}
        competitorTagline={competitor.tagline}
        competitorDescription={competitor.description}
        competitorLogo={competitor.logo}
        features={competitor.features}
        title={`Datapad delivers AI-powered business intelligence, ${
          competitor.name
        } offers ${competitor.description.toLowerCase()}.`}
      />

      {/* Trusted By Section */}
      <MainLogos />

      {/* Data Agent */}
      <AIDataAgentSection />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* Competitor-specific FAQ */}
      <Faq2
        heading={`${competitor.name} vs Datapad: Common Questions`}
        items={competitor.faqItems}
      />

      {/* CTA Section */}
      <MainCTA />
    </>
  );
}

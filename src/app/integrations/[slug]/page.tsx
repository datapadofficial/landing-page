import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getIntegrationById,
  getAllIntegrations,
} from "@/lib/integration-utils";
import { getWorkflowsByIntegration } from "@/lib/workflow-template-helpers";
import { IntegrationConnection } from "@/components/integrations/integration-connection";
import { MainCTA } from "@/components/main-cta";
import { IntegrationHero } from "@/components/integrations/integration-hero";
import { MainLogos } from "@/components/main-logos";
import { HomeDataAgent } from "@/components/home-data-agent";
import { WorkflowsSection } from "@/components/workflows-section";
import { PainPoints } from "@/components/pain-points";
import { WorkflowGallery } from "@/components/workflows/workflow-gallery";

interface IntegrationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: IntegrationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegrationById(slug);

  if (!integration) {
    return {
      title: "Integration Not Found - Datapad",
      description: "The requested integration could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const pageUrl = `${siteUrl}/integrations/${slug}`;

  return {
    title: `${integration.name} Integration - Datapad`,
    description: integration.description,
    keywords: [
      integration.name,
      "integration",
      "data analytics",
      "business intelligence",
      "Datapad",
      integration.category,
    ].join(", "),

    // Open Graph metadata
    openGraph: {
      title: `${integration.name} Integration - Datapad`,
      description: integration.description,
      url: pageUrl,
      siteName: "Datapad",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/integrations/${integration.id}.png`,
          width: 1200,
          height: 630,
          alt: `${integration.name} Integration with Datapad`,
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      site: "@datapad",
      title: `${integration.name} Integration - Datapad`,
      description: integration.description,
      images: [`${siteUrl}/images/integrations/${integration.id}.png`],
    },

    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
  };
}

export async function generateStaticParams() {
  const integrations = getAllIntegrations();
  return integrations.map((integration) => ({
    slug: integration.id,
  }));
}

export default async function IntegrationPage({
  params,
}: IntegrationPageProps) {
  const { slug } = await params;
  const integration = getIntegrationById(slug);

  if (!integration) {
    notFound();
  }

  const relatedWorkflows = getWorkflowsByIntegration(integration.id);

  return (
    <main className="flex flex-col max-w-7xl mx-auto items-center">
      {/* Hero Section */}
      <IntegrationHero integration={integration} />

      {/* Main Logos */}
      <MainLogos
        title={
          <div className="text-center">
            <h6 className="mb-4">
              Powering teams across every business function.
              <br className="max-md:hidden" />
              <span className="text-muted-foreground">
                From next-gen startups to established enterprises.
              </span>
            </h6>
          </div>
        }
      />

      {/* Pain Points Component */}
      <PainPoints
        painPoints={integration.painPoints || []}
        title={
          <>
            It's Easy to <span className="text-chart-red">Get Lost</span> in{" "}
            {integration.name}
          </>
        }
      />

      {/* Main Workflows */}
      <WorkflowsSection
        title={
          <>
            <span className="text-primary">We Fixed It With AI</span>
            <br />
            Press a Button, Watch Your ROI Increase
          </>
        }
        description={`Stop wasting hours creating content that doesn't convert. Get AI that actually generates your ${integration.name} campaigns, blog posts, email sequences, and sales scripts - ready to copy-paste in minutes.`}
        integration={integration}
        workflows={relatedWorkflows}
      />

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <WorkflowGallery
          workflows={relatedWorkflows}
          title={
            <>
              A Battle-Tested Recipe <br />
              For Every {integration.name} Scenario
            </>
          }
          subtitle={
            <p className="text-muted-foreground text-lg max-w-2xl text-center">
              Get actionable campaigns and strategies from your{" "}
              {integration.name} data in seconds, not spreadsheets. Copy-paste
              ready.
            </p>
          }
          maxDisplay={9}
          viewAllLink={`/workflows?integration=${integration.id}`}
          viewAllText={`View All ${relatedWorkflows.length} Workflows`}
          filterIntegration={integration.id}
        />
      )}

      {/* Home Data Agent */}
      <HomeDataAgent />

      {/* Integration Connection CTA */}
      <IntegrationConnection integration={integration} />

      {/* Final CTA */}
      <MainCTA />
    </main>
  );
}

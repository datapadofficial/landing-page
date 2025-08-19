import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getIntegrationById,
  getAllIntegrations,
} from "@/lib/integration-helpers";
import { getWorkflowsByIntegration } from "@/lib/workflow-template-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IntegrationConnection } from "@/components/integration-connection";
import { Cta18 } from "@/components/cta18";
import { IntegrationPainPoints } from "@/components/integrations/integration-pain-points";

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
      <section className="pt-8 sm:pt-16">
        <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden pb-8 sm:pb-4">
          <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />

          <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-7xl">
            {/* Integration Icon */}
            <div className="flex justify-center mb-4">
              <div className="flex size-20 items-center justify-center rounded-2xl border bg-background drop-shadow-lg">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex justify-center">
              <Badge
                variant="secondary"
                className={cn("border-opacity-20 hover:bg-opacity-20")}
              >
                <BarChart3 className="size-4 mr-0" />
                {integration.category.charAt(0).toUpperCase() +
                  integration.category.slice(1)}{" "}
                Integration
              </Badge>
            </div>

            {/* Title */}
            <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight">
              {integration.headline}
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
              {integration.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-30 flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://app.datapad.io">Connect {integration.name}</a>
            </Button>

            <Link href="https://app.datapad.io">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {integration.secondaryCta ?? "Book a 15m Demo"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Component */}
      <IntegrationPainPoints integration={integration} />

      {/* Integration Connection Interface */}
      <IntegrationConnection integration={integration} />

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <section className="py-16 flex flex-col items-center justify-center w-full max-w-5xl">
          <div className="flex flex-col text-center mb-12 gap-4">
            <h2>Workflows using {integration.name}</h2>
            <p className="text-muted-foreground text-lg">
              Ready-to-use analytics workflows that leverage {integration.name}{" "}
              data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {relatedWorkflows.slice(0, 9).map((workflow) => (
              <WorkflowCard
                key={workflow.slug}
                workflow={workflow}
                filterIntegration={integration.id}
              />
            ))}
          </div>

          {relatedWorkflows.length > 6 && (
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href={`/workflows?integration=${integration.id}`}>
                  View All {relatedWorkflows.length} Workflows
                </Link>
              </Button>
            </div>
          )}
        </section>
      )}

      {/* Final CTA */}
      <Cta18 />
    </main>
  );
}

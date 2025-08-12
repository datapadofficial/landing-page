import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getIntegrationById, getAllIntegrations } from "@/lib/integrations";
import { getWorkflowsByIntegration } from "@/lib/workflows";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowCard } from "@/components/ui/workflow-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ExternalLink, Clock, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Feature187 } from "@/components/feature187";

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

  // Check for custom page override
  try {
    const CustomPage = await import(
      `../../../components/integrations/${integration.id}/page`
    ).then((module) => module.default);
    return (
      <CustomPage integration={integration} workflows={relatedWorkflows} />
    );
  } catch {
    // No custom page found, use inline template
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
                <BreadcrumbLink href="/integrations">
                  Integrations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{integration.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

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
              {integration.name}
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
            {integration.website && (
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a
                  href={integration.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Why Connect - Conversion Section */}
      {integration.conversionCopy && (
        <section className="py-32">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Compact Conversion Header */}
              <div className="text-center mb-12">
                <h2 className="mb-4">
                  {integration.conversionCopy.whyConnect.headline}
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  {integration.conversionCopy.whyConnect.description}
                </p>
                <Button asChild size="lg">
                  <a href="https://app.datapad.io">
                    {integration.conversionCopy.whyConnect.cta}
                  </a>
                </Button>
              </div>

              {/* Benefits and Pain Points in Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-green-600" />
                    </div>
                    <h3 className="font-semibold">What You'll Get</h3>
                  </div>
                  <div className="space-y-3">
                    {integration.conversionCopy.whyConnect.benefits
                      .slice(0, 3)
                      .map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 text-orange-600" />
                    </div>
                    <h3 className="font-semibold">Problems We Solve</h3>
                  </div>
                  <div className="space-y-3">
                    {integration.conversionCopy.painPoints
                      .slice(0, 3)
                      .map((painPoint, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {painPoint}
                          </p>
                        </div>
                      ))}
                  </div>
                </Card>
              </div>

              {/* Dynamic transformation steps using Feature187 */}
              <div className="col-span-full">
                <Feature187 integration={integration} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      {integration.seoContent?.overview && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                About {integration.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect your {integration.name} account to Datapad for
                comprehensive analysis and insights. Get real-time data
                synchronization and powerful analytics to optimize your{" "}
                {integration.category} performance.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specs */}
      <section className="py-16 max-w-5xl">
        <div className="container">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Data Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {integration.specs.dataTypes.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Update Frequency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">
                    {integration.specs.updateFrequency}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">
                    {integration.specs.historicalData}
                  </p>
                </CardContent>
              </Card>

              {integration.specs.apiDocs && (
                <Card>
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={integration.specs.apiDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View API Docs <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <section className="py-16 flex flex-col items-center justify-center w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Workflows using {integration.name}
            </h2>
            <p className="text-muted-foreground">
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

      {/* Key Benefits - Only show if no conversion copy */}
      {!integration.conversionCopy && (
        <section className="py-16 bg-black-5 dark:bg-white-5 border rounded-xl">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Why Connect {integration.name}?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Unlock powerful insights and streamline your{" "}
                  {integration.category} analytics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Real-time Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get up-to-date data with{" "}
                    {integration.specs.updateFrequency.toLowerCase()}{" "}
                    synchronization
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Historical Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Access {integration.specs.historicalData} of historical data
                    for trend analysis
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Easy Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect in minutes with our guided setup process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Connect {integration.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start analyzing your {integration.category} data with Datapad's
              AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Connect {integration.name}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://app.datapad.io">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

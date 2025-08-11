"use client";

import { Integration } from "@/lib/integrations";
import { Workflow } from "@/lib/workflows";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ExternalLink,
  Clock,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface IntegrationPageTemplateProps {
  integration: Integration;
  workflows: Workflow[];
  customContent?: React.ReactNode;
}

// Markdown renderer component
function MarkdownSection({ content }: { content: string }) {
  // Simple markdown parsing - you could use a proper markdown parser here
  const html = content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
    .replace(
      /^## (.*$)/gm,
      '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>'
    )
    .replace(
      /^### (.*$)/gm,
      '<h3 class="text-xl font-semibold mb-3 mt-6">$1</h3>'
    )
    .replace(/^\* (.*$)/gm, '<li class="mb-2">$1</li>')
    .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
    .replace(
      /<\/p><p class="mb-4"><li/g,
      '</p><ul class="list-disc list-inside mb-6"><li'
    )
    .replace(/<\/li>\n<p class="mb-4">(?!<li)/g, '</li></ul><p class="mb-4">');

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function IntegrationPageTemplate({
  integration,
  workflows,
  customContent,
}: IntegrationPageTemplateProps) {
  const categoryColors: { [key: string]: string } = {
    advertising: "bg-red-100 text-red-800 border-red-200",
    analytics: "bg-blue-100 text-blue-800 border-blue-200",
    crm: "bg-green-100 text-green-800 border-green-200",
    ecommerce: "bg-purple-100 text-purple-800 border-purple-200",
    social: "bg-pink-100 text-pink-800 border-pink-200",
    database: "bg-gray-100 text-gray-800 border-gray-200",
    finance: "bg-yellow-100 text-yellow-800 border-yellow-200",
    email: "bg-indigo-100 text-indigo-800 border-indigo-200",
    other: "bg-gray-100 text-gray-800 border-gray-200",
  };

  const difficultyColors: { [key: string]: string } = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

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
      <section className="pt-8 pb-16 sm:pb-24">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex size-16 items-center justify-center rounded-2xl border bg-background drop-shadow-lg">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {integration.name}
                </h1>
                <Badge
                  className={`mt-2 ${
                    categoryColors[integration.category] || categoryColors.other
                  }`}
                  variant="outline"
                >
                  {integration.category.charAt(0).toUpperCase() +
                    integration.category.slice(1)}
                </Badge>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {integration.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Connect {integration.name}</a>
              </Button>
              {integration.website && (
                <Button asChild variant="outline" size="lg">
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
        </div>
      </section>

      {/* SEO Content Sections */}
      {integration.seoContent?.overview && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <MarkdownSection content={integration.seoContent.overview} />
            </div>
          </div>
        </section>
      )}

      {/* Custom Content */}
      {customContent}

      {/* Technical Specs */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Use Cases */}
      {integration.seoContent?.useCases && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <MarkdownSection content={integration.seoContent.useCases} />
            </div>
          </div>
        </section>
      )}

      {/* Related Workflows */}
      {workflows.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Workflows using {integration.name}
                </h2>
                <p className="text-muted-foreground">
                  Ready-to-use analytics workflows that leverage{" "}
                  {integration.name} data
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workflows.slice(0, 6).map((recipe) => (
                  <Card
                    key={recipe.slug}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={difficultyColors[recipe.difficulty]}
                          variant="outline"
                        >
                          {recipe.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {recipe.estimatedTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {recipe.integrations
                            .slice(0, 3)
                            .map((integrationId) => (
                              <div
                                key={integrationId}
                                className="w-6 h-6 rounded-full border-2 border-background overflow-hidden"
                              >
                                <Image
                                  src={`/images/integrations/${integrationId}.png`}
                                  alt={integrationId}
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          {recipe.integrations.length > 3 && (
                            <div className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                              <span className="text-xs">
                                +{recipe.integrations.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/workflows/${recipe.slug}`}>
                            View Workflow{" "}
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {workflows.length > 6 && (
                <div className="text-center mt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link href={`/workflows?integration=${integration.id}`}>
                      View All {workflows.length} Workflows
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Setup Guide */}
      {integration.seoContent?.setup && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <MarkdownSection content={integration.seoContent.setup} />
              <div className="text-center mt-8">
                <Button asChild size="lg">
                  <a href="https://app.datapad.io">Start Setup</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

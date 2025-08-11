"use client";

import React from "react";
import { Integration } from "@/lib/integrations";
import { Workflow } from "@/lib/workflows";
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

interface IntegrationPageTemplateProps {
  integration: Integration;
  workflows: Workflow[];
  customContent?: React.ReactNode;
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

      {/* Custom Content */}
      {customContent}

      {/* Technical Specs */}
      <section className="py-16">
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

      {/* Key Benefits */}
      <section className="py-16 bg-muted/50">
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

      {/* Related Workflows */}
      {workflows.length > 0 && (
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
            {workflows.slice(0, 9).map((workflow) => (
              <WorkflowCard
                key={workflow.slug}
                workflow={workflow}
                filterIntegration={integration.id}
              />
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

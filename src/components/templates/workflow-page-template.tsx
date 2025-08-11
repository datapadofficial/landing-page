"use client";

import { Workflow } from "@/lib/workflows";
import { getIntegrationsByIds } from "@/lib/integrations";
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
  Clock,
  Users,
  BarChart3,
  ArrowRight,
  Play,
  Download,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Feature242 } from "@/components/feature242";

interface WorkflowPageTemplateProps {
  workflow: Workflow;
  relatedWorkflows: Workflow[];
}

export function WorkflowPageTemplate({
  workflow,
  relatedWorkflows,
}: WorkflowPageTemplateProps) {
  const integrations = getIntegrationsByIds(workflow.integrations);

  const difficultyColors: { [key: string]: string } = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

  const categoryColors: { [key: string]: string } = {
    marketing: "bg-red-100 text-red-800 border-red-200",
    sales: "bg-green-100 text-green-800 border-green-200",
    "retail-ecommerce": "bg-purple-100 text-purple-800 border-purple-200",
    "content-seo": "bg-blue-100 text-blue-800 border-blue-200",
    "social-media": "bg-pink-100 text-pink-800 border-pink-200",
    "product-management": "bg-indigo-100 text-indigo-800 border-indigo-200",
    finance: "bg-yellow-100 text-yellow-800 border-yellow-200",
    agency: "bg-orange-100 text-orange-800 border-orange-200",
    growth: "bg-teal-100 text-teal-800 border-teal-200",
    "supply-chain": "bg-gray-100 text-gray-800 border-gray-200",
    crm: "bg-cyan-100 text-cyan-800 border-cyan-200",
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
                <BreadcrumbLink href="/workflows">Workflows</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{workflow.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-16">
        <div className="container">
          <div className="mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge
                className={
                  categoryColors[workflow.team] || categoryColors["crm"]
                }
                variant="outline"
              >
                {workflow.team
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
              <Badge
                className={difficultyColors[workflow.difficulty]}
                variant="outline"
              >
                {workflow.difficulty}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {workflow.estimatedTime}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {workflow.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {workflow.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex items-center gap-2">
                <a href="https://app.datapad.io">
                  <Play className="h-4 w-4" />
                  Use This Workflow
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <a href="https://app.datapad.io">
                  <Download className="h-4 w-4" />
                  Export Template
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      What You'll Analyze
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                      <p className="text-lg font-medium mb-2">
                        Analysis Question:
                      </p>
                      <p className="text-muted-foreground italic">
                        "{workflow.prompt}"
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">
                        This workflow will help you:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Connect and analyze data from {integrations.length}{" "}
                          integration{integrations.length > 1 ? "s" : ""}
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Generate automated insights and visualizations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Create actionable reports and dashboards
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Set up automated monitoring and alerts
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Integrations Used */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Integrations Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {integrations.map((integration) => (
                        <Link
                          key={integration.id}
                          href={`/integrations/${integration.id}`}
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <Image
                            src={integration.icon}
                            alt={integration.name}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium">
                              {integration.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {integration.category}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Workflow Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Workflow Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Difficulty</span>
                      <Badge
                        className={difficultyColors[workflow.difficulty]}
                        variant="outline"
                      >
                        {workflow.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Time to Setup
                      </span>
                      <span className="font-medium">
                        {workflow.estimatedTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <Badge
                        className={categoryColors[workflow.team]}
                        variant="outline"
                      >
                        {workflow.team.replace("-", " ")}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Data Sources
                      </span>
                      <span className="font-medium">{integrations.length}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Feature242 />

      {/* Mock Data Preview */}
      {workflow.mockData && (
        <section className="py-16">
          <div className="container">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Preview Sample Results
              </h2>
              <p className="text-muted-foreground mb-8">
                See what kind of insights you'll get with this workflow
              </p>
              <div className="bg-background p-8 rounded-lg border">
                <div className="text-sm text-muted-foreground mb-4">
                  Sample data: {workflow.mockData}
                </div>
                <div className="h-64 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Interactive dashboard preview will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Related Workflows</h2>
                <p className="text-muted-foreground">
                  More analytics workflows you might find useful
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedWorkflows.map((relatedWorkflow) => (
                  <Card
                    key={relatedWorkflow.slug}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={
                            difficultyColors[relatedWorkflow.difficulty]
                          }
                          variant="outline"
                        >
                          {relatedWorkflow.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedWorkflow.estimatedTime}
                        </span>
                      </div>
                      <CardTitle className="text-base line-clamp-2">
                        {relatedWorkflow.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {relatedWorkflow.integrations
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
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/workflows/${relatedWorkflow.slug}`}>
                            View <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Use this workflow in Datapad to start analyzing your{" "}
              {workflow.team.replace("-", " ")} data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Start Free Trial</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/workflows">Browse More Workflows</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

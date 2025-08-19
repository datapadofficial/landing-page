import { Metadata } from "next";
import {
  getAllIntegrations,
  getIntegrationsByCategory,
} from "@/lib/integration-utils";
import { getAllTeams } from "@/lib/team-utils";
import { getWorkflowsByIntegration } from "@/lib/workflow-template-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, Filter, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Data Integrations - Connect 50+ Tools & Platforms | Datapad",
  description:
    "Connect all your data sources with Datapad. 50+ integrations including Google Analytics, Facebook Ads, Shopify, Salesforce, and more. No-code setup.",
  keywords:
    "data integrations, Google Analytics, Facebook Ads, Shopify, Salesforce, HubSpot, data connectors, business intelligence integrations, Datapad",
  openGraph: {
    title: "Data Integrations - Connect 50+ Tools & Platforms | Datapad",
    description:
      "Connect all your data sources with Datapad. 50+ integrations including Google Analytics, Facebook Ads, Shopify, Salesforce, and more. No-code setup.",
    type: "website",
  },
};

export default async function IntegrationsPage() {
  const integrations = getAllIntegrations();
  const teams = getAllTeams();

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

  // Group integrations by team for featured section
  const integrationsByTeam = teams.slice(0, 4).map((team) => ({
    name: team.name,
    slug: team.slug,
    description: team.description,
    integrations: integrations.filter((integration) =>
      team.featuredIntegrations.includes(integration.id)
    ),
  }));

  // Get integrations with recipe counts
  const integrationsWithStats = integrations.map((integration) => {
    const workflows = getWorkflowsByIntegration(integration.id);
    return {
      ...integration,
      recipeCount: workflows.length,
    };
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              +100 Data Sources in AI Workflows
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unify all your business data with 50+ pre-built integrations.
              No-code setup, real-time sync, and enterprise-grade security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Connect Your Data</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#integrations">Browse Integrations</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {integrations.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Data Integrations
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  1-Click
                </div>
                <div className="text-sm text-muted-foreground">
                  Setup Process
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  Real-time
                </div>
                <div className="text-sm text-muted-foreground">Data Sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations by Category */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Popular Integration Categories
              </h2>
              <p className="text-muted-foreground">
                Connect the tools you already use to get unified insights across
                your business
              </p>
            </div>

            <div className="space-y-12">
              {integrationsByTeam.map((team) => (
                <div key={team.slug}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {team.name} Integrations
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {team.description}
                      </p>
                    </div>
                    <Badge variant="outline">
                      {team.integrations.length} integrations
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.integrations.map((integration) => {
                      const recipeCount = getWorkflowsByIntegration(
                        integration.id
                      ).length;

                      return (
                        <Card
                          key={integration.id}
                          className="hover:shadow-lg transition-shadow"
                        >
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex size-12 items-center justify-center rounded-lg border bg-background">
                                <Image
                                  src={integration.icon}
                                  alt={integration.name}
                                  width={24}
                                  height={24}
                                  className="rounded"
                                />
                              </div>
                              <div>
                                <CardTitle className="text-lg">
                                  {integration.name}
                                </CardTitle>
                                <Badge
                                  className={
                                    categoryColors[integration.category]
                                  }
                                  variant="outline"
                                >
                                  {integration.category}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">
                              {integration.description}
                            </CardDescription>

                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-4">
                                {recipeCount > 0 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {recipeCount} workflows
                                  </Badge>
                                )}
                              </div>
                              <Button asChild variant="ghost" size="sm">
                                <Link href={`/integrations/${integration.id}`}>
                                  Learn More{" "}
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="py-16" id="integrations">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                All Integrations ({integrations.length})
              </h2>
              <p className="text-muted-foreground">
                Browse all available integrations or filter by category
              </p>
            </div>

            {/* Filters - This would be enhanced with client-side filtering */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search integrations..."
                  className="pl-10"
                  // This would need client-side state management
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="advertising">Advertising</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="crm">CRM</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Integration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationsWithStats.map((integration) => (
                <Card
                  key={integration.id}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex size-12 items-center justify-center rounded-lg border bg-background">
                        <Image
                          src={integration.icon}
                          alt={integration.name}
                          width={24}
                          height={24}
                          className="rounded"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {integration.name}
                        </CardTitle>
                        <Badge
                          className={categoryColors[integration.category]}
                          variant="outline"
                        >
                          {integration.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="mb-4 flex-1">
                      {integration.description}
                    </CardDescription>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/integrations/${integration.id}`}>
                            View Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        {integration.website && (
                          <Button asChild variant="ghost" size="sm">
                            <a
                              href={integration.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Datapad Integrations?
              </h2>
              <p className="text-muted-foreground">
                Enterprise-grade integrations built for speed, security, and
                scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">1-Click Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Connect your data sources in seconds with OAuth
                    authentication. No technical setup required.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Real-time Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Get the latest data automatically synced to your dashboards
                    and analyses in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Historical Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Access years of historical data to understand trends and
                    make informed decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Connect Your Data?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start unifying your business data with our {integrations.length}+
              integrations. Set up takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">
                  Connect Your First Integration
                </a>
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

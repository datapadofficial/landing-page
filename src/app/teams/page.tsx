import { Metadata } from "next";
import { getAllTeams } from "@/lib/team-utils";
import { getIntegrationsByIds } from "@/lib/integration-utils";
import { getWorkflowsByTeam } from "@/lib/workflow-template-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BOOKING_LINK } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Calculator,
  Package,
} from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { AttributionLink } from "@/components/attribution-link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Analytics Teams - Business Intelligence by Function | Datapad",
  description:
    "Explore analytics solutions by business function: Marketing, Sales, E-commerce, Finance, and more. Find the right data analysis tools for your team.",
  keywords:
    "business analytics, marketing analytics, sales analytics, ecommerce analytics, financial analytics, business intelligence teams, Datapad",
  openGraph: {
    title: "Analytics Teams - Business Intelligence by Function | Datapad",
    description:
      "Explore analytics solutions by business function: Marketing, Sales, E-commerce, Finance, and more. Find the right data analysis tools for your team.",
    type: "website",
  },
};

export default async function TeamsPage() {
  const teams = getAllTeams();

  // Get stats for each team
  const teamsWithStats = teams.map((team) => {
    const workflows = getWorkflowsByTeam(team.slug);
    const integrations = getIntegrationsByIds(team.featuredIntegrations);
    return {
      ...team,
      recipeCount: workflows.length,
      integrationCount: integrations.length,
      topIntegrations: integrations.slice(0, 3),
    };
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Analytics by Business Function
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find the perfect analytics solution for your team. From marketing
              attribution to financial forecasting, we have specialized tools
              for every business function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <AttributionLink buttonLocation="teams-page-hero-primary">
                  Get Started Free
                </AttributionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#teams">Explore Teams</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {teams.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Business Teams
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  1-Click, Data-Driven Workflows that Deliver 10x Business
                  Results
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  Data Integrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16" id="teams">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Choose Your Business Function
              </h2>
              <p className="text-muted-foreground">
                Each team includes specialized analytics workflows,
                integrations, and AI features designed for your specific use
                case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamsWithStats.map((team) => {
                return (
                  <Card
                    key={team.slug}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="flex size-12 items-center justify-center rounded-xl border bg-background drop-shadow-sm"
                          style={{ color: `var(--${team.color})` }}
                        >
                          <DynamicIcon
                            name={team.icon as IconName}
                            className="size-6"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{team.name}</CardTitle>
                          <Badge
                            variant="secondary"
                            className="mt-1"
                            style={{
                              backgroundColor: `var(--${team.color})10`,
                              color: `var(--${team.color})`,
                              borderColor: `var(--${team.color})20`,
                            }}
                          >
                            {team.recipeCount} workflows
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {team.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1 space-y-4">
                        {/* Featured Integrations */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Key Integrations:
                          </h4>
                          <div className="flex -space-x-2">
                            {team.topIntegrations.map((integration) => (
                              <div
                                key={integration.id}
                                className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-background"
                                title={integration.name}
                              >
                                <Image
                                  src={integration.icon}
                                  alt={integration.name}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                            {team.integrationCount > 3 && (
                              <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                                <span className="text-xs font-medium">
                                  +{team.integrationCount - 3}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="font-semibold text-lg">
                              {team.recipeCount}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Workflows
                            </div>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="font-semibold text-lg">
                              {team.integrationCount}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Integrations
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-4 border-t">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/teams/${team.slug}`}>
                            Explore {team.name}{" "}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Use Cases */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Popular Use Cases</h2>
              <p className="text-muted-foreground">
                See how teams across different functions are using Datapad to
                make data-driven decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Marketing Attribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "Which channels are driving my best customers?" Track
                    multi-touch attribution across all marketing channels with
                    AI-powered insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Sales Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "What will my revenue be next quarter?" Get accurate sales
                    forecasts based on pipeline data, seasonality, and market
                    trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">
                    E-commerce Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "How can I increase my conversion rate?" Analyze customer
                    behavior, cart abandonment, and optimize your sales funnel.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">SEO Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "Which content is driving organic traffic?" Track keyword
                    rankings, content performance, and SEO opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Financial Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "What's my cash flow forecast?" Monitor financial health,
                    predict cash flow, and track profitability metrics.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                    <Package className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Product Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    "How are users engaging with my product?" Track feature
                    adoption, user journeys, and product performance metrics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business Analytics?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose your business function and start getting AI-powered
              insights in minutes. No setup required, just connect your data and
              go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <AttributionLink buttonLocation="teams-page-cta-primary">
                  Start Free Trial
                </AttributionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <AttributionLink
                  href={BOOKING_LINK}
                  buttonLocation="teams-page-cta-demo"
                >
                  Book a Demo
                </AttributionLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

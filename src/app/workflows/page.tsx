import { Metadata } from "next";
import { getAllWorkflows, getWorkflowsByTeam } from "@/lib/workflows";
import { getAllTeams } from "@/lib/teams";
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
import { Clock, ArrowRight, Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Analytics Workflows - Ready-to-Use Data Analysis Templates | Datapad",
  description:
    "Browse 50+ ready-to-use analytics workflows for marketing, sales, e-commerce, and more. Connect your data and get insights in minutes with AI-powered templates.",
  keywords:
    "analytics workflows, data analysis templates, marketing analytics, sales analytics, business intelligence, Datapad",
  openGraph: {
    title:
      "Analytics Workflows - Ready-to-Use Data Analysis Templates | Datapad",
    description:
      "Browse 50+ ready-to-use analytics workflows for marketing, sales, e-commerce, and more. Connect your data and get insights in minutes with AI-powered templates.",
    type: "website",
  },
};

export default async function WorkflowsPage() {
  const workflows = getAllWorkflows();
  const teams = getAllTeams();

  const difficultyColors: { [key: string]: string } = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

  const teamColors: { [key: string]: string } = {
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

  // Group workflows by team for featured section
  const featuredWorkflows = teams.slice(0, 4).map((team) => ({
    team,
    workflows: getWorkflowsByTeam(team.slug).slice(0, 3),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Analytics Workflows
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready-to-use templates for the most common data analysis
              questions. Just connect your data sources and get insights in
              minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Try a Workflow</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#browse">Browse All Workflows</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {workflows.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Ready-to-Use Workflows
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {teams.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Business Teams
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

      {/* Featured Workflows by Category */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Popular Workflow Categories
              </h2>
              <p className="text-muted-foreground">
                Explore our most popular analytics workflows organized by
                business function
              </p>
            </div>

            <div className="space-y-12">
              {featuredWorkflows.map(({ team, workflows: teamWorkflows }) => (
                <div key={team.slug}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {team.name} Analytics
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {team.description}
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/teams/${team.slug}`}>
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamWorkflows.map((workflow) => (
                      <Card
                        key={workflow.slug}
                        className="hover:shadow-lg transition-shadow h-full"
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              className={difficultyColors[workflow.difficulty]}
                              variant="outline"
                            >
                              {workflow.difficulty}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {workflow.estimatedTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">
                            {workflow.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {workflow.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {workflow.integrations
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
                              {workflow.integrations.length > 3 && (
                                <div className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                                  <span className="text-xs">
                                    +{workflow.integrations.length - 3}
                                  </span>
                                </div>
                              )}
                            </div>
                            <Button asChild variant="ghost" size="sm">
                              <Link href={`/workflows/${workflow.slug}`}>
                                Use Workflow{" "}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Workflows */}
      <section className="py-16" id="browse">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                All Analytics Workflows ({workflows.length})
              </h2>
              <p className="text-muted-foreground">
                Browse all available workflows or filter by category and
                difficulty
              </p>
            </div>

            {/* Filters - This would be enhanced with client-side filtering */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search workflows..."
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
                  {teams.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Difficulties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Workflow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflows.map((workflow) => (
                <Card
                  key={workflow.slug}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge
                          className={
                            teamColors[workflow.team] || teamColors["crm"]
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
                      </div>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {workflow.estimatedTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {workflow.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {workflow.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">
                        Analysis Question:
                      </p>
                      <p className="text-xs text-muted-foreground italic line-clamp-2 mb-4">
                        "{workflow.prompt}"
                      </p>

                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">
                          Integrations Used:
                        </p>
                        <div className="flex -space-x-2">
                          {workflow.integrations
                            .slice(0, 4)
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
                          {workflow.integrations.length > 4 && (
                            <div className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                              <span className="text-xs">
                                +{workflow.integrations.length - 4}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/workflows/${workflow.slug}`}>
                          Use Workflow <ArrowRight className="ml-1 h-3 w-3" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Data Analysis?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from {workflows.length}+ ready-to-use analytics workflows
              and start getting insights in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">Start Free Trial</a>
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

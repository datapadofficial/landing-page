import { Metadata } from "next";
import { getAllWorkflows } from "@/lib/workflows";
import { getAllTeams } from "@/lib/teams";
import { Button } from "@/components/ui/button";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workflows - Ready-to-Deploy Business Solutions | Datapad",
  description:
    "Browse 50+ AI-powered workflows that create actionable deliverables for marketing, sales, e-commerce, and more. Get copy-paste ready campaigns, strategies, and content from your data.",
  keywords:
    "AI workflows, business automation, marketing campaigns, sales optimization, data-driven content, AI deliverables, Datapad",
  openGraph: {
    title: "AI Workflows - Ready-to-Deploy Business Solutions | Datapad",
    description:
      "Browse 50+ AI-powered workflows that create actionable deliverables for marketing, sales, e-commerce, and more. Get copy-paste ready campaigns, strategies, and content from your data.",
    type: "website",
  },
};

export default async function WorkflowsPage() {
  const workflows = getAllWorkflows();
  const teams = getAllTeams();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              AI Workflows
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get actionable deliverables from your data. While other tools show
              charts, Datapad creates campaigns, strategies, and content ready
              to deploy. Copy-paste ready. Implementation ready. Results ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">
                  Create Your First Deliverable
                </a>
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
                  AI-Powered Workflows
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
                  Data Sources Connected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* All Workflows */}
      <section
        className="py-16 w-full flex items-center flex-col max-w-5xl"
        id="browse"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              All AI Workflows ({workflows.length})
            </h2>
            <p className="text-muted-foreground">
              Browse all available AI workflows that create actionable
              deliverables from your data. Filter by business team and
              complexity level.
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
              <WorkflowCard key={workflow.slug} workflow={workflow} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Turn Your Data into Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from {workflows.length}+ AI workflows and get actionable
              deliverables in minutes. No more analysis paralysis - get
              campaigns, strategies, and content ready to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://app.datapad.io">
                  Create Your First Deliverable
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

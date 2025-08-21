import { Metadata } from "next";
import { getAllWorkflows } from "@/lib/workflow-template-helpers";
import { getAllTeams } from "@/lib/team-utils";
import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import { WorkflowsFilter } from "@/components/ui/workflows-filter";
import { AppVideoPreview } from "@/components/creatives/app-video-preview";

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
      <section className="py-8 sm:pt-32">
        <div className="container">
          <div className="mx-auto text-center flex flex-col items-center gap-8 sm:gap-12 max-w-5xl">
            <h1 className="">
              An AI Workflow for <br /> Every Situation
            </h1>
            <p className="text-lg text-muted-foregroundmax-w-2xl mx-auto">
              Get actionable deliverables from your data. While other tools show
              charts, Datapad creates campaigns, strategies, and content ready
              to deploy. Copy-paste ready. Implementation ready. Results ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <AttributionLink buttonLocation="workflows-hero-primary">
                  Create Your First Deliverable
                </AttributionLink>
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

      {/* Video Preview */}
      <AppVideoPreview videoUrl="/videos/workflows.mp4" />

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

          {/* Workflows with Filtering */}
          <WorkflowsFilter workflows={workflows} teams={teams} />
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
                <AttributionLink buttonLocation="workflows-cta-primary">
                  Create Your First Deliverable
                </AttributionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <AttributionLink buttonLocation="workflows-cta-demo">
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

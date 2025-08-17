"use client";

import { Team } from "@/lib/teams";
import { Workflow } from "@/lib/workflows";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TeamWorkflowsProps {
  team: Team;
  workflows: Workflow[];
  customContent?: React.ReactNode;
}

export function TeamWorkflows({
  team,
  workflows,
  customContent,
}: TeamWorkflowsProps) {
  // Show top 6 workflows
  const featuredWorkflows = workflows.slice(0, 6);

  return (
    <section className="py-16" id="workflows">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {customContent}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.slug} workflow={workflow} />
            ))}
          </div>

          {workflows.length > 6 && (
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href={`/workflows?team=${team.slug}`}>
                  View All {workflows.length} {team.name} Workflows
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

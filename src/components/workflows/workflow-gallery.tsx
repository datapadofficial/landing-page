"use client";

import { WorkflowTemplate } from "@/types/template";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import Link from "next/link";

interface WorkflowGalleryProps {
  workflows: WorkflowTemplate[];
  title?: ReactNode;
  subtitle?: ReactNode;
  maxDisplay?: number;
  viewAllLink?: string;
  viewAllText?: string;
  filterIntegration?: string;
  className?: string;
}

export function WorkflowGallery({
  workflows,
  title = (
    <>
      A Battle-Tested Recipe <br />
      For Every Scenario
    </>
  ),
  subtitle = (
    <p className="text-muted-foreground text-lg max-w-2xl text-center">
      Get actionable campaigns and strategies from your data in seconds, not
      spreadsheets. Copy-paste ready.
    </p>
  ),
  maxDisplay = 9,
  viewAllLink,
  viewAllText,
  filterIntegration,
  className = "",
}: WorkflowGalleryProps) {
  // Don't render if there are no workflows
  if (workflows.length === 0) {
    return null;
  }

  const displayedWorkflows = workflows.slice(0, maxDisplay);
  const hasMore = workflows.length > maxDisplay;

  return (
    <section
      className={`py-8 sm:py-32 px-4 sm:px-0 flex flex-col items-center justify-center w-full max-w-7xl ${className}`}
    >
      <div className="flex flex-col text-center mb-12 gap-4 sm:gap-8 items-center">
        <h2>{title}</h2>
        {subtitle}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {displayedWorkflows.map((workflow) => (
          <WorkflowCard
            key={workflow.slug}
            workflow={workflow}
            filterIntegration={filterIntegration}
          />
        ))}
      </div>

      {hasMore && viewAllLink && (
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href={viewAllLink}>
              {viewAllText || `View All ${workflows.length} Workflows`}
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}

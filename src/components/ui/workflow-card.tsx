"use client";

import { Workflow } from "../../data/workflow-templates/workflow-templates";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WorkflowCardProps {
  workflow: Workflow;
  className?: string;
  filterIntegration?: string; // Show only this integration's icon if provided
}

export function WorkflowCard({
  workflow,
  className = "",
  filterIntegration,
}: WorkflowCardProps) {
  return (
    <Card className={`hover:shadow-lg transition-shadow h-full ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{workflow.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {workflow.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {(() => {
              // If filterIntegration is provided, show only that integration if it exists in the workflow
              if (filterIntegration) {
                if (workflow.integrations.includes(filterIntegration)) {
                  return (
                    <div className="w-5 h-5 rounded-sm border-2 border-background overflow-hidden">
                      <Image
                        src={`/images/integrations/${filterIntegration}.png`}
                        alt={filterIntegration}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }
                return null;
              }

              // Default behavior: show up to 3 integration icons
              return (
                <>
                  {workflow.integrations.slice(0, 3).map((integrationId) => (
                    <div
                      key={integrationId}
                      className="w-5 h-5 rounded-sm overflow-hidden"
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
                    <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                      <span className="text-xs">
                        +{workflow.integrations.length - 3}
                      </span>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/workflows/${workflow.slug}`}>
              View <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

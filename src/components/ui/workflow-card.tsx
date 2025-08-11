"use client";

import { Workflow } from "@/lib/workflows";
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
}

export function WorkflowCard({ workflow, className = "" }: WorkflowCardProps) {
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
          <div className="flex -space-x-2">
            {workflow.integrations.slice(0, 3).map((integrationId) => (
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
              Use Workflow <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { Team } from "@/lib/categories";
import { Workflow } from "@/lib/workflows";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  const difficultyColors: { [key: string]: string } = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
  };

  // Show top 6 workflows
  const featuredWorkflows = workflows.slice(0, 6);

  return (
    <section className="py-16 bg-muted/30" id="workflows">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {customContent}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkflows.map((recipe) => (
              <Card
                key={recipe.slug}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      className={difficultyColors[recipe.difficulty]}
                      variant="outline"
                    >
                      {recipe.difficulty}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {recipe.estimatedTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {recipe.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {recipe.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">
                        Analysis Question:
                      </p>
                      <p className="text-xs text-muted-foreground italic line-clamp-2">
                        "{recipe.prompt}"
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">
                        Integrations Used:
                      </p>
                      <div className="flex -space-x-2">
                        {recipe.integrations
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
                        {recipe.integrations.length > 4 && (
                          <div className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                            <span className="text-xs">
                              +{recipe.integrations.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/workflows/${recipe.slug}`}>
                        Use Workflow <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

"use client";

import { Team } from "@/lib/teams";
import { Feature } from "@/lib/features";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
};

interface TeamFeaturesProps {
  team: Team;
  features: (Feature | undefined)[];
  customContent?: React.ReactNode;
}

export function TeamFeatures({
  team,
  features,
  customContent,
}: TeamFeaturesProps) {
  const validFeatures = features.filter((f): f is Feature => f !== undefined);

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {customContent || (
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Powerful Features for {team.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AI-powered tools designed specifically for{" "}
                {team.name.toLowerCase()} teams
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {validFeatures.map((feature) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];

              return (
                <Card
                  key={feature.slug}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="flex size-12 items-center justify-center rounded-lg border bg-background"
                        style={{ color: `var(--${feature.color})` }}
                      >
                        {IconComponent && <IconComponent className="size-6" />}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          style={{
                            backgroundColor: `var(--${feature.color})10`,
                            color: `var(--${feature.color})`,
                          }}
                        >
                          {feature.team}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="mb-4 flex-1">
                      {feature.shortDescription}
                    </CardDescription>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Key Benefits:
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {feature.benefits
                            .slice(0, 3)
                            .map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/features/${feature.slug}`}>
                            Learn More <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Team } from "@/lib/teams";
import { Workflow } from "@/lib/workflows";
import { Integration } from "@/lib/integrations";
import { Feature } from "@/lib/features";
import { TeamHero } from "@/components/team/team-hero";
import { TeamIntegrations } from "@/components/team/team-integrations";
import { TeamWorkflows } from "@/components/team/team-workflows";
import { TeamFeatures } from "@/components/team/team-features";
import { TeamCTA } from "@/components/team/team-cta";

interface TeamPageTemplateProps {
  team: Team;
  workflows: Workflow[];
  integrations: Integration[];
  features: (Feature | undefined)[];
  customContent?: {
    hero?: React.ReactNode;
    integrations?: React.ReactNode;
    workflows?: React.ReactNode;
    features?: React.ReactNode;
    cta?: React.ReactNode;
  };
}

export function TeamPageTemplate({
  team,
  workflows,
  integrations,
  features,
  customContent,
}: TeamPageTemplateProps) {
  return (
    <>
      <TeamHero
        team={team}
        customContent={
          customContent?.hero || (
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">
                {team.name} Analytics Made Simple
              </h3>
              <p className="text-muted-foreground">
                Transform your {team.name.toLowerCase()} data into actionable insights with AI-powered analytics.
                Connect your tools and get answers to your most important questions in seconds.
              </p>
            </div>
          )
        }
      />

      <TeamIntegrations
        team={team}
        integrations={integrations}
        customContent={
          customContent?.integrations || (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Connect Your {team.name} Stack
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Integrate all your {team.name.toLowerCase()} tools and get a unified view of your
                performance, metrics, and insights across every platform.
              </p>
            </div>
          )
        }
      />

      <TeamWorkflows
        team={team}
        workflows={workflows}
        customContent={
          customContent?.workflows || (
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {team.name} Workflows
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready-to-use analytics workflows designed specifically for {team.name.toLowerCase()} teams.
                Get instant insights without the complexity.
              </p>
            </div>
          )
        }
      />

      <TeamFeatures
        team={team}
        features={features}
        customContent={customContent?.features}
      />

      <TeamCTA
        team={team}
        customContent={customContent?.cta}
      />
    </>
  );
}

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

interface MarketingTeamPageProps {
  team: Team;
  workflows: Workflow[];
  integrations: Integration[];
  features: (Feature | undefined)[];
}

export default function MarketingTeamPage({
  team,
  workflows,
  integrations,
  features,
}: MarketingTeamPageProps) {
  return (
    <>
      <TeamHero
        team={team}
        customContent={
          <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">
              Marketing Analytics Made Simple
            </h3>
            <p className="text-muted-foreground">
              Stop juggling multiple dashboards. Datapad unifies your Facebook
              Ads, Google Ads, Analytics, and more into one intelligent platform
              that answers your marketing questions in seconds.
            </p>
          </div>
        }
      />

      <TeamIntegrations
        team={team}
        integrations={integrations}
        customContent={
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Connect Your Marketing Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrate all your marketing tools and get a unified view of your
              campaign performance, ROI, and customer journey across every
              channel.
            </p>
          </div>
        }
      />

      <TeamFeatures
        team={team}
        features={features}
        customContent={
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/10 dark:to-orange-950/10 py-16 mb-16">
            <div className="container">
              <div className="mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">
                  AI-Powered Marketing Intelligence
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get instant answers to your marketing questions with features
                  designed specifically for marketers
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">Attribution Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      "Which channels are driving my best customers?" Get
                      multi-touch attribution insights instantly.
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">ROI Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      "Where should I spend my budget?" AI analyzes performance
                      and recommends optimal allocation.
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">Predictive Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      "What will my CAC be next month?" Get forecasts based on
                      current trends and seasonality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <TeamWorkflows
        team={team}
        workflows={workflows}
        customContent={
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Marketing Analytics Workflows
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use templates for the most common marketing analysis
              questions. Just connect your data and get insights in minutes, not
              hours.
            </p>
          </div>
        }
      />

      <TeamCTA
        team={team}
        customContent={
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
            <div className="container">
              <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Transform Your Marketing Analytics
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Join 1000+ marketing teams who've replaced their scattered
                  dashboards with Datapad's unified marketing intelligence
                  platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

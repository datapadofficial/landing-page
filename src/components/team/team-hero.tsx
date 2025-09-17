"use client";

import { Team } from "@/types/team";
import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface TeamHeroProps {
  team: Team;
  customContent?: React.ReactNode;
}

export function TeamHero({ team, customContent }: TeamHeroProps) {
  return (
    <section className="pt-8 sm:pt-32 pb-8 sm:pb-32 px-4 sm:px-0">
      <div className="container">
        <div className="mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-6">
            <div
              className="flex size-16 items-center justify-center rounded-2xl border bg-background drop-shadow-lg"
              style={{ color: `var(--${team.color})` }}
            >
              <DynamicIcon name={team.icon as IconName} className="size-8" />
            </div>
            <div className="text-center">
              <h1 className="max-w-6xl">
                {team.heroTitle || `Crunch ${team.name} Data Like a Boss`}
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {team.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <AttributionLink
                buttonLocation="team-hero-primary"
                searchParams={{ team: team.slug }}
              >
                Get Started Free
              </AttributionLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#workflows">View Workflows</a>
            </Button>
          </div>

          {customContent}
        </div>
      </div>
    </section>
  );
}
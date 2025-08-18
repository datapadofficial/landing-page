"use client";

import { Team } from "../../data/teams/teams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart } from "lucide-react";

interface TeamHeroProps {
  team: Team;
  customContent?: React.ReactNode;
}

export function TeamHero({ team, customContent }: TeamHeroProps) {
  return (
    <section className="pt-16 sm:pt-24 pb-16">
      <div className="container">
        <div className="mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-6">
            <div
              className="flex size-16 items-center justify-center rounded-2xl border bg-background drop-shadow-lg"
              style={{ color: `var(--${team.color})` }}
            >
              <PieChart className="size-8" />
            </div>
            <div className="text-center">
              <h1 className="max-w-6xl">Crunch {team.name} Data Like a Boss</h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {team.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <a href="https://app.datapad.io">Get Started Free</a>
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

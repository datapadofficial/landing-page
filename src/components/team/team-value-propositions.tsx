"use client";

import { Feature197 } from "@/components/feature197";
import type { Team } from "@/lib/teams";
import { cn } from "@/lib/utils";

interface TeamValuePropositionsProps {
  team: Team;
  className?: string;
}

export function TeamValuePropositions({
  team,
  className,
}: TeamValuePropositionsProps) {
  if (!team.valuePropositions || team.valuePropositions.length === 0) {
    return null;
  }

  return (
    <div className={cn("py-36", className)}>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why {team.name} Teams Choose Datapad
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Discover how Datapad transforms {team.name.toLowerCase()} analytics
          and reporting
        </p>
      </div>
      <Feature197 features={team.valuePropositions} />
    </div>
  );
}

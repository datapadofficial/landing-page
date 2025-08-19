"use client";

import { Team } from "@/types/team";
import { Button } from "@/components/ui/button";

interface TeamCTAProps {
  team: Team;
  customContent?: React.ReactNode;
}

export function TeamCTA({ team, customContent }: TeamCTAProps) {
  if (customContent) {
    return <section className="py-16">{customContent}</section>;
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your {team.name} Analytics?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of {team.name.toLowerCase()} teams using Datapad to
            make data-driven decisions faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://app.datapad.io">Start Free Trial</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://app.datapad.io">Book a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

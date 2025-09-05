"use client";

import { Team } from "@/types/team";
import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import { BOOKING_LINK } from "@/lib/constants";

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
              <AttributionLink
                buttonLocation="team-cta-primary"
                searchParams={{ team: team.slug }}
              >
                Start Free Trial
              </AttributionLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <AttributionLink
                href={BOOKING_LINK}
                buttonLocation="team-cta-demo"
                searchParams={{ team: team.slug }}
              >
                Book a Demo
              </AttributionLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Team } from "@/types/team";
import { Integration } from "@/types/integration";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getIntegrationsForTeam } from "@/lib/integration-utils";

interface IntegrationListProps {
  team: Team;
  integrations: Integration[];
  customContent?: React.ReactNode;
}

export function IntegrationList({ team }: IntegrationListProps) {
  const integrations = getIntegrationsForTeam(team.slug);
  return (
    <section className="py-16 max-w-7xl mx-auto container flex flex-col gap-16">
      <div className="text-center flex flex-col items-center gap-8">
        <h2>Connect Your {team.name} Stack</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Integrate all your {team.name.toLowerCase()} tools and get a unified
          view of your performance, metrics, and insights across every platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card
            key={integration.id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="flex flex-col gap-6">
              <div className="flex size-12 items-center justify-center rounded-lg border bg-background shrink-0">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={24}
                  height={24}
                  className="rounded"
                />
              </div>
              <div>
                <CardTitle className="text-lg">{integration.name}</CardTitle>
                <CardDescription className="text-sm">
                  {integration.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/integrations/${integration.id}`}>
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

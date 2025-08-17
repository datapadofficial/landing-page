"use client";

import { Team } from "@/lib/teams";
import { Integration } from "@/lib/integrations";
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

interface TeamIntegrationsProps {
  team: Team;
  integrations: Integration[];
  customContent?: React.ReactNode;
}

export function TeamIntegrations({
  integrations,
  customContent,
}: TeamIntegrationsProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {customContent}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <Card
                key={integration.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex size-12 items-center justify-center rounded-lg border bg-background">
                      <Image
                        src={integration.icon}
                        alt={integration.name}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {integration.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {integration.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {integration.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {integration.specs.updateFrequency} updates
                    </div>
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
        </div>
      </div>
    </section>
  );
}

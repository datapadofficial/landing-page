"use client";

import { ArrowLeftRight, Check } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Integration } from "@/lib/integrations";
import { getFeatureBySlug } from "@/lib/features";

interface Integration12Props {
  integration: Integration;
}

const Integration12 = ({ integration }: Integration12Props) => {
  // Get the integrations feature data for benefits
  const integrationsFeature = getFeatureBySlug("integrations");
  const benefits = integrationsFeature?.benefits || [
    "50+ pre-built connectors",
    "Secure data connections",
    "Real-time synchronization",
    "No-code setup",
    "Enterprise-grade security",
  ];

  return (
    <section className="flex items-center justify-center py-32  bg-black-3 dark:bg-white-3 border border-input rounded-xl">
      <div className="container">
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 p-0">
          <div className="flex w-full flex-col items-center gap-2 border-b pb-4">
            <div className="mb-2 mt-2 flex items-center justify-center gap-4">
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={24}
                  height={24}
                />
              </div>
              <ArrowLeftRight className="size-4" />
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <Image
                  src="/images/datapad-logo.svg"
                  alt="Datapad"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Connect {integration.name} to Datapad
            </h1>
            <p className="text-muted-foreground mt-1 text-center text-base">
              {integration.description}
            </p>
          </div>
          <div className="w-full py-6">
            <ul className="space-y-3">
              {benefits.slice(0, 5).map((benefit, i) => (
                <li
                  key={i}
                  className="text-foreground flex items-center gap-3 text-sm"
                >
                  <Check className="text-primary size-4" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center justify-end gap-2 pb-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="button" asChild>
              <a href="https://app.datapad.io">Connect now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration12 };

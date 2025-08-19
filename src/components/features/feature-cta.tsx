"use client";

import { Feature } from "../../data/features/features";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
} from "lucide-react";

const iconMap = {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
};

interface FeatureCTAProps {
  feature: Feature;
}

const FeatureCTA = ({ feature }: FeatureCTAProps) => {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <section className="py-16 sm:py-24 lg:py-32 w-full flex flex-col items-center">
      <div className="border bg-black-3 dark:bg-white-3 rounded-2xl sm:rounded-3xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div
            className="flex size-16 items-center justify-center rounded-2xl border bg-background dark:bg-white-10 drop-shadow-lg"
            style={{
              color: `var(--${feature.color})`,
              borderColor: `var(--${feature.color})20`,
              backgroundColor: `var(--${feature.color})10`,
            }}
          >
            {IconComponent && <IconComponent className="size-8" />}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
          Ready to Experience {feature.title}?
        </h2>

        <p className="text-muted-foreground mb-8 mx-auto text-lg">
          Join thousands of teams already using {feature.title.toLowerCase()} to
          transform their data workflow. Start your free trial today and see the
          difference in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={feature.ctaUrl}>{feature.ctaText}</a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <a href="https://app.datapad.io">Book a Demo</a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          No credit card required • 14-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
};

export { FeatureCTA };

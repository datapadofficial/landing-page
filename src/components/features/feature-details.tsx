"use client";

import { Feature } from "@/types/feature";
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

interface FeatureDetailsProps {
  feature: Feature;
}

const FeatureDetails = ({ feature }: FeatureDetailsProps) => {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <section className="py-16 sm:py-24 lg:py-32 max-w-7xl">
      <div className="container">
        <div className="border bg-black-3 dark:bg-white-3 rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-8 sm:py-12 md:px-16 md:py-16">
          <div className="mx-auto">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div
                className="flex size-16 items-center justify-center rounded-2xl border bg-background dark:bg-white-10 drop-shadow-lg"
                style={{ color: `var(--${feature.color})` }}
              >
                {IconComponent && <IconComponent className="size-8" />}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
                  How {feature.title} Works
                </h2>
                <p className="text-muted-foreground mt-2">
                  Deep dive into the capabilities and functionality
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureDetails };

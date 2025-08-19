"use client";

import { useState } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import { Feature } from "@/types/feature";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureAccordionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  features: Feature[];
  className?: string;
}

export function FeatureAccordion({
  title,
  subtitle,
  features,
  className,
}: FeatureAccordionProps) {
  const [activeFeatureSlug, setActiveFeatureSlug] = useState<string | null>(
    features[0]?.slug || null
  );
  const [activeVideo, setActiveVideo] = useState(features[0]?.videoUrl);

  if (!features || features.length === 0) {
    return null;
  }

  const handleValueChange = (value: string) => {
    if (value) {
      const featureSlug = value.replace("item-", "");
      const selectedFeature = features.find(
        (feature) => feature.slug === featureSlug
      );
      if (selectedFeature) {
        setActiveFeatureSlug(featureSlug);
        setActiveVideo(selectedFeature.videoUrl);
      }
    }
  };

  // Get text color class based on feature color
  const getTextColor = (color: string) => {
    return color.startsWith("chart-") ? `text-${color}` : `text-chart-${color}`;
  };

  // Get hover color class based on feature color
  const getHoverColor = (color: string) => {
    return color.startsWith("chart-")
      ? `hover:text-${color}`
      : `hover:text-chart-${color}`;
  };

  return (
    <div className={cn("py-36", className)}>
      <div className="container mx-auto text-center mb-12 flex flex-col gap-6">
        {title ?? <h2>Features</h2>}
        {subtitle ?? (
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Discover how Datapad transforms analytics and reporting
          </p>
        )}
      </div>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="mb-12 flex w-full items-start justify-between gap-20">
            <div className="w-full md:w-1/2">
              <Accordion
                type="single"
                className="w-full"
                defaultValue={`item-${features[0]?.slug}`}
                onValueChange={handleValueChange}
              >
                {features.map((feature) => {
                  const textColor = getTextColor(feature.color);
                  const hoverColor = getHoverColor(feature.color);

                  return (
                    <AccordionItem
                      key={feature.slug}
                      value={`item-${feature.slug}`}
                    >
                      <AccordionTrigger className="cursor-pointer py-5 no-underline! transition flex items-center justify-start">
                        {feature.icon && (
                          <div className="h-10 w-10 flex items-center justify-center bg-black-3 dark:bg-white-3 rounded-lg border border-input">
                            <DynamicIcon
                              name={feature.icon as IconName}
                              className={`${textColor} size-5`}
                            />
                          </div>
                        )}
                        <h4
                          className={`flex items-center transition-colors ${hoverColor} ${
                            feature.slug === activeFeatureSlug
                              ? textColor
                              : "text-foreground/50"
                          }`}
                        >
                          {feature.title}
                        </h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-3 text-lg text-foreground/50">
                          {feature.longDescription}
                        </p>
                        <div className="mt-4 md:hidden">
                          <video
                            src={feature.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full max-h-80 w-full rounded-md object-cover"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block p-3">
              <video
                key={activeVideo}
                src={activeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="object-contain w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

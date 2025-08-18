"use client";

import { useState } from "react";
import {
  Layers,
  Gauge,
  BarChart3,
  MessageCircle,
  LucideIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  gauge: Gauge,
  "bar-chart-3": BarChart3,
  "message-circle": MessageCircle,
};

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
  videoUrl?: string;
  icon?: string;
}

interface Feature197Props {
  features: FeatureItem[];
}

const Feature197 = ({ features }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeVideo, setActiveVideo] = useState(features[0].videoUrl);

  // Chart color rotation with hover states
  const chartColors = [
    {
      text: "text-chart-red",
      hover: "hover:text-chart-red",
    },
    {
      text: "text-chart-green",
      hover: "hover:text-chart-green",
    },
    {
      text: "text-chart-purple",
      hover: "hover:text-chart-purple",
    },
    {
      text: "text-chart-yellow",
      hover: "hover:text-chart-yellow",
    },
    {
      text: "text-chart-orange",
      hover: "hover:text-chart-orange",
    },
    {
      text: "text-chart-blue",
      hover: "hover:text-chart-blue",
    },
  ];

  const handleValueChange = (value: string) => {
    if (value) {
      const tabId = parseInt(value.replace("item-", ""));
      const selectedFeature = features.find((feature) => feature.id === tabId);
      if (selectedFeature) {
        setActiveTabId(tabId);
        setActiveVideo(selectedFeature.videoUrl);
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-20">
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              className="w-full"
              defaultValue="item-1"
              onValueChange={handleValueChange}
            >
              {features.map((tab, index) => {
                const IconComponent = tab.icon ? iconMap[tab.icon] : null;
                const colors = chartColors[index % chartColors.length];
                return (
                  <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                    <AccordionTrigger className="cursor-pointer py-5 no-underline! transition flex items-center justify-start">
                      {IconComponent && (
                        <div className="h-10 w-10 flex items-center justify-center bg-black-3 dark:bg-white-3 rounded-lg border border-input">
                          <IconComponent className={`${colors.text} size-5`} />
                        </div>
                      )}
                      <h4
                        className={`flex items-center transition-colors ${
                          colors.hover
                        } ${
                          tab.id === activeTabId
                            ? colors.text
                            : "text-foreground/50"
                        }`}
                      >
                        {tab.title}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mt-3 text-lg text-foreground/50">
                        {tab.description}
                      </p>
                      <div className="mt-4 md:hidden">
                        <video
                          src={tab.videoUrl}
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
              className=" object-contain w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };

"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
  videoUrl?: string;
}

interface Feature197Props {
  features: FeatureItem[];
}

const Feature197 = ({ features }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeVideo, setActiveVideo] = useState(features[0].videoUrl);

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
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger className="cursor-pointer py-5 no-underline! transition">
                    <h4
                      className={`${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-foreground/50"
                      }`}
                    >
                      {tab.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-foreground/50">{tab.description}</p>
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
              ))}
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

"use client";

import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrbitingIntegrations } from "@/components/creatives/orbiting-integrations";
import { AnimatedRecipeList } from "@/components/creatives/animated-recipe-list";

const Feature242 = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Data",
      description:
        "Link your Google Ads, Analytics, CRM, and social platforms. No complex setup - just secure connections to your existing tools.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-exchange-between-the-user-and-the-global-network.svg",
      href: "/features/integrations",
    },
    {
      step: "02",
      title: "Pick a Recipe",
      description:
        "Choose from 50+ proven recipes that solve real business problems. Each recipe connects your data and delivers actionable insights in minutes.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-letters-and-arrows-flying-out-of-a-black-hole.svg",
      href: "/features/ai-data-agent",
    },
    {
      step: "03",
      title: "Watch the Magic Happen",
      description:
        "Receive complete ad campaigns, blog posts, email sequences, product descriptions, and sales scripts - optimized from your data and ready to deploy immediately.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-loading-the-next-page.svg",
      href: "/features/automations",
    },
  ];

  return (
    <section className="overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="container relative flex flex-col items-center md:px-0 lg:pt-8">
        <div className="relative z-10 w-full items-start justify-between lg:flex lg:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-chart-purple/10 text-chart-purple border-chart-purple/20 hover:bg-chart-purple/20"
              >
                🔥 Most Popular
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              1-Click Workflows That Just Work
            </h2>
          </div>
          <p className="text-muted-foreground/80 mt-6 max-w-lg tracking-tight text-base sm:text-lg md:text-xl lg:mt-0">
            Stop wasting hours creating content that doesn't convert. Get AI
            that actually generates your ad campaigns, blog posts, email
            sequences, and sales scripts - ready to copy-paste in minutes.{" "}
            <span className="text-foreground group inline-flex cursor-pointer items-center font-medium transition-all ease-in-out">
              See it in action{" "}
              <ChevronRight
                size={17}
                className="ml-1 mt-px transition-all ease-in-out group-hover:ml-2"
              />{" "}
            </span>
          </p>
        </div>
        <DottedDiv className="mt-8 w-full px-2 py-8 sm:py-10">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-black-3 dark:bg-white-3 border group relative flex h-full min-h-80 sm:min-h-96 w-full flex-col justify-between text-ellipsis rounded-2xl sm:rounded-3xl p-4 sm:p-6"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-primary">{step.step}</h4>
                    <a
                      href={step.href}
                      className="relative z-10 cursor-pointer"
                    >
                      <Button
                        variant="outline"
                        className="hover:bg-muted h-10 w-10 rounded-full bg-transparent transition-all ease-in-out"
                      >
                        <Plus className="scale-125" />
                      </Button>
                    </a>
                  </div>
                  <div className="flex w-full flex-col space-y-2">
                    <h5 className="transition-all ease-in-out">{step.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  {index === 0 ? (
                    <OrbitingIntegrations />
                  ) : index === 1 ? (
                    <div className="flex justify-center items-center py-8">
                      <AnimatedRecipeList />
                    </div>
                  ) : (
                    <Image
                      className="max-h-48 w-full opacity-100 transition-all ease-in-out group-hover:scale-95 group-hover:opacity-70"
                      src={step.imgSrc}
                      alt={step.title}
                      width={300}
                      height={200}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </DottedDiv>
      </div>
    </section>
  );
};

export { Feature242 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[12.5px] top-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -left-[12.5px] bottom-4 h-[1.5px] w-[110%] md:-left-20" />
    {children}
  </div>
);

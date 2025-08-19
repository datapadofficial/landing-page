"use client";

import { ChevronRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { OrbitingIntegrations } from "@/components/creatives/orbiting-integrations";
import { AnimatedWorkflowList } from "@/components/creatives/animated-workflow-list";
import { KpiBarAnimationMock } from "@/components/creatives/kpi-bar-animation-mock";
import { SingleIntegrationBeams } from "./creatives/single-integration-beams";
import { Integration } from "@/types/integration";

const MainWorkflows = ({
  title = "1-Click Workflows That Deliver Results",
  description = "Stop wasting hours creating content that doesn't convert. Get AI that actually generates your ad campaigns, blog posts, email sequences, and sales scripts - ready to copy-paste in minutes.",
  integration,
}: {
  title?: string;
  description?: string;
  integration?: Integration;
}) => {
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
      title: "Execute a Workflow",
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
      href: "/workflows",
    },
  ];

  return (
    <section className="overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="container relative flex flex-col items-center md:px-0 lg:pt-8">
        <div className="relative z-10 w-full justify-between flex items-center flex-col gap-6">
          <div className="max-w-2xl">
            <h2 className="text-center">{title}</h2>
          </div>
          <p className="text-muted-foreground/80 max-w-3xl text-base sm:text-lg md:text-xl text-center">
            {description}
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
                  </div>
                  <div className="flex w-full flex-col space-y-2">
                    <h5 className="transition-all ease-in-out">{step.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  {index === 0 ? (
                    <>
                      {integration ? (
                        <SingleIntegrationBeams
                          className="mt-20"
                          integration={integration}
                        />
                      ) : (
                        <OrbitingIntegrations />
                      )}
                    </>
                  ) : index === 1 ? (
                    <div className="flex justify-center items-center py-8">
                      <AnimatedWorkflowList integration="google-ads" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center py-8">
                      <KpiBarAnimationMock />
                    </div>
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

export { MainWorkflows };

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

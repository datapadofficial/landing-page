"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AnnouncementBadge } from "@/components/ui/announcement-badge";

import { AnimatedTicker } from "@/components/ui/animated-ticker";
import { cn } from "@/lib/utils";

interface MainHeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const MainHero = ({
  description = "While others guess, you'll know. Connect your data sources, let our AI analyze your business patterns, then generate winning strategies with 1-click. Join 500+ teams getting 5x better ROI than generic AI tools.",
  button = {
    text: "Get Started",
    url: "https://www.shadcnblocks.com",
  },
}: MainHeroProps) => {
  return (
    <section className="pt-24">
      <div className="container relative mx-auto max-w-6xl px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="scale-150" />

        <div className="relative z-30 mx-auto flex flex-col gap-6">
          <div className="flex justify-center">
            <AnnouncementBadge
              href="/blog/datapad-secures-over-500k-to-redefine-data-analytics-with-autonomous-ai-agents"
              tag="NEW"
            >
              Datapad Raises New Funding Round
            </AnnouncementBadge>
          </div>
          <h1 className="w-full relative text-center mx-auto">
            <div className="text-white">
              <div>Stop Guessing. Start Winning.</div>
              <AnimatedTicker
                texts={[
                  "Ad Strategies That Convert",
                  "SEO Content That Ranks",
                  "Email Campaigns That Sell",
                  "Social Posts That Engage",
                  "Reports That Drive Decisions",
                  "Landing Pages That Close",
                  "Product Descriptions That Move",
                  "Sales Pitches That Win",
                ]}
                interval={3000}
                className="text-chart-purple"
              />{" "}
            </div>
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            {description}
          </p>
        </div>
        <div className="relative z-30 flex gap-4 items-center justify-center">
          <Button asChild size="lg" className="mt-10">
            <a href={button.url}>{button.text}</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="mt-10">
            <a href={button.url}>Book a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { MainHero };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/background-boxes.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "var(--chart-red)",
    "var(--chart-green)",
    "var(--chart-purple)",
    "var(--chart-yellow)",
    "var(--chart-orange)",
    "var(--chart-blue)",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="border-muted-foreground/20 relative h-8 w-16 border-l"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="border-muted-foreground/20 relative h-8 w-16 border-r border-t"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-muted pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

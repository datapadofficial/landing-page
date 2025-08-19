"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Feature } from "@/types/feature";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";

interface FeatureHeroProps {
  feature: Feature;
}

const FeatureHero = ({ feature }: FeatureHeroProps) => {
  return (
    <section className="pt-8 sm:pt-16">
      <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden pb-8 sm:pb-4">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="scale-150" />

        <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-4xl">
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className={cn(
                "border-opacity-20 hover:bg-opacity-20",
                `bg-${feature.color}/10 text-${feature.color} border-${feature.color}/20 hover:bg-${feature.color}/20`
              )}
              style={{
                backgroundColor: `var(--${feature.color})10`,
                color: `var(--${feature.color})`,
                borderColor: `var(--${feature.color})20`,
              }}
            >
              <DynamicIcon
                name={feature.icon as IconName}
                className="size-4 mr-2"
              />
              {feature.category.charAt(0).toUpperCase() +
                feature.category.slice(1)}{" "}
              Feature
            </Badge>
          </div>

          <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            {feature.title}

            <br />
            <span className={cn("text-primary", `text-${feature.color}`)}>
              Will Blow Your Mind
            </span>
          </h1>

          <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
            {feature.longDescription}
          </p>
        </div>

        <div className="relative z-30 flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
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
      </div>
    </section>
  );
};

export { FeatureHero };

// Reusing the Boxes component from MainHero
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Dramatically reduced grid size for performance
  const rows = new Array(30).fill(1); // Reduced from 150 to 30
  const cols = new Array(20).fill(1); // Reduced from 100 to 20
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
        willChange: "transform", // Optimize for animations
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
          initial={false} // Disable initial animation
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="border-muted-foreground/20 relative h-8 w-16 border-r border-t"
              initial={false} // Disable initial animation
            >
              {j % 4 === 0 && i % 4 === 0 ? ( // Reduced icon frequency
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

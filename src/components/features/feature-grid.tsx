"use client";

import {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Mic,
  Zap,
  Brain,
  Globe,
  Slack,
} from "lucide-react";
import Link from "next/link";
import { features } from "@/data/features/features";

// Map icon strings to Lucide React components
const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot className="size-6" />,
  "bar-chart-3": <BarChart3 className="size-6" />,
  "code-2": <Code2 className="size-6" />,
  plug: <Plug className="size-6" />,
  layers: <Layers className="size-6" />,
  share: <Share className="size-6" />,
  slack: <Slack className="size-6" />,
  mic: <Mic className="size-6" />,
  zap: <Zap className="size-6" />,
  brain: <Brain className="size-6" />,
  globe: <Globe className="size-6" />,
};

const FeatureGrid = ({ itemCount = 12 }: { itemCount?: number }) => {
  return (
    <section className="container py-8 sm:py-32 px-4 sm:px-0">
      <div className="border bg-black-3 dark:bg-white-3 m-auto rounded-2xl sm:rounded-3xl px-4 sm:px-8 pb-8 pt-12 text-center md:px-16 md:pb-16 md:pt-24">
        <h2 className="mx-auto mb-4 max-w-96 text-2xl sm:text-3xl font-normal md:max-w-4xl md:text-4xl lg:text-5xl">
          <span>Your Entire Data Team.</span>
          <br />
          <span className="italic">In One AI Agent.</span>
        </h2>
        <p className="mx-auto max-w-xl text-sm sm:text-base font-normal px-4 sm:px-0">
          From AI conversations to automated reports, voice interactions to
          Slack integration. One platform that replaces your entire data stack.
        </p>
        <div className="mt-12 sm:mt-16 grid w-full grid-cols-3 sm:grid-cols-3 lg:grid-cols-6">
          {features
            .sort((a, b) => a.priority - b.priority)
            .slice(0, itemCount)
            .map((feature) => {
              const featureIcon = iconMap[feature.icon];
              const href = feature.redirectUrl
                ? feature.redirectUrl
                : `/features/${feature.slug}`;

              return (
                <Link
                  key={feature.slug}
                  href={href}
                  className="group relative flex w-full flex-col items-center justify-center gap-4 px-3 py-6 md:gap-6 md:px-4 md:py-4 border-black-10 dark:border-white-10 border-r border-b 
                             /* Mobile: Single column borders */
                             sm:[&:nth-child(odd)]:border-r-0 
                             /* Small screens: 2 columns */
                             sm:[&:nth-child(2n)]:border-r-0 
                             /* Medium screens: 3 columns */
                             md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 
                             /* Large screens: 6 columns */
                             lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 
                             /* Last row borders */
                             [&:last-child]:border-r-0 sm:[&:nth-last-child(-n+1)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0 
                             transition-all duration-300 ease-out hover:bg-black-5/50 dark:hover:bg-white-5/50 cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[217px]"
                >
                  {/* Icon container with hover effects */}
                  <div className="border-black-1 dark:border-white-1 bg-background dark:bg-white-10 flex size-12 items-center justify-center rounded-xl border drop-shadow-lg dark:drop-shadow-[0_10px_8px_rgb(255_255_255_/_0.04)] dark:shadow-[0_4px_3px_rgb(255_255_255_/_0.07)] transition-all duration-300 ease-out group-hover:shadow-xl group-hover:border-opacity-50">
                    <div
                      style={{ color: `var(--${feature.color})` }}
                      className="transition-all duration-300 ease-out group-hover:scale-110"
                    >
                      {featureIcon}
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="text-center transition-all duration-300 ease-out">
                    <h3 className="mb-2 text-sm font-semibold md:text-base transition-all duration-300 ease-out group-hover:text-foreground/90">
                      {feature.title}
                    </h3>

                    {/* Description with slide-in animation */}
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground md:text-sm transition-all duration-500 ease-out transform translate-y-4 opacity-0 max-h-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:max-h-20 group-hover:mb-2">
                        {feature.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Subtle background gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out rounded-lg"
                    style={{
                      background: `radial-gradient(circle at center, var(--${feature.color}), transparent 70%)`,
                    }}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export { FeatureGrid };

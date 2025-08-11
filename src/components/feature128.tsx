"use client";

import {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  MessageSquare,
  Mic,
  Zap,
  Brain,
  Brain as Memory,
  Globe,
  Slack,
} from "lucide-react";
import Link from "next/link";

// Chart colors from globals.css
const chartColors = [
  "chart-red",
  "chart-green",
  "chart-purple",
  "chart-yellow",
  "chart-orange",
  "chart-blue",
];

// Map feature titles to their slugs
const featureSlugMap: Record<string, string> = {
  "AI Data Agent": "ai-data-agent",
  "Generative Dashboards": "generative-dashboards",
  "Text2SQL & Python": "text-to-sql-python",
  "50+ Integrations": "integrations",
  "Data Blending": "data-blending",
  "Shareable Reports": "shareable-reports",
  "Slack Bot": "slack-bot",
  "Voice Mode": "voice-mode",
  Automations: "automations",
  "Multi-Model AI": "multi-model-ai",
  "Learning Layer": "learning-layer",
  "Web Access": "web-access",
};

const items = [
  {
    icon: <Bot className="size-6" />,
    title: "AI Data Agent",
    description:
      "Talk to your data like a human analyst. Get instant answers with charts and visualizations.",
    color: chartColors[0], // chart-red
  },
  {
    icon: <BarChart3 className="size-6" />,
    title: "Generative Dashboards",
    description:
      "AI creates custom dashboards tailored to your business needs automatically.",
    color: chartColors[1], // chart-green
  },
  {
    icon: <Code2 className="size-6" />,
    title: "Text2SQL & Python",
    description:
      "Convert natural language questions into executable code and database queries.",
    color: chartColors[2], // chart-purple
  },
  {
    icon: <Plug className="size-6" />,
    title: "50+ Integrations",
    description:
      "Connect all your data sources: databases, marketing, sales, and social platforms.",
    color: chartColors[3], // chart-yellow
  },
  {
    icon: <Layers className="size-6" />,
    title: "Data Blending",
    description:
      "Combine data from multiple sources for comprehensive cross-platform analysis.",
    color: chartColors[4], // chart-orange
  },
  {
    icon: <Share className="size-6" />,
    title: "Shareable Reports",
    description:
      "Generate and share professional reports and dashboards with stakeholders instantly.",
    color: chartColors[5], // chart-blue
  },
  {
    icon: <Slack className="size-6" />,
    title: "Slack Bot",
    description:
      "Get data insights and alerts directly in your team's communication hub.",
    color: chartColors[0], // chart-red (cycling back)
  },
  {
    icon: <Mic className="size-6" />,
    title: "Voice Mode",
    description:
      "Present data insights through voice interaction with real-time updates.",
    color: chartColors[1], // chart-green
  },
  {
    icon: <Zap className="size-6" />,
    title: "Automations",
    description:
      "Schedule the AI system to pre-analyze all metrics, data, dashboards and prepare synthesized analysis with alerts.",
    color: chartColors[2], // chart-purple
  },
  {
    icon: <Brain className="size-6" />,
    title: "Multi-Model AI",
    description:
      "Leverage Claude, ChatGPT, and other AI models for optimal results.",
    color: chartColors[3], // chart-yellow
  },
  {
    icon: <Memory className="size-6" />,
    title: "Learning Layer",
    description:
      "Personalized AI that learns from users, data sources, and workspace context.",
    color: chartColors[4], // chart-orange
  },
  {
    icon: <Globe className="size-6" />,
    title: "Web Access",
    description:
      "Real-time web data integration for comprehensive market analysis.",
    color: chartColors[5], // chart-blue
  },
];

const Feature128 = () => {
  return (
    <section className="container py-16 sm:py-24 lg:py-32">
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
        <div className="mt-12 sm:mt-16 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => {
            const featureSlug = featureSlugMap[item.title];
            return (
              <Link
                key={index}
                href={featureSlug ? `/features/${featureSlug}` : "#"}
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
                    style={{ color: `var(--${item.color})` }}
                    className="transition-all duration-300 ease-out group-hover:scale-110"
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content container */}
                <div className="text-center transition-all duration-300 ease-out">
                  <h3 className="mb-2 text-sm font-semibold md:text-base transition-all duration-300 ease-out group-hover:text-foreground/90">
                    {item.title}
                  </h3>

                  {/* Description with slide-in animation */}
                  <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground md:text-sm transition-all duration-500 ease-out transform translate-y-4 opacity-0 max-h-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:max-h-20 group-hover:mb-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtle background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out rounded-lg"
                  style={{
                    background: `radial-gradient(circle at center, var(--${item.color}), transparent 70%)`,
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

export { Feature128 };

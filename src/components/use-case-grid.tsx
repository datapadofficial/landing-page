import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { UseCaseCard } from "./use-case-card";
import { Button } from "./ui/button";
import { AttributionLink } from "./attribution-link";

interface UseCase {
  title: string;
  description: string;
  imageSrc: string;
}

const useCases: UseCase[] = [
  {
    title: "Correlation analysis",
    description: "Identify relationships and patterns within your data",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Exploratory analysis",
    description: "Explore your data to uncover patterns, trends & anomalies",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Data Cleaning",
    description: "Clear your Excel with AI with only 1 click",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Sentiment analysis",
    description:
      "Identify if text expresses positive, negative, or neutral feelings",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "KPI tracking",
    description: "Monitor key metrics over time to measure performance",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Scientific Research",
    description: "Correlation matrix on genetic dataset",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
];

export const UseCaseGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {useCases.map((useCase, index) => (
        <UseCaseCard
          key={index}
          title={useCase.title}
          description={useCase.description}
        >
          <div className="flex w-full flex-1 flex-col gap-4">
            <AttributionLink
              buttonLocation="use-case-grid-try-it-out"
              className="group inline-flex w-fit items-center gap-2 px-0 text-sm font-semibold text-chart-blue transition-colors hover:text-slate-blue-700 focus-visible:text-slate-blue-700"
            >
              Try it out
              <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </AttributionLink>
            <div className="relative w-full h-full">
              <div className="absolute bottom-[-32px] right-[-42px] aspect-[4/3] w-full overflow-hidden rounded-2xl border border-input">
                <Image
                  src={useCase.imageSrc}
                  alt={useCase.title}
                  fill
                  className="object-cover h-[500px]"
                />
              </div>
            </div>
          </div>
        </UseCaseCard>
      ))}
    </div>
  );
};

export default UseCaseGrid;

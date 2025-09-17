import React from "react";
import Image from "next/image";

import { UseCaseCard } from "./use-case-card";

interface UseCase {
  title: string;
  description: string;
  imageSrc: string;
}

const useCases: UseCase[] = [
  {
    title: "Interactive Dashboards",
    description: "Identify relationships and patterns within your data",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Exploratory analysis",
    description: "Explore your data to uncover patterns, trends & anomalies",
    imageSrc: "/images/use-cases/exploratory_analysis.png",
  },
  {
    title: "Data Cleaning",
    description: "Clear your Excel with AI with only 1 click and prompting",
    imageSrc: "/images/use-cases/data_cleaning.png",
  },
  {
    title: "Data Science & Analysis",
    description: "Analyze data to gain insights and make decisions",
    imageSrc: "/images/use-cases/data_science.png",
  },
  {
    title: "KPI tracking",
    description: "Monitor key metrics over time to measure performance",
    imageSrc: "/images/use-cases/kpi_tracking.png",
  },
  {
    title: "Scientific Research",
    description: "Parse any medical data to validate your research outputs",
    imageSrc: "/images/use-cases/scientific_research.png",
  },
];

export const UseCaseGrid: React.FC = () => {
  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container">
        <div className="flex flex-col gap-6 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4x md:text-5xl font-medium">
            Popular Use Cases
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            From correlation analysis to sentiment tracking, discover how teams
            use AI to transform their data into actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
              buttonLocation={`use-case-grid-${useCase.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="flex w-full flex-1 flex-col gap-4">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-[-42px] aspect-[4/4] w-full overflow-hidden rounded-2xl border border-input">
                    <Image
                      src={useCase.imageSrc}
                      alt={useCase.title}
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                </div>
              </div>
            </UseCaseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;

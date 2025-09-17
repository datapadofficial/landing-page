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
    description:
      "Deliver interactive dashboards for self-service business intelligence and real-time KPI insights",
    imageSrc: "/images/datapad-ai-analyst.png",
  },
  {
    title: "Exploratory analysis",
    description:
      "Run exploratory data analysis to surface hidden trends, anomalies, and customer behavior signals",
    imageSrc: "/images/use-cases/exploratory_analysis2.png",
  },
  {
    title: "Data Cleaning",
    description:
      "Automate Excel data cleaning to normalize fields, remove duplicates, detect outliers,and prepare datasets for modeling",
    imageSrc: "/images/use-cases/data_cleaning.png",
  },
  {
    title: "Data Science & Analysis",
    description:
      "Orchestrate data science workflows with predictive analytics, feature engineering, and data storytelling",
    imageSrc: "/images/use-cases/data_science.png",
  },
  {
    title: "KPI tracking",
    description:
      "Monitor mission-critical KPIs, KRAs with automated dashboards, benchmarking alerts, and performance intelligence",
    imageSrc: "/images/use-cases/kpi_tracking.png",
  },
  {
    title: "Scientific Research",
    description:
      "Process clinical research, medical, scientific, financial datasets with compliant analytics for evidence-based insights and publication-ready visuals",
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

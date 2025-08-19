import React from "react";
import { Integration } from "../data/integrations/integrations";

type DataItem = {
  id: number;
  title: string;
  description: string;
};

type Feature187Props = {
  integration: Integration;
};

const getTransformationSteps = (integration: Integration): DataItem[] => {
  // If the integration has custom solutions, use those
  if (
    integration.conversionCopy?.solutions &&
    integration.conversionCopy.solutions.length >= 3
  ) {
    return integration.conversionCopy.solutions
      .slice(0, 3)
      .map((solution, index) => ({
        id: index + 1,
        title: `Step ${index + 1}: ${solution.title}`,
        description: solution.description,
      }));
  }

  // Default steps based on category
  return getDefaultSteps(integration);
};

const getStepTitle = (index: number): string => {
  const stepTitles = {
    0: "Connect & Sync",
    1: "AI Analysis",
    2: "Actionable Insights",
  };
  return stepTitles[index as keyof typeof stepTitles] || `Step ${index + 1}`;
};

const getDefaultSteps = (integration: Integration): DataItem[] => {
  const categorySteps = {
    social: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Automatically pull all your ${
          integration.name
        } metrics - ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} - in real-time.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `Our AI analyzes your ${integration.category} performance, audience behavior, and content patterns to identify growth opportunities.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Get specific recommendations for ${integration.category} strategy optimization - ready to implement immediately.`,
      },
    ],
    advertising: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Automatically sync your ${
          integration.name
        } campaign data - ${integration.specs.dataTypes
          .slice(0, 3)
          .join(
            ", "
          )} - with ${integration.specs.updateFrequency.toLowerCase()} updates.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI analyzes your ad performance, audience targeting, and budget allocation to identify optimization opportunities.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Get specific campaign optimization recommendations, bid adjustments, and audience targeting strategies ready to implement.`,
      },
    ],
    analytics: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Connect your ${
          integration.name
        } account and sync ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} data automatically.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI processes your analytics data to identify trends, patterns, and performance insights across all metrics.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Receive data-driven recommendations for improving performance and achieving your business goals.`,
      },
    ],
    ecommerce: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Sync your ${
          integration.name
        } store data - ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} - with real-time updates.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI analyzes your sales patterns, customer behavior, and product performance to identify revenue opportunities.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Get specific recommendations for inventory management, pricing optimization, and customer retention strategies.`,
      },
    ],
    crm: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Connect ${
          integration.name
        } and sync your ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} data automatically.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI analyzes your sales pipeline, customer interactions, and deal patterns to identify conversion opportunities.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Receive specific strategies for deal acceleration, lead scoring improvements, and sales process optimization.`,
      },
    ],
    database: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Connect to your ${
          integration.name
        } database and access ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} in real-time.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI automatically queries and analyzes your database to identify patterns, anomalies, and business insights.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Get natural language insights and automated reports based on your database analysis.`,
      },
    ],
    finance: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Sync your ${
          integration.name
        } financial data - ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} - automatically.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI analyzes your financial patterns, cash flow, and revenue trends to identify optimization opportunities.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Receive specific recommendations for financial optimization, cost reduction, and revenue growth strategies.`,
      },
    ],
    email: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Connect ${
          integration.name
        } and sync ${integration.specs.dataTypes
          .slice(0, 3)
          .join(", ")} data in real-time.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI analyzes your email performance, subscriber behavior, and campaign effectiveness to identify improvements.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Get specific recommendations for email optimization, segmentation strategies, and engagement improvements.`,
      },
    ],
    other: [
      {
        id: 1,
        title: "Connect & Sync",
        description: `Connect your ${
          integration.name
        } data source and sync information automatically with ${integration.specs.updateFrequency.toLowerCase()} updates.`,
      },
      {
        id: 2,
        title: "AI Analysis",
        description: `AI processes your data to identify meaningful patterns, trends, and insights relevant to your business.`,
      },
      {
        id: 3,
        title: "Actionable Insights",
        description: `Receive tailored recommendations and strategies based on your specific data and business context.`,
      },
    ],
  };

  return categorySteps[integration.category] || categorySteps.other;
};

type StepItemProps = {
  step: DataItem;
  isLast: boolean;
};

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
  return (
    <div className="max-lg:flex max-lg:gap-4">
      <div className="relative lg:py-6">
        <div
          className={`bg-muted/50 bg-linear-to-b lg:bg-linear-to-r absolute h-full w-1 -translate-x-1/2 translate-y-11 max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:-translate-y-1/2 lg:translate-x-6 ${
            isLast ? "from-muted/50 to-background" : ""
          }`}
        />
        <div className="bg-background relative z-0 grid size-11 place-content-center rounded-full border-4">
          <p className="text-lg font-bold">{step.id}</p>
        </div>
      </div>
      <div className="max-lg:mt-2">
        <h5>{step.title}</h5>
        <p className="text-muted-foreground mt-2">{step.description}</p>
      </div>
    </div>
  );
};

const Feature187: React.FC<Feature187Props> = ({ integration }) => {
  const transformationSteps = getTransformationSteps(integration);

  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h3 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            How Datapad Transforms Your {integration.name} Data
          </h3>
          <p className="text-muted-foreground mt-8 md:text-lg max-w-4xl mx-auto">
            Turn your {integration.name} data into actionable growth strategies
            with AI-powered analysis that delivers results you can implement
            immediately.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {transformationSteps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              isLast={index === transformationSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature187 };

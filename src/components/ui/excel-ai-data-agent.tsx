"use client";

import { PipelineMock } from "../creatives/pipeline-mock";
import { DashboardMock } from "../creatives/dashboard-mock";
import { CodePrecisionMock } from "../creatives/code-precision-mock";
import { AskReceiveMock } from "../creatives/ask-receive-mock";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ExcelAIDataAgentSectionProps {
  heading?: React.ReactNode;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
}

const ExcelAIDataAgentSection = ({
  heading = (
    <>
      <span>The Excel AI Agent</span> With
      <br />
      <span className="text-chart-purple">Spreadsheet Super-Powers</span>
    </>
  ),
  description = "Upload your Excel files and watch our AI dive deep into your spreadsheets. Get sophisticated analysis, predictive models, and data insights that would take Excel experts hours to uncover - all from natural language questions about your data.",
  feature1 = {
    title: "Ask Anything, Get Excel Analysis",
    description:
      "Ask any business question in plain English about your Excel data. Get sophisticated statistical analysis, trend identification, and data-driven insights that reveal hidden patterns in your spreadsheets and business metrics.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Any Excel File, Instant Insights",
    description:
      "Upload Excel files (.xlsx, .xls), CSV files, or Google Sheets with drag-and-drop simplicity. Watch your spreadsheet data transform into unified, comprehensive insights and automated reports in real-time.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  feature3 = {
    title: "Pivot Tables + Charts, Excel Mastery",
    description:
      "Unlike manual Excel users who are limited to basic formulas, our AI seamlessly creates pivot tables, generates charts, and performs complex analysis. Transform any Excel file into professional reports without Excel expertise.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature4 = {
    title: "Smart Dashboards, Better Decisions",
    description:
      "Track KPIs, performance metrics, and business health from your Excel data in one unified dashboard. Get the complete operational picture that drives better decisions from your spreadsheet insights.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
}: ExcelAIDataAgentSectionProps) => {
  return (
    <section className="py-8 sm:py-32 max-w-7xl mx-auto px-4 sm:px-0">
      <div className="container">
        <div className="mb-8 sm:mb-24 flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-center max-w-4xl">{heading}</h2>
          <p className="text-center sm:text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center px-4 sm:px-0">
          <div className="border bg-black-3 dark:bg-white-3 rounded-2xl relative flex w-full flex-col md:w-1/2 lg:w-full ">
            <div className="relative flex flex-col lg:flex-row">
              <Link
                href="/use-cases/excel-ai"
                className="border-muted2 flex flex-col justify-between border-b border-solid p-4 sm:p-10 lg:w-3/5 lg:border-r lg:border-b-0 hover:bg-black-5/50 dark:hover:bg-white-5/50 transition-colors duration-300 group"
              >
                <h4 className="group-hover:text-foreground/90 mb-4 transition-colors">
                  {feature1.title}
                </h4>
                <p className="text-muted-foreground">{feature1.description}</p>
                <div className="mt-4 sm:mt-8 lg:aspect-[2.4] relative overflow-hidden rounded-lg">
                  <AskReceiveMock className="w-full h-full" />
                </div>
              </Link>
              <Link
                href="/use-cases/excel-ai"
                className="flex flex-col justify-between p-4 sm:p-10 lg:w-2/5 hover:bg-black-5/50 dark:hover:bg-white-5/50 transition-colors duration-300 group"
              >
                <h4 className="group-hover:text-foreground/90 mb-4 transition-colors">
                  {feature2.title}
                </h4>
                <p className="text-muted-foreground">{feature2.description}</p>
                <div className="mt-8  relative overflow-hidden rounded-lg">
                  <PipelineMock className="w-full h-full" />
                </div>
              </Link>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <Link
                href="/use-cases/excel-ai"
                className="border-muted2 flex flex-col justify-between border-b border-solid p-4 sm:p-10 lg:w-2/5 lg:border-r lg:border-b-0 hover:bg-black-5/50 dark:hover:bg-white-5/50 transition-colors duration-300 group"
              >
                <h4 className="group-hover:text-foreground/90 mb-4 transition-colors">
                  {feature3.title}
                </h4>
                <p className="text-muted-foreground">{feature3.description}</p>
                <div className="mt-8 relative overflow-hidden rounded-lg">
                  <CodePrecisionMock className="w-full h-full" />
                </div>
              </Link>
              <Link
                href="/use-cases/excel-ai"
                className="flex flex-col justify-between p-4 sm:p-10 lg:w-3/5 hover:bg-black-5/50 dark:hover:bg-white-5/50 transition-colors duration-300 group"
              >
                <h4 className="group-hover:text-foreground/90 mb-4 transition-colors">
                  {feature4.title}
                </h4>
                <p className="text-muted-foreground">{feature4.description}</p>
                <div className=" lg:aspect-[2.4] relative overflow-hidden rounded-lg">
                  <DashboardMock className="w-full h-full" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExcelAIDataAgentSection };

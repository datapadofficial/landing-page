import { PipelineMock } from "./creatives/pipeline-mock";
import { DashboardMock } from "./creatives/dashboard-mock";
import { CodePrecisionMock } from "./creatives/code-precision-mock";
import { AskReceiveMock } from "./creatives/ask-receive-mock";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface AIDataAgentSectionProps {
  heading?: React.ReactNode;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
}

const AIDataAgentSection = ({
  heading = (
    <>
      <span>AI Agent</span> With
      <br />
      <span className="text-chart-purple">Data Super-Powers</span>
    </>
  ),
  description = "Connect any data source with a simple prompt and watch our AI dive deep into your numbers. Get sophisticated SQL analysis, predictive models, and data insights that would take data scientists weeks to uncover - all from natural language questions about your business.",
  feature1 = {
    title: "Ask Anything, Get Insights",
    description:
      "Ask any business question in plain English. Get sophisticated statistical analysis, trend identification, and data-driven insights that reveal hidden patterns in your business metrics across any dataset.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Blend Any Data Source",
    description:
      "Connect databases, CRMs, financial systems, and any data source with drag-and-drop simplicity. Watch your fragmented data transform into unified, comprehensive insights in real-time.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  feature3 = {
    title: "SQL + Python Code",
    description:
      "Unlike analysts who are limited to one tool, our AI seamlessly switches between SQL for data extraction and Python for advanced modeling. Transform any data source without restrictions - get the sophisticated analysis that requires both database expertise and statistical programming.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature4 = {
    title: "Instant Interactive Dashboards",
    description:
      "Track KPIs, performance metrics, and business health across all systems in one unified dashboard. Get the complete operational picture that drives better decisions instantly.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
}: AIDataAgentSectionProps) => {
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
                href="/features/ai-data-agent"
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
                href="/features/integrations"
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
                href="/features/text-to-sql-python"
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
                href="/features/dashboards"
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

export { AIDataAgentSection };

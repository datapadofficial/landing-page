import { PipelineMock } from "./creatives/pipeline-mock";
import { DashboardMock } from "./creatives/dashboard-mock";
import { CodePrecisionMock } from "./creatives/code-precision-mock";
import { AskReceiveMock } from "./creatives/ask-receive-mock";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Feature166Props {
  heading?: string;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
}

const Feature166 = ({
  heading = "The Only Agent With Real Data Super-Powers",
  description = "Connect any data source with a simple prompt and watch our AI dive deep into your numbers. Get sophisticated SQL analysis, predictive models, and data insights that would take data scientists weeks to uncover - all from natural language questions about your business.",
  feature1 = {
    title: "Ask and Receive",
    description:
      "Ask any business question in plain English. Get sophisticated statistical analysis, trend identification, and data-driven insights that reveal hidden patterns in your business metrics across any dataset.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Code-Level Precision",
    description:
      "Watch SQL + Python analysis dive deep into your data to identify patterns, anomalies, and opportunities. Get predictive models, statistical correlations, churn probability scores, and advanced forecasting that reveals what your data is really telling you.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  feature3 = {
    title: "Blend Any Data, Effortlessly",
    description:
      "Connect databases, CRMs, financial systems, and any data source with drag-and-drop simplicity. Watch your fragmented data transform into unified, comprehensive insights in real-time.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature4 = {
    title: "Dashboards at the Speed of Thought",
    description:
      "Track KPIs, performance metrics, and business health across all systems in one unified dashboard. Get the complete operational picture that drives better decisions instantly.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
}: Feature166Props) => {
  return (
    <section className="py-32 max-w-7xl mx-auto">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h2 className="text-center max-w-4xl text-gradient">{heading}</h2>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 rounded-2xl relative flex w-full flex-col border md:w-1/2 lg:w-full ">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <h4>{feature1.title}</h4>
                <p className="text-muted-foreground">{feature1.description}</p>
                <div className="mt-8 aspect-[1.5] lg:aspect-[2.4] relative overflow-hidden rounded-lg">
                  <AskReceiveMock className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h4>{feature2.title}</h4>
                <p className="text-muted-foreground">{feature2.description}</p>
                <div className="mt-8 aspect-[1.45] relative overflow-hidden rounded-lg">
                  <CodePrecisionMock className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <h4>{feature3.title}</h4>
                <p className="text-muted-foreground">{feature3.description}</p>
                <div className="mt-8 aspect-[1.45] relative overflow-hidden rounded-lg">
                  <PipelineMock className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h4>{feature4.title}</h4>
                <p className="text-muted-foreground">{feature4.description}</p>
                <div className="aspect-[1.5] lg:aspect-[2.4] relative overflow-hidden rounded-lg">
                  <DashboardMock className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature166 };

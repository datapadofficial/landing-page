import Image from "next/image";
import { PipelineMock } from "./pipeline-mock";
import { DashboardMock } from "./dashboard-mock";
import { CodePrecisionMock } from "./code-precision-mock";

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
  heading = "Stop Waiting for Answers. Start Getting Results.",
  description = "No more frustrating waits in critical meetings. Get instant answers anywhere, anytime.",
  feature1 = {
    title: "Ask and Receive",
    description:
      "Remove data bottlenecks, get instant answers when you need them. Connect to any data source and start asking questions immediately.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Code-Level Precision",
    description:
      "Get copy-paste ready campaigns, keyword lists, and ad copy generated from YOUR data. Not generic advice - actual deliverables ready to deploy.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  feature3 = {
    title: "Blend Any Data, Effortlessly",
    description:
      "Build data pipelines visually with drag-and-drop steps. Watch your data transform in real-time with our intuitive pipeline interface.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature4 = {
    title: "Dashboards at the Speed of Thought",
    description:
      "Give everyone the power of a dedicated analyst. Democratize your data and make better executive decisions with real-time insights.",
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
                  <Image
                    src={feature1.image}
                    alt={feature1.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                    className="object-cover"
                  />
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

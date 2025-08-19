import { CheckCircle, CircleMinus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";
import Image from "next/image";

interface ComparisonFeature {
  feature: string;
  icon?: React.ComponentType<{ className?: string }>;
  datapad: {
    available: boolean;
    description: string;
  };
  competitor: {
    available: boolean;
    description: string;
  };
}

interface VsComparisonTableProps {
  competitorName: string;
  competitorTagline: string;
  competitorDescription: string;
  competitorLogo: string;
  features: ComparisonFeature[];
  title?: string;
}

const VsComparisonTable = ({
  competitorName,
  competitorTagline,
  competitorDescription,
  competitorLogo,
  features,
  title,
}: VsComparisonTableProps) => {
  const defaultTitle = `Datapad is a comprehensive suite, ${competitorName} is a ${competitorTagline.toLowerCase()}.`;

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 mb-16">
          <Badge variant="outline">HOW IT COMPARES</Badge>
          <h2 className="mx-auto max-w-5xl text-center">
            {title || defaultTitle}
          </h2>
        </div>

        <div className="-mx-7 overflow-x-auto">
          <div className="mt-14 grid min-w-2xl grid-cols-3">
            {/* Header row */}
            <div className="border-b border-border p-5">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Features
              </h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-t-2xl border-b border-border bg-black-5 dark:bg-white-5 p-5">
              <div className="flex items-center gap-2">
                <div className="size-8 flex items-center justify-center">
                  <AnimatedLogo isActive={false} size="medium" />
                </div>
                <p className="text-lg font-semibold">Datapad</p>
              </div>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Built with customer needs in mind
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 border-b border-border p-5">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded flex items-center justify-center overflow-hidden">
                  <Image
                    src={competitorLogo}
                    alt={`${competitorName} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-semibold">{competitorName}</p>
              </div>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                {competitorDescription}
              </p>
            </div>

            {/* Feature rows */}
            {features.map((feature, index) => (
              <>
                <div
                  key={`feature-${index}`}
                  className="flex items-center gap-2 border-b border-border p-5"
                >
                  {feature.icon && <feature.icon className="size-4 shrink-0" />}
                  <span className="font-semibold">{feature.feature}</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 border-b border-border bg-black-5 dark:bg-white-5 p-5">
                  <CheckCircle className="size-5 text-chart-purple" />
                  <span className="text-xs text-center text-muted-foreground">
                    {feature.datapad.description}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 border-b border-border p-5">
                  {feature.competitor.available ? (
                    <CheckCircle className="size-5 text-chart-purple" />
                  ) : (
                    <CircleMinus className="size-5 text-chart-red" />
                  )}
                  <span className="text-xs text-center text-muted-foreground">
                    {feature.competitor.description}
                  </span>
                </div>
              </>
            ))}

            {/* CTA row */}
            <div className="border-border p-5"></div>
            <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-black-5 dark:bg-white-5 p-5">
              <Button className="w-full">Setup Your Assistant</Button>
            </div>
            <div className="flex items-center justify-center gap-2 p-5">
              <Button variant="outline" className="w-full">
                Learn More About {competitorName}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VsComparisonTable };

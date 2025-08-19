import { ReactNode } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import { Card, CardContent } from "@/components/ui/card";

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

interface PainPointsProps {
  painPoints: PainPoint[];
  title?: ReactNode;
  subtitle?: string;
  className?: string;
}

const PainPoints = ({
  painPoints,
  title = "Common Pain Points",
  subtitle,
  className = "",
}: PainPointsProps) => {
  // Don't render if there are no pain points
  if (painPoints.length === 0) {
    return null;
  }

  return (
    <section
      className={`before:bg-primary/10 relative py-32 before:absolute before:inset-0 before:[mask-image:url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/waves.svg')] before:[mask-repeat:repeat] before:[mask-size:64px_32px] ${className}`}
    >
      <div className="to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent"></div>
      <div className="container relative gap-12 flex flex-col items-center">
        <div className="text-center">
          <h2 className="max-w-5xl text-center mx-auto">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((painPoint, index) => (
            <Card key={`pain-${index}`}>
              <CardContent>
                <DynamicIcon
                  name={painPoint.icon as IconName}
                  size={24}
                  className="text-chart-red"
                />
                <h6 className="mb-2 mt-6 font-medium">{painPoint.title}</h6>
                <p className="text-muted-foreground">{painPoint.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PainPoints };
export type { PainPoint };

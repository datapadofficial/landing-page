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
    <section className={`relative py-8 sm:py-32 px-4 sm:px-0 ${className}`}>
      <div className="container relative gap-4 sm:gap-12 flex flex-col items-center">
        <div className="text-center">
          <h2 className="max-w-7xl text-center mx-auto">{title}</h2>
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

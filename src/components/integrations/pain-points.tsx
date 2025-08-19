import { AlertCircle, CheckCircle } from "lucide-react";
import { Integration } from "@/types/integration";
import { Card, CardContent } from "@/components/ui/card";

interface PainPointsProps {
  integration: Integration;
}

const PainPoints = ({ integration }: PainPointsProps) => {
  const painPoints = integration.conversionCopy?.painPoints || [];
  const solutions = integration.conversionCopy?.solutions || [];

  // Don't render if there are no pain points or solutions
  if (painPoints.length === 0 && solutions.length === 0) {
    return null;
  }

  return (
    <section className="before:bg-primary/10 relative py-32 before:absolute before:inset-0 before:[mask-image:url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/waves.svg')] before:[mask-repeat:repeat] before:[mask-size:64px_32px]">
      <div className="to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent"></div>
      <div className="container relative gap-12 flex flex-col items-center">
        <h3 className="max-w-3xl text-center mx-auto">
          It's Easy to Get Lost in {integration.name}, We Fixed It For You
        </h3>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((painPoint, index) => (
            <Card key={`pain-${index}`}>
              <CardContent>
                <AlertCircle className="size-6 text-chart-red" />
                <h6 className="mb-2 mt-6 font-sans text-lg font-medium">
                  {painPoint.title}
                </h6>
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

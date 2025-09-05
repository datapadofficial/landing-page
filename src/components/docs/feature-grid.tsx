
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureCardProps[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <div key={index} className="p-4 rounded-lg border bg-muted/20">
          <div className="flex items-center gap-2 mb-2">
            <feature.icon className="h-4 w-4 text-primary" />
            <h4 className="font-medium text-lg">{feature.title}</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

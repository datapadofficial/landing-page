import { CheckCircle } from "lucide-react";

interface MetricCategory {
  title: string;
  metrics: string[];
}

interface MetricsGridProps {
  categories: MetricCategory[];
  columns?: 2 | 3;
}

export function MetricsGrid({ categories, columns = 2 }: MetricsGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-medium">{category.title}</h3>
          <div className="p-4 rounded-lg border bg-muted/20">
            <ul className="text-sm space-y-2">
              {category.metrics.map((metric, metricIndex) => (
                <li key={metricIndex} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

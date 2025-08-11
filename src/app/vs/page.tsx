import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Datapad vs Competitors - Compare AI Analytics Platforms",
  description:
    "Compare Datapad with leading analytics platforms. See why teams choose Datapad's AI-powered analytics over traditional BI tools.",
};

const COMPETITORS = [
  {
    name: "Julius AI",
    slug: "julius-ai",
    description: "AI data science tool focused on chat-based analysis",
    category: "AI Analytics",
  },
  {
    name: "Power BI",
    slug: "powerbi",
    description: "Microsoft's business intelligence platform",
    category: "Traditional BI",
  },
  {
    name: "Tableau",
    slug: "tableau",
    description: "Enterprise data visualization software",
    category: "Traditional BI",
  },
  {
    name: "ThoughtSpot",
    slug: "thoughtspot",
    description: "Search-driven analytics platform",
    category: "Modern BI",
  },
  {
    name: "Sisense",
    slug: "sisense",
    description: "AI-driven analytics platform",
    category: "Modern BI",
  },
];

export default function VersusIndexPage() {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-8 mb-16">
          <Badge variant="outline">Comparisons</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            How Datapad Stacks Up
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl">
            See how Datapad compares to other analytics platforms. While others
            show charts, we deliver actionable campaigns and ready-to-deploy
            strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITORS.map((competitor) => (
            <Card
              key={competitor.slug}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    Datapad vs {competitor.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {competitor.category}
                  </Badge>
                </div>
                <CardDescription>{competitor.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/vs/${competitor.slug}`}>Compare Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Don't see your current tool? We'd love to help you compare.
          </p>
          <Button variant="outline" size="lg">
            Request a Custom Comparison
          </Button>
        </div>
      </div>
    </div>
  );
}

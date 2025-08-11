import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Brain, ArrowRight, Zap } from "lucide-react";
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
    logo: "/images/julius-logo.png",
    keyDiff: "Chat-only results vs comprehensive business intelligence",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "Power BI",
    slug: "powerbi",
    description: "Microsoft's business intelligence platform",
    category: "Traditional BI",
    logo: "/images/datapad-logo.svg", // placeholder
    keyDiff: "Complex setup vs instant AI-powered insights",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Tableau",
    slug: "tableau",
    description: "Enterprise data visualization software",
    category: "Traditional BI",
    logo: "/images/integrations/tableau.png",
    keyDiff: "Manual chart building vs automated campaign generation",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "ThoughtSpot",
    slug: "thoughtspot",
    description: "Search-driven analytics platform",
    category: "Modern BI",
    logo: "/images/datapad-logo.svg", // placeholder
    keyDiff: "Reactive search vs proactive AI recommendations",
    gradient: "from-green-500 to-teal-600",
  },
  {
    name: "Sisense",
    slug: "sisense",
    description: "AI-driven analytics platform",
    category: "Modern BI",
    logo: "/images/datapad-logo.svg", // placeholder
    keyDiff: "Complex ElastiCubes vs instant no-code analytics",
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function VersusIndexPage() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 mb-20">
          <Badge variant="outline" className="bg-background">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Comparisons
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            How Datapad Stacks Up
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-4xl">
            See how Datapad's AI-powered analytics compares to traditional BI
            tools. While others show you charts, we create the campaigns and
            strategies that drive real results.
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {COMPETITORS.map((competitor) => {
            return (
              <Card
                key={competitor.slug}
                className="group relative overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${competitor.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${competitor.gradient} shadow-lg flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden">
                        <Image
                          src={competitor.logo}
                          alt={`${competitor.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {competitor.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    Datapad vs {competitor.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {competitor.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Key Difference:
                    </p>
                    <p className="text-sm text-foreground/80">
                      {competitor.keyDiff}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src={competitor.logo}
                        alt={`${competitor.name} logo`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">vs</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link href={`/vs/${competitor.slug}`}>
                      Compare Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-8 border">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            Don't see your current tool?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to help you compare Datapad with any analytics platform.
            Get a custom comparison tailored to your specific needs.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-background hover:bg-muted"
          >
            Request a Custom Comparison
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

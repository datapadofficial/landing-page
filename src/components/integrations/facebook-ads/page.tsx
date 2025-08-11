"use client";

import { Integration } from "@/lib/integrations";
import { Workflow } from "@/lib/workflows";
import { IntegrationPageTemplate } from "@/components/templates/integration-page-template";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, DollarSign, Users } from "lucide-react";

interface FacebookAdsPageProps {
  integration: Integration;
  recipes: Workflow[];
}

// Custom components for Facebook Ads page
function FacebookAdsROICalculator() {
  const metrics = [
    { label: "Average ROAS", value: "4.2x", change: "+12%", trend: "up" },
    { label: "Cost Per Click", value: "$0.87", change: "-8%", trend: "down" },
    { label: "Conversion Rate", value: "3.4%", change: "+15%", trend: "up" },
    { label: "CPM", value: "$8.45", change: "-5%", trend: "down" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Facebook Ads Performance Insights
            </h2>
            <p className="text-muted-foreground">
              Real-time metrics and benchmarks from successful Facebook Ads
              campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <Card key={metric.label} className="text-center">
                <CardHeader className="pb-2">
                  <CardDescription>{metric.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <Badge
                    variant={metric.trend === "up" ? "default" : "secondary"}
                    className={
                      metric.trend === "up"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">
              <TrendingUp className="mr-2 h-4 w-4" />
              Analyze Your Facebook Ads
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacebookAdsBestPractices() {
  const practices = [
    {
      icon: Target,
      title: "Audience Targeting",
      description:
        "Use lookalike audiences and detailed targeting to reach high-value customers",
      tips: [
        "Create custom audiences from your best customers",
        "Test different audience sizes",
        "Use interest and behavior targeting",
      ],
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description:
        "Optimize your ad spend with campaign budget optimization and bid strategies",
      tips: [
        "Use campaign budget optimization",
        "Test different bid strategies",
        "Monitor frequency to avoid ad fatigue",
      ],
    },
    {
      icon: Users,
      title: "Creative Testing",
      description:
        "Test multiple ad creatives to find what resonates with your audience",
      tips: [
        "Test different ad formats",
        "Use dynamic creative optimization",
        "Refresh creatives regularly",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Facebook Ads Best Practices
            </h2>
            <p className="text-muted-foreground">
              Proven strategies to maximize your Facebook Ads performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practices.map((practice) => (
              <Card key={practice.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <practice.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{practice.title}</CardTitle>
                  </div>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {practice.tips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FacebookAdsPage({
  integration,
  recipes,
}: FacebookAdsPageProps) {
  return (
    <IntegrationPageTemplate
      integration={integration}
      recipes={recipes}
      customContent={
        <>
          <FacebookAdsROICalculator />
          <FacebookAdsBestPractices />
        </>
      }
    />
  );
}

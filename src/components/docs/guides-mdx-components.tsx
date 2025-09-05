import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Target, 
  Shield, 
  Users, 
  BarChart3, 
  ArrowRight,
  Clock,
  Star
} from "lucide-react";
import Link from "next/link";

export function GuidesOverviewMDXComponents() {
  return {
    // Standard HTML elements with Tailwind classes
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => 
      <h1 className="text-4xl font-bold tracking-tight mb-6" {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => 
      <h2 className="text-3xl font-semibold mb-6 mt-12" {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => 
      <h3 className="text-2xl font-semibold mb-4 mt-8" {...props} />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => 
      <p className="text-muted-foreground mb-6 leading-relaxed" {...props} />,
    
    // Custom components for the guides overview
    GuidesGrid: ({ children }: { children: React.ReactNode }) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {children}
      </div>
    ),
    
    GuideCard: ({ 
      title, 
      description, 
      href, 
      difficulty,
      estimatedTime,
      icon
    }: { 
      title: string;
      description: string;
      href: string;
      difficulty: "beginner" | "intermediate" | "advanced";
      estimatedTime: string;
      icon: string;
    }) => {
      const iconMap = {
        "target": Target,
        "shield": Shield,
        "users": Users,
        "bar-chart": BarChart3,
        "book-open": BookOpen,
        "clock": Clock,
        "star": Star
      };
      
      const IconComponent = iconMap[icon as keyof typeof iconMap] || BookOpen;
      
      const getDifficultyColor = (diff: string) => {
        switch (diff) {
          case "beginner":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
          case "intermediate":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
          case "advanced":
            return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
          default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
        }
      };
      
      return (
        <Card className="group hover:shadow-lg transition-all duration-200 hover:border-primary/20">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {estimatedTime}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </div>
            </div>
            <CardDescription className="leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="ghost" className="w-full gap-2 group-hover:bg-primary/5">
              <Link href={href}>
                Read Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      );
    },

    // Feature highlights for guides
    FeatureHighlight: ({
      title,
      description,
      children
    }: {
      title: string;
      description: string;
      children: React.ReactNode;
    }) => (
      <div className="p-6 rounded-lg border bg-muted/20 my-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    ),

    FeatureList: ({ children }: { children: React.ReactNode }) => (
      <div className="grid md:grid-cols-2 gap-4">
        {children}
      </div>
    ),

    FeatureItem: ({ 
      title, 
      description 
    }: { 
      title: string; 
      description: string; 
    }) => (
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
        <div>
          <h4 className="font-medium mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    ),
  };
}

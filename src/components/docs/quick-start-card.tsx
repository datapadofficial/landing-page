import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, LucideIcon } from "lucide-react";
import Link from "next/link";

interface QuickStartCardProps {
  title?: string;
  description?: string;
  features?: string[];
  badges?: Array<{
    text: string;
    icon?: LucideIcon;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

export function QuickStartCard({
  title = "Quick Start",
  description = "Connect your data source and start analyzing immediately. No setup required.",
  features = [],
  badges = [],
  ctaText = "Get Started",
  ctaHref = "#"
}: QuickStartCardProps) {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-3">
              {description}
            </p>
            {features.length > 0 && (
              <ul className="space-y-1 text-sm mb-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            {badges.length > 0 && (
              <div className="flex gap-2 mb-4">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {badge.icon && <badge.icon className="h-3 w-3" />}
                    {badge.text}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <Button asChild size="lg" className="gap-2">
            <Link href={ctaHref}>
              <ExternalLink className="h-4 w-4" />
              {ctaText}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

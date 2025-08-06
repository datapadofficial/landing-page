import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

interface HeroBlockProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  trustedBy?: string[];
}

export function HeroBlock({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  trustedBy,
}: HeroBlockProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {badge && (
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {badge}
              </Badge>
            </div>
          )}

          <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
            {title}
            <br />
            <span className="text-primary">{subtitle}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground lg:text-2xl">
            {description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link href={secondaryCTA.href}>
                <Play className="mr-2 h-5 w-5" />
                {secondaryCTA.text}
              </Link>
            </Button>
          </div>

          {trustedBy && trustedBy.length > 0 && (
            <div className="mt-16 text-center">
              <p className="mb-6 text-muted-foreground">
                Trusted by the world's most innovative teams
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {trustedBy.map((company, index) => (
                  <div key={index} className="text-lg font-semibold">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

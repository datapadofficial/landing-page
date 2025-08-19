import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedLogo } from "../navigation/aimated-logo/animated-logo";

interface VsHeroProps {
  competitorName: string;
  competitorLogo?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  badgeText?: string;
}

const VsHero = ({
  competitorName,
  competitorLogo,
  subtitle = "No more wasting time on analyzing Excels, CSVs. Get instant answers anywhere, anytime.",
  ctaText = "Try 100% Free",
  secondaryCtaText = "Book a 15m Demo",
  badgeText,
}: VsHeroProps) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10 overflow-visible px-4 md:px-8">
        <div className="flex flex-col items-center gap-12">
          {/* Top Badge */}
          <Badge
            variant="outline"
            className="text-xs uppercase font-medium text-chart-green"
          >
            {badgeText}
          </Badge>

          {/* Main Layout with Large Logos */}
          <div className="flex items-center justify-center gap-16 w-full max-w-6xl relative px-8 md:px-16">
            {/* Left Logo - Datapad */}
            <div className="flex-shrink-0 p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-black-10 dark:bg-white-10 border flex items-center justify-center shadow-2xl -rotate-12">
                <AnimatedLogo
                  className="w-20 h-20 object-contain"
                  isActive={false}
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
              {/* Company Names with vs. */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Datapad
                </h1>
                <div className="text-2xl md:text-3xl font-medium text-muted-foreground/60">
                  vs.
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {competitorName}
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {subtitle}
              </p>

              {/* CTA Button */}
              <div className="flex gap-4">
                <Button size="lg">{ctaText}</Button>
                <Button variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              </div>
            </div>

            {/* Right Logo - Competitor */}
            <div className="flex-shrink-0 p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-black-10 dark:bg-white-10 flex items-center justify-center shadow-2xl border border-input rotate-12">
                {competitorLogo ? (
                  <Image
                    src={competitorLogo}
                    alt={`${competitorName} logo`}
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-gray-600">
                      {competitorName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VsHero };

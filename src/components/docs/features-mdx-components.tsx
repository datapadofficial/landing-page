import React from "react";
import { getFeaturesByCategory } from "@/lib/feature-utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { AttributionLink } from "@/components/attribution-link";

export function FeaturesHero() {
  return (
    <section className="pt-16 sm:pt-24 pb-8">
      <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-4xl">
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="bg-chart-purple/10 text-chart-purple border-chart-purple/20 hover:bg-chart-purple/20"
            >
              🚀 All Features
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full sm:w-fit">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <AttributionLink
                buttonLocation="features-hero-primary"
                searchParams={{}}
              >
                Start Free Trial
              </AttributionLink>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <AttributionLink
                buttonLocation="features-hero-demo"
                searchParams={{}}
              >
                Book a Demo
              </AttributionLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesGrid() {
  const coreFeatures = getFeaturesByCategory("core");
  const integrationFeatures = getFeaturesByCategory("integration");
  const automationFeatures = getFeaturesByCategory("automation");
  const advancedFeatures = getFeaturesByCategory("advanced");

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-16">
          <p className="text-muted-foreground text-lg">
            Complete business intelligence platform with AI-powered features
            designed to transform how you interact with data. From natural
            language queries to automated workflows - everything you need to
            turn data into action.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature) => {
              return (
                <Link
                  key={feature.slug}
                  href={feature.redirectUrl || `/features/${feature.slug}`}
                >
                  <div className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl border bg-background dark:bg-white-10 transition-all duration-300 group-hover:scale-110"
                        style={{ color: `var(--${feature.color})` }}
                      >
                        <DynamicIcon
                          name={feature.icon as IconName}
                          className="size-6"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-foreground/90 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Integration Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Integrations & Connectivity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationFeatures.map((feature) => {
              return (
                <Link
                  key={feature.slug}
                  href={feature.redirectUrl || `/features/${feature.slug}`}
                >
                  <div className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl border bg-background dark:bg-white-10 transition-all duration-300 group-hover:scale-110"
                        style={{ color: `var(--${feature.color})` }}
                      >
                        <DynamicIcon
                          name={feature.icon as IconName}
                          className="size-6"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-foreground/90 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Automation Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Automation & Workflows
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {automationFeatures.map((feature) => {
              return (
                <Link
                  key={feature.slug}
                  href={feature.redirectUrl || `/features/${feature.slug}`}
                >
                  <div className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl border bg-background dark:bg-white-10 transition-all duration-300 group-hover:scale-110"
                        style={{ color: `var(--${feature.color})` }}
                      >
                        <DynamicIcon
                          name={feature.icon as IconName}
                          className="size-6"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-foreground/90 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Advanced Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature) => {
              return (
                <Link
                  key={feature.slug}
                  href={feature.redirectUrl || `/features/${feature.slug}`}
                >
                  <div className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl border bg-background dark:bg-white-10 transition-all duration-300 group-hover:scale-110"
                        style={{ color: `var(--${feature.color})` }}
                      >
                        <DynamicIcon
                          name={feature.icon as IconName}
                          className="size-6"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-foreground/90 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesComparison() {
  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Datapad?</h2>
          <p className="text-muted-foreground text-lg">
            While other tools show you what happened, Datapad tells you what to do next.
            Move beyond static dashboards to actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-chart-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DynamicIcon name="brain" className="w-8 h-8 text-chart-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
            <p className="text-muted-foreground">
              Natural language queries, intelligent insights, and automated analysis 
              that understands your business context.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-chart-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DynamicIcon name="zap" className="w-8 h-8 text-chart-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Actionable Workflows</h3>
            <p className="text-muted-foreground">
              Generate ready-to-implement campaigns, strategies, and content 
              directly from your data insights.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-chart-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DynamicIcon name="layers" className="w-8 h-8 text-chart-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unified Data View</h3>
            <p className="text-muted-foreground">
              Automatically blend data from 50+ sources for comprehensive 
              cross-platform analysis and attribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-3xl font-bold">Ready to Transform Your Data?</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of businesses using Datapad to turn data into competitive advantages.
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <AttributionLink
                buttonLocation="features-cta-primary"
                searchParams={{}}
              >
                Start Free Trial
              </AttributionLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getFeaturesByCategory } from "@/lib/features";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
} from "lucide-react";

const iconMap = {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
};

export default function FeaturesPage() {
  const coreFeatures = getFeaturesByCategory("core");
  const integrationFeatures = getFeaturesByCategory("integration");
  const automationFeatures = getFeaturesByCategory("automation");
  const advancedFeatures = getFeaturesByCategory("advanced");

  return (
    <>
      {/* Hero Section */}
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

            <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Every Feature You Need to Transform Your Data Into Action
            </h1>

            <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
              Discover how Datapad's comprehensive feature set turns your
              scattered data into actionable insights, automated workflows, and
              business-ready deliverables. From AI conversations to automated
              reports - everything you need is here.
            </p>
          </div>

          <div className="relative z-30 flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://app.datapad.io">Start Free Trial</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="https://app.datapad.io">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Badge
                variant="secondary"
                className="bg-chart-purple/10 text-chart-purple border-chart-purple/20 hover:bg-chart-purple/20"
              >
                🚀 All Features
              </Badge>
            </div>
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Complete Data Intelligence Platform
            </h2>
            <p className="text-center text-muted-foreground/80 max-w-3xl mx-auto text-base sm:text-lg">
              From conversational AI to automated insights, every tool you need
              to transform data into business results.
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Core Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature) => {
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];
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
                          {IconComponent && (
                            <IconComponent className="size-6" />
                          )}
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
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];
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
                          {IconComponent && (
                            <IconComponent className="size-6" />
                          )}
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
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];
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
                          {IconComponent && (
                            <IconComponent className="size-6" />
                          )}
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
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];
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
                          {IconComponent && (
                            <IconComponent className="size-6" />
                          )}
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="border bg-black-3 dark:bg-white-3 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Transform Your Data?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience all these features working together in a unified
                platform. Start your free trial and see how Datapad can
                revolutionize your data workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button asChild size="lg">
                  <a href="https://app.datapad.io">Start Free Trial</a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="https://app.datapad.io">Book a Demo</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

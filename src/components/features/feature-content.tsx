"use client";

import { useEffect, useState } from "react";
import { Feature } from "@/types/feature";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowUp, CheckCircle, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { FeatureHero } from "@/components/features/feature-hero";
import { AppVideoPreview } from "@/components/creatives/app-video-preview";
import { MainCTA } from "@/components/main-cta";
import { Faq } from "@/components/faq";

interface FeatureContentProps {
  feature: Feature;
}

export function FeatureContent({ feature }: FeatureContentProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <section className="pt-16 sm:pt-24">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/features">Features</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{feature.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Feature Hero */}
      <FeatureHero feature={feature} />

      {/* Video Preview Section */}
      <AppVideoPreview videoUrl={feature.videoUrl} />

      {/* How It Works Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-12">
            <h2 className="text-3xl font-bold">How {feature.title} Works</h2>
            <p className="text-lg text-muted-foreground">
              {feature.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feature.steps.map((step, index) => {
              return (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: step.color
                        ? `var(--${step.color})/10`
                        : undefined,
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">About {feature.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.longDescription}
              </p>
            </div>

            {/* Benefits and Use Cases Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-500" />
                  Use Cases
                </h3>
                <ul className="space-y-3">
                  {feature.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <MainCTA />

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="outline"
            size="sm"
            className="shadow-lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
      )}
    </>
  );
}

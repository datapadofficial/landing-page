"use client";

import { useEffect, useState, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FeatureDoc } from "@/types/feature-doc";
import { FeatureHero } from "@/components/features/feature-hero";
import { AppVideoPreview } from "@/components/creatives/app-video-preview";
import { MainCTA } from "@/components/main-cta";
import { Faq } from "@/components/faq";



interface FeatureDocContentProps {
  doc: FeatureDoc;
  children: ReactNode; // This will be the rendered MDX content
}

export function FeatureDocContent({ doc, children }: FeatureDocContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Convert doc to Feature format for existing components
  const feature = {
    slug: doc.slug,
    title: doc.title,
    shortDescription: doc.shortDescription,
    longDescription: doc.longDescription,
    icon: doc.icon,
    color: doc.color,
    benefits: doc.benefits,
    useCases: doc.useCases,
    ctaText: doc.ctaText,
    ctaUrl: doc.ctaUrl,
    category: doc.category,
    priority: doc.priority,
    videoUrl: doc.videoUrl,
    redirectUrl: doc.redirectUrl,
    steps: doc.steps,
  };

  // Extract headings from MDX content
  useEffect(() => {
    const timer = setTimeout(() => {
      const headingElements = document.querySelectorAll(
        "#main-title, article h1, article h2, article h3, article h4, article h5, article h6"
      );
      const headingData = Array.from(headingElements).map((element, index) => {
        const id = element.id || `heading-${index}`;
        if (!element.id) {
          element.id = id;
        }
        return {
          id,
          text: element.textContent || "",
          level: parseInt(element.tagName.charAt(1)),
        };
      });
      setHeadings(headingData);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for active heading tracking
  useEffect(() => {
    if (headings.length === 0) return;

    const observerCallback = () => {
      // Get all headings with their positions
      const headingPositions = headings
        .map(({ id }) => {
          const element = document.getElementById(id);
          return {
            id,
            element,
            top: element ? element.getBoundingClientRect().top : Infinity,
          };
        })
        .filter((item) => item.element);

      // Find the current heading (first one that hasn't passed the viewport top)
      // Account for navbar height (~60px) plus some buffer
      const currentHeadingIndex = headingPositions.findIndex(
        (item) => item.top > 120
      );

      // If no heading is below the threshold, we're at the bottom, so use the last heading
      const activeIndex =
        currentHeadingIndex === -1
          ? headingPositions.length - 1
          : Math.max(0, currentHeadingIndex - 1);

      // Set only one active heading
      const activeId = activeIndex >= 0 ? headingPositions[activeIndex].id : "";
      setActiveHeading(activeId);

      // Update back to top button visibility
      setShowBackToTop(window.scrollY > 300);
    };

    // Use a more frequent scroll listener for smoother updates
    const handleScroll = () => {
      observerCallback();
    };

    // Initial call
    observerCallback();

    // Listen to scroll events for real-time updates
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also use intersection observer as backup
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: [0, 0.1, 0.5, 1],
    });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [headings]);

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
                <BreadcrumbPage>{doc.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Feature Hero */}
      <FeatureHero feature={feature} />

      {/* Video Preview Section */}
      <AppVideoPreview videoUrl={doc.videoUrl} />

      {/* How It Works Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-12">
            <h2 className="text-3xl font-bold">How {doc.title} Works</h2>
            <p className="text-lg text-muted-foreground">{doc.shortDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doc.steps.map((step, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ backgroundColor: step.color ? `var(--${step.color})/10` : undefined }}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-12">
            <h2 className="text-3xl font-bold">What You'll Get</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to {doc.title.toLowerCase()} with confidence and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doc.benefits.map((benefit, index) => (
              <div key={index} className="border bg-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDX Content Section */}
      <section className="py-8 sm:py-32 px-4 sm:px-0">
        <div className="container mx-auto px-4">
          {/* Main Content Layout */}
          <div className="relative mt-16 grid gap-14 lg:mt-28 lg:grid-cols-5">
            {/* Main Content */}
            <div className="gap-6 lg:col-span-4">
              <div className="max-w-prose lg:mx-auto">
                {/* Article Content */}
                <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                  <article itemScope itemType="https://schema.org/TechArticle">
                    <meta itemProp="headline" content={doc.title} />
                    <meta itemProp="description" content={doc.seoDescription || doc.shortDescription} />
                    {doc.lastModified && (
                      <meta itemProp="dateModified" content={doc.lastModified} />
                    )}
                    {children}
                  </article>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Table of Contents */}
            {headings.length > 0 && (
              <nav className="sticky top-24 hidden h-fit lg:block">
                <p className="text-muted-foreground text-sm font-medium mb-3">
                  ON THIS PAGE
                </p>
                <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {headings.map(({ id, text, level }) => (
                      <li key={id}>
                        <a
                          className={cn(
                            "border-border block border-l py-1 transition-colors duration-200",
                            level === 2
                              ? "pl-2.5"
                              : level === 3
                              ? "pl-4"
                              : level === 4
                              ? "pl-6"
                              : "pl-2.5",
                            activeHeading === id
                              ? "border-primary text-primary font-medium"
                              : "text-muted-foreground hover:text-primary border-transparent"
                          )}
                          href={`#${id}`}
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back to Top Button */}
                {showBackToTop && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <ArrowUp className="mr-2 h-4 w-4" />
                      Back to Top
                    </Button>
                  </div>
                )}
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <MainCTA />

      {/* FAQ Section */}
      {doc.faqs && doc.faqs.length > 0 && (
        <Faq 
          heading="Frequently Asked Questions" 
          items={doc.faqs}
        />
      )}
    </>
  );
}
